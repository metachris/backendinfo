function LOG(msg) {
    var consoleService = Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService);
    consoleService.logStringMessage(msg);
}

var backendInfo;

var IMAGE_INFO = "chrome://backendinfo/skin/information.png";
var IMAGE_MAIN = "chrome://backendinfo/skin/magnifier.png";
var IMAGE_WAIT = "chrome://backendinfo/skin/load1.gif";
var IMAGE_ERROR = "chrome://backendinfo/skin/error.png";
var IMAGE_COG = "chrome://backendinfo/skin/cog.png";
var IMAGE_ID = "backendinfo_statusbox";
var IMAGE_TEMP = false; // Parent filter set this for undefined children filter images
var IMAGE_BLANK = " ";

function changeTab() {
    backendInfo.setURL(content.location);
}

function BackendInfo(filters) {
    this.cache = {};  // url : html_str
    this.results = {}; // url: result_filter_plugin
    
    this.filters = filters; // Array of filter Objects

    this.current_url = "";  // eg. http://linuxuser.at/blog/post.html
    this.base_url = "";     // eg. http://linuxuser.at
    this.node_url = "";     // eg. http://linuxuser.at/blog
    this.check_url = "";    // either base_url or node_url, depending on type of check
    this.test_url = "/iaPqwe79xy9clAKSDWWWA2aaweee2qq4adsdc"; // URL to test if any URL will return status code 200 (no 404) 
    
    this.testing = false;   // true while filters are being tested
    this.foundBase = false; // true if a basic filter is found, while checking the children filters
    this.instantCheck = false; // Popup problems with FF2. Directly check node on click!
    this.hasPopup = true;
    
    /* Status for a check-run over all filters */
    this.requests = 0;
    this.prefs = false;
    this.always200 = false;   // Some websites return 404 for any url (even test_url). keep track of that behavious
    
    /* On Load -- Initialization */
    this.load = function() {
        if (!(document.getElementById("clipmenu"))) {
            LOG("no clipmenu");
            this.instantCheck = true;
            this.hasPopup = false;
        }
        this.container = gBrowser.tabContainer;
        this.container.addEventListener("TabSelect", changeTab, false);

        this.appcontent = document.getElementById("appcontent");   // browser
        this.appcontent.addEventListener("DOMContentLoaded", changeTab, false);

        this.prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
        this.prefs = this.prefs.getBranch("extensions.backendinfo.");
    }

    this.changePrefs = function(a) {
        LOG("Change prefs: " + a);
        alert(this.prefs.getBoolPref("boolpref"));
    }
    
    this.clickStatusIcon = function() {
        if (this.instantCheck) {
            this.checkURL(this.node_url, false, true);
        }
    }
    
    /* Setting the image in the Statusbar */
    this.setStatusImage = function(img) {
        if (!(img)) { img = IMAGE_INFO; }
        document.getElementById(IMAGE_ID).style.background = "url('" + img + "') top left no-repeat";
    }
    
    /* Whenever a new URL is loaded / active (also on a new tab) */
    this.setURL = function(url) {
        url = String(url);
        // Is called sometimes twice due to two event handlers: prevent that
        if (url == this.current_url) { return ; }
        this.current_url = url;

        if ((url.indexOf("http") == -1) || (url.indexOf("//") == -1)) {
            LOG("no http in url: " + url);
            this.base_url = "";
            this.node_url = "";
            
            // Popup Entries
            if (this.hasPopup) {
                document.getElementById("clipmenu1").label = url;
                document.getElementById("clipmenu2").style.display = "none";
            }

            this.setStatusImage(IMAGE_MAIN);
            document.getElementById("backendinfo_statusbox").tooltipText = "Visit a website first";

            return;
        }
        
        LOG("new valid URL: " + url);
        this.extractURL(url);
                
        // Check if already tested
        if (this.results[this.node_url]) {
            // LOG("found: " + this.results[this.node_url].image);
            // Set statusbar to results
            this.showResult(this.results[this.node_url]);
        } else {
            if (this.prefs.getBoolPref("boolpref")) {
                this.checkURL(this.node_url, false, true);
                return ;
            } else {
                // Reset Statusbar to Main    
                // LOG("not found -- using: " + IMAGE_MAIN);
                this.setStatusImage(IMAGE_MAIN);
                document.getElementById("backendinfo_statusbox").tooltipText = "Detect backend software";
            }        
        }
    }
    
    /* Extract base_url and node_url from full_url */
    this.extractURL = function(url) {
        prefix = url.substr(0, url.indexOf("//")+2);
        s = url.substr(url.indexOf("//")+2);
        
        base_url = (s.indexOf("/") == -1) ? s : s.substr(0, s.indexOf("/"));
        this.base_url = prefix + base_url;
        
        node_url = (s.indexOf("/") == s.lastIndexOf("/")) ? base_url : s.substr(0, s.lastIndexOf("/"));
        this.node_url = prefix + node_url;
        
        if (this.hasPopup) {
            // Prepare PopUp Menu
            document.getElementById("clipmenu1").label = this.base_url;
            if (this.base_url == this.node_url) {
                document.getElementById("clipmenu2").style.display = "none";
            } else {
                document.getElementById("clipmenu2").label = this.node_url;
                document.getElementById("clipmenu2").style.display = "block";        
            }
        }
    }

    /* Click on a detect popup entry */
    this.clickCheck = function(i) {    
        if (i == 3) {
            // Click on custom url
            url = prompt("URL to check:", this.node_url);
            if (url) {
                if (url.substr(url.length-1) == "/") {
                    url = url.substr(0, url.length-1);
                }
                LOG("custom url: " + url);
                this.checkURL(url, false, true);
            }
        } else if (i == 2) {
            this.checkURL(this.node_url, false, true);
        } else {
            this.checkURL(this.base_url, false, true);
        }
    }
        
    /* Check a given URL (using either (1) all basic filters, or (2) all filters with a given parentFilter) */
    this.checkURL = function(url, parentFilter, preSearchTest) {
        /*
            If ParentFilter !== false, only children filters of this one will be tested. 
            preSearchtest: if true, only the test for random URLs (always 200) will be performed
        */
        if (url.indexOf("//") == -1) {
            return ;
        }
        
        LOG("checkURL: " + url + " parent: " + parentFilter + " preSearchTest: " + preSearchTest);
        this.check_url = url;
        this.parentFilter = parentFilter;
        
        // Cache check        
        // Only if it's not an in depth search!
        if (!(parentFilter)) { 
            // Check if already cached result
            if (this.results[this.check_url]) {
                this.showResult(this.results[url]);
                return ;
            }
            IMAGE_TEMP = false;
            this.foundBase = false;
            
            if (this.prefs.getBoolPref("loadicon")) {
                this.setStatusImage(IMAGE_WAIT);
            } else {
                this.setStatusImage(IMAGE_BLANK);            
            }
        }

        this.testing = true;
        if (preSearchTest) {
            // Only check the test URL (always 200?)
            this.cacheURL(url + this.test_url, this.preSearchComplete);
            return ;
        }
        
        /* Cache filter url's */
        for (var i=0; i<this.filters.length; i++) {
            if (this.testing) {
                if (parentFilter) {
                    // Only use filters with this parent
                    if (this.filters[i]["parent"]) {
                        if (this.filters[i]["parent"] == parentFilter.name) {
                            // LOG("testing child filter: " + this.filters[i].name);
                            for (var j=0; j<this.filters[i].require.length; j++) {
                                this.cacheURL(url + this.filters[i].require[j].url, this.cachingComplete);                    
                            }                            
                        }
                    }
                } else {
                    // Only use filters without parents now
                    if (!(this.filters[i]["parent"])) {
                        // LOG("testing filter: " + this.filters[i].name);
                        for (var j=0; j<this.filters[i].require.length; j++) {
                            this.cacheURL(url + this.filters[i].require[j].url, this.cachingComplete);                    
                        }
                    }
                }
            }
        }
    }

    /* Cache an URL */
    this.cacheURL = function(url, callback) {
        if (this.cache[url]) {
            /* Avoid parallel caching of the same url:
                1. while caching, set this.cache[url] = 1
            */
            if ((this.cache[url] != 1) && (callback)) {
                this.requests += 1;
                callback(url, this.cache[url]);
            }
            return ;
        }
        
        // Set cache to "being updated", to avoid parallel caching of the same url's
        this.cache[url] = 1;
        this.requests += 1;
        
        // Cache URL now
        this.saveURL(url, callback);
    }    
     
    /* Saves an URL via HttpRequest to the cache, and triggers a callback if completed */       
    this.saveURL = function(url, callback) {
        var httpRequest = null;
        
        httpRequest = new XMLHttpRequest();        
        httpRequest.open("GET", url, true);
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState == 4) {
//                LOG("statusCode: " + httpRequest.status);
                if (httpRequest.status == 200) {
                    // Site Found
                    backendInfo.cache[url] = httpRequest.responseText;
                } else {
                    backendInfo.cache[url] = 404;
                }

                // Request finished -- Start Callback
                if (callback) {
                    callback(url, backendInfo.cache[url]);
                }
            }
        };
        httpRequest.send(null);
    }
    
    this.preSearchComplete = function(url, html) {
        backendInfo.requests -= 1;
        //LOG("Pre Search Complete: " + url + " .. HTML: " + html);
        if (html == 404) {
            backendInfo.always200 = false;
        } else {
            backendInfo.always200 = true;
        }
        // Start normal tests
        LOG("preSearchComplete: always200 = " + backendInfo.always200);
        backendInfo.checkURL(backendInfo.check_url, false);
    
    }
    /* Caching of an URL complete: Check all filters with this url
       ! Called from outside, so has no access to this. -- use backendInfo. instead ! 
    */
    this.cachingComplete = function(url, html) {
        // Only process, if testing still in progress (if nothing else is found) 
        backendInfo.requests -= 1;
//        LOG("Requests (minus current): " + backendInfo.requests);
        // LOG("requests open: " + backendInfo.requests);
        if (!(backendInfo.testing)) { return ; }
        
        if (html == 404) {
            // LOG("404: " + url + " -> skip");
            if ((backendInfo.requests == 0) && (backendInfo.testing)) {
                // LOG("foundBase: " + backendInfo.foundBase);
                backendInfo.testing = false;
                
                if (backendInfo.foundBase) {
                    backendInfo.setStatusImage(IMAGE_TEMP);
                } else {
                    backendInfo.results[backendInfo.check_url] = 404;
                    backendInfo.showResult();
                }
            }
            return ;
        }
        
        // LOG("200: " + url + " -> check now -- HTML: " + html);
        
        /* Step through all filters and check if one is valid */
        for (var i=0; i<backendInfo.filters.length; i++) {
            itemFound = false;

            /* IF backendInfo.parentFilter is set, only check filters that are this filter's child! */
            if (backendInfo.parentFilter) {
                // Skip if no parent 
                if (!(backendInfo.filters[i].parent)) {
                    // LOG("skip filter " + backendInfo.filters[i].name);  
                    continue ;
                }
                
                // Skip if different parent 
                if (backendInfo.filters[i].parent != backendInfo.parentFilter.name) {
                    // LOG("skip filter " + backendInfo.filters[i].name);  
                    continue ;
                }
            }
            
            /* For each filters, check require_anyof */
            for (var j=0; j<backendInfo.filters[i].require.length; j++) {
                itemFound = false;
                r_url = backendInfo.filters[i].require[j].url;
                r_strings = backendInfo.filters[i].require[j].contains;

                /* IF ALWAYS200 AND NO R_STRINGS SUPPLIED: SKIP THIS REQUIREMENT-SET !!
                   Because any URL will be counted as valid. 
                */
                if ((backendInfo.always200) && ((r_strings.length == 0) || ((r_strings.length == 1) && (r_strings[0].length == 0)))) {
                    // Skip this requirement
                    // LOG("always 200 + empty contains --> continue");
                    continue ;
                }                
                 
                // Check if /user/login is part of http://...../user/login
                if (url.indexOf(r_url) > -1) {
                    // More specific: Check if /user/login is last part of http://...../user/login
                    if (url.substr(url.length-r_url.length) == r_url) {
                        // URL MATCHES -- Item could match total -- Check strings!
                        itemFound = true;
                        if (r_strings) {
                            // Test all strings
                            for (var n=0; n<r_strings.length; n++) {
                                if (html.indexOf(r_strings[n]) == -1) {
                                    itemFound = false;
                                }
                            }
                        }
                        
                        if (itemFound) {
                            // FOUND !!! STOP NOW :-)
                            // This item matches all requirements!!
                            // Stop processing of further incoming requests
                            LOG("ITEM FOUND: " + backendInfo.filters[i].name + " (via " + url + ")");
                            backendInfo.testing = false;
                            backendInfo.foundBase = true;
                            // If child, use parent image?
                            if (backendInfo.filters[i].image) {
                                IMAGE_TEMP = backendInfo.filters[i].image;
                            } else {
                                // Attach image to imageless filter
                                if (IMAGE_TEMP) {
                                    backendInfo.filters[i].image = IMAGE_TEMP;
                                } else {
                                    backendInfo.filters[i].image = IMAGE_INFO;                                
                                }
                            }
                            // LOG(backendInfo.filters[i].image + " -- " + IMAGE_TEMP);
                            
                            // Display Results
                            backendInfo.results[backendInfo.check_url] = backendInfo.filters[i];    
                            backendInfo.showResult(backendInfo.filters[i]);
                            
                            // Check if this Result has children
                            backendInfo.checkFilterChildren(backendInfo.filters[i]);
                            
                            return ;
                        }
                    } // End If last
                } // End if url.indexOf
            }  // End for each require            
        } // End for each filter
        
        /* No filter applies! */
         // LOG("requests: " + backendInfo.requests + " testing: " + backendInfo.testing + " foundBase: " + backendInfo.foundBase);
        if ((backendInfo.requests == 0) && (backendInfo.testing)) {
            // All requests are back, but none are found valid!
            if (!(backendInfo.foundBase)) {
                backendInfo.testing = false;
                backendInfo.results[backendInfo.check_url] = 404;
                backendInfo.showResult();
            }
        }

    } // End cachingComplete

    /* Displays the results for a given filter plugin */
    this.showResult = function(filter) {
        // 404 marks a checked url without a detected backend
        if ((filter) && (filter != 404)) {
            // LOG("IMAGE_TEMP: " + IMAGE_TEMP + "  -- filter.image: " + filter.image);
            this.setStatusImage(filter.image);
            document.getElementById("backendinfo_statusbox").tooltipText = filter.name;
        } else {
            // Finished Check without Valid Results
            this.setStatusImage(IMAGE_ERROR);
            document.getElementById("backendinfo_statusbox").tooltipText = "Backend was not identified";
        }
    }

    /* If a basic filter is recognized, check for children of this filter */
    this.checkFilterChildren = function(filter) {
        LOG("checking for children of " + filter.name);
        for (var i=0; i<this.filters.length; i++) {
            if (this.filters[i].parent) {
                if (this.filters[i].parent == filter.name) {
                    // As long as at least 1 filter has this as parent, start a new checkrun!
                    LOG("Subfilter found, trying...");
                    this.checkURL(this.check_url, filter);
                    return ;
                }
            } 
        }
    }    
}

window.addEventListener("load", function(e) { 
    backendInfo = new BackendInfo(filters);
    backendInfo.load(); 
}, false);
