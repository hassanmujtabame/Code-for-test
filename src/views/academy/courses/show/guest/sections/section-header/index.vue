<template>
<div class="">
   <div class="main-top py-5 position-relative">
      <div class="px-5" style="">

   <div class="px-5l mb-3">
      <span class="course-department-name mx-5l py-2 px-3">{{ itemPage.department_name }}</span>
   </div>
        <h1 class="text-white px-5l fs-1 position-relative z-index-1"> {{ itemPage.title }} </h1>
        <p class="text-white fs-r-24 position-relative z-index-1" :class="{'px-0':!isMobile,'px-1':isMobile}" style="max-width702px; width: 65%">
       {{ itemPage.short_description }}
        </p>
      </div>

        <div class="star position-absolute">
          <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="" />
        </div>
        <div class="square position-absolute">
          <img class="landing" :src="`${publicPath}assets/svg/square.svg`" alt="" />
        </div>
        <div class="star-two position-absolute">
          <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="" />
        </div>
        <div class="star-big position-absolute">
          <img class="landing" :src="`${publicPath}assets/svg/star-big.svg`" alt="" />
        </div>
      </div>
        <div class="course-menu-top px-5">
         <ul class="course-menu-top__wrapper">
            <li @click="scollToElement('course-desc',$event)">الوصف</li>
            <li @click="scollToElement('course-teaching',$event)">ماذا ستتعلم</li>
            <li @click="scollToElement('course-contents',$event)">محتويات الدورة</li>
            <li @click="scollToElement('course-instructors',$event)">{{ $t('course-instructors') }}</li>
            <li @click="scollToElement('course-rates',$event)">التقييمات</li>
         </ul>
        </div>
      </div>
</template>

<script>
export default {
 name:'section-header',
 props:{
    itemPage:{}
 }
}
</script>

<style scoped>
.course-department-name{
   font-style: normal;
   font-weight: 700;
   font-size: 12px;
   line-height: 17px;
   /* identical to box height, or 142% */
   /* Medium gray */
   color: #737373;
   background: #F6F8F9;
   border-radius: 4px;
}
.course-menu-top{
   display: flex;
   align-items: center;
   width: 100%;
   height: 48px;
   background: #FFFFFF;
   box-shadow: 0px 6px 19px rgba(12, 47, 51, 0.07);
}
.course-menu-top__wrapper{
   list-style: none;
   height: 24px;
   display: flex;
   flex-direction: row;
   justify-content: start;
   align-items: center;
   padding: 0px;
   gap: 48px;
   margin:0;
}
.course-menu-top__wrapper>li{
   cursor: pointer;
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   /* identical to box height, or 150% */
   display: flex;
   align-items: center;
   color: #737373;
}
</style>