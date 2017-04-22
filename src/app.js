let $ = require('jquery'),
    style = require('./css/style.css');
// require('./css/style.scss');

let Vue = require('vue')

// cssをJS内に組み込む
var foo = style.catsFavorite;

$('<h1>Cats</h1>').addClass(foo).appendTo('body');

const ul = $('<ul></ul>').appendTo('body');
for (const cat of cats) {
  $('<li></li>').text(cat).appendTo(ul);
}

// Test for webpack and vue.js
// この方法はスタンドアロン版。NPMインストールはランタイム版でインストールされる。
// let Vue = require('vue')
// let demo = new Vue({
//   el: '#demo',
//   data: {
//     message: 'Hello Vue.js!'
//   }
// });

// Test for webpack and vue.js for runtime ver.
let inputText = require('./component/InputText.vue')
// import inputText from './component/InputText.vue'

let demo = new Vue({
  el: '#demo',
  render: function(createElement) {
    return createElement(inputText)
  }
})
