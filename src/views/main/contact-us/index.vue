<template>
  <div class="contact-page mobile-center">
    <div class="container">
      <b-card class="bg-white contact-us p-3 rounded-3">
        <div class="row align-items-center">
          <div class="col-xl-6">
            <h2>اطلبي مكالمة أو اجتماع قهوة مع فريقنا</h2>
            <p>فلنناقش سوياً كيف يمكننا مساعدة شركة أعمالك</p>
            <ValidationObserver ref="form" tag="form" @submit="sendMessage">
              <!-- full name -->
              <ValidationProvider v-slot="{ errors }" :name="$t('full-name')" rules="required" vid="name" tag="div"
                class="my-2">
                <b-form-input v-model="itemForm.name" type="text" :placeholder="$t('full-name')"></b-form-input>
                <d-error-input :errors="errors" v-if="errors.length > 0" />
              </ValidationProvider>
              <!--email -->
              <ValidationProvider v-slot="{ errors }" :name="$t('Email')" rules="required|email" vid="email" tag="div"
                class="my-2">
                <b-form-input v-model="itemForm.email" type="text" :placeholder="$t('Email')"></b-form-input>
                <d-error-input :errors="errors" v-if="errors.length > 0" />
              </ValidationProvider>
              <!-- title_message -->
              <!-- <ValidationProvider v-slot="{ errors }" :name="$t('title_message')" rules="required" vid="title_message"
                tag="div" class="my-2">
                <b-form-input v-model="itemForm.title_message" type="text"
                  :placeholder="$t('title_message')"></b-form-input>
                <d-error-input :errors="errors" v-if="errors.length > 0" />
              </ValidationProvider> -->
              <!-- phone -->
              <ValidationProvider v-slot="{ errors }" :name="$t('Phone')" rules="required|numeric" vid="Phone"
                tag="div" class="my-2">
                <b-form-input v-model="itemForm.phone" type="text"
                  :placeholder="$t('Phone')"></b-form-input>
                <d-error-input :errors="errors" v-if="errors.length > 0" />
              </ValidationProvider>
              <!--message-->
              <ValidationProvider v-slot="{ errors }" :name="$t('message')" rules="required" vid="message" tag="div"
                class="my-2">
                <b-form-textarea v-model="itemForm.message" :placeholder="$t('message')" rows="5"></b-form-textarea>
                <d-error-input :errors="errors" v-if="errors.length > 0" />
              </ValidationProvider>
            </ValidationObserver>
            <div class="text-start mt-2">
              <button @click="sendMessage" class="btn-main-v p-3">{{ $t('send_request') }}</button>
            </div>
          </div>
          <div class="col-xl-6 tablet-hide">
            <!-- image-->
            <ImageBox />
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>
  
<script>

import commonAPI from "@/services/api/common.js";
import ImageBox from "./image-box.vue";

export default {
  name: "contact-us",
  components: {
    ImageBox
  },
  data() {
    return {
      itemForm: {
        name: "",
        email: "",
        message: "",
        // title_message: "",
        phone: ""
      }
    };
  },
  methods: {
    clearContent() {
      Object.keys(this.itemForm).forEach(key => {
        this.itemForm[key] = "";
      });

      this.$nextTick(() => {
        if (this.$refs.form) {
          this.$refs.form.reset();
        }
      });
    },
    async sendMessage(evt) {
      if (evt) evt.preventDefault();

      let valid = await this.$refs.form.validate();
      if (!valid) {
        console.log("form invalid");
        return;
      }
      // let formData = new FormData();
      //Object.keys(this.itemForm).forEach(key => {
      // formData.append(key, this.itemForm[key]);
      // console.log('form-data::' , formData)
      //});
      try {
        let { data } = await commonAPI.ContactUsSend({
          name: this.itemForm.name,
          email: this.itemForm.email,
          phone: this.itemForm.phone,
          message: this.itemForm.message,
          status: this.itemForm.status,
          phone: this.itemForm.phone
        });
        console.log('data-response', data)
        if (data.success) {
          //this.clearContent();

          window.successMsg(data.message)
        }
      } catch (error) {
        if (error.response) {
          let response = error.response;
          console.log("error", response);
          if (response.status == 422) {
            this.setErrorsForm(this.$refs.form, response);
          }
        }
      }
    }
  }
};
</script>
<style>
.contact-page {
  background-color: #f6f8f9;
  padding: 5em 0 6em;
}
</style>