<template>
   <div class="container p-4">
            <h2 class="home-section-title text-center">
                شركائنا في حاضنة رياديات
            </h2>    
            <ItemsList /> 
        </div>
</template>

<script>
import ItemsList from './items-list.vue'
export default {
 name:'section-our-partners',
 components:{
    ItemsList
 },
 data:()=>{return{}},
 watch:{},
  mounted(){
    window.AOS.init()
  }
}
</script>

<style>

</style>