<template>
<img  class="rounded-circle" :src="img" 
v-bind="$attrs"

:width="`${size}px`" :height="`${size}px`">
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

<style>

</style>