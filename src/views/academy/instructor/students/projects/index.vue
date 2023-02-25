<template>
  <div style="margin-top: 85px " class="consult">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else  class="bg-body-page">
    <div class="container">
        <d-filter-list
        classColCard="col-12"
        :call-list="loadList"
        hideSide
        >
        <template v-slot:total>
            <h4 class="fw-bold">مشاريع دورة : <span class="m-c">{{itemPage.course}}</span> </h4>
            <h6 class="t-c">مشروع :{{ itemPage.title??'N/A' }}</h6>
            </template>
        <template v-slot="{item}">
        <cardItem :item="item"/>
        </template>
        </d-filter-list>
        </div>
        </div>
        <projectNoteDialog />
        </div>
</template>

<script>
import cardItem from './card-item.vue';
import academyAPI from '@/services/api/academy';
import projectNoteDialog from './dialogs/project-note.vue';
export default {
 name:'student-projects',
 components:{
    cardItem,
    projectNoteDialog
 },
  data:()=>{
        return {
            loading:true,
            hasError:false,
            itemPage:{},

        }
    },
    methods:{
        async loadList(){
            try {
                return await academyAPI.instructor.getListStudentProject(this.itemPage.id)
            } catch (error) {
                //
            }
        },
        async initlializing(){
            this.loading = true;
            try {
                let {data} = await academyAPI.projectsAPI.getItem(this.$route.params.id)
                if(data.success){
                    this.itemPage = data.data
                }
            } catch (error) {
                window.DHelper.catchException.call(this,error)
            }
            this.loading = false;
        }
    },
    mounted(){
        this.initlializing()
    }
}
</script>

<style>

</style>