/* MoinMoin Wiki Filter */

/* 2 Ways of detecting!!
    
    1. Read the tag in the main HTML File (generator DokuWiki Release ... 
    2. Check under the hood for the css files
*/
filters.push({
    name: "DokuWiki",
    image: "chrome://backendinfo/skin/dokuwiki.png",
    require: new Array(
        { url: '/',  contains: new Array('/lib/exe/css.php', '/lib/tpl/', 'DokuWiki') },
        { url: '/',  contains: new Array('name="generator" content="DokuWiki') },
        { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki') },
        { url: '/wiki/',  contains: new Array('/lib/exe/css.php', '/lib/tpl/', 'DokuWiki') },
        { url: '/feed.php',  contains: new Array('DokuWiki') }
    )
});

    /* < 2005-07-01 */
    filters.push({ 
        name: "DokuWiki <2005-07-01",
        parent: "DokuWiki",
        require: new Array( // /feed.css + style.css is removed after 2005-05-07
            { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2005-05') },
            { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2005-02') },
            { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2004') },

            { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2005-05') },
            { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2005-02') },
            { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2004') },

            // This URL is almost too generic -- compensation via unique strings
            { url: '/style.css',  contains: new Array(' ---------------------------- Diff rendering --------------------------', '-------------------- Text formatting --------------------------------', 'background: transparent url(images/link_icon.gif) 0px 1px no-repeat;') }
        )
    });
        filters.push({
            name: "DokuWiki 2004-10-19", 
            parent: "DokuWiki <2005-07-01",
            require: new Array(
                { url: '/',  contains: new Array('dokuwiki-2004-10-19') },
                { url: '/wiki/',  contains: new Array('dokuwiki-2004-10-19') },
                { url: '/VERSION',  contains: new Array('2005-07-01') }
            )
        });
        filters.push({
            name: "DokuWiki 2005-02-06", 
            parent: "DokuWiki <2005-07-01",
            require: new Array(
                { url: '/',  contains: new Array('generator" content="DokuWiki Release 2005-02-06') },
                { url: '/wiki/',  contains: new Array('generator" content="DokuWiki Release 2005-02-06') },
                { url: '/VERSION',  contains: new Array('2005-02-06') }
            )
        });
        filters.push({
            name: "DokuWiki 2005-05-07", 
            parent: "DokuWiki <2005-07-01",
            require: new Array( 
                { url: '/',  contains: new Array('generator" content="DokuWiki Release 2005-05-07') },
                { url: '/wiki/',  contains: new Array('generator" content="DokuWiki Release 2005-05-07') },
                { url: '/VERSION',  contains: new Array('2005-05-07') }
            )
        });

    /* >= 2005-07-01 */
    filters.push({ 
        name: "DokuWiki 2005-07-01+",
        parent: "DokuWiki",
        require: new Array( // /feed.css is removed after 2005-05-07
            { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2005-07') },
            { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2005-09') },
            { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2006') },
            { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2007') },
            { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2008') },
            { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2009') },

            { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2005-07') },
            { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2005-09') },
            { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2006') },
            { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2007') },
            { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2008') },
            { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2009') },
            
            // This URL is almost too generic:
            { url: '/lib/styles/style.css',  contains: new Array('/* syntax highlighting code */', '.code .coMULTI') }
        )
    });
        filters.push({
            name: "DokuWiki 2005-07-01", 
            parent: "DokuWiki 2005-07-01+",
            require: new Array(
                { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2005-07-01') },
                { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2005-07-01') },
                { url: '/lib/tpl/default/design.css',  contains: new Array('right:225px;;') },
                { url: '/VERSION',  contains: new Array('2005-07-01') }
            )
        });
        filters.push({
            name: "DokuWiki 2005-07-13", 
            parent: "DokuWiki 2005-07-01+",
            require: new Array(
                { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2005-07-13') },
                { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2005-07-13') },
                { url: '/VERSION',  contains: new Array('2005-07-13') }
            )
        });
        filters.push({ 
            name: "DokuWiki 2005-09-19",
            parent: "DokuWiki 2005-07-01+",
            require: new Array(
                { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2005-09-19') },
                { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2005-09-19') },
                { url: '/lib/tpl/default/design.css',  contains: new Array('div.meta img.thumb{') },
                { url: '/VERSION',  contains: new Array('2005-09-19') }
            )
        });
        filters.push({ 
            name: "DokuWiki 2005-09-22",
            parent: "DokuWiki 2005-07-01+",
            require: new Array(
                { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2005-09-22') },
                { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2005-09-22') },
                { url: '/lib/tpl/default/design.css',  contains: new Array('background: transparent url(images/bullet.gif) 0px 1px no-repeat;', 'div.imagemeta img.thumb{') },
                { url: '/VERSION',  contains: new Array('2005-09-22') }
            )
        });
        filters.push({ 
            name: "DokuWiki 2006-03-05",
            parent: "DokuWiki 2005-07-01+",
            require: new Array(
                { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2006-03-05') },
                { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2006-03-05') },
                { url: '/lib/tpl/default/design.css',  contains: new Array('div.dokuwiki td.diff-header {') },
                { url: '/VERSION',  contains: new Array('2006-03-05') }
            )
        });
        filters.push({ 
            name: "DokuWiki 2006-03-09e",
            parent: "DokuWiki 2005-07-01+",
            require: new Array(
                { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2006-03-09e') },
                { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2006-03-09e') },
                { url: '/lib/tpl/default/design.css',  contains: new Array('div.dokuwiki input.edit, div.dokuwiki select.edit', 'div.dokuwiki table.diff th') },
                { url: '/VERSION',  contains: new Array('2006-03-09e') }
            )
        });
        filters.push({ 
            name: "DokuWiki 2006-11-06",
            parent: "DokuWiki 2005-07-01+",
            require: new Array(
                { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2006-11-06') },
                { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2006-11-06') },
                { url: '/lib/tpl/default/design.css',  contains: new Array('div.dokuwiki span.diffchange {', 'nice alphatransparency background except') },
                { url: '/VERSION',  contains: new Array('2006-11-06') }
            )
        });
        filters.push({ 
            name: "DokuWiki rc2007-05-24",
            parent: "DokuWiki 2005-07-01+",
            require: new Array(
                { url: '/',  contains: new Array('name="generator" content="DokuWiki Release rc2007-05-24') },
                { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release rc2007-05-24') },
                { url: '/lib/styles/style.css',  contains: new Array('em em.u {', '.code .sc1  {') },
                { url: '/VERSION',  contains: new Array('rc2007-05-24') }
            )
        });
        
        filters.push({ 
            name: "DokuWiki 2007-06-26b+",
            parent: "DokuWiki 2005-07-01+",
            require: new Array(
                { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2007-06') },
                { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2008-') },
                { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2007-06') },
                { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2008-') },
                { url: '/lib/styles/style.css',  contains: new Array('.code .me2  {') },
                { url: '/VERSION',  contains: new Array('2007-06-26b') },
                { url: '/VERSION',  contains: new Array('rc2008-04-11') },
                { url: '/VERSION',  contains: new Array('2008-05-05') },
                { url: '/VERSION',  contains: new Array('rc2009-01-26') }
            )
        });

            filters.push({ 
                name: "DokuWiki 2007-06-26b",
                parent: "DokuWiki 2007-06-26b+",
                require: new Array(
                    { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2007-06-26b') },
                    { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2007-06-26b') },
                    { url: '/lib/tpl/default/design.css',  contains: new Array('div.dokuwiki a.fn_top {') },
                    { url: '/VERSION',  contains: new Array('2007-06-26b') }
                )
            });
    
            filters.push({ 
                name: "DokuWiki rc2008-04-11",
                parent: "DokuWiki 2007-06-26b+",
                require: new Array(
                    { url: '/',  contains: new Array('name="generator" content="DokuWiki Release rc2008-04-11') },
                    { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release rc2008-04-11') },
                    { url: '/VERSION',  contains: new Array('rc2008-04-11') }
                )
            });

            filters.push({ 
                name: "DokuWiki 2008-05-05",
                parent: "DokuWiki 2007-06-26b+",
                require: new Array(
                    { url: '/',  contains: new Array('name="generator" content="DokuWiki Release 2008-05-05') },
                    { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release 2008-05-05') },
                    { url: '/lib/plugins/popularity/lang/sv/intro.txt',  contains: new Array('DokuWikis\nutveckling') },
                    { url: '/VERSION',  contains: new Array('2008-05-05') }
                )
            });
            filters.push({ 
                name: "DokuWiki rc2009-01-26",
                parent: "DokuWiki 2007-06-26b+",
                require: new Array(
                    { url: '/',  contains: new Array('name="generator" content="DokuWiki Release rc2009-01-26') },
                    { url: '/wiki/',  contains: new Array('name="generator" content="DokuWiki Release rc2009-01-26') },
                    { url: '/lib/plugins/popularity/lang/sv/intro.txt',  contains: new Array('DokuWikis utveckling') },
                    { url: '/VERSION',  contains: new Array('rc2009-01-26') }
                )
            });
