function dataIgPost() {
    const debug = true;

    //acha todas as divs com data do instagram
    const post = $('[data-ig]');

    //preenche todas as divs encontradas
    for (let i = 0; i < post.length; i++) {

        //console.log(post[i].getAttribute('data-ig'));
        //faz request ao instagram com json do post (user, texto e foto)
        axios.get('https://www.instagram.com/p/' + post[i].getAttribute('data-ig') + '/?__a=1')
            .then(async function (response) {


                //generate content
                $(post[i]).html('<div class="user-bar"><img class="user-pic"><div class="text-container"><a  class="user-name" target="_blank"><span></span></a><a  class="user-location" target="_blank"><span></span></a></div></div><div class="post-media"><a target="_blank"><img></a></div><div class=post-text><span class="read-more">Leia mais.</span><span class="start-text"></span><span class="dots">...</span><span class="end-text"></span></div>');


                //set user profile picture
                $(post[i]).find('.user-bar img').attr("src", response.data.graphql.shortcode_media.owner.profile_pic_url);

                //set user name
                $(post[i]).find('.user-bar .user-name span').append(response.data.graphql.shortcode_media.owner.username);
                $(post[i]).find('.user-bar a.user-name').attr("href", 'https://www.instagram.com/' + response.data.graphql.shortcode_media.owner.username);

                //verify if post has location and set location
                if (response.data.graphql.shortcode_media.location != null) {
                    $(post[i]).find('.user-bar a.user-location').attr("href", 'https://www.instagram.com/explore/locations/' + response.data.graphql.shortcode_media.location.id);
                    $(post[i]).find('.user-bar .user-location span').append(response.data.graphql.shortcode_media.location.name);
                }

                //verify type of the post (video or picture), and set post media
                if (!response.data.graphql.shortcode_media.is_video) {
                    $(post[i]).find('.post-media').html('<div class="imagem"><a href=https://www.instagram.com/p/' + post[i].getAttribute('data-ig') + ' target=_blank><img src=' + response.data.graphql.shortcode_media.display_resources[0].src + '></a></div>');
                } else {
                    $(post[i]).find('.post-media').html('<div class="imagem"><a href=https://www.instagram.com/p/' + post[i].getAttribute('data-ig') + ' target=_blank><img class="btn-play" src="https://icon-library.net/images/play-button-icon-white/play-button-icon-white-8.jpg"><img src=' + response.data.graphql.shortcode_media.thumbnail_src + '></a></div>');
                }

                //verify post text length and hide part of the text
                const rawText = response.data.graphql.shortcode_media.edge_media_to_caption.edges[0].node.text;
                //const text = ("<p>" + (rawText).replace(/\n/g, "</p><p>") + "</p>").replace("<p></p>", "");
                const text = (rawText).replace(/\n/g, "<br>");

                if (rawText.length <= 100) {
                    $(post[i]).find('.post-text').html(text);
                } else {
                    a = 30
                    for (limite = 75; a <= limite; a++) {
                        if ((text[a] + text[a + 1] + text[a + 2] + text[a + 3]) == "<br>") { break }
                        else if ((limite - a) <= 20 && (text[a] == " " || text[a] == "." || text[a] == ",")) {
                            break
                        }
                    }

                    $(post[i]).find('.start-text').html(text.slice(0, a));
                    $(post[i]).find('.end-text').html(text.slice(a, text.length));
                    //$(post[i]).find('span.end-text').html(text.slice(i, text.length));
                }
                $(post[i]).addClass('show');

            })
            .catch(function (error) {
                post[i].style.display = "none";
                console.log(error);
                console.log("Did'nt find post " + post[i].getAttribute('data-ig'));
                console.log("Post Url https://www.instagram.com/p/" + post[i].getAttribute('data-ig'));
                console.log(post[i]);
            })
    }
}

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
