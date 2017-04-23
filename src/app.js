import $ from 'jquery'
import Vue from 'vue'
import './css/style.scss'
import inputText from './component/InputText.vue'

let demo = new Vue({
  el: '#demo',
  render: function(createElement) {
    return createElement(inputText)
  }
})
