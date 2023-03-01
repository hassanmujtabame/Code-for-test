<template>
  <div class="overlay" v-bind="$attrs">
    <slot>
    <i class="fas fa-spinner fa-fw fa-2x fa-spin" style="color:white"></i>
  </slot>
 </div>
</template>

<script>
export default {
 name:'over-lay'
}
</script>

<style>
.overlay{
    position: absolute;
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.377);
    z-index: 999999;
}
</style>