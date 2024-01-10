<template>
  <div class="box">
    <div class="box__rect1"></div>
    <div class="box__rect2"></div>
    <div class="box__image">
    <!-- <ImageFace /> -->
    <img src="@/assets/img/new/main-page/new-card.png" alt="">
    </div>
    
  </div>
</template>

<script>
import ImageFace from './image.vue'
export default {
 name:'animation-membership-card',
 components:{
    ImageFace
 }
}
</script>

<style scoped>
.box{
    position:relative;
width:577.99px;
height:455.08px;
left:30px
}
.box__image{
    
    position: absolute;
    left: 2.08%;
    /* right: 6.57%; */
    top: 19px;
    bottom: 3.48%;
    transform: rotate(-4deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: 0.5s ease-in-out;
}
.box__rect1{
    position: absolute;
width: 529.55px;
height: 385.13px;
left: calc(50% - 529.55px/2 - 1.57px);
top: 37.15px;

background: rgba(255, 188, 0, 0.2);
border-radius: 16px;
transform: rotate(-0.47deg);
-webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: 0.5s ease-in-out;
}
.box__rect2{
    position: absolute;
    width: 529.55px;
    height: 385.13px;
    left: calc(53% - 529.55px/2 - 24.22px);
    top: 33.7px;
    background: #FFBC00;
    border-radius: 16px;
    transform: rotate(-8deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: 0.5s ease-in-out;
}
.box:hover .box__rect1{
    left: calc(50% - 529.55px/2 - 6.92px);
    top: 41.2px;
    transform: rotate(-13deg);
}
.box:hover .box__rect2{
    top: 37.7px;
}
.box:hover .box__image{
    top: 13.2px;
}
</style>