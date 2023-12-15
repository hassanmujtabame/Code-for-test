<template>
    <div class="container">
        <h1>
            اعدادات الملف الشخصى
        </h1>
        <hr>
        <!-- معومات العرض-->
        <SectionDisplay :currentUser="currentUser" />
        <!--معومات شخصية  -->
    </div>
</template>

<script>
import userAPI from '@/services/api/user.js'
import SectionDisplay from './parts/sections/information-display/index.vue'
import Sidebar from './parts/sidebar/index.vue'
export default {
    name: 'show-profile',
    components: {
        Sidebar,
        SectionDisplay

    },
    data: () => {
        return {
            currentUser: {},
            loading: true,
            hasError: false,
        }
    },
    methods: {
        async loadCurrentUser() {
            this.loading = true;
            this.hasError = false;
            try {
                let { data } = await userAPI.me()
                if (data.success) {
                    this.currentUser = data.data
                } else {
                    this.hasError = data.message
                }
            } catch (error) {
                if (error.response) {
                    let response = error.response
                    if (response.status == 401) {
                        this.logout()
                    } else {
                        this.hasError = ' هناك خطأ غير معروف يرجي تحديث الصفحة'
                    }
                }

            }
            this.loading = false;
        }
    },
    mounted() {
        this.loadCurrentUser()
    }
}
</script>
