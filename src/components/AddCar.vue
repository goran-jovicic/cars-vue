<template>
  <div>
    <form @submit.prevent="handleForm">
      <div>
        <label for="brand">Brand : </label>
        <input type="text" id="brand" placeholder="Brand" v-model="addCar.brand" required pattern=".{2,20}" title="2 characters minimum"/>
      </div>
      <div>
        <label for="model">Model : </label>
        <input type="text" id="model" placeholder="Model" v-model="addCar.model" required pattern=".{2,20}" title="2 characters minimum"/>
      </div>
      <div>
        <label for="year">Year : </label>
        <select v-model="addCar.year" required>
          <option v-for="(year,index) in years" :key="index"> {{ year }} </option>
        </select>
      </div>
      <div>
        <label for="maxSpeed">Max Speed : </label>
        <input type="number" id="maxSpeed" placeholder="100" v-model="addCar.maxSpeed"/>
      </div>
      <div>
        <label for="numberOfDoors">Number of Doors : </label>
        <input type="number" id="numberOfDoors" placeholder="3" v-model="addCar.numberOfDoors" required/>
      </div>
      <div>
        <label for="isAutomatic">Automatic</label>
        <input type="checkbox" id="isAutomatic" name="yes" value="true" v-model="addCar.isAutomatic"/>
      </div>
      <div>
        <label for="diesel">Diesel</label>
        <input type="radio" id="diesel" value="diesel" v-model="addCar.engine" required/>
        <label for="petrol">petrol</label>
        <input type="radio" id="petrol" value="petrol" v-model="addCar.engine" required/>
        <label for="electric">electric</label>
        <input type="radio" id="electric" value="electric" v-model="addCar.engine" required/>
        <label for="hybrid">hybrid</label>
        <input type="radio" id="hybrid" value="hybrid" v-model="addCar.engine" required/>
      </div>
      <button>Submit</button>
    </form>
    <button @click="resetForm">Reset</button>
    <button @click="previewForm">Preview</button>
  </div>
</template>

<script>
import { carsService } from '@/services/CarsService'

export default {
  data () {
    return {
      id : "",
      addCar : {
        "brand": "",
        "model": "",
        "year": "",
        "maxSpeed": "",
        "isAutomatic": "",
        "engine": "",
        "numberOfDoors": "",
      },
      years: Array(30).fill(1990).map((n, i) => n + i)
    }
  },
  
  methods : {
    handleForm () {
      if (this.id){
        carsService.edit(this.id,this.addCar)
        this.$router.push(`/cars`)
        return
      }
      carsService.add(this.addCar)
      this.$router.push(`/cars`)
    },

    resetForm () {
      this.addCar = {
        "brand": "",
        "model": "",
        "year": "",
        "maxSpeed": "",
        "isAutomatic": "",
        "engine": "",
        "numberOfDoors": "",
      }
    },

    previewForm () {
      alert(JSON.stringify(this.addCar,null,4))
    }
  },
  created () {
    this.id = this.$router.currentRoute.params.id;
    if(this.id){
      carsService.getSingleCar(this.id)
      .then(response => {
        this.addCar = response.data
      })
      .catch(e => {
        console.log(e)
      })
      // console.log(carsService.getSingleCar(this.id))
    }
  }
}
</script>

<style>

</style>
