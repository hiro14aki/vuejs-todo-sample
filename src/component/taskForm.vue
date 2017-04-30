<style>
/* Implemented */
</style>

<template>
  <form v-on:submit.prevent="formSubmit" class="" action="index.html" method="post">
    <div class="input-group">
      <input v-model="task.name" class="form-control" type="text" name="" value="" placeholder="Buy the MacbookPro">
      <span class="input-group-btn">
        <button class="btn btn-primary" type="submit" name="button">Add new Task.</button>
      </span>
    </div>
  </form>
</template>

<script>
export default {
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
}
</script>
