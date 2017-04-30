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
      <input type="checkbox" name="" value="">
      {{ task.name }}
    </label>
  `,
  props: ['task']
};

console.log(taskItem);

window.app = new Vue({
  el: '#app',
  components: {
    'task-form': taskForm,
    'task-item': taskItem,
  },
  data: {
    newTask: { name: '' },
    tasks: [
      { name: 'Buy milk.'},
      { name: 'Call to Alice.'},
      { name: 'Write the memo.'}
    ],
  },
  computed: {
  },
  methods: {
    newTaskSubmit: function(event){
      console.log(this.newTask.name) // TODO: implement
      this.tasks.unshift(this.newTask)
      this.newTask = { name: '' }
    },
  },
});
