<template>
  <div style="margin-top: 96px;">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      {{ hasError }}
    </div>
    <div v-else class="container">

      <div class="row  profile-services ">
        <div class="col-12 mt-3 p-4 rounded-2" style="box-shadow: 2px 2px 15px 2px #00000024;">

          <!-- معومات العرض-->
          <SectionDisplay :currentUser="currentUser" />

          <!-- المدخلات -->
          <div class="d-flex flex-wrap column-gap-5 justify-content-center">


            <div class="col-md-4 col-sm-12 mb-3">
              <label class=" fs-5 mb-1">
                {{ $t('Full-name') }}
              </label>
              <ValidationProvider :name="$t('Full-name')" vid="Full-name" rules="required" v-slot="{ errors }">
                <input type="text" v-model="itemForm.fullName" class="form-control">
                <d-error-input :errors="errors" v-if="errors.length" />
              </ValidationProvider>
            </div>

  
            <div class="col-md-4 col-sm-12 mb-3">
              <label class="fs-5 mb-1">
                {{ $t('select-your-gender') }}

              </label>
              <ValidationProvider tag="div" :name="$t('gender')" vid="gender" rules="required" v-slot="{ errors }">
                <div class="">
                  <d-select-input :errors="errors" v-model="itemForm.gender" :placeholder="$t('select-your-gender')"
                    class="form-select">
                    <option value="" class="t-c " disabled selected>{{ $t('select-your-gender') }}
                    </option>
                    <option value="male">{{ $t('male') }} </option>
                    <option value="female">{{ $t('female') }}</option>
                  </d-select-input>
                </div>
              </ValidationProvider>
            </div>

            <div class="col-md-4 col-sm-12 mb-3">
              <label class=" fs-5 mb-1">
                {{ $t('Email') }}
              </label>
              <ValidationProvider :name="$t('Email')" vid="Email" rules="required" v-slot="{ errors }">
                <input type="text" v-model="itemForm.email" class="form-control">
                <d-error-input :errors="errors" v-if="errors.length" />
              </ValidationProvider>
            </div>

            <div class="col-md-4 col-sm-12 mb-3">
              <label class=" fs-5 mb-1">
                {{ $t('Phone') }}
              </label>
              <ValidationProvider :name="$t('Phone')" vid="phone" rules="required" v-slot="{ errors }">
                <input type="text" v-model="itemForm.phone" class="form-control">
                <d-error-input :errors="errors" v-if="errors.length" />
              </ValidationProvider>
            </div>

            <div class="col-md-4 col-sm-12 mb-3">
              <label class=" fs-5 mb-1">
                {{ $t('number_residence_id') }}
              </label>
              <ValidationProvider tag="div" class="mb-3" :name="$t('number_residence_id')" vid="identification_number"
                rules="required" v-slot="{ errors }">
                <d-text-input :errors="errors" type="text" v-model="itemForm.identification_number" class="form-control"
                 >
                </d-text-input>
              </ValidationProvider>
            </div>

            <div class="col-md-4 col-sm-12 mb-3">
              <ValidationProvider tag="div" :name="$t('birthday')" vid="birth_date" rules="required" v-slot="{ errors }">

                <date-picker-input mode="date" class="form-control" v-model="itemForm.birth_date" />
                <d-error-input :errors="errors" v-if="errors.length" />
              </ValidationProvider>
            </div>

            <div class="col-md-4 col-sm-12 mb-3">
              <ValidationProvider tag="div" :name="$t('birthday')" vid="birth_date" rules="required" v-slot="{ errors }">

                <date-picker-input mode="date" class="form-control" v-model="itemForm.birth_date" />
                <d-error-input :errors="errors" v-if="errors.length" />
              </ValidationProvider>
            </div>

            <div class="col-md-4 col-sm-12 mb-3">
              <ValidationProvider tag="div" :name="$t('birthday')" vid="birth_date" rules="required" v-slot="{ errors }">
                <date-picker-input mode="date" class="form-control" v-model="itemForm.birth_date" />
                <d-error-input :errors="errors" v-if="errors.length" />
              </ValidationProvider>
            </div>

            <div class="col-md-4 col-sm-12 mb-3">
              <ValidationProvider tag="div" :name="$t('birthday')" vid="birth_date" rules="required" v-slot="{ errors }">

                <date-picker-input mode="date" class="form-control" v-model="itemForm.birth_date" />
                <d-error-input :errors="errors" v-if="errors.length" />
              </ValidationProvider>
            </div>

            <div class="col-md-4 col-sm-12 mb-3">
              <ValidationProvider tag="div" :name="$t('birthday')" vid="birth_date" rules="required" v-slot="{ errors }">

                <date-picker-input mode="date" class="form-control" v-model="itemForm.birth_date" />
                <d-error-input :errors="errors" v-if="errors.length" />
              </ValidationProvider>
            </div>

            <div class="col-md-4 col-sm-12 mb-3">
              <ValidationProvider tag="div" :name="$t('birthday')" vid="birth_date" rules="required" v-slot="{ errors }">

                <date-picker-input mode="date" class="form-control" v-model="itemForm.birth_date" />
                <d-error-input :errors="errors" v-if="errors.length" />
              </ValidationProvider>
            </div>
          </div>


          <!--معومات شخصية  -->
          <!-- <SectionPersonal :currentUser="currentUser" /> -->
          <!-- بطاقات الدفع -->
          <!-- <SectionPaymentCards /> -->
          <!--معلومات الدراسة -->
          <!-- <SectionEducation :currentUser="currentUser" /> -->
          <!--معلومات مهنية -->
          <!-- <SectionProfessional :currentUser="currentUser" /> -->
          <!--معلومات الاقامة -->
          <!-- <SectionResidence :currentUser="currentUser" /> -->
          <!-- معلومات التواصل -->
          <!-- <SectionCommunication :currentUser="currentUser" /> -->
          <!-- اعدادات الاشعارات -->
          <!-- <SectionSettingsNotif :currentUser="currentUser" /> -->
          <!--قائمة الحظر -->
          <!-- <SectionListBlocks :currentUser="currentUser" /> -->
          <!--معرض الاعمال -->
          <!-- <SectionShowerProject :currentUser="currentUser" /> -->

        </div>
      </div>

    </div>

  </div>
