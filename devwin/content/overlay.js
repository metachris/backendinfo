var backendInfo;

window.addEventListener("load", function(e) { 
    backendInfo = new BackendInfo(filters);
    backendInfo.load(); 
}, false);
