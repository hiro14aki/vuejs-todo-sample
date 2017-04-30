<style>

</style>

<template>
  <label class="list-group-item">
    <span v-on:click.prevent="updateTask" class="pull-right btn btn-link">Edit</span>
    <input v-model="task.finished" type="checkbox" name="" value="">
    {{ task.name }}
  </label>
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
