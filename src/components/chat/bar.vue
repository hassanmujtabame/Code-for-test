<template>
<div class="chat-bar">
    <div class="chat-bar__wrapper">
        <div class="chat-bar-circles" v-if="showCards">
            <d-chat-circle v-for="(c,i) in chats.filter(x=>x.status=='minimized')" :key="i" :item="c" @open="onOpen" @close="onClose"/>
        </div>
        <div class="chat-bar-cards" v-if="showCards">
            <d-chat-card v-for="(c,i) in chats.filter(x=>x.status=='opened')" :key="i" :item="c"  @minimized="onMinimized" @close="onClose"/>
        </div>

    </div>
    
</div>
</template>

<script>
import pusherConfig from './pusher-config.vue'

export default {
    mixins:[pusherConfig],
 name:'d-chat-bar',
 data:()=>({
    group:'chat-bar',
    chats:[]
 }),
 computed:{
    showCards(){
        return !this.$route.name || !this.$route.name.endsWith('-conversations');
    }
 },
 watch:{
    connected(){
        if(this.connected){
            this.listenToChannel()
         // this.subscribeToChannel('private-private-chat.'+this.user.id)
          //, Event: App\Events\PrivateChatEvent
        }
    }
 },
 methods:{
  listenToChannel(){
    window.Echo.private(`chat.${this.user.id}`)
    .listen('.send.message.chat', (e) => {
        console.mylog('send.message.chat',e)
        let {sender_id,user_image,user_name,...msg} = e;
        let item ={id:sender_id,image:user_image,name:user_name}
        let datetime = msg.created_at.substring(0,16)
        let messageData ={user_id:sender_id,user_image,user_name,datetime,...msg}
                this.openLocal({user:item,message:messageData})
                
        console.mylog('private-chat',e);
    });
  },
    onMinimized(item){
        let index = this.chats.findIndex(x=>x.id==item.id)
        if(index>-1)
        this.chats[index].status='minimized'
    },
    onOpen(item){
        let index = this.chats.findIndex(x=>x.id==item.id)
        if(index>-1)
        this.chats[index].status='opened'
    },
    onClose(item){
        let index = this.chats.findIndex(x=>x.id==item.id)
        if(index>-1)
        this.chats.splice(index,1)
    },
    openLocal(item){
        /**
         * item :{user,message:null|object}
         */
        let canAdd = true;
        let index = this.chats.findIndex(x=>x.id==item.user.id)
        if(index>-1){
            if(this.chats[index].status!='opened'){
                this.chats[index].status='opened'
                if(this.showCards)
                canAdd=false
            }
        }else{
            if(this.showCards)
            canAdd=false
            let {id,name,image}=item.user
            this.chats.push({id,name,image,status:'opened'})
        }
        if(item.message && canAdd)
        this.$nextTick(()=>{
            this.fireEvent(`chat-card-${item.message.user_id}`,{...item.message})
        })
    }
 },
created(){
    window.EventBus.listen(this.group,this.openLocal)
  },
  beforeDestroy(){
    window.Echo.leaveChannel(`chat.${this.user.id}`);
    window.EventBus.off(this.group,this.openLocal)

  },
   mounted(){
     this.connect()
  }
}
</script>

<style scoped>
.chat-bar{
  position:fixed;
  bottom: 0;
    display: flex;
    z-index: 11;
    background: transparent;
}
.chat-bar__wrapper{
    display: flex;
}
.chat-bar-circles{
    margin: 15px;
    display: flex;
    flex-direction: column-reverse;
    width: 85px;
    align-items: center;
}
.chat-bar-cards{
    display: flex;
}
</style>