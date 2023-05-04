'use strict'

import { showArmas } from "../js/homeAPI.js"
const armas = await showArmas()

console.log(armas);    

const createArmas = (arma1) => {

    const containerCard = document.createElement('div')
    containerCard.classList.add('containerCard')

    const cardArma = document.createElement('div')
    cardArma.classList.add('cardArma')

    const imgArma = document.createElement('img')
    imgArma.classList.add('imgArma')
    imgArma.src = arma1.displayIcon

    const nameArma = document.createElement('p')
    nameArma.classList.add('nameArma')
    nameArma.textContent = arma1.displayName

    containerCard.append(cardArma)
    cardArma.append(imgArma, nameArma)

    return containerCard
}

export const loadContainerArmas = () => {

    const container = document.getElementById('container-armas')
    const containerCardAPI = armas.map(createArmas)
    
    console.log(container);

    container.replaceChildren(...containerCardAPI)
}



