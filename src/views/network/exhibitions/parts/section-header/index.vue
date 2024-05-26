<template>
  <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="netwok-home-header container mx-auto">
      <div class="row">
        <div class="col-12 col-md-6">
          <h1 class="header-title-page text-black" style="display: inline">
            فعاليات
          </h1>
          <p class="header-desc-page text-black mt-3">
            ستجد في هذا القسم كل المعارض التي نشرها الاعضاء يمكنك المشاركة بها
            او زيارتها كما يمكنك اضافة معرضك
          </p>
          <div class="mt-4">
            <button
              @click="openAddDialog"
              class="px-3 btn-custmer shadow"
              style="
                background-color: #ff5722 !important;
                border: none !important;
              "
            >
              <!-- icon-->
              <plus-rect-round-icon />
              {{ $t("add_exhibition") }}
            </button>
          </div>
        </div>
        <div class="col-12 col-md-6" style="min-height: 414px" v-if="!isMobile">
          <div style="height: 100%">
            <!-- <iframe class="rounded" style="width: 100%; height: 100%" src="https://www.youtube.com/embed/mKfqJ_3-jWQ"
                            title="جلسة حوارية عربيات" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe> -->
            <img
              class="img-fluid rounded-3 shadow"
              src="../../../../../../public/assets/img/Desktop.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plusRectRoundIcon from "@/components/icon-svg/plus-rect-round.vue";
export default {
  name: "section-header",
  components: {
    plusRectRoundIcon,
  },
  data: () => {
    return {
      addExhibition: false,
    };
  },

  methods: {
    openAddDialog() {
      if (this.addExhibition) {
        this.fireOpenDialog("add-dialog");
      } else {
        let dataEvt = {
          title: "للأسف لايمكنك  اضافة معرضك",
          description: `انت غير مشترك في الباقة السنوية وهذه الباقة لا تمنحك  إضافة معرض  - يجب تسجيل حسابك  كشركه و استفيد من إضافة معرضك و مكان عملك و المزيد من المميزات في الشبكة`,
          image: `${this.publicPath}assets/img/Group 1171275670.png`,
          btns: [
            {
              title: "سجل كشركه",
              action: () => this.router_push("network-subscribe"),
            },
          ],
        };
        this.showConfirmMsg(dataEvt);
        return;
      }
      //     else if(this.userSubNetwork.type!='year' && this.userSubIncubators.length==0){
      //         let dataEvt ={
      //                     title:'للأسف لايمكنك  اضافة معرض',
      //                     description:'يجب عليك الاشتراك في الحاضنه والاشتراك في الباقة السنوية كي تتمكن من إضافة معرض',
      //                     image:`${this.publicPath}assets/img/Group 1171275670.png`,
      //                     btns:[
      //                         {title:'رقي حسابك',action:()=>this.$router.push({name: 'network-subscribe'})},
      //                         {title:'اشترك الان',action:()=>this.$router.push({name: 'incubator-subscribe'})}
      //                     ]
      //                 }
      //                 this.showConfirmMsg(dataEvt);
      //                 return;

      //     }
      //     else if (this.userSubNetwork.type=='year' && this.userSubIncubators.length==0) {
      //  let dataEvt ={
      //             title:'غير مشترك في الحاضنة',
      //             description:'انت غير مشترك في الحاضنة ٫ لذا عليك الاشتراك لتتمكن من اضافة معرض',
      //             type:'warning',
      //             btns:[
      //                 {title:'اشترك الان',action:()=>this.$router.push({name: 'incubator-subscribe'})}
      //             ]
      //         }
      //         this.showConfirmMsg(dataEvt)
      //     }
    },

    checkSubscriptionOptions() {
      for (
        let index = 0;
        index < this.user.subscription_options.length;
        index++
      ) {
        const element = this.user.subscription_options[index];
        if (element.key == "add_exhibitions") {
          this.addExhibition = true;
        }
      }
    },
  },
  mounted() {
    this.checkSubscriptionOptions();
  },
};
</script>

<style scoped>
.cloud-bg {
  position: absolute;
  width: 635.34px;
  height: 370.04px;
  left: -37.3px;
  top: 27px;
  transform: rotate(13.26deg);
  z-index: -1;
}

.img-header {
  width: 488.29px;
  height: 355.51px;
}
</style>
