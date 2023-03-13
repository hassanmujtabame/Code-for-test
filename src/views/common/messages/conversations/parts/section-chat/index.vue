<template>
  <div class="chat-conversation">
  <div class="chat-conversation__header border-bottom">
  <div class="chat-conversation__header-wrapper">
  <div class="chat-conversation__header-user">
  <img class="chat-conversation__header-user-avatar" :src="item.image" />
  <div class="chat-conversation__header-user-name">
    <h1>{{ item.title }}</h1></div>

  </div>
  <div class="chat-conversation__header-actions">
    <span><i class="fa fa-video"></i></span>
    <span><i class="fa fa-phone"></i></span>
    <span>|</span>
    <span><i class="fa fa-search"></i></span>
    <span><i class="fa fa-ellipsis-vertical"></i></span>
  </div>

  </div>
  </div>
  <div class="chat-conversation__body">
    <showMsg v-for="(chatter, i) in messages" :key="i" :chatter="chatter">
       
      </showMsg>
  </div>
  <div class="chat-conversation__footer"></div>

  </div>
</template>

<script>
import showMsg from './group-msg.vue'
import userAPI from '@/services/api/user';

export default {
 name:'chat-conversation-section',
 props:{
  item:{
    default:()=>{
      return {id:197,title:'Robert Fox',subtitle:'hi, I am robet, i am waiting you on big house',time:'11:00 AM',image:'https://i.pravatar.cc/150?img=3'}
    }
  }
 },
 data: (vm) => {
  return {


     audio : null,
    loading:false,
    group:`chat-card-${vm.item.id}`,
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
      let d = this.dateToString(datep)
      let t = this.timeToString(datep)
      return `${d}T${t}`
    },
    addMsg(msg) {
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
        this.messages.push(m)
      } else {
        let last = this.messages[this.messages.length - 1]
        if (last.user_id == msg.user_id && last.list[last.list.length - 1].date == msg.date) {
          last.list.push({...msg,time})
        } else {
          let m = {
            id: msg.id,
            user_id: msg.user_id,
            user_image: msg.user_image,
          user_name: msg.user_name,
            list: [{ ...msg ,time}]
          }
          this.messages.push(m)
        }

      }
      //console.mylog('sdqs aud',this.audio)
     if(msg.sender_id != this.user.id)
     if(this.audio)
      this.audio.play()

    },
    onloadedmetadata(event){
        this.audio = event.target;
    },
    initializing() {
      let yestarday = new Date();
      yestarday.setDate(yestarday.getDate() - 1)
      let today = new Date();

      this.addMsg({ id: 1,user_id: this.user.id,user_name: this.user.name, user_image: this.user.image, message: 'hi', created_at: this.setTimeDate(yestarday, '23:58'), time: '23:58' })
      this.addMsg({ id: 2,user_id: this.user.id,user_name: this.user.name, user_image: this.user.image, message: 'How are you ...???', created_at: this.setTimeDate(yestarday, '23:58'), time: '23:58' })
      this.addMsg({ id: 3,user_id: this.user.id,user_name: this.user.name, user_image: this.user.image, message: 'What are you doing tomorrow? Can we come up a bar?', created_at: this.setTimeDate(yestarday, '23:58'), time: '23:58' })

      this.addMsg({ id: 4,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "Hiii, I'm good.", created_at: this.setTimeDate(today, '00:06'), time: '00:06' })
      this.addMsg({ id: 5,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "How are you doing?", created_at: this.setTimeDate(today, '00:06'), time: '00:06' })
      this.addMsg({ id: 6,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "Long time no see! Tomorrow office. will be free on sunday.", created_at: this.setTimeDate(today, '00:06'), time: '00:06' })

      this.addMsg({ id: 7,user_id: this.user.id,user_name: this.user.name, user_image: this.user.image, message: "Okay", created_at: this.setTimeDate(today, '00:07'), time: '00:07' })
      this.addMsg({ id: 8,user_id: this.user.id,user_name: this.user.name, user_image: this.user.image, message: "We will go on Sunday?", created_at: this.setTimeDate(today, '00:07'), time: '00:07' })

      this.addMsg({ id: 9,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "That's awesome!", created_at: this.setTimeDate(today, '00:09'), time: '00:09' })
      this.addMsg({ id: 10,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "I will meet you Sandon Square sharp at 10 AM", created_at: this.setTimeDate(today, '00:09'), time: '00:09' })
      this.addMsg({ id: 11,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "Is that okay?", created_at: this.setTimeDate(today, '00:09'), time: '00:09' })

      this.addMsg({ id: 12,user_id: this.user.id,user_name: this.user.name, user_image: this.user.image, message: "Okay i will meet you on Sandon Square", created_at: this.setTimeDate(today, '00:011'), time: '00:11' })

      this.addMsg({ id: 13,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "Do you have pictures of Matley Marriage?", created_at: this.setTimeDate(today, '00:011'), time: '00:11' })

      this.addMsg({ id: 14,user_id: this.user.id,user_name: this.user.name, user_image: this.user.image, message: "Sorry I don't have. i changed my phone.", created_at: this.setTimeDate(today, '00:013'), time: '00:13' })

      this.addMsg({ id: 15,user_id: this.item.id,user_name: this.item.name, user_image: this.item.image, message: "Okay then see you on sunday!!", created_at: this.setTimeDate(today, '00:015'), time: '00:15' })
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
    if (process.env.NODE_ENV == 'development') {
      this.initializing()
    }
  }
}
</script>

<style>

.chat-conversation__header-wrapper{
  padding:15px 15px;
  display: flex;
}
.chat-conversation__body{
  padding: 10px 10px;
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
</style>