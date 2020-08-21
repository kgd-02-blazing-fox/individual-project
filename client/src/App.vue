<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">BUY</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'PT Sans Caption', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d3436;
  background-color: #dfe6e9;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
