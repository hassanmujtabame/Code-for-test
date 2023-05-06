<template>
  <div class="offer-card">
  <div class="offer-card__wrapper">
  <div class="offer-card__image">
  
        <router-link :to="url">
    
    <img :src="image" :alt="title" />
</router-link>
  </div>
  <div class="offer-card__content">
  <h1 class="offer-card__title">{{ title }}</h1>
  <p class="offer-card__text">{{ desc }}</p>

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
    desc:{}
 }
}
</script>

<style scoped>
.offer-card{
    padding:5px
}
.offer-card__wrapper{
    display: flex;
    gap:10px;
}
.offer-card__image{
    flex:0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.offer-card__image img{
    height: 96px;
    width: 152px;
    border-radius: 8px;
}
.offer-card__image .icon-play{
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
.offer-card__image .icon-play i{
font-size: 34px;
        color: white;
    background: var(--color-primary);
    border-radius: 50%;
}
.offer-card__content{
    flex:1;
}
.offer-card__title{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */
text-transform: capitalize;
color: #414042;
}
.offer-card__subtitle,.offer-card__text{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */
color: #979797;
}
</style>