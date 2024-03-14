<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    :aria-hidden="!dialog ? 'true' : 'false'"
  >
    <div class="modal-dialog modal-dialog-centered justify-content-center">
      <div class="modal-content text-center">
        <div class="modal-header border-0">
          <button @click="close()" type="button" class="btn-close"></button>
        </div>
        <div class="modal-body">
          <div>
            <img
              class="img-fluid"
              src="../../../assets/img/handlePayment/Done.png"
              alt="done message"
            />
          </div>
          <h6>لقد تم إرسال طلب بحجز الموعد بنجاح</h6>
          <p>سيتم التواصل معك عند اقتراب موعد الاستشارة</p>
          <router-link :to="getRouteLocale('/')" class="fs-3">
            الرجوع
          </router-link>
        </div>
        <div class="modal-footer border-0 d-flex flex-column"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-simple",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    dialog: false,
  }),
  computed: {
    styleObj() {
      return {
        "z-index": 99999999,
        background: "#000000a3",
        display: this.dialog ? "block" : "none",
      };
    },
  },
  watch: {
    show: {
      immediate: true,
      handler() {
        this.dialog = this.show;
      },
    },
    dialog: {
      immediate: true,
      handler() {
        if (!this.dialog) this.$emit("update:show", false);
      },
    },
  },
  methods: {
    close() {
      this.dialog = false;
    },
  },
};
</script>

<style></style>
