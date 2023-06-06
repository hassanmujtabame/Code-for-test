<template>
   <div class="consulting" :class="[isMobile?'p-3':'p-5']">
            <div class="" :class="{container:!isMobile}">
            <div class="row align-items-center justify-content-between">
                <div class="col-8 col-md-6  mb-5">
                    <h1 class="header-title-page">
                        اكاديمية رياديات </h1>
                    <p class="header-desc-page">
                        طوري مهاراتك و أنطلقي في عالم ريادة الاعمال والعمل الحر , أكاديمية رياديات ستكون معكِ خطوة بخطوة
                    </p>
                   
                </div>
                <div class="col-3 col-md-6">
                    <div style="overflow: inherit;" class=" m-auto text-start ">
                        <img class="img-fluid" :src="`${publicPath}assets/img/Group 1171274931s.png`" alt="">
                    </div>
                </div>
                <div class="col-12 mb-3">
                        <router-link v-if="userIsSubAcademy" :to="getRouteLocale('network-subscribe')" class="btn-custmer shadow mt-2"> {{ $t('join-us') }} </router-link>
                              <a v-else @click="shouldSubNetworkMsg(subNetworkTitle,$event)"  class="btn-custmer shadow mt-2"> {{ $t('join-us') }} </a>
 
                             </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 name:'section-auth-header',
 data:()=>{
    return{
        subNetworkTitle:'يجب عليك الاشتراك في الشبكة حتى يمكنك الاشتراك في اكاديمية رياديات'
    }
 }
}
</script>

<style>

</style>