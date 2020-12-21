<template>
  <div id="crear-cuenta">
    <div class="title">   
      <h1>  CREA TU CUENTA  </h1>    
      <hr width ="70px" align="center" color="#FBD784">     
      <p>Crea tu cuenta GRATIS y empieza a disfrutar de <br>
        experiencias exclusivas a precios increíbles <br></p>  
    </div>  
    <div >
      <form v-on:submit.prevent="enviarDatos">
        <table >
          <tr>
            <td>
              <label for="usuario">Usuario</label>
            </td>
            <td>
              <input type="text" name="username" id="username" v-model="UsuarioInDB.username" autocomplete="=off"/>
              <div v-if="submited && !$v.UsuarioInDB.username.required"><h6>El campo usuario es obligatorio</h6></div>
              <div v-if="submited && !$v.UsuarioInDB.username.minLength"><h6>El campo usuario debe contener mínimo 4 caracteres</h6></div>
            </td>
          </tr>
          <tr>
            <td>
              <label for="nombre">Nombre(s)</label>
            </td>
            <td>
              <input type="text" name="nombre" id="nombre" v-model="UsuarioInDB.nombre" />
              <div v-if="submited && !$v.UsuarioInDB.nombre.required"><h6>El campo nombre es obligatorio</h6></div>
              <div v-if="submited && !$v.UsuarioInDB.nombre.minLength"><h6>El campo nombre debe contener mínimo 2 caracteres</h6></div>
            </td>
          </tr>
          <tr>
            <td>
              <label for="apellido">Apellido(s)</label>
            </td>
            <td>
              <input type="text" name="apellido" id="apellido" v-model="UsuarioInDB.apellido" />
              <div v-if="submited && !$v.UsuarioInDB.apellido.required"><h6>El campo apellido es obligatorio</h6></div>
              <div v-if="submited && !$v.UsuarioInDB.apellido.minLength"><h6>El campo apellido debe contener mínimo 2 caracteres</h6></div>
            </td>
          </tr>
          <tr>
            <td>
              <label for="tipo-identificacion">Documento de Identificación</label>
            </td>
            <td>
              <select name="tipo-identificacion" id="tipo-identificacion" v-model="UsuarioInDB.tipo_identificacion">
                <option value="" disabled selected>Selecciona tu tipo de documento</option>
                <option value="">Cédula de Ciudadanía</option>
                <option value="">Cédula de Extranjería</option>
                <option value="">Pasaporte</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="identificacion">Número de Identificación</label>
            </td>
            <td>
              <input type="text" name="identificacion" id="identificacion" v-model="UsuarioInDB.identificacion" />
              <div v-if="submited && !$v.UsuarioInDB.identificacion.required"><h6>El campo número de identificación es obligatorio</h6></div>
              <div v-if="submited && !$v.UsuarioInDB.identificacion.minLength"><h6>El campo número de identificacion debe contener mínimo 2 caracteres</h6></div>
            </td>
          </tr>      
          <tr>
            <td>
              <label for="nacimiento">Fecha de Nacimiento</label>
            </td>
            <td>
              <input type="date" name="nacimiento" id="nacimiento" v-model="UsuarioInDB.fechanacim" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="telefono">Telefono</label>
            </td>
            <td class="telefono">
              <input type="text" id="indicativo">
              <input type="text" name="telefono" id="telefono" v-model="UsuarioInDB.telefono" />
            </td>
          </tr>     
          <tr>
            <td>
              <label for="email">Email</label>
            </td>
            <td>
              <input type="email" name="email" id="email" v-model="UsuarioInDB.correo" />
              <div v-if="submited && !$v.UsuarioInDB.correo.required"><h6>El campo email es obligatorio</h6></div>
              <div v-if="submited && !$v.UsuarioInDB.correo.minLength"><h6>El campo email debe contener mínimo 2 caracteres</h6></div>
              <div v-if="submited && !$v.UsuarioInDB.correo.email"><h6>El campo debe tener formato de email</h6></div>
            </td>
          </tr>
          <tr>
            <td>
              <label for="contrasena">Contraseña</label>
            </td>
            <td>
              <input type="password" name="contrasena" id="contrasena" v-model="UsuarioInDB.password" />
              <div v-if="submited && !$v.UsuarioInDB.password.required"><h6>El campo contraseña es obligatorio</h6></div>
              <div v-if="submited && !$v.UsuarioInDB.password.minLength"><h6>El campo contraseña debe contener mínimo 6 caracteres</h6></div>
            </td>
          </tr>
          <tr>
            <td>
              <label for="confirmar-contrasena">Confirmar contraseña</label>
            </td>
            <td>
              <input type="password" name="confirmar-contrasena" id="confirmar-contrasena" v-model="UsuarioInDB.confirmapass" />
              <div v-if="submited && !$v.UsuarioInDB.confirmapass.sameAsPassword"><h6>Las contraseñas no coinciden</h6></div>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="promociones" id="promociones">
            </td>
            <td>
              <label for="promociones" class="promociones">Envíame ofertas exclusivas y promociones</label>
            </td>
          </tr>    
        </table>
        <input class="button" type="submit" value="CREAR CUENTA">
        
        <p class=" politicas">Al hacer clic sobre CREAR CUENTA está aceptando nuestra
          <a href="" v-on:click.prevent="politica = true">Política de Privacidad</a>
        </p>
      </form>
    </div>
      <div class="ventana" id="vent" :style="politica ? { display:'block' } : { display:'none' } " >
        <h4>Política de privacidad y tratamiento de datos</h4>
        <p>Hotel <strong>Occupo</strong> es responsable del tratamiento de datos personales. <br> <br>
          Hotel <strong>Occupo</strong> informa a todos los usuarios que el tratamiento de los datos registrados como usuario, nombres, apellidos,
          fecha de nacimiento, documento de identificación, teléfono, correo electrónico y contraseña, serán adminsitrados únicamente para 
          fines únicos del hotel. Por lo tanto las únicas personas que conocerán los datos de los usuarios serán los empleados, persoal administrativo
          del hotel y personal que el hotel cnsidere siempre y cuando sea para realizar gestiones relacionadas con el usuario y los servicios 
          ofrecidos por el hotel.</p>
        <button class="aceptar" v-on:click.prevent="politica = !politica">Aceptar</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'



