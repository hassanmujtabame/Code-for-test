<template>
    <div class="container-fluid py-3 mt-4" style="background-color: var(--pc)">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h6 style="color: #666;">
                        مميزات الانضمام الى شبكه رياديات
                    </h6>
                    <h2 class="text-white">
                        اصنع شيئا كبيرا
                    </h2>
                    <p class="text-white">
                    الوصول الى مجموعه واسعه من الموارد و الخدمات تقدم شبكة رياديات مجموعه واسعه من الموارد و الخدمات التى يمكن ان نساعدك على بدء و اداره عملك الخاص 
                    </p>
                </div>
                <div class="col-4">
                    <div class="d-flex align-items-center" style="width: 12rem; height: 12rem; background-color: #e16e1a; border-radius: 50%">
                        <router-link style="background-color: rgb(255, 174, 0);" :to="getRouteLocale('network-subscribe')"  class="btn shadow mx-2 ">
                            باقات الاشتراك
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
        <SwiperPart />
    </div>
</template>

<script>
import SwiperPart from './parts/swiper-part.vue'
export default {
    components: {
        SwiperPart
    },
    name: 'section-make-big'
}
</script>