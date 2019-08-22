function callFacebookPixel(a, b, c) {
    switch (a) {
        case 1:
            a = 'track';
            break;
        case 2:
            a = 'trackCustom';
            break;
        default: console.log('Facebook pixel error, called ' + a + ", and not founded");
    }

    switch (b) {
        case 1:
            b = 'ViewContent'
            break;

        case 2:
            b = 'SocialNetwork'
            break;

        case 3:
            b = 'LojaVirtual'
            break;

        case 4:
            b = 'Lead'
            break;

        default: console.log('Facebook pixel error, called ' + b + ", and not founded");
    }
    switch (c) {
        case 1:
            c = '-QuiltInBox'
            break;
        case 2:
            c = 'Cancel'
            break;
        default: c = '';
    }
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);

    b = b + c;
    console.log("b = " + b);

    fbq(a, b);
}