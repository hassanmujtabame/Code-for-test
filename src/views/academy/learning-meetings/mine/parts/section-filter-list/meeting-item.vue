<template>
  <div class="academy-meeting-item">
  <div class="academy-meeting-item__wrapper">
  <div class="academy-meeting-item__body">
  <div class="academy-meeting-item__title">

<h1 @click="router_push('academy-learning-meeting-show', { id: item.id })" class="clickable">{{ item.title }}</h1>
  </div>
  <div class="academy-meeting-item__subtitle">
<h6>عدد المنضمين : {{ item.number_participants }} شخص</h6>
  </div>
  <div class="academy-meeting-item__description">
    <p v-html="item.content"></p>
    </div>
  </div>
  <div class="academy-meeting-item__actions">
    <div class="academy-meeting-item__date">
        <i class="fa-regular fa-clock"></i>
        <span class="px-2">تاريخ النشر :</span>
        <span>{{ dateReverse(item.date) }}</span>

    </div>
    <div class="academy-meeting-item__btns">
        <button @click="sendToParticipants" class="btn btn-custmer btn-small">رسالة للمنضمين</button>
        <button @click="deleteItem" class="btn btn-custmer btn-danger btn-small mx-1">حذف اللقاء</button>
    </div>
</div>
  </div>
  </div>
</template>

<script>
export default {
 props:{
    item:{}
 },
 methods:{
    sendToParticipants(){
        this.fireOpenDialog('send-all-participants',this.item)
    },
    deleteItem(){
        this.$emit('delete',this.item)
    }
 }
}
</script>

<style scoped>
.academy-meeting-item{
    width: 100%;
}
.academy-meeting-item__wrapper{
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #CDD7D8;
}
.academy-meeting-item__body{
    flex:1
}
.academy-meeting-item__actions{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
}
.academy-meeting-item__btns{
    display: flex;
    flex-direction: row; 
}
span {
    color:inherit
}
.academy-meeting-item__title>h1{
    margin: 0;
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */

display: flex;
align-items: center;
text-transform: capitalize;

color: #1FB9B3;
}
.academy-meeting-item__description{
    margin:10px 0;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */

color: #737373;
}
.academy-meeting-item__subtitle>h6{
    margin:10px 0;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


color: #F2631C;
}
.academy-meeting-item__date{
    color:#737373
}
</style>