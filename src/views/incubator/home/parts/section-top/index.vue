<template>
   <div class="consulting " :class="[isMobile?'p-3':'p-5']">
            <div class="" :class="{container:!isMobile}">
                <div class="row">
                    <div class="col-8 col-md-6">
                        <h1 class="header-title-page">
                            حاضنة رياديات </h1>
                        <p class="header-desc-page">فكـــرة مشروعـــــك راح تـــصـــبـــح واقـــــــــــــع
 أول خطوة لتحقيقه أشتراكك في حاضنة رياديات</p>      
                                        
                    </div>
                    <div class="col-3 col-md-6 m-auto">
                        <div style="overflow: inherit;" class="img-cons m-auto ">
                            <img  src="/assets/img/1664204864736 1.png" alt="" >
                        </div>

                    </div>
                    <div class="col-12">
                        <div class="my-3">
                        <a v-if="!token" @click="shouldLoginMsg" class="btn-custmer shadow mt-2"> {{ $t('join-us') }} </a>
                              <router-link v-else-if="userIsSubIncubator" :to="getRouteLocale('incubator-subscribe')" class="btn-custmer shadow mt-2"> {{ $t('join-us') }} </router-link>
                              <a v-else @click="shouldSubNetworkMsg(subNetworkTitle,$event)"  class="btn-custmer shadow mt-2"> {{ $t('join-us') }} </a>
                              <router-link v-if="!token" :to="getRouteLocale('login')" class="btn-custmer-w bg-transparent text-white mt-2"> {{ $t('login-female') }}  </router-link>
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
</template>

<script>
export default {
 name:'section-top',
 data:()=>{
    return{
        subNetworkTitle:'يجب عليك الاشتراك في الشبكة حتى يمكنك الاشتراك في حاضنة رياديات'
    }
 }
}
</script>

<style>

</style>