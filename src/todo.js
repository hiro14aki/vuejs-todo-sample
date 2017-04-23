import $ from 'jquery'
import Vue from 'vue'
import './css/todo.scss'
// import inputText from './component/InputText.vue'

let taskForm = {
  template: '#template-task-form',
};

window.app = new Vue({
  el: '#app',
  components: {
    'taskForm': taskForm
  },
  data: {
    tasks: [
      { name: 'Buy milk.'},
      { name: 'Call to Alice.'},
      { name: 'Write the memo.'}
    ],
  },
  computed: {
  },
  methods: {
  },
});
