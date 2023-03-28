<template>
  <div class="card card-info" :class="{'tablet':isTablet}">
  <img class="card-img-top" :src="itemPage.image_path" :alt="itemPage.title">
  <div class="card-body">
   <div class="mb-3">
    <d-unlock-icon color="var(--m-color)" />
    <span class="px-2">محتوي متاح دائما</span>
   </div>
   <div class="mb-3">
    <d-doc-text-icon color="var(--m-color)" />
        <span class="px-2">تقييم نهائي</span>
   </div>
   <div class="mb-3">
    <d-medal-star-icon color="var(--m-color)" />
            <span class="px-2">شهادة اتمام دورة</span>
   </div>
   <div>
    <d-money-icon color="var(--m-color)" />
    <span class="px-2">1500 {{ $t('riyals') }}</span>
   </div>
  </div>
</div>
</template>

<script>
export default {
    name:'card-fixed',
    props:{
        itemPage:{}
    }

}
</script>

<style scoped>
.card-info{
    position: fixed;
    width: 410px;
top: 171px;
left: 100px;
right: auto;
z-index: 10;
}
.tablet{
    width: 300px;
    left: 50px;
}
.mobile{
    width: 200px;
    left: 10px;
}
</style>