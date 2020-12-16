<template>
  <div class="pagos">    
    <div class="title">      
      <h1 > <br> <br> <br> FINALIZA TU RESERVA </h1>    
      <hr width ="70px" align="left" color="#FBD784">      
      <h2> Estás a un sólo paso de tener una experiencia única en nuestro hotel </h2>    
      <fieldset>
        <label for="id-reserva">Identificador reserva</label>
        <input type="text" name="id-reserva">
      </fieldset>
      <p>Ten en cuenta que:
        <ul>
          <li>Tienes hasta 2 días antes para modificar o cancelar la reserva.</li>
          <li>Para garantizar la reserva requerimos un mínimo del 50% del valor de la reserva por adelantado.</li>
        </ul>
      </p>
    </div>
    <div class="metodo-pago">
      <h1 > <br> Selecciona la forma de pago </h1>    
      <hr width ="70px" align="left" color="#FBD784">      
      <h2> Nuestro sitio web cuenta con proceso de cifrado y transmisión segura de datos para proteger tus datos </h2>    
    </div>
      <div class="span"></div>
  </div>
</template>

<script>


export default {
  name: 'Pagos',
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

.pagos {
  display: grid;
  grid-template-columns: [inicio]0.3fr[paso]2fr[end-paso]0.3fr[fin];
}

.title, .metodo-pago {
  grid-column: paso / end-paso;
}

 h1,h2 {
  width: 100%;  
  justify-content: left;
  text-align: left;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: #ffd575;
  letter-spacing: 5px;
}

 h2 {  
  color: white;
  letter-spacing: 0px;
  font-weight: 300;
}


</style>
