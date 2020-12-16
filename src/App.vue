<template>
  <div id="app">
    <HeaderHero class="header-hero"/>
    <div class="contenido">
      <router-view></router-view>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>

import vueRouter from 'vue-router'

import HeaderHero from './components/HeaderHero'
import Footer from './components/Footer'
import CrearCuenta from './components/CrearCuenta';
import Principal from './components/Principal';
import Reservar from './components/Reservar';
import Habitaciones from './components/Habitaciones';
import Pagos from './components/Pagos';
import UserAuth from './components/UserAuth';

export default {
  name: 'App',

  components: { 
    
    HeaderHero,
    Footer,
    CrearCuenta,
    Principal,
    Reservar,
    Habitaciones,
    Pagos,
    UserAuth
  },

  data: function(){
    return {
      is_auth: localStorage.getItem('isAuth') || false
    }
  },

  methods: {

    updateAuth: function(){
      var self = this
      self.is_auth  = localStorage.getItem('isAuth') || false

      if(self.is_auth == false)
        self.$router.push({name: "user_auth"})

      else{
        let username = localStorage.getItem("current_username")
        self.$router.push({name: "user", params:{ username: username }})
      }  
    },

    logIn: function(username){
      localStorage.setItem('current_username', username)
      localStorage.setItem('isAuth', true)
      this.updateAuth()
    },

    logOut: function(){
      localStorage.removeItem('isAuth')
      localStorage.removeItem('current_username')
      this.updateAuth()
    },

    init: function(){
      if(this.$route.name != "user"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user", params:{ username: username }})
      }
      
    },

    getReservas: function(){
      if(this.$route.name != "user_reservas"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user_reservas", params:{ username: username }})
      }
    },


    doTransaction: function(){
      
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user_pagos", params:{ username: username }})
    }
    
  },

  created: function(){
    this.$router.push({name: "/principal"})
    this.updateAuth()
  }

};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Arbutus+Slab&family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  display: grid;
  grid-template-rows: [header]600px[contenido]1fr[footer]250px[fin];
  background: #0B1D26;
}

.header-hero {
  grid-row:  header / contenido; 
}

.footer{
  grid-row: footer / fin;
}

.contenido{
  grid-row: contenido / footer;
}

</style>
