import { AppState } from "../AppState.js";



export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        console.log('✨🏚️', this)
    }

    get HouseCard() {
        // return `${this.make} ${this.model}`// 🧪 test small template first
        return `
    <div class="col-4">
      <div class="card">
      <img src="${this.imgUrl}" class="img-fluid"/>
      <h3 class="text-center mt-1 fw-bold">$${this.price}</h3>
      <h4 class="text-center">${this.bedrooms} bds | ${this.bathrooms} ba | ${this.year} yr</h4>
      <p class="text-center text-success me-2">${this.description}</p>
      </div>
    </div>
    `
    }
}