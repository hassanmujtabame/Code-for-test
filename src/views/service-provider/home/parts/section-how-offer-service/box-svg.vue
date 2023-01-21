<template>
    <div class="w-100">
                        
                       <!-- icon-->
            <div class="box">
  <div class="">
    <svg :style="selected?{'top':'-2px'}:{}" width="160" height="120" viewBox="0 0 187 143" fill="none" xmlns="http://www.w3.org/2000/svg">
<path slot="" d="M157.524 69.066L111.586 100.81C101.79 107.582 85.8389 107.582 75.976 100.81L29.6657 69.066C24.7077 65.6564 22.2221 61.1734 22.2354 56.7378V63.0518C22.2354 67.5032 24.7077 71.9704 29.6657 75.38L75.976 107.14C85.8389 113.896 101.79 113.896 111.586 107.14L157.591 75.38C162.469 72.0178 164.901 67.6295 164.915 63.2255V56.9114C164.835 61.2997 162.402 65.7037 157.524 69.066Z"
 :fill="myColor"
 />
<g opacity="0.4" filter="url(#filter0_f_5410_77605)">
<path d="M157.419 59.3637C167.281 66.1355 167.335 77.0904 157.525 83.8622L111.587 115.606C101.79 122.378 85.8397 122.378 75.9768 115.606L29.6665 83.8622C19.8037 77.0904 19.7505 66.1355 29.5469 59.3637L75.5648 27.6199C85.3612 20.8481 101.312 20.8481 111.175 27.6199L157.419 59.3637Z"
:fill="myColor"/>
</g>
<path d="M157.284 44.5676C167.147 51.3394 167.2 62.2943 157.39 69.0661L111.452 100.81C101.656 107.582 85.7049 107.582 75.8421 100.81L29.5318 69.0661C19.6689 62.2943 19.6158 51.3394 29.4122 44.5676L75.43 12.8237C85.2264 6.05192 101.177 6.05192 111.04 12.8237L157.284 44.5676Z" fill="#F6F8F9"/>
<component :is="`icon-${level}`" :color="myColor"/>

<defs>
<filter id="filter0_f_5410_77605" x="0.172932" y="0.479572" width="186.738" height="142.267" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="11.0307" result="effect1_foregroundBlur_5410_77605"/>
</filter>
</defs>
</svg>
</div>
  </div>
                        <div  class="progress" :class="{'invisible':isLast}">
                        <div v-if="!isLast" class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="w-100 text-center">
                        <div class="w-75 text" :style="selected?{'color':color}:{}">
                            <slot name="title">
                            التعرف علـــى المنصة وعلى مميزتهــــــــــا
                        </slot>
                        </div>
                        </div>

    </div>
 
</template>

<script>
import IconOne from './icons/r1.vue'
import IconTwo from './icons/r2.vue'
import IconThree from './icons/r3.vue'
import IconFour from './icons/r4.vue'
import IconFive from './icons/r5.vue'
import IconSix from './icons/r6.vue'
export default {
 name:'box-svg',
 components:{
    'icon-1':IconOne,
    'icon-2':IconTwo,
    'icon-3':IconThree,
    'icon-4':IconFour,
    'icon-5':IconFive,
    'icon-6':IconSix,
    
 },
 props:{
    level:{
        type:Number,
        default:1
    },
    hideIcon:{
        type:Boolean,
        default:false
    },
    color:{
        type:String,
        default:'#979797'
    },
    isLast:{
        type:Boolean,
        default:false
    }
 },
 data:()=>({
    selected:false,
    timeout: null

 })
,
computed:{
    myColor(){
        return this.selected ? this.color : '#979797'
    }
},
mounted(){
 this.startTime()
},
methods:{
  startTime(){
    this.timeout = setTimeout(()=>{
        this.selected = true;
        this.startTime2()
    },this.level*1000)
 
  },
  startTime2(){

    this.timeout2 = setTimeout(()=>{
        this.selected = false;
        this.startTime()
    },7000-(this.level*1000))
  }
},
beforeDestroy() {
    clearTimeout(this.timeout);
    clearTimeout(this.timeout2);
},
 
}
</script>

<style scoped>
.box{
    position: relative;
    width: 187px;
    height: 120px;
}
.box>.event {
  /*border: 1px solid #eee;*/
  text-align: center;
  /*background: #F6F8F9;*/
  Width: 187px;
  height: 140px;
  position: relative;
  border-radius: 25px;
  /*transform: rotate(45deg);*/
  z-index: 9;
  padding: 28px;
}
 svg {
    position: absolute;
    right: -23px;
    z-index:9;
    transform: rotate(360deg);
}
</style>