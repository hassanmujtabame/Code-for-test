<template>
  <div class="container mt-5">
    <h2 class="home-section-title text-center">تصفح الخدمات حسب التصنيف</h2>
    <b-row class="search-service mt-4">
      <b-col v-for="service in services" :key="service.id" lg="6">
        <card-box
          :image-src="service.image"
          :title="service.title"
          :content="service.description"
          :link-to="service.link"
        ></card-box>
      </b-col>
    </b-row>
  </div>
</template>
  
  <script>
import CardBox from "./CardBox.vue";

export default {
  name: "section-explore-services",
  components: {
    CardBox
  },

  computed: {
    services() {
      return [
        {
          id: 1,
          image: `${this.publicPath}assets/svg/browser.svg`,
          title: "خدمات تقدم اونلاين",
          description:
            "هي خدمات تقدم عن بعد من أي مكان تفضله مثل ( تصميم الهوية البصرية - تصميم لوجو - البرمجة - كتابة المحتوى - التصميم الداخلي - إلخ...)",
          link: this.getRouteLocale(
            "service-provider-ready-services",
            {},
            { state: "online" }
          )
        },
        {
          id: 2,
          image: `${this.publicPath}assets/svg/hand-cog.svg`,
          title: "خدمات تقدم أوفلاين",
          description:
            "هي خدمات تقدم على أرض الواقع مثل: ( تصميم كوشة - تصميم أزياء- ميك اب ارتست- إلخ..)",
          link: this.getRouteLocale(
            "service-provider-ready-services",
            {},
            { state: "offline" }
          )
        }
      ];
    }
  }
};
</script>
  
  <style scoped>
.box .box-tow {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px 10px;
}

.box a {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: justify;
  text-transform: capitalize;
  color: #ffffff;
}
</style>
  