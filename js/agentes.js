'use strict'

import { showAgentes } from "../js/homeAPI.js"
const agente = await showAgentes()

console.log(agente);

function deleteAndCreateCard(agente1) {
    // remove o elemento no indice 8
    agente1.splice(8, 1);

    // chama a função de criar o card de agente com a array modificada
    return agente1
}

deleteAndCreateCard(agente)

const createAgentes = (agente1) => {

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

    // const classAgente = document.createElement('p')
    // classAgente.classList.add('classAgente')
    // classAgente.textContent = agente1.role.displayName

    const classAgente = document.createElement('p')
    classAgente.classList.add('classAgente')
    classAgente.textContent = agente1.role.displayName

    console.log(classAgente);

    containerCard.append(cardAgente)
    cardAgente.append(nameAgente, imgAgente, classAgente)

    return containerCard

}




export const loadContainerAgentes = () => {

    const container = document.getElementById('container-agentes')
    const containerCardAPI = agente.map(createAgentes)

    container.replaceChildren(...containerCardAPI)
}

// loadContainer()

// window.loadContainer = loadContainer


