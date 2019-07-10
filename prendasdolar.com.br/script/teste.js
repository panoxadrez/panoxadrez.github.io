function scrollTo(anchor, timeDelay = 1000) {
    setTimeout(
            function(){
                window.location.hash = '#' + anchor;
            },
            timeDelay);
}