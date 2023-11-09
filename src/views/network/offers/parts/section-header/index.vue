<template>
   <div class="consulting">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white">  العروض </h1>
                        <p class="text-white">
                            احصلي على عروض و خصومات هائة ومذهلة سواء من اكواد الخصم للمواقع الالكترونية او من خلال بطاقة عضوية رياديات 
                        </p>
                        <button @click="addOffer" class="btn  bg border text-white px-4 py-2">
                        <plusRectRoundIcon class="mx-1" />

                            أضف عرض او خصم
                          </button>
                    </div>
                    <div class="col-md-6">
                        <div style="overflow: inherit" class="m-auto text-start ">
                            <img class="img-fluid" :src="`${publicPath}assets/img/Component 47.png`" alt="" />
                        </div>
                    </div>
                </div>
                <div class="star-cons">
                    <img :src="`${publicPath}assets/img/starrrr.png`" alt="" />
                </div>
                <div class="star-cons stars">
                    <img :src="`${publicPath}assets/img/starsss.png`" alt="" />
                </div>
            </div>
        </div>
</template>

<script>
import plusRectRoundIcon from "@/components/icon-svg/plus-rect-round.vue";

export default {
 name:'section-header',
 components: {
    plusRectRoundIcon
 },
 methods: {
    addOffer() {
      if (this.userPartner) {
        this.router_push('network-offers-dashboard')
      } else {
        let dataEvt = {
        title: 'للأسف لايمكنك  اضافة عروض او خصومات',
        description: `انت غير مشترك في الباقة السنوية وهذه الباقة لا تمنحك  إضافة معرض  - يجب تسجيل حسابك  كشركه و استفيد من إضافة معرضك و  عروضك و خصوماتك و المزيد من المميزات في الشبكة`,
        image: `${this.publicPath}assets/img/Group 1171275670.png`,
        btns: [
          { title: 'سجل كشركه', action: () => this.router_push('register-networking') }
        ]
      }
      this.showConfirmMsg(dataEvt);
      return;

      }
    },
 }
}
</script>

<style>

</style>