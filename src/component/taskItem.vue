<style lang="sass">
.todolist {
  display: table;
  width: 100%;
  padding: 5px;

  & > * {
    display: table-cell;
  }

  &__edit {
    width: 200px;
  }

}

</style>

<template>
  <li class="todolist">
    <div class="">
      <input v-model="task.finished" type="checkbox" name="" value="" class="todolist__item">
      {{ task.name }}
    </div>
    <span v-on:click.prevent="updateTask" class="todolist__edit">Edit</span>
  </li>

</template>

<script>
export default {
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
}
</script>
