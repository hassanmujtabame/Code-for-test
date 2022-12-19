<template>
  <div :style="{height:height}" class="carwsel-slider-item rounded-4">
    <slot></slot>
  </div>
</template>

<script>
export default {
 name:'d-carousel-slide',
 props:{
    height:{
        type:String,
        default:'100%'
    }
 }
}
</script>

<style>

</style>