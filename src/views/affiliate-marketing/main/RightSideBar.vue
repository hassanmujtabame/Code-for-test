<template>
    <div class="sidebar">
        <div class="logo">
            <img width="60" :src="user.image" alt="...">
            <p>{{ user.name }}</p>
            <p>ID #{{ user.id }}</p>
        </div>
        <nav>
            <ul>
                <li class="nav-item active">
                    <img src="@/assets/svg/home.svg" alt="">
                </li>
                <li class="nav-item">
                    <img src="@/assets/svg/home.svg" alt="">
                    
                </li>
                <li class="nav-item">
                    <img src="@/assets/svg/home.svg" alt="">
                    
                </li>
                <li class="nav-item">
                    <img src="@/assets/svg/home.svg" alt="">
                    
                </li>
                <li class="nav-item">
                    <img src="@/assets/svg/home.svg" alt="">
                    
                </li>
            </ul>
        </nav>

    </div>
</template>

<script>

export default {
    mounted() { }
}


</script>

<style scoped>
nav {
    background: blueviolet;
    width: fit-content;
}
nav > ul {
    list-style: none;
}
nav > ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border: 1px solid black;
    width: 30px;
    height: 30px;
    border-radius: 40%;
}
.sidebar > .logo {
    box-shadow: 0px 0px 5px 3px #d1d1d1;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 150px;
    margin-bottom: 40px;
}
.sidebar > .logo::after {
    content: '';
    width: 100%;
    height: 3px;
    background-color: #97979745;
    border-radius: 50%;
    position: absolute;
    bottom: -20px;
    right: 0;
}


.sidebar > .logo img {
    border-radius: 15px;
}
.sidebar > .logo p {
    margin: 0 !important;
}
</style>