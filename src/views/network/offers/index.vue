<template>
  <div style="margin-top: 85px" class="consult">
       <!--section-header-->
       <SectionHeader />
       <!--#section-header-->
        <!--section top coupons-->
        <SectionTopCoupons/>
        <!--#section top coupons-->
          <!--section membership-->
          <SectionMembership />
        <!--#section membership-->
        <!--section coupons-->
        <SectionCoupons />
        <!--#section coupons--> 
    
        <addOfferDialog />
  
        </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionTopCoupons from './parts/section-top-coupons/index.vue'
import SectionMembership from './parts/section-membership/index.vue'
import SectionCoupons from './parts/section-coupons/index.vue'
import addOfferDialog from './parts/dialogs/add-offer.vue'
export default {
 name:'offers-page',
 components:{
    SectionHeader,
    SectionTopCoupons,
    SectionMembership,
    SectionCoupons,
    addOfferDialog
 }
}
</script>

<style>

</style>