function filterTagFromHash() {
    let tag = window.location.hash.substring(1);
    if(tag) {
        showOnlyLinksForThisTag(tag);
    }
    else {
        showAllLinks();
    }
}

function showAllLinks() {
    setDisplayForSelectedDomElements('.linkblock', hide=false);
    setDisplayForSelectedDomElements('.displayall', hide=true);
}

function showOnlyLinksForThisTag(tag) {
    let class_tag = ".tag-" + tag;
    SetTagLabelForBanner(tag);
    setDisplayForSelectedDomElements('.linkblock', hide=true);
    setDisplayForSelectedDomElements(class_tag, hide=false);
    setDisplayForSelectedDomElements('.displayall', hide=false);
}

function SetTagLabelForBanner(tag) {
    document.querySelector('#tag-label').innerHTML = tag;
}

function setDisplayForSelectedDomElements(selector, hide=false) {
    let dom_elements = document.querySelectorAll(selector);
    var hide = hide;
    dom_elements.forEach(
        function(elem) {
            if(hide) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        }
    );
}
