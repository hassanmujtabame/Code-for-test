<template>
<span class="time-card" 
            :class="{selected:isSelected}"
                
                @click="$emit('click',value)" 
            >{{ value }}</span>
</template>
<script>
export default {
props:{
    value:{},
    isSelected:{
        type:Boolean,
        default:false,
    }
},watch:{
    isSelected(){}
}
}
</script>

<style scoped>
.time-card{
    cursor: pointer;
    border: 1px solid #c1c1c1;
    padding: 5px;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    /* identical to box height, or 142% */
    color: #737373;
    border-radius: 4px;
    min-width: 60px;
    text-align: center;
    margin: 0 5px;
}
.time-card.selected{
    background: #1FB9B3;
    color:white;
}
</style>