<template>
<d-filter-list 
:call-list="loadList"
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
import academyAPI from '@/services/api/academy'
import CourseCard  from '@/components/cards/academy-course.vue'

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
  },
  methods:{
    changeStatus(status){
            this.status =  status
            this.filterItem.status=status;
            this.fireEvent('d-filter-list-refresh')
        },
    changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
        async loadList(metaInfo) {
            try {
                let params = {
                    page: metaInfo.current_page,
                    ...this.filterItem
                }
                return await academyAPI.student.getMyCourses(params)

            } catch (error) {
                console.log('error', error)
                console.log('response', error.response)
            }
        }
  }
}
</script>

<style>

</style>