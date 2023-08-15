<template>
    <TemplateDrawer :dashboard="dashboard" v-slot="{clickLink}">

                <div class="box  mx-2 mt-3 ">
                    <!--control icon -->
                    <userRectIcon />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-my-profile')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer"> {{ $t('personal_page') }}</button>
                    </router-link>
                </div>
                <div v-if="userIsProvider" class="box  mx-2 mt-3 ">
                    <!-- lamp-->
                    <lamp-icon />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-request-purchase-services')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('requisitions-services') }}
                            </button>
                    </router-link>
                </div>
                <div v-if="userIsProvider" class="box  mx-2 mt-3 ">
                  <closedWalletIcon :size="32" color="var(--m-color)" />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-my-offers')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('your-offers') }}</button>
                    </router-link>
                    
                </div>
            
                <div v-if="!userIsProvider" class="box  mx-2 mt-3 ">
                    <!-- lamp-->
                    <lamp-icon />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-my-proposals')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('my-requests') }}
                            </button>
                    </router-link>
                </div>
                <div v-if="!userIsProvider" class="box  mx-2 mt-3 ">
                  <closedWalletIcon :size="32" color="var(--m-color)" />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-client-my-purchases')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('my-purchases') }}</button>
                    </router-link>
                </div>
                <div class="box  mx-2 mt-3 ">
                    <schoolWalletIcon :size="32" color="var(--m-color)" />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-control-jobs')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('jobs') }}</button>
                    </router-link>
                </div>
                <div class="box  mx-2 mt-3 ">
                   <d-calendar-icon color="var(--m-color)"/>
                    
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-my-schedules')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('schedules-your-services') }}</button>
                    </router-link>
                </div>
                <div class="box  mx-2 mt-3 ">
                    <emptyWalletIcon :size="32" color="var(--m-color)" />


                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-menu-subscribe')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('subscribes') }}</button>
                    </router-link>
                </div>
                <div class="box  mx-2 mt-3 ">
                    <!--invoice icon-->

                    <invoiceIcon />

                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-my-financial-transactions')" class="mx-2 m-c ">
                       <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('My-financial-transactions') }}</button> 
                    </router-link>
                </div>
                <div class="box  mx-2 mt-3 ">
                    <eyeOpenIcon />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-preview-profile')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('how-see-me-others') }}</button>
                    </router-link>
                </div>
                  <div v-if="userIsProvider" class="box  mx-2 mt-3 ">
                    <!-- lamp-->
                    <lock-icon />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-my-ready-services')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('my-services') }}
                            </button>
                    </router-link>
                </div>
                <div class="box  mx-2 mt-3 ">
                  <lockPassIcon />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('change-password')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('password-change-request') }}</button>
                    </router-link>
                </div>

    </TemplateDrawer>
</template>

<script>
import TemplateDrawer from '@/layouts/tamplate/drawer/index.vue'
import lampIcon from '@/components/icon-svg/lamp-icon'
import lockIcon from '@/components/icon-svg/lock-icon'

import closedWalletIcon from '@/components/icon-svg/closed-wallet.vue'
import userRectIcon from '@/components/icon-svg/user-rect-icon.vue'
import schoolWalletIcon from '@/components/icon-svg/school-wallet.vue'
import emptyWalletIcon from '@/components/icon-svg/empty-wallet.vue'
import invoiceIcon from '@/components/icon-svg/invoice-icon.vue'
import eyeOpenIcon from '@/components/icon-svg/eye-open.vue'
import lockPassIcon from '@/components/icon-svg/lock-pass.vue'
export default {
    name: 'drawer-profil',
    props:{
        dashboard:{
            type:String,
            default:'network-dashboard'
        }
    },
    components:{
        TemplateDrawer,
        lampIcon,
        closedWalletIcon,
        userRectIcon,
        schoolWalletIcon,
        emptyWalletIcon,
        invoiceIcon,
        eyeOpenIcon,
        lockPassIcon,
        lockIcon
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