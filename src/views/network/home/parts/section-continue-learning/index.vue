<template>
  <div class="main-top py-2 px-5 position-relative mt-5">
    <div class="row align-items-center text-center m-auto">
      <div class="col-md-6 mt-2">
        <div class="img-screen">
          <img
            class="img-fluid"
            :src="`${publicPath}assets/img/mobile-screen 1.png`"
            alt=""
          />
        </div>
      </div>
      <div class="col-md-6 mt-4">
        <h2 class="home-section-title text-white">
          أكملي دوراتك، مراسلاتك وشاركي فـــــــي الشبكة والحاضنة من خلال تطبيق
          رياديــــــات
        </h2>
        <div class="mt-4">
          <a href="">
            <img
              :src="`${publicPath}assets/img/34-349265_app-store-google-play-svg 3.png`"
              alt=""
            />
          </a>
          <a href="">
            <img
              :src="`${publicPath}assets/img/34-349265_app-store-google-play-svg 1.png`"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>

    <div class="star position-absolute">
      <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="" />
    </div>
    <div class="square position-absolute">
      <img class="landing" :src="`${publicPath}assets/svg/square.svg`" alt="" />
    </div>
    <div class="star-two position-absolute">
      <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="" />
    </div>
    <div class="star-big position-absolute">
      <img
        class="landing"
        :src="`${publicPath}assets/svg/star-big.svg`"
        alt=""
      />
    </div>
  </div>
  <!-- <div class="main-top py-2 px-5 position-relative mt-5">
        <div class="row align-items-center text-center m-auto">
            <div class="col-md-6 mt-2">
                <div class="img-screen">

                    <img class="img-fluid" :src="`${publicPath}assets/img/mobile-screen 1.png`" alt="">
                </div>

            </div>
            <div class="col-md-6  mt-4">
                <h2 class="home-section-title text-white">
                    أكملي دوراتك، مراسلاتك وشاركي فـــــــي الشبكة والحاضنة من خلال تطبيق رياديــــــات


                </h2>
                <div class="mt-4">
                    <a href="">
                        <img :src="`${publicPath}assets/img/34-349265_app-store-google-play-svg 3.png`" alt="">
                    </a>
                    <a href="">
                        <img :src="`${publicPath}assets/img/34-349265_app-store-google-play-svg 1.png`" alt="">
                    </a>
                </div>

            </div>

        </div>

        <div class="star position-absolute">
            <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="">
        </div>
        <div class="square position-absolute">
            <img class="landing" :src="`${publicPath}assets/svg/square.svg`" alt="">
        </div>
        <div class="star-two position-absolute">
            <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="">
        </div>
        <div class="star-big position-absolute">
            <img class="landing" :src="`${publicPath}assets/svg/star-big.svg`" alt="">
        </div>
    </div> -->
  <!-- <div class="main-top py-2 px-5 position-relative mt-5">
        <div class="row align-items-center text-center m-auto">
            <div class="col-md-6 mt-2">
                <div class="img-screen">

                    <img class="img-fluid" :src="`${publicPath}assets/img/mobile-screen 1.png`" alt="">
                </div>

            </div>
            <div class="col-md-6  mt-4">
                <h2 class="home-section-title text-white">
                    أكملي دوراتك، مراسلاتك وشاركي فـــــــي الشبكة والحاضنة من خلال تطبيق رياديــــــات


                </h2>
                <div class="mt-4">
                    <a href="">
                        <img :src="`${publicPath}assets/img/34-349265_app-store-google-play-svg 3.png`" alt="">
                    </a>
                    <a href="">
                        <img :src="`${publicPath}assets/img/34-349265_app-store-google-play-svg 1.png`" alt="">
                    </a>
                </div>

            </div>

        </div>

        <div class="star position-absolute">
            <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="">
        </div>
        <div class="square position-absolute">
            <img class="landing" :src="`${publicPath}assets/svg/square.svg`" alt="">
        </div>
        <div class="star-two position-absolute">
            <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="">
        </div>
        <div class="star-big position-absolute">
            <img class="landing" :src="`${publicPath}assets/svg/star-big.svg`" alt="">
        </div>
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4127 15.8781L15.1377 18.8781C15.7471 19.2625 16.4971 18.6906 16.319 17.9875L14.9502 12.6062C14.9132 12.4571 14.9191 12.3005 14.9672 12.1545C15.0153 12.0086 15.1037 11.8792 15.2221 11.7812L19.4596 8.24687C20.0127 7.78749 19.7315 6.85937 19.0096 6.81249L13.4784 6.45624C13.3274 6.44746 13.1823 6.39491 13.0608 6.305C12.9393 6.2151 12.8466 6.09174 12.794 5.94999L10.7315 0.756243C10.6769 0.606152 10.5774 0.476496 10.4466 0.384876C10.3158 0.293256 10.16 0.24411 10.0002 0.24411C9.84053 0.24411 9.68468 0.293256 9.55386 0.384876C9.42305 0.476496 9.32359 0.606152 9.26899 0.756243L7.20649 5.94999C7.15392 6.09174 7.06121 6.2151 6.93967 6.305C6.81813 6.39491 6.67304 6.44746 6.52212 6.45624L0.990865 6.81249C0.26899 6.85937 -0.0122599 7.78749 0.540865 8.24687L4.77837 11.7812C4.8968 11.8792 4.98516 12.0086 5.03327 12.1545C5.08137 12.3005 5.08725 12.4571 5.05024 12.6062L3.78462 17.5937C3.56899 18.4375 4.46899 19.1219 5.19087 18.6625L9.58774 15.8781C9.71104 15.7997 9.85413 15.7581 10.0002 15.7581C10.1464 15.7581 10.2894 15.7997 10.4127 15.8781Z" fill="#FFC27A"/>
</svg>
<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4127 15.8781L15.1377 18.8781C15.7471 19.2625 16.4971 18.6906 16.319 17.9875L14.9502 12.6062C14.9132 12.4571 14.9191 12.3005 14.9672 12.1545C15.0153 12.0086 15.1037 11.8792 15.2221 11.7812L19.4596 8.24687C20.0127 7.78749 19.7315 6.85937 19.0096 6.81249L13.4784 6.45624C13.3274 6.44746 13.1823 6.39491 13.0608 6.305C12.9393 6.2151 12.8466 6.09174 12.794 5.94999L10.7315 0.756243C10.6769 0.606152 10.5774 0.476496 10.4466 0.384876C10.3158 0.293256 10.16 0.24411 10.0002 0.24411C9.84053 0.24411 9.68468 0.293256 9.55386 0.384876C9.42305 0.476496 9.32359 0.606152 9.26899 0.756243L7.20649 5.94999C7.15392 6.09174 7.06121 6.2151 6.93967 6.305C6.81813 6.39491 6.67304 6.44746 6.52212 6.45624L0.990865 6.81249C0.26899 6.85937 -0.0122599 7.78749 0.540865 8.24687L4.77837 11.7812C4.8968 11.8792 4.98516 12.0086 5.03327 12.1545C5.08137 12.3005 5.08725 12.4571 5.05024 12.6062L3.78462 17.5937C3.56899 18.4375 4.46899 19.1219 5.19087 18.6625L9.58774 15.8781C9.71104 15.7997 9.85413 15.7581 10.0002 15.7581C10.1464 15.7581 10.2894 15.7997 10.4127 15.8781Z" fill="#FFC27A"/>
</svg>
<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4127 15.8781L15.1377 18.8781C15.7471 19.2625 16.4971 18.6906 16.319 17.9875L14.9502 12.6062C14.9132 12.4571 14.9191 12.3005 14.9672 12.1545C15.0153 12.0086 15.1037 11.8792 15.2221 11.7812L19.4596 8.24687C20.0127 7.78749 19.7315 6.85937 19.0096 6.81249L13.4784 6.45624C13.3274 6.44746 13.1823 6.39491 13.0608 6.305C12.9393 6.2151 12.8466 6.09174 12.794 5.94999L10.7315 0.756243C10.6769 0.606152 10.5774 0.476496 10.4466 0.384876C10.3158 0.293256 10.16 0.24411 10.0002 0.24411C9.84053 0.24411 9.68468 0.293256 9.55386 0.384876C9.42305 0.476496 9.32359 0.606152 9.26899 0.756243L7.20649 5.94999C7.15392 6.09174 7.06121 6.2151 6.93967 6.305C6.81813 6.39491 6.67304 6.44746 6.52212 6.45624L0.990865 6.81249C0.26899 6.85937 -0.0122599 7.78749 0.540865 8.24687L4.77837 11.7812C4.8968 11.8792 4.98516 12.0086 5.03327 12.1545C5.08137 12.3005 5.08725 12.4571 5.05024 12.6062L3.78462 17.5937C3.56899 18.4375 4.46899 19.1219 5.19087 18.6625L9.58774 15.8781C9.71104 15.7997 9.85413 15.7581 10.0002 15.7581C10.1464 15.7581 10.2894 15.7997 10.4127 15.8781Z" fill="#FFC27A"/>
</svg>
<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4127 15.8781L15.1377 18.8781C15.7471 19.2625 16.4971 18.6906 16.319 17.9875L14.9502 12.6062C14.9132 12.4571 14.9191 12.3005 14.9672 12.1545C15.0153 12.0086 15.1037 11.8792 15.2221 11.7812L19.4596 8.24687C20.0127 7.78749 19.7315 6.85937 19.0096 6.81249L13.4784 6.45624C13.3274 6.44746 13.1823 6.39491 13.0608 6.305C12.9393 6.2151 12.8466 6.09174 12.794 5.94999L10.7315 0.756243C10.6769 0.606152 10.5774 0.476496 10.4466 0.384876C10.3158 0.293256 10.16 0.24411 10.0002 0.24411C9.84053 0.24411 9.68468 0.293256 9.55386 0.384876C9.42305 0.476496 9.32359 0.606152 9.26899 0.756243L7.20649 5.94999C7.15392 6.09174 7.06121 6.2151 6.93967 6.305C6.81813 6.39491 6.67304 6.44746 6.52212 6.45624L0.990865 6.81249C0.26899 6.85937 -0.0122599 7.78749 0.540865 8.24687L4.77837 11.7812C4.8968 11.8792 4.98516 12.0086 5.03327 12.1545C5.08137 12.3005 5.08725 12.4571 5.05024 12.6062L3.78462 17.5937C3.56899 18.4375 4.46899 19.1219 5.19087 18.6625L9.58774 15.8781C9.71104 15.7997 9.85413 15.7581 10.0002 15.7581C10.1464 15.7581 10.2894 15.7997 10.4127 15.8781Z" fill="#FFC27A"/>
</svg>

    </div> -->
</template>

<script>
export default {
  name: "section-continue-learning",
};
</script>

<style></style>
