<template>
 <div class="tab-pane fade show active " id="pills-all-projects" role="tabpanel" aria-labelledby="pills-all-projects-tab" tabindex="0">
    <d-filter-list
               hideSide
               hideTop 
               classColCard="col-12 "
               :call-list="loadList"
               >          
                    <template v-slot="{item}">
                        <CardItem :item="item" />
                    </template>
                        </d-filter-list>   

                    </div>
</template>

<script>
import CoursesAPI from '@/services/api/academy/courses.js'
import CardItem from './card-item.vue'
export default {
 name:'all-projects',
 components:{
    CardItem
 },
 data:()=>{
    return{
        loading:false,
    }
 },
 methods:{
    async loadList(metaInfo){
            this.loading = true;
            try {
                let params ={
                    page: metaInfo.current_page,
                }
                return await CoursesAPI.getCoursesHasProjects(params)
            } catch (error) {
                //
            }
            this.loading = false
        }
 }
}
</script>

<style>

</style>