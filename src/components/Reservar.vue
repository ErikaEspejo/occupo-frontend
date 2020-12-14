<template>
  <div class="reservar">    
    <div class="title">      
      <h1> <br> <br> <br> BIENVENIDO USER_NAME </h1>    
      <hr width ="70px" align="left" color="#FBD784">      
      <h2> Reserva tu habitación en 3 sencilos pasos: </h2>    
      <div class="span"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reservar',
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


</style>
