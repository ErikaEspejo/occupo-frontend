<template>
  <div id="app">
    <HeaderHero class="header-hero"/>
    <div class="contenido">
      <!-- <Principal/> -->
      <!-- <crear-cuenta />   -->    
      <Reservar/>
      <!-- <Pagos/> -->
      <!-- <Habitaciones/> -->
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>


import HeaderHero from './components/HeaderHero'
import Footer from './components/Footer'
import CrearCuenta from './components/CrearCuenta.vue';
import Principal from './components/Principal.vue';
import Reservar from './components/Reservar.vue';
import Habitaciones from './components/Habitaciones.vue';
import Pagos from './components/Pagos.vue';

export default {
  name: 'App',

  components: { 
    
    HeaderHero,
    Footer,
    CrearCuenta,
    Principal,
    Reservar,
    Habitaciones,
    Pagos
  },

  data: function(){
    return {
      is_auth: localStorage.getItem('isAuth') || false
    }
  },

  methods: {
  },

  beforeCreate: function(){
    localStorage.setItem('current_username', 'camilo24')
    localStorage.setItem('isAuth', true)
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
