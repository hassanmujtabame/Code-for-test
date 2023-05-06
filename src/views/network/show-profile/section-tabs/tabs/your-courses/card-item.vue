<template>
  <div class="course-card">
  <div class="course-card__wrapper">
  <div class="course-card__image">
    <div class="icon-play">
        <router-link :to="url">
            <i class="fa-solid fa-circle-play"></i>
    </router-link>
    </div>
    <img :src="image" :alt="title" />
  </div>
  <div class="course-card__content">
  <h1 class="course-card__title">{{ title }}</h1>
  <h2 class="course-card__subtitle">{{ name }}</h2>
  <p class="course-card__text"><strong>{{ price }}</strong> {{ $t('riyals') }}</p>

  </div>
</div>
    
  </div>
</template>

<script>
export default {
 name:'card-item',
 props:{
    url:{},
    image:{},
    title:{},
    name:{},
    price:{}
 }
}
</script>

<style scoped>
.course-card{
    padding:5px
}
.course-card__wrapper{
    display: flex;
    gap:10px;
}
.course-card__image{
    flex:0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.course-card__image img{
    height: 96px;
    width: 152px;
    border-radius: 8px;
}
.course-card__image .icon-play{
    z-index:1;
    height: 34px;
    width: 34px;
    position: absolute;
    background-color: white;
    border-radius: 50%;
    top:calc(50% - 17px);
    left:calc(50% - 17px);
    display: flex;
    justify-content: center;
    align-items: center;
}
.course-card__image .icon-play i{
font-size: 34px;
        color: white;
    background: var(--color-primary);
    border-radius: 50%;
}
.course-card__content{
    flex:1;
}
.course-card__title{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */
text-transform: capitalize;
color: #414042;
}
.course-card__subtitle,.course-card__text{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */
color: #979797;
}
</style>