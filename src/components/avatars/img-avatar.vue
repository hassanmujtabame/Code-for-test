<template>
    <img class="d-image-avatar" 
    :src="img"
    :style="{height:`${size}px`,width:`${size}px`}"
    v-bind="$attrs"
    />
</template>

<script>
export default {
 props:{
    img:{
        type:String
    },
    size:{
        type:[Number,String],
        default:50
    }
 }
}
</script>

<style scoped>
.d-image-avatar {

    /*border: 1px solid #80808021;*/
    border-radius: 50%!important;
    /*background-size: cover;
    background-repeat: no-repeat;
    background-position: center;*/
}
</style>