<template>
  <div class="container my-5">
    <h2 class="home-section-title">تصفح الخدمات حسب التصنيف</h2>
    <div class="d-flex justify-content-around flex-wrap search-service mt-4">
      <div v-for="service in services" :key="service.id" >
        <card-box
          :image-src="service.image"
          :title="service.title"
          :content="service.description"
          :link-to="service.link"
        ></card-box>
      </div>
    </div>
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
          image: `${this.publicPath}assets/svg/carbon_ibm-security-services.svg`,
          title: "خدمات عن بعد",
          description:"هي خدمات تقدم عن بعد من أي مكان تفضله مثل ( تصميم الهوية البصرية - تصميم لوجو - البرمجة - كتابة المحتوى - التصميم الداخلي - إلخ...)",
          link: this.getRouteLocale(
            "service-provider-ready-services",
            {},
            { state: "online" }
          )
        },
        {
          id: 2,
          image: `${this.publicPath}assets/svg/Group123456.svg`,
          title: "خدمات حضورية",
          description:"هي خدمات تقدم على أرض الواقع مثل : ( تصميم كوشة - تصميم أزياء- ميك اب ارتست- إلخ..)",
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
</style>
  