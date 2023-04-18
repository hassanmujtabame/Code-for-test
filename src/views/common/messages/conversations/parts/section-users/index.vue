<template>
  <div class="chat-users py-3">
    <div class="chat-users__header">
      <h1 v-if="false" class="chat-users__header-title">{{$t('Chats')}} <span>({{items.length}})</span></h1>
    <div class="input-group search-input-group mb-3">
  <span  class="input-group-prepend search-input-icon">
  <i class="fa fa-search"></i>
  </span >
  <input type="text" v-model="search" class="form-control search-input" :placeholder="$t('search')" >
</div>
    </div>
    <div class="d-flex gap-2 mb-3">
      <button class="btn-chat-filter selected">الاحدث</button>
      <button class="btn-chat-filter">غرف الدردسة</button>
    </div>
    <div v-if="search!=''" class="chat-users__body">
      <listItemVue  v-for="(it,i) in searchItems" :key="i" @selected="selectOnSearch" :item="it" />
  </div>
  <div v-else class="chat-users__body">
    <listItemVue  v-for="(it,i) in items" :key="i" @selected="selectPerson" :is-selected="selectedItem && it.id==selectedItem.id" :item="it" />
  </div>
  </div>
</template>

<script>
import listItemVue from './list-item.vue'
import userAPI from '@/services/api/user'
export default {
 name:'chat-users-section',
 components:{
  listItemVue
 },
 data:()=>({
  selectedItem:null,
  //item:{title:'Robert Fox',subtitle:'hi, I am robet, i am waiting you on big house',time:'11:00 AM',image:'https://i.pravatar.cc/150?img=3'},
  items:[],//process.env.NODE_ENV=='development'?usersTest:[]
  searchItems:[],
  search:'',
 }),
 watch:{
  search(){
    if(this.search=='') 
    this.searchItems = [];
    else
      this.searchUsers()
  }
 },
 methods:{
  selectOnSearch(person){
   
    this.selectPerson(person);
    this.$nextTick(()=>{
      this.search = ''
    })
  },
  selectPerson(person){
    this.selectedItem = person
    this.fireEvent('section-chat-select-person',person)
  },
  msgFormat(m){
    let datetime = m.created_at.substring(0,16)
            let time = datetime.split('T')[1]
            let date =  datetime.split('T')[0]
    let user_id = m.receiver_id == this.user.id?m.sender_id:m.receiver_id
          return {...m,user_id,time,date,datetime}
  },
   array_move(arr, old_index, new_index) {
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
},
async searchUsers(){
    try {
      let { data } = await userAPI.loadLastMessagesChat({search:this.search})// this.$axios.post('user/last-messages')
      if(data.success){
        this.searchItems = data.data.filter(x=>x).map(m=>this.msgFormat(m))
  
      }
    } catch (error) {
      console.mylog('error',error)
        //
    }
  },
  async initializing(){
    try {
      let { data } = await userAPI.loadLastMessagesChat()// this.$axios.post('user/last-messages')
      if(data.success){
        this.items = data.data.filter(x=>x).map(m=>this.msgFormat(m))
        console.mylog('success',data.data)
      }
    } catch (error) {
      console.mylog('error',error)
        //
    }
  },
  handlerMsg(new_msg){
   let m = this.msgFormat(new_msg);
   let fromIndex = this.items.findIndex(x=>x.user_id == m.user_id);
   let toIndex = 0;
   if(fromIndex>-1){
    if(fromIndex>0){
      this.items[fromIndex] = Object.assign(this.items[fromIndex],new_msg)
      this.array_move(this.items,fromIndex,toIndex)
    }
    else
    this.items[fromIndex] = Object.assign(this.items[fromIndex],m)
   }else{
    this.items.unshift(m)
   }
  }
 },
  created(){
    window.EventBus.listen('chat-message-user',this.handlerMsg)
  },
  beforeDestroy(){
    window.EventBus.off('chat-message-user',this.handlerMsg)
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
  
  padding-top:5px;
  border: 0.5px solid rgba(12, 47, 51, 0.2);
}
.chat-users__header-title{
  font-size: 20px;
  line-height: 1.7;
  color:#5b5b5b;
  margin-top: 0;
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
.btn-chat-filter{
  box-sizing: border-box;
border: 1px solid rgba(65, 92, 94,10%);
border-radius: 4px;
flex:1 0 50%;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height, or 121% */

padding:16px 5px;
color: #9095A4;
}
.btn-chat-filter.selected{
  font-weight: 700;
color: #1FB9B3;
background: rgba(31, 185, 179,10%);
}
</style>