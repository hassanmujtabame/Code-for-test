<template>
  <div class="container my-5">
    <div class="row my-5">
      <div class="col-md-8 py-5">
        <div class="d-flex py-5 align-items-center gap-2">
          <img
            class="img-fluid"
            src="@/assets/img/New folder (2)/Rectangle 837.png"
            alt=""
          />
          <div class="d-flex flex-column gap-1">
            <h4>بطاقة فلاورد</h4>
            <router-link
              class="px-4 py-2 text-light rounded-3"
              style="background-color: #f2631c"
              :to="getRouteLocale('')"
            >
              صفح الشركة
            </router-link>
          </div>
        </div>
        <div class="border rounded-3">
          <div class="my-4 mx-4">
            <div class="d-flex flex-column gap-1">
              <label for="location">اختار منطقة المتجر</label>
              <d-select-input v-model="itemForm.country">
                <option value=""></option>
                <option v-for="(cat, i) in countries" :key="i" :value="cat.id">
                  {{ cat.name }}
                </option>
              </d-select-input>
              <p class="mt-3" for="location">قيمه البطاقه</p>
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
                <!-- <label
                  style="border: 1.5px solid #1fb9b3"
                  class="px-4 rounded-3 py-2"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="itemForm.price"
                    value="option3"
                  />
                  500 ريال
                </label> -->
              </div>
              <div class="d-flex justify-content-between my-4 px-2">
                <div class="d-flex w-50 gap-1 align-items-center">
                  <button
                    @click="dec"
                    class="rounded-3 m-0 shadow"
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
                    class="rounded-3 d-flex justify-content-center align-items-center shadow"
                    style="width: 64px; height: 50px"
                  >
                    <h6 class="m-0" style="font-size: 26px">
                      {{ amount }}
                    </h6>
                  </div>
                  <button
                    @click="inc"
                    class="rounded-3 m-0 shadow"
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

                <button
                  style="background-color: #2cb7b3"
                  class="btn w-50 text-light rounded-3 px-4 py-2"
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
      <div class="col-md-4 my-auto border d-flex flex-column gap-1 rounded-3">
        <h1>معلومات البطاقة:</h1>
        <p style="color: #2cb7b3">
          بطاقة زين لماركات لاند مارك تمكنك من التسوق من أي من الماركات التالية:
        </p>
        <p>سرماس | لابيز | الفردان | المضيان</p>
        <p>يمكن إرسالها عبر: البريد الإلكتروني أو الرسائل النصية</p>

        <p>قابلة للاستخدام في: الموقع الإلكتروني أو التطبيق للماركة المختارة</p>
        <p style="color: #2cb7b3">مواقع الاستخدام:</p>
        <p>
          - الموقع الإلكتروني للماركة المختارة
          <br />
          - تطبيق الماركة المختارة
        </p>
      </div>
    </div>
    <div class="row border rounded-4">
      <div class="col-md-6">
        <h1>طريقة الاستخدام:</h1>
        <p style="color: #2cb7b3">عبر المتاجر:</p>
        <p>- عند الانتهاء من التسوق، قُم بالتوجه إلى الكاشير.</p>
        <p>
          - اظهر الباركود الذي تم إرساله لك على تطبيق رياديات للكاشير ليتم مسحه.
        </p>
        <p>
          - بعد مسح الباركود بنجاح، سيتم خصم قيمة الكوبون أو العرض المقدم
          مباشرةً من الفاتورة الخاصة بك.
        </p>
        <p style="color: #2cb7b3" class="mt-3">
          عبر منصات التجارة الإلكترونية:
        </p>
        <p>- سجّلي الدخول أو أنشئي حسابًا في الماركة المختارة.</p>
        <p>
          - اختاري المنتجات وانتقلي إلى سلة التسوق، ثم اتجهي إلى صفحة الدفع.
        </p>
        <p>- اضغطي على "استخدمها الآن" في خانة "تريد استخدام بطاقة هدايا؟".</p>
        <p>- قومي بإدخال الكود المرسل في خانة "الكود"</p>
        <p>
          - أدخلي الرقم السري المرفق مع الكود في خانة "PIN"، ثم اضغطي على
          "تطبيق".
        </p>
      </div>
      <div class="col-md-6">
        <h1 style="color: #2cb7b3">شروط وأحكام الاستخدام:</h1>
        <p>
          - تكون البطاقة متاحة للاستخدام في المتجر في الدولة المحددة فقط، ولا
          يمكن استخدامها في متاجر أخرى.
        </p>
        <p>
          - لا تتحمل رياديات أي مسؤولية في حالة فقدان القسيمة أو سرقتها أو
          استخدامها دون إذن.
        </p>
        <p>
          - إذا كانت قيمة الشراء أقل من قيمة الكوبون، سيتم حفظ المبلغ المتبقي في
          رصيد بطاقة رياديات.
        </p>
        <p>- يمكن استخدام الكود في أي ماركة من الماركات المذكورة.</p>
        <p>
          - تكون البطاقة متاحة للاستخدام في المتجر في الدولة المحددة فقط، ولا
          يمكن استخدامها في متاجر أخرى.
        </p>
        <p>- لا يمكن استرجاع قيمة البطاقة بعد الشراء أو انتهاء صلاحيتها.</p>
        <p>- يتم تفعيل الكود مباشرة بعد الشراء.</p>
        <p>
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

<style></style>
