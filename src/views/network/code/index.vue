<template>
  <div class="container my-5">
    <div class="row my-5">
      <div class="col-md-8 py-5">
        <div class="d-flex py-3 align-items-center gap-2">
          <img
            class="img-fluid"
            src="@/assets/img/New folder (2)/Rectangle 837.png"
            alt=""
          />
          <div class="d-flex flex-column gap-1">
            <h4 class="card-title">بطاقة فلاورد</h4>
            <router-link
              class="px-4 py-2 text-light rounded-3 mt-2"
              style="background-color: #f2631c"
              :to="getRouteLocale('')"
            >
              صفحة الشركة
            </router-link>
          </div>
        </div>
        <div class="shadow-sm rounded-3">
          <div class="my-4 mx-4">
            <div class="d-flex flex-column gap-1">
              <label class="label-text mb-2" for="location"
                >اختار منطقة المتجر</label
              >
              <d-select-input style="height: 46px" v-model="itemForm.country">
                <option value=""></option>
                <option v-for="(cat, i) in countries" :key="i" :value="cat.id">
                  {{ cat.name }}
                </option>
              </d-select-input>
              <p class="label-text mb-2 mt-3" for="location">قيمه البطاقه</p>
              <div class="d-flex align-items-center gap-4">
                <label
                  style="border: 1.5px solid #1fb9b3"
                  class="px-4 rounded-3 py-2"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="itemForm.price"
                    value="50"
                  />
                  50 ريال
                </label>
                <label
                  style="border: 1.5px solid #1fb9b3"
                  class="px-4 rounded-3 py-2"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="itemForm.price"
                    value="100"
                  />
                  100 ريال
                </label>
                <label
                  style="border: 1.5px solid #1fb9b3"
                  class="px-4 rounded-3 py-2"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="itemForm.price"
                    value="200"
                  />
                  200 ريال
                </label>
                <label
                  style="border: 1.5px solid #1fb9b3"
                  class="px-4 rounded-3 py-2"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="itemForm.price"
                    value="300"
                  />
                  300 ريال
                </label>
              </div>
              <div class="d-flex justify-content-between my-4 px-2">
                <div class="w-50">
                  <p class="label-text mb-2" for="location">قيمه البطاقه</p>

                  <div class="d-flex gap-1 align-items-center">
                    <button
                      @click="dec"
                      class="rounded-3 m-0 border"
                      style="
                        border: none;
                        font-size: 24px;
                        background-color: transparent;
                        width: fit-content;
                        width: 50px;
                        height: 50px;
                      "
                    >
                      -
                    </button>
                    <div
                      class="rounded-3 d-flex justify-content-center align-items-center border"
                      style="width: 64px; height: 50px"
                    >
                      <h6 class="m-0" style="font-size: 26px">
                        {{ amount }}
                      </h6>
                    </div>
                    <button
                      @click="inc"
                      class="rounded-3 m-0 border"
                      style="
                        border: none;
                        font-size: 24px;
                        background-color: transparent;
                        width: fit-content;
                        width: 50px;
                        height: 50px;
                      "
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  style="background-color: #2cb7b3"
                  class="btn w-50 btn-text rounded-3 my-2 px-4 py-2"
                >
                  إضافة للسلة
                </button>
              </div>
            </div>
          </div>
          <!-- <d-select-input
                      v-model="itemForm.category_id"
                      :errors="errors"
                    >
                      <option value=""></option>
                      <option
                        v-for="(cat, i) in categories"
                        :key="i"
                        :value="cat.id"
                      >
                        {{ cat.name }}
                      </option>
                    </d-select-input> -->
        </div>
      </div>
      <div
        class="h-100 col-md-4 my-auto shadow-sm d-flex flex-column gap-1 rounded-3"
      >
        <h1 class="text-h1">معلومات البطاقة:</h1>
        <p class="text-h2">
          بطاقة زين لماركات لاند مارك تمكنك من التسوق من أي من الماركات التالية:
        </p>
        <p class="text-b1">سرماس | لابيز | الفردان | المضيان</p>
        <p class="text-b1">
          يمكن إرسالها عبر: البريد الإلكتروني أو الرسائل النصية
        </p>

        <p class="text-b1">
          قابلة للاستخدام في: الموقع الإلكتروني أو التطبيق للماركة المختارة
        </p>
        <p class="text-h2">مواقع الاستخدام:</p>
        <p class="text-b1">
          - الموقع الإلكتروني للماركة المختارة
          <br />
          - تطبيق الماركة المختارة
        </p>
      </div>
    </div>
    <div class="row shadow-sm rounded-4">
      <div class="col-md-6">
        <h1 class="text-h1">طريقة الاستخدام:</h1>
        <p class="text-h2">عبر المتاجر:</p>
        <p class="text-b1">
          - عند الانتهاء من التسوق، قُم بالتوجه إلى الكاشير.
        </p>
        <p class="text-b1">
          - اظهر الباركود الذي تم إرساله لك على تطبيق رياديات للكاشير ليتم مسحه.
        </p>
        <p class="text-b1">
          - بعد مسح الباركود بنجاح، سيتم خصم قيمة الكوبون أو العرض المقدم
          مباشرةً من الفاتورة الخاصة بك.
        </p>
        <p class="text-h2 mt-3">عبر منصات التجارة الإلكترونية:</p>
        <p class="text-b1">
          - سجّلي الدخول أو أنشئي حسابًا في الماركة المختارة.
        </p>
        <p class="text-b1">
          - اختاري المنتجات وانتقلي إلى سلة التسوق، ثم اتجهي إلى صفحة الدفع.
        </p>
        <p class="text-b1">
          - اضغطي على "استخدمها الآن" في خانة "تريد استخدام بطاقة هدايا؟".
        </p>
        <p class="text-b1">- قومي بإدخال الكود المرسل في خانة "الكود"</p>
        <p class="text-b1">
          - أدخلي الرقم السري المرفق مع الكود في خانة "PIN"، ثم اضغطي على
          "تطبيق".
        </p>
      </div>
      <div class="col-md-6">
        <h1 class="text-h2">شروط وأحكام الاستخدام:</h1>
        <p class="text-b2">
          - تكون البطاقة متاحة للاستخدام في المتجر في الدولة المحددة فقط، ولا
          يمكن استخدامها في متاجر أخرى.
        </p>
        <p class="text-b2">
          - لا تتحمل رياديات أي مسؤولية في حالة فقدان القسيمة أو سرقتها أو
          استخدامها دون إذن.
        </p>
        <p class="text-b2">
          - إذا كانت قيمة الشراء أقل من قيمة الكوبون، سيتم حفظ المبلغ المتبقي في
          رصيد بطاقة رياديات.
        </p>
        <p class="text-b2">
          - يمكن استخدام الكود في أي ماركة من الماركات المذكورة.
        </p>
        <p class="text-b2">
          - تكون البطاقة متاحة للاستخدام في المتجر في الدولة المحددة فقط، ولا
          يمكن استخدامها في متاجر أخرى.
        </p>
        <p class="text-b2">
          - لا يمكن استرجاع قيمة البطاقة بعد الشراء أو انتهاء صلاحيتها.
        </p>
        <p class="text-b2">- يتم تفعيل الكود مباشرة بعد الشراء.</p>
        <p class="text-b2">
          - للتحقق من الرصيد المتبقي في البطاقة، ستكون التفاصيل متاحه عبر تطبيق
          رياديات او من الموقع مباشرة.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import commonAPI from "@/services/api/common";

