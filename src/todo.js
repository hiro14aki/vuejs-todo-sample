import $ from 'jquery'
import Vue from 'vue'
import './css/todo.scss'
import taskForm from './component/taskForm.vue'
import taskItem from './component/taskItem.vue'

window.app = new Vue({
  el: '#app',
  components: {
    'task-form': taskForm,
    'task-item': taskItem,
  },
  data: {
    newTask: { name: '' },
    tasks: [
      { name: 'Set up the development environment.', finished: false},
      { name: 'Implement the function.', finished: false},
      { name: 'Release code.', finished: false}
    ],
  },
  computed: {
  },
  methods: {
    newTaskSubmit: function(event) {
      console.log(this.newTask.name)
      this.tasks.unshift(this.newTask)
      this.newTask = { name: '' }
    },
    deleteTasks: function(event) {
      this.tasks = this.tasks.filter(val => {
        console.log(val.finished)
        return !val.finished
      })
    }
  },
});
