<template>
  <section class="src-components-navigator">
      <div id="navigator">
        <button id="reset" @click="restart()">{{restartButton}}</button>
        <span id="message">{{message}}</span>
        <button id="easy" @click="easyMode()" :class="{ selected: !isHard }">easy</button>
        <button id="hard" @click="hardMode()" :class="{ selected:  isHard }">hard</button>
      </div>
      <Board :cuadrados="squares" :color="pickedColor" @button="restartButton=$event" @message="message=$event" />
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
      this.init()
    },
    data () {
      return {
        colorCount: 6,
        squares: [],
        isHard: true,
        colors: '',
        pickedColor:'',
        restartButton: 'New Colors',
        message: ''
      }
    },
    methods: {
      easyMode(){    
        if (this.isHard) {
          this.isHard = false;
          this.colorCount = 3
          for (let i = 0; i < this.colorCount; i++) {
            let auxSquare = this.squares[(i+3)]
            auxSquare.style= {...auxSquare.style, display: 'none' };
          }
          this.restart();
        }
      },
      hardMode(){
        if (!this.isHard) {
          this.isHard = true;
          this.colorCount = 6;
          for (let i = 0; i < this.colorCount; i++) {
            let auxSquare = this.squares[i]
            auxSquare.style= { ...auxSquare.style, display: 'block' };
          }        
          this.restart();  
        }
      },
      init(){
        this.setColors()
        for(let i = 0; i< this.colorCount; i++){
          this.squares.push({id: i, style:{ backgroundColor: this.colors[i] }})
        }
      },
      setColors(){
        this.colors = this.createNewColors(6);
        this.pickedColor = this.colors[this.PickColor()];
        this.sendColorDisplay(this.pickedColor);
      },
      restart(){
        this.message = ''
        this.restartButton= 'New Colors'
        document.querySelector('#header').style.backgroundColor = 'steelblue'
        this.setColors()
        for(let i = 0; i< this.colorCount; i++){
          this.squares[i].style= { backgroundColor: this.colors[i] };
        }
      },
      sendColorDisplay(colorDisplay){
        this.$emit('actualColor', colorDisplay)
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
          arr.push(this.createRandomStringColor());
        }
          return arr;  
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
