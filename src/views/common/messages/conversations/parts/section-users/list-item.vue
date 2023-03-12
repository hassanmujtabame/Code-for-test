<template>
  <div class="chat-users__item">
  <div class="chat-users__item-wrapper">
    <div class="chat-users__item-avatar">
        <img  :src="item.image"/>
    </div>
    <div  class="chat-users__item-info">
    <div  class="chat-users__item-title">{{ item.title }}</div>
    <div  class="chat-users__item-subtitle">{{ item.subtitle }}</div>
    </div>
    <div  class="chat-users__item-time">{{ item.time }}</div>
  </div>
  </div>
</template>

<script>
export default {
 props:{
    item:{}
 }
}
</script>

<style >
.chat-users__item{
 padding: 10px 0;
 border-bottom: 1px solid #d6d6d6;
 width:100%;
}
.chat-users__item-wrapper{
    display: flex;
    align-items: center;
    width:100%;
}
.chat-users__item-avatar,.chat-users__item-avatar>img{
    height: 32px;
width: 32px;
    border-radius: 50%;
    
}
.chat-users__item-avatar,.chat-users__item-time{
    flex-shrink: 0;
}
.chat-users__item-info{
    flex-grow: 1;
    flex-wrap: wrap;
    max-width: calc(100% - 85px);
    padding: 0 2px;
}
.chat-users__item-title{
    font-size: 13px;
    line-height: 15px;
    font-weight: 600;
    color:#5b5b5b;
}
.chat-users__item-subtitle{
    font-size: 13px;
line-height: 15px;
    font-weight: 400;
    color:#737373;
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
}
.chat-users__item-time{
    font-size: 13px;
line-height: 15px;
    font-weight: 400;
    color:#737373
}
</style>