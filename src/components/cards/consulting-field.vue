<template>
  <div class="consulting-category-card box">
        <div class="consulting-category-card__img">
            <img  :src="item.image_path" :alt="item.name"  class="w-100 h-100" >
        </div>
        <div class="consulting-category-card__content">
           <h6 class="consulting-category-card__title">{{ item.name }}</h6>
        </div>
    </div>
</template>

<script>
export default {
 name:'consulting-category-card',
 props:{
    item:{
        default:()=>{
            return {
                image:'/assets/img/cuate.png',
                title:' دراسة جدوى'
            }
        }
    }
 }
}
</script>

<style scoped>
.consulting-category-card{
    border-radius: 8px 8px 8px 8px;
}
.consulting-category-card__img{
    height:192px
}
.consulting-category-card__img,.consulting-category-card__img>img{
    border-radius: 8px 8px 0px 0px;
}
.consulting-category-card__title{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */
display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;
color: #737373;

}
.consulting-category-card__content{
  /* Auto layout */

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 24px 16px;
gap: 8px;
width: 100%;
height: 88px;
text-align: center;
background: #FFFFFF;
border: 1px solid #CDD7D8;
/*box-shadow: 0px 0px 78.2699px rgba(187, 188, 189, 0.3);*/
border-radius: 0px 0px 8px 8px;
}
</style>