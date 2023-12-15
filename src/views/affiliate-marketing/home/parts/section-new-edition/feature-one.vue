<template>
    <div>
        <h1>To-Do List</h1>
        <div v-if="isLoggedIn">
            <div class="add-task">
                <input v-model="newaffiliate-task.text" @keyup.enter="addaffiliate-task" placeholder="Add a new task" />
                <input type="date" v-model="newaffiliate-task.dueDate" />
                <select v-model="newaffiliate-task.category">
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                    <option value="Shopping">Shopping</option>
                    <!-- More categories -->
                </select>
                <select v-model="newaffiliate-task.priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <button @click="addaffiliate-task">Add Task</button>
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
                <li v-for="(affiliate-task, index) in filteredaffiliate-tasks" :key="index" :class="{ completed: affiliate-task.completed }">
                    <span>{{ affiliate-task.text }}</span>
                    <span v-if="affiliate-task.dueDate">Due: {{ affiliate-task.dueDate }}</span>
                    <span>Category: {{ affiliate-task.category }}</span>
                    <span>Priority: {{ affiliate-task.priority }}</span>
                    <div>
                        <button @click="toggleComplete(index)">{{ affiliate-task.completed ? 'Undo' : 'Complete' }}</button>
                        <button @click="removeaffiliate-task(index)">Remove</button>
                    </div>
                    <textarea v-model="affiliate-task.notes" placeholder="Add notes"></textarea>
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
            newaffiliate-task: {
                text: '',
                dueDate: '',
                category: 'Personal',
                priority: 'Low',
                completed: false,
                notes: ''
            },
            affiliate-tasks: [],
            selectedCategory: 'All',
            selectedPriority: 'All',
            showCompleted: false
        };
    },
    created() {
        // Check if user is logged in and load affiliate-tasks from local storage
        const userLoggedIn = localStorage.getItem('loggedIn');
        if (userLoggedIn) {
            this.isLoggedIn = true;
            const storedaffiliate-tasks = localStorage.getItem('affiliate-tasks');
            if (storedaffiliate-tasks) {
                this.affiliate-tasks = JSON.parse(storedaffiliate-tasks);
            }
        }
    },
    computed: {
        categories() {
            const allCategories = this.affiliate-tasks.map(affiliate-task => affiliate-task.category);
            return ['All', ...new Set(allCategories)];
        },
        priorities() {
            const allPriorities = this.affiliate-tasks.map(affiliate-task => affiliate-task.priority);
            return ['All Priorities', ...new Set(allPriorities)];
        },
        filteredaffiliate-tasks() {
            let filtered = this.affiliate-tasks;
            if (this.selectedCategory !== 'All') {
                filtered = filtered.filter(affiliate-task => affiliate-task.category === this.selectedCategory);
            }
            if (this.selectedPriority !== 'All Priorities') {
                filtered = filtered.filter(affiliate-task => affiliate-task.priority === this.selectedPriority);
            }
            if (!this.showCompleted) {
                filtered = filtered.filter(affiliate-task => !affiliate-task.completed);
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
        addaffiliate-task() {
            if (this.newaffiliate-task.text.trim() !== '') {
                this.affiliate-tasks.push({ ...this.newaffiliate-task });
                this.newaffiliate-task.text = '';
                this.newaffiliate-task.dueDate = '';
                this.newaffiliate-task.category = 'Personal';
                this.newaffiliate-task.priority = 'Low';
            }
            this.saveaffiliate-tasks();
        },
        removeaffiliate-task(index) {
            this.affiliate-tasks.splice(index, 1);
            this.saveaffiliate-tasks();
        },
        toggleComplete(index) {
            this.affiliate-tasks[index].completed = !this.affiliate-tasks[index].completed;
            this.saveaffiliate-tasks();
        },
        saveaffiliate-tasks() {
            localStorage.setItem('affiliate-tasks', JSON.stringify(this.affiliate-tasks));
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
}</style>
  