<template>
  <div  class="message-group"
        :class="[user.id == chatter.user_id ? 'justify-content-start' : 'flex-row-reverse justify-content-end mb-4 pt-1']">
        <div class="message-group-avatar">
        <img :src="chatter.user_image" :alt="chatter.user_name"  />
        </div>
        <div class="message-group-chat" :class="[user.id !== chatter.user_id ? 'align-items-end':''] ">
        
          <showMsg v-for="(msg, j) in chatter.list" :key="`msg-${chatter.id}-${j}`"
            :class="[user.id == chatter.user_id ? 'ms-3 bg-my-msg' : 'me-3 bg-your-msg']">{{ msg.message }}</showMsg>
            <showTime :dateTime="chatter.list[chatter.list.length-1].created_at" class="d-flex "
            :class="[user.id == chatter.user_id ? 'justify-content-start' : ' justify-content-start']"></showTime>
        
          </div>
      </div>
</template>

<script>
import showMsg from './show-msg.vue'
import showTime from './show-time.vue'
export default {
    name:'d-group-msg',
 props:{
    chatter:{}
 },
 components:{
    showMsg,
    showTime
 }
}
</script>

<style scoped>
</style>
