<template>
      <div class="row ">
        <div class="col-md-6 mt-4">
            <div class="box one  p-3">
                <h3 class="m-c fw-bolder">
                    تهانينا
                </h3>
                <p>
                    بمجرد أنشائك حساب في مقدمي خدمة رياديات فأنت أصبحت مشترك  في  <a href="" class="m-c fw-bolder">
                        شبكة رياديات 
                    </a> 
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
                    <img class="w-100" :src="`${publicPath}assets/img/bro.png`" alt="" height="195">
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
</template>

<script>
export default {
 name:'section-first-visit'
}
</script>

<style>

</style>