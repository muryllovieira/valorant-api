'use strict'

import { showAgentes } from "../js/homeAPI.js"
const agente = await showAgentes()

console.log(agente);  


const createAgentes = (agente1) => {

    
    //const container = document.getElementById('container-agentes')

    const containerCard = document.createElement('div')
    containerCard.classList.add('containerCard')

    const cardAgente = document.createElement('div')
    cardAgente.classList.add('cardAgente')

    const imgAgente = document.createElement('img')
    imgAgente.classList.add('imgAgente')
    imgAgente.src = agente1.displayIcon

    const nameAgente = document.createElement('p')
    nameAgente.classList.add('nameAgente')
    nameAgente.textContent = agente1.displayName

    const classAgente = document.createElement('p')
    classAgente.classList.add('classAgente')
    classAgente.textContent = agente1.role


    console.log(classAgente);

    containerCard.append(cardAgente)
    cardAgente.append(imgAgente, nameAgente, classAgente)

    return containerCard
}

export const loadContainerAgentes = () => {

    const container = document.getElementById('container-agentes')
    const containerCardAPI = agente.map(createAgentes)
    
    container.replaceChildren(...containerCardAPI)
}

// loadContainer()

// window.loadContainer = loadContainer


