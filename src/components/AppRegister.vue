<template>
  <form @submit.prevent="registerUser">
    <div>
      <label for="username">Username : </label>
      <input type="text" id="username" name="username" v-model="user.username"/>
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
      <input type="password" id="password_confirmation" name="password_confirmation" v-model="user.password_confirmation">
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
        username : '',
        email : '',
        password : '',
        password_confirmation : ''
      }
    }
  },

  methods : {
    registerUser() {
      authService.register(this.user)
      this.$router.push('/login')
    }
  }
};
</script>

<style>
</style>
