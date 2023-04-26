<template>
  <div class="row border mt-5">
        <div class="col-md-4 border-end  text-center p-2 ">
    <balanceCard 
    title="الرصيد الكلي" 
    :value="total_balance" 
    img="/assets/svg/balance-total.svg" 
    />
    </div>
    <div class="col-md-4 border-end  text-center p-2 ">
    <balanceCard 
    title="الرصيد المعلق" 
    :value="outstanding_balance" 
    img="/assets/svg/balance-outstanding.svg"
    class-value="text-danger" 
    />
    </div>
    <div class="col-md-4 border-end  text-center p-2 ">
    <balanceCard 
    title="الرصيد المتاح" 
    :value="available_balance" 
    class-value="text-warning"
    img="/assets/svg/balance-available.svg" 
    />
    </div>
  </div>
</template>

<script>
import balanceCard from './card.vue';
import userAPI from '@/services/api/user';
export default {
 name:'section-balance',
 components:{
  balanceCard
 },
 data:()=>({
  total_balance:0,
        outstanding_balance:0,
        available_balance:0,
 }),
 methods:{
  async initializing(){
      try {
         let { data } = await  userAPI.me()
         if(data.success){
            let {total_balance,outstanding_balance,available_balance} = data.data;
            this.total_balance = total_balance
            this.outstanding_balance = outstanding_balance
            this.available_balance = available_balance
         }
      } catch (error) {
         console.log('error',error)
         console.log('error response',error.response)
         if(error.response){
            let response =error.response
            if(response.status==401){
               this.logout()
           }
         }
         
      }
   }
 },
 mounted(){
  this.initializing()
 }
}
</script>

<style>

</style>