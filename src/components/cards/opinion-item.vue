<template>
    <div class="item px-4 py-2 rounded-2 shadow m-4 bg-white" >
        <div class="d-flex justify-content-between flex-column" style=" min-height: 180px;">
            <div>
                <p v-html="desc"></p>
            </div>
            <div>
                <img style="width: 40px; height: 40px; border-radius: 50%;" :src="image" :alt="name">
                <p>{{ name }}</p>
                <span>{{ title }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String
        },
        title: {
            type: String
        },
        desc: {
            type: String
        },
        image: {
            type: String
        }
    }
}
</script>

<style scoped></style>