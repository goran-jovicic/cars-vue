<template>
  <form @submit.prevent="registerUser">
    <div>
      <label for="username">Username : </label>
      <input type="text" id="username" name="username" v-model="user.userName"/>
    </div>
    <div>
      <label>Email :</label>
      <input type="email" id="email" name="email" v-model="user.email"/>
    </div>
    <div>
      <label for="password">Password :</label>
      <input type="password" id="password" name="password" v-model="user.password"/>
    </div>
    <div>
      <label for="password">Confirm Password :</label>
      <input type="password" id="password_confirm" name="password_confirm">
    </div>
    <div>
      <button class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
import { authService } from '../services/AuthService'

export default {
  data () {
    return {
      user : {
        userName : '',
        email : '',
        password : '',
      }
    }
  },

  methods : {
    registerUser() {
      authService.register(this.user.userName,this.user.email,this.user.password)
      this.$router.push('/login')
    }
  }
};
</script>

<style>
</style>
