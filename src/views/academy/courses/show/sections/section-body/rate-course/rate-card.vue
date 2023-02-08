<template>
  <div class="comment px-4 py-2 "  :class="{'border-bottom':showBorder}">

<div class="d-flex">

<div class="d-flex justify-content-between align-items-center flex-shrink-0">
 
        <div class="">
            <img class="rounded-circle"
                :src="item.user_info.image" :alt="item.user_info.name" width="50"
                height="50">
        </div>
    </div>
    <div class="d-flex flex-grow-1">
        <div class="flex-grow-1 d-flex flex-column px-3">
            <h1 class="rate-item__name">{{ item.user_info.name??'N/A' }}</h1>
            <div class="rate-item__comment">{{ item.note}}</div>
        </div>
        <p class="m-0 flex-shrink-0">
                <span>
                    <i v-for="n in starts"  :key="n" class="fa-solid fa-star " :class="{'active':n<=item.rate}"></i>
                </span>
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
font-size: 20px;
line-height: 24px;
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