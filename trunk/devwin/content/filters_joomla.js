/* TODO: Check toolbar.css */
filters.push({
    name: "Joomla",
    image: "chrome://backendinfo/skin/joomla.png",
    require: new Array(
        { url: '/', contains: new Array(/[<]meta name[=]["]Generator["]( |\t)content[=]["]Joomla[!]/i) }, // "        
        { url: '/htaccess.txt', contains: new Array('@package Joomla', 'Joomla! is Free Software') },
        /* 1.5.x only: */
        { url: '/templates/system/css/toolbar.css', contains: new Array('@package Joomla') },
        /* 1.0.x only: */
        { url: '/templates/css/offline.css', contains: new Array('@package Joomla') },
        { url: '/mambots/index.html', contains: new Array('<html><body bgcolor="#FFFFFF"></body></html>') }
    )
});
    /* 1.5.x */
    filters.push({
        name: "Joomla 1.5.x",
        parent: "Joomla",
        require: new Array(
            { url: '/', contains: new Array(/[<]meta name[=]["]generator["]( |\t)content[=]["]Joomla[!]/) }, // "        
            { url: '/', contains: new Array('<meta name="generator" content="Joomla! 1.5') },
            { url: '/htaccess.txt', contains: new Array('@copyright Copyright (C) 2005 - 2008 Open Source Matters') },
            { url: '/templates/system/css/toolbar.css', contains: new Array('@package Joomla') },
            { url: '/libraries/tcpdf/README.TXT', contains: new Array('TCPDF') } // With 1.5.0
        )
    });
        filters.push({
            name: "Joomla 1.5.9",
            parent: "Joomla 1.5.x",
            require: new Array(
                { url: '/templates/ja_purity/js/ja.rightcol.js', contains: new Array('el.titleEl.className = rightCollapseDefault;') },
                { url: '/templates/beez/templateDetails.xml', contains: new Array('http://www.joomla.org/xml/dtd/1.5/template-install.dtd') }
                //maybe weak { url: '/libraries/openid/Auth/Yadis/index.html', contains: new Array('') }
                //maybe weak { url: '/language/en-GB/en-GB.xml', contains: new Array('<version>1.5.9</version>') }                    
            )
        });
        filters.push({
            name: "Joomla 1.5.8",
            parent: "Joomla 1.5.x",
            require: new Array(
                { url: '/language/en-GB/en-GB.xml', contains: new Array('<version>1.5.8</version>') }                    
            )
        });
        filters.push({
            name: "Joomla 1.5.7",
            parent: "Joomla 1.5.x",
            require: new Array(
                { url: '/language/en-GB/en-GB.xml', contains: new Array('<version>1.5.7</version>') }                    
            )
        });
        
        filters.push({
            name: "Joomla 1.5.0/1",
            parent: "Joomla 1.5.x",
            require: new Array(
                { url: '/templates/beez/css/template_rtl.css', contains: new Array('template_rtl.css 9765') },
                { url: '/htaccess.txt', contains: new Array('@version $Id: htaccess.txt 9795') },  // only unique htaccess.txt for 1.5.0
                { url: '/language/en-GB/en-GB.ini', contains: new Array(/en[-]GB[.]ini (9913|9990)/) }                    
            )
        });
            filters.push({
                name: "Joomla 1.5.0",
                parent: "Joomla 1.5.0/1",
                require: new Array(
                    { url: '/htaccess.txt', contains: new Array('# Only use one of the two SEF sections that follow.  Lines that') },
                    { url: '/htaccess.txt', contains: new Array('htaccess.txt 9795') },
                    { url: '/language/en-GB/en-GB.ini', contains: new Array('en-GB.ini 9913') }                    
                )
            });
            filters.push({
                name: "Joomla 1.5.1",
                parent: "Joomla 1.5.0/1",
                require: new Array(
                    { url: '/htaccess.txt', contains: new Array('htaccess.txt 9975') },
                    { url: '/libraries/domit/timer.php', excludes: new Array('') },
                    { url: '/language/en-GB/en-GB.ini', contains: new Array('en-GB.ini 9990') }                    
                )
            });
            
        filters.push({
            name: "Joomla 1.5.2/3",
            parent: "Joomla 1.5.x",
            require: new Array(
                { url: '/templates/beez/css/template_rtl.css', contains: new Array('template_rtl.css 10054') }, 
                { url: '/htaccess.txt', contains: new Array('@version $Id: htaccess.txt 9795') },  // only unique htaccess.txt for 1.5.0
                { url: '/language/en-GB/en-GB.ini', contains: new Array(/en[-]GB[.]ini (10053|10208)/) }                    
            )
        });
            filters.push({
                name: "Joomla 1.5.2",
                parent: "Joomla 1.5.2/3",
                require: new Array(
                    { url: '/language/en-GB/en-GB.xml', contains: new Array('<pdfFontName>freesans</pdfFontName> ') },                    
                    { url: '/templates/system/css/general.css', contains: new Array('z-index:13000;'), excludes: new Array('.button2-left .blank {') },
                    { url: '/language/en-GB/en-GB.ini', contains: new Array('en-GB.ini 10053') }                    
                )
            });
            filters.push({
                name: "Joomla 1.5.3",
                parent: "Joomla 1.5.2/3",
                require: new Array(
                    { url: '/language/en-GB/en-GB.xml', contains: new Array('<pdfFontName>freesans</pdfFontName>\n') },
                    { url: '/templates/system/css/general.css', contains: new Array('z-index:13000;', '.button2-left .blank {') },
                    { url: '/language/en-GB/en-GB.ini', contains: new Array('en-GB.ini 10208') }                    
                )
            });
        
        /* 1.5.4 - 1.5.9 */
        filters.push({
            name: "Joomla 1.5.4+",
            parent: "Joomla 1.5.x",
            require: new Array(
                { url: '/templates/beez/css/template_rtl.css', contains: new Array('template_rtl.css 10387') }, 
                { url: '/templates/ja_purity/styles/header/blue/style.css', contains: new Array('a') }
            )
        });
            filters.push({
                name: "Joomla 1.5.4",
                parent: "Joomla 1.5.4+",
                require: new Array(
                    { url: '/templates/ja_purity/styles/header/blue/style.css', contains: new Array('#ja-cssmenu {') }
                )
            });
            filters.push({
                name: "Joomla 1.5.5/6", // Differences only inside .php files... couldn't find differences with js
                parent: "Joomla 1.5.4+",
                require: new Array(
                    { url: '/templates/ja_purity/styles/header/blue/style.css', contains: new Array('#ja-mainnav ul.menu li a:hover,') }
                )
            });
            
            /* 1.5.7 - 1.5.9 */
            filters.push({
                name: "Joomla 1.5.7/8",
                parent: "Joomla 1.5.4+",
                require: new Array(
                    { url: '/templates/ja_purity/styles/header/blue/style.css', contains: new Array('#ja-mainnav ul, #ja-mainnav li {') }
                )
            });
                filters.push({
                    name: "Joomla 1.5.7",
                    parent: "Joomla 1.5.7/8",
                    require: new Array(
                        { url: '/templates/beez/html/com_weblinks/weblinks/index.html', contains: new Array('body') }
                    )
                });
                filters.push({
                    name: "Joomla 1.5.8",
                    parent: "Joomla 1.5.7/8",
                    require: new Array(
                        { url: '/templates/beez/html/com_weblinks/weblink/index.html', contains: new Array('body') }
                    )
                });

    /* Joomla 1.0.x */
    filters.push({
        name: "Joomla 1.0.x",
        parent: "Joomla",
        require: new Array(
            { url: '/', contains: new Array(/[<]meta name[=]["]Generator["]( |\t)content[=]["]Joomla[!]/) }, // "
            { url: '/', contains: new Array('<meta name="Generator" content="Joomla! - Copyright') },
            { url: '/htaccess.txt', contains: new Array('@copyright Copyright (C) 2005 Open Source Matters') },
            { url: '/templates/css/offline.css', contains: new Array('@package Joomla') },
            { url: '/mambots/index.html', contains: new Array('<html><body bgcolor="#FFFFFF"></body></html>') }
        )
    });    

        /* 1.0.x Subfilter: 1.0.0 - 1.0.15 */
        filters.push({
            name: "Joomla 1.0.1/2",
            parent: "Joomla 1.0.x",
            require: new Array(
                { url: '/htaccess.txt', contains: new Array('@version $Id: htaccess.txt 49') },
                { url: '/htaccess.txt', contains: new Array('2005-09-15 02:55:27Z rhuk') }
            )
        });
        filters.push({
            name: "Joomla 1.0.3",
            parent: "Joomla 1.0.x",
            require: new Array(
                { url: '/htaccess.txt', contains: new Array('@version $Id: htaccess.txt 425') },                    
                { url: '/htaccess.txt', contains: new Array('2005-10-09 18:23:50Z stingrey') }
            )
        });
        filters.push({
            name: "Joomla 1.0.4/5",
            parent: "Joomla 1.0.x",
            require: new Array(
                { url: '/htaccess.txt', contains: new Array('@version $Id: htaccess.txt 1007') },                    
                { url: '/htaccess.txt', contains: new Array('2005-11-13 17:33:59Z stingrey') }
            )
        });
        filters.push({
            name: "Joomla 1.0.6/7",
            parent: "Joomla 1.0.x",
            require: new Array(
                { url: '/htaccess.txt', contains: new Array('@version $Id: htaccess.txt 1572') },                   
                { url: '/htaccess.txt', contains: new Array('2005-12-29 05:53:33Z eddieajau') }
            )
        });
        filters.push({
            name: "Joomla 1.0.8",
            parent: "Joomla 1.0.x",
            require: new Array(
                { url: '/htaccess.txt', contains: new Array('@version $Id: htaccess.txt 2370') }
            )
        });
        filters.push({
            name: "Joomla 1.0.9",
            parent: "Joomla 1.0.x",
            require: new Array(
                { url: '/htaccess.txt', contains: new Array('@version $Id: htaccess.txt 2368') }
            )
        });
        filters.push({
            name: "Joomla 1.0.10",
            parent: "Joomla 1.0.x",
            require: new Array(
                { url: '/htaccess.txt', contains: new Array('@version $Id: htaccess.txt 4085') },                    
                { url: '/htaccess.txt', contains: new Array('2006-06-21 16:03:54Z stingrey') }
            )
        });
        filters.push({
            name: "Joomla 1.0.11",
            parent: "Joomla 1.0.x",
            require: new Array(
                { url: '/htaccess.txt', contains: new Array('@version $Id: htaccess.txt 4756') },                    
                { url: '/htaccess.txt', contains: new Array('2006-08-25 16:07:11Z stingrey') }
            )
        });
        filters.push({
            name: "Joomla 1.0.12+",
            parent: "Joomla 1.0.x",
            require: new Array(
                { url: '/htaccess.txt', contains: new Array('@version $Id: htaccess.txt 5975') },                    
                { url: '/htaccess.txt', contains: new Array('2006-12-11 01:26:33Z robs') }
            )
        });
            filters.push({
                name: "Joomla 1.0.12",
                parent: "Joomla 1.0.12+",
                require: new Array(
                    { url: '/help/screen.users.edit2.html', contains: new Array('User Manager') }                    
                )
            });
            filters.push({
                name: "Joomla 1.0.13",
                parent: "Joomla 1.0.12+",
                require: new Array(
                    { url: '/help/screen.users.edit.html', contains: new Array('<meta name="license" content="http://www.gnu.org/copyleft/gpl.html GNU/GPL') }                    
                )
            });
            filters.push({
                name: "Joomla 1.0.14/15",
                parent: "Joomla 1.0.12+",
                title: "Joomla 1.0.15 is similar to 1.0.14, only with a handful of changed code-lines",
                require: new Array(
                    { url: '/help/screen.users.edit.html', contains: new Array('<meta name="license" content="http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL') }                    
                )
            });
