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
      <a href="#">Privacy Policy <br><br></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
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

.footer {
  display: grid;
  grid-template-columns: 300px repeat(2,1fr) 000px;
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




</style>
