<style lang="sass">
  .taskform {
    position: relative;
    height: 30px;

    &__input {
      width: 100%;
      padding: 10px;
      border: 1px solid #dedede;
      border-radius: 4px;
    }

    &__button {
      position: absolute;
      top: 0px;
      bottom: 0px;
      right: 0px;
      width: 300px;
      margin: 0 auto;
      border-left: 1px solid #dedede;
      border-radius: 0px 4px 4px 0px;
      background-color: #FEDFE1;
    }
  }
</style>

<template>
    <form v-on:submit.prevent="formSubmit" class="" action="index.html" method="post">
      <div class="taskform">
        <input v-model="task.name" class="taskform__input" type="text" name="" value="" placeholder="Add the ToDo.">
        <button class="taskform__button" type="submit" name="button">Add new Task.</button>
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
