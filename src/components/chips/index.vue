<template>
  <div class="d-chip" :class="$attrs.class??''">
  <div class="d-chip__wrapper">
    <div v-if="item.image" class="d-chip__avatar">
                        <img :src="item.image" />
                    </div>
                    <div class="d-chip__content">{{ item.name }}</div>
                    
                    <div class="d-chip__close" @click="closeItem">
                        <button><i class="fa fa-times"></i></button>
                    </div>
</div>
                </div>
</template>

<script>
export default {
name:'d-chip',
props:{
    item:{}
},
data:()=>({}),
methods:{
    closeItem(){
        this.$emit('close',this.item)
    }
}
}
</script>

<style scoped>
.d-chip__wrapper{
    padding:5px;
    border-radius: 6px;
    background: linear-gradient(#d764e6, #9198e5);
    color:white;
    font-size: 16px;
    display:flex;
    align-items: center;
    
    gap: 0.25rem;
}
.d-chip__close,.d-chip__avatar{
    flex-shrink: 0;
}
.d-chip__content{
    flex:1;
    font-size: 0.75rem;
}
.d-chip__close>button{
    all:unset;
    cursor: pointer;
    padding: 2px;
    border-radius: 50%;
    width:15px;
    height:15px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e04a4a;
}
.d-chip__avatar{
    width:15px;
    height:15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.d-chip__avatar>img{
    width:15px;
    height:15px;
    min-width:15px;
    min-height:15px;
}
</style>