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

filters.push({
    name: "Wordpress",
    image: "chrome://backendinfo/skin/wordpress.png",
    require: new Array(
        { url: '/wp-admin', contains: new Array('wp-admin') },
        { url: '/', contains: new Array('wp-content', 'wp-includes') }
    )
});
