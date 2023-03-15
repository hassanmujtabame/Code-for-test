<template>
  <div class="chat-users">
    <div class="chat-users__header">
      <h1 class="chat-users__header-title">{{$t('Chats')}} <span>({{items.length}})</span></h1>
    <div class="input-group search-input-group mb-3">
  <span  class="input-group-prepend search-input-icon">
  <i class="fa fa-search"></i>
  </span >
  <input type="text" class="form-control search-input" :placeholder="$t('search')" >
</div>
    </div>
    <div class="chat-users__body">
    <listItemVue v-for="(it,i) in items" :key="i" :item="it" />
  </div>
  </div>
</template>

<script>
let usersTest=[
    {"id":85,"message":"وعليكم السلام","user_name":"test1009","receiver_id":197,"sender_id":1,"user_image":"https://test.riadiat.sa/uploads/default.jpeg","created_at":"2023-03-14 21:09:51"},
    {"id":84,"message":"كيف حالكم","user_name":"Gate For Learner","receiver_id":1,"sender_id":197,"user_image":"https://test.riadiat.sa/uploads/users/tmQ9useZpYQqwB6C66ovZUlPBAjESKNBdtkZ5xGZ.png","created_at":"2023-03-14 21:09:35"}
  ]
import listItemVue from './list-item.vue'
export default {
 name:'chat-users-section',
 components:{
  listItemVue
 },
 data:()=>({
  //item:{title:'Robert Fox',subtitle:'hi, I am robet, i am waiting you on big house',time:'11:00 AM',image:'https://i.pravatar.cc/150?img=3'},
  items:process.env.NODE_ENV=='development'?usersTest:[]
 }),
 methods:{
  async initializing(){
    try {
      let { data } = await this.$axios.post('user/last-messages')
      if(data.success){
        console.mylog('success',data.data)
      }
    } catch (error) {
      //
    }
  }
 },
 mounted(){
  this.initializing()
 }
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
.chat-users__body{
  height: calc(100vh - 240px);
    overflow-y: auto;
    margin-left: -10px;
}
</style>