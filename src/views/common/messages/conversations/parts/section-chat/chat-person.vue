<template>
  <div class="chat-conversation h-100">
    <div class="chat-conversation__header border-bottom">
      <div class="chat-conversation__header-wrapper">
        <div class="chat-conversation__header-user">
          <img class="chat-conversation__header-user-avatar" :src="item.user_image" />
          <div class="chat-conversation__header-user-name">
            <h1>{{ item.user_name }}</h1>
          </div>

        </div>
        <div v-if="false" class="chat-conversation__header-actions">
          <span><i class="fa fa-video"></i></span>
          <span><i class="fa fa-phone"></i></span>
          <span>|</span>
          <span><i class="fa fa-search"></i></span>
          <span><i class="fa fa-ellipsis-vertical"></i></span>
        </div>

      </div>
    </div>
    <div class="chat-conversation__body chat-view" id="chat-view">

      <div v-for="(dateMsg, i) in Object.keys(messages).reverse()" :key="i">
        <showDivider :text="dateMsg" isDate></showDivider>
        <showMsg v-for="(chatter, j) in messages[dateMsg]" :key="`chatters${j}`" :chatter="chatter">

        </showMsg>
      </div>
    </div>
    <div class="chat-conversation__footer">
      <div class="chat-conversation__footer-wrapper">
        <div class="chat-conversation__footer-message">
          <input :disabled="loading" @keypress.enter="sendMessage" type="text" v-model="itemForm.message"
            class="form-control" :placeholder="$t('type-message')" />
          <button :disabled="loading" @click="sendMessage" class="btn-send">
            <i class="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import showMsg from './group-msg.vue'
