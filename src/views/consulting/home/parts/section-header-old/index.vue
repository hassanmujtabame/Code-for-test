<template>
 <div class="consulting p-3">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-6 py-5" style="display: flex; flex-direction: column; justify-content: space-between;">
                        <h1 class="fs-1 text-white">
                            أستشارات رياديات
                        </h1>
                        <p class="text-white">
                            تقدمي إلى الأمام وابدئي مشروعك باستشارة مهنية في أغلب المجالات 
                        </p> 
                        <!-- <div class="btn-main-style ">
                            <a href="" class="btn-custmer shadow mt-2"> {{ $t('join-us') }} </a>
                            <a class="btn-custmer-w bg-transparent text-white mt-2 mx-3"> {{ $t('login-female') }} </a>
                        </div> -->
                           <div class="col-12 mb-3 mt-5">
                                <a @click="shouldLoginMsg" class="btn-custmer shadow"> {{ $t('join-us') }} </a>
                                <router-link v-if="!token" :to="getRouteLocale('login')" class="btn-custmer-w bg-transparent text-white mt-2"> {{ $t('login-female') }}  </router-link>
                             </div> 
                    </div>
                    <div class="col-md-6 m-auto" style="margin-right: auto; display: contents;">
                        <div class="">
                            <img :src="`${publicPath}assets/img/Group 289326.png`" style="width:300px; height: 350px;" alt="consulting-home" >
                        </div> 
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
</template>

<script>
export default {
 name:'section-1'
}
</script>

<style>

</style>