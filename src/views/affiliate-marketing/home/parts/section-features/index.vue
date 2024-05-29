<template>
  <div class="mt-5 p-5">
    <h2 class="text-center">مزايا التسويق بالعمولة من خلال رياديات</h2>
    <div class="container">
      <div class="row features-row">
        <div
          class="col-md-3 mt-2 feature-item"
          v-for="(item, i) in features"
          :key="i"
        >
          <div class="feature-img">
            <img width="100%" :src="item.img" alt="" />
          </div>
          <div class="feature-title mt-3">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-3",
  data(vm) {
    return {
      features: [
        {
          img: require("@/assets/img/Frame76467.png"),
          title: "التسويق بالروابط وتتابعها باكواد",
        },
        {
          img: require("@/assets/img/fi_879757.png"),
          title: "أعلى نسبة عمولة تصــــــل الى 20%",
        },
        {
          img: require("@/assets/img/fi_7781407.png"),
          title: "دورات متــــــخصصة ومجانية للمسوقين المعتمدين",
        },
        {
          img: require("@/assets/img/fi_1435715.png"),
          title: "سهولة الربــح وزيادة الدخــل",
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  font-family: Cairo;
  font-size: 48px;
  font-weight: 700;
  line-height: 89.95px;
  color: #424143;
}
.features-row {
  padding: 80px 56px 80px 56px;
  border-radius: 24px;
  background: linear-gradient(180deg, #def7f6 0%, rgba(255, 255, 255, 0) 100%);
}
.feature-item {
  padding-inline-end: 30px;
}
.feature-img {
  width: 32%;
}
.feature-title {
  font-family: Cairo;
  font-size: 24px;
  font-weight: 700;
  line-height: 26.4px;
  color: #2cb7b3;
}
</style>
