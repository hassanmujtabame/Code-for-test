<template>
  <div class="main-top py-2  position-relative" :class="{'px-5':!isMobile,'px-3':isMobile}">
        <div class="row align-items-center text-center m-auto">
            <div class="col-md-6 mt-2">
                <div class="img-screen">

                    <img class="img-fluid" src="/assets/img/mobile-screen 1.png" alt="">
                </div>

            </div>
            <div class="col-md-6  mt-4">
                <h2 class="text-white" :class="{'fs-1':!isMobile,'fs-6':isMobile}">
                    أكملي دوراتك، مراسلاتك وشاركي فـــــــي الشبكة والحاضنة من خلال تطبيق رياديــــــات


                </h2>
                <div class="mt-4">
                    <a href="">
                        <img :class="{'h-40px':isMobile}" src="/assets/img/34-349265_app-store-google-play-svg 3.png" alt="">
                    </a>
                    <a href="">
                        <img :class="{'h-40px':isMobile}" src="/assets/img/34-349265_app-store-google-play-svg 1.png" alt="">
                    </a>
                </div>

            </div>

        </div>
   
        <div class="star position-absolute" >
                <img  class="landing"  src="/assets/svg/start.svg" alt="">
        </div>
        <div class="square position-absolute" >
            <img class="landing"  src="/assets/svg/square.svg" alt="">
         </div>
         <div class="star-two position-absolute" >
            <img class="landing"  src="/assets/svg/start.svg" alt="">
         </div>
        <div class="star-big position-absolute" >
            <img class="landing"  src="/assets/svg/star-big.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name:'section-continue-learning'
}
</script>

<style>

</style>