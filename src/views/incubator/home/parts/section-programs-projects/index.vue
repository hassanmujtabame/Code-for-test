<template>
  <div style="background-color:#F6F8F9;" class="container mt-5 p-5">

<div  class="container">
  <h2 class="home-section-title text-center">
    برامج و مشروعات الحاضنة
  </h2>
  <div class="row incobter">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
        <CardItem 
        title="الاستشارات والإرشاد"
        :image="`${publicPath}assets/img/h1.png`"
        >
        أكثر من 12 جلسة استشارية وإرشادية خلال برنامج الاحتضان
    </CardItem>  
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4 ">
        <CardItem 
        title="محفزات المحتضنات"
        :image="`${publicPath}assets/img/h3.png`"
        >
        نقدم المحفزات التقنية والمالية والتسويقية والاستشارية للمحتضنات</CardItem>
        

      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4 ">
        <CardItem 
        title="نموذج أولي"
        :image="`${publicPath}assets/img/h4.png`"
        >
        إنتاج النموذج الأولي المقدم للمنتج أو الخدمة لكل مشروع
    </CardItem>
          

      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4 ">
        <CardItem 
        title="بناء علامات تجارية"
        :image="`${publicPath}assets/img/h5.png`"
        >
        تصميم شعار وعلامة تجارية سعودية مميزة لماركتك، بجودة عالمية
    </CardItem>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4 ">
        <CardItem 
        title="التعليم والتدريب"
        :image="`${publicPath}assets/img/h6.png`"
        >
        تقدم رياديات برنامجا تدريبا مكثفا تتراوح مدته 96 ساعة في 24 يومًا خلال برنامج متكامل مــــــــن خلال
 فترة الاحتضــــــان
    </CardItem>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4 ">
        <CardItem 
        title="التمويل والاستثمار"
        :image="`${publicPath}assets/img/h 6.png`"
        >
        البحث عن أفضل البدائل المتاحة لكل خريجات الحاضنة، سواء التمويل من الجهات الممولة المعتمدة أو المستثمرين الأفراد أو الشركات الاستثمارية أو البحث عن شركاء
    </CardItem>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4 ">
        <CardItem 
        title="الدراسات"
        :image="`${publicPath}assets/img/h7.png`"
        >
        مساعدة الريادية على تعلم وعمل العديد من المهارات الريادية، ومنها نموذج العمل التجاري، خطة العمل، دراسة الجدوى، والخطة التسويقية
 و الماليــــــــــة
    </CardItem>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4 ">
        <CardItem 
        title="لقاءات الهامية"
        :image="`${publicPath}assets/img/h8.png`"
        >
        استضافة العديد من الشخصيات الالهامية والريادية على مدار الأسبوع خلال فترة الاحتضان
    </CardItem>
         

      </div>


  </div>

</div>
</div>
</template>

<script>
import CardItem from './card-item.vue';
export default {
 name:'section-programs-projects',
 components:{
    CardItem
 }
}
</script>

<style>

</style>