<template>
  <div  class="message-group"
        :class="[user.id == chatter.user_id ? 'justify-content-start' : 'flex-row-reverse justify-content-end mb-4 pt-1']">
        <div class="d-flex align-items-end">
        <img :src="chatter.user_image" :alt="chatter.user_name" class="message-group-avatar" />
        </div>
        <div class="message-group-chat" :class="[user.id !== chatter.user_id ? 'align-items-end':''] ">
        
          <showMsg v-for="(msg, j) in chatter.list" :key="`msg-${chatter.id}-${j}`"
            :class="[user.id == chatter.user_id ? 'ms-3 bg-my-msg' : 'me-3 bg-your-msg']">{{ msg.message }}</showMsg>
            <showTime :time="chatter.list[chatter.list.length-1].time" class="d-flex "
            :class="[user.id == chatter.user_id ? 'justify-content-start' : ' justify-content-start']"></showTime>
        
          </div>
      </div>
</template>

<script>
import showMsg from './show-msg'
import showTime from './show-time'
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
