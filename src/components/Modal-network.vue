<template>
  <div style="background-color: white; height: 100%" class="container">
    <div class="text-end px-5">
      <button @click="handleClose" class="btn" style="color: red">X</button>
    </div>
    <div class="row justify-content-center align-items-center">
      <div class="text-center">
        <h3 class="my-4">اختيار طريقة الدفع</h3>
      </div>

      <div
        class="card border-info mx-1 col-md-4 col-12 mb-3"
        style="width: fit-content"
      >
        <div class="card-body">
          <div class="form-check">
            <label class="form-check-label" for="tamara"
              >Tamara
              <input
                type="radio"
                class="form-check-input"
                id="tamara"
                value="tamara"
                v-model="selectedProvider"
              />
            </label>
          </div>
        </div>
      </div>

      <div
        class="card border-info mx-1 col-md-4 col-12 mb-3"
        style="width: fit-content"
      >
        <div class="card-body">
          <div class="form-check">
            <label class="form-check-label" for="hyperbill"
              >HyperBill
              <input
                type="radio"
                class="form-check-input"
                id="hyperbill"
                value="hyperbill"
                v-model="selectedProvider"
              />
            </label>
          </div>
        </div>
      </div>

      <div
        class="card border-info mx-1 col-md-4 col-12 mb-3"
        style="width: fit-content"
      >
        <div class="card-body">
          <div class="form-check">
            <label class="form-check-label" for="myfatoorah"
              >MyFatoorah
              <input
                type="radio"
                class="form-check-input"
                id="myfatoorah"
                value="myfatoorah"
                v-model="selectedProvider"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 text-center">
      <button
        @click="handlePayment"
        style="background-color: #1fb9b3; color: white"
        class="btn px-5 py-2"
      >
        استكمال
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-for-network",
  data() {
    return {
      selectedProvider: null,
    };
  },
  methods: {
    handleClose() {
      this.$emit("closeModal");
    },
    handlePayment() {
      this.$emit("payNow");
    },
  },
};
</script>

<style></style>
