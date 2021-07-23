(function() {
    const show = 1; // The number of paragraphs to show for each article/post

    var articles = document.getElementsByTagName("article");
    for(var i = 0; i < articles.length; i++){
        var paras = articles[i].getElementsByTagName("p");
        if (paras.length > show) {
            // We have more paragraphs than we want to show
            var r = Math.random().toString(36).substring(7);
            // Now loop through the paragraphs
            for(var j = 0; j < paras.length; j++){
                if (j >= show) {
                    paras[j].setAttribute("style", 'display:none');
                    paras[j].setAttribute("class", r);
                }
            }
            let expander = document.createElement('a');
            expander.innerHTML = '<svg style="height: 10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>';
            var expand_function = 'var elms = document.getElementsByClassName("'+r+'"); for(var k = 0; k < elms.length; k++) { elms[k].setAttribute("style", "display:block") } document.getElementById("link_'+r+'").setAttribute("style", "display:none"); return false;';
            expander.setAttribute('onclick', expand_function);
            expander.setAttribute('href', "#");
            expander.setAttribute("id", 'link_'+r);
            expander.setAttribute("style", 'color: #000');
            expander.setAttribute("class", 'expander-arrow');
            expander.setAttribute("title", 'Click to expand text');
            paras[show].parentNode.insertBefore(expander, paras[show]);
        }
    }
})();
