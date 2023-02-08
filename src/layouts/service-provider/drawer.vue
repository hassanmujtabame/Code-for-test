<template>
    <TemplateDrawer :dashboard="dashboard" v-slot="{clickLink}">

                <div class="box  mx-2 mt-3 ">
                    <!--control icon -->
                    <userRectIcon />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-my-profile')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer"> {{ $t('personal_page') }}</button>
                    </router-link>
                </div>
                <template v-if="userIsProvider">
                <div class="box  mx-2 mt-3 ">
                    <!-- lamp-->
                    <lamp-icon />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-request-purchase-services')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('requisitions-services') }}
                            </button>
                    </router-link>
                </div>
                <div class="box  mx-2 mt-3 ">
                  <closedWalletIcon :size="32" color="var(--m-color)" />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-my-offers')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('your-offers') }}</button>
                    </router-link>
                    
                </div>
            </template>
            <template v-else>
                <div class="box  mx-2 mt-3 ">
                    <!-- lamp-->
                    <lamp-icon />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-client-my-requests')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('my-requests') }}
                            </button>
                    </router-link>
                </div>
                <div class="box  mx-2 mt-3 ">
                  <closedWalletIcon :size="32" color="var(--m-color)" />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-client-my-requests')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('my-purchases') }}</button>
                    </router-link>
                    
                </div>
            </template>
                <div class="box  mx-2 mt-3 ">
                    <schoolWalletIcon :size="32" color="var(--m-color)" />
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-control-jobs')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('jobs') }}</button>
                    </router-link>
                </div>
                <div class="box  mx-2 mt-3 ">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.667 7.66663C10.1203 7.66663 9.66699 7.21329 9.66699 6.66663V2.66663C9.66699 2.11996 10.1203 1.66663 10.667 1.66663C11.2137 1.66663 11.667 2.11996 11.667 2.66663V6.66663C11.667 7.21329 11.2137 7.66663 10.667 7.66663Z"
                            fill="#1FB9B3" />
                        <path
                            d="M21.333 7.66663C20.7863 7.66663 20.333 7.21329 20.333 6.66663V2.66663C20.333 2.11996 20.7863 1.66663 21.333 1.66663C21.8797 1.66663 22.333 2.11996 22.333 2.66663V6.66663C22.333 7.21329 21.8797 7.66663 21.333 7.66663Z"
                            fill="#1FB9B3" />
                        <path
                            d="M11.3333 19.3333C11.16 19.3333 10.9867 19.2934 10.8267 19.2267C10.6533 19.16 10.52 19.0667 10.3867 18.9467C10.1467 18.6933 10 18.36 10 18C10 17.8267 10.04 17.6533 10.1067 17.4933C10.1733 17.3333 10.2667 17.1867 10.3867 17.0534C10.52 16.9334 10.6533 16.84 10.8267 16.7733C11.3067 16.5733 11.9067 16.68 12.28 17.0534C12.52 17.3067 12.6667 17.6533 12.6667 18C12.6667 18.08 12.6533 18.1734 12.64 18.2667C12.6267 18.3467 12.6 18.4267 12.56 18.5067C12.5333 18.5867 12.4933 18.6667 12.44 18.7467C12.4 18.8133 12.3333 18.88 12.28 18.9467C12.0267 19.1867 11.68 19.3333 11.3333 19.3333Z"
                            fill="#1FB9B3" />
                        <path
                            d="M16.0003 19.3333C15.827 19.3333 15.6537 19.2933 15.4937 19.2266C15.3203 19.16 15.187 19.0666 15.0537 18.9466C14.8137 18.6933 14.667 18.36 14.667 18C14.667 17.8266 14.707 17.6533 14.7737 17.4933C14.8403 17.3333 14.9337 17.1866 15.0537 17.0533C15.187 16.9333 15.3203 16.8399 15.4937 16.7733C15.9737 16.5599 16.5737 16.68 16.947 17.0533C17.187 17.3066 17.3337 17.6533 17.3337 18C17.3337 18.08 17.3203 18.1733 17.307 18.2666C17.2937 18.3466 17.267 18.4266 17.227 18.5066C17.2003 18.5866 17.1603 18.6666 17.107 18.7466C17.067 18.8133 17.0003 18.8799 16.947 18.9466C16.6937 19.1866 16.347 19.3333 16.0003 19.3333Z"
                            fill="#1FB9B3" />
                        <path
                            d="M20.6663 19.3333C20.493 19.3333 20.3197 19.2933 20.1597 19.2266C19.9863 19.16 19.853 19.0666 19.7197 18.9466C19.6663 18.8799 19.613 18.8133 19.5597 18.7466C19.5063 18.6666 19.4663 18.5866 19.4397 18.5066C19.3997 18.4266 19.373 18.3466 19.3597 18.2666C19.3463 18.1733 19.333 18.08 19.333 18C19.333 17.6533 19.4797 17.3066 19.7197 17.0533C19.853 16.9333 19.9863 16.8399 20.1597 16.7733C20.653 16.5599 21.2397 16.68 21.613 17.0533C21.853 17.3066 21.9997 17.6533 21.9997 18C21.9997 18.08 21.9863 18.1733 21.973 18.2666C21.9597 18.3466 21.933 18.4266 21.893 18.5066C21.8663 18.5866 21.8263 18.6666 21.773 18.7466C21.733 18.8133 21.6663 18.8799 21.613 18.9466C21.3597 19.1866 21.013 19.3333 20.6663 19.3333Z"
                            fill="#1FB9B3" />
                        <path
                            d="M11.3333 24C11.16 24 10.9867 23.96 10.8267 23.8933C10.6667 23.8267 10.52 23.7333 10.3867 23.6133C10.1467 23.36 10 23.0133 10 22.6666C10 22.4933 10.04 22.32 10.1067 22.16C10.1733 21.9866 10.2667 21.84 10.3867 21.72C10.88 21.2266 11.7867 21.2266 12.28 21.72C12.52 21.9733 12.6667 22.32 12.6667 22.6666C12.6667 23.0133 12.52 23.36 12.28 23.6133C12.0267 23.8533 11.68 24 11.3333 24Z"
                            fill="#1FB9B3" />
                        <path
                            d="M16.0003 24C15.6537 24 15.307 23.8533 15.0537 23.6133C14.8137 23.36 14.667 23.0133 14.667 22.6666C14.667 22.4933 14.707 22.32 14.7737 22.16C14.8403 21.9866 14.9337 21.84 15.0537 21.72C15.547 21.2266 16.4537 21.2266 16.947 21.72C17.067 21.84 17.1603 21.9866 17.227 22.16C17.2937 22.32 17.3337 22.4933 17.3337 22.6666C17.3337 23.0133 17.187 23.36 16.947 23.6133C16.6937 23.8533 16.347 24 16.0003 24Z"
                            fill="#1FB9B3" />
                        <path
                            d="M20.6663 24C20.3197 24 19.973 23.8533 19.7197 23.6133C19.5997 23.4933 19.5063 23.3467 19.4397 23.1733C19.373 23.0133 19.333 22.84 19.333 22.6667C19.333 22.4933 19.373 22.32 19.4397 22.16C19.5063 21.9867 19.5997 21.84 19.7197 21.72C20.0263 21.4134 20.493 21.2667 20.9197 21.36C21.013 21.3733 21.093 21.4 21.173 21.44C21.253 21.4667 21.333 21.5067 21.413 21.56C21.4797 21.6 21.5463 21.6667 21.613 21.72C21.853 21.9734 21.9997 22.32 21.9997 22.6667C21.9997 23.0133 21.853 23.36 21.613 23.6133C21.3597 23.8533 21.013 24 20.6663 24Z"
                            fill="#1FB9B3" />
                        <path
                            d="M27.3337 13.12H4.66699C4.12033 13.12 3.66699 12.6667 3.66699 12.12C3.66699 11.5733 4.12033 11.12 4.66699 11.12H27.3337C27.8803 11.12 28.3337 11.5733 28.3337 12.12C28.3337 12.6667 27.8803 13.12 27.3337 13.12Z"
                            fill="#1FB9B3" />
                        <path
                            d="M21.3333 30.3333H10.6667C5.8 30.3333 3 27.5333 3 22.6666V11.3333C3 6.46663 5.8 3.66663 10.6667 3.66663H21.3333C26.2 3.66663 29 6.46663 29 11.3333V22.6666C29 27.5333 26.2 30.3333 21.3333 30.3333ZM10.6667 5.66663C6.85333 5.66663 5 7.51996 5 11.3333V22.6666C5 26.48 6.85333 28.3333 10.6667 28.3333H21.3333C25.1467 28.3333 27 26.48 27 22.6666V11.3333C27 7.51996 25.1467 5.66663 21.3333 5.66663H10.6667Z"
                            fill="#1FB9B3" />
                    </svg>
                    
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
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.9999 21.7734C12.8132 21.7734 10.2266 19.1867 10.2266 16C10.2266 12.8134 12.8132 10.2267 15.9999 10.2267C19.1866 10.2267 21.7732 12.8134 21.7732 16C21.7732 19.1867 19.1866 21.7734 15.9999 21.7734ZM15.9999 12.2267C13.9199 12.2267 12.2266 13.92 12.2266 16C12.2266 18.08 13.9199 19.7734 15.9999 19.7734C18.0799 19.7734 19.7732 18.08 19.7732 16C19.7732 13.92 18.0799 12.2267 15.9999 12.2267Z"
                            fill="#1FB9B3" />
                        <path
                            d="M16.0004 28.0267C10.9871 28.0267 6.25376 25.0934 3.00043 20.0001C1.5871 17.8001 1.5871 14.2134 3.00043 12.0001C6.2671 6.90672 11.0004 3.97339 16.0004 3.97339C21.0004 3.97339 25.7338 6.90672 28.9871 12.0001C30.4004 14.2001 30.4004 17.7867 28.9871 20.0001C25.7338 25.0934 21.0004 28.0267 16.0004 28.0267ZM16.0004 5.97339C11.6938 5.97339 7.57376 8.56006 4.69376 13.0801C3.69376 14.6401 3.69376 17.3601 4.69376 18.9201C7.57376 23.4401 11.6938 26.0267 16.0004 26.0267C20.3071 26.0267 24.4271 23.4401 27.3071 18.9201C28.3071 17.3601 28.3071 14.6401 27.3071 13.0801C24.4271 8.56006 20.3071 5.97339 16.0004 5.97339Z"
                            fill="#1FB9B3" />
                    </svg>
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('service-provider-preview-profile')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('how-see-me-others') }}</button>
                    </router-link>
                </div>
                <div class="box  mx-2 mt-3 ">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24 14.3333C23.4533 14.3333 23 13.88 23 13.3333V10.6666C23 6.46663 21.8133 3.66663 16 3.66663C10.1867 3.66663 9 6.46663 9 10.6666V13.3333C9 13.88 8.54667 14.3333 8 14.3333C7.45333 14.3333 7 13.88 7 13.3333V10.6666C7 6.79996 7.93333 1.66663 16 1.66663C24.0667 1.66663 25 6.79996 25 10.6666V13.3333C25 13.88 24.5467 14.3333 24 14.3333Z"
                            fill="#1FB9B3" />
                        <path
                            d="M22.667 30.3334H9.33366C3.45366 30.3334 1.66699 28.5467 1.66699 22.6667V20C1.66699 14.12 3.45366 12.3334 9.33366 12.3334H22.667C28.547 12.3334 30.3337 14.12 30.3337 20V22.6667C30.3337 28.5467 28.547 30.3334 22.667 30.3334ZM9.33366 14.3334C4.56033 14.3334 3.66699 15.24 3.66699 20V22.6667C3.66699 27.4267 4.56033 28.3334 9.33366 28.3334H22.667C27.4403 28.3334 28.3337 27.4267 28.3337 22.6667V20C28.3337 15.24 27.4403 14.3334 22.667 14.3334H9.33366Z"
                            fill="#1FB9B3" />
                        <path
                            d="M10.6663 22.6667C10.493 22.6667 10.3197 22.6267 10.1597 22.56C9.98633 22.4933 9.85302 22.4 9.71969 22.28C9.47969 22.0266 9.33301 21.6933 9.33301 21.3333C9.33301 21.16 9.37299 20.9867 9.43966 20.8267C9.50632 20.6533 9.59969 20.52 9.71969 20.3867C9.85302 20.2667 9.98633 20.1733 10.1597 20.1066C10.6397 19.8933 11.2397 20.0133 11.613 20.3867C11.733 20.52 11.8264 20.6667 11.893 20.8267C11.9597 20.9867 11.9997 21.16 11.9997 21.3333C11.9997 21.68 11.853 22.0266 11.613 22.28C11.3597 22.52 11.013 22.6667 10.6663 22.6667Z"
                            fill="#1FB9B3" />
                        <path
                            d="M16.0003 22.6668C15.6537 22.6668 15.307 22.5201 15.0537 22.2801C14.8137 22.0267 14.667 21.6934 14.667 21.3334C14.667 21.1601 14.6936 20.9867 14.7736 20.8267C14.8403 20.6667 14.9337 20.5201 15.0537 20.3868C15.3603 20.0801 15.827 19.9334 16.2537 20.0267C16.347 20.0401 16.427 20.0667 16.507 20.1067C16.587 20.1334 16.667 20.1734 16.747 20.2268C16.8137 20.2668 16.8803 20.3334 16.947 20.3868C17.067 20.5201 17.1603 20.6667 17.227 20.8267C17.2937 20.9867 17.3337 21.1601 17.3337 21.3334C17.3337 21.6934 17.187 22.0267 16.947 22.2801C16.8803 22.3334 16.8137 22.3867 16.747 22.4401C16.667 22.4934 16.587 22.5334 16.507 22.5601C16.427 22.6001 16.347 22.6268 16.2537 22.6401C16.1737 22.6534 16.0803 22.6668 16.0003 22.6668Z"
                            fill="#1FB9B3" />
                        <path
                            d="M21.3333 22.6668C20.9733 22.6668 20.64 22.5201 20.3867 22.2801C20.2667 22.1467 20.1733 22.0001 20.1066 21.8401C20.04 21.6801 20 21.5068 20 21.3334C20 20.9868 20.1467 20.6401 20.3867 20.3868C20.4533 20.3334 20.52 20.2801 20.5867 20.2268C20.6667 20.1734 20.7467 20.1334 20.8267 20.1067C20.9067 20.0667 20.9867 20.0401 21.0667 20.0267C21.5067 19.9334 21.96 20.0801 22.28 20.3868C22.52 20.6401 22.6667 20.9734 22.6667 21.3334C22.6667 21.5068 22.6267 21.6801 22.56 21.8401C22.4934 22.0134 22.4 22.1467 22.28 22.2801C22.0267 22.5201 21.68 22.6668 21.3333 22.6668Z"
                            fill="#1FB9B3" />
                    </svg>
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale('change-password')" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer">{{ $t('password-change-request') }}</button>
                    </router-link>
                </div>

    </TemplateDrawer>
</template>

<script>
import TemplateDrawer from '@/layouts/tamplate/drawer/index.vue'
import lampIcon from '@/components/icon-svg/lamp-icon'
import closedWalletIcon from '@/components/icon-svg/closed-wallet.vue'
import userRectIcon from '@/components/icon-svg/user-rect-icon.vue'
import schoolWalletIcon from '@/components/icon-svg/school-wallet.vue'
import emptyWalletIcon from '@/components/icon-svg/empty-wallet.vue'
import invoiceIcon from '@/components/icon-svg/invoice-icon.vue'

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
        invoiceIcon
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