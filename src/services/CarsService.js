import axios from 'axios'

export default class CarsService {
    constructor() {
        axios.defaults.baseURL = `http://localhost:3000/api`
    }

    getAll () {
        return axios.get(`cars`)
    }

    add (addCar) {
        axios.post(`cars` , addCar)
        .then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        })
    }
}

export const carsService = new CarsService() 