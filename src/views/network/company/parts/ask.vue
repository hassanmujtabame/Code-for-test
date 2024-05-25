<template>
  <div class="row my-5">
    <div class="d-flex justify-content-between px-2 align-items-center">
      <h1 style="font-size: 40px; font-weight: bold; color: #2cb7b3">
        الخدمات التي تحصل عليها الشركة
      </h1>
      <router-link
        v-if="false"
        class="text-light rounded-2 btn px-4 py-2"
        style="background-color: #2cb7b3"
        :to="getRouteLocale('consulting-fields')"
      >
        اطلب استشاره
      </router-link>
    </div>
    <p style="font-size: 20px; color: #737373">
      باستضافتك عروضك وخصوماتك على منصتنا، ستصل إلى مجتمعات واسعة في المملكة
      والخليج العربي، وستستفيد من فرص التواصل مع رواد الأعمال والمهتمين بالتعلم.
      انضم إلينا اليوم لتوسيع نطاق أعمالك وزيادة قاعدة عملائ
    </p>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">اضافة اماكن</h2>
        <p>
          أضف مقرات عمل وفعالياتك وسكن واستضافة على منصتنا لجذب اهتمام العملاء
          المحتملين وتوسيع شبكتك التجارية.
        </p>
      </div>
    </div>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">رفع المعارض والفعاليات</h2>
        <p>
          قم برفع معارضك وفعالياتك لتوسيع نطاق الترويج والمبيعات وتوسيع شبكة
          علاقاتك التجارية.
        </p>
      </div>
    </div>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">الوعي بالعلامة التجارية</h2>
        <p>
          ساهم في تعزيز وعي الجمهور بعلامتك التجارية عبر منصتنا، واستفد من وصولك
          إلى جمهور واسع ومتنوع.
        </p>
      </div>
    </div>
  </div>
  <!-- <div class="row my-5">
    <div class="d-flex justify-content-between px-2 align-items-center">
      <h1 style="font-size: 40px; font-weight: bold; color: #2cb7b3">
        الخدمات التي تحصل عليها الشركة
      </h1>
      <router-link
        class="text-light rounded-2 btn px-4 py-2"
        style="background-color: #2cb7b3"
        :to="getRouteLocale('')"
      >
        اطلب استشاره
      </router-link>
    </div>
    <p style="font-size: 20px; color: #737373">
      باستضافتك عروضك وخصوماتك على منصتنا، ستصل إلى مجتمعات واسعة في المملكة
      والخليج العربي، وستستفيد من فرص التواصل مع رواد الأعمال والمهتمين بالتعلم.
      انضم إلينا اليوم لتوسيع نطاق أعمالك وزيادة قاعدة عملائ
    </p>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">اضافة اماكن</h2>
        <p>
          أضف مقرات عمل وفعالياتك وسكن واستضافة على منصتنا لجذب اهتمام العملاء
          المحتملين وتوسيع شبكتك التجارية.
        </p>
      </div>
    </div>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">رفع المعارض والفعاليات</h2>
        <p>
          قم برفع معارضك وفعالياتك لتوسيع نطاق الترويج والمبيعات وتوسيع شبكة
          علاقاتك التجارية.
        </p>
      </div>
    </div>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">الوعي بالعلامة التجارية</h2>
        <p>
          ساهم في تعزيز وعي الجمهور بعلامتك التجارية عبر منصتنا، واستفد من وصولك
          إلى جمهور واسع ومتنوع.
        </p>
      </div>
    </div>
  </div> -->
  <!-- <div class="row my-5">
    <div class="d-flex justify-content-between px-2 align-items-center">
      <h1 style="font-size: 40px; font-weight: bold; color: #2cb7b3">
        الخدمات التي تحصل عليها الشركة
      </h1>
      <router-link
        class="text-light rounded-2 btn px-4 py-2"
        style="background-color: #2cb7b3"
        :to="getRouteLocale('')"
      >
        اطلب استشاره
      </router-link>
    </div>
    <p style="font-size: 20px; color: #737373">
      باستضافتك عروضك وخصوماتك على منصتنا، ستصل إلى مجتمعات واسعة في المملكة
      والخليج العربي، وستستفيد من فرص التواصل مع رواد الأعمال والمهتمين بالتعلم.
      انضم إلينا اليوم لتوسيع نطاق أعمالك وزيادة قاعدة عملائ
    </p>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">اضافة اماكن</h2>
        <p>
          أضف مقرات عمل وفعالياتك وسكن واستضافة على منصتنا لجذب اهتمام العملاء
          المحتملين وتوسيع شبكتك التجارية.
        </p>
      </div>
    </div>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">رفع المعارض والفعاليات</h2>
        <p>
          قم برفع معارضك وفعالياتك لتوسيع نطاق الترويج والمبيعات وتوسيع شبكة
          علاقاتك التجارية.
        </p>
      </div>
    </div>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">الوعي بالعلامة التجارية</h2>
        <p>
          ساهم في تعزيز وعي الجمهور بعلامتك التجارية عبر منصتنا، واستفد من وصولك
          إلى جمهور واسع ومتنوع.
        </p>
      </div>
    </div>
  </div> -->
  <!-- <div class="row my-5">
    <div class="d-flex justify-content-between px-2 align-items-center">
      <h1 style="font-size: 40px; font-weight: bold; color: #2cb7b3">
        الخدمات التي تحصل عليها الشركة
      </h1>
      <router-link
        class="text-light rounded-2 btn px-4 py-2"
        style="background-color: #2cb7b3"
        :to="getRouteLocale('')"
      >
        اطلب استشاره
      </router-link>
    </div>
    <p style="font-size: 20px; color: #737373">
      باستضافتك عروضك وخصوماتك على منصتنا، ستصل إلى مجتمعات واسعة في المملكة
      والخليج العربي، وستستفيد من فرص التواصل مع رواد الأعمال والمهتمين بالتعلم.
      انضم إلينا اليوم لتوسيع نطاق أعمالك وزيادة قاعدة عملائ
    </p>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">اضافة اماكن</h2>
        <p>
          أضف مقرات عمل وفعالياتك وسكن واستضافة على منصتنا لجذب اهتمام العملاء
          المحتملين وتوسيع شبكتك التجارية.
        </p>
      </div>
    </div>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">رفع المعارض والفعاليات</h2>
        <p>
          قم برفع معارضك وفعالياتك لتوسيع نطاق الترويج والمبيعات وتوسيع شبكة
          علاقاتك التجارية.
        </p>
      </div>
    </div>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">الوعي بالعلامة التجارية</h2>
        <p>
          ساهم في تعزيز وعي الجمهور بعلامتك التجارية عبر منصتنا، واستفد من وصولك
          إلى جمهور واسع ومتنوع.
        </p>
      </div>
    </div>
  </div> -->
  <!-- <div class="row my-5">
    <div class="d-flex justify-content-between px-2 align-items-center">
      <h1 style="font-size: 40px; font-weight: bold; color: #2cb7b3">
        الخدمات التي تحصل عليها الشركة
      </h1>
      <router-link
        class="text-light rounded-2 btn px-4 py-2"
        style="background-color: #2cb7b3"
        :to="getRouteLocale('')"
      >
        اطلب استشاره
      </router-link>
    </div>
    <p style="font-size: 20px; color: #737373">
      باستضافتك عروضك وخصوماتك على منصتنا، ستصل إلى مجتمعات واسعة في المملكة
      والخليج العربي، وستستفيد من فرص التواصل مع رواد الأعمال والمهتمين بالتعلم.
      انضم إلينا اليوم لتوسيع نطاق أعمالك وزيادة قاعدة عملائ
    </p>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">اضافة اماكن</h2>
        <p>
          أضف مقرات عمل وفعالياتك وسكن واستضافة على منصتنا لجذب اهتمام العملاء
          المحتملين وتوسيع شبكتك التجارية.
        </p>
      </div>
    </div>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">رفع المعارض والفعاليات</h2>
        <p>
          قم برفع معارضك وفعالياتك لتوسيع نطاق الترويج والمبيعات وتوسيع شبكة
          علاقاتك التجارية.
        </p>
      </div>
    </div>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">الوعي بالعلامة التجارية</h2>
        <p>
          ساهم في تعزيز وعي الجمهور بعلامتك التجارية عبر منصتنا، واستفد من وصولك
          إلى جمهور واسع ومتنوع.
        </p>
      </div>
    </div>
  </div> -->
  <!-- <div class="row my-5">
    <div class="d-flex justify-content-between px-2 align-items-center">
      <h1 style="font-size: 40px; font-weight: bold; color: #2cb7b3">
        الخدمات التي تحصل عليها الشركة
      </h1>
      <router-link
        class="text-light rounded-2 btn px-4 py-2"
        style="background-color: #2cb7b3"
        :to="getRouteLocale('')"
      >
        اطلب استشاره
      </router-link>
    </div>
    <p style="font-size: 20px; color: #737373">
      باستضافتك عروضك وخصوماتك على منصتنا، ستصل إلى مجتمعات واسعة في المملكة
      والخليج العربي، وستستفيد من فرص التواصل مع رواد الأعمال والمهتمين بالتعلم.
      انضم إلينا اليوم لتوسيع نطاق أعمالك وزيادة قاعدة عملائ
    </p>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">اضافة اماكن</h2>
        <p>
          أضف مقرات عمل وفعالياتك وسكن واستضافة على منصتنا لجذب اهتمام العملاء
          المحتملين وتوسيع شبكتك التجارية.
        </p>
      </div>
    </div>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">رفع المعارض والفعاليات</h2>
        <p>
          قم برفع معارضك وفعالياتك لتوسيع نطاق الترويج والمبيعات وتوسيع شبكة
          علاقاتك التجارية.
        </p>
      </div>
    </div>
    <div class="col-md-4 p-2 col-12">
      <div
        style="min-height: 150px"
        class="d-flex border p-2 flex-column rounded-2"
      >
        <h2 style="color: #cf1f3e">الوعي بالعلامة التجارية</h2>
        <p>
          ساهم في تعزيز وعي الجمهور بعلامتك التجارية عبر منصتنا، واستفد من وصولك
          إلى جمهور واسع ومتنوع.
        </p>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "ask-company",
};
</script>

<style></style>