</template>

<script>
import userAPI from '@/services/api/user.js'
import Sidebar from './parts/sidebar/index.vue'
import SectionPaymentCards from './parts/sections/payment-cards/index.vue'
import SectionDisplay from './parts/sections/information-display/index.vue'
import SectionPersonal from './parts/sections/information-personal/index.vue'
import SectionEducation from './parts/sections/information-education/index.vue'
import SectionProfessional from './parts/sections/information-professional/index.vue'
import SectionCommunication from './parts/sections/information-communication/index.vue'
import SectionResidence from './parts/sections/information-residence/index.vue'
import SectionSettingsNotif from './parts/sections/settings-notif/index.vue'
import SectionListBlocks from './parts/sections/list-blocks/index.vue'
import SectionShowerProject from './parts/sections/shower-project/index.vue'
export default {
  name: 'show-profile',
  components: {
    Sidebar,
    SectionDisplay,
    SectionPersonal,
    SectionEducation,
    SectionCommunication,
    SectionProfessional,
    SectionResidence,
    SectionSettingsNotif,
    SectionListBlocks,
    SectionShowerProject,
    SectionPaymentCards,

  },
  data: () => {
    return {
      currentUser: {},
      loading: true,
      hasError: false,
      // form
      itemForm: {
        image: null,
      }
    }
  },

  methods: {

    async loadCurrentUser() {
      this.loading = true;
      this.hasError = false;
      try {
        let { data } = await userAPI.me()
        if (data.success) {
          this.currentUser = data.data
        } else {
          this.hasError = data.message
        }
      } catch (error) {
        if (error.response) {
          let response = error.response
          if (response.status == 401) {
            this.logout()
          } else {
            this.hasError = ' هناك خطأ غير معروف يرجي تحديث الصفحة'
          }
        }

      }
      this.loading = false;
    }
  },
  mounted() {
    this.loadCurrentUser()
  }
}
</script>

<style></style>