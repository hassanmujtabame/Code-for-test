<template>
  <div class="status-user-chat" :class="[status,dir]">
  <div class="status-user-chat__wrapper"></div>
  </div>
</template>

<script>
export default {
props:{
    status:{
        type:String,
        default:'offline'
    },
    dir:{
        type:String,
        default:'right'
    }
},
watch:{
    status(){
        
    }
}
}
</script>

<style>
.status-user-chat{
    border: 4px solid rgba(109, 110, 109, 0.180392);
border-radius: 50%;
background: white;
}
.status-user-chat__wrapper{
    width: 9px;
height: 9px;
    border-radius: 50%;
}
.status-user-chat.online{
border-color: rgba(4, 224, 19, 0.180392);
}
.status-user-chat.offline{
border-color: rgba(109, 110, 109, 0.180392);
}
.status-user-chat.away{
border-color: rgba(238, 200, 6, 0.180392);
}
.status-user-chat.online>.status-user-chat__wrapper{
    background:  #1FB943;
}
.status-user-chat.offline>.status-user-chat__wrapper{
    background: rgb(109, 110, 109);
}
.status-user-chat.away>.status-user-chat__wrapper{
    background: rgb(238, 200, 6);
}
</style>