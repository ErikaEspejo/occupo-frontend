<template>
  <div id="app">
      <!-- <div class="header">
        <h1><strong>Occupo</strong></h1>
        <nav>
          <button v-on:click="init" v-if="is_auth">Inicio</button>
          <button v-on:click="getBalance" v-if="is_auth">Habitaciones</button>
          <button v-if="is_auth">Reservas</button>
          <button v-if="is_auth">Cerrar Sesión</button>
        </nav>
      </div> -->
    <HeaderHero class="header-hero"/>
    <div class="contenido">
      <crear-cuenta />
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>


import HeaderHero from './components/HeaderHero'
import Footer from './components/Footer'
import CrearCuenta from './components/CrearCuenta.vue';


export default {
  name: 'App',

  components: { 
    
    HeaderHero,
    Footer,
    CrearCuenta
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
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  display: grid;
  grid-template-rows: [header]600px[contenido]1fr[footer]50px[fin];
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
