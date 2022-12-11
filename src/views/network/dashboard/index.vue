<template>
   <div style="margin-top:85px">
<div class="container dashbord">
    <div class="row ">
        <div class="col-md-6 mt-4">
            <div class="box one  p-3">
                <h3 class="m-c fw-bolder text-start">
                    تهانينا
                </h3>
                <p>
                    أنت الان عضو في شبكة رياديات (اشتراك شهري)
                    يمكنك الاستفادة من خدماتنا الفريدة و المتنوعة
                </p>
                <p>
                    يمكنك دائماً تبديل بين خدمات رياديات المختلفة  
                </p>
                <ul class="nav nav-pills mb-3 d-flex gap-2 flex-wrap " id="pills-tab" role="tablist">
                    <a class="nav-item" role="presentation">
                      <button class="nav-link p-2 text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">شبكة رياديــــــات</button>
                    </a>
                    <a class="nav-item" role="presentation">
                      <button class="nav-link p-2 text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">حاضنة رياديات</button>
                    </a>
                    <a class="nav-item" role="presentation">
                      <button class="nav-link p-2 text-dark" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">اكاديمية رياديات</button>
                    </a>
                    <a class="nav-item" role="presentation">
                      <button class="nav-link p-2 text-dark" id="pills-souq-tab" data-bs-toggle="pill" data-bs-target="#pills-souq" type="button" role="tab" aria-controls="pills-souq" aria-selected="false" >سوق رياديات</button>
                    </a>
                  </ul>
            
            </div>
        </div>
        <div class="col-md-6 mt-4">
            <div class="box tow  p-3 row">
                <div class="col-md-6">
                    <img class="w-100" src="/assets/img/bro.png" alt="" height="195">
                </div>
                <div class="col-md-4 text-center m-auto p-0 m-0 ">

                    <p class="">
                            يسعدنا تسجيلك معنا 
                        <span style="color:#F2631C ;" class="fw-bolder fs-4">
                            لـــكـــــــــــــــــن
                        </span>
                        <br>
                        يجيب أستكمال بيانتك حتـى تستطيع البــــــدء بتقديم الخدمـــــــــــات
                    </p>
                    <button class="border px-3 py-2 rounded-2 bg-transparent">
                        أكمل الان بيانتك
                    </button>
                </div>
          
            
            </div>
        </div>
    </div>
   <!--section balance-->
   <SectionBalance/>
   <!--#section balance-->
    <div class="row mt-5">
        <div class="col-md-6 network">
            <div  class="box bg-main p-3 rounded-2">
                <div class="d-flex">
                    <div class="w-75">

                        <h3 class="text-white">
                            تشاركينا ؟
                        </h3>
                        <p  class="text-white">
                            يمكنك ترقية حسابك الان من عضو في الشبكة الى شريك في منصة رياديات والاستفادة بالكثير من المميزات

                        </p>
                        <button  class="border  border-white rounded-2  text-white bg-transparent p-2">
                            اعرف المزيد
                        </button>
                    </div>
                    <div>
                        <img class="img-fluid"  src="/assets/img/ve 1.png" alt="">

                    </div>
                </div>

            </div>
        </div>
        <div class="col-md-6 network">
            <div  class="box border  p-4 rounded-2">
                <div class="d-flex ">
                    <div class="w-75">

                        <h3 class="text-dark">
                            تحتاج الى المساعدة ؟
                        </h3>
                        <p  class="text-dark">
                            لانك عضو في شبكة رياديات يمكنك طلب استشارات  من مستشارينا المميزين في اغلب المجالات بكل سهولة     
                        </p>
                        <button  class="border  border-white rounded-2  text-white bg-main p-2">
                            اعرف المزيد
                        </button>
                    </div>
                    <div>
                        <img class="img-fluid"  src="/assets/img/vuesax/v2.png" alt="">

                    </div>
                </div>

            </div>
        </div>

    </div>
    <div class="row justify-content-between mt-5 ">
        <div class="col-md-5">
            <div class="box  ">
                <div class="row flex-column mt-3 gap-4">
                    <div class="col-md-12 border p-3">
                            
                        <widget-rate-service />
                    </div>
                    <div class="col-md-12 border mt-3 p-3">
                       
                        <widget-investment />
                </div>
                </div>
            </div>
        </div>
        <div class="col-md-5">
            <div class="box  ">
                <div class="row flex-column mt-3 gap-4">
                    <div class="col-md-12 border p-3">
                           
                        <widget-investment-others />
                    </div>
                    <div class="col-md-12 border mt-3 p-3">
                        <widget-blog />
                   </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import SectionBalance from './parts/section-balance/index.vue'
import WidgetBlog from './parts/widget-blog.vue';
import WidgetInvestmentOthers from './parts/widget-investment-others.vue';
import WidgetInvestment from './parts/widget-investment.vue';
import WidgetRateService from './parts/widget-rate-service.vue';
export default {
name:'network-dashboard',
components:{
    SectionBalance,
    WidgetBlog,
    WidgetInvestmentOthers,
    WidgetInvestment,
    WidgetRateService
}
}
</script>

<style>

</style>