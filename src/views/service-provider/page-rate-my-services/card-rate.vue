<template>
  <div class="page-rate-service__item">
  <div class="page-rate-service__item-wrapper">
    <div class="page-rate-service__item-image">
        <img :src="image" />
    </div>
    <div class="page-rate-service__item-info">
            <div class="page-rate-service__item-name">{{ name }}</div>
            <div class="page-rate-service__item-rate">
                <d-rate-stars :size="16" :value="rate"/>
            </div>
            <div class="page-rate-service__item-description">{{ description }}</div>
            <div class="page-rate-service__item-service">
                <a href="#">{{ service.title }}</a>
            </div>

    </div>
    <div class="page-rate-service__item-actions">
        <div class="page-rate-service__item-btns">
            <button class="btn" @click="$emit('send-abuse')"><i class="fa-solid fa-ellipsis-vertical"></i></button>
            
        </div>
        <div class="page-rate-service__item-date">
            منذ يوم
        </div>
    </div>

  </div>
  </div>
</template>

<script>
export default {
  name:'card-rate',
  props:{
    image:{
        type:String,
        default:'/assets/img/صورة واتساب بتاريخ 2022-10-18 في 09.53.21.jpg',
    },
    rate:{
        type:[String,Number],
        default:4
    },
    name:{
        type:String,
        default:'N/A'
    },
    description:{
        type:String,
        default:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta recusandae hic non doloremque velit obcaecati esse? Nostrum nisi mollitia aliquid veritatis beatae aperiam fugit fuga, quos soluta, odio accusantium amet!'
    },
    service:{
        type:[Object,Array],
        default:()=>{
            return {
                id:1,
                title:'خدمة الازياء'
            }
        }
    }
  }
}
</script>

<style>
.page-rate-service__item-wrapper{
    display: flex;
}
.page-rate-service__item-info{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
}
.page-rate-service__item-name{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */

text-transform: capitalize;

color: var(--m-color);
}
.page-rate-service__item-image{
    flex-grow: 0;
    flex-shrink: 0;
    padding: 0 15px;
}
.page-rate-service__item-image>img{
    width: 67.52px;
    height: 67.52px;
    border-radius: 50%;
}

.page-rate-service__item-description{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
margin-top:10px ;
/* or 106% */

text-align: start;

color: #979797;
}
.page-rate-service__item-date,.page-rate-service__item-btns{
    font-weight: 400;
font-size: 16px;
line-height: 17px;
/* identical to box height, or 106% */
color: #C9C9C9;
}
.page-rate-service__item-service{

    margin-top:10px ;
}
.page-rate-service__item-service>a{
    color: #F2631C;

}
.page-rate-service__item-actions{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 15px;
}
</style>