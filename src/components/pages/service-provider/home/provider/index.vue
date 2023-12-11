<template>
    <div>
        <div class="container" style="margin-top: 200px;">
            <div class="row">
                <ul class="nav nav-pills mb-3 justify-content-center text-center">
                    <li class="nav-item col-12 col-md-3">
                        <!-- <router-link to="ready-services" class="nav-link  border w-75 t-c m-auto active">اطلب خدمة
                            جديدة</router-link> -->

                        <button @click="openAddService($event, closeNavList)"
                            class="nav-link  border w-75 t-c m-auto active" style="height: 100%">
                            {{ userIsRoleProvider ? $t('add-new-service') : $t('add-new-request') }}
                        </button>
                    </li>
                    <li class="nav-item col-12 col-md-3">
                        <router-link to="my-offers" class="nav-link  border w-75 t-c m-auto ">
                            عروضي المرسلة
                        </router-link>
                    </li>
                    <li class="nav-item col-12 col-md-3">
                        <router-link to="ready-services/purchase-requests" class="nav-link  border w-75 t-c m-auto ">
                            خدمات قيد التنفيذ
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="row">
                <SectionSearch />
            </div>
            <div class="row">
                <SectionServices />
                <!-- <SectionBrowsing /> -->
            </div>

        </div>

        <SectionLearning />
    </div>
</template>

<script>
import SectionLearning from "@/views/service-provider/common-components/section-continue-learning/index.vue";
import SectionSearch from './parts/section-search/index'
import SectionServices from './parts/section-recent-services/index'
import SectionBrowsing from './parts/section-browsing/index'
export default {
    name: 'request-purchase-services',
    data: () => {
        return {
            status: null,
        }
    },
    components: { SectionSearch, SectionServices, SectionBrowsing, SectionLearning },
    methods: {
        openAddService(evt) {
            evt.preventDefault();
            // closeNavList()
            if (!this.userIsRoleProvider)
                this.fireOpenDialog('add-proposal')
            else
                this.fireOpenDialog('add-ready-service-dialog')
        },
    },
    computed: {
        userIsRoleProvider() {
            return this.$store.state.isProviderRole
        }
    },
}
</script>