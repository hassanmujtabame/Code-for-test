<template>
  <!-- <div
      style="
        top: 0;
        left: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
      "
      v-if="openSecModal"
      class="position-fixed"
    >
    
      <div style="background-color: white; height: 100%" class="container">
        <div class="text-end py-5 px-5">
          <button
            @click="handleCloseSecModal"
            class=""
            style="
              color: red;
              font-size: 20px;
              border: none;
              background-color: transparent;
            "
          >
            X
          </button>
        </div>
        <div class="row justify-content-center align-items-center">
          <div class="row">
            <div class="col-md-8 col-12">
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
                        src="../../assets/img/payment/Group 1171276314.png"
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
                <div class="card-container col-md-6 col-12 px-1">
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
                            src="../../assets/img/payment/Group 1171276324.png"
                            alt="payment method"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-container col-md-6 col-12 px-1">
                  <div class="card border-info mb-3">
                    <div class="card-body">
                      <div class="form-check">
                        <label
                          class="form-check-label d-flex align-items-center justify-content-between px-2"
                          for="hyperbill"
                        >
                          <div class="">
                            الدفع بواسطة تابى
                            <input
                              type="radio"
                              class="form-check-input"
                              id="hyperbill"
                              value="hyperbill"
                              v-model="selectedProvider"
                            />
                          </div>
                          <img
                            src="../../assets/img/payment/Group 1171276318.png"
                            alt="img"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            
            </div>
            <div class="col-md-4 col-12">
              <div class="d-flex my-4 flex-column gap-4">
                <div
                  class="justify-content-between mx-2 align-items-center d-flex"
                >
                  <h4 style="font-size: 18px">خطة {{ title }}</h4>
                  <button
                    @click="changePackage"
                    style="
                      background-color: transparent;
                      color: #1fb9b3;
                      text-decoration: underline;
                      border: none;
                      font-size: 16px;
                      font-weight: bold;
                    "
                  >
                    تغيير
                  </button>
                </div>
                <div
                  style="border-bottom: 1px solid #888"
                  class="justify-content-between mx-2 align-items-center d-flex"
                >
                  <h4 style="font-size: 16px; color: #888">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 25.5938C8.105 25.5938 3.3125 20.8013 3.3125 14.9062C3.3125 9.01125 8.105 4.21875 14 4.21875C19.895 4.21875 24.6875 9.01125 24.6875 14.9062C24.6875 20.8013 19.895 25.5938 14 25.5938ZM14 5.90625C9.03875 5.90625 5 9.945 5 14.9062C5 19.8675 9.03875 23.9062 14 23.9062C18.9613 23.9062 23 19.8675 23 14.9062C23 9.945 18.9613 5.90625 14 5.90625Z"
                        fill="#414042"
                      />
                      <path
                        d="M14 15.4688C13.5387 15.4688 13.1562 15.0862 13.1562 14.625V9C13.1562 8.53875 13.5387 8.15625 14 8.15625C14.4612 8.15625 14.8438 8.53875 14.8438 9V14.625C14.8438 15.0862 14.4612 15.4688 14 15.4688Z"
                        fill="#414042"
                      />
                      <path
                        d="M17.375 3.09375H10.625C10.1637 3.09375 9.78125 2.71125 9.78125 2.25C9.78125 1.78875 10.1637 1.40625 10.625 1.40625H17.375C17.8363 1.40625 18.2188 1.78875 18.2188 2.25C18.2188 2.71125 17.8363 3.09375 17.375 3.09375Z"
                        fill="#414042"
                      />
                    </svg>
                    اشتراك كل

                    {{ title }}
                  </h4>
                  <h4 style="color: #888; font-size: 16px">{{ price }} ر.س</h4>
                </div>
                <div
                  style="border-bottom: 1px solid #888"
                  class="justify-content-between mx-2 align-items-center d-flex"
                >
                  <h4 style="font-size: 18px">المجموع</h4>
                  <h4 style="font-size: 18px">{{ price }} ر.س</h4>
                </div>
                <div class="text-center">
                  <label
                    style="font-weight: bold; font-size: 20px"
                    for="discount"
                    >كود الخصم</label
                  >
                  <div class="row justify-content-center">
                    <div
                      class="d-flex flex-column my-3 w-75 position-relative align-items-center"
                    >
                      <input
                        class="px-4 rounded-3 py-2 form-control"
                        id="discount"
                        type="text"
                        style="border: 1px dashed gray; border-left: none"
                        placeholder="ادخل كود الخصم"
                      />
                      <button
                        style="
                          background-color: rgb(31, 185, 179);
                          color: white;
                          font-size: 18px;
                          top: -1px;
                          left: 10px;
                        "
                        class="btn py-2 px-4 position-absolute rounded-2"
                      >
                        تطبيق
                      </button>
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
     
    </div> -->
  <!-- <div
      style="
        top: 0;
        left: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
      "
      v-if="openSecModal"
      class="position-fixed"
    >
    
      <div style="background-color: white; height: 100%" class="container">
        <div class="text-end py-5 px-5">
          <button
            @click="handleCloseSecModal"
            class=""
            style="
              color: red;
              font-size: 20px;
              border: none;
              background-color: transparent;
            "
          >
            X
          </button>
        </div>
        <div class="row justify-content-center align-items-center">
          <div class="row">
            <div class="col-md-8 col-12">
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
                        src="../../assets/img/payment/Group 1171276314.png"
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
                <div class="card-container col-md-6 col-12 px-1">
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
                            src="../../assets/img/payment/Group 1171276324.png"
                            alt="payment method"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-container col-md-6 col-12 px-1">
                  <div class="card border-info mb-3">
                    <div class="card-body">
                      <div class="form-check">
                        <label
                          class="form-check-label d-flex align-items-center justify-content-between px-2"
                          for="hyperbill"
                        >
                          <div class="">
                            الدفع بواسطة تابى
                            <input
                              type="radio"
                              class="form-check-input"
                              id="hyperbill"
                              value="hyperbill"
                              v-model="selectedProvider"
                            />
                          </div>
                          <img
                            src="../../assets/img/payment/Group 1171276318.png"
                            alt="img"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            
            </div>
            <div class="col-md-4 col-12">
              <div class="d-flex my-4 flex-column gap-4">
                <div
                  class="justify-content-between mx-2 align-items-center d-flex"
                >
                  <h4 style="font-size: 18px">خطة {{ title }}</h4>
                  <button
                    @click="changePackage"
                    style="
                      background-color: transparent;
                      color: #1fb9b3;
                      text-decoration: underline;
                      border: none;
                      font-size: 16px;
                      font-weight: bold;
                    "
                  >
                    تغيير
                  </button>
                </div>
                <div
                  style="border-bottom: 1px solid #888"
                  class="justify-content-between mx-2 align-items-center d-flex"
                >
                  <h4 style="font-size: 16px; color: #888">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 25.5938C8.105 25.5938 3.3125 20.8013 3.3125 14.9062C3.3125 9.01125 8.105 4.21875 14 4.21875C19.895 4.21875 24.6875 9.01125 24.6875 14.9062C24.6875 20.8013 19.895 25.5938 14 25.5938ZM14 5.90625C9.03875 5.90625 5 9.945 5 14.9062C5 19.8675 9.03875 23.9062 14 23.9062C18.9613 23.9062 23 19.8675 23 14.9062C23 9.945 18.9613 5.90625 14 5.90625Z"
                        fill="#414042"
                      />
                      <path
                        d="M14 15.4688C13.5387 15.4688 13.1562 15.0862 13.1562 14.625V9C13.1562 8.53875 13.5387 8.15625 14 8.15625C14.4612 8.15625 14.8438 8.53875 14.8438 9V14.625C14.8438 15.0862 14.4612 15.4688 14 15.4688Z"
                        fill="#414042"
                      />
                      <path
                        d="M17.375 3.09375H10.625C10.1637 3.09375 9.78125 2.71125 9.78125 2.25C9.78125 1.78875 10.1637 1.40625 10.625 1.40625H17.375C17.8363 1.40625 18.2188 1.78875 18.2188 2.25C18.2188 2.71125 17.8363 3.09375 17.375 3.09375Z"
                        fill="#414042"
                      />
                    </svg>
                    اشتراك كل

                    {{ title }}
                  </h4>
                  <h4 style="color: #888; font-size: 16px">{{ price }} ر.س</h4>
                </div>
                <div
                  style="border-bottom: 1px solid #888"
                  class="justify-content-between mx-2 align-items-center d-flex"
                >
                  <h4 style="font-size: 18px">المجموع</h4>
                  <h4 style="font-size: 18px">{{ price }} ر.س</h4>
                </div>
                <div class="text-center">
                  <label
                    style="font-weight: bold; font-size: 20px"
                    for="discount"
                    >كود الخصم</label
                  >
                  <div class="row justify-content-center">
                    <div
                      class="d-flex flex-column my-3 w-75 position-relative align-items-center"
                    >
                      <input
                        class="px-4 rounded-3 py-2 form-control"
                        id="discount"
                        type="text"
                        style="border: 1px dashed gray; border-left: none"
                        placeholder="ادخل كود الخصم"
                      />
                      <button
                        style="
                          background-color: rgb(31, 185, 179);
                          color: white;
                          font-size: 18px;
                          top: -1px;
                          left: 10px;
                        "
                        class="btn py-2 px-4 position-absolute rounded-2"
                      >
                        تطبيق
                      </button>
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
     
    </div> -->
  <!-- <div
      style="
        top: 0;
        left: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
      "
      v-if="openSecModal"
      class="position-fixed"
    >
    
      <div style="background-color: white; height: 100%" class="container">
        <div class="text-end py-5 px-5">
          <button
            @click="handleCloseSecModal"
            class=""
            style="
              color: red;
              font-size: 20px;
              border: none;
              background-color: transparent;
            "
          >
            X
          </button>
        </div>
        <div class="row justify-content-center align-items-center">
          <div class="row">
            <div class="col-md-8 col-12">
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
                        src="../../assets/img/payment/Group 1171276314.png"
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
                <div class="card-container col-md-6 col-12 px-1">
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
                            src="../../assets/img/payment/Group 1171276324.png"
                            alt="payment method"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-container col-md-6 col-12 px-1">
                  <div class="card border-info mb-3">
                    <div class="card-body">
                      <div class="form-check">
                        <label
                          class="form-check-label d-flex align-items-center justify-content-between px-2"
                          for="hyperbill"
                        >
                          <div class="">
                            الدفع بواسطة تابى
                            <input
                              type="radio"
                              class="form-check-input"
                              id="hyperbill"
                              value="hyperbill"
                              v-model="selectedProvider"
                            />
                          </div>
                          <img
                            src="../../assets/img/payment/Group 1171276318.png"
                            alt="img"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            
            </div>
            <div class="col-md-4 col-12">
              <div class="d-flex my-4 flex-column gap-4">
                <div
                  class="justify-content-between mx-2 align-items-center d-flex"
                >
                  <h4 style="font-size: 18px">خطة {{ title }}</h4>
                  <button
                    @click="changePackage"
                    style="
                      background-color: transparent;
                      color: #1fb9b3;
                      text-decoration: underline;
                      border: none;
                      font-size: 16px;
                      font-weight: bold;
                    "
                  >
                    تغيير
                  </button>
                </div>
                <div
                  style="border-bottom: 1px solid #888"
                  class="justify-content-between mx-2 align-items-center d-flex"
                >
                  <h4 style="font-size: 16px; color: #888">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 25.5938C8.105 25.5938 3.3125 20.8013 3.3125 14.9062C3.3125 9.01125 8.105 4.21875 14 4.21875C19.895 4.21875 24.6875 9.01125 24.6875 14.9062C24.6875 20.8013 19.895 25.5938 14 25.5938ZM14 5.90625C9.03875 5.90625 5 9.945 5 14.9062C5 19.8675 9.03875 23.9062 14 23.9062C18.9613 23.9062 23 19.8675 23 14.9062C23 9.945 18.9613 5.90625 14 5.90625Z"
                        fill="#414042"
                      />
                      <path
                        d="M14 15.4688C13.5387 15.4688 13.1562 15.0862 13.1562 14.625V9C13.1562 8.53875 13.5387 8.15625 14 8.15625C14.4612 8.15625 14.8438 8.53875 14.8438 9V14.625C14.8438 15.0862 14.4612 15.4688 14 15.4688Z"
                        fill="#414042"
                      />
                      <path
                        d="M17.375 3.09375H10.625C10.1637 3.09375 9.78125 2.71125 9.78125 2.25C9.78125 1.78875 10.1637 1.40625 10.625 1.40625H17.375C17.8363 1.40625 18.2188 1.78875 18.2188 2.25C18.2188 2.71125 17.8363 3.09375 17.375 3.09375Z"
                        fill="#414042"
                      />
                    </svg>
                    اشتراك كل

                    {{ title }}
                  </h4>
                  <h4 style="color: #888; font-size: 16px">{{ price }} ر.س</h4>
                </div>
                <div
                  style="border-bottom: 1px solid #888"
                  class="justify-content-between mx-2 align-items-center d-flex"
                >
                  <h4 style="font-size: 18px">المجموع</h4>
                  <h4 style="font-size: 18px">{{ price }} ر.س</h4>
                </div>
                <div class="text-center">
                  <label
                    style="font-weight: bold; font-size: 20px"
                    for="discount"
                    >كود الخصم</label
                  >
                  <div class="row justify-content-center">
                    <div
                      class="d-flex flex-column my-3 w-75 position-relative align-items-center"
                    >
                      <input
                        class="px-4 rounded-3 py-2 form-control"
                        id="discount"
                        type="text"
                        style="border: 1px dashed gray; border-left: none"
                        placeholder="ادخل كود الخصم"
                      />
                      <button
                        style="
                          background-color: rgb(31, 185, 179);
                          color: white;
                          font-size: 18px;
                          top: -1px;
                          left: 10px;
                        "
                        class="btn py-2 px-4 position-absolute rounded-2"
                      >
                        تطبيق
                      </button>
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
     
    </div> -->
  <div></div>
</template>

<script>
export default {};
</script>

<style></style>
