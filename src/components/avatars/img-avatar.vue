<template>
    <div class="d-image-avatar" 
    :class="$attrs.class??''"
    :style="{height:`${size}px`,width:`${size}px`}"
    
    >
    <img :src="img" v-bind="{...$attrs,class:undefined}" />
    </div>
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
    object-fit: fill;
    border: 1px solid #d1d1d1;
    border-radius: 50%!important;
    /*background-size: cover;
    background-repeat: no-repeat;
    background-position: center;*/
}
.d-image-avatar>img{
    width:100%;
    height:100%;
    object-fit: fill;
    border-radius: 50%!important;
}
</style>