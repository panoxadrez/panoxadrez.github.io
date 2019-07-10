function scrollTo(anchor, timeDelay) {
    setTimeout(function(){window.location.hash = '#' + anchor;}, timeDelay);
}