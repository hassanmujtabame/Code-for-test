<template>
  <div class="box">
                            <div class="box bg-white   rounded-4 mt-5 p-2 border">
                                <div class="">

                                    <div class="d-flex justify-content-between border-bottom">
                                        <h4 class="p-2 fs-r-24-40 title-section">
                                            نقاش الخدمة
                                        
                                        </h4>
                                        <p>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.8667 30.3334C6.32003 30.3334 5.8667 29.8801 5.8667 29.3334V2.66675C5.8667 2.12008 6.32003 1.66675 6.8667 1.66675C7.41337 1.66675 7.8667 2.12008 7.8667 2.66675V29.3334C7.8667 29.8801 7.41337 30.3334 6.8667 30.3334Z" fill="#CDD7D8"/>
                                                <path d="M21.8 22.3333H6.8667C6.32003 22.3333 5.8667 21.8799 5.8667 21.3333C5.8667 20.7866 6.32003 20.3333 6.8667 20.3333H21.8C23.2534 20.3333 23.9334 19.9466 24.0667 19.6133C24.2 19.2799 24 18.5333 22.96 17.5066L21.36 15.9066C20.7067 15.3333 20.3067 14.4666 20.2667 13.5066C20.2267 12.4933 20.6267 11.4933 21.36 10.7599L22.96 9.15992C23.9467 8.17325 24.2534 7.37325 24.1067 7.02659C23.96 6.67992 23.2 6.33325 21.8 6.33325H6.8667C6.3067 6.33325 5.8667 5.87992 5.8667 5.33325C5.8667 4.78659 6.32003 4.33325 6.8667 4.33325H21.8C24.72 4.33325 25.6534 5.54659 25.96 6.26659C26.2534 6.98659 26.4534 8.50659 24.3734 10.5866L22.7734 12.1866C22.44 12.5199 22.2534 12.9866 22.2667 13.4533C22.28 13.8533 22.44 14.2133 22.72 14.4666L24.3734 16.1066C26.4134 18.1466 26.2134 19.6666 25.92 20.3999C25.6134 21.1066 24.6667 22.3333 21.8 22.3333Z" fill="#CDD7D8"/>
                                                </svg>
                                                
                                        </p>


                                    </div>

                                </div>
                                <div class="chat-request-service p-2" >
                                    <div class="chat-request-service__wrapper" :id="`chat-request-service-${itemPage.id}`">                                        
                                      <div v-for="(dateMsg, i) in Object.keys(messages).reverse()" :key="i" :chatter="chatter">
                                    <showDivider :text="dateMsg" isDate></showDivider>
                                    <showMsg v-for="(chatter, j) in messages[dateMsg]" :key="`chatters${j}`" :chatter="chatter">
                                    </showMsg>
                                    </div>
                                  </div>
                                    <div>
                                        <ValidationObserver tag="form" @submit="sendMessage" ref="form">
                                            <ValidationProvider
                                            :name="$t('message')"
                                            vid="message"
                                            v-slot="{errors}"
                                            >
                                            <input v-model="message" :disabled="itemPage.status!='underway'" class="w-100 border rounded-3 h-25 p-3" type="text" placeholder="أكتب رسالة جديدة">
                                        <d-error-input :errors="errors" v-if="errors.length" />
                                        </ValidationProvider>
                                            <div class="m-2">
                                                <button :disabled="itemPage.status!='underway'||!message || loading" @click="sendMessage" class="btn btn-custmer border rounded-2 p-2">
                                                    <i v-if="loading" class="fa fa-spinner  fa-spin" aria-hidden="true"></i>
                                                    ارسل رساله 
                                                </button>
                                            </div>
                                        </ValidationObserver>
                                    </div>
                                </div>
                            </div>
                        </div>
</template>

