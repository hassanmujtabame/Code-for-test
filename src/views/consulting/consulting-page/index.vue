<template>
    <main style="margin-top: 85px" class="consult">
        <div class="consulting">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white"> تحتاج الى المساعدة ؟ </h1>
                        <p class="text-white">
                            أحجز جلستك الان مع افضل المستشارين و ِأحجز جلستك الان مع افضل المستشارين و ِأحجز جلستك الان
                            مع افضل المستشارين
                        </p>
                        <button class="btn border text-white px-3" data-bs-toggle="modal" data-bs-target="#addModal">
                            اعرض قصتك الان
                        </button>
                    </div>
                    <div class="col-md-6">
                        <div style="overflow: inherit" class="m-auto text-end">
                            <img class="img-fluid" src="/assets/img/v2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="star-cons">
                    <img src="/assets/img/starrrr.png" alt="" />
                </div>
                <div class="star-cons stars">
                    <img src="/assets/img/starsss.png" alt="" />
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row align-items-center m-auto">
                <div class="col-md-6">
                    <div>
                        <div class="bg-back position-relative">
                            <img class="img-fluid" src="/assets/img/cuate.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-md-6 text">
                    <h2 class="fw-bolder">
                        نساعدك على الانطلاق !
                    </h2>
                    <p>
                        مع خدمة استشارات رياديات فأنت في طريقك الصحيح نحو هدفك ..نوفر لك أفضل المستشارين ليساعدوكي في
                        تحقيق أهدافك
                        أستشارات رياديات هي خدمة مركزة لرواد ورائدات الأعمال؛ لتحويل أفكارهم إلى مشروعات مربحة، وتقديم
                        نصائح وإرشادات محددة حول الفرص العديدة المتوافرة ومزاياها.
                    </p>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-md-6">
                    <h3>
                        أبرز مجالات الاستشارة
                    </h3>
                </div>
                <div class="col-md-6 text-end">
                    <button class="btn bg-main text-white p-2 px-3" data-bs-toggle="modal" data-bs-target="#addModal">
                        {{ $t('more') }}
                    </button>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-12">
                    <div class="row ">
                        <div class=" col-12 mt-3 m-auto col-md-3">
                            <div class="box text-center shadow border rounded-3">
                                <div>
                                    <img class="" src="/assets/img/consult1775.png" alt="" width="259" height="192">
                                </div>
                                <div class="text-box bg-white w-100 p-4 text-center rounded-3">
                                    دراسة جدوى
                                </div>
                            </div>
                        </div>
                        <div class=" col-12 mt-3 m-auto col-md-3">
                            <div class="box text-center shadow border rounded-3">
                                <div>
                                    <img class="" src="/assets/img/consult1775.png" alt="" width="259" height="192">
                                </div>
                                <div class="text-box bg-white w-100 p-4 text-center rounded-3">
                                    دراسة جدوى
                                </div>
                            </div>
                        </div>
                        <div class=" col-12 mt-3 m-auto col-md-3">
                            <div class="box text-center shadow border rounded-3">
                                <div>
                                    <img class="" src="/assets/img/consult1775.png" alt="" width="259" height="192">
                                </div>
                                <div class="text-box bg-white w-100 p-4 text-center rounded-3">
                                    دراسة جدوى
                                </div>
                            </div>
                        </div>
                        <div class=" col-12 mt-3 m-auto col-md-3">
                            <div class="box text-center shadow border rounded-3">
                                <div>
                                    <img class="" src="/assets/img/consult1775.png" alt="" width="259" height="192">
                                </div>
                                <div class="text-box bg-white w-100 p-4 text-center rounded-3">
                                    دراسة جدوى
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="sec-five mt-5 p-3">
            <div class="">
                <div class="d-flex justify-content-between align-items-center container">
                    <h1>أبرز مستشارينا </h1>
                    <div>
                        <button class="more">
                            <a href="" class="text-dark">
                                {{ $t('more') }}
                            </a>
                        </button>
                    </div>
                </div>
                <d-swiper 
                :items="memberitems"
                          :loop="true"
                          :spaceBetween=10
                              :slidesPerView=4
                class="swiper-container mySwiper main-swiper">
                    
                        <template v-slot>
                            <a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <MemberCard />
                            </a>

                        </template>
                        
                        
                       
                        
                        
                        

                   

                    </d-swiper>
            </div>
        </div>
    </main>
</template>

<script>
import MemberCard from './card-member.vue'
export default {
    name: 'counseling-page',
    components:{
        MemberCard
    },
    data:()=>{
        return {
            memberitems:[]
        }
    }
}
</script>

<style>

</style>