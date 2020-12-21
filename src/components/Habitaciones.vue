<template>
  <div class="habitaciones">    
    <div class="title">      
      <h1> <br> <br> <br> NUESTRAS HABITACIONES </h1>    
      <hr width ="70px" align="left" color="#FBD784">  
      <div class="span"></div>
    </div>
    <div class="filtros">
      <!-- <fieldset>
        <select name="organizar" id="organizar" >
          <option value="" disabled selected>Organizar por...</option>
          <option value="1">Precios menores a 81.000</option>
          <option value="2">Precios entre 82.000 y 198.000</option>
          <option value="3">Precios superiores a 199.000</option>
        </select>
        <select name="filtrar" id="filtrar">
          <option value="" disabled selected>Filtrar por...</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </fieldset> -->
    </div>
<!--     <div class="habitaciones">
      <article class="habitacion" id="sencilla">
        <figure>
          <img src="" alt="">
        </figure>
          <h1> - HABITACIÓN SENCILLA</h1>
          <p>Cuenta con: <br>
            <ul>
              <li>Cama sencilla</li>
              <li>Baño privado</li>
              <li>Espacio amplio</li>
              <li>Acceso a areas comunes del hotel</li>
            </ul>
          </p>
          <h2 class="estado">Disponible</h2>
          <h2 class="precio">$ 100.000 / noche</h2>
          <form action="#" class="ir-reserva">
            <input type="submit" value="Reservar" class="button">
          </form>
      </article>

    </div> -->
    <div class="form-habitaciones">
      <form >
        <table>
          <tr>
            <td><label for="codigo">Código de habitación</label></td>
            <td><input type="text" name="codigo" id="codigo" v-model="lista.habitacionid"></td>
          </tr>
          <tr>
            <td><label for="tipo-habitacion">Tipo de habitación</label></td>
            <td><input name="tipo-habitacio" id="tipo-habitacion" v-model="lista.tipo"></td>         
          </tr>
          <tr>
            <td><label for="descrip-habitacion">Descripción</label></td>
            <td><textarea name="descrip-habitacion" id="descrip-habitacion" cols="40" rows="5" v-model="lista.descripcion"></textarea></td>
          </tr>
          <tr>
            <td><label for="precio">Precio</label></td>
            <td><input type="text" name="precio" id="precio" v-model="lista.precio"></td>
          </tr>
        </table>
        <input class="button" type="submit" value="CREAR HABITACIÓN" v-on:click.prevent="addRoom()">       
      </form>
      <div class="span"></div>
    </div>
    <div class="tabla">
      <h1>Listado de habitaciones</h1>
      <table>
        <tr>
          <th>Código habitación</th>
          <th>Tipo de habitación</th>
          <th>Descripción</th>
          <th>Precio</th>
        </tr>
        <tr v-for="item in HabitacionesInDB" :key="item">
          <td v-text="item.habitacionid">{{ item.habitacionid }}</td>
          <td v-text="item.tipo">{{ item.tipo }}</td>
          <td v-text="item.descripcion">{{ item.descripcion }}</td>
          <td v-text="item.precio">{{ item.precio }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Habitaciones',
  data () {
    return {

      lista: [],
      HabitacionesInDB: {
        "habitacionid": 0,
        "descripcion": "",
        "tipo": "",
        "precio": 0,
        "disponible": true,
      }

      
    }
  },

  mounted: function(){
    this.lista = this.HabitacionesInDB
    axios.get('http://localhost:8000/habitaciones')
      .then( response => {
        //self.HabitacionesInDB = result.data
        this.HabitacionesInDB = response.data
      })
    this.HabitacionesInDB.habitacionid = 0
    this.HabitacionesInDB.descripcion = ""
    this.HabitacionesInDB.tipo = ""
    this.HabitacionesInDB.precio = 0
    this.HabitacionesInDB.disponible = true

  },
  
  methods: {
    addRoom(){
      axios.post('http://localhost:8000/habitacioness/create_habitaciones', this.lista)
        .then( data => {
          alert("La habitación " + this.lista.habitacionid + " ha sido creada");
        })
    },

  }
  
}
</script>

<style scoped>

.span {
  height: 50px;
}

.habitaciones {
  display: grid;
  grid-template-columns: [inicio]0.3fr[tabla]2fr[end-tabla]0.3fr[fin];
}

.title {
  grid-column: tabla / end-tabla;
}

.title h1,h2 {
  width: 100%;  
  justify-content: left;
  text-align: left;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: #ffd575;
  letter-spacing: 5px;
}


.tabla, .form-habitaciones {
  grid-column: tabla / end-tabla;
  width: 100%;
}

.form-habitaciones td:nth-child(1){
  width: 400px;
}
textarea {
  border-radius: 10px;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 15px;
}
.button{
  width: 200px;
  color: white;
  font-weight: 300;
}

.tabla h1,th {
  color: #ffd575;
  text-align: center;
}

.tabla tr {
  color: #FFFFFF;
}


</style>
