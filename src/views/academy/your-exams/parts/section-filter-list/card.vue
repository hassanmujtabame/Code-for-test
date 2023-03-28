<template>
   <div class="box-exam d-flex align-items-center">
    <div class="flex-grow-1">
        <h1 class="box-exam__course"><span class="m-c">إسم الدورة :</span> {{ item.course_name }}</h1>
    <h3 style="color:#F2631C" class="box-exam__name">{{ item.title }}</h3>
    <p v-if="item.status=='pass'" class="box-exam__note">النتيجة 6/10</p>
    <p v-else class="box-exam__note">ملاحظة : سيقوم المدرب بفحص مشروعك بنفسه وتقيمك</p>
    </div>
<div class="flex-shrink-0">
    <button @click="router_push('academy-your-exams-do-exam',{id:item.id})" class="btn btn-custmer"> إذهب الى الاختبار</button>
</div>
   </div>
</template>

<script>
export default {
    name: 'exam-card',
    props:{
        item:{}
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