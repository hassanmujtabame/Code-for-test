<template>
  <div class="course-instructor">
  <div class="course-instructor__wrapper">
  <div class="course-instructor__header">
  <img class="course-instructor__avatar" :src="item.image" />

    </div>
  <div class="course-instructor__body">
    <h1 class="course-instructor__title">{{ item.name }}</h1>
    <h2 class="course-instructor__subtitle"> {{ item.job_title }}</h2>
    <p class="course-instructor__text">{{ item.description }}</p>
  </div>
    
  </div>
  </div>
</template>

<script>
export default {
 name:'card-instructor',
 props:{
    item:{}
 }
}
</script>

<style scoped>
.course-instructor{
    width: 315px;
}
.course-instructor__header{
    text-align: center;
}
.course-instructor__avatar{
    height: 97px;
    width: 97px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: -48px;
    box-shadow: 0px 5px 6px #c1c1c1;
}
.course-instructor__body{
    /* Turquoise background */
    background: #F6F8F9;
    border-radius: 8px;
    padding-top: 52px;
text-align: center;
}
.course-instructor__title{
    font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 44px;
text-transform: capitalize;
/* Turquoise text */
color: #0C2F33;
margin: 0;
}
.course-instructor__subtitle{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 29px;
/* Medium gray */
text-align: center;
color: #737373;
margin: 0;
}
.course-instructor__text{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    /* or 200% */
    text-align: center;
    /* Dark gray */
    color: #414042;
    margin: 0;
    height: 96px;
}
</style>