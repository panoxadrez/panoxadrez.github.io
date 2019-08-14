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
        case 'twitter':
            share = "https://twitter.com/intent/tweet?text=" + shareText + " " + url;
            break;

        case 'telegram':
            share = "https://telegram.me/share/url?url=https://" + url + "&amp&" + "text=" + shareText;
            //&amp;text=Participe comigo das aulas especiais e GRATUITAS de Patchwork e Costura Criativa com Eliana Zerbinatti!
            break;

        default:
            console.log("share erro!");
    }
    console.log(share);

    var myWindow = window.open(share, '', "width=" + width + ",height=" + height);
}