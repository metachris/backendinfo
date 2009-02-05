/* MoinMoin Wiki Filter */
filters.push({
    name: "MoinMoin Wiki",
    image: "chrome://backendinfo/skin/moinmoin.png",
    require: new Array(
        // Detect any node with these two filters:
        { url: '/',  contains: new Array('/common/js/common.js', '/FindPage', '/HelpOnFormatting', '/TitleIndex' ) },
        { url: '/',  contains: new Array('css/common.css', 'css/screen.css', 'css/print.css', '/FindPage', '/HelpOnFormatting', '/TitleIndex' ) },
        
        // These filters apply to 80% of tested sites
//        { url: '/wiki/modern/css/common.css',  contains: new Array('MoinMoin Default Styles') },
//        { url: '/wiki/modern/css/common.css',  contains: new Array('div.codearea pre span.ResWord2', 'div.codearea pre span.Preprc') }        
        { url: '/wiki/rightsidebar/css/common.css',  contains: new Array('MoinMoin Default Styles') },
        { url: '/wiki/rightsidebar/css/common.css',  contains: new Array('div.codearea pre span.ResWord2', 'div.codearea pre span.Preprc') }        
    )
});

    filters.push({ /* 100% */
        name: "MoinMoin Wiki 1.6",
        parent: "MoinMoin Wiki",
        require: new Array(
            { url: '/wiki/rightsidebar/css/common.css',  contains: new Array('a.ircs:before  {content: url(../img/moin-telnet.png); margin: 0 0.2em;}') },
            { url: '/moin_static18/rightsidebar/css/common.css',  contains: new Array('a.ircs:before  {content: url(../img/moin-telnet.png); margin: 0 0.2em;}') },
            { url: '/moin_static164/rightsidebar/css/common.css',  contains: new Array('a.ircs:before  {content: url(../img/moin-telnet.png); margin: 0 0.2em;}') },
            { url: '/moin_static171/rightsidebar/css/common.css',  contains: new Array('a.ircs:before  {content: url(../img/moin-telnet.png); margin: 0 0.2em;}') }
        )
    });
    filters.push({ /* 100% if /wiki/ */
        name: "MoinMoin Wiki 1.5.x",
        parent: "MoinMoin Wiki",
        require: new Array(
            { url: '/wiki/rightsidebar/css/common.css',  contains: new Array('a.irc:before {content: url(../img/moin-telnet.png); margin: 0 0.2em;}') },
            { url: '/moin_static18/rightsidebar/css/common.css',  contains: new Array('a.irc:before {content: url(../img/moin-telnet.png); margin: 0 0.2em;}') },
            { url: '/moin_static164/rightsidebar/css/common.css',  contains: new Array('a.irc:before {content: url(../img/moin-telnet.png); margin: 0 0.2em;}') },
            { url: '/moin_static171/rightsidebar/css/common.css',  contains: new Array('a.irc:before {content: url(../img/moin-telnet.png); margin: 0 0.2em;}') }
        )
    });
        filters.push({ /* 100% */
            name: "MoinMoin Wiki 1.5.0",
            parent: "MoinMoin Wiki 1.5.x",
            require: new Array(
                { url: '/wiki/rightsidebar/css/common.css',  contains: new Array('Replacement for html 3 u tag', 'font-size: 0.85em;') } ,
                { url: '/moin_static18/rightsidebar/css/common.css',  contains: new Array('Replacement for html 3 u tag', 'font-size: 0.85em;') }, 
                { url: '/moin_static164/rightsidebar/css/common.css',  contains: new Array('Replacement for html 3 u tag', 'font-size: 0.85em;') }, 
                { url: '/moin_static171/rightsidebar/css/common.css',  contains: new Array('Replacement for html 3 u tag', 'font-size: 0.85em;') } 
            )
        });
        filters.push({ /* 100% */
            name: "MoinMoin Wiki 1.5.1",
            parent: "MoinMoin Wiki 1.5.x",
            require: new Array(
                { url: '/wiki/rightsidebar/css/common.css',  contains: new Array('Replacement for html 3 u tag', 'font-size: 0.7em') }, 
                { url: '/moin_static18/rightsidebar/css/common.css',  contains: new Array('Replacement for html 3 u tag', 'font-size: 0.7em') }, 
                { url: '/moin_static164/rightsidebar/css/common.css',  contains: new Array('Replacement for html 3 u tag', 'font-size: 0.7em') }, 
                { url: '/moin_static171/rightsidebar/css/common.css',  contains: new Array('Replacement for html 3 u tag', 'font-size: 0.7em') } 
            )
        });
        filters.push({ 
            name: "MoinMoin Wiki 1.5.2-6",
            parent: "MoinMoin Wiki 1.5.x",
            require: new Array(
                { url: '/wiki/rightsidebar/css/common.css',  contains: new Array('deprecated html 3 <u> element', 'IE sucks') },  
                { url: '/moin_static18/rightsidebar/css/common.css',  contains: new Array('deprecated html 3 <u> element', 'IE sucks') },  
                { url: '/moin_static164/rightsidebar/css/common.css',  contains: new Array('deprecated html 3 <u> element', 'IE sucks') },  
                { url: '/moin_static171/rightsidebar/css/common.css',  contains: new Array('deprecated html 3 <u> element', 'IE sucks') }  
            )
        });

            filters.push({ /* 100% */
                name: "MoinMoin Wiki 1.5.2",
                parent: "MoinMoin Wiki 1.5.2-6",
                require: new Array(
                    { url: '/wiki/applets/moinFCKplugins/macro/fckplugin.js',  contains: new Array("FCKCommands.RegisterCommand('Macro', new FCKDialogCommand('Macro', FCKLang.MacroDlgTitle, FCKConfig.WikiBasePath + '?action=fckdialog&dialog=macro', 440, 300, FCKSelection.CheckForNodeNames, noFormat));") },  
                    { url: '/moin_static18/applets/moinFCKplugins/macro/fckplugin.js',  contains: new Array("FCKCommands.RegisterCommand('Macro', new FCKDialogCommand('Macro', FCKLang.MacroDlgTitle, FCKConfig.WikiBasePath + '?action=fckdialog&dialog=macro', 440, 300, FCKSelection.CheckForNodeNames, noFormat));") },  
                    { url: '/moin_static164/applets/moinFCKplugins/macro/fckplugin.js',  contains: new Array("FCKCommands.RegisterCommand('Macro', new FCKDialogCommand('Macro', FCKLang.MacroDlgTitle, FCKConfig.WikiBasePath + '?action=fckdialog&dialog=macro', 440, 300, FCKSelection.CheckForNodeNames, noFormat));") },  
                    { url: '/moin_static171/applets/moinFCKplugins/macro/fckplugin.js',  contains: new Array("FCKCommands.RegisterCommand('Macro', new FCKDialogCommand('Macro', FCKLang.MacroDlgTitle, FCKConfig.WikiBasePath + '?action=fckdialog&dialog=macro', 440, 300, FCKSelection.CheckForNodeNames, noFormat));") }  
                )
            });
            filters.push({ /* can also detect 1.5.2 */
                name: "MoinMoin Wiki 1.5.3",
                parent: "MoinMoin Wiki 1.5.2-6",
                require: new Array(
                    { url: '/wiki/classic/css/screen.css',  contains: new Array('1px solid #gray') },  
                    { url: '/moin_static18/classic/css/screen.css',  contains: new Array('1px solid #gray') },  
                    { url: '/moin_static164/classic/css/screen.css',  contains: new Array('1px solid #gray') },  
                    { url: '/moin_static171/classic/css/screen.css',  contains: new Array('1px solid #gray') }  
                )
            });
            filters.push({ /*  .4,5,6 is the same */
                name: "MoinMoin Wiki 1.5.4",
                parent: "MoinMoin Wiki 1.5.2-6",
                require: new Array(
                    { url: '/wiki/classic/css/screen.css',  contains: new Array('#preview, #previewbelow {\n\tborder: 1px solid gray;') },  
                    { url: '/moin_static18/classic/css/screen.css',  contains: new Array('#preview, #previewbelow {\n\tborder: 1px solid gray;') },  
                    { url: '/moin_static164/classic/css/screen.css',  contains: new Array('#preview, #previewbelow {\n\tborder: 1px solid gray;') },  
                    { url: '/moin_static171/classic/css/screen.css',  contains: new Array('#preview, #previewbelow {\n\tborder: 1px solid gray;') }  
                )
            });

        /* 1.5.7 - 1.5.9 */
        filters.push({ /* 100% -- .7,8,9 are the same*/
            name: "MoinMoin Wiki 1.5.7",
            parent: "MoinMoin Wiki 1.5.x",
            require: new Array(
                { url: '/wiki/rightsidebar/css/msie.css',  contains: new Array('MoinMoin') },
                { url: '/moin_static18/rightsidebar/css/msie.css',  contains: new Array('MoinMoin') },
                { url: '/moin_static164/rightsidebar/css/msie.css',  contains: new Array('MoinMoin') },
                { url: '/moin_static171/rightsidebar/css/msie.css',  contains: new Array('MoinMoin') } 
            )
        });

