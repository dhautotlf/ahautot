<template>
  <v-app id="app">
    <div id="nav">
      <v-container>
        <v-row align="center">
        <v-col cols="4" id="name" class="text-left">
          <span class="d-none d-md-block"  id="name">Ambre Hautot</span>
        </v-col>
        <v-col cols="12" md="8" sm="12" xs="12"  class="text-center text-md-right">
          <router-link to="/">Home</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contact</router-link>
      </v-col>
</v-row>
      </v-container>
    </div>
    <router-view/>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#name {
  font-size: 30px;
}

#nav {
  padding: 10px;
  font-size: 30px;
  a {
    text-decoration: none;
    color: #2c3e50;
    padding:30px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
