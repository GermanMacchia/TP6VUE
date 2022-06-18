<template>
  <section class="src-components-board">
    <div v-if="$store.state.squares" id="container">
      <div class="square" v-for="cuadrado in $store.state.squares" :style="cuadrado.style" :key="cuadrado.id" @click="consultar(cuadrado.style)"></div>
    </div>
  </section>
</template>

<script>

  export default  {
    name: 'src-components-board',
    props: [],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
      consultar(squareStyle){

        let { backgroundColor } = squareStyle

        if ( backgroundColor === this.$store.state.pickedColor) {
              this.$store.dispatch('asignarMensaje', 'You Picked Right!')      
              this.$store.dispatch('asignarMsgBoton','Play Again!')
              this.setAllColors();
              document.querySelector('#header').style.background = this.$store.state.pickedColor 
            } else {
              this.$store.dispatch('asignarMensaje', "Try Again!")
              squareStyle.backgroundColor = "#232323"
            }
      },
      setAllColors() {
        this.$store.state.squares.forEach((e) => e.style= { ...e.style, backgroundColor: this.$store.state.pickedColor})
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-board {
  }

  .square {
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;
}

  #container {
    margin: 20px auto;
    max-width: 600px;
  }

</style>
