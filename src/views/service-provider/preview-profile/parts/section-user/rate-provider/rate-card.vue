<template>
  <div class="comment px-2 py-2 "  :class="{'border-bottom':showBorder}">

<div class="d-flex">

<div class="d-flex justify-content-between align-items-center flex-shrink-0">
 
        <div class="">
            <img class="rounded-circle"
                :src="item.image" :alt="item.from_user" width="40"
                height="40">
        </div>
    </div>
    <div class="d-flex flex-grow-1">
        <div class="flex-grow-1 d-flex flex-column px-1">
            <h1 class="rate-item__name">{{ item.from_user??'N/A' }}</h1>
            <div class="rate-item__comment">{{ item.comment}}</div>
        </div>
        <p class="m-0 flex-shrink-0">
            <d-rate-stars :size="12" :value="item.rate"/>
        </p>
        </div>
   
    </div>
</div>
</template>

<script>
export default {
 name:'rate-card',
 props:{
    item:{
        type:[Object,Array],
        require:true
    },
    showBorder:{
        type:Boolean,
        default:false
    }
 },
 data:()=>({
    starts:[5,4,3,2,1]
 })
}
</script>

<style scoped>
.rate-item__name{
    font-style: normal;
font-weight: 400;
font-size: 18px;
    line-height: 20px;
/* identical to box height, or 120% */

text-transform: capitalize;

color: #1FB9B3;
}
.rate-item__comment{
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* or 142% */


color: #737373;
}
</style>