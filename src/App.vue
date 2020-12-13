<template>
  <div id="app">
      <div class="header">
        <h1><strong>Occupo</strong></h1>
        <nav>
          <button v-on:click="init" v-if="is_auth">Inicio</button>
          <button v-on:click="getBalance" v-if="is_auth">Habitaciones</button>
          <button v-if="is_auth">Reservas</button>
          <button v-if="is_auth">Cerrar Sesión</button>
        </nav>
      </div>

    <occupo-usuario />
  </div>
</template>

<script>

import OccupoUsuario from './components/OccupoUsuario.vue';



export default {
  name: 'App',

  components: { OccupoUsuario },

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

body {
  margin: 0 0 0 0;
}
.body-total {
  margin: 0 0 0 0;
  background: #0b1d26;
  font-family: "Gilroy";
}
.header {
  margin: 0 0 0 0;
  padding: 0px;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background: #0b1d26;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-component {
  height: auto;
  margin: 0%;
  padding: 0%;
  background: #0b1d26;
}
.header nav {
  height: 100%;
  width: 45%;
  display: flex;
  justify-items: space-around;
  align-items: center;
  font-size: 30px;
  color: #ffffff;
}

.header nav button {
  color: #ffffff;
  background: none;
  border: none;
  padding: 10px 20px;
}

.header nav button:hover {
  color: #fbd784;
  background: none;
}

.titulo {
  padding: 0%;
  margin: 0 0 0 0;
  align-items: center;
  text-align: center;
  left: 350px;
  font-family: "Gilroy";
  display: flexbox;
  color: #fbd784;
  background: #0b1d26;
}

.footer {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  color: #ffffff;
  background: #0b1d26;
  font-size: 12px;
}
.footer h2 {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-bottom: 40px;
  font-family: "Gilroy-bold";
  font-weight: bold;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
}

/* Labels y títulos del formulario */
h1 {
  position: relative;
  width: 1071px;
  height: 45px;
  text-align: center;

  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;

  display: flex;

  color: #fbd784;
}

h2 {
  position: relative;
  width: 800px;
  height: 45px;
  left: 32%;
  text-align: center;
  padding-bottom: 40px;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 45px;

  display: flex;
  align-items: center;

  color: #ffffff;
}

h3 {
  font-size: 1.429em;

  font-weight: 400;
  line-height: 1.1;
  margin-bottom: auto;
  position: relative;
  left: 35%;
  align-self: center;
  padding-top: 10px;
  color: #ffffff;
}
h4 {
  font-size: 42px;
  font-weight: 400;
  line-height: 1.1;
  position: relative;
  color: #ffffff;
}

h5 {
  font-size: 12px;
  text-align: center;
  font-weight: 400;
  line-height: 1.1;
  position: relative;
  color: #ffffff;
}
span {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.1;
  position: relative;
  color: #000000;
}
h6 {
  font-size: 1.429em;

  font-weight: 400;
  line-height: 1.1;
  margin-bottom: auto;
  position: relative;
  left: 35%;
  align-self: center;
  padding-top: 10px;
  color: #000000;
}

/* Inputs */
.redondeado {
  position: absolute;
  width: 210px;
  height: 30px;
  left: 250px;
  font-size: 16px;
  font-family: "Gilroy";
  text-indent: 10px;

  background: #ffffff;
  border-radius: 40px;
}
.redondeado2 {
  position: relative;
  width: 60px;
  height: 30px;

  background: #ffffff;
  border-radius: 40px;
  left: 80px;
  font-size: 16px;
  font-family: "Gilroy";
  text-indent: 10px;
}

/* Botón */
.btn {
  background: linear-gradient(180deg, #ffd575 0%, #694900 100%);
  position: relative;
  width: 330px;
  height: 60px;
  left: 40%;
  font-size: 35px;
  font-family: "Gilroy";
  text-align: center;
  margin: auto;
  color: white;
  margin-top: 40px;

  border-radius: 18px;
}
.btn:hover {
  background: linear-gradient(180deg, #694900 0%, #ffd575 100%);
  color: rgb(0, 0, 0);
}

</style>
