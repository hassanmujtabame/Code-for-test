<template>
  <div style="background: #ffffff" class="p-5">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-6 col-12">
          <div class="row justify-content-center mb-4">
            <span style="color: #f2631c; font-size: 24px">
              اليك ما نقوم بتقديمه لك
            </span>
            <h3 class="mt-2">
              نجاحك يهمنا: نقدم الدعم المستمر للمسوقين بالعمولة لتحقيق النجاح
            </h3>
          </div>
          <div class="d-flex align-items-center gap-2">
            <i
              style="color: var(--pc); font-size: 25px; padding-bottom: 19px"
              class="fas fa-check-circle mx-2"
            ></i>
            <p style="font-size: 18px" class="col-10">
              تدريب المسوقين بالعمولة: نقدم برامج تدريبية للمسوقين بالعمولة
              لمساعدتهم على الترويج بفعالية.
            </p>
          </div>
          <div class="d-flex align-items-center gap-2">
            <i
              style="color: var(--pc); font-size: 25px; padding-bottom: 19px"
              class="fas fa-check-circle mx-2"
            ></i>
            <p style="font-size: 18px" class="col-10">
              أدوات المسوقين بالعمولة: نقدم أدوات للمسوقين بالعمولة لإدارة
              حملاتهم التسويقية.
            </p>
          </div>
          <div class="d-flex align-items-center gap-2">
            <i
              style="color: var(--pc); font-size: 25px; padding-bottom: 19px"
              class="fas fa-check-circle mx-2"
            ></i>
            <p style="font-size: 18px" class="col-10">
              الدعم المستمر: ندعم المسوقين بالعمولة باستمرار.
            </p>
          </div>
          <div
            class="row justify-content-md-start mx-md-4 justify-content-center"
          >
            <button
              class="shadow btn text-light mt-2 px-5 py-2"
              style="
                width: fit-content;
                border-radius: 8px;
                background-color: #1fb9b3;
              "
              @click="$router.push({ name: 'contact-us' })"
            >
              {{ $t("contact-us") }} الأن
            </button>
          </div>
        </div>
        <div class="col-md-6 col-12 p-5">
          <img
            class="img-fluid rounded-3"
            src="@/assets/img/new/affiliate-marketing/section.png"
            alt=""
          />
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "section-what-we-provide",
};
</script>

<style scoped>
.image-part {
  position: relative;
}

.image-part::after {
  position: absolute;
  content: "عملأونا المميزون";
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 10px;
  bottom: -10px;
  border-radius: 15px;
  background-size: contain;
  background-image: url("~@/assets/af-icons/image1218.png");
  background-repeat: no-repeat;
  left: 15px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
}

.image-part span {
  position: absolute;
  content: "";
  width: 80px;
  height: 50px;
  background: #fff;
  top: 50%;
  right: 50%;
  border-radius: 10px;
  transform: translate(50%, -50%);
}

.image-part span::after {
  position: absolute;
  content: "";
  border: 10px solid #fff;
  /* height: 40px; */
  /* width: 40px; */
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  /* background: red; */
  bottom: -10px;
  right: 50%;
  transform: translate(50%, 50%);
}
</style>
