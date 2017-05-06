<style lang="sass">
.todolist {
  border: 1px solid #dedede;
  border-radius: 4px;

  & > * {
    border-top: 1px solid #dedede;
  }
  & > *:first-child {
    border-top: none;
  }

  &__item{
    display: table;
    width: 100%;

    & > * {
      display: table-cell;
      padding: 10px 5px 10px 10px;
    }

    &Edit {
      border-left: 1px solid #dedede;
      width: 100px;
      text-align: center;
      background: #f3f3f3;
    }

    &Content {
      padding-left: 5px;
    }

    &--finished {
      padding: 10px 5px;
      text-align: center;
    }
  }
}

</style>

<template>
  <ul class="todolist">
    <li v-for="task in tasks" class="todolist__item">
      <div>
        <input v-model="task.finished" type="checkbox">
        <span class="todolist__itemContent">{{ task.name }}</span>
      </div>
      <span v-on:click.prevent="updateTask" class="todolist__itemEdit">Edit</span>
    </li>
    <li v-show="tasks.length < 1" class="todolist__item--finished">All tasks finished!!</li>
  </ul>

</template>

<script>
export default {
  props: [
    'tasks'
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
