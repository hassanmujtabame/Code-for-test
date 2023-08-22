<template>
<d-filter-list 
:call-list="loadList"
classColCard="col-12 col-md-4 mt-3"
hideSide
@change="changeFilter"
>
<template v-slot:total="{}">
   <h1 class="fw-bolder">دوراتي التدريبة</h1>
</template>
<template v-slot:before-body>
  <div class="row">
    <div class="col-12 col-md-6">
      <button  @click="changeStatus('in-progress')" class="btn w-100" :class="[status=='in-progress'?'btn-custmer':'btn-default']">الدورات الحالية</button>
    </div>
    <div class="col-12 col-md-6">
      <button @click="changeStatus('completed')"  class="btn  w-100" :class="[status=='completed'?'btn-custmer':'btn-default']">الدورات المنجزة</button>
    </div>
  </div>
  <div>

  </div>
</template>
<template v-slot="{item}">
  
    <CourseCard 
    :item="item"
    :showProgress="true"
    :showInfo="false"
    :url="getUrlCourse(item)"
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
      status:'in-progress',
      items:[],
         filterItem:{
            search:null,
            order_by:'asc',
            status:'in-progress',
        },
    }
  },
  methods:{
    getUrlCourse(item){
      switch (item.type) {
        case 'recorded':
        return this.getRouteLocale('academy-course-preview-show',{id:item.id})

      
        default:
          return this.getRouteLocale('academy-course-show',{id:item.id})
      }
    },
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