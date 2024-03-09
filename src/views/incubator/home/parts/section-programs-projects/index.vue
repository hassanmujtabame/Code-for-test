<template>
  <div style="background-color: #f6f8f9" class="container-fluid p-5">
    <div class="container-fluid">
      <h2 class="home-section-title text-center">برامج و مشروعات الحاضنة</h2>
      <div class="row">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4"
        >
          <CardItem :title="item.title" :image="item.img" :p="item.p" />
        </div>
        <!-- <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
          <CardItem
            title="محفزات المحتضنات"
            :image="`${publicPath}assets/img/h3.png`"
          >
            نقدم المحفزات التقنية والمالية والتسويقية والاستشارية
            للمحتضنات</CardItem
          >
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
          <CardItem
            title="نموذج أولي"
            :image="`${publicPath}assets/img/h4.png`"
          >
            إنتاج النموذج الأولي المقدم للمنتج أو الخدمة لكل مشروع
          </CardItem>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
          <CardItem
            title="بناء علامات تجارية"
            :image="`${publicPath}assets/img/hig/h1.png`"
          >
            تصميم شعار وعلامة تجارية سعودية مميزة لماركتك، بجودة عالمية
          </CardItem>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
          <CardItem
            title="التعليم والتدريب"
            :image="`${publicPath}assets/img/h6.png`"
          >
            تقدم رياديات برنامجا تدريبا مكثفا تتراوح مدته 96 ساعة في 24 يومًا
            خلال برنامج متكامل مــــــــن خلال فترة الاحتضــــــان
          </CardItem>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
          <CardItem
            title="التمويل والاستثمار"
            :image="`${publicPath}assets/img/h 6.png`"
          >
            البحث عن أفضل البدائل المتاحة لكل خريجات الحاضنة، سواء التمويل من
            الجهات الممولة المعتمدة أو المستثمرين الأفراد أو الشركات الاستثمارية
            أو البحث عن شركاء
          </CardItem>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
          <CardItem title="الدراسات" :image="`${publicPath}assets/img/h7.png`">
            مساعدة الريادية على تعلم وعمل العديد من المهارات الريادية، ومنها
            نموذج العمل التجاري، خطة العمل، دراسة الجدوى، والخطة التسويقية و
            الماليــــــــــة
          </CardItem>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
          <CardItem
            title="لقاءات الهامية"
            :image="`${publicPath}assets/img/h8.png`"
          >
            استضافة العديد من الشخصيات الالهامية والريادية على مدار الأسبوع خلال
            فترة الاحتضان
          </CardItem>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from "./card-item.vue";
export default {
  name: "section-programs-projects",
  components: {
    CardItem,
  },
  data() {
    return {
      items: [
        {
          img: require("../../../../../assets/img/hig/h5.png"),
          title: `بناء علامات تجارية
`,
          p: `تصميم شعار وعلامة تجارية سعودية مميزة لماركتك، بجودة عالمية

`,
        },
        {
          img: require("../../../../../assets/img/hig/h4.png"),
          title: `نموذج أولي

`,
          p: `إنتاج النموذج الأولي المقدم للمنتج أو الخدمة لكل مشروع



`,
        },
        {
          img: require("../../../../../assets/img/hig/h3.png"),
          title: `محفزات المحتضنات

`,
          p: `نقدم المحفزات التقنية والمالية والتسويقية والاستشارية للمحتضنات




`,
        },
        {
          img: require("../../../../../assets/img/hig/h1.png"),
          title: `الاستشارات والإرشاد


`,
          p: `أكثر من 12 جلسة استشارية وإرشادية خلال برنامج الاحتضان





`,
        },
        {
          img: require("../../../../../assets/img/hig/h8.png"),
          title: `لقاءات الهامية

`,
          p: `استضافة العديد من الشخصيات الالهامية والريادية على مدار الأسبوع خلال فترة الاحتضان



`,
        },

        {
          img: require("../../../../../assets/img/hig/h7.png"),
          title: `الدراسات
`,
          p: `مساعدة الريادية على تعلم وعمل العديد من المهارات الريادية، ومنها نموذج العمل التجاري، خطة العمل، دراسة الجدوى، والخطة التسويقية و الماليــــــــــة



`,
        },
        {
          img: require("../../../../../assets/img/hig/h 6.png"),
          title: `التمويل والاستثمار

`,
          p: `البحث عن أفضل البدائل المتاحة لكل خريجات الحاضنة، سواء التمويل من الجهات الممولة المعتمدة أو المستثمرين الأفراد أو الشركات الاستثمارية أو البحث عن شركاء



`,
        },
        {
          img: require("../../../../../assets/img/hig/h2.png"),
          title: `التعليم والتدريب

`,
          p: `تقدم رياديات برنامجا تدريبا مكثفا تتراوح مدته 96 ساعة في 24 يومًا خلال برنامج متكامل مــــــــن خلال فترة الاحتضــــــان



`,
        },
      ],
    };
  },
};
</script>

<style></style>
