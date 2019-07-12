<template>
  <div id="app">
    <nav>
      <span><router-link to="/cars">Cars</router-link></span>
      <span><router-link to="/add">Add car</router-link></span>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav,span {
  margin :0.5rem;
}
</style>
