import axios from 'axios'

const state = {
  todos: []
}

const getters = {
  getAllTodos (state) {
    return state.todos
  }
}

const mutations = {
  setTodos (state, todos) {
    state.todos = todos
  },
  post (state, todo) {
    state.todos.unshift(todo)
  },
  delete(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },
  update (state, updateTodo) {
    let index = state.todos.findIndex(todo => todo.id === updateTodo.id)
    state.todos.splice(index, 1, updateTodo)
  }
}

const actions ={
  async getAllTodos ({commit}) {
    const res = await axios.get("http://jsonplaceholder.typicode.com/todos")
    commit('setTodos', res.data)
  },
  async addTodo ({commit}, todo) {
    const res = await axios.post("http://jsonplaceholder.typicode.com/todos", todo)
    commit("post", res.data)
  },
  async deleteTodo({commit}, id) {
    await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    commit("delete", id)
  },
  async filterTodos({commit}, limit) {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    commit("setTodos", res.data)
  },
  async updateTodo ({commit}, updateTodo) {
    await axios.put(`http://jsonplaceholder.typicode.com/todos/${updateTodo.id}`, updateTodo)
    commit("update", updateTodo)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
