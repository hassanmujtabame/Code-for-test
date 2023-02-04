<template>
   <div class="consulting" :class="{'p-5':!isMobile}">
            <div class="netwok-home-header">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="semi-bold fs-r-56 text-white">شبكة رياديات </h1>
                        <p class="fs-r-24 text-white">طموحة و تسعين لتحقيق حلمك و شغفك ؟</p>
                        <p class="fs-r-24 text-white">    
                            شبكة رياديات بتساعدك في مشروعك من الالف الى الياء
                         </p>
                         <div class="btn-main-style mt-5">
                          <router-link v-if="user" :to="getRouteLocale('network-dashboard')" class="btn-custmer shadow mt-2">الصفة الرئيسية</router-link>

                            <template v-else>


                          <router-link :to="getRouteLocale('network-subscribe')" class="btn-custmer fs-r-24 shadow mt-2">{{ $t('join-us') }}</router-link>
                          <router-link :to="getRouteLocale('login')" class="btn-custmer-w fs-r-24 bg-transparent text-white mt-2">{{ $t('login-female') }}</router-link>
                        </template> 
                        </div>
                    </div>
                    <div class="col-md-6 m-auto">
                        <div class="img-cons m-auto ">
                            <img style="border-radius: 50%;position: absolute;width: 300px;height: 300px;" src="/assets/img/1664179507602 aefwG.png" alt="" >
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
    name:'section-1'
}
</script>

<style>

</style>