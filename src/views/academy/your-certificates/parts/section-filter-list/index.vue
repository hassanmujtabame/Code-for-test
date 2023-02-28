<template>
<d-filter-list 
:call-list="loadList"
hideSide
classColCard="col-12 col-md-4 mt-3"
>
<template v-slot:total="{}">
  <h1>شهاداتك</h1>
  </template>
<template v-slot="{item}">
  <a class="router-link" target="_blank" :href="item.url">
    <CourseCard :showInfo="false" :item="item.course" />
    </a>
</template>

</d-filter-list>
</template>

<script>
import CourseCard from "@/components/cards/academy-course.vue"
import academyAPI from '@/services/api/academy/index.js'
export default {
  name:'filter-list',
  components:{
    CourseCard
  },
  data:()=>{
    return {
      filterSide:{
      //is_share:null,
     // category_id:[],
    },
        filterItem:{
            search:null,
            created_at:'asc',
            //is_share:null,
            //category_id:[],
        }
    }
  },
  methods:{
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
                return await academyAPI.student.getMyCertificates(params)

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