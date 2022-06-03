<template>
  <section class="src-components-navigator">
      <div id="navigator">
        <button id="reset" @click="restart"> New colors</button>
        <span id="message"> </span>

        <button id="easy" @click="easyMode">easy</button>
        <button id="hard" @click="hardMode" class="selected">hard</button>
      </div>
      <Board />
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

      var messageDisplay = document.getElementById("message");

      /* var h1 = document.querySelector("h1"); */
      var restartButton = document.querySelector("#reset");
      var header = document.querySelector("#header");


      init();



      restartButton.addEventListener("click", function(){
        restart();
      });


      function init(){
        for (var i = 0; i <squares.length; i++) {
          console.log(colors[i])
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
          var clickedColor = this.style.backgroundColor;
          if (clickedColor === pickedColor) {
            messageDisplay.textContent = "You Picked Right!";
            setAllColorsTo(pickedColor);
            restartButton.textContent = "Play Again!";
            header.style.backgroundColor = pickedColor;
          } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
            messageDisplay.style.color = "#000000";
          }
        });
      }

      restart();
      }
      function setAllColorsTo(color) {
        squares.forEach(function (square){
          square.style.backgroundColor = color;
        })
      }



      function createRandomStringColor(){
        var newColor = "rgb(" + randomInt() + ", " + randomInt() + ", " + randomInt() + ")" ;
      //	console.log(newColor);
        return newColor;
      }
      function randomInt(){
        return Math.floor(Math.random() * 256);
      }

    },
    data () {
      return {
        easyButton: document.querySelector("#easy"),
        hardButton: document.querySelector("#hard"),
        squares: document.querySelectorAll(".square"),
        colorDisplay: document.getElementById("colorDisplay"),
        colorCount: 6,
        isHard: true,
        colors: [],
        pickedColor: this.colors[this.PickColor()]
      }
    },
    methods: {
      easyMode(){
        if (this.isHard) {
          this.isHard = false;
          this.easyButton.classList.add("selected");
          this.hardButton.classList.remove("selected");
          this.colorCount = 3;
          for (var i = 0; i < this.colorCount; i++) {
            this.squares[(i+3)].style.display = "none";
          }
          this.restart();
        }
      },
      hardMode(){ 
        if (!this.isHard) {
          this.isHard = true;
          this.hardButton.classList.add("selected");
          this.easyButton.classList.remove("selected");
          this.colorCount = 6;
          this.restart();
          for (var i = 3; i < 6; i++) {
            this.squares[i].style.display = "block";
          }
        }
      },
      restart(){
        this.colors = this.createNewColors(this.colorCount);
        this.pickedColor = this.colors[this.PickColor()];
        this.colorDisplay.textContent = this.pickedColor;
        this.textContent = "Pick New Colors!";
        header.style.backgroundColor = "steelblue";
        messageDisplay.textContent = "";
        restartButton.textContent = "New Colors!";
        for (var i = 0; i <squares.length; i++) {
          squares[i].style.backgroundColor = colors[i];
        }
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
        var arr = [];
        for (var i = 0; i < numbers; i++) {
          arr.push(createRandomStringColor());
        }
          return arr;
      }
    },
    computed: {

    }
}
  
</script>

<style scoped lang="css">
  .src-components-navigator {
  }

  #navigator {
    background: #ffffff;
    height: 29px;
    text-align: center;
    margin: -1;
    margin-top: -31px;
  }

  #message {
    color: #ffffff;
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
