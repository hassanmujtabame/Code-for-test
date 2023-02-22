<template>
  <div class="course-show-page__header">
    <div class="text-end">

    <div class=" d-flex gap-2 justify-content-end my-3">
        <button @click="inscription" class="btn btn-custmer">أشترك في الدورة</button>
    </div>
    </div>
  </div>
</template>

<script>
import academyAPI from '@/services/api/academy'
export default {
 name:'section-header',
 props:{
    itemPage:{}
 },
 data:()=>{
  return {resetCourse:3,}
 },
 methods:{
  inscription(){
    let dataEvt ={
      title:'هل أنت متأكد من أنضمامك لهذه الدورة ؟',
      description:`بأنضمامك الى هذا الدورة  سيتبقى لك <span style="color:#F2631C">${this.resetCourse} دورات</span> هذا الشهر`,
      btns:[
        {title:this.$t('join_confirmation'),action:()=>this.joinCourse()}
      ]
    }
    this.showConfirmMsg(dataEvt)
  },
  async joinCourse(){
    try {
      let {data} = await academyAPI.coursesApi.joinCourse(this.itemPage);
      if(data.success){
        //
      }else{
        window.SwalError(data.message)
      }
    } catch (error) {
      window.DHelper.catchException.call(this,error)
    }
  }
 }
}
</script>

<style>

</style>