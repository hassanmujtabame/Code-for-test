<template>
    <div class="container-fluid my-5 py-5" style="position:relative; overflow: hidden; background-color: var(--pc);">
        <div class="circle-features" style="top: 0; left: 25%;"></div>
        <div class="circle-features" style="bottom: 30px; left: -10px; width: 16rem; height: 16rem"></div>
        <div class="circle-features" style="bottom: -30px; right: -30px; width: 18rem; height: 18rem; background-color: #7b7777 !important;"></div>

            <div style="width: 80%;position: relative; z-index: 10" class="mx-auto my-3">
                <div class="row">
                    <div class="col-8">
                        <h6 style="color: #666;">
                            مميزات الانضمام الى شبكه رياديات
                        </h6>
                        <h2 class="text-white">
                            اصنع شيئا كبيرا
                        </h2>
                        <p class="text-white">
                            الوصول الى مجموعه واسعه من الموارد و الخدمات تقدم شبكة رياديات مجموعه واسعه من الموارد و الخدمات
                            التى يمكن ان نساعدك على بدء و اداره عملك الخاص
                        </p>
                    </div>
                    <div class="col-4">
                        <router-link style="background-color: rgb(255, 174, 0);" :to="getRouteLocale('network-subscribe')"
                            class="btn shadow mx-2 ">
                            باقات الاشتراك
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- <h2 class="text-center text-white mb-4 pt-4">
            بعض من المميزات التى تحصلين عليها بانضمامك الينا فى الشبكه و هناك المزيد </h2> -->
            <div style="width: 80%; position: relative; z-index: 10" class="mx-auto" id="swiper-custom">
                <swiper-custom v-if="!loading" :slides-per-view="3.5" :space-between="10" is-auto :items="items">
                    <template v-slot:default="{ item }">
                        <Card :name="item.name" :description="item.description" :to="item.to" :img="item.img" />
                    </template>
                </swiper-custom>
            </div>

    </div>
</template>
<style>
#swiper-custom .swiper-button-next,
#swiper-custom .swiper-button-prev {
    color: #fff !important;
    border-color: #fff !important;
    border-radius: 50% !important;
}

.circle-features {
    position: absolute;
    width: 12rem;
    height: 12rem;
    background-color: #e16e1a;
    border-radius: 50%;
    z-index: 1;
}
</style>
<script>
import Card from './card-member.vue'
import SwiperCustom from './swiper/index.vue'
export default {
    name: 'section-features',
    components: { Card, SwiperCustom },
    data: () => {
        return {
            items: [
                {
                    name: 'لقاءات تعليمية',
                    description: 'نأخذك خطوة ثم خطوة في عالم ريادة الاعمال مع العديد من الدورات واللقاءات التعليمية وورش التعليم والتدريب علي يد مجموعة من افضل الخبراء',
                    to: 'academy-meetings', img: 'section-features/3.png'
                },

                // {name: 'مشاريع الاستثمار وحاضنة الاعمال', description: 'طرح مشروعك للاستثمار والحصول علي العديد من الفرص لكي يري مشروعك النور بالاضافة الي امكانية المشاركة والاستثمار في العديد من المشاريع الواعدة التي يطرحها اعضاء شبكتنا', to: 'index', img: 'section-features/3.png'},
                {
                    name: 'المدونة', description: 'المشاركة في شبكة ومجتمع رياديات بكتابة المدونات والاطلاع علي مدونات اعضاء الشبكة من الرائدات والخبراء في جميع المجالات',
                    to: 'academy-blogs', img: 'section-features/1.png'
                },

                {
                    name: 'المعارض', description: 'روج لمعرضك ومشروعك من خلال المشاركة وعرض مشروعك ومعرضك التجاري كما يمكنك متابعة والمشاركة في معارض ومشاريع اعضاء الشبكة الاخرين  ',
                    to: 'network-exhibitions', img: 'section-features/2.png'
                },

                {
                    name: 'العروض', description: 'احصلي على عروض و خصومات هائلة ومذهلة سواء من اكواد الخصم للمواقع الالكترونية او من خلال بطاقة عضوية رياديات للحصول على الخصومات من المحلات والمتاجر',
                    to: 'network-offers', img: 'section-features/3.png'
                },

                {
                    name: 'قصص النجاح', description: 'لا شك ان متابعة قصص النجاح الملهمة ترسم لنا طريقاً مليئ بالامل والطموح في رحلة النجاح والاستفادة الشاملة من تجارب الاخرين مما ينعكس علي تجربتنا الخاصة',
                    to: 'network-success-stories', img: 'section-features/1.png'
                },

                // {name: 'نماذج متكاملة لادارة الاعمال', description: 'الحصول علي العديد من الملفات والنماذج الجاهزة والمتكاملة التي صممت علي يد مجموعة من المتخصصين والتي تساعدك في انطلاقك نحو النجاح ', to: 'index', img: 'section-features/3.png'},

                {
                    name: 'اماكن العمل', description: 'حافظ على إنتاجيتك مع أماكن العمل الحديثة والآمنة والمجهزة بأحدث الأجهزة في شبكة رياديات التي توجد في مختلف الأماكن!',
                    to: 'workspaces-home', img: 'section-features/3.png'
                },
                {
                    name: 'الاستشارات', description: 'أستشارات رياديات هي خدمة مركزة لرواد ورائدات الأعمال؛ لتحويل أفكارهم إلى مشروعات مربحة، وتقديم نصائح وإرشادات محددة حول الفرص العديدة المتوفرة ومزاياها.',
                    to: 'consulting-home', img: 'section-features/1.png'
                },
                {
                    name: 'كوني مقدمة خدمة ', description: 'يمكنك الان عرض مهاراتك وتقديم خدماتك للحصول علي العديد من فرص التوظيف والعديد من العروض لشراء خدماتك بطريقة سهلة وبسيطة فقط قدمي الخدمة واعرضي مهاراتك ونحن نقوم بالباقي',
                    to: 'service-provider-home', img: 'section-features/3.png'
                },
                {
                    name: 'التسويق بالعمولة', description: 'كونى شريكة رياديات التسويقية من خلال برنامج التسويق بالعمولة وأكسبى مقابل  كل عملية تسجيل ',
                    to: 'affiliate-marketing-home', img: 'section-features/2.png'
                },
                // {name: 'رياديات تور', description: 'رياديات تور هي مبادرة تهدف إلى نشر ثقافة ريادة الأعمال النسائية في المملكة العربية السعودية ودول الخليج. تنظم المبادرة سلسلة من اللقاءات وورش العمل والفعاليات في مختلف المدن والمناطق', to: 'index', img: 'section-features/3.png'},
            ]
        }
    }
}
</script>
