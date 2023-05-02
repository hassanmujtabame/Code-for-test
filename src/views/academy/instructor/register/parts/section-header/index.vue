<template>
  <div class="section-header-register-instructor position-relative">
    <div class="position-absolute anim-hwo-ar-you">
                <img :src="`${publicPath}assets/svg/arabsstock_P34769_large1.svg`"  height="612" alt="">
            </div>
            <div class="section-header-register-instructor__wrapper px-5" >
            <h1 class="section-header-register-instructor__title">شاركي خبراتك ومهاراتك</h1>
            <p class="section-header-register-instructor__text"></p>
            <a href="#" @click="scollToElement('regestr',$event)" class="btn-go-register m-5">
                أنضمي كمدربة
            </a>
        </div>
            <div class="star position-absolute">
                <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="">
            </div>
            <div class="square position-absolute">
                <img class="landing" :src="`${publicPath}assets/img/square.png`" alt="">
            </div>
            <div class="star-two position-absolute">
                <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="">
            </div>
            <div class="star-big position-absolute">
                <img class="landing" :src="`${publicPath}assets/svg/star-big.svg`" alt="">
            </div>
        </div>
</template>

<script>
export default {
 name:'section-header'
}
</script>
<style scoped>
.btn-go-register{
    border: 1px solid #FFFFFF;
    box-shadow: 0px 4px 15px 1px rgb(0 0 0 / 25%);
    border-radius: 8px;
    background: transparent;
    padding: 10px 25px;
    color: white;
}

.section-header-register-instructor{
    height:612px;
    display: flex;
    justify-content: start;
    align-items: center;
}
.section-header-register-instructor__wrapper{
    position: relative;
    z-index: 2;
   
}
.section-header-register-instructor__title{
    font-style: normal;
font-weight: 600;
font-size: 56px;
line-height: 72px;
/* identical to box height, or 129% */

text-align: center;
text-transform: capitalize;

color: #FFFFFF;

/* بب */

text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.27);
}
.section-header-register-instructor__text{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */

text-align: right;
text-transform: capitalize;

color: #FFFFFF;

/* ف */

text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.27);
}
</style>