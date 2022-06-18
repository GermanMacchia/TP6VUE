<template>
  <section class="src-components-navigator">
      <div id="navigator">
        <button id="reset" @click="restart()">{{$store.state.boton}}</button>
        <span id="message">{{$store.state.message}}</span>
        <button id="easy" @click="easyMode()" :class="{ selected: !isHard }">easy</button>
        <button id="hard" @click="hardMode()" :class="{ selected:  isHard }">hard</button>
      </div>
      <Board/>
  </section>
</template>

<script>
  import Board from './Board.vue'
  
  export default  {
    
    name: 'src-components-navigator',
    props: [],
    components: {
      Board
    },
    mounted () {
      this.setColors()
    },
    data () {
      return {
        isHard: true
      }
    },
    methods: {
      easyMode(){    
        if (this.isHard) {
          this.isHard = false;
          this.restart();
        }
      },
      hardMode(){
        if (!this.isHard) {
          this.isHard = true;
          this.restart();
        }
      },      
      restart(){
        this.setColors()         
        this.$store.dispatch('asignarMensaje', '')
        this.$store.dispatch('asignarMsgBoton','New Colors')
        document.querySelector('#header').style.backgroundColor = 'steelblue'
        if(!this.isHard){
          this.$store.dispatch('cambiarModoFacil')
        }
      },
      setColors(){
        this.createNewColors(6);
        this.pickedColor = this.$store.state.squares[this.PickColor()].style.backgroundColor;
        this.$store.dispatch('asignarColor', this.pickedColor)
      },
      PickColor(){
        let quantity;
        if (this.isHard) {
          quantity = 6;
        } else {
          quantity = 3;
        }
        return Math.floor(Math.random() * quantity );
      },
      createNewColors(numbers){

        let arr = [];
        
        for (var i = 0; i < numbers; i++) {
          arr.push({id: i, style:{ backgroundColor:this.createRandomStringColor()}});
        }
        this.$store.dispatch('asignarCuadrados', arr)      

      },
      createRandomStringColor(){

        let newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
        return newColor;

      },
      randomInt(){

        return Math.floor(Math.random() * 256);
      },
    },
    computed: {

    }
}
  
</script>

<style scoped lang="css">

  #navigator {
    background: #ffffff;
    height: 29px;
    text-align: center;
    margin: -1;
    margin-top: -31px;
  }

  #message {
    color: black;
    display: inline-block;
    width: 20%;
  }

  button {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }
  button:hover {
    color: white;
    background-color: steelblue;
  }

  .selected {
    background-color: steelblue;
    color: white;
  }

</style>
