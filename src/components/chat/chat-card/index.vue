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

      <input v-model="itemForm.message" @keypress.enter="sendMessage" class="form-control form-control-sm"  :placeholder="$t('type-message')">
      <a :disabled="true" v-if="false"  class="ms-1 text-muted" href="#!"><i class="fas fa-paperclip"></i></a>
      <a :disabled="true" v-if="false" class="ms-3 text-muted" href="#!"><i class="fas fa-smile"></i></a>
      <a @click="sendMessage" :disabled="loading" class="ms-3 link-info" href="#!"><i class="fas fa-paper-plane"></i></a>
    </div>
  </div>
</template>

<script>
import showMsg from './group-msg'
export default {
  name: 'd-chat-card',
  props: {
    item: {}

  },
  data: (vm) => {
  return {
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
      formData.append('from_user_id',this.user.id)
      try {
        let { data} = await this.$axios.post('https://laravel8.test:8443/api/v1/user/send-message',formData)
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
    addMsg(msg) {
      if (this.messages.length == 0) {
        let m = {
          id: msg.id,
          user_id: msg.user_id,
          user_image: msg.user_image,
          user_name: msg.user_name,
          list: [{ ...msg }]
        }
        this.messages.push(m)
      } else {
        let last = this.messages[this.messages.length - 1]
        if (last.user_id == msg.user_id && last.list[last.list.length - 1].date == msg.date) {
          last.list.push(msg)
        } else {
          let m = {
            id: msg.id,
            user_id: msg.user_id,
            user_image: msg.user_image,
          user_name: msg.user_name,
            list: [{ ...msg }]
          }
          this.messages.push(m)
        }

      }

    },
    initializing() {
      let yestarday = new Date();
      yestarday.setDate(yestarday.getDate() - 1)
      let today = new Date();

      this.addMsg({ id: 1,user_id: this.user.id,user_name: this.user.name, user_image: this.user.image, message: 'hi', datetime: this.setTimeDate(yestarday, '23:58'), time: '23:58' })
      this.addMsg({ id: 2,user_id: this.user.id,user_name: this.user.name, user_image: this.user.image, message: 'How are you ...???', datetime: this.setTimeDate(yestarday, '23:58'), time: '23:58' })
      this.addMsg({ id: 3,user_id: this.user.id,user_name: this.user.name, user_image: this.user.image, message: 'What are you doing tomorrow? Can we come up a bar?', datetime: this.setTimeDate(yestarday, '23:58'), time: '23:58' })

      this.addMsg({ id: 4,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "Hiii, I'm good.", datetime: this.setTimeDate(today, '00:06'), time: '00:06' })
      this.addMsg({ id: 5,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "How are you doing?", datetime: this.setTimeDate(today, '00:06'), time: '00:06' })
      this.addMsg({ id: 6,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "Long time no see! Tomorrow office. will be free on sunday.", datetime: this.setTimeDate(today, '00:06'), time: '00:06' })

      this.addMsg({ id: 7,user_id: this.user.id,user_name: this.user.name, user_image: this.user.image, message: "Okay", datetime: this.setTimeDate(today, '00:07'), time: '00:07' })
      this.addMsg({ id: 8,user_id: this.user.id,user_name: this.user.name, user_image: this.user.image, message: "We will go on Sunday?", datetime: this.setTimeDate(today, '00:07'), time: '00:07' })

      this.addMsg({ id: 9,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "That's awesome!", datetime: this.setTimeDate(today, '00:09'), time: '00:09' })
      this.addMsg({ id: 10,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "I will meet you Sandon Square sharp at 10 AM", datetime: this.setTimeDate(today, '00:09'), time: '00:09' })
      this.addMsg({ id: 11,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "Is that okay?", datetime: this.setTimeDate(today, '00:09'), time: '00:09' })

      this.addMsg({ id: 12,user_id: this.user.id,user_name: this.user.name, user_image: this.user.image, message: "Okay i will meet you on Sandon Square", datetime: this.setTimeDate(today, '00:011'), time: '00:11' })

      this.addMsg({ id: 13,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "Do you have pictures of Matley Marriage?", datetime: this.setTimeDate(today, '00:011'), time: '00:11' })

      this.addMsg({ id: 14,user_id: this.user.id,user_name: this.user.name, user_image: this.user.image, message: "Sorry I don't have. i changed my phone.", datetime: this.setTimeDate(today, '00:013'), time: '00:13' })

      this.addMsg({ id: 15,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "Okay then see you on sunday!!", datetime: this.setTimeDate(today, '00:015'), time: '00:15' })
    }
  },
  created(){
    window.EventBus.listen(this.group,this.addMsg)
  },
  beforeDestroy(){
    window.EventBus.off(this.group,this.addMsg)

  },
  mounted() {
    if (process.env.NODE_ENV == 'development') {
      //this.initializing()
    }
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