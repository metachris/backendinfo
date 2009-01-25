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
    

/* === PHPBB === */
filters.push({
    name: "phpBB 3.x",
    image: "chrome://backendinfo/skin/phpbb.png",
    require: new Array(
        { url: '/includes/ucp/ucp_profile.php', contains: new Array('') },
        { url: '/styles/prosilver/style.cfg', contains: new Array('phpBB') }
//        { url: '/', contains: new Array('Powered by <a href="http://www.phpbb.com/"') },
    )
});

/* === phpBB 3 Details === */
    filters.push({
        name: "phpBB 3.0.4",
        parent: "phpBB 3.x",
        require: new Array(
            { url: '/styles/subsilver2/style.cfg', contains: new Array('3.0.4') },
            { url: '/styles/prosilver/style.cfg', contains: new Array('3.0.4') },
            { url: '/docs/INSTALL.html', contains: new Array('_to_3.0.4') }
        )
    });
    filters.push({
        name: "phpBB 3.0.3",
        parent: "phpBB 3.x",
        require: new Array(
            { url: '/styles/subsilver2/style.cfg', contains: new Array('3.0.3') },
            { url: '/styles/prosilver/style.cfg', contains: new Array('3.0.3') },
            { url: '/docs/INSTALL.html', contains: new Array('_to_3.0.3') }
        )
    });
    filters.push({
        name: "phpBB 3.0.2",
        parent: "phpBB 3.x",
        require: new Array(
            { url: '/styles/subsilver2/style.cfg', contains: new Array('3.0.2') },
            { url: '/styles/prosilver/style.cfg', contains: new Array('3.0.2') },
            { url: '/docs/INSTALL.html', contains: new Array('_to_3.0.2') }
        )
    });
    filters.push({
        name: "phpBB 3.0.0/3.0.1",
        parent: "phpBB 3.x",
        require: new Array(
            { url: '/styles/subsilver2/style.cfg', contains: new Array('3.0.0') },
            { url: '/styles/prosilver/style.cfg', contains: new Array('3.0.0') },
            { url: '/docs/INSTALL.html', contains: new Array('_to_3.0.1') }
        )
    });

/* === phpBB 2 === */
filters.push({
    name: "phpBB 2.x",
    image: "chrome://backendinfo/skin/phpbb.png",
    require: new Array(
        { url: '/includes/usercp_email.php', contains: new Array('') },
        { url: '/templates/subSilver/subSilver.cfg', contains: new Array('') }
//        { url: '/', contains: new Array('Powered by <a href="http://www.phpbb.com/"') },
    )
});

/* === phpBB 2 Details === */
    filters.push({
        name: "phpBB 2.0.23",
        parent: "phpBB 2.x",
        require: new Array(
            { url: '/docs/INSTALL.html', contains: new Array('_to_2.0.23') }
        )
    });
    filters.push({
        name: "phpBB 2.0.22",
        parent: "phpBB 2.x",
        require: new Array(
            { url: '/docs/INSTALL.html', contains: new Array('_to_2.0.22') }
        )
    });
    filters.push({
        name: "phpBB 2.0.21",
        parent: "phpBB 2.x",
        require: new Array(
            { url: '/docs/INSTALL.html', contains: new Array('_to_2.0.21') }
        )
    });
    filters.push({
        name: "phpBB 2.0.20",
        parent: "phpBB 2.x",
        require: new Array(
            { url: '/docs/INSTALL.html', contains: new Array('_to_2.0.20') }
        )
    });
    filters.push({
        name: "phpBB 2.0.19",
        parent: "phpBB 2.x",
        require: new Array(
            { url: '/docs/INSTALL.html', contains: new Array('_to_2.0.19') }
        )
    });
    filters.push({
        name: "phpBB 2.0.18",
        parent: "phpBB 2.x",
        require: new Array(
            { url: '/docs/INSTALL.html', contains: new Array('_to_2.0.18') }
        )
    });
    filters.push({
        name: "phpBB 2.0.17",
        parent: "phpBB 2.x",
        require: new Array(
            { url: '/docs/INSTALL.html', contains: new Array('_to_2.0.17') }
        )
    });
    filters.push({
        name: "phpBB 2.0.16",
        parent: "phpBB 2.x",
        require: new Array(
            { url: '/docs/INSTALL.html', contains: new Array('phpBB 2.0.16') }
        )
    });
    filters.push({
        name: "phpBB 2.0.15",
        parent: "phpBB 2.x",
        require: new Array(
            { url: '/docs/INSTALL.html', contains: new Array('phpBB 2.0.15') }
        )
    });
    filters.push({
        name: "phpBB 2.0.14",
        parent: "phpBB 2.x",
        require: new Array(
            { url: '/docs/INSTALL.html', contains: new Array('phpBB 2.0.14') }
        )
    });
    filters.push({
        name: "phpBB 2.0.13",
        parent: "phpBB 2.x",
        require: new Array(
            { url: '/docs/INSTALL.html', contains: new Array('phpBB 2.0.13') }
        )
    });
    filters.push({
        name: "phpBB 2.0.12",
        parent: "phpBB 2.x",
        require: new Array(
            { url: '/docs/INSTALL.html', contains: new Array('phpBB 2.0.12') }
        )
    });
    filters.push({
        name: "phpBB 2.0.11",
        parent: "phpBB 2.x",
        require: new Array(
            { url: '/docs/INSTALL.html', contains: new Array('phpBB 2.0.11') }
        )
    });


/* === Mixed Backends === */
filters.push({
    name: "Typo3",
    require: new Array(
        { url: '/', contains: new Array('This website is powered by TYPO3') },
        { url: '/', contains: new Array('templates/css/typo3.') }
    )
});

filters.push({
    name: "Django",
    require: new Array(
        { url: '/admin', contains: new Array('Django') }
    )
});

