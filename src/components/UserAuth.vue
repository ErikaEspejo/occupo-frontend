<template>
    <div id="usuarioreg" >
        <div class="usuarioreg">
            <h1>Inicio de sesión</h1>
            <p>
            <form v-on:submit.prevent="enviarDatos">
            <label for="user">Usuario</label>
            <input type="text" name="usuario" id="usuario" v-model="contacto.usuario" /><br>
            <p>
            <label for="contrasena">Contraseña</label>
            
            <input type="password" name="contrasena" id="contrasena"  v-model="contacto.password"/></p><br>
            <button class="button" type="submit" >Iniciar sesión</button>
                <router-link to="/usuario" >
                    <button class="button" type="submit" >Regístrate</button>
                </router-link>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { Global } from '../Global'

export default {

  name: 'UserAuth',
 
  components: { },
  
  data() {
    return {
      registro: false,
      campos:'',
      posts: [],

      contacto: {
        usuario: '',
        password: '',
      }
      
    }
  },
  mounted() {
    let self = this;
    axios.get(Global.url)
    .then( response => {
      self.posts = response.data;
    })
  },


  methods: {
    enviarDatos() {
      this.submited = true;
      this.$v.$touch();
      if(this.$v.$invalid){
        return false;
      }else {
        return true;
      }
      
    },
    datos: function() {
      this.campos = JSON.stringify(this.contacto);
    },
    getUser() {
      axios.get(Global.url + 'usuario/' + this.contacto.usuario)
        .then(response => {
          this.contacto = response
        });

    },
    addUser: function(){
      let self = this
      axios.post('http://localhost:8081/usuario', self.campos)
      .then( response => {this.campos = response})
      .catch( error => {alert(Error)} )
    },
    processAuthUser: function(){
            var self = this
            axios.post("http://127.0.0.1:8000/user/auth/", self.contacto,  {headers: {}})
                .then((result) => {
                    alert("Autenticación Exitosa");
                    self.$emit('log-in', self.conacto.usuario)
                })
                .catch((error) => {
                    
                    if (error.response.status == "404")
                        alert("ERROR 404: Usuario no encontrado.");
                    
                    if (error.response.status == "403")
                        alert("ERROR 403: Contraseña Erronea.");  
                });
        }

  },

}

</script>

<style>

.usuarioreg {
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

.usuarioreg {
    color: #ffffff;
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 15px;
}


</style>