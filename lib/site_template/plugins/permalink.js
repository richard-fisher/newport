(function () {
    window.addEventListener('hashchange', function () {
        window.location.reload(true);
    }, false);
    // Add id and permailink to every article
    var articles = document.getElementsByTagName("article");
    for (var i = 0; i < articles.length; i++) {
        let id = articles[i].getElementsByTagName("h1")[0].id;
        articles[i].id = id;
        var paras = articles[i].getElementsByTagName("p");
        var pos = paras.length - 1;
        paras[pos].innerHTML = paras[pos].innerHTML + '  <a href="#' + id + '" title="Permanent link to post" onclick="window.location.reload(true);">#</a>';
    }
    // Check if url contains link to article
    const link = window.location.href.split('#')[1];
    if (link !== undefined) {
        var articles = document.getElementsByTagName("article");
        var found = false;
        for (var i = 0; i < articles.length; i++) {
            var id = articles[i].id;
            if (link == id) {
                found = true;
                articles[i].setAttribute("style", 'display:block');
                var paras = articles[i].getElementsByTagName("p");
                for (var j = 0; j < paras.length; j++) {
                    paras[j].setAttribute("style", 'display:block');
                }
                var arrows = articles[i].getElementsByClassName("expander-arrow");
                for (var k = 0; k < arrows.length; k++) {
                    arrows[k].setAttribute("style", 'display:none');
                }
            } else {
                articles[i].setAttribute("style", 'display:none');
            }
        }
        if (found == false) {
            let p = document.createElement('p');
            p.innerHTML = 'Post ' + link + ' not found :(';
            document.getElementsByTagName("section")[0].appendChild(p);
        }
    }
})();
