<template>
   

<div class="incubator-dept box rounded-circle">
 <div class="incubator-dept__wrapper" :style="styleCircle">
 <div class="incubator-dept__image" :style="styleImage">
    <router-link v-if="url" :to="url">
  <img :src="img" :alt="title">
      </router-link> 
      <img v-else @click="$emit('click-image',$event)" class="clickable" :src="img" :alt="title">

 </div>
 <p class="incubator-dept__title" :class="classTitle??''">{{title}}</p>
   
</div>
</div>
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
    classTitle:{
        type:String
    },
    url:{
        type:[String,Object],
        //default:()=>{return{name:'incubator-program-incubator'}}
    },
    size:{
        type:Number,
        default:160
    }
},
computed:{
    styleCircle(){
        let size = this.size;
        return {
            height:`${size}px`,
            width:`${size}px`,
        }
    },
    styleImage(){
        let size = this.size-20;
        return {
            height:`${size}px`,
            width:`${size}px`,
        }
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
/* background: #FFFFFF; */
/* 4 */


}
.incubator-dept__image{
    display: flex;
    justify-content: center;
    width: 140px;
    height: 140px;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0px 4px 15px 1px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
}
.incubator-dept__image>a{
    width: 100%;
    height: 100%;
}
.incubator-dept__image img{
    width: 100%;
    height: 100%;
    object-fit: fill;

}
.incubator-dept__title{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 1;
/* or 120% */

display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;
justify-content: center;
margin:15px 0 0;
color: #737373;
}
</style>