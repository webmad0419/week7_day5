import axios from 'axios'

export default class services {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:3000/api/'
        })
    }

    getAllCoasters = () => {
        return this.service.get('getAllCoasters')
            .then(res => res.data)
            .catch(err => console.log('Error', err))
    }


    getOneCoaster = id => {
        return this.service.get(`getOneCoaster/${id}`)
            .then(res => res.data)
            .catch(err => console.log('Error', err))
    }


    postNewCoaster = coaster => {
        return this.service.post(`newCoaster`, coaster)
            .then(res => res.data)
            .catch(err => console.log('Error', err))
    }
}