<script>
import { mapGetters } from 'vuex';
import showMsg from '@/components/chat/chat-card/group-msg';
import userAPI from '@/services/api/user';
import showDivider from '@/components/chat/chat-card/divider-chat.vue'
import mixinChat from '@/common/mixins/mixin-chat.vue';
export default {
  mixins:[mixinChat],
 name:'section-conversation',
 props:['itemPage','readyService'],
 components:{
    showMsg,
    showDivider
 },
 data:()=>{
   // let date = new Date('2022-12-10 10:00');
           // let date_only = vm.dateToString(date);
           // let time_only = vm.dateToString(date);
    return {
        loading:false,
        message:'',
        messages:[
            /*{id:1,date:date_only,time:time_only,datetime:date,content:'اهلا وسهلا متحمسة للعمل سويا',time_human:'منذ 17 يوما و 24 دقيقة',isMe:true},
            {id:2,date:date_only,time:time_only,datetime:date,content:'مرحبا ريم كيف حالك ؟',time_human:'منذ 17 يوما و 24 دقيقة',isMe:false},
            {id:3,date:date_only,time:time_only,datetime:date,content:'مرحبا ريم وانا أيضاا سأطلعك على التفاصيل التي ارغب بها ، أخبريني عن ماهي المعلومات التي تحتاجينها فقط',time_human:'منذ 17 يوما و 24 دقيقة',isMe:false},
            {id:4,date:date_only,time:time_only,datetime:date,content:'اهلا وسهلا متحمسة للعمل سويا',time_human:'منذ 17 يوما و 24 دقيقة',isMe:true},
            {id:5,date:date_only,time:time_only,datetime:date,content:'مرحبا ريم كيف حالك ؟',time_human:'منذ 17 يوما و 24 دقيقة',isMe:false},
            {id:6,date:date_only,time:time_only,datetime:date,content:'مرحبا ريم وانا أيضاا سأطلعك على التفاصيل التي ارغب بها ، أخبريني عن ماهي المعلومات التي تحتاجينها فقط',time_human:'منذ 17 يوما و 24 دقيقة',isMe:false},
    */]
    }
 },
 computed:{
  ...mapGetters({
      mymessages:'chat/requestServiceMessages'
  })
},
 watch:{
  mymessages:{
      deep:true,
      immediate:true,
      handler(){
        this.loadMsgsFromStore()
      }
    },
},
 methods:{
    loadMsgsFromStore(){
      this.messages = []
      let other_user_name = this.isOwner? this.itemPage.service.user_info.name:this.itemPage.user_info.name;
      let other_user_image = this.isOwner?this.itemPage.service.user_info.image:this.itemPage.user_info.image;
      
      this.$store.getters['chat/requestServiceMessages'].filter(c=>c.request_id==this.itemPage.id).sort((a, b)=>{return a.created_at > b.created_at?-1:1}).forEach(msg=>this.addMsgLoadByDate(msg,other_user_image,other_user_name))
      
      this.$nextTick(()=>{
        let id= `chat-request-service-${this.itemPage.id}`
        window.$("#"+id).animate({scrollTop: document.getElementById(id).scrollHeight},"fast");

      })
    },
    listenToChannel(){
        if(this.itemPage.status!='underway') return;
    window.Echo.private(`chat-request-service.${this.itemPage.id}`)
    .listen('.send.message.request-service', (e) => {
        let messageData = this.convertToMsg(e)  
                //this.openLocal({user:item,message:messageData})
              this.addMsg(messageData)  
        console.mylog('send.message.request-service',e)
        console.mylog('private-request-service',e);
    });
  },
    
    async sendMessage(evt){
        this.loading =  true;
        evt.preventDefault();
        
            let valid =  this.$refs.form.validate();
            if(!valid){
                console.log('invalid')
                this.loading =  false;
                return;
            }
            let formData = new FormData();
            formData.append('message',this.message)
            formData.append('request_id',this.itemPage.id)
            try {
                let { data } = await  userAPI.sendMessageRequestService(formData)
                //let { data } = await window.axios.post('service-provider/user/send-message-to-provider',formData)
                 if(data.success){
                    let datetime = data.data.created_at.substring(0,16)
                    let time = datetime.split('T')[1]
                    let date =  datetime.split('T')[0]
                    let new_message = {...data.data,datetime,date,time,user_id:this.user.id,user_image:this.user.image}
                    this.$store.commit('chat/ADD_MESSAGE_REQUEST_SERVICE',new_message)
                // this.addMsg({...data.data,time,date,datetime,user_id:this.user.id,user_image:this.user.image})
                this.message = '';
                 }else{
                  window.SwalError(data.message)
                 }
            } catch (error) {
                //
            }
            this.loading =  false;
            
    
        },
         convertToMsg(e){
        let {sender_id,user_image,user_name,...msg} = e;
        //let item ={id:sender_id,image:user_image,name:user_name}
        let datetime = msg.created_at.substring(0,16)
        let time = datetime.split('T')[1]
            let date =  datetime.split('T')[0]
        return {user_id:sender_id,sender_id,user_image,user_name,time,date,datetime,...msg}
  },
    addMsg(msg) {
     this.$store.commit('chat/ADD_MESSAGE_REQUEST_SERVICE',msg)
     if(msg.sender_id != this.user.id)
     if(this.audio)
      this.audio.play()
    },
    async initializing(message_id) {
      if(!message_id){
        let ms= this.$store.getters['chat/requestServiceMessages'].filter(c=>c.request_id==this.itemPage.id)
        if(ms.length>0){
          this.loadMsgsFromStore()
          return;
        }
      }
      let formData = new FormData();
      formData.append('request_id',this.itemPage.id)
      if(message_id)
      formData.append('message_id',message_id)

     try {
      let { data } = await userAPI.loadMessageRequestService(formData);
        if(data.success){
          data.data.forEach(m=>{
            let newMsg =this.convertToMsg(m)
            this.$store.commit('chat/ADD_MESSAGE_REQUEST_SERVICE',newMsg);
          })
          
        }
     } catch (error) {
      //
      console.mylog('error',error)
     }

    }

 },
 created(){
    //window.EventBus.listen(this.group,this.openLocal)
  },
  beforeDestroy(){
    window.Echo.leaveChannel(`chat-request-service.${this.itemPage.id}`);
    //window.EventBus.off(this.group,this.openLocal)

  },
  mounted(){
    this.initializing()
    this.listenToChannel()
  }
}
</script>

<style>
.chat-request-service__wrapper{
  height: 200px;
  overflow-y: auto;
}
</style>