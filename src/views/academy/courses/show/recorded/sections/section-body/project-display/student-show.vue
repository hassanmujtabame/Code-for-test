<template>
  <div class="course-project-display">
    <h1 class="course-project-display__title">{{ lectureSelected.title }}</h1>
    <p class="course-project-display__observation">اقرا جيدا تعليمات المدرب وقم بارفاق مشروعك بنفس الصيغة التي طلبها المدرب</p>
    <h3 class="course-project-display__subtitle mt-5">تعليمات المدرب :</h3>
    <p class="course-project-display__note" v-html="lectureSelected.desc"></p>

       
      
    <h3 class="course-project-display__subtitle"> المرفقات المدرب:</h3>
    
    <div>
        <attachmentCard 
        v-for="(attachment,i) in lectureSelected.attachments" 
        :key="i"
                :item="attachment"            
                :showBorder="(lectureSelected.attachments.length-1)>i"
                />
    </div>

            <div v-if="userAcademyRole=='student'" class="my-3">
            <button class="btn btn-custmer">إرفع مشروعك الان</button>
        </div>
</div>
 
</template>

<script>
import attachmentCard from './attachments/card'
export default {
 name:'display-for-student',
 props:['lectureSelected','itemPage'],
 components:{
    attachmentCard
 }
}
</script>

<style scoped>
.course-project-display__title{
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */
    text-transform: capitalize;
    color: #414042;
}
.course-project-display__observation{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */
    text-transform: capitalize;
    color: #414042;
}
.course-project-display__subtitle{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */
    text-transform: capitalize;
    color: #1FB9B3;
    
}
.course-project-display__note{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* or 120% */
    text-align: right;
    text-transform: capitalize;
    color: #737373;
}
</style>