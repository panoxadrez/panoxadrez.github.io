//cursoMudaStatusLead("#curso00002")
function cursoMudaStatusLead(id) {
    //cursoHeader = document.querySelector('section.pagina-venda-header' + id);

    newStyle = document.createElement('style');
    newStyle.setAttribute("class", "newstyleafterend");
    document.body.appendChild(newStyle);
    newStyle = document.querySelector('style.newstyleafterend');

    newStyleContend =  '.pagina-venda-header .titulo-container .controle-status-venda {display: none !important}';
    newStyleContend += '.pagina-venda-header .titulo-container .controle-status-lead {display: block !important}';
    newStyleContend += '.pagina-venda-header .cta-container .controle-status-venda {display: none !important}';
    newStyleContend += '.pagina-venda-header .cta-container .controle-status-lead {display: flex !important}';
    newStyle.innerHTML = newStyleContend;

}

/*


*/