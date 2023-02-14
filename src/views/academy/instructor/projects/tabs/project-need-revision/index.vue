<template>
<div class="tab-pane fade" id="pills-project-need-revision" role="tabpanel" aria-labelledby="pills-project-need-revision-tab" tabindex="0">
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
name:'project-need-revision',
 components:{
    CardItem
 },
 data:()=>{
    return {
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
            return await CoursesAPI.getProjectsNeedRevision(params)
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