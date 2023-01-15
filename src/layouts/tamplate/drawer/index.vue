<template>
    <div class="offcanvas drawer-side"
    :class="{'offcanvas-end':$i18n.locale=='ar','offcanvas-start':$i18n.locale=='en',show:drawer}"
    tabindex="-1" id="offcanvas-profile" aria-labelledby="offcanvasExampleLabel">
        <div id="myModal-drawer" class="offcanvas-headers text-end p-2 mx-4">
            <button type="button" id="btn-close-drawer" class="btn-close" data-bs-dismiss-old="offcanvas" @click="closeDrawer" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body text-center">
            <div>
                <img class="rounded-circle" :src="user.image" alt="" width="150" height="150">
            </div>
            <div class="mt-3">
                <h3 class="m-c fw-bolder">
                    {{ user.name }}
                </h3>
                <p>
                    مصمم واجهات امامية
                </p>
            </div>
            <div class="d-flex flex-column service-provider-navbar">
                <div class="box  mx-2 mt-3 ">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.0003 30.3333H12.0003C4.76033 30.3333 1.66699 27.24 1.66699 20V12C1.66699 4.75996 4.76033 1.66663 12.0003 1.66663H20.0003C27.2403 1.66663 30.3337 4.75996 30.3337 12V20C30.3337 27.24 27.2403 30.3333 20.0003 30.3333ZM12.0003 3.66663C5.85366 3.66663 3.66699 5.85329 3.66699 12V20C3.66699 26.1466 5.85366 28.3333 12.0003 28.3333H20.0003C26.147 28.3333 28.3337 26.1466 28.3337 20V12C28.3337 5.85329 26.147 3.66663 20.0003 3.66663H12.0003Z"
                            fill="#1FB9B3" />
                        <path
                            d="M20.7734 25.6667C20.2268 25.6667 19.7734 25.2133 19.7734 24.6667V19.4667C19.7734 18.92 20.2268 18.4667 20.7734 18.4667C21.3201 18.4667 21.7734 18.92 21.7734 19.4667V24.6667C21.7734 25.2133 21.3201 25.6667 20.7734 25.6667Z"
                            fill="#1FB9B3" />
                        <path
                            d="M20.7734 10.9334C20.2268 10.9334 19.7734 10.48 19.7734 9.93337V7.33337C19.7734 6.78671 20.2268 6.33337 20.7734 6.33337C21.3201 6.33337 21.7734 6.78671 21.7734 7.33337V9.93337C21.7734 10.48 21.3201 10.9334 20.7734 10.9334Z"
                            fill="#1FB9B3" />
                        <path
                            d="M20.7733 17.8667C18.3066 17.8667 16.3066 15.8667 16.3066 13.4C16.3066 10.9334 18.3066 8.93335 20.7733 8.93335C23.24 8.93335 25.24 10.9334 25.24 13.4C25.24 15.8667 23.2266 17.8667 20.7733 17.8667ZM20.7733 10.9333C19.4133 10.9333 18.3066 12.04 18.3066 13.4C18.3066 14.76 19.4133 15.8667 20.7733 15.8667C22.1333 15.8667 23.24 14.76 23.24 13.4C23.24 12.04 22.12 10.9333 20.7733 10.9333Z"
                            fill="#1FB9B3" />
                        <path
                            d="M11.2266 25.6666C10.6799 25.6666 10.2266 25.2133 10.2266 24.6666V22.0666C10.2266 21.52 10.6799 21.0667 11.2266 21.0667C11.7732 21.0667 12.2266 21.52 12.2266 22.0666V24.6666C12.2266 25.2133 11.7866 25.6666 11.2266 25.6666Z"
                            fill="#1FB9B3" />
                        <path
                            d="M11.2266 13.5334C10.6799 13.5334 10.2266 13.08 10.2266 12.5334V7.33337C10.2266 6.78671 10.6799 6.33337 11.2266 6.33337C11.7732 6.33337 12.2266 6.78671 12.2266 7.33337V12.5334C12.2266 13.08 11.7866 13.5334 11.2266 13.5334Z"
                            fill="#1FB9B3" />
                        <path
                            d="M11.2264 23.0666C8.75977 23.0666 6.75977 21.0666 6.75977 18.6C6.75977 16.1333 8.75977 14.1333 11.2264 14.1333C13.6931 14.1333 15.6931 16.1333 15.6931 18.6C15.6931 21.0666 13.6931 23.0666 11.2264 23.0666ZM11.2264 16.1333C9.86643 16.1333 8.75977 17.24 8.75977 18.6C8.75977 19.96 9.86643 21.0666 11.2264 21.0666C12.5864 21.0666 13.6931 19.96 13.6931 18.6C13.6931 17.24 12.5998 16.1333 11.2264 16.1333Z"
                            fill="#1FB9B3" />
                    </svg>
                    <router-link custom v-slot="{navigate}" :to="getRouteLocale(dashboard)" class="mx-2 m-c ">
                        <button @click="clickLink(navigate,$event)" role="link" class="btn-drawer"> {{ $t('Dashboard') }} </button>
                    </router-link>
                </div>
                <!-- slot -->
                <slot></slot>
                <div class="text-start mt-3">
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
                    <button  @click="logout" class="btn-drawer text-danger">
                        {{ $t('logout') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'drawer-profil',
    props:{
        group:{
            type:String,
            default:'drawer-side',
        },  
        dashboard:{
            type:String,
            default:'network-dashboard'
        }
    },
    data:()=>({
        drawer:false,
    }),
    methods: {
        clickLink(navigate,evnt){
            //this.myModal.hide();
            window.$(`#btn-close-drawer`).click()
            navigate(evnt)
        },
        openDrawer(){
            this.drawer = true;
        },
        closeDrawer(){
            this.drawer = false;
        }
    },
    created(){
    window.EventBus.listen(this.group+'-open-drawer',this.openDrawer)
    window.EventBus.listen(this.group+'-close-drawer',this.closeDrawer)
  },
  beforeDestroy(){
    window.EventBus.off(this.group+'-open-drawer',this.openDrawer)
    window.EventBus.off(this.group+'-close-drawer',this.closeDrawer)
  },
}
</script>

<style scoped>
.btn-drawer{
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
}
</style>