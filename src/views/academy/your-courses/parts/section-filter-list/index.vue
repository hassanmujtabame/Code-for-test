<template>
<d-filter-list :fake-items="items"
classColCard="col-12 col-md-4 mt-3"
hideSide
>
<template v-slot:total="{}">
   <h1 class="fw-bolder">دوراتي التدريبة</h1>
</template>

<template v-slot="{item}">
    <CourseCard 
    :item="item"
    />
</template>
</d-filter-list>
</template>

<script>
import CourseCard  from './card.vue'
export default {
  name:'filter-list',
  components:{
    CourseCard
  },
  data:()=>{
    return {
      items:[
        {},
        {},
        {},
        {},
        {},
        {},
      ]
    }
  }
}
</script>

<style>

</style>