<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-6">
        <div
          class="d-flex justify-content-center align-items-center justify-content-md-start align-items-md-start"
        >
          <div class="bg-back position-relative">
            <img
              class="img-fluid"
              src="@/assets/img/new/network/Group 138.png"
              alt="about image"
            />
          </div>
        </div>
      </div>
      <div class="text col-12 col-md-6">
        <h2 class="home-section-title">شبكة رياديات: وسع دائرة معارفك</h2>
        <p class="home-section-text mb-3">
          رياديات شبكة تضم نخبة من رائدات الأعمال والمستثمرات والشركاء، وتهدف
          إلى إلهام وتمكين وجمع رائدات الأعمال معًا على منصة واحدة ليساعد بعضهن
          البعض الآخر على النجاح في أعمالهن. ويمكن من خلالها الحصول على المساعدة
          والتشجيع للدخول في مجال ريادة الأعمال من خلال مجموعة من الخدمات
          والمزايا، وقد صممت لمساعدة رائدات الأعمال على التعلم وزيادة نمو
          أعمالهن والتواصل مع الرياديات
        </p>
        <button
          class="px-5 btn-custmer shadow"
          style="background-color: #ff5722 !important; border: none !important"
          @click="router_push('network-subscribe')"
        >
          انضمي الان
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "grow-your-network",
};
</script>

<style></style>
