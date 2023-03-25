<template>
<div class="d-loading">
          <div  class="d-loading__wrapper" :style="{ 'background-color':`${color}`}"></div>
</div>
</template>

<script>
export default {
name:'d-laoding-circle-fill',
props:{
    color:{
        type:String,
        default:'var(--m-color)'
    }
}
}
</script>

<style scoped>
.d-loading{
  height:80px;
  width:80px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.d-loading__wrapper{
  width:100%;
  height:100%;
  display: flex;
  border-radius: 50%;
  animation: mymove 500ms infinite;
}
@keyframes mymove {
  from {width:100%;height:100%;opacity: 1;}
  to {width: 0%;height: 0%;opacity: 0;}
}
</style>