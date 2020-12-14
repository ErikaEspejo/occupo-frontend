<template>
  <div id="crear-cuenta">
    <div class="title">      
      <h1> - CREA TU CUENTA - </h1>    
      <p>Crea tu cuenta GRATIS y empieza a disfrutar de <br>
        experiencias exclusivas a precios increíbles <br></p>  
    </div>  
    <form v-on:submit.prevent="enviarDatos">
      <fieldset>
        <label for="usuario">Usuario</label>
        <input type="text" name="usuario" id="usuario" v-model="contacto.usuario" autocomplete="=off"/>
        <div v-if="submited && !$v.contacto.usuario.required"><h6>El campo usuario es obligatorio</h6></div>
        <div v-if="submited && !$v.contacto.usuario.minLength"><h6>El campo usuario debe contener mínimo 4 caracteres</h6></div>
      </fieldset>
      <fieldset>
        <label for="nombre">Nombre(s)</label>
        <input type="text" name="nombre" id="nombre" v-model="contacto.nombre" />
        <div v-if="submited && !$v.contacto.nombre.required"><h6>El campo nombre es obligatorio</h6></div>
        <div v-if="submited && !$v.contacto.nombre.minLength"><h6>El campo nombre debe contener mínimo 2 caracteres</h6></div>
      </fieldset>
      <fieldset>
        <label for="apellido">Apellido(s)</label>
        <input type="text" name="apellido" id="apellido" v-model="contacto.apellido" />
        <div v-if="submited && !$v.contacto.apellido.required"><h6>El campo apellido es obligatorio</h6></div>
        <div v-if="submited && !$v.contacto.apellido.minLength"><h6>El campo apellido debe contener mínimo 2 caracteres</h6></div>
      </fieldset>
      <fieldset>
        <label for="tipo-identificacion">Documento de Identificación</label>
        <select name="tipo-identificacion" id="tipo-identificacion" v-model="contacto.tipoid">
          <option value="" disabled selected>Selecciona tu tipo de documento</option>
          <option value="">Cédula de Ciudadanía</option>
          <option value="">Cédula de Extranjería</option>
          <option value="">Pasaporte</option>
        </select>
      </fieldset>
      <fieldset>
        <label for="identificacion">Número de Identificación</label>
        <input type="text" name="identificacion" id="identificacion" v-model="contacto.identificacion" />
        <div v-if="submited && !$v.contacto.identificacion.required"><h6>El campo número de identificación es obligatorio</h6></div>
        <div v-if="submited && !$v.contacto.identificacion.minLength"><h6>El campo número de identificacion debe contener mínimo 2 caracteres</h6></div>
      </fieldset>
      <fieldset>
        <label for="nacimiento">Fecha de Nacimiento</label>
        <input type="date" name="nacimiento" id="nacimiento" v-model="contacto.fechanacim" />
      </fieldset>
      <fieldset>
        <label for="telefono">Telefono</label>
        <input type="text" id="indicativo">
        <input type="text" name="telefono" id="telefono" v-model="contacto.telefono" />
      </fieldset>
      <fieldset>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="contacto.email" />
        <div v-if="submited && !$v.contacto.email.required"><h6>El campo email es obligatorio</h6></div>
        <div v-if="submited && !$v.contacto.email.minLength"><h6>El campo email debe contener mínimo 2 caracteres</h6></div>
        <div v-if="submited && !$v.contacto.email.email"><h6>El campo debe tener formato de email</h6></div>
      </fieldset>
      <fieldset>
        <label for="contrasena">Contraseña</label>
        <input type="password" name="contrasena" id="contrasena" v-model="contacto.password" />
        <div v-if="submited && !$v.contacto.password.required"><h6>El campo contraseña es obligatorio</h6></div>
        <div v-if="submited && !$v.contacto.password.minLength"><h6>El campo contraseña debe contener mínimo 6 caracteres</h6></div>
      </fieldset>
      <fieldset>
        <label for="confirmar-contrasena">Confirmar contraseña</label>
        <input type="password" name="confirmar-contrasena" id="confirmar-contrasena" />
      </fieldset>
      <fieldset>
        <input type="checkbox" name="promociones" id="promociones">
        <label for="promociones" class="promociones">Envíame ofertas exclusivas y promociones</label>
      </fieldset>
      <fieldset>
        <input class="button" type="submit" value="CREAR CUENTA">
      </fieldset>
      <p>Al hacer clic sobre CREAR CUENTA está aceptando nuestra
        <a href="#">Política de Privacidad</a>
      </p>
    </form>

  </div>
</template>

<script>
import axios from 'axios';
import { required, minLength, email } from 'vuelidate/lib/validators'


export default {

  name: 'CrearCuenta',

  components: { },

  data() {
    return {
      submited: false,

      contacto: {
        usuario: '',
        nombre: '',
        apellido: '',
        tipoid: '',
        identificacion: '',
        fechanacim: '',
        telefono: '',
        email: '',
        password: ''
      }

    }
  },

  methods: {
    enviarDatos() {
      this.submited = true;
      this.$v.$touch();
      if(this.$v.$invalid){
        return false;
      }
      alert(this.contacto.nombre);
    }
  },
  validations: {
    contacto: {
      usuario: {
        required, minLength: minLength(4)
      },
      nombre: {
        required, minLength: minLength(2)
      },
      apellido: {
        required, minLength: minLength(2)
      },
      identificacion: {
        required, minLength: minLength(2)
      },
      email: {
        required, minLength: minLength(2), email
      },
      password: {
        required, minLength: minLength(6)
      },
    }
  }
}

</script>

<style>

.crear-cuenta {
  display: grid;
  grid-template-columns: [inicio]1fr[fin];
  grid-template-rows: [titulo]20px[descrip]50px[form]1fr[fin];
  justify-items: center;
}

.title h1 {
  width: 100%;  
  justify-content: center;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 25px;
  color: #ffd575;
}

.title p {
  font-size: 20px;
  color: white;

}

form {
  margin-top:50px;
}

form fieldset {
  border: none;
  color: white;
  font-size: 18px;
  height: 25px;
}

form input, select {
  border-radius: 50px;
  background: white;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  text-align: center;
}

h6 {
  padding: 0%;
  margin: 0;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #eb300f;
}

label {
  margin-right: 20px;

}

#indicativo {
  width: 40px;
}


form p {
  font-size: 14px;
  color: white;
}


.promociones {
  font-size: 14px;
}

form a {
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

</style>