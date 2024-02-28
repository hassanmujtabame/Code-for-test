<template>
  <div class="mt-5 p-5">
    <h2 class="text-center">
      <span style="color: #ffcb00"> مزايا التسويق </span>

      بالعمولة من خلال رياديات
    </h2>
    <div class="container-fluid">
      <div class="row min-riadiat network">
        <div class="col-md-3 mt-2">
          <div class="box border d-flex gap-4 align-items-center rounded-2">
            <div>
              <img
                :src="`${publicPath}assets/svg/ads-statics-chat.svg`"
                alt=""
              />
            </div>
            <div>التسويق بالروابط وتتابعها باكواد</div>
          </div>
        </div>
        <div class="col-md-3 mt-2">
          <div class="box border d-flex align-items-center gap-4 rounded-2">
            <div>
              <img :src="`${publicPath}assets/svg/money-bills.svg`" alt="" />
            </div>
            <div>أعلى نسبة عمولة تصــــــل الى 20%</div>
          </div>
        </div>
        <div class="col-md-3 mt-2">
          <div class="box border d-flex align-items-center gap-4 rounded-2">
            <div>
              <img :src="`${publicPath}assets/svg/watch-course.svg`" alt="" />
            </div>
            <div>
              دورات متــــــخصصة ومجانية للمسوقين المعتمديـــــــــــــــن
            </div>
          </div>
        </div>
        <div class="col-md-3 mt-2">
          <div class="box border d-flex align-items-center gap-4 rounded-2">
            <div>
              <img :src="`${publicPath}assets/svg/earn-money.svg`" alt="" />
            </div>
            <div>سهولة الربــح وزيادة الدخــل</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-3",
};
</script>

<style></style>
