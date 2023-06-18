<template>
  <div class="container">
    <div class="chekout p-4 shadow my-4">
      <h5 class="mb-3">أستكملي عملية الدفع</h5>
      <div class="row justify-content-between">
        <div class="col-md-5 justify-content-end tex-end">
          <PaymentCardDetail
            :title="title"
            :changeable="changeable"
            :hideAmount="hideAmount"
            :defaultForm="defaultForm"
            @payment="handlePayment"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentCardDetail from "./PaymentCardDetail.vue";

export default {
  components: {
    PaymentCardDetail
  },
  props: {
    title: {
      type: String,
      default: "تفاصيل الدفع"
    },
    changeable: {
      type: Boolean,
      default: false
    },
    hideAmount: {
      type: Boolean,
      default: false
    },
    otherData: {
      type: [Array, Object],
      default: () => ({})
    },
    defaultForm: {
      type: [Array, Object],
      default: () => ({
        payment_type: "new",
        amount: null
      })
    }
  },
  methods: {
    handlePayment(data) {
      // handle payment data
    }
  }
};
</script>

<style scoped>
.chekout {
  margin: 0;
}
</style>
