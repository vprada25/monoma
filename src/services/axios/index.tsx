import axios from 'axios'
import { URL_API } from '../../helpers/constants/env'

const instance = axios.create({
    baseURL: URL_API,
    timeout: 1000,
})

export const allPokemon = async (limit: number, offset: number) => {
    const res = await instance.get(`pokemon?limit=${limit}&offset=${offset}`)
    return res
}

export const getPokemon = async (url: string) => {
    const res = await instance.get(url)
    return res
}
