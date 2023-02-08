<template>
    <TemplateDrawer :dashboard="dashboard" v-slot="{ clickLink }">

        <div class="box  mx-2 mt-3 ">
            <!--control icon -->
            <userRectIcon />
            <router-link custom v-slot="{ navigate }" :to="getRouteLocale('academy-my-profile')"
                class="mx-2 m-c ">
                <button @click="clickLink(navigate, $event)" role="link" class="btn-drawer"> {{
                    $t('personal_page')
                }}</button>
            </router-link>
        </div>
       
        <div class="box  mx-2 mt-3 ">
                    <cupIcon />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('academy-my-projects')" class="mx-2 m-c ">
                       <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('students-projects') }}</button> 
                    </router-link>
                </div>

        <div class="box  mx-2 mt-3 ">
                    <invoiceIcon />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('academy-my-financial-transactions')" class="mx-2 m-c ">
                       <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('My-financial-transactions') }}</button> 
                    </router-link>
                </div>
       
        <div class="box  mx-2 mt-3 ">
            <!--eye-open-->
            <eyeOpenIcon />
            <router-link custom v-slot="{ navigate }" :to="getRouteLocale('academy-preview-profile')"
                class="mx-2 m-c ">
                <button @click="clickLink(navigate, $event)" role="link" class="btn-drawer">{{
                    $t('how-see-me-others')
                }}</button>
            </router-link>
        </div>
        <div class="box  mx-2 mt-3 ">
            <!-- lock pass-->
            <lockPassIcon />
            <router-link custom v-slot="{ navigate }" :to="getRouteLocale('change-password')" class="mx-2 m-c ">
                <button @click="clickLink(navigate, $event)" role="link" class="btn-drawer">{{
                    $t('password-change-request')
                }}</button>
            </router-link>
        </div>

    </TemplateDrawer>
</template>

<script>
import TemplateDrawer from '@/layouts/tamplate/drawer/index.vue'
import userRectIcon from '@/components/icon-svg/user-rect-icon.vue'
import invoiceIcon from '@/components/icon-svg/invoice-icon.vue'
import eyeOpenIcon from '@/components/icon-svg/eye-open.vue'
import lockPassIcon from '@/components/icon-svg/lock-pass.vue'
import cupIcon from '@/components/icon-svg/cup-icon.vue'
export default {
    name: 'drawer-profil',
    props: {
        dashboard: {
            type: String,
            default: 'academy-dashboard'
        }
    },
    components: {
        TemplateDrawer,
        invoiceIcon,
        userRectIcon,
        eyeOpenIcon,
        lockPassIcon,
        cupIcon
    },
    methods: {
        clickLink(navigate, evnt) {
            //this.myModal.hide();
            window.$(`#btn-close-drawer`).click()
            navigate(evnt)
        },
    }
}
</script>

<style scoped>
.btn-drawer {
    background: transparent;
    border: none;
}
</style>