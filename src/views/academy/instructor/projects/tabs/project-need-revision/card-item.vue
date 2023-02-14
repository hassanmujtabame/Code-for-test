<template>
  <div class="academy-project-item" :class="{'mobile':isMobile}">
  <div class="academy-project-item__wrapper">
    <!-- header -->
  <div class="academy-project-item__header">
    <div class="academy-project-item__header-info">
    <div class="academy-project-item__title">
        <h1>إسم الدوة : <span>{{item.course_name}}</span></h1>
        <div class="academy-project-item__header-actions">
    <div class="academy-project-item__date">
        <i class="fa-regular fa-clock"></i>
        <span class="px-2">تاريخ النشر :</span>
        <span>2010-10-10</span>
    </div>
</div>
    </div>
    <div class="academy-project-item__subtitle">
        <h6>المشاريع تحتاج الى مراجعة : {{item.projects_count}} مشروع</h6>
    </div>
  <div class="academy-project-item__description">
    <p>
        ملاحظة : قم بتصحيح جميع المشاريع و تأكد من اعطاء الطلاب الدرجة التي يستحقونها في المشروع     </p>
    </div>
    </div>
    
  </div>
  <!--body-->
  <div class="academy-project-item__body">
  <div class="academy-project-item__project">
    <div v-for="(project,i) in item.projects_review" :key="i" class="academy-project-item__project-info">
    <div class="academy-project-item__project-title">
        {{ project.title }}
        </div>
    </div>
    <div class="academy-project-item__actions">
    
    <div class="academy-project-item__btns">
        <button class="btn btn-custmer btn-small">تعديل المشروع</button>
        <button class="btn btn-custmer btn-danger btn-small mx-1">خذف المشروع</button>
    </div>
    </div>
</div>
 
  </div>
  </div>
  </div>
</template>

<script>
export default {
  props:{
    item:{}
  }
}
</script>

<style scoped>
.academy-project-item{
    width: 100%;
}
.academy-project-item__wrapper{
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #CDD7D8;
    flex-direction: column;
}
.academy-project-item__header{
    display: flex;
}
.academy-project-item__header-info{
flex:1;
}
.academy-project-item__title{
    display: flex;
}
.academy-project-item__header-actions{
    flex-shrink: 0;
}
.mobile .academy-project-item__header-actions{
    flex-shrink: 1; 
}
.academy-project-item__project{
    display: flex;
}
.academy-project-item__project-info{
    flex:1
}
.academy-project-item__actions{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
}
.mobile .academy-project-item__actions{
    flex-shrink: 1; 
}
.academy-project-item__btns{
    display: flex;
    flex-direction: row; 
    align-items: flex-end;
}
span {
    color:inherit
}
.academy-project-item__title>h1{
    flex:1;
    margin: 0;
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */

display: flex;
align-items: center;
text-transform: capitalize;

color: #1FB9B3;
}
.academy-project-item__description{
    margin:10px 0;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */

color: #737373;
}
.academy-project-item__subtitle>h6{
    margin:10px 0;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


color: #F2631C;
}
.academy-project-item__date{
    color:#737373
}
</style>