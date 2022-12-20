<template>
    <div class="box border rounded-2 align-items-center  p-4 row">
        <div class="col-md-5">
            <img class="rounded-circle" :src="member.image" :alt="member.name"
                width="150" height="150">
        </div>
        <div class="col-md-6  ">

            <h5 class="m-c">{{ member.name }}</h5>
            <p>{{ member.job }}</p>
            <button class="border px-3 py-2 rounded-2 bg-transparent">
                صفحتك الشخصية
            </button>
        </div>


    </div>
</template>

<script>
export default {
 name:'user-dash-info',
 props:{
   member:{
     type:[Array,Object],
     default:()=>{return {
        image:'/assets/img/صورة واتساب بتاريخ 2022-10-18 في 09.53.21.jpg',
        name:'عبد الرحمن الشيخ',
        job:'مصمم واجهات اميامية',
     }}
   }
 }
}
</script>

<style>

</style>