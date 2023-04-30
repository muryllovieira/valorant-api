'use strict'

const routes = {
    '/' : '/pages/home.html',
    '/agentes' : '/pages/agentes.html',
    '/armas' : '/pages/armas.html',
    '/mapas' : '/pages/mapas.html',
}
const route = async () => {

    //Ao clique ele continua na mesma pagina, porem sem mudar a url e continuar os conteudos
    window.event.preventDefault()

    //Ao clique ele continua na mesma pagina, porem mudando a url e os conteudos
    window.history.pushState({},"",window.event.target.href)

    //Pega a url do que clicamos, exmeplo: /vermlho, /azul
    const path = window.location.pathname

    const response = await fetch(routes[path])

    const html = await response.text()

    document.getElementById('root').innerHTML = html
}

window.route = route

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++;
    if (idx >= img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`

}

setInterval(carrossel, 1800);