<template>
  <div class="course-exam-display">
        <h1 class="course-exam-display__title">إختبار: <span class="m-c">{{ exam.title }}</span></h1>
        <h3 class="course-exam-display__subtitle">الحالة: </h3>
        <h3 class="course-exam-display__subtitle">النتيجة: </h3>
        <div>
            <button @click="router_push('academy-your-exams-do-exam',{id:exam.id})" class="btn btn-custmer">إبدا الاختبار</button>
        </div>
        </div>
</template>

<script>
export default {
props:['exam']
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