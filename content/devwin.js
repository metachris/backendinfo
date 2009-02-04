function showDevStatus(){
    var filters = new Array();
    try {
        eval(document.getElementById("backenddev_filter").value);
    } catch(e) {    
        alert(e);
        return ;
    }
    if (filters.length < 1) {
        alert("Error: No 'filters.push(' in the source code!");
    }
    
    var params = {
        inn:{
            url: document.getElementById("backenddev_url").value, 
            filters: filters 
        }, 
        out:null
    };       
    window.openDialog("chrome://backendinfo/content/devstatus.xul", "", "chrome, dialog, resizable=yes", params).focus();
}
