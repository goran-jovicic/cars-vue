<template>
  <div id="app">
    <nav>
      <span>
        <router-link to="/cars">Cars</router-link>
      </span>
      <span>
        <router-link to="/add">Add car</router-link>
      </span>
      <span v-if="!user">
        <router-link to="/login">Login</router-link>
      </span>
      <span @click="logoutUser" v-else>
        <router-link to="/logout">Logout</router-link>
      </span>
      <span>
        <router-link to="/register">Register</router-link>
      </span>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { authService } from "./services/AuthService";
import { mapState, mapGetters } from 'vuex'

export default {
  methods: {
    logoutUser() {
      authService.logout();
      this.$router.push("/cars");
    }
  },

  computed: {
    // checker() {
    //   return authService.isAuthenticated();
    // }
    ...mapGetters ({
      user: 'getUser'
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav,
span {
  margin: 0.5rem;
}
</style>
