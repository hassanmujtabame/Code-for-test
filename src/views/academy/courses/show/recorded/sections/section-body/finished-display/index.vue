<template>
  <div class="">
   <h1 class="section-title">مبروك !!</h1>
   <p class="section-desc">لقد اتممت الدورة بنجاح ! </p>
   <div class="mt-3">
    <button class="btn btn-custmer">حمّل شهادة تخرجك</button>
    <button class="btn btn-custmer btn-secondary mx-2">قيّم الدورة</button>
   </div>
  </div>
</template>

<script>
export default {
 name:'finished-display'
}
</script>

<style scoped>
.section-title{
font-weight: 600;
font-size: 40px;
line-height: 72px;
/* identical to box height, or 180% */
text-transform: capitalize;
color: #1FB9B3;
}
.section-desc{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */
text-transform: capitalize;

color: #414042;
}
</style>