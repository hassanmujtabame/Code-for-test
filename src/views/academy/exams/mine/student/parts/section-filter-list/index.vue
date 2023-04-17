<template>
<d-filter-list 
:call-list="loadList"
classColCard="col-12"
hideSide
>
<template v-slot:total="{}">
  <h1 class="fw-bold">إختباراتك</h1>
  </template>
  <template v-slot:before-body>
            <ul class="nav nav-pills  mb-3">
                    <li v-for="(btn,i) in actions" :key="i" class="nav-item col-12 col-md-3">
                        <button class="nav-link  border w-75 t-c m-auto" :class="{active:status==btn.status}"
                             type="button" 
                             @click="changeStatus(btn.status)"
                            >{{ btn.label }}</button>
                    </li>
                </ul>
        </template>
<template v-slot="{item}">
    <CourseCard  :item="item"/>
</template>

</d-filter-list>
</template>

<script>
import CourseCard from './card'
import academyAPI from '@/services/api/academy/index.js'
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
            created_at:'asc',
            status:null,
            //is_share:null,
            //category_id:[],
        },
      status:null,
            actions:[
            
                {status:null,label:'كل الاختبارت'},
                {status:"todo",label:'اختبارات تحتاج لدائها'},
                {status:"pass",label:'اختبارات نجحت بها'},
                {status:"fail",label:'اختبارت لم تنجح فيها'},
        
         
           
    
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
                return await academyAPI.student.getMyExams(params)

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