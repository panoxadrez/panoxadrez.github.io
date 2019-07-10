function scrollTo(hash, timeDelay) {
    setTimeout(function(){window.location.hash = '#' + hash;}, timeDelay);
}