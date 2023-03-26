<template>
<div class="dropdown">
  <button class="btn m-c dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="fa-solid fa-square-plus"></i>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" @click="selectAction($event,'lecture')">{{$t('add-lecture')}}</a></li>
    <li><a class="dropdown-item" href="#" @click="selectAction($event,'exam')">{{$t('add-exam')}}</a></li>
    <li><a class="dropdown-item" href="#" @click="selectAction($event,'project')">{{$t('add-project')}}</a></li>
  </ul>
</div>
</template>

<script>
export default {
    data:()=>{
        return {

        }
    },
methods:{
    selectAction(evt,type){
        evt.preventDefault();
        
        this.$emit('add',type)
    }
},
mounted(){
    window.$(this.$el.firstChild).dropdown()
}
}
</script>

<style>

</style>