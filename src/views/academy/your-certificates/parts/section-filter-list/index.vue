<template>
<d-filter-list 
:fake-items="items"
hideSide
classColCard="col-12 col-md-4 mt-3"
>
<template v-slot:total="{}">
  <h1>شهاداتك</h1>
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
      ]
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