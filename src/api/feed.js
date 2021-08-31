/* eslint-disable */

import axios from '@/api/axios'

const getFeed = () => {
    return axios.get('/pokemons.json')
}

const deleteItem = id => {
    return axios.delete(`/pokemons/${id}.json`)
}

const addItem = credentials => {
    return axios.post('/pokemons.json', credentials)
}

const changeFavoriteStatus = (id, credentials) => {
    return axios.patch(`/pokemons/${id}.json`, credentials)
}

export default {
    getFeed,
    deleteItem,
    addItem,
    changeFavoriteStatus
}