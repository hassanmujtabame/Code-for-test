<template>
  <div style="margin-top: 100px" class="container">
    <div
      class="shadow-sm rounded-4 d-flex justify-content-start align-items-center gap-2 p-4"
      style="width: fit-content; margin-inline: -12px"
    >
      <div class="img-box d-inline">
        <img :src="details.image" alt="company_img" />
      </div>
      <div class="code-box d-inline">
        <h1 class="text-h1">كود الخصم</h1>
        <h1 class="text-h2 border rounded-3 px-3 py-2" style="width: 333px">
          {{ details.code }}
        </h1>
        <button
          @click="copyCode(details.code)"
          class="btn btn-customer mt-3 py-3"
          style="width: 333px"
        >
          {{ copied ? "تم النسخ" : "نسخ الكود" }}
        </button>
      </div>
    </div>
    <div class="row shadow-sm rounded-4 mt-4 p-3">
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
import offersAPI from "@/services/api/offers";

export default {
  name: "coupon-details",
  data: () => {
    return {
      details: {},
      copied: false,
    };
  },
  methods: {
    async getDetailsCoupon() {
      try {
        let { data } = await offersAPI.getItem(this.$route.params.id);
        if (data.success) {
          this.details = data.data;
          console.log("data85", data);
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    copyCode(code) {
      navigator.clipboard.writeText(code);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2300);
    },
  },
  mounted() {
    this.getDetailsCoupon();
  },
};
</script>

<style scoped>
.img-box img {
  width: 165px;
  height: 165px;
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
