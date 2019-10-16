function dataIgPost() {
    const debug = true;

    //acha todas as divs com data do instagram
    const post = $('.instagram-feed [data-ig]');

    //preenche todas as divs encontradas
    for (let i = 0; i < post.length; i++) {

        //console.log(post[i].getAttribute('data-ig'));
        //faz request ao instagram com json do post (user, texto e foto)
        axios.get('https://www.instagram.com/p/' + post[i].getAttribute('data-ig') + '/?__a=1')
            .then(async function (response) {

                function location() {
                    if (response.data.graphql.shortcode_media.location != null) { return response.data.graphql.shortcode_media.location.name }
                    else { return "" }
                }
                function postMedia() {
                    if (!response.data.graphql.shortcode_media.is_video) {
                        return '<div class="imagem"><a href=https://www.instagram.com/p/' + post[i].getAttribute('data-ig') + ' target=_blank><img src=' + response.data.graphql.shortcode_media.display_resources[0].src + '></a></div>';
                    } else {
                        /* const videoUrl = (response.data.graphql.shortcode_media.video_url)
                            .replace(/[/]/g, '%2F')
                            .replace(/[:]/g, '%3A')
                            .replace(/[?]/g, '%3F')
                            .replace(/[&]/g, '%26')
                            .replace(/[=]/g, '%3D')
                            ;

                        console.log(videoUrl);


                        return '<div class="video"><iframe frameborder="0" allowfullscreen="" scrolling="no" allow="autoplay;fullscreen" src="https://onelineplayer.com/player.html?autoplay=false&autopause=true&muted=true&loop=true&url=' + videoUrl + '&poster=&time=true&progressBar=false&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true"></iframe></div>'; */

                        post[i].style.display = "none";
                        return "";







                        //'<iframe frameborder=0 scrolling=no marginheight=0 marginwidth=0 src=' +  + '></iframe > '
                    }
                }

                function postText() {
                    console.log(post[i].getAttribute('data-ig'));
                    const rawText = response.data.graphql.shortcode_media.edge_media_to_caption.edges[0].node.text;
                    const text = (rawText).replace(/\n/g, "<br>");

                    if (rawText.length <= 70) {
                        return "<div class=post-text>" + text + "</div>";
                    }

                    else {
                        const textArray = text.split("");

                        var b = 40;
                        for (a = 0; b < 70; b++) {
                            if ((textArray[b - 3] + textArray[i - 2] + textArray[b - 1] + textArray[b]) == "<br>") {
                                console.log('br achado');
                                break
                            }
                            else if (textArray[b] == " ") {
                                console.log('espaço localizado');
                                break
                            }
                        }
                        const textStar = text.slice(0, b);
                        const textEnd = text.slice((b), text.length);

                        //console.log(textStar)
                        //console.log(textEnd)
                        return '<div class=post-text ><span class="read-more">Ler mais</span>' + textStar + '<span class="dots">...</span><span class="end-text">' + textEnd + '</span></div>';
                    }
                }

                post[i].innerHTML =
                    '<div class=user-bar>' +
                    //user pic
                    '<img class=user-pic src=' + response.data.graphql.shortcode_media.owner.profile_pic_url + '>' +
                    //user name
                    '<div><a href=https://www.instagram.com/' + response.data.graphql.shortcode_media.owner.username + ' target=_blank><span class=user-name>' + response.data.graphql.shortcode_media.owner.username + '</span></a>' +
                    //post location
                    '<span class=user-location>' + location() + '</span></div></div>' +

                    //post media
                    '<div class="post-media">' + postMedia() + '</div>' +
                    //post text
                    postText();

            })
            .catch(function (error) {
                console.log(error);
                post[i].style.display = "none";
            })
    }
}
dataIgPost();


$(function () {
    const post = $('.instagram-feed [data-ig]');

    post.on('click', '.read-more', function () {
        const postagem = $(this).parent().parent();
        //console.log(postagem);

        $(this).addClass('hide');
        $(postagem.find('.dots')).addClass('hidding').delay(1000).removeClass('hidding').addClass('hide');
        $(postagem.find('.end-text')).addClass('show');
    })
});
