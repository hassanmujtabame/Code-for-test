<template>
  <div class="chat-conversation h-100">
  <chatEmpty v-if="!personSelected" />
  <ChatPerson v-else :item="personSelected" />
  </div>
</template>

<script>
import chatEmpty from './chat-empty.vue';
import ChatPerson from './chat-person.vue';

export default {
 name:'chat-conversation-section',
 props:{
  group:{
    default:'section-chat-select-person'
  }
 },
 components:{
  chatEmpty,
  ChatPerson
 },
 data: () => {
  return {
    personSelected:null,
  }
},
  methods: {
    handlerPerson(p){
      let user_id = (p.receiver_id==this.user.id)?p.sender_id:p.receiver_id;
      this.personSelected = {...p,user_id};
    }
  },
  created(){
    window.EventBus.listen(this.group,this.handlerPerson)
  },
  beforeDestroy(){
    window.EventBus.off(this.group,this.handlerPerson)
  },
}
</script>

<style>

.chat-conversation__header-wrapper{
  padding:15px 15px;
  display: flex;
}
.chat-conversation__body{
  padding: 10px 10px;
  height: calc(100vh - 275px);
    overflow-y: auto;
}
.chat-conversation__header-user{
  flex-grow: 1;
}
.chat-conversation__header-actions{
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.chat-conversation__header-actions>span{
  padding:0 10px
}
.chat-conversation__header-user-avatar{
  border-radius: 10px;
  width: 48px;
  height: 48px;
  display: inline-block;
}
.chat-conversation__header-user-name{
  display: inline-flex;
  align-items: center;
  padding: 0 10px;

}
.chat-conversation__header-user-name>h1{
    font-size: 13px;
    line-height: 15px;
    font-weight: 600;
    color:#5b5b5b;
}
.chat-conversation__footer-message{
  display: flex;
  padding:15px;
  background-color: #ebf1f7;
  border-radius: 40px;
}
.chat-conversation__footer-message>input{
  flex-grow: 1;
  border:none;
    outline: none;
    box-shadow: none;
    background-color: transparent;
}
.chat-conversation__footer-message>input:focus{
  background-color: transparent;
    border-color: #86b7fe;
    outline: none;
    box-shadow: none;
   /* box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);*/
}
.chat-conversation__footer-message>.btn-send{
  border-radius: 50%;
  background-color: #2787f5;
  color:white;
  font-size: 24px;
  width: 48px;
  height: 48px;
  border:none;
}
</style>