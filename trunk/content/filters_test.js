var filters = new Array();

filters.push({
    name: "Test",
    require: new Array(
        { url: '/',  contains: new Array(/tests(.*)drupal[-]5[.][5|6]/) }
//        { url: '/',  contains: new Array(/tests(.*)drupal[-]5[.]6/) }
//        { url: '/',  contains: new Array(/modules(.*)node.css?/), excludes: new Array(/div(.*)squeeze/) },
    )
});
