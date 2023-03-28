<template>
  <div class="card card-info" :class="{'tablet':isTablet}">
  <img class="card-img-top" :src="itemPage.image_path" :alt="itemPage.title">
  <div class="card-body">
   <div class="mb-3">
    <d-unlock-icon color="var(--m-color)" />
    <span class="px-2">محتوي متاح دائما</span>
   </div>
   <div class="mb-3">
    <d-doc-text-icon color="var(--m-color)" />
        <span class="px-2">تقييم نهائي</span>
   </div>
   <div class="mb-3">
    <d-medal-star-icon color="var(--m-color)" />
            <span class="px-2">شهادة اتمام دورة</span>
   </div>
   <div class="mb-3">
    <d-money-icon color="var(--m-color)" />
    <span class="px-2">{{itemPage.price}} {{ $t('riyals') }}</span>
   </div>
   <div class="mt-3">
    <button v-if="!isOwner && (!token || !itemPage.user_is_join_course)" @click="inscription" class="btn btn-custmer w-100">إشترك في الدورة</button>
    <button v-else @click="showCourse" class="btn btn-custmer w-100">{{ btnTitleSub() }}</button>
   

</div>
  </div>
  </div>
</template>

<script>
import academyAPI from '@/services/api/academy'
export default {
    name:'card-fixed',
    props:{
        itemPage:{},
        isOwner:{
            type:Boolean,
            default:false,
        },
       
    },
    data:()=>({
        resetCourse:3,
    }),
    computed:{
    
    },
    methods:{
      btnTitleSub(){
        switch (this.itemPage.type) {
          case 'on-site':return 'عرض جدول الدورة'
          default:
          return 'الذهاب الى الدورة التدريبة'
        }
      },
              showCourse(){
            this.router_push('academy-course-preview-show')
        },
        inscription(){
            if(!this.token){
                let dataEvt={
                    title:'يجب ان تسجل الدخول لاشتراك في الدورة',
                    description:'',
                    type:'warning',
                    btns:[
                        {title:this.$t('login'),action:()=>this.router_push('login')}
                    ]
                }
                this.showConfirmMsg(dataEvt);
                return;
            }
            if(!this.itemPage.user_is_join_course){
                                let dataEvt ={
                    title:'هل أنت متأكد من أنضمامك لهذه الدورة ؟',
                    description:`بأنضمامك الى هذا الدورة  سيتبقى لك <span style="color:#F2631C">${this.resetCourse} دورات</span> هذا الشهر`,
                    btns:[
                        {title:this.$t('join_confirmation'),action:()=>this.joinCourse()}
                    ]
                    }
                    this.showConfirmMsg(dataEvt)
                return;
            }
        },
        async joinCourse(){
    try {
      let {data} = await academyAPI.coursesApi.joinCourse(this.itemPage.id);
      if(data.success){
        let dataEvt ={
            title:'تم الانضمام الى هذه الدورة بنجاح',
            description:'',
            btns:[
              {title:this.$t('course-page'),action:()=>this.router_push('academy-course-preview-show',{id:this.itemPage.id})},
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

<style scoped>
.card-info{
    position: fixed;
    width: 300px;
top: 171px;
left: 100px;
right: auto;
z-index: 10;
}
.card-img-top{
  min-height: 245px;
}
.tablet{
    width: 300px;
    left: 50px;
}
.mobile{
    width: 200px;
    left: 10px;
}
</style>