<template>
  <div class="principal">     
    <div class="title">      
      <h1> <br> <br> <br> NUESTRAS HABITACIONES <br>
      MÁS POPULARES </h1>    
      <hr width ="70px" align="left" color="#FBD784">
      <br>
      <div class="span"></div>
    </div>
    <div class="habitaciones">
      <div class="items">
        <article class="item-left">
          <h1>01</h1>
          <h3>- HABITACIONES SENCILLAS</h3>
          <h4>Comodidad al <br> mejor precio</h4>
          <p>Habitaciones con cama sencilla, baño privado, <br>
           ducha de agua caliente, acceso a restaurante.</p>
           <h5>3 habitaciones disponibles</h5>
           <form action="#">
             <input class="button" type="submit" value="Ver más...">
           </form>
           <figure>
             <img src="../assets/single-room.jpg" alt="">
           </figure>
        </article>
        <div class="span"></div>
        <article class="item-right">
          <h1>02</h1>
          <h3>- HABITACIONES SENCILLAS</h3>
          <h4>Comodidad al <br> mejor precio</h4>
          <p>Habitaciones con cama sencilla, baño privado, <br>
           ducha de agua caliente, acceso a restaurante.</p>
           <h5>3 habitaciones disponibles</h5>
           <form action="#">
             <input class="button" type="submit" value="Ver más...">
           </form>
           <figure>
             <img src="../assets/single-room.jpg" alt="">
           </figure>
        </article>
        <div class="span"></div>
        <article class="item-left">
          <h1>03</h1>
          <h3>- HABITACIONES SENCILLAS</h3>
          <h4>Comodidad al <br> mejor precio</h4>
          <p>Habitaciones con cama sencilla, baño privado, <br>
           ducha de agua caliente, acceso a restaurante.</p>
           <h5>3 habitaciones disponibles</h5>
           <form action="#">
             <input class="button" type="submit" value="Ver más...">
           </form>
           <figure>
             <img src="../assets/single-room.jpg" alt="">
           </figure>
        </article>
      </div>
    </div>
  <div class="title">      
    <h1> <br> <br> <br> NUESTROS SERVICIOS </h1>    
    <hr width ="70px" align="left" color="#FBD784">
    <br>
    
  </div>
  <div class="servicios">
    <figure>
      <img src="../assets/bar.jpg" alt="">
    </figure>
  </div>
  <h1 class="reserva-call-action">¿QUÉ ESPERAS PARA RESERVAR?</h1>
  <form action="#" class="button-reserva">
    <input type="submit" value="¡Reserva ya!" class="reservar">
  </form>
  </div>
</template>

<script>
export default {
  name: 'Principal',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.span {
  height: 50px;
}

.principal {
  display: grid;
  grid-template-columns: [inicio]0.3fr[articles]2fr[end-articles]0.3fr[fin];
}

.title {
  grid-column: articles / end-articles;
}

.title h1 {
  width: 100%;  
  justify-content: left;
  text-align: left;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: #ffd575;
  letter-spacing: 5px;
}

.habitaciones {
  grid-column: articles / end-articles;
}

.item-left{
  display: grid;
  grid-template-columns: 0.3fr 0.25fr 1fr 1.5fr;
  grid-template-rows: 60px 20px 15px 90px 50px 50px 50px;
  justify-items: left;
  align-items: center;
}

.item-left h1{
  font-size:125px;
  font-family: 'Roboto';
  color: #ffffff;
  opacity: 0.1;
  letter-spacing: -4px;
  grid-column: 1/3;
  grid-row: 1/4;
}

.item-left h3{
  color:#ffd575;
  grid-column: 2/4;
  grid-row: 2/3;
  font-size: 16px;
  letter-spacing: 5px;
}

.item-left h4 {
  font-family: 'Arbutus Slab', Helvetica, Arial, sans-serif;
  font-size: 30px;
  font-weight: 200;
  grid-column: 2/4;
  grid-row: 4/5;
  color:#ffffff;
}

.item-left p {
  grid-column: 2/4;
  grid-row: 5/6;
  font-size: 16px;
  color:#ffffff;
}

.item-left h5 {
  grid-column: 2/4;
  grid-row: 6/7;
  font-size: 16px;
  color:#ffd575;
}

.item-left form {
  grid-column: 2/4;
  grid-row: 7/8;
}

.button {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  background: linear-gradient(180deg, #ffd575 0%, #694900 100%);
  width: 100px;
  height: 35px;
  font-size: 16px;
  border-radius: 18px;
  font-weight: 400;
}


.button:hover {
  background: linear-gradient(180deg, #694900 0%, #ffd575 100%);
}

.item-left figure {
  height : 300px;
  width: 400px;
  background: url(../assets/single-room.jpg);
  grid-column: 4/5;
  grid-row: 1/8;
  border-radius: 40px;
  overflow: hidden;  
}

.item-left figure img {
  height : 300px;
  width: 400px
}

.item-right{
  display: grid;
  grid-template-columns: 1.5fr 0.3fr 0.25fr 1fr ;
  grid-template-rows: 60px 20px 15px 90px 50px 50px 50px;
  justify-items: left;
  align-items: center;
}

.item-right h1{
  font-size:125px;
  font-family: 'Roboto';
  color: #ffffff;
  opacity: 0.1;
  letter-spacing: -4px;
  grid-column: 2/4;
  grid-row: 1/4;
}

.item-right h3{
  color:#ffd575;
  grid-column: 3/5;
  grid-row: 2/3;
  font-size: 16px;
  letter-spacing: 5px;
}

.item-right h4 {
  font-family: 'Arbutus Slab', Helvetica, Arial, sans-serif;
  font-size: 30px;
  font-weight: 200;
  grid-column: 3/5;
  grid-row: 4/5;
  color:#ffffff;
}

.item-right p {
  grid-column: 3/5;
  grid-row: 5/6;
  font-size: 16px;
  color:#ffffff;
}

.item-right h5 {
  grid-column: 3/5;
  grid-row: 6/7;
  font-size: 16px;
  color:#ffd575;
}

.item-right form {
  grid-column: 3/5;
  grid-row: 7/8;
}

.item-right figure {
  height : 300px;
  width: 400px;
  background: url(../assets/single-room.jpg);
  grid-column: 1/2;
  grid-row: 1/8;
  border-radius: 40px;
  overflow: hidden;  
}

.item-right figure img {
  height : 300px;
  width: 400px
}

.servicios {
  grid-column: inicio / fin;
}

.servicios figure {
  height : 500px;
  width: 100%;
  grid-column: inicio / fin;
  overflow: hidden;  
  margin: 0;
}

.servicios figure img {
  width: 100%;
  height: 800px;
  grid-column: inicio / fin;
}
.reserva-call-action{
  grid-column: inicio / fin;
  font-size: 22px;
  color: #ffd575;
  letter-spacing: 2px;
}
.reservar {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  background: linear-gradient(180deg, #ffd575 0%, #694900 100%);
  width: 150px;
  height: 40px;
  font-size: 20px;
  border-radius: 15px;
  font-weight: 600;
}

.button-reserva {
  grid-column: inicio / fin;
}

.reservar:hover {
  background: linear-gradient(180deg, #694900 0%, #ffd575 100%);
}

</style>