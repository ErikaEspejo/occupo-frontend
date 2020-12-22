<template>
    <div id="AuthUser" >
        <div class="container_auth_user">
            <h1>Inicio de sesión</h1>
            <p>
            <form>
            <label for="user">Usuario</label>
            <input type="text" name="usuario" id="usuario" v-model="UsuarioInDB.username" /><br>
            <p>
            <label for="contrasena">Contraseña</label>
            
            <input type="password" name="contrasena" id="contrasena"  v-model="UsuarioInDB.contrasena"/></p><br>
            <button class="button" type="submit" v-on:click.prevent="processAuthUser()">Iniciar sesión</button>
                <router-link to="/usuario" >
                    <button class="button" type="submit">Regístrate</button>
                </router-link>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
//import { Global } from '../Global'

export default {

  name: 'UserAuth',
  
  data() {
    return {
      registro: false,

      UsuarioInDB: {
        username: "",
        contrasena: "",
      }
      
    }
  },
  created(){
  },
  methods: {
    
    processAuthUser(){
      var self = this
      axios.post("https://test-sprint2.herokuapp.com/usuario/auth", self.UsuarioInDB, {headers: {}})
        .then((result) => {
          if (result.status == "200") {
            alert("Autenticación Exitosa")
            localStorage.setItem('current_username', self.UsuarioInDB.username)
            localStorage.setItem('isAuth', true)
            this.UsuarioInDB.username = ""
            this.UsuarioInDB.contrasena = ""
          }
        })
          .catch((error) => {
                      
            if (error.response.status == "404")
              alert("ERROR 404: Usuario no encontrado.");
                      
            if (error.response.status == "403")
              alert("ERROR 403: Contraseña Erronea.");  
          });
    },

  },

}

</script>

<style>

.container_auth_user {
  display: grid;
  grid-template-columns: [inicio]1fr[fin];
  grid-template-rows: [titulo]20px[descrip]50px[form]1.5fr[fin];
  justify-items: center;
}


h1 {
  width: 100%;  
  justify-content: center;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 25px;
  color: #ffd575;
  grid-column: inicio / fin;
  text-align: center;
}
.title p {
  font-size: 20px;
  color: white;
  grid-column: inicio / fin;
  text-align: center;
}
input {
  border-radius: 50px;
  border: none;
  background: white;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  text-align: center;
  width: 250px;
}
.button {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  background: linear-gradient(180deg, #ffd575 0%, #694900 100%);
  width: 150px;
  height: 40px;
  font-size: 16px;
  border-radius: 18px;
  font-weight: bold;
}
.button:hover {
  background: linear-gradient(180deg, #694900 0%, #ffd575 100%);
}

.container_auth_user {
    color: #ffffff;
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 15px;
}


</style>