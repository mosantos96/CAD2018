window.Vue = require('vue')
window.moment = require('moment')
window.axios = require('axios')
var firebase = require('firebase')

var firebaseConfig = {
  apiKey: "AIzaSyDnl2DOvoBUP6QI0gASEYwQkjg0n867JtY",
  authDomain: "cad2018-91c62.firebaseapp.com",
  databaseURL: "https://cad2018-91c62.firebaseio.com",
  projectId: "cad2018-91c62",
  storageBucket: "cad2018-91c62.appspot.com",
  messagingSenderId: "750622934142"
};
firebase.initializeApp(firebaseConfig);

firebaseRoot = "https://cad2018-91c62.firebaseio.com/"
sensoresRef = firebase.database().ref('Sensores');
atuadoresRef = firebase.database().ref('Atuadores')
fanControlRef = atuadoresRef.child('Fan/Control')

Vue.component(
  'card',
  require('./card.vue')
)

Vue.component(
  'toggle',
  require('./toggle.vue')
)

Vue.component(
  'sensor',
  require('./sensor.vue')
)

Vue.component(
  'atuador',
  require('./atuador.vue')
)

Vue.component(
  'atuador-slider',
  require('./atuador-slider.vue')
)

Vue.component(
  'frequency-input',
  require('./frequency-input.vue')
)

Vue.component(
  'onoff-sensor',
  require('./onoff-sensor.vue')
)

Vue.component(
  'history-view',
  require('./history-view.vue')
)

Vue.component(
  'add-button',
  require('./add-button.vue')
)

new Vue({
  el:'#app'
})
