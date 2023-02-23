<template>
 <div style="margin-top: 96px;" class="bg-body-page">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else  class="container bg-white py-5 mb-5">
        <mainShow v-if="!started" @start="doStart" :exam="itemPage" />
        <examShow @finished="onfinished" v-else :itemPage="itemPage" />

    </div>
 </div>
</template>

<script>
import academyAPI from '@/services/api/academy';
import examShow from './exam.vue';
import mainShow from './welcome-show.vue';
export default {
 name:'do-exam-page',
 components:{
    mainShow,
    examShow
 },
 data:()=>{
    return  {
        env:process.env,
        started:false,
      loading:true,
      hasError:false,
      itemPage:{},
  }},
  methods:{
    onfinished(){
        this.started = false;
        this.initializing()
    },
    doStart(){
        this.started = true;
    },
    async initializing() {
      this.loading = true;
      this.hasError = false;
            try {
                let { data } = await academyAPI.student.getMyExam(this.$route.params.id)
                if (data.success) {
                   this.itemPage = data.data;
                }else{
                window.SwalError(data.message)
                  this.hasError = true;
                }
            } catch (error) {
                window.DHelper.catchException.call(this,error)
                this.hasError = true;
              }

            this.loading = false;
        }
  },
  mounted(){
    this.initializing()
  }
}
</script>



<style scoped>
.course-exam-display__title{
    margin: 0;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
text-transform: capitalize;
color: #414042;
margin: 15px 0;
}
.course-exam-display__subtitle{
    font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #414042;
  margin-bottom: 15px;
}

</style>