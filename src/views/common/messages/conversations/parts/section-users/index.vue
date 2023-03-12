<template>
  <div class="chat-users">
    <div class="chat-users__header">
      <h1 class="chat-users__header-title">{{$t('Chats')}} <span>(20)</span></h1>
    <div class="input-group search-input-group mb-3">
  <span  class="input-group-prepend search-input-icon">
  <i class="fa fa-search"></i>
  </span >
  <input type="text" class="form-control search-input" :placeholder="$t('search')" >
</div>
    </div>
    <listItemVue v-for="(n,i) in 5" :key="i" :item="item" />
  </div>
</template>

<script>
import listItemVue from './list-item.vue'

export default {
 name:'chat-users-section',
 components:{
  listItemVue
 },
 data:()=>({
  item:{title:'Robert Fox',subtitle:'hi, I am robet, i am waiting you on big house',time:'11:00 AM',image:'https://i.pravatar.cc/150?img=3'}
 })
}
</script>

<style>
.chat-users{
  width: 100%;
  padding: 0 10px;
}
.chat-users__header-title{
  font-size: 20px;
  line-height: 1.7;
  color:#5b5b5b;
}
.search-input-group{
  position: relative;
}
.search-input-icon{
  height: 100%;
  display: inline-block;
  position: absolute;
  top:0;
  right:0px;
  left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
  padding: 0 2px;
}
html[lang=en] .search-input-icon{
  right:auto;
  left: 0;
}
.search-input{
  padding-left: 20px;
  padding-right: 20px;
  font-size: .75rem;
}
 .chat-users>.chat-users__item:last-child{
 padding: 10px 0;
 border-bottom: none;
}
</style>