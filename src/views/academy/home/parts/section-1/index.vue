<template>
  <div class="consulting p-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white">اكاديمية رياديات</h1>
                        <p class="text-white">
                            طوري مهاراتك و أنطلقي في عالم ريادة الاعمال والعمل الحر , أكاديمية رياديات ستكون معكِ خطوة بخطوة                                                </p>
                            <div class="btn-main-style">
                              <router-link :to="getRouteLocale('academy-subscribe')" class="btn-custmer shadow mt-2">انضمي الان</router-link>
                              <a class="btn-custmer-w bg-transparent text-white mt-2">سجلي دخولك</a>
                             </div>
                    </div>
                    <div class="col-md-6 m-auto">
                        <div style="overflow: inherit;" class="img-cons m-auto ">
                            <img style="position: absolute;height: 341px;top: 7px;left: -111px;" src="/assets/img/1664192063672 1.png" alt="" >
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