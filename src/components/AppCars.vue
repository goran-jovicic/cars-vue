<template>
  <div>
      <ul>
        <li v-for="(car,index) in cars" :key="index">
          {{ `${car.brand} ${car.model} ${car.year} ${car.maxSpeed} ${car.isAutomatic} ${car.engine} ${car.numberOfDoors}` }} 
          <router-link :to="editCar(car)">Edit</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
import { carsService } from '@/services/CarsService'

export default {
  data () {
    return {
      cars: [],
      car: {
        "brand": "",
        "model": "",
        "year": "",
        "maxSpeed": "",
        "isAutomatic": Boolean,
        "engine": "",
        "numberOfDoors": "",
        "id": ""
      }
    }
  },

  methods: {
    editCar(car){
      return `/edit/${car.id}`
    }
  },

  created () {
    carsService.getAll()
      .then(response => {
        this.cars = response.data
      }).catch(e => {
        console.log(e)
      })
  }
}
</script>

<style>
li {
  list-style: none;
}
</style>
