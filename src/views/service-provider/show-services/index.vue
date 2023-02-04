<template>
    <div style="margin-top: 85px " class="consult max-width-100-hidden">
        <div class="consulting ">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white">أعرض خدماتك</h1>
                        <p class="text-white fs-r-24">
                            يمكنك عرض خدماتك ومهارتك على أصحاب المشاريع  و تحديد قيمة الصفقة المناسبة لكلاً منكم </p>         
                    </div>
                    <div class="col-md-6">
                        <div style="overflow: inherit;" class=" m-auto text-end">
                            <img  src="/assets/img/Group 3066.png" alt="" >
                        </div>

                    </div>

                </div>
                <div class="star-cons">
                    <img src="/assets/img/starrrr.png" alt="">
                </div>
                <div class="star-cons stars">
                    <img src="/assets/img/starsss.png" alt="">
                </div>

            </div>

        </div>
      <!--filter list-->
      <SectionFilterList />
    </div>
</template>

<script>
import SectionFilterList from './parts/section-filter/index.vue'
export default {
 name:'show-services',
 components:{
    SectionFilterList
 }
}
</script>

<style>

</style>