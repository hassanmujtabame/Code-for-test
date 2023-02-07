<template>
   <div class="box-exam d-flex align-items-center">
    <div class="flex-grow-1">
        <h1 class="box-exam__course"><span class="m-c">إسم الدورة :</span> الازياء</h1>
    <h3 style="color:#F2631C" class="box-exam__name">مشروع 1</h3>
    <p class="box-exam__note">ملاحظة : سيقوم المدرب بفحص مشروعك بنفسه وتقيمك</p>
    </div>
<div class="flex-shrink-0 d-flex flex-column justify-content-evenly align-self-stretch">

    <div>
        <timeIcon :size="16" /> <span>تاريخ الارسال</span> <span>2010-11-11</span>
    </div>
    <div>

    <button class="btn btn-custmer btn-small"> تعديل المشروع </button>
    <button class="btn btn-custmer btn-danger btn-small mx-2"> حذف المشروع </button>
  
</div>
</div>
   </div>
</template>

<script>
import timeIcon from '@/components/icon-svg/time.vue';
export default {
    name: 'course-card',
    components:{
        timeIcon
    }
}
</script>

<style scoped>
.box-exam{
    border-bottom: 0.5px solid #e1e5e7;
}
.box-exam__course{
    font-weight: 400;
font-size: 20px;
line-height: 24px;
}
.box-exam__name{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
}
.box-exam__note{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;


color: #737373;
}
</style>