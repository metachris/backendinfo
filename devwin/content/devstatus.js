function $(e) { return document.getElementById(e); } 
function L(s) {
    if (s.indexOf("FILTER") > -1) {
        // Result
        if (s.indexOf("NO ") > -1) {
            // Not found
            $("backendstatus_status").value = "Filter Not Found";
            $("backendstatus_status").style.color = "red";            
        } else {
            // Found
            $("backendstatus_status").value = "Filter Found";
            $("backendstatus_status").style.color = "green";            
        }
    } 
    $("backendstatus_log").value += s; 
}

var backendinfo;

function onLoad() {
    $("backendstatus_url").value = window.arguments[0].inn.url;

    filters = window.arguments[0].inn.filters;
    $("backendstatus_filtercount").value = filters.length;

    backendInfo = new BackendInfo(filters, L); // L passes the logging function to the backend as devmode
    backendInfo.setURL(window.arguments[0].inn.url);
}
