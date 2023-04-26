<template>
   <router-link :to="url">

<div class="incubator-dept box rounded-circle">
 <div class="incubator-dept__wrapper rounded-circle p-3">
 <div class="incubator-dept__image">

  <img :src="img" :alt="title">
       
 </div>
 <p class="s-c incubator-dept__title">{{title}}</p>
   
</div>
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
        type:[String,Object],
        default:()=>{return{name:'incubator-program-incubator'}}
    }
}
}
</script>

<style scoped>
.incubator-dept{
    margin: 17px 0;
}
.incubator-dept__wrapper{
    width: 160px;
height: 160px;
background: #FFFFFF;
/* 4 */

box-shadow: 0px 4px 15px 1px rgba(0, 0, 0, 0.25);
}
.incubator-dept__image{
    display: flex;
    justify-content: center;
    width: 90px;
    height: 88px;
    overflow: hidden;
    margin: 0 auto;
}
.incubator-dept__image>img{
    width: 100%;
    height: 100%;
    object-fit: fill;

}
</style>