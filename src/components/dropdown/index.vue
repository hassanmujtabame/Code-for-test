<template>
  <div class="dropdown" :id="elementId">
    <slot name="action">
  <button class=" dropdown-toggle" :class="btnClass" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <slot name="btn-content">
    {{title}}
    </slot>
  </button>
</slot>
  <ul class="dropdown-menu">
    <slot></slot>
  </ul>
</div>
</template>

<script>
export default {
 name:'d-dropdown',
 props:{
    title:{},
    btnClass:{
        default:'btn btn-secondary'
    }
 },
 data:(vm)=>{
    return {
        elementId:`dropdown-${vm.generateRandomString(8)}`
    }
 },
 mounted(){
    window.$(`#${this.elementId} .dropdown-toggle`).dropdown()
 }
}
</script>

<style>

</style>