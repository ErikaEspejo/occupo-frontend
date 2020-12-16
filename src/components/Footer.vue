<template>
  <div class="footer">    
    <div class="copyright">
      <div class="span"></div>
      <img src="../assets/logo-occupo.png" alt="">
      <p> <br> 
        Descubre nuevos lugares <br>
        sin preocuparte por tu hotel.
        </p>
      <p color="#48555C"> <br><br> Copyright 2020, occupo. Terms &amp; Privacy</p>
    </div>
    <div class="links">
      <div class="span"></div>
      <h3>Más de occupo</h3>
      <a href="#">¿Quiénes somos?<br><br></a>
      <a href="#">Empleados <br><br></a>
      <a href="#">Contact us <br><br></a>
      <a href="" v-on:click.prevent="politica = true">Privacy Policy</a>
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
export default {
  name: 'Footer',
  data () {
    return {
      politica: false,
    }
  },
  methods: {
    modal() {
      this.politica = !this.politica
    },
  } 
  

}
</script>

<style scoped>

.span {
  height: 50px;
}

.footer {
  display: grid;
  grid-template-columns: 300px repeat(2,1fr) ;
  text-align: left;
  font-size: 14px;
  background-color: #0B1D26;
  align-items: center;
}

.links a{
  text-decoration: none;
  color: white;
  text-align: left;
}

.links{
  grid-column: 3/4;
}

.links h3{
  color: #FBD784;
}

.copyright{
  grid-column: 2/3;
  color: white;
}

.footer .ventana {
  position: fixed;
  text-align: center;
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
