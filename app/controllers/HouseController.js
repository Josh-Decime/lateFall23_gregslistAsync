import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawHouses() {
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.HouseCard)
    setHTML('houses-list', content)
}

export class HouseController {
    constructor() {
        console.log('🏚️🎮')
        AppState.on('houses', _drawHouses)
        this.getHouses()
        _drawHouses()
    }


    async getHouses() {
        try {
            await houseService.getHouses()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message)
        }
    }

    // async createHouse() {
    //     try {
    //         event.preventDefault()
    //         console.log('📃🏚️')
    //     }
    // }

}

