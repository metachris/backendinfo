var recentURLs = new Array(); // Max 5
var prefs;

function addRecent(url) {
    for (var i=0; i<recentURLs.length; i++) {
        if (recentURLs[i] == url) {
            recentURLs[i] = false;
        }
    }
    if (recentURLs.indexOf(url) > -1) {
        recentURLs.pop(recentURLs.indexOf(url));
    }
    recentURLs.push(url);
    showRecentURLs();
}

function showRecentURLs() {
    for (var i=0; i<5; i++) {
        document.getElementById("backenddev_recent" + i).style.display = "none";
    }
    item = 0;
    for (var i=recentURLs.length-1; i>=0; i--) {
        if (recentURLs[i]) {
            document.getElementById("backenddev_recent" + item).label = recentURLs[i];         
            document.getElementById("backenddev_recent" + item).style.display = "block";        
            item++;
        }
        if (item == 5) { break; } 
    }
}

function showDevStatus(){
    var url = document.getElementById("backenddev_url").value;
    
    addRecent(url);
     
    var filters = new Array();
    try {
        eval(document.getElementById("backenddev_filter").value);
    } catch(e) {    
        alert(e);
        return ;
    }
    if (filters.length < 1) {
        alert("Error: No filters found in the source code!");
        return ;
    }
    
    var params = {
        inn:{
            url: url, 
            filters: filters 
        }, 
        out:null
    };       

    prefs.setCharPref("testurl", recentURLs.join(" | "));
    prefs.setCharPref("testfilters", document.getElementById("backenddev_filter").value);

    window.openDialog("chrome://backendinfo/content/devstatus.xul", "", "chrome, dialog, resizable=yes", params).focus();
}

function setRecent(i) {
    url = recentURLs[recentURLs.length-(i+1)];
    if (url) {
        document.getElementById("backenddev_url").value = url;
    }
}

function onLoad() {
    // Load recent urls and previous filter
    prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
    prefs = this.prefs.getBranch("extensions.backendinfo.");
    prefs.QueryInterface(Components.interfaces.nsIPrefBranch2);
    
    if (prefs.getCharPref("testurl")) {
        for each (var u in prefs.getCharPref("testurl").split(" | ")) {
            if ((u) && (u != "false")) {
                recentURLs.push(u);
            }
        }
    }
    
    // Show Last
    if (recentURLs.length > 0) {
        document.getElementById("backenddev_url").value = recentURLs[recentURLs.length-1];
        showRecentURLs();
    } 
    
    // Show Last Filter
    if (prefs.getCharPref("testfilters")) {
        document.getElementById("backenddev_filter").value = prefs.getCharPref("testfilters");
    }    
}

function onHelp() {
    window.open("http://www.backendinfo.com/new-filter/developer-toolbox/");
    return ;
/*    
    var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
    var mainWindow = wm.getMostRecentWindow("navigator:browser");
    gBrowser = mainWindow.getBrowser();
    gBrowser.selectedTab = gBrowser.addTab("http://www.backendinfo.com");
    gBrowser.focus();
*/
}