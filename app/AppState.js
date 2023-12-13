import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  //NOTE leave the user and account alone, it is used by the authService to track user identity
  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /** @type {Car[]} */
  cars = [
    new Car(
      {
        "_id": "6462ed1266d4560e6cfa0f39",
        "make": "Honda",
        "model": "Accord",
        "imgUrl": "https://hips.hearstapps.com/hmg-prod/images/dsc00620-1677186777.jpg?crop=0.606xw:0.680xh;0.298xw,0.260xh&resize=640:*",
        "year": 2022,
        "price": 1500,
        "description": "zoom zoom",
        "engineType": "unknown",
        "creatorId": "63f7d6202d1cf882287f12e2",
        "createdAt": "2023-05-16T02:40:18.318Z",
        "updatedAt": "2023-05-16T02:40:18.318Z",
        "__v": 0,
        "creator": {
          "_id": "63f7d6202d1cf882287f12e2",
          "name": "Charles Francis Xavier",
          "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
          "id": "63f7d6202d1cf882287f12e2"
        },
        "id": "6462ed1266d4560e6cfa0f39"
      }
    ),
    new Car(
      {
        "_id": "6462ed1266d4560e6cfa0f39",
        "make": "Honda",
        "model": "Civic",
        "imgUrl": "https://hips.hearstapps.com/hmg-prod/images/dsc00620-1677186777.jpg?crop=0.606xw:0.680xh;0.298xw,0.260xh&resize=640:*",
        "year": 2022,
        "price": 1500,
        "description": "zoom zoom",
        "engineType": "unknown",
        "creatorId": "63f7d6202d1cf882287f12e2",
        "createdAt": "2023-05-16T02:40:18.318Z",
        "updatedAt": "2023-05-16T02:40:18.318Z",
        "__v": 0,
        "creator": {
          "_id": "63f7d6202d1cf882287f12e2",
          "name": "Charles Francis Xavier",
          "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
          "id": "63f7d6202d1cf882287f12e2"
        },
        "id": "6462ed1266d4560e6cfa0f39"
      }
    )
  ]


  houses = [
    new House(
      {
        "id": "",
        "bedrooms": "1",
        "bathrooms": "0",
        "levels": "1",
        "imgUrl": "https://cdn.discordapp.com/attachments/1174454649110143087/1184266769188278392/demek_person_living_in_a_box_4b5d58be-d8a0-473a-88a4-934fa6b00c3c.png?ex=658b5960&is=6578e460&hm=85e093006c92fedc5c455bf60340515bb97f6b6cb15aa2510fb1e23495116c56&",
        "year": "2020",
        "price": "300,000",
        "description": "In this housing market, this house is a steal of a deal at only $300,000",
        "creatorId": ""

      }
    ),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())