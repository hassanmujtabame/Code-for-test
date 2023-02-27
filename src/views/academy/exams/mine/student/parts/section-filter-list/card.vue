<template>
   <div class="box-exam d-flex align-items-center">
    <div class="flex-grow-1">
        <h1 class="box-exam__course"><span class="m-c">إسم الدورة :</span> {{ item.course_name }}</h1>
    <h3 style="color:#F2631C" class="box-exam__name">{{ item.title }}</h3>
    <p class="box-exam__note">
       <template v-if="item.status=='todo'">
            ملاحظة:  تحتاج الى أداء هذا الاختبار
       </template>
       <template v-if="item.status=='pass'">
        <span class="m-c">مبروك!</span><span>، لقد نجحت في الاختبار</span>
        </template>
        <template v-if="item.status=='fail'">
        <span class="m-r">للأسف لم تجتزالاختبار بنجاح</span>
        </template>
    </p>
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