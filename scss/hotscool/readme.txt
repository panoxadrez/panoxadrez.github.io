Ajuda para configurações gerais do CSS

@Mixin:

config-curso:
|- how to use: @mixin config-curso($curso-id, $hero, $mobile, $modal, $destaque, $lista-cursos) { @content}
|-Sintaxe correta:
  |- $curso-id: ID do curo com "#"
  |- $hero: URL da imagem de heards, imagem vai cobrir toda a tela do usuário
  |- $mobile: Hero imagem para versões mobile e portrait, também cobre toda a tela do usuário
  |- $modal: imagem para chamada de modais, máscara para caixas pequenas etc
  |- $destaque: imagem exibida na home quando o conteúdo estiver em destaque
  |- $lista-cursos: imagem para ser exibida na listagem de cursos