/* === < MoinMoin 1.5.0 === */
    filters.push({ /* 100% */
        name: "MoinMoin Wiki 1.3",
        parent: "MoinMoin Wiki",
        require: new Array(
            { url: '/wiki/rightsidebar/css/common.css',  contains: new Array('h1 is out of the content div!') },
            { url: '/moin_static18/rightsidebar/css/common.css',  contains: new Array('h1 is out of the content div!') },
            { url: '/moin_static164/rightsidebar/css/common.css',  contains: new Array('h1 is out of the content div!') },
            { url: '/moin_static171/rightsidebar/css/common.css',  contains: new Array('h1 is out of the content div!') }
        )
    });
        filters.push({ /* 100% */
            name: "MoinMoin Wiki 1.3.0",
            parent: "MoinMoin Wiki 1.3",
            require: new Array(
                { url: '/wiki/rightsidebar/css/screen.css',  contains: new Array('#credits, #timings {') },
                { url: '/moin_static18/rightsidebar/css/screen.css',  contains: new Array('#credits, #timings {') },
                { url: '/moin_static164/rightsidebar/css/screen.css',  contains: new Array('#credits, #timings {') },
                { url: '/moin_static171/rightsidebar/css/screen.css',  contains: new Array('#credits, #timings {') }
            )
        });
        filters.push({ /* 100% */
            name: "MoinMoin Wiki 1.3.1",
            parent: "MoinMoin Wiki 1.3",
            require: new Array(
                { url: '/wiki/rightsidebar/css/screen.css',  contains: new Array('#credits, #version, #timings{', '.info') },
                { url: '/moin_static18/rightsidebar/css/screen.css',  contains: new Array('#credits, #version, #timings{', '.info') },
                { url: '/moin_static164/rightsidebar/css/screen.css',  contains: new Array('#credits, #version, #timings{', '.info') },
                { url: '/moin_static171/rightsidebar/css/screen.css',  contains: new Array('#credits, #version, #timings{', '.info') }
            )
        });
        filters.push({ /* 100% */
            name: "MoinMoin Wiki 1.3.4",
            parent: "MoinMoin Wiki 1.3",
            require: new Array(
                { url: '/wiki/rightsidebar/css/screen.css',  contains: new Array('#credits, #version, #timings{', '        display: inline;') },
                { url: '/moin_static18/rightsidebar/css/screen.css',  contains: new Array('#credits, #version, #timings{', '        display: inline;') },
                { url: '/moin_static164/rightsidebar/css/screen.css',  contains: new Array('#credits, #version, #timings{', '        display: inline;') },
                { url: '/moin_static171/rightsidebar/css/screen.css',  contains: new Array('#credits, #version, #timings{', '        display: inline;') }
            )
        });
        filters.push({ /* 100% */
            name: "MoinMoin Wiki 1.3.5",
            parent: "MoinMoin Wiki 1.3",
            require: new Array(
                { url: '/wiki/rightsidebar/css/screen.css',  contains: new Array('#credits, #version, #timings{', '.actionsmenu select {') },
                { url: '/moin_static18/rightsidebar/css/screen.css',  contains: new Array('#credits, #version, #timings{', '.actionsmenu select {') },
                { url: '/moin_static164/rightsidebar/css/screen.css',  contains: new Array('#credits, #version, #timings{', '.actionsmenu select {') },
                { url: '/moin_static171/rightsidebar/css/screen.css',  contains: new Array('#credits, #version, #timings{', '.actionsmenu select {') }
            )
        });