export default {
  name: "code-page",
  data() {
    return {
      countries: [],
      amount: 1,
      itemForm: {
        country: "",
        price: 0,
      },
    };
  },
  methods: {
    async loadCountries() {
      try {
        let { data } = await commonAPI.getCountries();
        if (data.success) {
          this.countries = data.data;
        }
      } catch (error) {
        console.log(error);
        //
      }
    },
    dec() {
      if (this.amount !== 1) {
        this.amount = this.amount - 1;
      }
    },
    inc() {
      this.amount = this.amount + 1;
    },
  },
  mounted() {
    this.loadCountries();
  },
};
</script>

<style scoped>
.card-title {
  font-family: Cairo;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #000;
}
.label-text {
  font-family: Cairo;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #02111b;
}
.btn-text {
  font-family: Cairo;
  font-size: 15.63px;
  font-weight: 700;
  line-height: 24px;
  color: #fff;
}
.text-h1 {
  font-family: Cairo;
  font-size: 17.3px;
  font-weight: 600;
  line-height: 28px;
  color: #02111b;
}
.text-h2 {
  font-family: Cairo;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #2cb7b3;
}
.text-b1 {
  font-family: Cairo;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #374151;
}
.text-b2 {
  font-family: Cairo;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: right;
  color: #414042;
}
</style>
