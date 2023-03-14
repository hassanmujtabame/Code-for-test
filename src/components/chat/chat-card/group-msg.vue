<template>
  <div  class="d-flex"
        :class="[user.id == chatter.user_id ? 'justify-content-start' : 'flex-row-reverse justify-content-end mb-4 pt-1']">
        <img :src="chatter.user_image" :alt="chatter.user_name" class="chatter-avatar" style="width: 45px; height: 100%;">
        <div class="flex-grow-1" :class="[user.id !== chatter.user_id ? 'd-flex flex-column align-items-end':''] ">
          <showMsg v-for="(msg, j) in chatter.list" :key="`msg-${chatter.id}-${j}`"
            :class="[user.id == chatter.user_id ? 'ms-3 bg-my-msg' : 'me-3 bg-your-msg']">{{ msg.message }}</showMsg>

          <showTime :time="chatter.list[chatter.list.length-1].time" class="d-flex "
            :class="[user.id == chatter.user_id ? 'justify-content-end' : ' justify-content-start']"></showTime>
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
.chatter-avatar{
    border-radius: 50%;
    min-height: 45px;
    min-width: 45px;
    height: 45px;
    width: 45px;
}
.bg-my-msg {
  background-color: #5c60f4;
  width: fit-content;
  color:#fff
}

.bg-your-msg {
  background-color: #f5f6f7;
  width: fit-content;
  color:#636f8a;
}
</style>
