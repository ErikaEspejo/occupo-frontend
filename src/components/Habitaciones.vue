<template>
  <div class="habitaciones">    
    <div class="title">      
      <h1> <br> <br> <br> NUESTRAS HABITACIONES </h1>    
      <hr width ="70px" align="left" color="#FBD784">  
      <div class="span"></div>
    </div>
    <div class="filtros">
      <fieldset>
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
      </fieldset>
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
        "descripcion": "none",
        "tipo": "none",
        "precio": 0.0,
        "disponible": true,
      }

      
    }
  },

  created: function(){
    //this.HabitacionesInDB.habitacionid = this.$route.params.habitacionid
    let self = this

    axios.get('http://localhost:8000/habitaciones')
      .then( response => {
        //self.HabitacionesInDB = result.data
        console.log(response.data)
        self.HabitacionesInDB = response.data
        self.lista = self.HabitacionesInDB
        console.log(self.lista)
      })
  },
}
</script>

<style scoped>

.span {
  height: 50px;
}

.reservar {
  display: grid;
  grid-template-columns: [inicio]0.3fr[paso]2fr[end-paso]0.3fr[fin];
}

.title {
  grid-column: paso / end-paso;
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

.title h2 {  
  color: white;
  letter-spacing: 0px;
  font-weight: 300;
}

table tr {
  color: #FFFFFF;
}
table th {
  color: #ffd575;
}


</style>
