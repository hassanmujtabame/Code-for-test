<template>
  <div class="card card-info" style="position: absolute !important;" :class="{'tablet':isTablet}">
  <img class="card-img-top" :src="itemPage.image_path" :alt="itemPage.title">
  <div class="card-body pt-0">
   <div class="course-card-fixed__item">
    <d-unlock-icon color="var(--m-color)" />
    <span class="px-2">محتوي متاح دائما</span>
   </div>
   <div class="course-card-fixed__item">
    <d-doc-text-icon color="var(--m-color)" />
        <span class="px-2">تقييم نهائي</span>
   </div>
   <div class="course-card-fixed__item">
    <d-medal-star-icon color="var(--m-color)" />
            <span class="px-2">شهادة اتمام دورة</span>
   </div>
   <div class="course-card-fixed__item">
    <d-money-icon color="var(--m-color)" />
    <span class="px-2">{{itemPage.price}} {{ $t('riyals') }}</span>
   </div>
   <div v-if="token && (userIsSubAcademy ||itemPage.user_is_join_course || isOwner) " class="mt-3">
    <button v-if="!isOwner && (!token || !itemPage.user_is_join_course)" @click="inscription" class="btn btn-custmer w-100">إشترك في الدورة</button>
    <button v-else @click="showCourse" class="btn btn-custmer w-100">{{ btnTitleSub() }}</button>
  </div>
  <div v-else class="mt-3">
    <div class="d-flex justify-content-center">
      <div class="flex-shrink-0 text-center" id="subscribe-action">
        <p class="price-text m-0">تبدأ من</p>
        <h3 class="price-title m-0">150/شهر</h3>
        <button class="btn btn-custmer" @click="gotToSubscribe">{{ $t('subscribe') }}</button>
        <p id="remark-sub">افتح هذه الدورة و 4 آخرين</p>
      </div>
      <div  class="flex-shrink-0 text-center px-2">
        <p class="price-text m-0">إشتري هذي الدورة</p>
        <h3  class="price-title m-0"  >{{ itemPage.price }} {{ $t('curreny-rs') }}</h3>
        <button class="btn btn-custmer"  @click="buyCourse">{{ $t('buying') }}</button>
        </div>
    </div>
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
    buyCourse(){
      if(this.shouldLoginMsg()) return;
      this.fireOpenDialog('checkout-course-academy',{item:{amount:this.itemPage.price,title:`${this.$t('the-course')}:${this.itemPage.title}`},data:this.itemPage})

    },
    gotToSubscribe(){
      if(this.shouldLoginMsg()) return;
      this.router_push('academy-subscribe')
    }
    }

}
</script>

<style scoped>
.card-info{
    position: fixed;
    width: 300px;
top: 100px;
left: 100px;
right: auto;
z-index: 10;
}
html[lang=en] .card-info{
  right: 100px;
left: auto;
}
.price-title{
  font-weight: 700;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */

text-align: center;
text-transform: capitalize;

/* Turquoise text */

color: #0C2F33;
}
.price-text{
  font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */

text-align: center;

/* Turquoise text */

color: #0C2F33;
}
.course-card-fixed__item{
  display: flex;
    justify-content: end;
    direction: initial;
    flex-direction: row-reverse;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 29px;
text-align: justify;

/* Medium gray */

color: #737373;
}
.card-img-top{
  height: 240px;
  max-height: 240px;
}
.tablet{
    width: 300px;
    left: 50px;
}
.mobile{
    width: 200px;
    left: 10px;
}
.mobile .card-img-top{
  height: 160px;
  max-height: 160px;
}
#remark-sub{
  font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */

display: flex;
align-items: center;
text-align: center;

color: #979797;
}
html[lang=en] .tablet{
  right: 50px;
left: auto;
}
html[lang=en] .mobile{
  right: 10px;
left: auto;
}
html[lang=ar] #subscribe-action{
  border-left: 1px solid var(--color-border);
    padding-left: 10px;
}
html[lang=en] #subscribe-action{
  border-right: 1px solid var(--color-border);
    padding-right: 10px;
}

</style>