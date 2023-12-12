<template>
    <div class="offcanvas drawer-side"
        :class="{ 'offcanvas-end': $i18n.locale == 'ar', 'offcanvas-start': $i18n.locale == 'en', show: drawer }" tabindex="-1"
        id="offcanvas-profile" aria-labelledby="offcanvasExampleLabel">
        <div id="myModal-drawer" class="offcanvas-headers text-start  p-2 mx-4">
            <button type="button" id="btn-close-drawer" class="btn-close" data-bs-dismiss-old="offcanvas"
                @click="closeDrawer" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body text-center">

            <div class="avatar-profile">
                <img class="rounded-circle" :src="user.image" alt="" width="150" height="150">
            </div>

            <div class="mt-3">
                <h3 class="m-c fw-bolder">
                    {{ user.name }}
                </h3>
                <p v-if="user && user.career_informations && user.career_informations.job_title">
                    {{ user.career_informations.job_title }}
                </p>
            </div>

            <div class="d-flex flex-column service-provider-navbar">

                <div class="box  mx-2 mt-3 ">
                    <controlIcon />
                    <router-link custom v-slot="{ navigate }" :to="getRouteLocale(dashboard)" class="mx-2 m-c ">
                        <button @click="clickLink(navigate, $event)" role="link" class="btn-drawer"> {{ $t('Settings') }}
                        </button>
                    </router-link>
                </div>
                
                <!-- slot -->
                <slot :clickLink="clickLink"></slot>
                <div class="text-center mt-4 mb-5 mx-auto">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.3203 29.6933H20.147C14.227 29.6933 11.3737 27.36 10.8803 22.1333C10.827 21.5866 11.227 21.0933 11.787 21.04C12.3203 20.9866 12.827 21.4 12.8803 21.9466C13.267 26.1333 15.2403 27.6933 20.1603 27.6933H20.3337C25.7603 27.6933 27.6803 25.7733 27.6803 20.3466V11.6533C27.6803 6.22664 25.7603 4.30664 20.3337 4.30664H20.1603C15.2137 4.30664 13.2403 5.89331 12.8803 10.16C12.8137 10.7066 12.347 11.12 11.787 11.0666C11.227 11.0266 10.827 10.5333 10.867 9.98664C11.3203 4.67997 14.187 2.30664 20.147 2.30664H20.3203C26.867 2.30664 29.667 5.10664 29.667 11.6533V20.3466C29.667 26.8933 26.867 29.6933 20.3203 29.6933Z"
                            fill="#FF1616" />
                        <path
                            d="M20.0005 17H4.82715C4.28048 17 3.82715 16.5467 3.82715 16C3.82715 15.4533 4.28048 15 4.82715 15H20.0005C20.5471 15 21.0005 15.4533 21.0005 16C21.0005 16.5467 20.5471 17 20.0005 17Z"
                            fill="#FF1616" />
                        <path
                            d="M7.80025 21.4666C7.54691 21.4666 7.29358 21.3733 7.09358 21.1733L2.62691 16.7066C2.24025 16.32 2.24025 15.68 2.62691 15.2933L7.09358 10.8266C7.48025 10.44 8.12025 10.44 8.50691 10.8266C8.89358 11.2133 8.89358 11.8533 8.50691 12.24L4.74691 16L8.50691 19.76C8.89358 20.1466 8.89358 20.7866 8.50691 21.1733C8.32025 21.3733 8.05358 21.4666 7.80025 21.4666Z"
                            fill="#FF1616" />
                    </svg>
                    <button @click="logout" class="btn-drawer text-danger ">
                        {{ $t('logout') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import controlIcon from '@/components/icon-svg/control-icon.vue'
export default {
    name: 'drawer-profil',
    props: {
        group: {
            type: String,
            default: 'drawer-side',
        },
        dashboard: {
            type: String,
            default: 'network-dashboard'
        }
    },
    components: {
        controlIcon
    },
    data: () => ({
        drawer: false,
    }),
    methods: {
        clickLink(navigate, evnt) {
            //this.myModal.hide();
            window.$(`#btn-close-drawer`).click()
            navigate(evnt)
        },
        openDrawer() {
            this.drawer = true;
        },
        closeDrawer() {
            this.drawer = false;
        }
    },
    created() {
        window.EventBus.listen(this.group + '-open-drawer', this.openDrawer)
        window.EventBus.listen(this.group + '-close-drawer', this.closeDrawer)
    },
    beforeDestroy() {
        window.EventBus.off(this.group + '-open-drawer', this.openDrawer)
        window.EventBus.off(this.group + '-close-drawer', this.closeDrawer)
    },
}
</script>

<style scoped>
.avatar-profile>img {
    border-radius: 50%;
    border: 1px solid #c3c3c352;
}

.btn-drawer {
    background: transparent;
    border: none;
}

/* width */
.drawer-side .offcanvas-body::-webkit-scrollbar {
    width: 10px;
}

/* Track */
.drawer-side .offcanvas-body::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
.drawer-side .offcanvas-body::-webkit-scrollbar-thumb {
    background: var(--m-color);
}

/* Handle on hover */
.drawer-side .offcanvas-body::-webkit-scrollbar-thumb:hover {
    background: var(--m-color-light);
}</style>