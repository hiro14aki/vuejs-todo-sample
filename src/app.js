import $ from 'jquery'
import Vue from 'vue'
import css from './css/style.css'
import inputText from './component/InputText.vue'

const ul = $('<ul></ul>').appendTo('body')

$('.mediaBox').addClass(css.mediaBox)

let demo = new Vue({
  el: '#demo',
  render: function(createElement) {
    return createElement(inputText)
  }
})
