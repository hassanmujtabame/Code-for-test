<template>
    <nav>
        <ul class="d-flex flex-row">
            <li id="offers" class="nav-item  active" @click="addActive($event)">
                العروض
            </li>
            <li id="discounts" class="nav-item " @click="addActive($event)">
                الخصومات
            </li>
            <li id="exhiptions" class="nav-item " @click="addActive($event)">
                المعارض
            </li>
            <li id="workspaces" class="nav-item " @click="addActive($event)">
                اماكن العمل
            </li>

        </ul>
    </nav>
</template>


<script>

export default {
    methods: {
        addActive(event) {
            let element = event.currentTarget
            let navItems = document.querySelectorAll('.nav-item')
            navItems.forEach(el => {
                el.classList.remove('active')
            });
            element.classList.add('active')
            console.log("element.id", element.id)
            this.$emit('elementName', element.id)

        }
    }
}


</script>

<style scoped>
nav {
    width: fit-content;
}

nav>ul {
    list-style: none;
    padding: 0;
}

nav>ul li.nav-item.active {
    transition-duration: 0.3s;
    transition-property: all;
    border-bottom: 2px solid #2DB7B3;
    color: #2DB7B3;
}

nav>ul li.nav-item {
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ease-in-out;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    width: fit-content;
    padding: 5px 10px;
    margin-bottom: 10px;
    box-shadow: none;
    background: 0;
    background: white;
}
</style>