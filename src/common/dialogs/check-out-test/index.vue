<template>
  <d-dialog-large fullscreen :group="group" :closeDialog="closeDialog" :openDialog="openDialog">
    <template v-slot:default>
      <BodyForm
        v-if="showDialog"
        @payment="payment"
        :defaultForm="itemForm"
        :otherData="otherData"
        :hideAmount="hideAmount"
        :title="title"
        :changeable="changeable"
        v-bind="$attrs"
        :doPayment="doPayment"
      >
        <template v-slot:default="slotData">
          <slot v-bind="{...slotData,dialog:showDialog}" name="default"></slot>
        </template>
      </BodyForm>
    </template>
  </d-dialog-large>
</template>
<script>
import BodyForm from "./body-check-out.vue";
export default {
  name: "check-out-dialog",
  props: {
    group: {
      type: String,
      default: "check-out-dialog"
    },
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
    doPayment: {}
  },
  components: {
    BodyForm
  },
  data: vm => {
    return {
      changeable_: vm.changeable,
      title_: vm.title,
      showDialog: false,

      otherData: {},
      itemForm: {
        payment_type: 1,
        amount: null
      }
    };
  },

  methods: {
    payment(data) {
      this.$emit("payment", data);
    },
    closeMe() {
      this.fireCloseDialog(this.group);
    },

    openDialog(data) {
      this.otherData = data.data;
      this.itemForm = Object.assign(
        { payment_type: null, amount: null },
        data.item
      );
      this.showDialog = true;
      this.$emit("show");
      return true;
    },
    closeDialog() {
      this.showDialog = false;
      this.$emit("hide");
      return true;
    }
  }
};
</script>

