<template>
  <div>
    <h3>todos</h3>
    <div class="todos">
      <div
        class="todo"
        v-for="todo in todos"
        :key="todo.id"
        :class="{'is-complete' : todo.completed}"
        @dblclick="switchCompleted(todo)"
      >
        {{todo.title}}
        <span class="fa fa-trash" @click="deleteTodo(todo.id)"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "todos",
  created() {
    this.getAllTodos();
  },
  computed: mapGetters({
    todos: "getAllTodos"
  }),
  methods: {
    ...mapActions(["getAllTodos", "deleteTodo", "updateTodo"]),
    switchCompleted (todo) {
      const updateTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      this.updateTodo(updateTodo)
    }
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  background: #41b883;
  padding: 10px;
  border: 1px solid #41b883;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  color: white;
}
.is-complete {
  background: #2e5ae9;
}
span {
  display: inline-block;
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: 15px;
  right: 15px;
  color: #cccccc;
}
</style>
