function callFacebookPixel(i) {
    switch (i) {
        case 20:
            fbq('track', 'Lead');
            console.log('Facebook pixel called: track Lead')
            break;
        default: console.log('Facebook pixel error, called ' + i + ", and not founded");
    }
}