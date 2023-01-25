<template>
  <div style="margin-top: 96px;">
        <div class="container my-profile">
            <div class="row">
                <div class="col-md-3 mt-3">
                    
                    <SectionUser />
                </div>
                <div class="col-md-9 mt-3">
                    <!--my service-->
                    <SectionMyService />
                    <!--section gallery-->
                    <SectionGallery />
    
                </div>
            </div>
        </div>

    </div>
</template>

<script>
//import readyServiceAPI from '@/services/api/service-provider/provider/ready-service.js'
import SectionMyService from './parts/section-my-services/index.vue';
import SectionGallery from './parts/section-gallery/index.vue';
import SectionUser from './parts/section-user/index.vue';
export default {
 name:'show-profile-service-provider',
 components:{
    SectionMyService,
    SectionGallery,
    SectionUser
 }
}
</script>

<style>

</style>