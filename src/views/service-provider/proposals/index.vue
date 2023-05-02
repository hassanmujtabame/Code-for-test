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
                            <img  :src="`${publicPath}assets/img/Group 3066.png`" alt="" >
                        </div>

                    </div>

                </div>
                <div class="star-cons">
                    <img :src="`${publicPath}assets/img/starrrr.png`" alt="">
                </div>
                <div class="star-cons stars">
                    <img :src="`${publicPath}assets/img/starsss.png`" alt="">
                </div>

            </div>

        </div>
      <!--filter list-->
      <div class="container mt-5">
      <SectionFilterList />
    </div>
      <SectionContinueLearning />
      <SectionHear />
    </div>
</template>

<script>
import SectionFilterList from './parts/section-filter/index.vue'
import SectionContinueLearning from '@/views/service-provider/common-components/section-continue-learning/index.vue'
  import SectionHear from '@/views/service-provider/common-components/section-hear/index.vue'
 
export default {
 name:'show-services',
 components:{
    SectionFilterList,
    SectionContinueLearning,
    SectionHear
 }
}
</script>

<style>

</style>