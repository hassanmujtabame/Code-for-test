<template>
  <div class="chat-circle">
  <div class="chat-circle__wrapper">
    <d-hover v-slot="{hover}">
<div v-if="hover" class="chat-circle__close">
    <i @click="$emit('close',item)" class="clickable fas fa-times text-muted fa-xs"></i>
</div>
    <img :src="item.image" class="clickable" @click="$emit('open',item)"
                  alt="avatar 1" style="width: 100%; height: 100%;">
    </d-hover>
  </div>
  </div>
</template>

<script>
export default {
    name:'d-chat-circle',
  props:{
    item:{}
  }
}
</script>

<style>
.chat-circle{
    margin: 2px 0;
}
.chat-circle,.chat-circle__wrapper{
    border-radius: 50%;
    height: 48px;
    width: 48px;
}
.chat-circle__wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.chat-circle__close{
    cursor: pointer;
    position: absolute;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: #c5c5c5;
    display: flex;
    justify-content: center;
    align-items: center;
    left:5px
}
.chat-circle__wrapper img{
    min-height: 48px;
    min-width: 48px;
    background-color: #c3c3c3;
    background-color: #c3c3c35e;
    border-radius: 50%;
}
</style>