//Facebook Pixel Code

!function (f, b, e, v, n, t, s) {
    if (f.fbq)
        return;
    n = f.fbq = function () {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq)
        f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, "script",
    "https://connect.facebook.net/en_US/fbevents.js");
fbq("init", "314830289305692");
fbq("track", "PageView");


function facebookPixel(i) {
    switch (i) {
        case 20:
            fbq('track', 'Lead');
            break;
        default: console.log('Facebook pixel error, called ' + i + ", and not founded");
    }
}