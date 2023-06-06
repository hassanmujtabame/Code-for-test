<template>
  <div class="course-show-page__header">
    <div class="text-start ">

      <div class=" d-flex gap-2 justify-content-end my-3">
        <button v-if="!itemPage.user_is_join_course" @click="inscription" class="btn btn-custmer">أشترك في الدورة</button>
        <button v-else @click="confirmCancelJoin" class="btn btn-danger">{{ $t('undo-joining') }}</button>
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
      type:'warning',
      btns:[
        {title:this.$t('join_confirmation'),action:()=>this.joinCourse()}
      ]
    }
    this.showConfirmMsg(dataEvt)
  },
  async joinCourse(){
    try {
      let {data} = await academyAPI.coursesApi.joinCourse(this.itemPage.id);
      if(data.success){
        let dataEvt ={
            title:'تم الانضمام الى هذه الدورة بنجاح',
            description:'',
            btns:[
              {title:this.$t('course-page'),action:()=>this.refreshPage()},
              {title:this.$t('undo-joining'),action:()=>this.cancelJoin(),class:"btn btn-danger"},
            ]
    }
    this.showSuccessMsg(dataEvt)
      }else{
        window.SwalError(data.message)
      }
    } catch (error) {
      window.DHelper.catchException.call(this,error)
    }
  },
  confirmCancelJoin(){
    let dataEvt ={
      title:'هل أنت متأكد من ترجع من الإنضمام من هذه الدورة ؟',
      btns:[
        {title:this.$t('undo-joining'),action:()=>this.cancelJoin(),class:'btn btn-danger'}
      ]
    }
    this.showConfirmMsg(dataEvt)
  },
  async cancelJoin(){
        try {
            let {data} = await academyAPI.coursesApi.cancelJoinCourse(this.itemPage.id)
            if(data.success){
              this.refreshPage()
            }else{
              window.SwalError(data.message)
            }
        } catch (error) {
            window.DHelper.catchException.call(this,error)
        }
    },
 }
}
</script>

<style>

</style>