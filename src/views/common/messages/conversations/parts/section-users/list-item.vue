<template>
  <div @click="selectItem" class="chat-users__item">
  <div class="chat-users__item-wrapper">
    <div class="chat-users__item-avatar">
        <img  :src="item.user_image"/>
    </div>
    <div  class="chat-users__item-info">
    <div  class="chat-users__item-title">{{ item.user_name }}</div>
    <div  class="chat-users__item-subtitle">{{ item.message }}</div>
    </div>
    <div  class="chat-users__item-time">{{ item.time }}</div>
  </div>
  </div>
</template>

<script>
export default {
 props:{
    item:{}
 },
 methods:{
    selectItem(){
        this.$emit('selected',this.item)
    }
 }
}
</script>

<style >
.chat-users__item{
    padding: 10px 0;
    border-bottom: 1px solid #f6f8f9;
    width: 100%;
    cursor: pointer;
    background: white;
}
.chat-users__item-wrapper{
    display: flex;
    align-items: center;
    width:100%;
}
.chat-users__item-avatar,.chat-users__item-avatar>img{
    height: 44px;
    width: 44px;
    border-radius: 50%;  
}
.chat-users__item-avatar,.chat-users__item-time{
    flex-shrink: 0;
}
.chat-users__item-time{
    font-size: .665em;
}
.chat-users__item-info{
    flex-grow: 1;
    flex-wrap: wrap;
    max-width: calc(100% - 85px);
    padding: 0 2px;
}
.chat-users__item-title{
    
    line-height:1.7;
    font-weight: 600;
    color:#293951;
    font-size: .9375rem;
}
.chat-users__item-subtitle{
    font-size: 13px;
line-height: 15px;
    font-weight: 400;
    color:#737373;
    display: inline-block;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.chat-users__item-time{
    font-size: 13px;
line-height: 15px;
    font-weight: 400;
    color:#737373
}
</style>