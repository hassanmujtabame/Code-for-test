<template>
   <div class="avatar-user-chat">
        <img :src="image" :alt="name" >
        <statusUserCircle  :dir="positionStatusCircle" :status="statusUser"/>
      </div>
</template>

<script>
import statusUserCircle from './status-user.vue'
export default {
 name:'d-avatar-chat',
 components:{
    statusUserCircle
 },
 props:{
    userId:{},
    name:{},
    image:{},
    dir:{},
    status:{}
 },
 computed:{
    statusUser(){
        return this.onlineUsers.find(u=>u.id==this.userId)?'online':'offline'
    },
    positionStatusCircle(){
        if(this.dir) return this.dir;
        if(this.$i18n.locale=='ar')
        return this.userId==this.user.id?'left':'right';
        return this.userId==this.user.id?'right':'left';
    }
 }
}
</script>

<style>

</style>