<template>
  <div class="container mt-4">
    <form class="form-signin" @submit.prevent="submitForm">
      <h2 class="form-signin-heading">Please login</h2>
      <input
        v-model="email"
        type="text"
        class="form-control"
        name="email"
        placeholder="Email Address"
        required
        autofocus
      />
      <input
        v-model="password"
        type="password"
        class="form-control"
        name="password"
        placeholder="Password"
        required
      />
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import { authService } from "../services/AuthService";


export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    ...mapActions({
      login: 'login'
    }),

    submitForm() {
      this.login({
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push('/cars')
      })
    }
    // login() {
    //   // authService.login(this.email, this.password).then(() => {   // old way
    //   //   this.$router.push("/cars");
    //   // });
    // }
  }
};
</script>