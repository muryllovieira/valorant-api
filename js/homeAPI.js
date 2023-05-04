'use strict'

export const showAgentes = async () => {
    const url = `https://valorant-api.com/v1/agents`
    const response = await fetch(url)
    const agente = await response.json()

    return agente.data
}

export const showArmas = async () => {
    const url = `https://valorant-api.com/v1/weapons`
    const response = await fetch(url)
    const agente = await response.json()

    return agente.data
}