import userAPI from '@/services/api/user';
import { mapGetters } from 'vuex';
import mixinChat from '@/common/mixins/mixin-chat.vue';
import showDivider from '@/components/chat/chat-card/divider-chat.vue'
export default {
  mixins: [mixinChat],
  name: 'chat-conversation-person-section',
  props: {
    item: {
      type: [Array, Object],
      require: true
    }
  },
  data: (vm) => {
    return {
      audio: null,
      loading: false,
      group: `chat-card-${vm.item.user_id}`,
      itemForm: {
        to_user_id: vm.item.user_id,
        message: ''
      },
      messages: [],
    }
  },
  computed: {
    ...mapGetters({
      mymessages: 'chat/messages'
    })
  },
  components: {
    showMsg,
    showDivider
  },
  watch: {
    mymessages: {
      deep: true,
      immediate: true,
      handler() {
        this.loadMsgsFromStore()
      }
    },
    item: {
      deep: true,
      immediate: true,
      handler() {
        //this.itemForm.to_user_id=this.item.user_id;
        //this.group=`chat-card-${this.item.user_id}`,
        this.messages = []
        this.initializing()
      }
    }
  },
  methods: {
    loadMsgsFromStore() {
      this.messages = []
      this.$store.getters['chat/messages'].filter(c => (c.receiver_id == this.item.user_id && c.sender_id == this.user.id) || (c.sender_id == this.item.user_id && c.receiver_id == this.user.id)).sort((a, b) => { return a.created_at > b.created_at ? -1 : 1 }).forEach(msg => this.addMsgLoadByDate(msg, this.item.user_image, this.item.user_name))
      this.$nextTick(() => {
        window.$('#chat-view').animate({ scrollTop: document.getElementById('chat-view').scrollHeight }, "fast");
      })
    },
    async sendMessage(evt) {
      if (evt) evt.preventDefault();

      this.loading = true;
      let formData = this.loadObjectToForm(this.itemForm)
      //formData.append('from_user_id',this.user.id)
      try {
        let { data } = await userAPI.sendMessageChat(formData)
        if (data.success) {
          let datetime = data.data.created_at.substring(0, 16)
          let time = datetime.split('T')[1]
          let date = datetime.split('T')[0]
          let new_message = { ...data.data, datetime, date, time, user_id: this.user.id, user_image: this.user.image }
          this.$store.commit('chat/ADD_MESSAGE', new_message)

          this.itemForm.message = '';
        }
      } catch (error) {
        console.mylog('errr', error)
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
    onloadedmetadata(event) {
      this.audio = event.target;
    },
    async initializing(message_id) {
      if (!message_id) {
        let ms = this.$store.getters['chat/messages'].filter(c => (c.receiver_id == this.item.user_id && c.sender_id == this.user.id) || (c.sender_id == this.item.user_id && c.receiver_id == this.user.id))
        if (ms.length > 0) {
          this.loadMsgsFromStore()
          return;
        }
      }
      let formData = new FormData();
      formData.append('to_user_id', this.item.user_id)
      if (message_id)
        formData.append('message_id', message_id)

      try {
        let { data } = await userAPI.loadMessageChat(formData);
        if (data.success) {
          this.$store.commit('chat/ADD_MESSAGES', data.data.map(m => {
            let datetime = m.created_at.substring(0, 16)
            let time = datetime.split('T')[1]
            let date = datetime.split('T')[0]
            if (m.sender_id == this.user.id)
              return { ...m, time, date, datetime, user_id: this.user.id, user_image: this.user.image }
            else
              return { ...m, time, date, datetime, user_id: m.sender_id }
          }))
          /*data.data.forEach((element)=>{
            //console.mylog('element',element)
            let datetime = element.created_at.substring(0,16)
            let time = datetime.split('T')[1]
            let date =  datetime.split('T')[0]

            if(element.sender_id==this.user.id)
            this.addMsgLoad({...element,time,date,datetime,user_id:this.user.id,user_image:this.user.image})
            else
            this.addMsgLoad({...element,time,date,datetime,user_id:element.sender_id})

          })*/
          console.mylog('success', data)
        }
      } catch (error) {
        //
        console.mylog('error', error)
      }

    }
  },
  created() {
    window.EventBus.listen(this.group, this.loadMsgsFromStore)
  },
  beforeDestroy() {
    if (this.$refs['myaudio']) {
      this.$refs.myaudio.removeEventListener('loadedmetadata', this.onloadedmetadata);
    }
    window.EventBus.off(this.group, this.loadMsgsFromStore)

  },
  mounted() {
    //this.audio = new Audio()
    if (this.$refs['myaudio']) {
      this.$refs.myaudio.addEventListener('loadedmetadata', this.onloadedmetadata);
    }
    /* if (process.env.NODE_ENV == 'development') {
       this.initializing()
     }*/
  }
}
</script>

<style>
.chat-conversation {
  border: 0.5px solid rgba(12, 47, 51, 0.2);

}

.chat-conversation__header-wrapper {
  padding: 15px 15px;
  display: flex;
}

.chat-conversation__body {
  padding: 10px 10px;
  height: calc(100vh - 275px);
  overflow-y: auto;
}

.chat-conversation__header-user {
  flex-grow: 1;
}

.chat-conversation__header-actions {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.chat-conversation__header-actions>span {
  padding: 0 10px
}

.chat-conversation__header-user-avatar {
  border-radius: 10px;
  width: 48px;
  height: 48px;
  display: inline-block;
}

.chat-conversation__header-user-name {
  display: inline-flex;
  align-items: center;
  padding: 0 10px;

}

.chat-conversation__header-user-name>h1 {
  font-size: 13px;
  line-height: 15px;
  font-weight: 600;
  color: #5b5b5b;
}

.chat-conversation__footer-message {
  display: flex;
  padding: 15px;
  background-color: #ebf1f7;
  border-radius: 40px;
}

.chat-conversation__footer-message>input {
  flex-grow: 1;
  border: none;
  outline: none;
  box-shadow: none;
  background-color: transparent;
}

.chat-conversation__footer-message>input:focus {
  background-color: transparent;
  border-color: #86b7fe;
  outline: none;
  box-shadow: none;
  /* box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);*/
}

.chat-conversation__footer-message>.btn-send {
  border-radius: 50%;
  background-color: #2787f5;
  color: white;
  font-size: 24px;
  width: 48px;
  height: 48px;
  border: none;
}</style>