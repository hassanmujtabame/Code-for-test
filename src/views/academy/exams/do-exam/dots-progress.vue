<template>
  <div class="do-exam__progress">
                    <div v-for="dot in dots" :key="dot" class="dot" :class="{'dot-active':dot<=value}">
                        <div class="dot__wrapper">
                        </div> 
                    </div>
                    
                
                </div>
</template>

<script>
export default {
  props:{
    dots:{
        type:Number,
        default:5
    },
    value:{
        type:Number,
        default:0
    }
  }
}
</script>

<style scoped>
.do-exam__progress{
    display: flex;
    justify-content: space-evenly;
}
.dot{
    padding: 2px;
}
.dot> .dot__wrapper{
    display:inline-block;
    border-radius: 50%;
width: 16px;
height: 16px;  
 background: #D9D9D9;
}
.dot.dot-active>.dot__wrapper{
    background: var(--m-color);
}
</style>