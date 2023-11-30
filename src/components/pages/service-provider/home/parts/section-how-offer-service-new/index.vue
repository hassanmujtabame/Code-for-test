<template>
  <div class="container mt-5">
    <h2 class="home-section-title text-center mb-4">
      كيف تنجز مهمتك
    </h2>
    <div class="d-flex flex-row flex-wrap justify-content-between text-center" >
      <div class="box border p-5 rounded-3" style="flex-basis: 48%; border-color: #2EB9B3 !important;">
        <h1 class="pc fs-2">
          للعملاء
        </h1>
        <span class="fs-2">
          (
          اريد احد ينجز لي عملا
          )
        </span>
        <div class="row mt-5">
          <div class="btn-customer p-5 d-flex flex-column gap-5 align-items-center justify-content-center">
            <span
              style="background-color: #fff; padding:5px; border-radius: 50%; width: 40px; height: 40px; line-height: 30px"
              class="pc fs-2 bold d-flex flex-column align-items-center justify-content-cetner">
              <div>
                1
              </div>
            </span>
            <h2 class="text-white">
              سجل كعميل
            </h2>
          </div>

        </div>
        <div class="row mt-5">
          <div class="col-5 btn-customer p-5 d-flex flex-column gap-5 align-items-center justify-content-center">
            <span
              style="background-color: #fff; padding:5px; border-radius: 50%; width: 40px; height: 40px; line-height: 30px"
              class="pc fs-2 bold d-flex flex-column align-items-center justify-content-cetner">
              <div>
                2
              </div>
            </span>
            <h2 class="text-white">
              اطلب خدمه خاصه
            </h2>
          </div>
          <div class="col-2 d-flex pc align-items-center justify-content-center">
            <h2>
              او
            </h2>
          </div>
          <div class="col-5 btn-customer p-5 d-flex flex-column gap-5 align-items-center justify-content-center">
            <span
              style="background-color: #fff; padding:5px; border-radius: 50%; width: 40px; height: 40px; line-height: 30px"
              class="pc fs-2 bold d-flex flex-column align-items-center justify-content-cetner">
              <div>
                2
              </div>
            </span>
            <h2 class="text-white">
              تصفح مقدمى الخدمات
            </h2>
          </div>
        </div>
        <div class="row mt-5">
          <div class="btn-customer p-5 d-flex flex-column gap-5 align-items-center justify-content-center">
            <span style="background-color: #fff; padding:5px; border-radius: 50%; width: 40px; height: 40px; line-height: 30px"
              class="pc fs-2 bold d-flex flex-column align-items-center justify-content-cetner">
              <div>
                3
              </div>
            </span>
            <h2 class="text-white">
              اختر من افضل مقدمى الخدمات و انجز مهمتك
            </h2>
          </div>

        </div>
      </div>
      <div class="box border p-5 rounded-3" style="flex-basis: 48%; border-color: #2EB9B3 !important;">
        <h1 class="pc fs-2">
          لمقدمى الخدمات
        </h1>
        <span class="fs-2">
          (
          اريد عرض و تقديم خدماتى
          )
        </span>
        <div class="row mt-5">
          <div class="btn-customer p-5 d-flex flex-column gap-5 align-items-center justify-content-center">
            <span
              style="background-color: #fff; padding:5px; border-radius: 50%; width: 40px; height: 40px; line-height: 30px"
              class="pc fs-2 bold d-flex flex-column align-items-center justify-content-cetner">
              <div>
                1
              </div>
            </span>
            <h2 class="text-white">
              سجل كمقدم خدمه
            </h2>
          </div>

        </div>
        
        <div class="row mt-5">
          <div class="btn-customer p-5 d-flex flex-column gap-5 align-items-center justify-content-center">
            <span style="background-color: #fff; padding:5px; border-radius: 50%; width: 40px; height: 40px; line-height: 30px"
              class="pc fs-2 bold d-flex flex-column align-items-center justify-content-cetner">
              <div>
                2
              </div>
            </span>
            <h2 class="text-white">
              انشئ ملف اعمالك
            </h2>
          </div>

        </div>
        <div class="row mt-5">
          <div class="col-5 btn-customer p-5 d-flex flex-column gap-5 align-items-center justify-content-center">
            <span
              style="background-color: #fff; padding:5px; border-radius: 50%; width: 40px; height: 40px; line-height: 30px"
              class="pc fs-2 bold d-flex flex-column align-items-center justify-content-cetner">
              <div>
                3
              </div>
            </span>
            <h2 class="text-white">
              تصفح المهام المطلوبه
            </h2>
          </div>
          <div class="col-2 d-flex pc align-items-center justify-content-center">
            <h2>
              او
            </h2>
          </div>
          <div class="col-5 btn-customer p-5 d-flex flex-column gap-5 align-items-center justify-content-center">
            <span
              style="background-color: #fff; padding:5px; border-radius: 50%; width: 40px; height: 40px; line-height: 30px"
              class="pc fs-2 bold d-flex flex-column align-items-center justify-content-cetner">
              <div>
                3
              </div>
            </span>
            <h2 class="text-white">
              اعرض خدماتك و مهاراتك
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoxEvent from "./box-svg";
export default {
  name: "section-how-offer-service",
  components: {
    BoxEvent
  },
  data: () => ({
    colors: ["#1FB9B3", "orange"],
    items: [{ title: "" }]
  })
};
</script>

<style></style>