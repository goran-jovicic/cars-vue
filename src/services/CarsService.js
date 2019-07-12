import axios from 'axios'

export default class CarsService {
    constructor() {
        axios.defaults.baseURL = `http://localhost:8000/api/`
    }

    getAll () {
        return axios.get(`cars`)
    }

    getSingleCar(id){
        return axios.get(`cars/${id}`)
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

    edit (id,addCar) {
        axios.put(`cars/${id}`,addCar)
        .then(response => {
            console.log(response)
        })
    }

    delete(id){
        return axios.delete(`cars/${id}`)
    }
}

export const carsService = new CarsService() 