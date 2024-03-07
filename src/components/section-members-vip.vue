<template>
  <div class="container my-5">
    <div class="row my-5">
      <div class="col-md-4 my-5 col-12">
        <div class="d-flex flex-column">
          <h1 class="m-0" style="font-size: 40px">الاعضاء</h1>
          <h2 style="font-size: 62px" class="position-relative m-0">
            المؤثرين
            <img
              style="width: 220px; bottom: -23px; right: 0px"
              class="position-absolute"
              src="../assets/img/network/Vector 14.png"
              alt=""
            />
          </h2>
          <p class="my-5" style="color: #888">
            هل تسعى للعثور على أعضاء مميزين للغاية في عالم النبلاء والسفراء؟ إذا
            كانت الإجابة بنعم، فنحن ندعوك بإخلاص لاكتشاف أفخر الأعضاء لدينا
            الذين يتمتعون بأرقى المهارات والخبرات في مجموعة متنوعة من المجالات.
            يمكنك الاطلاع على أعضائنا النبلاء والسفراء والتعرف على تميزهم
            وتألقهم في مجالاتهم المختلفة.
          </p>
        </div>
      </div>
      <div class="col-md-8 my-5 col-12">
        <d-swiper
          v-if="!loading"
          :slides-per-view="2"
          :space-between="20"
          is-auto
          :items="items"
        >
          <template v-slot:default="{ item }">
            <div class="">
              <div class="">
                <div class="position-relative">
                  <img class="img-fluid" :src="item.img" height="165px" />
                  <div
                    style="
                      border-radius: 80px;
                      padding-top: 14px;
                      height: 42px;
                      width: 70px;
                      top: 10px;
                      left: 10px;
                      background-color: rgb(242, 99, 28);
                    "
                    class="position-absolute text-center d-flex justify-content-center align-items-center"
                  >
                    <p class="text-light">
                      {{ item.role }}
                    </p>
                  </div>
                </div>
                <div class="workspace-card__content">
                  <!-- <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <h6 class="workspace-card__title">{{ item.title }}</h6>
                  </div> -->
                  <!-- <p
                    class="text-four-lines workspace-card__description"
                    v-html="item.description"
                  ></p> -->
                </div>

                <!-- <div
                  class="d-flex align-items-center justify-content-between px-3 pb-3"
                >
                 <router-link class="router-link" style="width: 100px">
                    <button
                      class="btn btn-main"
                      style="
                        width: 100px;
                        height: 30px;
                        font-size: 12px;
                        padding: 5px;
                      "
                    >
                      عرض التفاصيل
                    </button>
                  </router-link> 
                </div> -->
              </div>
            </div>
          </template>
        </d-swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { img: require("../assets/img/member/image.png"), role: "اميرة" },
        { img: require("../assets/img/member/image (1).png"), role: "سفيرة" },
      ],
    };
  },
};
</script>

<style></style>
