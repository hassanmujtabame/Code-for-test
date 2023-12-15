<template>
    <div>
      <h1>To-Do List</h1>
      <div v-if="isLoggedIn">
        <div class="add-task">
          <input v-model="newTodo.text" @keyup.enter="addTodo" placeholder="Add a new task" />
          <input type="date" v-model="newTodo.dueDate" />
          <select v-model="newTodo.category">
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Shopping">Shopping</option>
            <!-- More categories -->
          </select>
          <select v-model="newTodo.priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button @click="addTodo">Add Task</button>
        </div>
        <div class="filters">
          <select v-model="selectedCategory">
            <option value="All">All</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
          <select v-model="selectedPriority">
            <option value="All">All Priorities</option>
            <option v-for="priority in priorities" :key="priority" :value="priority">{{ priority }}</option>
          </select>
          <input type="checkbox" id="completed" v-model="showCompleted" />
          <label for="completed">Show Completed</label>
        </div>
        <ul>
          <li v-for="(todo, index) in filteredTodos" :key="index" :class="{ completed: todo.completed }">
            <span>{{ todo.text }}</span>
            <span v-if="todo.dueDate">Due: {{ todo.dueDate }}</span>
            <span>Category: {{ todo.category }}</span>
            <span>Priority: {{ todo.priority }}</span>
            <div>
              <button @click="toggleComplete(index)">{{ todo.completed ? 'Undo' : 'Complete' }}</button>
              <button @click="removeTodo(index)">Remove</button>
            </div>
            <textarea v-model="todo.notes" placeholder="Add notes"></textarea>
          </li>
        </ul>
      </div>
      <div v-else>
        <input v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button @click="login">Login</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoggedIn: false,
        username: '',
        password: '',
        newTodo: {
          text: '',
          dueDate: '',
          category: 'Personal',
          priority: 'Low',
          completed: false,
          notes: ''
        },
        todos: [],
        selectedCategory: 'All',
        selectedPriority: 'All',
        showCompleted: false
      };
    },
    created() {
      // Check if user is logged in and load todos from local storage
      const userLoggedIn = localStorage.getItem('loggedIn');
      if (userLoggedIn) {
        this.isLoggedIn = true;
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
          this.todos = JSON.parse(storedTodos);
        }
      }
    },
    computed: {
      categories() {
        const allCategories = this.todos.map(todo => todo.category);
        return ['All', ...new Set(allCategories)];
      },
      priorities() {
        const allPriorities = this.todos.map(todo => todo.priority);
        return ['All Priorities', ...new Set(allPriorities)];
      },
      filteredTodos() {
        let filtered = this.todos;
        if (this.selectedCategory !== 'All') {
          filtered = filtered.filter(todo => todo.category === this.selectedCategory);
        }
        if (this.selectedPriority !== 'All Priorities') {
          filtered = filtered.filter(todo => todo.priority === this.selectedPriority);
        }
        if (!this.showCompleted) {
          filtered = filtered.filter(todo => !todo.completed);
        }
        return filtered;
      }
    },
    methods: {
      login() {
        // Simulating login, setting isLoggedIn to true and storing in local storage
        if (this.username === 'user' && this.password === 'password') {
          this.isLoggedIn = true;
          localStorage.setItem('loggedIn', 'true');
        } else {
          alert('Invalid credentials');
        }
      },
      addTodo() {
        if (this.newTodo.text.trim() !== '') {
          this.todos.push({ ...this.newTodo });
          this.newTodo.text = '';
          this.newTodo.dueDate = '';
          this.newTodo.category = 'Personal';
          this.newTodo.priority = 'Low';
        }
        this.saveTodos();
      },
      removeTodo(index) {
        this.todos.splice(index, 1);
        this.saveTodos();
      },
      toggleComplete(index) {
        this.todos[index].completed = !this.todos[index].completed;
        this.saveTodos();
      },
      saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  };
  </script>
  
  <style scoped>
  /* Some basic styling */
  h1 {
    font-size: 24px;
    margin-bottom: 15px;
  }
  .add-task {
    margin-bottom: 15px;
  }
  .filters {
    margin-bottom: 10px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
    border: 1px solid #ccc;
    padding: 10px;
  }
  .completed {
    text-decoration: line-through;
    opacity: 0.7;
  }
  button {
    padding: 5px 10px;
    margin-right: 5px;
    background-color: #ff6347;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  textarea {
    width: 100%;
    margin-top: 5px;
    padding: 5px;
  }
  </style>
  