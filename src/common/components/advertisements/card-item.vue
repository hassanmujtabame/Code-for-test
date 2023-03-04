<template>
  <div class="ads-card">

        <div  v-if="item.type=='html'" class="w-100 h-100" v-html="item.conent"></div>
        <div  v-if="item.type=='image'" class="w-100 h-100">
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
 }
}
</script>

<style scoped>
.ads-card{
    width: 100%;
    height: 288px;
}
</style>