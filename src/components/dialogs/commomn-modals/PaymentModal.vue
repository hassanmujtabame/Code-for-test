<template>
  <d-dialog-large
    :group="group"
    :xl="true"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
  >
    <div style="background-color: white; height: auto" class="container">
      <div class="row justify-content-center align-items-center">
        <div class="row">
          <div class="col-xl-8 col-md-6 col-12">
            <div class="text-end">
              <h3 class="my-4">تفاصيل الدفع</h3>
            </div>
            <div class="card border-info col-12 mb-3">
              <div class="card-body">
                <div class="form-check">
                  <label
                    class="form-check-label d-flex align-items-center justify-content-between px-2"
                    for="card"
                  >
                    <div>
                      الدفع بواسطة بطاقة الائتمان
                      <input
                        type="radio"
                        class="form-check-input"
                        id="card"
                        value="card"
                        v-model="selectedProvider"
                      />
                    </div>
                    <img
                      src="@/assets/img/payment/Group 1171276314.png"
                      alt="payment method"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div
              style="
                padding-right: 0.55rem !important;
                padding-left: 0.55rem !important;
              "
              class="row"
            >
              <div class="card-container col-12 px-1">
                <div style="padding-top: 4px" class="card border-info mb-3">
                  <div class="card-body">
                    <div class="form-check">
                      <label
                        class="form-check-label d-flex align-items-center justify-content-between px-2"
                        for="tamara"
                      >
                        <div>
                          الدفع بواسطة تمارا
                          <input
                            type="radio"
                            class="form-check-input"
                            id="tamara"
                            value="tamara"
                            v-model="selectedProvider"
                          />
                        </div>
                        <img
                          src="@/assets/img/payment/Group 1171276324.png"
                          alt="payment method"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-container col-12 px-1">
                <div class="card border-info mb-3">
                  <div class="card-body">
                    <div class="form-check">
                      <label
                        class="form-check-label d-flex align-items-center justify-content-between px-2"
                        for="tabby"
                      >
                        <div class="">
                          الدفع بواسطة تابى
                          <input
                            type="radio"
                            class="form-check-input"
                            id="tabby"
                            value="tabby"
                            v-model="selectedProvider"
                          />
                        </div>
                        <img
                          src="@/assets/img/payment/Group 1171276318.png"
                          alt="img"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-12">
            <div class="d-flex my-4 flex-column gap-2">
              <div
                class="justify-content-between mx-2 align-items-center d-flex"
              >
                <h4 style="font-size: 18px; color: #475569">السعر</h4>
                <h4 style="font-size: 18px; color: #475569">
                  {{ oldPrice }} ر.س
                </h4>
              </div>
              <div
                style="border-bottom: 1px dashed #979599"
                class="justify-content-between mx-2 align-items-center d-flex"
              >
                <h4 style="font-size: 18px; color: #ea580c">الخصم</h4>
                <h4 style="font-size: 18px; color: #ea580c">
                  {{ discount }} ر.س
                </h4>
              </div>
              <div
                style="border-bottom: 1px solid #888"
                class="justify-content-between mx-2 align-items-center d-flex"
              >
                <h4 style="font-size: 18px">المجموع</h4>
                <h4 style="font-size: 18px">{{ newPrice }} ر.س</h4>
              </div>
              <div class="text-center my-2">
                <label style="font-weight: bold; font-size: 20px" for="discount"
                  >كود الخصم</label
                >
                <div class="row justify-content-center">
                  <div
                    class="d-flex flex-column my-3 w-75 position-relative align-items-center"
                  >
                    <input
                      class="px-4 rounded-3 py-2 form-control sale-code-input"
                      id="discount"
                      type="text"
                      style="border: 1px dashed gray; border-left: none"
                      :style="{
                        border: isWrongCode
                          ? '1px dashed #ff1616'
                          : isValidCode
                          ? '1px dashed green'
                          : '',
                      }"
                      placeholder="ادخل كود الخصم"
                    />
                    <button
                      @click="CheckforCode"
                      style="
                        background-color: rgb(31, 185, 179);
                        color: white;
                        font-size: 18px;
                        top: -1px;
                        left: 10px;
                      "
                      class="btn px-4 sale-code-button position-absolute rounded-2"
                    >
                      تطبيق
                    </button>
                    <label v-if="isWrongCode">
                      <small style="color: #ff1616; font-size: 12px"
                        >هذا الكود غير فعال أو خاطئ</small
                      >
                    </label>
                    <label v-if="isValidCode">
                      <small style="color: green; font-size: 12px">
                        خصم 10%</small
                      >
                    </label>
                    <button
                      @click="proceedToPayment"
                      style="background-color: #1fb9b3; color: white"
                      class="btn my-4 w-100 px-5 py-2"
                    >
                      التاكيد و الدفع
                    </button>
                  </div>
                  <p style="font-size: 14px">
                    بالنقر على التاكيد و الدفع فانت توافق على
                    <router-link
                      :to="getRouteLocale('conditions')"
                      class=""
                      style="
                        color: rgb(31, 185, 179);
                        font-weight: 500;
                        text-decoration: underline;
                      "
                    >
                      الشروط و الاحكام
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </d-dialog-large>
</template>

<script>
export default {
  name: "payment-modal",
  props: {
    group: {
      type: String,
      default: "payment-modal",
    },
    price: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      selectedProvider: "card",
      code: "AAA",
      discount: 0,
      oldPrice: this.price,
      newPrice: this.price,
      isWrongCode: false,
      isValidCode: false,
    };
  },
  methods: {
    handleClose() {
      this.closeDialog();
    },
    proceedToPayment() {
      console.log("proceed to payment");
    },
    openDialog() {
      console.log("open dialog");
      return true;
    },
    closeDialog() {
      console.log("close dialog");
      return true;
    },
    CheckforCode() {
      // TODO : check for code ( after RD-239 )
      console.log("check for code");
      //   this.isWrongCode = true;
      //   this.isValidCode = true;
    },
  },
};
</script>

<style></style>
