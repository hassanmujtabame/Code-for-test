<template>
   <div class="offer-item">
    <div class="offer-item__wrapper">
    <img class="offer-item__img" :src="item.image" />
    <div class="offer-item__info">
    <div class="offer-item__metatitle">
        <div class="offer-item__status" :class="item.status" >{{ statusText }}</div><h1 class="offer-item__title">{{ item.name_company }}</h1>
    </div>
    <div class="offer-item__subtitle">{{ item.short_description }}</div>
    <div class="offer-item__details">
        <div class="offer-item__details-item date-color"><i class="fa fa-calendar"></i> {{ item.start_date }}</div>
        <div class="offer-item__details-item day-color"><i class="fa fa-calendar"></i> المدة : {{ item.day }}</div>
        <div class="offer-item__details-item copies-color"><i class="fa fa-calendar"></i> عدد النسخ: {{ item.number_copies }}</div>

    </div>
    </div>
    <div class="offer-item__actions">
        <button class="btn btn-custmer "><i class="fa fa-pen-to-square"></i> تعديل الاعلان</button>
        <button v-if="item.status=='finished'" class="btn btn-custmer-w"><i class="fa fa-arrow-rotate-right"></i> إعادة النشر</button>
        <button v-if="item.status=='valid'" class="btn btn-custmer-w btn-danger"><i class="fa fa-trash"></i> حذف الاعلان</button>
    </div>
   </div>
   </div>
</template>

<script>
export default {
    name: 'offer-item',
    props:{
        item:{}
    },
    computed:{
        statusText(){
            switch (this.item.status) {
                case 'valid':return this.$t('offer-valid')
                case 'finished':return this.$t('offer-finished')
                default:
                  return this.item.status
            }
        }
    }
}
</script>

<style scoped>
.offer-item{
    border-bottom: 0.5px solid #e1e5e7;
}
.offer-item__wrapper{
    padding: 35px 5px 5px;
    display: flex;
}
.offer-item__img{
    width: 88px;
    height: 88px;
    min-width: 88px;
    min-height: 88px;
    background: #FFFFFF;
    flex-shrink: 0;
/* box */

box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
border-radius: 4px;
margin: 0 30px 30px;
}
.offer-item__info{
    display: flex;
    flex-direction: column;
    flex:1
}
.offer-item__actions{
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.offer-item__metatitle{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.offer-item__status{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
color: #FFFFFF;
border-radius: 4px;
display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 5px;
    height: fit-content;
}
.offer-item__status.valid{
    background-color: #FFBC00;
}
.offer-item__status.finished{
    background: #FF1616;
}
.offer-item__title{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

text-transform: capitalize;
color: #585858;
padding: 5px;
margin: 0;
}
.offer-item__subtitle{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
/* identical to box height, or 106% */

text-align: right;

color: #BBAACC;
margin-bottom: 15px;
}
.offer-item__details{
    display: flex;
    margin: 0 -5px;
}
.offer-item__details-item{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 14px;
padding: 0 5px;
} 
.mobile-layout .offer-item__details-item{
    font-size: 10px;
}
 
.date-color{
    color: #1FB9B3;
}
.day-color{
    color: #FFBC00;
}
.copies-color{
    color: #F2631C;
}
</style>