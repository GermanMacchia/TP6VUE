<template>
  <section class="src-components-navigator">
      <div id="navigator">
        <button id="reset"> New colors</button>
        <span id="message"> </span>

        <button id="easy">easy</button>
        <button id="hard" class="selected">hard</button>
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

    },
    data () {
      return {

      }
    },
    methods: {

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


</style>
