<template>
    <DialogSubscribe :xl="false" group="confirm-subscribe" :openDialog="openDialog" :closeDialog="closeDialog">
        <template>
            <p class="px-3">
                حتى تتمكن من الانضمام الى باقي خدمتنا
                (
                <router-link :to="getRouteLocale('incubator-home')" class="m-c">
                    الاكاديمية
                </router-link>
                او
                <router-link :to="getRouteLocale('incubator-home')" class="m-c">
                    الحاضنة
                </router-link>
                او
                <router-link :to="getRouteLocale('service-provider-home')" class="m-c">
                    مقدمي الخدمة
                </router-link>
                )
                يجب ان تكون عضو في شبكة رياديات أولا
                زر الصفحة التعريفية
                <router-link :to="getRouteLocale('network-home')" class="m-c">
                    لشبكة رياديات

                </router-link>

            </p>
        </template>
        <template v-slot:actions>
            <button @click="subscribe" type="button" class="btn btn-main py-2 h-100 w-50">الاستمرار</button>
            <button type="button" class="btn  border-danger text-danger w-50" data-bs-dismiss="modal">تراجع عن
                التسجيل</button>
        </template>
    </DialogSubscribe>
</template>

<script>
import DialogSubscribe from '@/components/modals/large.vue'

export default {
    components: {
        DialogSubscribe
    },
    data: () => ({
        show: false
    }),
    methods: {
        subscribe() {

        },
        openDialog() {
            this.show = true
            return true;
        },
        closeDialog() {
            this.show = false
            return true;
        },
    }
}
</script>

<style></style>