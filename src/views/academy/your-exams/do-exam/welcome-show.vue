<template>
  <div >
            <h1 class="course-exam-display__title">إختبار: <span class="m-c">{{ exam.title }}</span></h1>
        <h3 class="course-exam-display__subtitle">الحالة: <span class="m-c">{{exam.is_open?$t("opened"):$t('closed') }}</span></h3>
        <h3 class="course-exam-display__subtitle">النتيجة: <span :class="{'m-c':exam.status=='pass','m-r':exam.status=='fail'}">{{ $t(exam.status) }}</span></h3>
        <div class="text-center">
            <button v-if="exam.status!='fail'"  @click="doStart" :disabled="exam.status=='pass'" class="btn btn-custmer">إبدا الاختبار</button>
            <!-- <button @click="doStart" v-if="exam.status=='fail'"  class="btn btn-custmer">حاول مرة أخرى</button> -->
        </div>
        <!-- :disabled="exam.status=='pass' || !exam.is_open":disabled="exam.status=='pass' || !exam.is_open" -->
        </div>
</template>

<script>
export default {
 props:['exam'],
 methods:{
    doStart(){
        this.$emit('start')
    }
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