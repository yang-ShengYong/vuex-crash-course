<template>
  <div id="app">
    <AddTodo></AddTodo>
    <FilterTodo></FilterTodo>
    <Todos></Todos>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import FilterTodo from './components/FilterTodo.vue'
import store from './store/index.js'

export default {
  name: 'app',
  store,
  components: {
    Todos,
    AddTodo,
    FilterTodo
  }
}
</script>

<style>
body {
  background-color: antiquewhite
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  width: 1100px;
  margin: 60px auto;
}
h3 {
  padding: 10px;
  margin: 0;
}
</style>
