
const show = 10; // The number of posts to show per page

function showPage(offset) {
    // Avoid conflicts with permalink plugin
    const link = window.location.href.split('#')[1];
    if (link !== undefined) {
        return;
    }
    let articles = document.getElementsByTagName("article");
    for(let i = 0; i < articles.length; i++){
        if (i < show+offset) {
            articles[i].setAttribute("style", 'display:block');
        } else {
            articles[i].setAttribute("style", 'display:none');
        }
    }
    if (articles.length > show+offset) {
        let more = document.createElement('a');
        more.innerHTML = 'more <svg style="width: 10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>';
        let more_function = 'var elms = document.getElementsByClassName("more-arrow"); for(var k = 0; k < elms.length; k++) { elms[k].remove() }; showPage('+(offset+show)+'); return false;';
        more.setAttribute('onclick', more_function);
        more.setAttribute('href', "#");
        more.setAttribute("class", 'more-arrow');
        more.setAttribute("title", 'Click to show more posts');
        articles[show+offset-1].parentNode.insertBefore(more, articles[show+offset-1].nextSibling);
    }
}

showPage(0);