export default {

  name: 'ActualizarUsuario',

  components: {  },
  
  data() {
    return {
      submited: false,
      politica: false,
      posts: [],
      campos:'',

      UsuarioInDB: {
        username: '',
        nombre: '',
        apellido: '',
        tipo_identificacion: '',
        identificacion: '',
        fechanacim: '',
        telefono: '',
        correo: '',
        password: '',
        confirmapass: ''
      }
      

    }
  },
  mounted() {

  },


  methods: {
    
  },

}

</script>

<style>


.crear-cuenta {
  display: grid;
  grid-template-columns: [inicio]1fr[fin];
  grid-template-rows: [titulo]20px[descrip]50px[form]1.5fr[fin];
  justify-items: center;
}
.title h1 {
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
table input, select {
  border-radius: 50px;
  border: none;
  background: white;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  text-align: center;
  width: 250px;
}
#promociones {
  width: 50px;
}
table {
  width: 100%;
}
.politicas {
  color: white;
  font-size: 14px;
}
.politicas a{
  color: #ffd575;
  font-size: 14px;
}
h6 {
  padding: 0%;
  margin: 0;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #eb300f;
}
table label {
  margin-right: 20px;
  color: white;
}
#indicativo {
  width: 40px;
}
table p {
  font-size: 14px;
  color: white;
}
table tr {
  height:30px;
}
.promociones {
  font-size: 14px;
  text-align: left;
}
table td:nth-child(2){
  text-align: left;
}
table td:nth-child(1){
  text-align: right;
}
table form p a {
  color:#ffd575;
  text-decoration:  none; 
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
.ventana {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 400px;
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 25px;
  display: none;
}
  h4 {
    color: #000000;
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 15px;
  }
  #telefono {
    width: 200px;
  }
.ventana p {
    color: #000000;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 11px;
  }
.aceptar {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  background: #000000;
  align-items: center;
  width: 100px;
  height: 35px;
  font-size: 14px;
  border-radius: 16px;
  font-weight: bold;
  color: white;
}

</style>