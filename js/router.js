'use strict'

import { loadContainerAgentes } from './agentes.js'
import { loadContainerArmas } from './armas.js'

const routes = {
    '/' : '/pages/home.html',
    '/home' : {
        html: '/pages/home.html'
    },
    '/agentes' : {
        html: '/pages/agentes.html',
        js: loadContainerAgentes
    },
    '/armas' : {
        html: '/pages/armas.html',
        js: loadContainerArmas
    },
    '/mapas' : {
        html: '/pages/mapas.html',
    },
}
const route = async () => {

    //Ao clique ele continua na mesma pagina, porem sem mudar a url e continuar os conteudos
    window.event.preventDefault()

    //Ao clique ele continua na mesma pagina, porem mudando a url e os conteudos
    window.history.pushState({},"",window.event.target.href)

    //Pega a url do que clicamos, exmeplo: /vermlho, /azul
    const path = window.location.pathname

    const response = await fetch(routes[path].html)

    const html = await response.text()

    document.getElementById('root').innerHTML = html

    routes[path].js()

}

window.route = route
