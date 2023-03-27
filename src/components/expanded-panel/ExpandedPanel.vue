<template>
  <div class="accordion accordion-flush" >
                        <h3 v-if="title" class="fw-bolder">{{title}}</h3>
                        <slot></slot>
  </div>
</template>

<script>
export default {
  name:'d-expanded-panel',
 props:{
    title:{
        type:String,

    },
data:()=>({

})
 }
}
</script>

<style>

</style>