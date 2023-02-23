<template>
  <div >
            <h1 class="course-exam-display__title">إختبار: <span class="m-c">{{ exam.title }}</span></h1>
        <h3 class="course-exam-display__subtitle">الحالة: <span class="m-c">{{exam.is_open?$t("opened"):$t('closed') }}</span></h3>
        <h3 class="course-exam-display__subtitle">النتيجة: <span :class="{'m-c':exam.status=='pass','m-r':exam.status=='fail'}">{{ $t(exam.status) }}</span></h3>
        <div class="text-center">
            <button @click="doStart" :disabled="exam.status!='fail' || !exam.is_open" class="btn btn-custmer">إبدا الاختبار</button>
        </div>
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

<style>

</style>