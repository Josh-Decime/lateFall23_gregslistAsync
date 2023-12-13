import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";



class HouseService {

    async getHouses() {
        const response = await fetch('https://bcw-sandbox.herokuapp.com/api/houses', {})
        const axiosResponse = await api.get('api/houses')
        console.log('🏚️📡', response, axiosResponse)
        const body = await response.json()
        console.log('🏚️🕴️', body)
        const newHouses = body.map(houseData => new House(houseData))
        console.log('✨✨✨🏚️🏚️🏚️', newHouses)
        AppState.houses = newHouses
    }
}

export const houseService = new HouseService()