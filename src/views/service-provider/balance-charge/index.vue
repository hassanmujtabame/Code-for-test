<template>
 <div>
    <BodyFormCheckout :title="title" changeable >
      <p class="t-c">يمكنك شحن رصيدك  لاستفادة من الشراء</p>
      </BodyFormCheckout>
 </div>
</template>

<script>
import BodyFormCheckout from '@/common/dialogs/check-out/body-check-out.vue'
export default {
 name:'balance-charge',
 components:{
    BodyFormCheckout
 },
 data:()=>{
    return {
        title:'إشحن رصيدك',
    }
 }
}
</script>

<style>

</style>