<template>
  <div class="row border mt-5">
        <div class="col-md-4 border-end  text-center p-2 ">
    <balanceCard 
    title="الرصيد الكلي" 
    :value="0" 
    img="/assets/svg/balance-total.svg" 
    />
    </div>
    <div class="col-md-4 border-end  text-center p-2 ">
    <balanceCard 
    title="الرصيد المعلق" 
    :value="0" 
    img="/assets/svg/balance-outstanding.svg"
    class-value="text-danger" 
    />
    </div>
    <div class="col-md-4 border-end  text-center p-2 ">
    <balanceCard 
    title="الرصيد المتاح" 
    :value="0" 
    class-value="text-warning"
    img="/assets/svg/balance-available.svg" 
    />
    </div>
  </div>
</template>

<script>
import balanceCard from './card.vue';
export default {
 name:'section-balance',
 components:{
  balanceCard
 }
}
</script>

<style>

</style>