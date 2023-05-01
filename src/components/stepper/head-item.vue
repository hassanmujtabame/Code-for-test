<template>
 <div class="d-stepper-head-item" >
  <div class="d-stepper-head-item__wrapper">
    <slot name="icon-selected" v-if="status=='finished'" :status="status">
    <d-stepper-icon class="icon-status" :status="status"></d-stepper-icon>
    </slot>
    <slot name="icon-selected" v-if="status=='in-progress'" :status="status">
        <d-stepper-icon class="icon-status" :status="status"></d-stepper-icon>
    </slot>
    <slot name="icon-selected" v-if="status=='not-started'" :status="status">
        <d-stepper-icon class="icon-status" :status="status"></d-stepper-icon>
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