<template>
    <TemplateDrawer dashboard="affiliate-marketing-dashboard" v-slot="{clickLink}">

                <div class="box  mx-2 mt-3 ">
                    <d-user-rect-icon class="m-c" color="currentColor"/>
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('affiliate-marketing-my-profile')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer"> {{ $t('personal_page') }}</button>
                    </router-link>
                </div>
                   <div class="box  mx-2 mt-3 ">
                    <d-affiliate-marketing-business-icon class="m-c" color="currentColor"/>
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('affiliate-marketing-affiliate-marketing-business')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer"> {{ $t('affiliate-marketing-stages') }}</button>
                    </router-link>
                </div> 
                   <div class="box  mx-2 mt-3 ">
                    <paperclip-icon class="m-c" color="currentColor"/>
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('affiliate-marketing-your-courses')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer"> {{ $t('Models') }}</button>
                    </router-link>
                </div> 

                <div class="box  mx-2 mt-3 ">
                    <d-empty-wallet-icon class="m-c" color="currentColor" />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('affiliate-marketing-menu-subscribe')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('subscribes') }}</button>
                    </router-link>
                </div>
                <div class="box  mx-2 mt-3 ">
                    <d-invoice-icon class="m-c" color="currentColor"/>
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('affiliate-marketing-my-financial-transactions')" class="mx-2 m-c ">
                       <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('My-financial-transactions') }}</button> 
                    </router-link>
                </div>
                <div class="box  mx-2 mt-3 ">
                    <d-eye-open-icon class="m-c" color="currentColor"/>
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('affiliate-marketing-preview-profile')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('how-see-me-others') }}</button>
                    </router-link>
                </div>
                <div class="box  mx-2 mt-3 ">
                    <d-lock-pass-icon class="m-c" color="currentColor"/>
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('change-password')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('password-change-request') }}</button>
                    </router-link>
                </div>

    </TemplateDrawer>
</template>

<script>
import TemplateDrawer from '@/layouts/tamplate/drawer/index.vue'

export default {
    name: 'drawer-profil',
    props:{
        dashboard:{
            type:String,
            default:'network-dashboard'
        }
    },
    components:{
        TemplateDrawer
    },
    methods: {
        clickLink(navigate,evnt){
            //this.myModal.hide();
            window.$(`#btn-close-drawer`).click()
            navigate(evnt)
        },
    }
}
</script>

<style scoped>
.btn-drawer{
    background: transparent;
    border: none;
}
</style>