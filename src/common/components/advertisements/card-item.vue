<template>
  <div class="ads-card">
        <div  v-if="item.banner_type=='html'" class="ads-card__wrapper w-100 h-100" v-html="item.content"></div>
        <div  v-else class="ads-card__wrapper w-100 h-100">
        <a :href="item.link??'#'" class="w-100 h-100">
            <img :src="item.image" >
        </a>
        </div>

  </div>
</template>

<script>
export default {
 name:'ads-card',
 props:{
    item:{}
 },
 watch:{
  item:{
    deep:true,
    immediate:true,
    handler(){}
  }
 }
}
</script>

<style>
.ads-card{
    width: 100%;
    height: 288px;
}
.ads-card__wrapper{
  padding: 0px 5px;
}
 .ads-card__wrapper,.ads-card__wrapper>div{
  border-radius: var(--bs-border-radius-xl)!important;
}
</style>