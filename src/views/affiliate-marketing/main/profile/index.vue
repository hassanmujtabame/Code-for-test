<template>
    <div class="container">
        <h1>
            اعدادات الملف الشخصى
        </h1>
        <hr>
        <!-- معومات العرض-->
        <SectionDisplay :currentUser="currentUser" />
        <!--معومات شخصية  -->
        <!-- <SectionPersonal :currentUser="currentUser" /> -->
    </div>
</template>

<script>
import userAPI from '@/services/api/user.js'
import Sidebar from './parts/sidebar/index.vue'
import SectionPaymentCards from './parts/sections/payment-cards/index.vue'
import SectionDisplay from './parts/sections/information-display/index.vue'
import SectionPersonal from './parts/sections/information-personal/index.vue'
import SectionEducation from './parts/sections/information-education/index.vue'
import SectionProfessional from './parts/sections/information-professional/index.vue'
import SectionCommunication from './parts/sections/information-communication/index.vue'
import SectionResidence from './parts/sections/information-residence/index.vue'
import SectionSettingsNotif from './parts/sections/settings-notif/index.vue'
import SectionListBlocks from './parts/sections/list-blocks/index.vue'
import SectionShowerProject from './parts/sections/shower-project/index.vue'
export default {
    name: 'show-profile',
    components: {
        Sidebar,
        SectionDisplay,
        SectionPersonal,
        SectionEducation,
        SectionCommunication,
        SectionProfessional,
        SectionResidence,
        SectionSettingsNotif,
        SectionListBlocks,
        SectionShowerProject,
        SectionPaymentCards,

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
