<template>
    <div class="affiliate-app">
      <h1 class="affiliate-title">Tasks to Accomplish</h1>
      <div v-if="isLoggedIn" class="affiliate-container">
        <div class="add-task">
          <input v-model="newaffiliate.text" @keyup.enter="addaffiliate" placeholder="Add a new task" />
          <input type="date" v-model="newaffiliate.dueDate" />
          <select v-model="newaffiliate.category" class="select-category">
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Shopping">Shopping</option>
            <!-- More categories -->
          </select>
          <select v-model="newaffiliate.priority" class="select-priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button @click="addaffiliate" class="add-btn">Add Task</button>
        </div>
        <div class="filters">
          <select v-model="selectedCategory" class="select-filter">
            <option value="All">All</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
          <select v-model="selectedPriority" class="select-filter">
            <option value="All">All Priorities</option>
            <option v-for="priority in priorities" :key="priority" :value="priority">{{ priority }}</option>
          </select>
          <label for="completed" class="show-completed-label">Show Completed</label>
          <input type="checkbox" id="completed" v-model="showCompleted" class="show-completed-checkbox" />
        </div>
        <ul class="affiliate-list">
          <li v-for="(affiliate, index) in filteredaffiliates" :key="index" :class="{ completed: affiliate.completed }" class="affiliate-item">
            <div class="affiliate-details">
              <span class="affiliate-text">{{ affiliate.text }}</span>
              <span v-if="affiliate.dueDate" class="affiliate-due">Due: {{ affiliate.dueDate }}</span>
              <span class="affiliate-category">Category: {{ affiliate.category }}</span>
              <span class="affiliate-priority">Priority: {{ affiliate.priority }}</span>
              <button @click="toggleComplete(index)" class="affiliate-action-btn">{{ affiliate.completed ? 'Undo' : 'Complete' }}</button>
              <button @click="removeaffiliate(index)" class="affiliate-action-btn">Remove</button>
            </div>
            <textarea v-model="affiliate.notes" placeholder="Add notes" class="affiliate-notes"></textarea>
          </li>
        </ul>
      </div>
      <div v-else class="login-section">
        <input v-model="username" placeholder="Username" class="login-input" />
        <input type="password" v-model="password" placeholder="Password" class="login-input" />
        <button @click="login" class="login-btn">Login</button>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* New styling for the to-do app */
  .affiliate-app {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .affiliate-title {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .affiliate-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
  }
  
  .add-task {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .select-category,
  .select-priority,
  .select-filter,
  .show-completed-label,
  .show-completed-checkbox {
    margin-right: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  .add-btn {
    padding: 8px 15px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .filters {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .affiliate-list {
    list-style-type: none;
    padding: 0;
  }
  
  .affiliate-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 10px;
  }
  
  .affiliate-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .affiliate-text {
    font-weight: bold;
    margin-right: 10px;
  }
  
  .affiliate-due,
  .affiliate-category,
  .affiliate-priority {
    color: #666;
  }
  
  .affiliate-action-btn {
    padding: 5px 10px;
    background-color: #ff6347;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px;
  }
  
  .affiliate-notes {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }
  
  .login-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .login-input {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  .login-btn {
    padding: 8px 15px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  