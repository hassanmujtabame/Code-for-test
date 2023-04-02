<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >
      <template v-slot>
          <div class="text-center" v-if="showDialog">
            <div >
            <img src="/assets/img/Group 39921.png" width="300" height="220" alt="">
          </div>
            <div>
                <h4  >
                  من فضلك قم بإدخال رابط الجلسة
                </h4>
                <p class="t-c fs-r-16-24" >
                  من فضلك قم بإدخال رابط الجلسة وقم بالاحتفاظ به حتى تتمكن من عقد الجلسة في الموعد المحدد لها.
                </p>
              </div>
            <ValidationObserver ref="form">
              <ValidationProvider 
                vid="url" 
                :name="$t('session-link')"
                rules="required"
                v-slot="{errors}"
              >
              <d-text-input :errors="errors" v-model="itemForm.url" :label="$t('session-link')" />
              </ValidationProvider>
            </ValidationObserver>
             
              <div  class="mt-3">
            <button :disabled="loading" @click="confirmAccept"  style="height: 40px;" class="btn btn-custmer"> 
              {{$t('session-confirmation')}}</button>
          </div>
          
  </div>
      </template>
     
    </d-dialog-large>
  </template>

  <script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

 export default {
    name: "show-session-confirmation",
    props: {
        group: {
            type: String,
            default: "show-session-confirmation"
        }
    },
    data: () => ({
        itemDialog: { title: null, description: null, btns: null, image: "/assets/img/cuate-2.png" },
        itemForm:{url:null},
        loading: false,
        showDialog: false,
    }),
    methods: {
        async confirmAccept() {
          this.loading = true;
          let valid = await this.$refs.form.validate();
          if(!valid){
            this.loading = false;
            return;
          }
            this.closeEvent();
            this.loading = false;
        },
        openDialog(data) {
            this.itemDialog = Object.assign({}, data);
            this.showDialog = true;
            return true;
        },
        closeDialog() {
            this.showDialog = false;
            return true;
        },
        closeEvent() {
            this.fireEvent(this.group + "-close-dialog");
        }
    },
    components: { ValidationObserver, ValidationProvider }
}
  </script>
  
  <style>
  
  </style>