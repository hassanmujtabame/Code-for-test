<template>
  <router-link custom :to="getRouteLocale('common-questions')" v-slot="{navigate}">
  <div @click="navigate" class="faq-btn-fixed">
  <div class="faq-btn-wrapper">
    <p><MsgIcon /> <span class="faq-btn-title">{{$t('popular-questions')}}</span></p>
  </div>
  </div>
</router-link>

</template>

<script>
import MsgIcon from './icon-svg.vue'
export default {
 name:'faq-btn',
 components:{
  MsgIcon
 }
}
</script>

<style>
.faq-btn-fixed{
    cursor: pointer;
    position: fixed;
    left: auto;
    right:0;
    top: calc(100vh / 2 + 70px);
    z-index: 999999;
    
    padding: 2px;
    border-radius:32px ;
    border: 1px solid #b5e5e4;
    background-color:#b5e5e4;
}
html[dir=ltr] .faq-btn-fixed{
    left: 0;
    right:auto;
}
.faq-btn-wrapper{
    border-radius:32px ;
    background-color: rgb(31, 185, 179);
    padding:2px 5px;
}
.faq-btn-wrapper p{
  font-size: 16px;
  margin: 0;
}
.faq-btn-wrapper .faq-btn-title{
  font-size: 16px;
  margin: 0;
  color:white;
}
</style>