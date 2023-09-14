<template>
  <div>
    <h1 class="incubator-business-content__title">{{ phase.title }}***</h1>
    <p class="incubator-business-content__desc">{{ phase.description }}</p>
 <div class="container">
 <div class="row">
  <div class="col-12 col-md-4" v-for="(item,i) in itemPage" :key="i">
    <academyCourseVue  :item="item" 
    :showProgress="false" :url="getRouteLocale('academy-courses',{id:item.id})" />
  </div>
  </div>
</div> 
  </div>
</template>

<script>
import academyCourseVue from '@/components/cards/academy-course.vue'
export default {
name:'section-type-course',
components:{
  academyCourseVue
},
props:{
  phase:{},
  itemPage:{}
},
mounted(){
  console.mylog('mounted type',this.phase,this.itemPage)
}
}
</script>

<style>

</style>