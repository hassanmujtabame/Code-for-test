<template>
  <div class="chat-conversation h-100">
  <div  class="chat-conversation__header border-bottom">
  <div class="chat-conversation__header-wrapper">
  <div class="chat-conversation__header-user">
  <div class="chat-conversation__header-user-name">
  <h1>نقاش خدمة تجهيز مشروعك لعرضة لاستثمار</h1></div>

  </div>
  <div  class="chat-conversation__header-actions">
  
    <i @click="sendAbuse" class="fa-regular fa-flag clickable"></i>
  </div>

  </div>
  </div>
  <div class="chat-conversation__body chat-view" id="chat-view">
    
    <div v-for="(dateMsg, i) in Object.keys(messages).reverse()" :key="i" :chatter="chatter">
      <showDivider :text="dateMsg" isDate></showDivider>
      <showMsg v-for="(chatter, j) in messages[dateMsg]" :key="`chatters${j}`" :chatter="chatter">
       
      </showMsg>
      </div>
  </div>
  <div class="chat-conversation__footer">
    <div class="chat-conversation__footer-wrapper">
      <div class="chat-conversation__footer-message">
        <input :disabled="loading" @keypress.enter="sendMessage" type="text" v-model="itemForm.message" class="form-control" :placeholder="$t('type-message')"/>
        <button :disabled="loading" @click="sendMessage" class="btn-send">
          <i class="fa fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import showMsg from '@/components/chat/chat-card/group-msg.vue'
import userAPI from '@/services/api/user';
import { mapGetters } from 'vuex';
import mixinChat from '@/common/mixins/mixin-chat.vue';
import showDivider from '@/components/chat/chat-card/divider-chat.vue'
export default {
  mixins:[mixinChat],
 name:'chat-conversation-person-section',
 props:{
  item:{
    type:[Array,Object],
    require:true
  }
 },
 data: () => {
  return {
    getterName:'chat/prepareProjectMessages',
    addMsgCommit:'chat/ADD_MSG_PREPARE_PROJECT',
    addMsgsCommit:'chat/ADD_MSGS_PREPARE_PROJECT',
     audio : null,
    loading:false,
    group:`chat-card-prepare-project`,
    itemForm:{
      message:''
    },
    messages: [],
  }
},
computed:{
  ...mapGetters({
      mymessages:'chat/prepareProjectMessages'
  })
},
  components: {
    showMsg,
    showDivider
  },
  watch:{
    mymessages:{
      deep:true,
      immediate:true,
      handler(){
        this.loadMsgsFromStore()
      }
    },
    item:{
      deep:true,
      immediate:true,
      handler(){
        //this.itemForm.to_user_id=this.item.user_id;
        //this.group=`chat-card-${this.item.user_id}`,
        this.messages = []
        this.initializing()
      }
    }
  },
  methods: {
    sendAbuse(){
        this.showAbuseDialog({item:null,form:{table_type:'prepare-project',table_id:null}})
    },
    loadMsgsFromStore(){
      this.messages = []
      this.$store.getters[this.getterName].filter(c=>this.isMychat(c)).sort((a, b)=>{return a.created_at > b.created_at?-1:1}).forEach(msg=>this.addMsgLoadByDate(msg))
      this.$nextTick(()=>{
      window.$('#chat-view').animate({scrollTop: document.getElementById('chat-view').scrollHeight},"fast");
      })
    },
    async sendMessage(evt){
      if(evt) evt.preventDefault();
      
      this.loading = true;
      let formData=  this.loadObjectToForm(this.itemForm)
      //formData.append('from_user_id',this.user.id)
      try {
        let { data} = await userAPI.sendMessageChat(formData)
        if(data.success){
          let datetime = data.data.created_at.substring(0,16)
            let time = datetime.split('T')[1]
            let date =  datetime.split('T')[0]
            let new_message = {...data.data,datetime,type:'prepare-project',date,time,user_id:this.user.id,user_image:this.user.image}
            this.$store.commit(this.addMsgCommit,new_message)
            
            this.itemForm.message = '';
        }
      } catch (error) {
        console.mylog('errr',error)
      }
      this.loading = false;
    },
    setTimeDate(datep, time) {
      let [hour, minute] = time.split(':')
      datep.setHours(hour);
      datep.setMinutes(minute);
      datep.setSeconds(0);
      let d = this.dateToString(datep)
      let t = this.timeToString(datep)
      return `${d}T${t}`
    },
    onloadedmetadata(event){
        this.audio = event.target;
    },
    isMychat(c){
        return (c.receiver_id == this.user_id || c.sender_id == this.user.id)&& c.type=='prepare-project';
    },
    async initializing(message_id) {
      if(!message_id){
        let ms= this.$store.getters[this.getterName].filter(c=>this.isMychat(c))
        if(ms.length>0){
          this.loadMsgsFromStore()
          return;
        }
      }
      let formData = new FormData();
      if(message_id)
      formData.append('message_id',message_id)

     try {
      let { data } = await userAPI.loadMessagePrepareProjectChat(formData);
        if(data.success){
          this.$store.commit(this.addMsgsCommit,data.data.map(m=>{
            let type='prepare-project'
            let datetime = m.created_at.substring(0,16)
            let time = datetime.split('T')[1]
            let date =  datetime.split('T')[0]
            if(m.sender_id==this.user.id)
            return {...m,type,time,date,datetime,user_id:this.user.id,user_image:this.user.image}
            else
            return {...m,time,date,datetime,user_id:m.sender_id}
          }))
          console.mylog('success',data)
        }
     } catch (error) {
      //
      console.mylog('error',error)
     }

    },

    addMsg(msg) {
     this.$store.commit(this.addMsgCommit,msg)
     if(msg.sender_id != this.user.id)
     if(this.audio)
      this.audio.play()
    },
  convertToMsg(e){
    let {sender_id,user_image,user_name,...msg} = e;
        //let item ={id:sender_id,image:user_image,name:user_name}
        let datetime = msg.created_at.substring(0,16)
        let time = datetime.split('T')[1]
            let date =  datetime.split('T')[0]
            let type='prepare-project'
        return {user_id:sender_id,type,sender_id,user_image,user_name,time,date,datetime,...msg}
  },
    listenToChannel(){
    window.Echo.private(`chat-prepare-project.${this.user_id}`)
    .listen('.send.message', (e) => {
        console.mylog('send.message.prepare-project',e)
        let messageData = this.convertToMsg(e)  
                //this.openLocal({user:item,message:messageData})
              this.addMsg(messageData)  
        console.mylog('private-chat-prepare-project',e);
    });
  }
},
  created(){
   // window.EventBus.listen(this.group,this.loadMsgsFromStore)
  },
  beforeDestroy(){
    window.Echo.leaveChannel(`chat-prepare-project.${this.user.id}`);

    if(this.$refs['myaudio']){
        this.$refs.myaudio.removeEventListener('loadedmetadata',this.onloadedmetadata);
    }
    //window.EventBus.off(this.group,this.loadMsgsFromStore)

  },
  mounted() {
    //this.audio = new Audio()
    if(this.$refs['myaudio']){
            this.$refs.myaudio.addEventListener('loadedmetadata',this.onloadedmetadata);
    }
   
      this.initializing()
      this.listenToChannel()
  }
}
</script>

<style>
.chat-conversation{
  border: 0.5px solid rgba(12, 47, 51, 0.2);

}
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