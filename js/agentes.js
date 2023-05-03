'use strict'

const createAgentes = (agente) => {

    const listAgentes = document.createElement('div')
    listAgentes.classList.add('list-agentes')

    const ul = document.createElement('ul')

    const li = document.createElement('li')

    const a = document.createElement('a')

    const span = document.createElement('span')

    const imgAgente = document.createElement('div')
    imgAgente.classList.add('img-agente')

    const img = document.createElement('img')

    const containerFuncaoBiografia = document.createElement('div')
    containerFuncaoBiografia.classList.add('container-funcao-biografia')

    const funcaoAgente = document.createElement('div')
    funcaoAgente.classList.add('funcao-agente')

    const spanFuncao = document.createElement('span')

    const funcao = document.createElement('div')
    funcao.classList.add('funcao')

    const spanFuncaoAgente = document.createElement('span')

    const biografiaAgente = document.createElement('div')
    biografiaAgente.classList.add('biografia-agente')

    const spanBiografia = document.createElement('span')

    const biografia = document.createElement('div')
    biografia.classList.add('biografia')

    const spanBiografiaAgente = document.createElement('span')
    spanBiografiaAgente.classList.add('biografia-agente')



    listAgentes.append(ul)
    ul.append(li)
    li.append(a)
    a.append(span)

    imgAgente.append(img)

    containerFuncaoBiografia.append(funcaoAgente, biografiaAgente)
}