<template>
  <div class="container mt-5">
    <h2 class="home-section-title my-5 text-center">
      مزايا أكاديمية رياديــــــات
    </h2>
    <div class="row min-riadiat bg academy px-3 rounded-4">
      <div class="col-md-3 mt-2" v-for="(item, index) in items" :key="index">
        <router-link class="router-link" :to="getRouteLocale(item.to)">
          <CardItem
            :src="item.src"
            :title="item.title"
            :description="item.description"
          >
          </CardItem>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import CardItem from "./card-item";
export default {
  name: "academy-helps-you",
  computed: {
    items() {
      return [
        {
          to: "academy-courses",
          title: "دورات في المقرات",
          description:
            "نقدم دورات مميزة مع افضل المدربين في كل المجالات في المملكة والوطن العربي , مما يسمح لك بالتفاعل الحقيقي مع المدربين وزملائك في الدورة",
          src: `${this.publicPath}assets/img/location.png`,
        },
        {
          to: "academy-courses",
          title: "دورات  مسجلة",
          description:
            "تحتوى اكاديمية رياديات على دورات تعليمية مسجلة مسبقا تكون متاحة لك فور التسجيل لتشاهدها في أي وقت",
          src: `${this.publicPath}assets/img/fi_686317.png`,
        },
        {
          to: "academy-courses",
          title: "الدعم و المساعدة",
          description:
            "سنكون معك دائما خطوة بخطوة لمساعددتك على اكمال مساراتك وتقديم الدعم والاجابة عى الاستفسارات",

          src: `${this.publicPath}assets/img/fi_879757.png`,
        },
        {
          to: "academy-courses",
          title: "دورات لايف",
          description:
            "يقدم مدربين دورات لايف تفاعلية مما يساعدك على التفاعل مع المدرب بشكل اكبر ",

          src: `${this.publicPath}assets/img/fi_1435715.png`,
        },
      ];
    },
  },
  components: {
    CardItem,
  },
};
</script>
<style scoped>
.container {
  padding-block-end: 30px;
  padding-inline: 100px;
  background-image: url("/public/assets/img/Icons.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: auto 100%;
}
.home-section-title {
  font-family: Cairo;
  font-size: 56px;
  font-weight: 700;
  line-height: 104.94px;
  color: #2cb7b3;
}
.bg {
  background: linear-gradient(to bottom, #def7f6, #ffffff) !important;
}
</style>
