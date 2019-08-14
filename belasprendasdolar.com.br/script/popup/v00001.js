function openPopupshare(media, url, shareText,width, height) {
    var share = '';
    switch (media) {
        case 'facebook':
            share = "https://www.facebook.com/sharer/sharer.php?u=" + "https://" + url;
            break;

        case 'whatsapp':
                share = "https://api.whatsapp.com/send?text="+shareText + url;
//Participe comigo das aulas especiais e GRATUITAS de Patchwork e Costura Criativa com Eliana Zerbinatti!


                 https://www.belasprendasdolar.com.br/as-boas-praticas-do-patchwork-02
            break;
        default:
            share = "https://www.facebook.com/sharer/sharer.php?u=" + "https://" + url;
    }



    var myWindow = window.open(share, '', "width=" + width + ",height=" + height);
}