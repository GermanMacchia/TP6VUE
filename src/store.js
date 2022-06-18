import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
//Estructura de patron de estado
	state : {
		pickedColor: '',
		message: '',
		display: 'none',
		squares: [],
		boton: 'NEW COLORS'
	},
	actions : {
		asignarColor({commit}, color){
			commit('colorABuscar', color)
		},
		asignarMensaje({commit}, mensaje){
			commit('mensajeAMostrar', mensaje)
		},
		asignarCuadrados({commit}, cuadrados){
			commit('cuadradosBackgrounds', cuadrados)
		},
		asignarMsgBoton({commit}, msgBoton){
			commit('mensajeBoton', msgBoton)
		},
		cambiarModoFacil({commit}){
			commit('cambiarModo')
		},
	},
	mutations : {
		colorABuscar(state, color){
			state.pickedColor = color
		},
		mensajeAMostrar(state, mensaje){
			state.message = mensaje
		},
		cuadradosBackgrounds(state, backgrounds){
			state.squares = backgrounds
		},
		mensajeBoton(state, msgBoton){
			state.boton = msgBoton
		},
		cambiarModo(state){
			state.squares.splice(3)
		}
	}

})