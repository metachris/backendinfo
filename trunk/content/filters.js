var filters = new Array();

filters.push({
    name: "Drupal 6.x",
    image: "chrome://backendinfo/skin/drupal.png",
    require: new Array(
        { url: '/user/login', contains: new Array('modules/system/defaults.css', '</body>') },
        { url: '/?q=user/login', contains: new Array('modules/system/defaults.css', '</body>') }
    )
});

filters.push({
    name: "Drupal 5.x",
    image: "chrome://backendinfo/skin/drupal.png",
    require: new Array(
        { url: '/user/login', contains: new Array('modules/system/defaults.css', '</BODY>') },
        { url: '/?q=user/login', contains: new Array('modules/system/defaults.css', '</BODY>') }
    )
});

/* === WORDPRESS 2.x Base Filter ===*/
filters.push({
    name: "Wordpress 2.x",
    image: "chrome://backendinfo/skin/wordpress.png",
    require: new Array(
        { url: '/', contains: new Array('wp-content/themes', 'xmlrpc.php') },
        { url: '/wp-admin', contains: new Array('wp-admin') }
    )
});

/* === WORDPRESS 2.x Conditional Filters === */
    filters.push({
        name: "Wordpress 2.7",
        parent: "Wordpress 2.x",
        require: new Array(
            { url: '/readme.html', contains: new Array('wp-admin', 'Version 2.7') }
        )
    });
    filters.push({
        name: "Wordpress 2.6",
        parent: "Wordpress 2.x",
        require: new Array(
            { url: '/readme.html', contains: new Array('wp-admin', 'Version 2.6') }
        )
    });
    filters.push({
        name: "Wordpress 2.5",
        parent: "Wordpress 2.x",
        require: new Array(
            { url: '/readme.html', contains: new Array('wp-admin', 'Version 2.5') }
        )
    });
    filters.push({
        name: "Wordpress 2.3",
        parent: "Wordpress 2.x",
        require: new Array(
            { url: '/readme.html', contains: new Array('wp-admin', 'Version 2.3') }
        )
    });
    filters.push({
        name: "Wordpress 2.2",
        parent: "Wordpress 2.x",
        require: new Array(
            { url: '/readme.html', contains: new Array('wp-admin', 'Version 2.2') }
        )
    });
    filters.push({
        name: "Wordpress 2.1",
        parent: "Wordpress 2.x",
        require: new Array(
            { url: '/readme.html', contains: new Array('wp-admin', 'Version 2.1') }
        )
    });

