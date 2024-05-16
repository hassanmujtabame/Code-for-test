<template>
  <div class="container my-5 icons-background">
    <h2 class="home-section-title text-center">مزايا أكاديمية رياديات</h2>
    <div class="row min-riadiat academy">
      <div
        v-for="(item, index) in itemsData"
        :key="index"
        class="col-md-3 my-2"
      >
        <CardItem
          :src="item.src"
          :title="item.title"
          :description="item.description"
          :isDark="(index % 2 === 0) ^ (index > 3)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from "./card-item";
export default {
  name: "academy-features",
  data(vm) {
    return {};
  },
  components: {
    CardItem,
  },

  mounted() {
    console.log("vm : ", this);
  },
  computed: {
    itemsData() {
      return [
        {
          title: "أكسب المال",
          description:
            "اربح المال في كل دورة فرديه يقوم فيها أحد بالتسجيل في دورتك ، واحصل على مبالغ شهرية من خلال التحويل البنكي لك",
          src: `${this.publicPath}assets/img/fi_584067.png`,
        },
        {
          title: "إلهام الآخرين ",
          description:
            "ساعد المتدربين في تعلم مهارات جديدة ، وتطوير حياتهم المهنية، واكتشاف هوياتهم من خلال مشاركة خبراتك ومعارفك",
          src: `${this.publicPath}assets/img/fi_1411586.png`,
        },
        {
          title: "منصة إلكترونية",
          description:
            "تتضمن الاحتضان والتدريب والاستشارات في مجتمع مهتم بالمجال ",
          src: `${this.publicPath}assets/img/fi_896530.png`,
        },
        {
          title: "المرونة",
          description:
            "المرونة والتنوع في الدورات بين حضورية والمسجلة ودورات عن بعد",
          src: `${this.publicPath}assets/img/fi_8718268.png`,
        },
        {
          title: "التسويق",
          description: "التسويق من منصة رياديات ومن قبلك للدورة التدريبية",
          src: `${this.publicPath}assets/img/fi_1997928.png`,
        },
        {
          title: "مجتمع متخصص",
          description:
            "برامج مباشرة ومسجلة وحضورية تقدم عن بعد  وفي المقرات من خلال التطبيق والموقع الإلكتروني",
          src: `${this.publicPath}assets/img/fi_4350908.png`,
        },
        {
          title: "برامج مختلفة",
          description:
            "ساعد المتدربين في تعلم مهارات جديدة ، وتطوير حياتهم المهنية، واكتشاف هوياتهم من خلال مشاركة خبراتك ومعارفك",

          src: `${this.publicPath}assets/img/fi_2853364.png`,
        },
        {
          title: "الاستشارات",
          description: "فرص انضمامك كمستشارة في رياديات. ",
          src: `${this.publicPath}assets/img/fi_2300422.png`,
        },
      ];
    },
  },
};
</script>

<style scoped>
.icons-background {
  padding-inline: 48px;
  background-image: url("/src/assets/img/star-Icons.png"),
    url("/src/assets/img/star-Icons.png");
  background-size: auto 100%, auto 100%;
  background-repeat: no-repeat, no-repeat;
  background-position: 0px 0px, 100% 0px;
}
</style>
