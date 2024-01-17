<template>
  <div class="p-0 m-0 sec-one" style="background: #fff">
    <div class="container" style="position:relative" :class="[isMobile ? 'p-3' : '']">
      <div class="row pb-5 justify-content-between">
        <div class="col-12 col-md-4">
          <h1 class="header-title-page text-black">
            <!-- {{ $t('page-home-title') }} -->
            <h1 class="header-title-page select-title-main text-black" style="display: inline;">
              رياديات
              <img src="@/assets/img/new/main-page/header/Vector 14.png" alt="">
            </h1>

            شبكة نسائية في جميع أنحاء العالم
            <br>

          </h1>
          <p class="header-desc-page text-black">
            طموحة و تسعين لتحقيق حلمك و شغفك ؟
            <br>
            شبكة رياديات بتساعدك في مشروعك من الالف الى الياء
            <!-- {{ $t('page-home-desc') }} -->
          </p>
          <div class v-if="!isAuthenticated">
            <button class="px-3 btn-custmer shadow"
              style="background-color: #ff5722 !important; border: none !important; "
              @click="router_push('register')">انضمي الان</button>
            <button class="px-3 btn-custmer-w shadow mx-3" @click="router_push('login')">سجلي دخولك</button>

            <!-- <router-link :to="getRouteLocale('login')">
              <span class="px-3 btn-custmer shadow mx-3" @click="navigate">سجلي دخولك</span>
            </router-link> -->
          </div>
        </div>
        <div v-if="!isMobile" style="position: relative " class="col-6 d-flex flex-column">
          <div class="d-flex align-items-center">
            <img style=" 
            object-fit: contain; width: 14rem;" src="@/assets/img/new/main-page/header/Student.png"
              alt="home-section-background" />
              <div class="d-flex flex-column align-items-start" >
                <p class="p-2" style="background: #607D8B;
                  height: fit-content;
                  color: #fff;
                  border-radius: 10px 10px 0px 10px;
                  ">
                  {{ animatedText }}
                </p>
                <p v-if="showSecondText" class="p-2" style="background: #607D8B;
                height: fit-content;
                color: #fff;
                border-radius: 10px 10px 0px 10px;
                ">
                  {{ animatedSecondText }}
                </p>
              </div>
          </div>
          <div style="align-self: end;" class="d-flex align-items-center">
            <div class="d-flex flex-column align-items-end">
              <p v-if="showThirdText" class="p-2" style="background: #2196F3;
                          height: fit-content;
                          color: #fff;
                          border-radius: 10px 10px 10px 0px;
                          ">
                {{ animatedThirdText }}
              </p>
              <p v-if="showFourthText" class="p-2" style="background: #2196F3;
                        height: fit-content;
                        color: #fff;
                        border-radius: 10px 10px 10px 0px;
                        ">
                {{ animatedFourthText }}
              </p>
            </div>
            <img style="  height: auto;
                      object-fit: contain; width: 14rem;"
              src="@/assets/img/new/main-page/header/Teacher.png" alt="home-section-background" />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "section-header",
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/authenticated',
    }),
    textRight() {
      return `${this.currentIndex}em`;
    },
    secondTextLeft() {
      return `${this.secondTextIndex}em`;
    },

  },
  data() {
    return {
      originalText: "  مرحبا",
      secondText: "أنا ابحث عن بعض المساعدة فى بدء عملى الخاص",
      animatedText: "",
      animatedSecondText: "",
      currentIndex: 0,
      secondTextIndex: 0,
      animationSpeed: 70, // Adjust the animation speed here
      showSecondText: false,
      thirdText: "انه لمن دواعى سرورنا مساعدتك.",
      fourthText: "ما هي نوع الاعمال التى تفكرين فى بدءها؟",
      animatedThirdText: "",
      animatedFourthText: "",
      thirdTextIndex: 0,
      fourthTextIndex: 0,
      showThirdText: false,
      showFourthText: false,
    };
  },
  methods: {
    animateText() {
      if (this.currentIndex <= this.originalText.length) {
        this.animatedText = this.originalText.substr(0, this.currentIndex);
        this.currentIndex++;
        setTimeout(this.animateText, this.animationSpeed);
      } else {
        // Animation of the first text is complete
        this.showSecondText = true;
        this.animateSecondText();
      }
    },
    animateSecondText() {
      if (this.secondTextIndex <= this.secondText.length) {
        this.animatedSecondText = this.secondText.substr(0, this.secondTextIndex);
        this.secondTextIndex++;
        setTimeout(this.animateSecondText, this.animationSpeed);
      } else {
        setTimeout(() => {
          this.showThirdText = true;
          this.animateThirdText();
        }, 1000);
      }
    },
    animateThirdText() {
      if (this.thirdTextIndex <= this.thirdText.length) {
        this.animatedThirdText = this.thirdText.substr(0, this.thirdTextIndex);
        this.thirdTextIndex++;
        setTimeout(this.animateThirdText, this.animationSpeed);
      } else {
        this.showFourthText = true;
        this.animateFourthText();
      }
    },

    animateFourthText() {
      if (this.fourthTextIndex <= this.fourthText.length) {
        this.animatedFourthText = this.fourthText.substr(0, this.fourthTextIndex);
        this.fourthTextIndex++;
        setTimeout(this.animateFourthText, this.animationSpeed);
      }
    },
  },
  mounted() {
    this.animateText();
  }
}
</script>

<style>
.select-title-main {
  position: relative;
}

.select-title-main img {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0px;
  width: 100%;
}
</style>