<template>
  <div class="comment px-4 py-2 "  :class="{'border-bottom':showBorder}">



<div class="d-flex justify-content-between align-items-center">
    <h1 class="m-0 m-c fw-bolder d-flex align-items-center gap-2">
        <div>
            <img class="rounded-circle"
                :src="item.user_info.image" :alt="item.user_info.name" width="50"
                height="50">
        </div>
       {{ item.user_info.name??'N/A' }}
    </h1>
    <p class="m-0">

        <span>
            
            <i v-for="n in starts"  :key="n" class="fa-solid fa-star " :class="{'active':n<=item.rate}"></i>


        </span>
    </p>

</div>

<small class="s-c ">
    {{ item.note}}
</small>
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

<style>

</style>