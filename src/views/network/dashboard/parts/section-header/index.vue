<template>
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
            <!-- first time logined-->
            <firstTimeView v-if="isFirst" />
            <!-- card info -->
            <cardInfo v-else />
        </div>
    </div>
</template>

<script>
import firstTimeView from './first-time.vue';
import cardInfo from './card-info.vue';
export default {
    name:'section-header',
components:{
    firstTimeView,
    cardInfo
},
data:()=>({
    isFirst:true,// will related to backend value
})
}
</script>

<style>

</style>