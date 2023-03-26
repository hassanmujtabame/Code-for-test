<template>
<div class="main-top py-5 position-relative">
        <h1 class="text-white px-5 fs-1 position-relative z-index-1"> {{ itemPage.title }} </h1>
        <p class="text-white  fs-r-24 position-relative z-index-1" :class="{'px-5':!isMobile,'px-1':isMobile}" style="max-width:702px">
        هنا نبذة عن الدورة
        </p>
      </div>
</template>

<script>
export default {
 name:'section-header',
 props:{
    itemPage:{}
 }
}
</script>

<style>

</style>