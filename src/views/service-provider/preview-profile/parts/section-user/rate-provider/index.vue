<template>
    <div class="rates-provider">
        <div class="box bg-white border">
            <div class="p-1">

                <div class="d-flex justify-content-between border-bottom">
                    <h4 class="rates-provider-title w-100">
                        تقيم مقدم الخدمة </h4>


                </div>

            </div>
            <div>
                <rateCard v-for="(rateItem,i) in items" :key="i"
                :item="rateItem" 
                :showBorder="(items.length-1)>i"
                />
            </div>

        </div>
    </div>
</template>

<script>
import rateCard from './rate-card.vue';
export default {
    name: 'rate-provider-box',
    components:{
        rateCard
    },
     props:{
    items:{
        type:[Object,Array],
        require:true
    }
    }
}
</script>

<style scoped>
.rates-provider-title{
    font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */

text-align: center;
text-transform: capitalize;

/* 414042 */

color: #414042;
}
</style>