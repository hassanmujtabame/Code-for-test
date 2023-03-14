<template>
  <div class="card">
    <div class="card-header" data-mdb-perfect-scrollbar="true">
      <img :src="item.image" class="chat-avatar" />
      <h5 class="chat-title mb-0">{{ item.name }}</h5>
      <div class="chat-actions d-flex flex-row align-items-center">
        <span v-if="false" class="badge bg-warning me-3">20</span>
        <i @click="$emit('minimized', item)" class="chat-action fas fa-minus me-3 text-muted fa-xs"></i>
        <i v-if="false" class="chat-action fas fa-comments me-3 text-muted fa-xs"></i>
        <i @click="$emit('close', item)" class="chat-action fas fa-times text-muted fa-xs"></i>
      </div>
    </div>
    <div class="card-body" data-mdb-perfect-scrollbar="true">

      <showMsg v-for="(chatter, i) in messages" :key="i" :chatter="chatter">
       
      </showMsg>

      <div v-if="false" class="divider d-flex align-items-center mb-4">
        <p class="text-center mx-3 mb-0" style="color: #a2aab7;">Today</p>
      </div>
    </div>
    <div class="card-footer text-muted d-flex justify-content-start align-items-center">

      <textarea rows="1" v-model="itemForm.message" @keypress.enter="sendMessage" class="form-control form-control-sm"  :placeholder="$t('type-message')">
        </textarea>
      <a :disabled="true" v-if="false"  class="ms-1 text-muted" href="#!"><i class="fas fa-paperclip"></i></a>
      <a :disabled="true" v-if="false" class="ms-3 text-muted" href="#!"><i class="fas fa-smile"></i></a>
      <a @click="sendMessage" :disabled="loading" class="ms-3 link-info" href="#!"><i class="fas fa-paper-plane"></i></a>
    </div>
    <audio muted  ref="myaudio" style="display:none" src="/assets/sound/new-msg-chat.m4r" />
  </div>
</template>

<script>
import userAPI from '@/services/api/user';
import showMsg from './group-msg'
export default {
  name: 'd-chat-card',
  props: {
    item: {}

  },
  data: (vm) => {
  return {
     audio : null,
    group:`chat-card-${vm.item.id}`,
    loading:false,
    itemForm:{
      to_user_id:vm.item.id,
      message:''
    },
    messages: []
  }
},
  components: {
    showMsg

  },
  methods: {
    async sendMessage(evt){
      if(evt) evt.preventDefault();
      
      this.loading = true;
      let formData=  this.loadObjectToForm(this.itemForm)
      //formData.append('from_user_id',this.user.id)
      try {
        let { data} = await userAPI.sendMessageChat(formData)
        if(data.success){
          this.addMsg({...data.data,user_id:this.user.id,user_image:this.user.image})
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
      return datep.toLocaleString("en-GB")
    },
    addMsg(msg,load=false) {
      console.mylog("adding message",msg)
      let time = msg.created_at.split('T')[1]
      time = time.substring(0, 5)
      if (this.messages.length == 0) {
        let m = {
          id: msg.id,
          user_id: msg.user_id,
          user_image: msg.user_image,
          user_name: msg.user_name,
          list: [{ ...msg,time }]
        }
        if(load)
        this.messages.unshift(m)
        else
        this.messages.push(m)
      } else {
        let last = this.messages[this.messages.length - 1]
        if (last.user_id == msg.user_id && last.list[last.list.length - 1].date == msg.date) {
          if(load)
          last.list.unshift({...msg,time})
        else
          last.list.push({...msg,time})
        } else {
          let m = {
            id: msg.id,
            user_id: msg.user_id,
            user_image: msg.user_image,
          user_name: msg.user_name,
            list: [{ ...msg ,time}]
          }
          if(load)
        this.messages.unshift(m)
        else
          this.messages.push(m)
        }

      }
      //console.mylog('sdqs aud',this.audio)
     if(msg.sender_id != this.user.id)
     if(this.audio && !load)
      this.audio.play()

    },
    onloadedmetadata(event){
        this.audio = event.target;
    },
    async initializing(message_id) {
      let formData = new FormData();
      formData.append('to_user_id',this.item.id)
      if(message_id)
      formData.append('message_id',message_id)

     try {
      let { data } = await userAPI.loadMessageChat(formData);
        if(data.success){
          data.data.forEach((element)=>{
            //console.mylog('element',element)
            this.addMsg({...element,user_id:this.user.id,user_image:this.user.image})
          })
          console.mylog('success',data)
        }
     } catch (error) {
      //
      console.mylog('error',error)
     }

    }
  },
  created(){
    window.EventBus.listen(this.group,this.addMsg)
  },
  beforeDestroy(){
    if(this.$refs['myaudio']){
        this.$refs.myaudio.removeEventListener('loadedmetadata',this.onloadedmetadata);
    }
    window.EventBus.off(this.group,this.addMsg)

  },
  mounted() {
    //this.audio = new Audio()
    if(this.$refs['myaudio']){
            this.$refs.myaudio.addEventListener('loadedmetadata',this.onloadedmetadata);
    }
    console.mylog('mounted')
    //if (process.env.NODE_ENV == 'development') {
      this.initializing()
    //}
  }
}
</script>

<style scoped>
.form-control {
  border-color: transparent;
}

.form-control:focus {
  border-color: transparent;
  box-shadow: inset 0px 0px 0px 1px transparent;
}

.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}

.card {
  width: 328px
}

.card-header {
  display: flex;
  padding: 5px 10px;
  align-items: center;
  /*justify-content: space-between;*/
}

.card-body {
  position: relative;
  height: 347px;
  overflow-y: auto;
}

.chat-avatar {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  min-height: 32px;
  min-width: 32px;
  flex-shrink: 0;
}

.chat-title {
  flex: 1;
  font-size: .9375rem;
  line-height: 1.3333;
  padding: 0 5px;
}

.chat-actions {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.chat-actions>.chat-action{
cursor: pointer;
}
</style>