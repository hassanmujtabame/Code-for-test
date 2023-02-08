<template>
<d-filter-list 
:fake-items="items"
classColCard="col-12"
hideSide
>
<template v-slot:total="{}">
  <h1 class="fw-bold">إختبارات</h1>
  </template>
  <template v-slot:before-body>
            <ul class="nav nav-pills  mb-3">
                    <li v-for="(btn,i) in actions" :key="i" class="nav-item col-12 col-md-3">
                        <button class="nav-link  border w-75 t-c m-auto mt-1" :class="{active:status==btn.status}"
                             type="button" 
                             @click="changeStatus(btn.status)"
                            >{{ btn.label }}</button>
                    </li>
                </ul>
        </template>
<template v-slot="{}">
    <CourseCard />
</template>

</d-filter-list>
</template>

<script>
import CourseCard from './card'
import CoursesAPI from '@/services/api/academy/courses.js'
export default {
  name:'filter-list',
  components:{
    CourseCard
  },
  data:()=>{
    return {
      filterSide:{
      is_share:null,
      category_id:[],
    },
        filterItem:{
            search:null,
            price:'asc',
            status:'settings_exam',
            is_share:null,
            category_id:[],
        },
      items:[
        {},
        {},
        {},
        {},
        {},
        {},
      ],
      status:'settings_exam',
            actions:[
            
                {status:"settings_exam",label:'ظبط اعدادات الاختبارت'},
                {status:"courses_has_exam",label:'دورات تحتوى على اختبارت'},
                {status:"students_pass_exam",label:'طلاب أجتازو الاختبار'},
                {status:"students_fail_exam",label:'طلاب لم يجتازو الاختبارت'},
        
         
           
    
            ],
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
                return await CoursesAPI.getAll(params)

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