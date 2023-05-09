<template>
  <div class="h-100 d-flex flex-column align-items-center justify-content-center">
    
    <div class="text-center mt-5" style="max-width:470px">
            <div>
                <h4 class="confirm-card-title">
                    تجهيز مشروعك لعرضه للاستثمار
                </h4>
              </div>
          <p class="confirm-card-text">
            مع خدمة تجهيز مشروعك للأستثمار سنساعدك على كذا و كذا وكذا وكذا
 و سنرسل اليك ملفات كذا و كذا عبر رسائلك في رياديات
 سناعددك بشكل كبير في خطوتك الاولى 
          </p>
    <p class="confirm-card-text">
        مع خدمة تجهيز مشروعك للأستثمار سنساعدك على كذا و كذا وكذا وكذا
 و سنرسل اليك ملفات كذا و كذا عبر رسائلك في رياديات
 سناعددك بشكل كبير في خطوتك الاولى 
    </p>
    <div class="d-flex">
        <d-empty-wallet-icon /> <div class="confirm-card-price">
            <span >سعر الخدمة : </span><span style="color:red">250 ريال </span>
        </div>
    </div>
    <div>
    <button @click="openCheckOutPage" type="button" class="btn btn-main">
              {{ $t('subscribe-now') }}
            </button>
          </div>
          </div>
        <checkoutProjectDiag />
  </div>
</template>

<script>
import checkoutProjectDiag from '../../add-project/dialogs/check-out/index.vue'
export default {
components:{
  checkoutProjectDiag
},
methods:{
  openCheckOutPage(){
            this.fireOpenDialog('checkout-project-physical',{item:{amount:2500}})
        },
}
}
</script>

<style>

</style>