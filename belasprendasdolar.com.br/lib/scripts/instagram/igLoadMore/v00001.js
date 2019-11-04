const container = document.querySelector('.instagram-feed .pn-row');
var postagem_displayed = 0;
postagens = document.querySelector('[data-posts-ig]').getAttribute('data-posts-ig').split(",");
container.innerHTML = "";

function igLoadMore() {
    loadMore = 4;
    const oldposts = document.querySelectorAll('[data-ig]');
    if (postagem_displayed <= postagens.length) {
        oldposts.forEach(oldPost => {
            oldPost.removeAttribute("data-ig");
        });

        for (i = postagem_displayed; i < postagem_displayed + loadMore; i++) {
            container.innerHTML += "<div class='post' data-ig='" + postagens[i] + "'></div>";
        }
        postagem_displayed += loadMore;
    }
    if (postagem_displayed >= postagens.length) {
        document.querySelector('.instagram-feed .carregar-mais .bt').classList.add('hide');
        document.querySelector('.instagram-feed .carregar-mais span').classList.add('show');
    }




    dataIgPost();
}


igLoadMore();
console.log(postagem_displayed);