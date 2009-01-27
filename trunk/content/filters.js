var filters = new Array();

/* === WORDPRESS 2.x Base Filter ===*/
filters.push({
    name: "Wordpress 2.x",
    image: "chrome://backendinfo/skin/wordpress.png",
    require: new Array(
        { url: '/', contains: new Array('wp-content/themes', 'xmlrpc.php') },
        { url: '/wp-admin', contains: new Array('wp-admin/css') }
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


/* === MediaWiki === */
filters.push({
    name: "MediaWiki 1.x",
    image: "chrome://backendinfo/skin/mediawiki.png",
    require: new Array(
        { url: '/skins/monobook/main.css', contains: new Array('#column-content') },
        { url: '/includes/normal/Makefile', contains: new Array('MediaWiki') },
        { url: '/includes/zhtable/Makefile', contains: new Array('MediaWiki') },
        { url: '/maintenance/database.sql', contains: new Array('{$wgDBname}') },
        { url: '/', contains: new Array('common/shared.css', 'monobook/main.css', 'monobook/IE50Fixes.css', 'MediaWiki') },
        { url: '/RELEASE-NOTES', contains: new Array('MediaWiki release notes') }
    )
});

/* === MediaWiki Details === */
    filters.push({
        name: "MediaWiki 1.9",
        parent: "MediaWiki 1.x",
        require: new Array(
            { url: '/RELEASE-NOTES', contains: new Array('== MediaWiki 1.9') }
        )
    });
    filters.push({
        name: "MediaWiki 1.8",
        parent: "MediaWiki 1.x",
        require: new Array(
            { url: '/RELEASE-NOTES', contains: new Array('== MediaWiki 1.8') }
        )
    });
    filters.push({
        name: "MediaWiki 1.7",
        parent: "MediaWiki 1.x",
        require: new Array(
            { url: '/RELEASE-NOTES', contains: new Array('== MediaWiki 1.7') }
        )
    });
    filters.push({
        name: "MediaWiki 1.6",
        parent: "MediaWiki 1.x",
        require: new Array(
            { url: '/RELEASE-NOTES', contains: new Array('== MediaWiki 1.6') }
        )
    });
    filters.push({
        name: "MediaWiki 1.13",
        parent: "MediaWiki 1.x",
        require: new Array(
            { url: '/RELEASE-NOTES', contains: new Array('== MediaWiki 1.13') }
        )
    });
    filters.push({
        name: "MediaWiki 1.12",
        parent: "MediaWiki 1.x",
        require: new Array(
            { url: '/RELEASE-NOTES', contains: new Array('== MediaWiki 1.12') }
        )
    });
    filters.push({
        name: "MediaWiki 1.11",
        parent: "MediaWiki 1.x",
        require: new Array(
            { url: '/RELEASE-NOTES', contains: new Array('== MediaWiki 1.11') }
        )
    });
    filters.push({
        name: "MediaWiki 1.10",
        parent: "MediaWiki 1.x",
        require: new Array(
            { url: '/RELEASE-NOTES', contains: new Array('== MediaWiki 1.10') }
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
        { url: '/admin', contains: new Array('Django') },
        { url: '/admin', contains: new Array('css/login.css', 'label for="id_password">', 'this_is_the_login_form') }
    )
});

    filters.push({
        name: "Django 0.90",
        parent: "Django",
        require: new Array(
            { url: '/media/admin/css/global.css', contains: new Array('text-align:left; min-height:55px; _height:55px;') },
            { url: '/admin_media/css/global.css', contains: new Array('text-align:left; min-height:55px; _height:55px;') },
            { url: '/admin-media/css/global.css', contains: new Array('text-align:left; min-height:55px; _height:55px;') },
            { url: '/admin/media/css/global.css', contains: new Array('text-align:left; min-height:55px; _height:55px;') },
            { url: '/media_admin/css/global.css', contains: new Array('text-align:left; min-height:55px; _height:55px;') },
            { url: '/media/css/global.css', contains: new Array('text-align:left; min-height:55px; _height:55px;') }
        )
    });
    filters.push({
        name: "Django 0.91.3",
        parent: "Django",
        require: new Array(
            { url: '/media/admin/css/global.css', contains: new Array('#header { width:100%; }', 'Copyright (c) 2005 Lawrence Journal-World') },
            { url: '/admin_media/css/global.css', contains: new Array('#header { width:100%; }', 'Copyright (c) 2005 Lawrence Journal-World') },
            { url: '/admin-media/css/global.css', contains: new Array('#header { width:100%; }', 'Copyright (c) 2005 Lawrence Journal-World') },
            { url: '/admin/media/css/global.css', contains: new Array('#header { width:100%; }', 'Copyright (c) 2005 Lawrence Journal-World') },
            { url: '/media_admin/css/global.css', contains: new Array('#header { width:100%; }', 'Copyright (c) 2005 Lawrence Journal-World') },
            { url: '/media/css/global.css', contains: new Array('#header { width:100%; }', 'Copyright (c) 2005 Lawrence Journal-World') }
        )
    });
    filters.push({
        name: "Django 0.95.4",
        parent: "Django",
        require: new Array(
            { url: '/media/admin/css/global.css', contains: new Array('"Lucida Grande","Bitstream Vera Sans",Verdana,Arial,sans-serif;', 'body { margin:0; padding:0; font-size:12px; font-family:') },
            { url: '/admin_media/css/global.css', contains: new Array('"Lucida Grande","Bitstream Vera Sans",Verdana,Arial,sans-serif;', 'body { margin:0; padding:0; font-size:12px; font-family:') },
            { url: '/admin-media/css/global.css', contains: new Array('"Lucida Grande","Bitstream Vera Sans",Verdana,Arial,sans-serif;', 'body { margin:0; padding:0; font-size:12px; font-family:') },
            { url: '/admin/media/css/global.css', contains: new Array('"Lucida Grande","Bitstream Vera Sans",Verdana,Arial,sans-serif;', 'body { margin:0; padding:0; font-size:12px; font-family:') },
            { url: '/media_admin/css/global.css', contains: new Array('"Lucida Grande","Bitstream Vera Sans",Verdana,Arial,sans-serif;', 'body { margin:0; padding:0; font-size:12px; font-family:') },
            { url: '/media/css/global.css', contains: new Array('"Lucida Grande","Bitstream Vera Sans",Verdana,Arial,sans-serif;', 'body { margin:0; padding:0; font-size:12px; font-family:') }
        )
    });
    filters.push({
        name: "Django 0.96.3",
        parent: "Django",
        require: new Array(
            { url: '/media/admin/css/global.css', contains: new Array('"Lucida Grande","DejaVu Sans","Bitstream Vera Sans"', '.module h2, .module caption { margin') },
            { url: '/admin_media/css/global.css', contains: new Array('"Lucida Grande","DejaVu Sans","Bitstream Vera Sans"', '.module h2, .module caption { margin') },
            { url: '/admin-media/css/global.css', contains: new Array('"Lucida Grande","DejaVu Sans","Bitstream Vera Sans"', '.module h2, .module caption { margin') },
            { url: '/admin/media/css/global.css', contains: new Array('"Lucida Grande","DejaVu Sans","Bitstream Vera Sans"', '.module h2, .module caption { margin') },
            { url: '/media_admin/css/global.css', contains: new Array('"Lucida Grande","DejaVu Sans","Bitstream Vera Sans"', '.module h2, .module caption { margin') },
            { url: '/media/css/global.css', contains: new Array('"Lucida Grande","DejaVu Sans","Bitstream Vera Sans"', '.module h2, .module caption { margin') }
        )
    });
    filters.push({
        name: "Django 1.0",
        parent: "Django",
        require: new Array(
            { url: '/media/admin/css/global.css', contains: new Array('a.section:link, a.section:visited', "\ninput[type=submit].default:active { background-image") },
            { url: '/admin_media/css/global.css', contains: new Array('a.section:link, a.section:visited', "\ninput[type=submit].default:active { background-image") },
            { url: '/admin-media/css/global.css', contains: new Array('a.section:link, a.section:visited', "\ninput[type=submit].default:active { background-image") },
            { url: '/admin/media/css/global.css', contains: new Array('a.section:link, a.section:visited', "\ninput[type=submit].default:active { background-image") },
            { url: '/media_admin/css/global.css', contains: new Array('a.section:link, a.section:visited', "\ninput[type=submit].default:active { background-image") },
            { url: '/media/css/global.css', contains: new Array('a.section:link, a.section:visited', "\ninput[type=submit].default:active { background-image") }
        )
    });
    filters.push({
        name: "Django 1.0.2",
        parent: "Django",
        require: new Array(
            { url: '/media/admin/css/global.css', contains: new Array('a.section:link, a.section:visited', '.button.default, input[type=submit') },
            { url: '/admin_media/css/global.css', contains: new Array('a.section:link, a.section:visited', '.button.default, input[type=submit') },
            { url: '/admin-media/css/global.css', contains: new Array('a.section:link, a.section:visited', '.button.default, input[type=submit') },
            { url: '/admin/media/css/global.css', contains: new Array('a.section:link, a.section:visited', '.button.default, input[type=submit') },
            { url: '/media_admin/css/global.css', contains: new Array('a.section:link, a.section:visited', '.button.default, input[type=submit') },
            { url: '/media/css/global.css', contains: new Array('a.section:link, a.section:visited', '.button.default, input[type=submit') }
        )
    });

/*
            { url: '/media/admin/css/login.css', contains: new Array('') }.
            { url: '/admin_media/css/login.css', contains: new Array('') }.
            { url: '/admin-media/css/login.css', contains: new Array('') }.
            { url: '/admin/media/css/login.css', contains: new Array('') }.
            { url: '/media_admin/css/login.css', contains: new Array('') }.
            { url: '/media/css/login.css', contains: new Array('') }.
*/