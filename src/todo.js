import $ from 'jquery'
import Vue from 'vue'
import './css/todo.scss'
// import inputText from './component/InputText.vue'

let taskForm = {
  template: `
    <form class="" action="index.html" method="post">
      <div class="input-group">
        <input class="form-control" type="text" name="" value="" placeholder="Buy the MacbookPro">
        <span class="input-group-btn">
          <button class="btn btn-primary" type="button" name="button">Add new Task.</button>
        </span>
      </div>
    </form>
  `
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
    taskForm: taskForm,
    'task-item': taskItem,
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
