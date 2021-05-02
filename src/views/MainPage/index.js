const template = `
  <div class="flex flex-col gap-4 mx-4 h-screen justify-center">
    <a class="btn btn-primary" href="/#/juego">Jugar</a>
    <a class="btn btn-secondary" href="/#/ranking">Ranking</a>
    <a class="btn btn-secondary" href="/#/instrucciones">Instrucciones</a>
    <a class="btn btn-secondary" href="/#/music">M&uacute;sica</a>
    <a class="btn btn-secondary" href="/#/acerca-de">Acerca De</a>
  </div>
`

export default () => {
  const menuView = document.createElement('div');
  menuView.innerHTML = template;

  return menuView;
};
