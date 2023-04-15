<template>
  <div class="course-rate-item" v-bind="$attrs">
  <div class="course-rate-item__wrapper">
  
  <div class="course-rate-item__body">
    <div class="course-rate-item__avatar">
        <img :src="image" :alt="name" />
    </div>
    <div class="course-rate-item__info">
        <h1 class="course-rate-item__name">{{ name }}</h1>
        <div class="course-rate-item__rate">
                    <i v-for="n in starts"  :key="n" class="fa-solid fa-star " :class="{'active':n<=rate}"></i>
        </div>
    </div>
    <div class="course-rate-item__action">
        <span class="course-rate-item__date">{{ datetime?timeAgoToHuman(datetime):'N/A' }}</span>
    </div>
  </div>
  <p class="course-rate-item__comment mt-3" v-html="comment"></p>

  </div>

  </div>
</template>

<script>

export default {
 props:{
    image:{type:String},
    name:{type:String},
    rate:{type:Number},
    comment:{type:String},
    datetime:{
        type:String
    }
 },
 data:()=>({
    starts:[5,4,3,2,1]
 })
}
</script>

<style scoped>
.course-rate-item__wrapper{
    border: 0.5px solid #D1D1D1;
border-radius: 4px;
padding:10px
}
.course-rate-item__body{
    display: flex;  
}
.course-rate-item__avatar,.course-rate-item__action{
    flex-shrink: 0;
}
.course-rate-item__info{
    flex:1;
}
.course-rate-item__avatar{
    width: 48px;
    height: 48px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.course-rate-item__avatar>img{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    min-width: 48px;
    min-height: 48px;
    background-color: gray;
}
.course-rate-item__name{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */
text-transform: capitalize;
/* Dark gray */
color: #414042;
margin: 0;
}
.course-rate-item__rate>i{
  font-size: 16px;
}
.course-rate-item__comment{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    /* or 142% */
    color: #737373;
    margin: 0;
}
.course-rate-item__date{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* or 142% */
/* Boarders */

color: #D1D1D1;
}
</style>