<template>
   <router-link :to="url">

<div style="    width: 160px;
height: 160px;" class="box bg-white rounded-circle p-3">
 <div class="flex-center">

  <img :src="img" alt="">
       
 </div>
 <p class="s-c">{{title}}</p>
   
</div>
   </router-link>
</template>

<script>
export default {
 name:'card-vue',
 props:{
    img:{
        type:String,
    },
    title:{
        type:String
    },
    url:{
        type:String,
        default:'/incubator/program-incubator'
    }
}
}
</script>

<style>

</style>