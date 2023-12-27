<template>
  <div  class="message-group"
        :class="[user.id == chatter.user_id ? 'justify-content-start' : 'flex-row-reverse justify-content-end mb-4 pt-1']">
        <avatarChat :image="chatter.user_image" :name="chatter.user_name"
        :userId="chatter.user_id"
        class="message-group-avatar"
      />
        <div class="message-group-chat" :class="[user.id !== chatter.user_id ? 'align-items-end':''] ">
          
          <showChatInfo :dateTime="chatter.created_at" 
          :name="chatter.user_name" 
          :userId="chatter.user_id" 
          />
          
          <showMsg :id="`msg-${chatter.id}`"
            :class="[user.id == chatter.user_id ? 'ms-3 bg-my-msg' : 'me-3 bg-your-msg']">{{ chatter.message }}</showMsg>
        </div>
      </div>
</template>

<script>
import avatarChat from './avatar-chat.vue'
import showMsg from './show-msg.vue'
import showChatInfo from './chat-info.vue'
export default {
    name:'d-group-msg',
 props:{
    chatter:{}
 },
 components:{
    showMsg,
    showChatInfo,
    avatarChat
 }
}
</script>

<style scoped>

</style>
