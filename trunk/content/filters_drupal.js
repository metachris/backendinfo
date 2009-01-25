/* Drupal Filter */
filters.push({
    name: "Drupal 6.x",
    image: "chrome://backendinfo/skin/drupal.png",
    require: new Array(
        { url: '/',  contains: new Array('modules/system/system.css?', 'modules/node/node.css?', 'modules/user/user.css?') }
    )
});
/* === Drupal 6.x Conditional Filters === */
    filters.push({
        name: "Drupal 6.9",
        parent: "Drupal 6.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "6.9"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.253.2.22 2009/01/14') }
        )
    });
    filters.push({
        name: "Drupal 6.8",
        parent: "Drupal 6.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "6.8"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.253.2.20 2008/12/11') }
        )
    });
    filters.push({
        name: "Drupal 6.7",
        parent: "Drupal 6.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "6.7"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.253.2.18 2008/12/10') }
        )
    });
    filters.push({
        name: "Drupal 6.6",
        parent: "Drupal 6.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "6.6"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.253.2.15 2008/10/22') }
        )
    });
    filters.push({
        name: "Drupal 6.5",
        parent: "Drupal 6.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "6.5"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.253.2.13 2008/10/08') }
        )
    });
    filters.push({
        name: "Drupal 6.4",
        parent: "Drupal 6.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "6.4"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.253.2.11 2008/08/13') }
        )
    });
    filters.push({
        name: "Drupal 6.3",
        parent: "Drupal 6.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "6.3"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.253.2.9 2008/07/09') }
        )
    });
    filters.push({
        name: "Drupal 6.2",
        parent: "Drupal 6.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "6.2"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.253.2.7 2008/04/09') }
        )
    });
    filters.push({
        name: "Drupal 6.1",
        parent: "Drupal 6.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "6.1"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.253.2.5 2008/02/27') }
        )
    });
    filters.push({
        name: "Drupal 6.0",
        parent: "Drupal 6.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "6.0"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.253.2.3 2008/02/13') }
        )
    });

/* Drupal 5: Uses always the @import statement */
filters.push({
    name: "Drupal 5.x",
    image: "chrome://backendinfo/skin/drupal.png",
    require: new Array(
        { url: '/',  contains: new Array('modules/system/system.css";</style>', 'modules/node/node.css";</style>', 'modules/user/user.css";</style>') }
    )
});

/* === Drupal 5.x Conditional Filters === */
    filters.push({
        name: "Drupal 5.9",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.9"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.23 2008/07/23') }
        )
    });
    filters.push({
        name: "Drupal 5.8",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.8"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.21 2008/07/09') }
        )
    });
    filters.push({
        name: "Drupal 5.7",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.7"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.19 2008/01/29') }
        )
    });
    filters.push({
        name: "Drupal 5.6",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.6"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.17 2008/01/10') }
        )
    });
    filters.push({
        name: "Drupal 5.5",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.5"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.15 2007/12/06') }
        )
    });
    filters.push({
        name: "Drupal 5.4",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.4"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.12 2007/12/05') }
        )
    });
    filters.push({
        name: "Drupal 5.3",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.3"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.10 2007/10/17') }
        )
    });
    filters.push({
        name: "Drupal 5.2",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.2"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.8 2007/07/26') }
        )
    });
    filters.push({
        name: "Drupal 5.15",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.15"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.35 2009/01/14') }
        )
    });
    filters.push({
        name: "Drupal 5.14",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.14"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.33 2008/12/11') }
        )
    });
    filters.push({
        name: "Drupal 5.13",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.13"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.31 2008/12/10') }
        )
    });
    filters.push({
        name: "Drupal 5.12",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.12"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.29 2008/10/22') }
        )
    });
    filters.push({
        name: "Drupal 5.11",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.11"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.27 2008/10/08') }
        )
    });
    filters.push({
        name: "Drupal 5.10",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.10"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.25 2008/08/13') }
        )
    });
    filters.push({
        name: "Drupal 5.1",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.1"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.3 2007/01/29') }
        )
    });
    filters.push({
        name: "Drupal 5.0",
        parent: "Drupal 5.x",
        require: new Array(
            { url: '/modules/taxonomy/taxonomy.info', contains: new Array('project = "drupal"', 'version = "5.0"') },
            { url: '/CHANGELOG.txt', contains: new Array('1.173.2.1 2007/01/15') }
        )
    });
