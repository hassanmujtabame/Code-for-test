<template>
   <div style="margin-top: 96px;">
        <div class="container">



                <!-- section header-->
                <SectHeader />
              <!-- section jobs for you -->
              <SectJobsForYou />
              <!--section jobs you apply-->
              <SectJobsYouApply />
              <!--section jobs you open-->
              <SectJobsYouOpen />

        </div>

    </div>
</template>

<script>
import SectHeader from './sections/sect-header/index.vue'
import SectJobsForYou from './sections/sect-jobs-for-you/index.vue'
import SectJobsYouApply from './sections/sect-jobs-you-apply/index.vue'
import SectJobsYouOpen from './sections/sect-jobs-you-open/index.vue'

export default {
name:'controle-jobs',
components:{
    SectHeader,
    SectJobsForYou,
    SectJobsYouApply,
    SectJobsYouOpen,
}
}
</script>

<style>

</style>