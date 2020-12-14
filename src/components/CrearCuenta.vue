<template>
  <div id="crear-cuenta">
    <div class="title">      
      <h1> - CREA TU CUENTA - </h1>    
      <p>Crea tu cuenta GRATIS y empieza a disfrutar de <br>
        experiencias exclusivas a precios increíbles <br></p>  
    </div>  
    <form>
      <fieldset>
        <label for="nombre">Nombre(s)</label>
        <input type="text" name="nombre" id="nombre">
      </fieldset>
      <fieldset>
        <label for="apellidos">Apellido(s)</label>
        <input type="text" name="apellidos" id="apellidos">
      </fieldset>
      <fieldset>
        <label for="tipo-identificacion">Documento de Identificación</label>
        <select name="tipo-identificacion" id="tipo-identificacion">
          <option value="" disabled selected>Selecciona tu tipo de documento</option>
          <option value="">Cédula de Ciudadanía</option>
          <option value="">Cédula de Extranjería</option>
          <option value="">Pasaporte</option>
        </select>
      </fieldset>
      <fieldset>
        <label for="identificacion">Número de Identificación</label>
        <input type="text" name="identificacion" id="identificacion">
      </fieldset>
      <fieldset>
        <label for="nacimiento">Fecha de Nacimiento</label>
        <input type="date" name="nacimiento" id="nacimiento">
      </fieldset>
      <fieldset>
        <label for="telefono">Telefono</label>
        <input type="text" id="indicativo">
        <input type="text" name="telefono" id="telefono">
      </fieldset>
      <fieldset>
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
      </fieldset>
      <fieldset>
        <label for="contrasena">Contraseña</label>
        <input type="password" name="contrasena" id="contrasena">
      </fieldset>
      <fieldset>
        <label for="confirmar-contrasena">Nombre(s)</label>
        <input type="password" name="confirmar-contrasena" id="confirmar-contrasena">
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


export default {

  name: 'CrearCuenta',

  components: { },

  //created: function() {
     // this.verificarpass(),
      //this.enviar()
  //},

  /*methods: {
      verificarpass: function() {
          if password == confirm {
              this.enviar
          }else {
              return Error
          }
      }
      //metodo para enviar la información y contruirla en la BD
      enviar: function() {

      }
  },
  data: {
      lista [
          {
              //Revisar esta configuración
              id: 0, username:"username", nombre:"nombre", apellido:"apellido", tipo_identificacion:"tipo_identificacion", identificacion:"identificacion", 
              fechanacim:"fechanacim", telefono:"telefono", password:"password"
          }
      ]
  }*/

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
