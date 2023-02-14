<template>
<d-filter-list 

:call-list="loadList"
hideSide
hideOrder
classSearchOrder="col-12 col-md-4"
classColSearch="col-12"
>
<template v-slot:total="{}">
    <button class="btn bg-main text-white" @click="addCourseFirst" role="button">
           <plusCircleOutline :size="24" color="currentColor"/>
            أضافة دورة جديدة
          </button>
</template>
<template v-slot:[`head-end`]>
    <button class="more">المزيد</button>
</template>
<template v-slot="{item}">
    <CourseCard  :item="item"/>
</template>
</d-filter-list>
</template>

<script>
import plusCircleOutline from '@/components/icon-svg/plus-circle-outline.vue';
import CourseCard from './card'
import instructorAPI from '@/services/api/academy/instructor';
export default {
  name:'filter-list',
  components:{
    plusCircleOutline,
    CourseCard
  },
  data:()=>{
    return {
      loading:false,
      items:[
        {},
        {},
        {},
        {},
        {},
        {},
      ]
    }
  },
  methods:{
    async loadList(metaInfo){
        this.loading = true;
        try {
            let params ={
                page: metaInfo.current_page,
            }
            return await instructorAPI.getCourses(params)
        } catch (error) {
            //
        }
        this.loading = false
    },
    addCourseFirst(){
      this.fireOpenDialog('add-course-first')
    }
  }
}
</script>

<style>

</style>