//cursoMudaStatusLead("#curso00002")
function cursoMudaStatusLead(id) {
    //cursoHeader = document.querySelector('section.pagina-venda-header' + id);

    newStyle = document.createElement('style');
    newStyle.setAttribute("class", "newstyleafterend");
    document.body.appendChild(newStyle);
    newStyle = document.querySelector('style.newstyleafterend');

    newStyleContend = id + ' .controle-status-venda {display: none !important}';
    newStyleContend += id + ' .titulo-container .controle-status-lead {display: block !important}';
    newStyleContend += id + '.pagina-venda-header .cta-container .controle-status-lead {display: flex !important}';

    newStyle.innerHTML = newStyleContend;

}

/*


*/