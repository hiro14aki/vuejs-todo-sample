<style lang="sass">
  .taskform {
    position: relative;

    &__input {
      width: 100%;
      height: 30px;
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
      height: 30px;
      margin: 0 auto;
      border-left: 1px solid #dedede;
      border-radius: 0px 4px 4px 0px;
      background-color: #DC9FB4;
    }
  }
</style>

<template>
    <form v-on:submit.prevent="formSubmit" class="" action="index.html" method="post">
      <div class="taskform">
        <input v-model="task.name" class="taskform__input" type="text" name="" value="" placeholder="Buy the MacbookPro">
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
