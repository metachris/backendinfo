function $(e) { return document.getElementById(e); } 
function L(s) { $("backendstatus_log").value += s; }

var filters;

function onLoad() {
//    $("backendstatus_status").value = "Request Sent";
    // Eval Filters
    
    //window.setTimeout("loadFailed()", 500);
    $("backendstatus_url").value = window.arguments[0].inn.url;
    filters = window.arguments[0].inn.filters;
    $("backendstatus_filtercount").value = filters.length;
    L("Hi");
//    alert(filters);
}

function loadFailed() {
    L("Loading of the filters failed");
}