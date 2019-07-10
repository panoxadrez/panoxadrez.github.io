function scrollToConfig(hash) {
    window.location.hash = '#' + hash;
}
function scrollTo(hash, timeDelay) {
    setTimeout(scrollToConfig(hash), timeDelay);
}