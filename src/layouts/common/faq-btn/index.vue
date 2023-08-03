<template>
  <router-link custom :to="getRouteLocale('common-questions')" v-slot="{navigate}">
  <div @click="navigate"
:class="[ networkExhibition ? 'faq-btn-fixed-network': 'faq-btn-fixed']"
  > 
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
 },
 data:()=>{
    return  {
        networkExhibition:false,
    }
 },
 watch:{
        '$route' (to,from){
          this.getRoteName()
        }
 },
 methods:{
getRoteName(){
           if (this.$route.name == 'network-exhibition-show' || this.$route.name == 'academy-show-profile' || 
           this.$route.name == 'network-show-profile' || this.$route.name == 'service-provider-show-profile'|| this.$route.name =='network-exhibition-demand-participate' || this.$route.name == 'service-provider-ready-service') {
                return  this.networkExhibition = true
           }else{
                return  this.networkExhibition = false
           }
}
 },
 mounted(){
          this.getRoteName()

console.log('this.$route.name ',this.$route.name );
}
}

</script>

<style>
.faq-btn-fixed{
    cursor: pointer;
    position: fixed;
    right:9% ;
    left:auto;
    top: calc(100vh / 2 + 70px);
    z-index: 999999;
    
    padding: 2px;
    border-radius:32px ;
    border: 1px solid #b5e5e4;
    background-color:#b5e5e4;
    margin-top: 180px;
}
.faq-btn-fixed-network{
    cursor: pointer;
    position: fixed;
    right:auto !important ;
    left:0 !important;
    top: calc(100vh / 2 + 70px);
    z-index: 999999;
    
    padding: 2px;
    border-radius:32px ;
    border: 1px solid #b5e5e4;
    background-color:#b5e5e4;
    margin-top: 165px;
}
html[dir=ltr] .faq-btn-fixed{
    right: 0;
    left:auto;
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
@media screen and (max-width: 600px) {
  .faq-btn-title{
    display: none;
    width: 0px;
    padding:0;
    margin: 0;
  }
}
  

</style>