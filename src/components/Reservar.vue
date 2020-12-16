<template>
  <div class="reservar">    
    <div class="title">      
      <h1> <br> <br> <br> BIENVENIDO USER_NAME </h1>    
      <hr width ="70px" align="left" color="#FBD784">      
      <h2> Reserva tu habitación en 3 sencilos pasos: </h2>    
      <div class="span"></div>
      <div class="pasos">
        <div class="paso-1">
          <h1 class="paso">01</h1>
          <h2 class="indicacion">Selecciona la habitación que desees</h2>
          <form>
            <fieldset>
              <input type="radio" id="sencilla" name="habitacion" value="sencilla">
              <label for="sencilla">Habitación sencilla</label> 
            </fieldset>
            <fieldset>
              <input type="radio" id="doble" name="habitacion" value="doble">
              <label for="doble">Habitación doble</label> 
            </fieldset>
            <fieldset>
              <input type="radio" id="Suite de lujo" name="habitacion" value="suite">
              <label for="suite">Suite de lujo</label>
            </fieldset>
          </form>
          <figure>
            <img src="../assets/single-room.jpg" alt="">
          </figure>
          <form action="#" class="button-ver">
             <input class="button" type="submit" value="Ver más...">
           </form>
        </div>
        <div class="span"></div>
        <hr width ="70px" align="left" color="#FBD784">      
        <div class="paso-2">
          <h1 class="paso">02</h1>
          <h2 class="indicacion">Selecciona las fechas de llegada y salida</h2>
          <HotelDatePicker class="calendar" 
            format="DD/MM/YYYY">
            </HotelDatePicker>
        </div>
        <div class="span"></div>
        <hr width ="70px" align="left" color="#FBD784">      
        <div class="paso-3">          
          <h1 class="paso">03</h1>
          <h2 class="indicacion">Confirmar reserva</h2>
          <form>
            <table>
              <tr>
                <td>
                  <label for="usuario">Ingresa tu usuario</label>
                </td>
                <td>
                  <input type="text" id="user" name="user" value="user">
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <p class="ir-registro">¿No tienes usuario? <a href="#">Haz clic aquí</a></p>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="habitaciones">No. Habitaciones</label>
                </td>
                <td>
                  <select name="habitaciones" id="habitaciones">
                    <option value="">Lista 1,2,3,4,5</option>
                  </select>
                </td>
              </tr>     
            </table>
            <div class="span"></div>
            <table class="adultos-ninos">
              <tr>
                <th></th>
                <th>Adultos</th>
                <th>Niños</th>
              </tr>
              <tr>
                <td>Habitación 1</td>
                <td>
                  <select name="adultos-1" id="adultos-1">
                    <option value="">Lista</option>
                  </select>
                </td>
                <td>
                  <select name="niños-1" id="niños-1">
                    <option value="">Lista</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Habitación 2</td>
                <td>
                  <select name="adultos-2" id="adultos-2">
                    <option value="">Lista</option>
                  </select>
                </td>
                <td>
                  <select name="niños-2" id="niños-2">
                    <option value="">Lista</option>
                  </select>
                </td>
              </tr>
            </table>            
            <form action="#" class="form-confirmar">
               <input class="button-confirmar" type="submit" value="Confirmar reserva">
           </form>              
          </form>        
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import HotelDatePicker from 'vue-hotel-datepicker';
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';
//import { Global } from '../Global'
import axios from 'axios'

export default {
  name: 'Reservar',
  data () {
    return {
      es:{
        /*night: 'Noche',
        nights: 'Noches',
        'day-names': ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],*/
        'check-in': 'Llegada',
        'check-out': 'Salida',
        /*'month-names': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],*/
      }
    }

  },
  components: {
    HotelDatePicker,
      reservas: []
  },
  mounted() {
    
  },
  methods: {
    
  }
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

.title, .pasos {
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

.paso-1 {
  display: grid;
  grid-template-columns: 0.15fr 0.4fr 0.5fr;
  grid-template-rows: 50px 100px 160px 50px;
  justify-items: left;
  align-items: center;
}

.paso {
  font-size:120px !important;
  font-family: 'Roboto' !important;
  color: #ffffff !important;
  opacity: 0.1 !important;
  letter-spacing: -4px !important;
  grid-column: 1/2 !important;
  grid-row: 1/3 !important;
}

.indicacion {
  color: #ffd575 !important;
  font-size: 18px;
  grid-column: 2/3;
  grid-row: 1/2;
}

.paso-1 form {
  color: white;
  text-align: left;
  grid-column: 2/3;
  grid-row: 2/3;
}

fieldset {
  border: none;
  height: 20px;
}

figure {
  height : 300px;
  width: 400px;
  background: url(../assets/single-room.jpg);
  grid-column: 3/4 ;
  grid-row: 1/4 ;
  border-radius: 40px;
  overflow: hidden;  
}

figure img {
  height : 300px;
  width: 400px
}

.button-ver {
  grid-column: 3/4 !important;
  grid-row: 4/5 !important;
}
.button {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  background: linear-gradient(180deg, #ffd575 0%, #694900 100%);
  width: 100px;
  height: 35px;
  font-size: 16px;
  border-radius: 15px;
  font-weight: 400;
  color: white;
  margin-left:50px ;

}

.paso-2 {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 0.17fr 0.4fr ;
  grid-template-rows: 30px 90px;
  justify-items: left;
  align-items: center;
}

.calendar {
  grid-column: 2/3;
  grid-row: 2/3;
}

.paso-3 {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 0.17fr 0.6fr ;
  grid-template-rows: 30px 50px 300px 50px;
  justify-items: left;
  align-items: center;
}

.paso-3 form {
  grid-column: 2/3;
  grid-row: 2/4;
}

.paso-3 table {  
  width: 100%;
  color: white;
  font-size: 15px;
  
}

.paso-3 table input, select {
  border-radius: 50px;
  border: none;
  background: white;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 14px;
}

.ir-registro{
  font-size: 12px;
}

.ir-registro a{
  color: #ffd575;
}

.adultos-ninos td:nth-child(2){
  width: 50%;
  
  height: 30px;
}

table td:nth-child(1){
  text-align: right;
}

tr{
  text-justify:auto;
}

.button-confirmar {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  background: linear-gradient(180deg, #ffd575 0%, #694900 100%);
  width: 150px;
  height: 40px;
  font-size: 16px;
  border-radius: 18px;
  font-weight: bold;
  margin-top: 30px;
  color: white;
}

</style>
