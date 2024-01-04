<template>
  <div style="margin-top: 120px" class="container">
    <div class="row gap-2">

      <div style="height:fit-content" class="col-3 p-3 flex-column align-items-center d-flex right-info box-main">
        <div class="mb-2 shadow-main d-flex justify-content-center align-items-center"
          style="width: 100px; height: 100px;">
          <img width="100" class="partner-img" :src="user.image" alt="...">
        </div>
        <p class="mb-1">
          {{ userPartner.company_name }}
        </p>
        <span>
          {{ userPartner.categoryName }}
        </span>
        <button @click="updatePartner" class="btn border m-c mt-3"
          style="width: 200px; border-color: var(--m-color) !important">
          تعديل
        </button>

        <div class="contact-info mt-4 me-3" style="align-self: start;">
          <h4 class="m-c mb-2">
            معلومات التواصل
          </h4>
          <p class="mb-2">
            <Phone />
            <span>
              0235523543
            </span>
          </p>
          <p class="mb-2">
            <Phone />
            <span>
              {{ userPartner.website }}
            </span>
          </p>
          <p class="mb-2">
            <Phone />
            <span>
              الرياض
            </span>
          </p>
          <p class="mb-2">
            <Phone />
            <span>
              +92395092340
            </span>
          </p>
        </div>

      </div>

      <div class="col-6 box-main p-3">
        <div class="row">
          <h4 class="m-c mb-3">
            عن 
            
            {{ userPartner.company_name }}
          </h4>
          <span>
            <div v-html="getPartnerDesc">
            </div>
          
          </span>
        </div>
        <div class="row mt-3">
          <h4 class="m-c mb-3">
            خدماتنا
          </h4>
          <span>
            {{ userPartner.services }}
          </span>
        </div>
        <!-- <div class="row mt-3">
          <h4 class="m-c mb-3">
            الشروط والاحكام
          </h4>
          <ul class="t-c me-3">
            <li>منسشيبم شسميبن تشسيب نمسشيت بسيب</li>
            <li>منسشيبم شسميبن تشسيب نمسشيت بسيب</li>
            <li>منسشيبم شسميبن تشسيب نمسشيت بسيب</li>
            <li>منسشيبم شسميبن تشسيب نمسشيت بسيب</li>
          </ul>
        </div> -->
      </div>

      <!-- <div class="box-main"> -->
      <Coupon class="col-2 " style="height: fit-content; padding-bottom: 20px !important;padding-top: 20px !important"
        title="عنوان" discount="10" date="1-1-2024" during="10" />
      <!-- </div> -->

    </div>
    <div class="row">
      <SectionOperations />
    </div>
    <UpdatePartner />
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import SectionOperations from './parts/section-operations/index.vue'
import Phone from '@/components/icon-svg/go-to-icon.vue'
import Coupon from './parts/coupon.vue'
import UpdatePartner from './parts/dialogs/update-partner/index.vue'
export default {
  name: 'control-member-partner',
  components: {
    Phone,
    Coupon,
    SectionOperations,
    UpdatePartner
  },
  data: () => ({
    itemPage: { filePath: null }
  }),
  computed: {
    getPartnerDesc(){
      return this.userPartner.description
    },
    ...mapGetters({
      companyInfo: 'auth/partner'
    })
  },
  watch: {
    companyInfo: {
      deep: true,
      immediate: true,
      handler() {
        if (!this.userPartner) {
          //  this.router_push('network-offers');
          //   this.fireOpenDialog('join-as-partner',this.getRouteLocale('register-networking'))

        }
        this.itemPage = Object.assign(this.itemPage, this.companyInfo)
        this.loading = false;
      }
    }
  },
  methods: {
    updatePartner() {

      this.fireOpenDialog('update-partner-dialog', this.itemPage)
    }
  }
}
</script>

<style scoped>
.box-main {
  border: 1px solid #0000000f;
  border-radius: 10px;
}

.shadow-main {
  box-shadow: 0 0 5px 1px #44444430;
}

.partner-img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.logo {
  box-shadow: 0px 0px 5px 3px #d1d1d1;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 150px;
  margin-bottom: 40px;
}

.logo img {
  border-radius: 15px;
}

.logo p {
  margin: 0 !important;
}

.btn:hover {
  background-color: var(--m-color) !important;
  color: white !important;
}
</style>