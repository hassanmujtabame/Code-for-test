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
    <div class="col-12 col-md-4 mb-3" v-for="btn in MyCoursesType" :key="btn.id" >
      <button class="btn w-100" :class="[btn.active?'btn-custmer':'btn-default']" @click="getMyCourseType(btn)">{{btn.text}} </button>
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
import CourseCard  from '@/components/cards/academy-course.vue'
import instructorAPI from '@/services/api/academy/instructor/index.js';

export default {
  name:'filter-list',
  components:{ 
    CourseCard
  },
  data:()=>{
    return {
      MyCoursesType:[{text:'دوراتك القادمة',id:1,active:true, type:'coming'},{text:'دوراتك الحالية',id:2,active:false, type:'current'},{text:'دوراتك المنجزة',id:3,active:false, type:'completed'}],

      status:'incomplete',

      items:[],
         filterItem:{
            search:null,
            created_at:'asc',
            status:'coming',
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
                return await instructorAPI.getCourses(params)

            } catch (error) {
                console.log('error', error)
                console.log('response', error.response)
            }
        },
            getMyCourseType(data){
      for (let index = 0; index < this.MyCoursesType.length; index++) {
        const element = this.MyCoursesType[index];
           if (element.id==data.id) {
        element.active=true
        this.filterItem.status=element.type;
        this.fireEvent('d-filter-list-refresh')
        
      }else{
        element.active=false
      }
      }
    }, 
  }
}
</script>

<style>

</style>