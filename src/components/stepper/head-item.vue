<template>
 <div class="d-stepper-head-item" >
  <div class="d-stepper-head-item__wrapper">
    <slot name="icon-selected" v-if="status=='done'" :status="status">
        <i class="icon-status fa-solid fa-circle-check m-c"></i>
    </slot>
    <slot name="icon-selected" v-if="status=='selected'" :status="status">
        <i class="icon-status  fa-regular fa-circle-check m-c"></i>
    </slot>
    <slot name="icon-selected" v-if="status=='disabled'" :status="status">
        <i class="icon-status fa-regular fa-circle t-c"></i>
    </slot>
    <span class="d-stepper-head-item__title">
    <slot></slot>
    </span>
  </div>

  </div>
</template>

<script>
export default {
name:'d-stepper-head-item',
props:{
    status:{
        type:String,
        default:'disabled'//disabled| selected | done
    }
},
watch:{
    status(){

    }
}
}
</script>

<style>

</style>