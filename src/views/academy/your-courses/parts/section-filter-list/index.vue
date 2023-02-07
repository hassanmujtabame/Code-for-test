<template>
<d-filter-list :fake-items="items"
hideSide
hideOrder
classSearchOrder="col-12 col-md-4"
classColSearch="col-12"
>
<template v-slot:total="{}">
    <button class="btn bg-main text-white" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
           <plusCircleOutline :size="24" color="currentColor"/>
            أضافة دورة جديدة
          </button>
</template>
<template v-slot:[`head-end`]>
    <button class="more">المزيد</button>
</template>
<template v-slot="{}">
    <CourseCard />
</template>
</d-filter-list>
</template>

<script>
import plusCircleOutline from '@/components/icon-svg/plus-circle-outline.vue';
import CourseCard from './card'
export default {
  name:'filter-list',
  components:{
    plusCircleOutline,
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