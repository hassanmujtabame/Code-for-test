<template>
  <div class="container mt-5">
    <!-- شبكة رياديات: وسع دائرة معارفك-->
            <SectionGrowYourNetwork />
            <!--section network's goals-->
            <SectionNetworkGoals />
            <!--معسكر ريادة الاعمال-->
            <SectionCampLeadership />
        </div>
</template>

<script>
import SectionNetworkGoals from './parts/network-goals.vue'
import SectionCampLeadership from './parts/cam-leadership/index.vue'
import SectionGrowYourNetwork from './parts/grow-your-network/index.vue'
export default {
name:'section-2',
components:{
  SectionGrowYourNetwork,
  SectionNetworkGoals,
  SectionCampLeadership
}
}
</script>

<style>

</style>