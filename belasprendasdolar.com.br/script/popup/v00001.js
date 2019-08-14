function openPopupShare(media, url, shareText, width, height) {
    var share = '';
    switch (media) {
        case 'facebook':
            shareText = '';
            share = "https://www.facebook.com/sharer/sharer.php?u=" + "https://" + url + shareText;
            break;

        case 'whatsapp':
            share = "https://api.whatsapp.com/send?text=" + shareText + " " + url;
            //
            break;
        default:
            share = "https://www.facebook.com/sharer/sharer.php?u=" + "https://" + url;
    }

    console.log(share);

    var myWindow = window.open(share, '', "width=" + width + ",height=" + height);
}