import $ from 'jquery'
import Vue from 'vue'
import './css/todo.scss'
// import inputText from './component/InputText.vue'

let taskForm = {
  template: `
    <form v-on:submit.prevent="formSubmit" class="" action="index.html" method="post">
      <div class="input-group">
        <input v-model="task.name" class="form-control" type="text" name="" value="" placeholder="Buy the MacbookPro">
        <span class="input-group-btn">
          <button class="btn btn-primary" type="submit" name="button">Add new Task.</button>
        </span>
      </div>
    </form>
  `,
  props: [
    'task',
    'on-submit'
  ],
  methods: {
    formSubmit: function(event){
      if(!this.task.name){
        return
      }
      this.onSubmit(event, this.task)
    }
  }
};

let taskItem = {
  template: `
    <label class="list-group-item">
      <span v-on:click.preven="updateTask" class="pull-right btn btn-link">Edit</span>
      <input v-model="task.finished" type="checkbox" name="" value="">
      {{ task.name }}
    </label>
  `,
  props: [
    'task'
  ],
  methods: {
    updateTask: function(event) {
      let newTaskName = window.prompt('Task name', this.task.name)
      if(typeof newTaskName === 'string'){
        this.task.name = newTaskName
      }
    }
  }
};

window.app = new Vue({
  el: '#app',
  components: {
    'task-form': taskForm,
    'task-item': taskItem,
  },
  data: {
    newTask: { name: '' },
    tasks: [
      { name: 'Buy milk.', finished: false},
      { name: 'Call to Alice.', finished: false},
      { name: 'Write the memo.', finished: false}
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
