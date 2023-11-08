<template>
    <div style="margin-top: 96px;">
        <d-overlays-simple v-if="loading" />
        <div v-else-if="hasError">
            هناك خطأ غير معروف يرجي تحديث الصفحة
        </div>
        <div v-else class="container my-profile">
            <div class="row">
                <div class="col-md-3 mt-3">
                    <SectionUser :userPage="userPage" />
                </div>
                <div class="col-md-9 mt-3">
                    <SectionMyService :userPage="userPage" />
                    <SectionGallery :userPage="userPage" />
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
import userAPI from '@/services/api/user.js'
import SectionMyService from './parts/section-my-services/index.vue';
import SectionGallery from './parts/section-gallery/index.vue';
import SectionUser from './parts/section-user/index.vue';
export default {
    name: 'show-profile-service-provider',
    components: {
        SectionMyService,
        SectionGallery,
        SectionUser
    },
    data: () => {
        return {
            loading: true,
            hasError: false,
            userPage: {}
        }
    },
    methods: {
        async initializing() {
            this.loading = true;
            this.hasError = false;
            try {

                let { data } = await userAPI.getUserById(this.$route.params.id)
                if (data.success) {
                    this.userPage = data.data
                } else {
                    this.hasError = true;
                }
            } catch (error) {
                console.log('error', error)
                this.hasError = true;
            }
            this.loading = false;
        },
    },
    mounted() {
        this.initializing()
    }
}
</script>
  
<style></style>