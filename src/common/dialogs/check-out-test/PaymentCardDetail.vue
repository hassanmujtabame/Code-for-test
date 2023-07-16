<!-- PaymentCardDetail.vue -->
<template>
  <b-card class="mt-2 payment-card-detail" no-body>
    <b-card-title class="checkout-title">{{ title }}</b-card-title>
    <b-form @submit.prevent="payment">
      <b-form-group class="mt-2"> 
        <ValidationProvider>
          <b-form-input v-model="itemForm.coupon" class="form-control" placeholder="ادخل الكود"></b-form-input>
          <!-- <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span> -->
        </ValidationProvider>
      </b-form-group>
      <p class="text-center small">
        بإتمامك لعملية الشراء أنت توافق على
        <b-link href="#" class="m-c">شروط الاستخدام</b-link>
      </p>
      <div class="text-center">
        <button class="p-2 text-white btn-main-v" type="submit">
          <b-spinner small v-if="loading"></b-spinner>تاكيد الدفع
        </button>
      </div>
    </b-form>
  </b-card>
</template>
  
  <script>
export default {
  props: {
    title: {
      type: String,
      default: "تفاصيل الدفع"
    },
    changeable: {
      type: Boolean,
      default: false
    },
    itemForm: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async payment() { 
      console.log('this.itemForm', this.itemForm);
      this.loading = true;
      try {
        this.$emit("payment", this.itemForm);
      } catch (error) {
        console.error(error);
        // Handle the error based on your application logic.
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
  
  <style scoped>
.checkout-title {
  word-break: break-all;
}
.payment-card-detail {
  padding: 55px 12px;
}
</style>
  