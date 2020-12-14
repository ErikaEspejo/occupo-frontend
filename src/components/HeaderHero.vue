<template>
  <div class="header-hero">    
    <img id="hero-image" src="../assets/hero.jpg" alt="hero">
    <div id="shadow"></div>
    <div class="header">
      <a href="#">
        <img width="100px" class="logo" src="../assets/logo-occupo.png" alt="logo">    
      </a>
      <div class="secciones">
        <ol>
          <li>
            <a href="#">Habitaciones</a>
          </li>
          <li>
            <a href="#">Reservas</a>
          </li>
          <li>
            <a href="#">¿Quiénes somos?</a>
          </li>
        </ol>
      </div> 
      <div class="usuario">
        <ol>
          <li>
            <a href="#">Mis reservas</a>
          </li>
          <li>
            <a href="#"><img class="user-icon" width="25px" src="../assets/user.png" alt="">Signup / Login</a>            
          </li>
        </ol>
      </div>          
    </div>
    <div class="hero">
      <div class="redes">
        <p class="follow">Follow us</p>
        <a href="#"><img width="45px" src="../assets/Twitter-logo.svg" alt="" id="twitter"></a>
        <a href="#"><img width="40px" src="../assets/instagram-logo.png" alt=""></a>
      </div>
      <div class="slogan">      
          <hr width ="70px" align="left" color="#FBD784">
        <p>
          Ocúpate de viajar, <br>
          nosotros nos preocupamos <br>
            por tu reserva.</p>
        <p class="scroll">
          Scroll down ↓
        </p>
      </div>
      <div class="shadow-title"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderHero',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

  .header-hero {
    display: grid;
    grid-template-columns: [inicio]1fr[fin];
    grid-template-rows: [header]80px[hero]200px[fin];
  }

  #hero-image {
    width: 100%;
    grid-column: inicio / fin;
    grid-row: header / fin;
    background-color: red;
  }

  #shadow {
    grid-column: inicio / fin; 
    grid-row-start: header;
    height: 888px;  
    background: linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%);
  }

  .header {
    grid-column: inicio / fin; 
    grid-row-start: header;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: [logo]200px[secciones]1fr[usuario]350px[fin];
    
  }

 .logo{
    grid-column: logo / secciones;    
  }

  .secciones {
    grid-column: secciones / usuario;      
    display: flex;  
  }

  .header a {
    font-size: 16px;
    color: white;
    text-decoration: none;
    height: inherit;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .header ol {
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    height: inherit;
  }

  .header ol li {
    height: inherit;
  }
  
  .usuario {
    grid-column: usuario / fin;
  }

  .user-icon {
    padding-right: 7px;
  }

  .hero{
    height: 600px;
    grid-column: inicio / fin;
    grid-row: hero / fin;
    display: grid;
    grid-template-columns:[redes]250px[slogan]1fr[fin];
    color: white;
    font-family: 'Arbutus Slab', Helvetica, Arial, sans-serif;
    font-size: 55px;
    text-align: left;
    justify-items: left;
    align-items: center;
  }

  .redes {
    grid-column: redes / slogan;
    font-family: 'Lato',Helvetica, Arial, sans-serif;
    writing-mode: vertical-lr;
    font-size: 20px;  
    display: grid;
    grid-template-columns:125px repeat(2,1fr);
    grid-gap: 10px;
    width: 100px;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }

  .follow{
    grid-row: 1/2;
  }

  .scroll{
    font-family: 'Lato',Helvetica, Arial, sans-serif;
    font-size: 25px;
  }

  .shadow-title{
    width: 100%;
    height: 500px;
    grid-column: redes / fin;
    background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 69.2%);
  }
</style>
