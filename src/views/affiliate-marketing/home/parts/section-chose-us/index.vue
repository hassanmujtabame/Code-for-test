<template>
  <div class="container col-12">
    <div class="row justify-content-center text-center mb-4">
      <span class="step-tex"> خطوة بخطوة </span>
      <h2 class="title text mt-2">كيف تبدأي الآن بكل بساطة</h2>
    </div>
    <div class="row">
      <div class="col-md-3 col-12 text-center">
        <div class="icon d-flex icon-4 justify-content-center">
          <div>
            <img class="" src="@/assets/af-icons/Coin/Filled.svg" alt="" />
          </div>
        </div>
        <div class="content row">
          <h5>الحصول علي عمولة</h5>
          <span
            >عندما ينقر أحد الزوار على رابط الإحالة الخاص بك ويشتري منتجًا أو
            خدمة، ستحصل على عمولة . عادةً ما يتم دفع العمولات شهريًا أو ربع
            سنويًا. ستتلقى إشعارًا عبر البريد الإلكتروني أو البريد العادي عندما
            تستحق العمولات. بمجرد حصولك على العمولات، يمكنك سحبها إلى حسابك
            المصرفي أو استخدامها لشراء منتجات أو خدمات من المنصة.
          </span>
        </div>
      </div>

      <div class="col-md-3 col-12 text-center">
        <div class="icon d-flex icon-3 justify-content-center">
          <div>
            <img src="@/assets/af-icons/Calendar/Filled.svg" alt="" />
          </div>
        </div>
        <div class="content row">
          <h5>التسويق للمنصة</h5>
          <span>
            الآن بعد أن حصلت على الروابط والمحتوي، يمكنك البدء في التسويق
            للمنصة. يمكنك القيام بذلك باستخدام مجموعة متنوعة من الأساليب:
            <!-- dotted lsit -->
            <ul>
              <li>وسائل التواصل الاجتماعي</li>
              <li>التسويق عبر البريد الإلكتروني</li>
              <li>التسويق عبر محركات البحث</li>
              <li>الإعلانات المدفوعة</li>
            </ul>
          </span>
        </div>
      </div>

      <div class="col-md-3 col-12 text-center">
        <div class="icon d-flex icon-2 justify-content-center">
          <div>
            <img src="@/assets/af-icons/Clock/Filled.svg" alt="" />
          </div>
        </div>
        <div class="content row">
          <h5>الحصول علي الروابط والمحتوي</h5>
          <span>
            بالإضافة إلى الروابط، ستحصل أيضًا على محتوى خاص يمكنك استخدامه
            للترويج للمنتجات أو الخدمات. هذا المحتوى قد يشمل ما يلي:
            <!-- dotted lsit -->
            <ul>
              <li>المحتوى المكتوب، مثل المقالات أو المراجعات</li>
              <li>المحتوى المرئي، مثل مقاطع الفيديو أو الصور</li>
              <li>المحتوى الصوتي، مثل البودكاست</li>
            </ul>
          </span>
        </div>
      </div>

      <div class="col-md-3 col-12 text-center">
        <div class="icon d-flex icon-1 justify-content-center">
          <div>
            <img src="@/assets/af-icons/User/filled.svg" alt="" />
          </div>
        </div>
        <div class="content row">
          <h5>التسجيل</h5>
          <span>
            سجلي كمسوقة بالعمولة وابدأي العمل معنا عادةً ما يكون هذا إجراءً
            بسيطًا يتضمن تقديم بعض المعلومات الشخصية الأساسية، مثل اسمك وعنوان
            بريدك الإلكتروني وعنوانك.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "step-by-step-section",
};
</script>

<style scoped>
.step-tex {
  font-family: Cairo;
  font-size: 20px;
  font-weight: 600;
  line-height: 37.48px;
  color: #f2631c;
}
.title-text {
  font-family: Cairo;
  font-size: 40px;
  font-weight: 600;
  line-height: 74.96px;
  color: #0c2f33;
}
.icon div {
  background: white;
  width: 75px;
  height: 75px;
  padding: 10px;
  border-radius: 30%;
  padding: 20px;
  box-shadow: 0px 0px 6px 1px lightgrey;
  margin-bottom: 30px;
  position: relative;
}

.icon-1 div::before,
.icon-3 div::before {
  position: absolute;
  content: "";
  width: 130px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-image: url("~@/assets/af-icons/Arrow1.png");
  background-size: contain;
  background-repeat: no-repeat;
  bottom: -10px;
  right: -150px;
}

.icon-2 div::before {
  position: absolute;
  content: "";
  width: 130px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-image: url("~@/assets/af-icons/Arrow2.png");
  background-size: contain;
  background-repeat: no-repeat;
  top: 15px;
  right: -150px;
}

.icon div::after {
  position: absolute;
  content: "";
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #ffbe39;
  top: 0;
  right: -20px;
  border-radius: 50%;
}
.content h5 {
  color: #2eb9b3;
}
.content span {
  font-family: Cairo;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  text-align: right;
}
.icon-1 div::after {
  content: "1";
}
.icon-2 div::after {
  content: "2";
}
.icon-3 div::after {
  content: "3";
}
.icon-4 div::after {
  content: "4";
}
</style>
