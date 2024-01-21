
<template>
    <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
        <div class="netwok-home-header">
            <div class="row">
                <div class="col-12 col-md-6">
                    <h1 class="header-title-page text-black" style="display: inline;">
                        التسويق بالعمولة
                    </h1>
                    <p class="header-desc-page text-black mt-3">
                        كونى شريكة رياديات التسويقية من خلال برنامج التسويق بالعمولة وأكسبى مقابل كل عملية تسجيل
                    </p>

                    <div class="my-4 ">
                        <template>
                            <div class="row d-flex  gap-2">
                                <li class="nav-item px-2 btn-main border-0 text-center"
                                    style="box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125); 
                                    padding:10px; height:auto; margin-right: 5px; display: flex; justify-content: center; align-items: center;">
                                    <div v-if="profileData.status == 'deactive'" class="text-black">جارى تفعيل حسابك</div>
                                    <router-link v-else-if="profileData.status == 'active'"
                                        class="text-white bg-transparent border-0"
                                        :to="{ name: 'affiliate-marketing-dashboard' }">
                                        لوحه التحكم
                                    </router-link>
                                    <button v-else class="text-white bg-transparent border-0" @click="affiliateRegister">
                                        انشاء حساب
                                    </button>
                                </li>

                                <li v-if="!token" class="nav-item px-2 btn-main  text-center"
                                    style="box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125); padding:10px; height:auto; margin-right: 5px; display: flex; justify-content: center; align-items: center;">
                                    <!-- <router-link class="text-white" :to="getRouteLocale('login-affiliate')">سجلى دخولك
                                            </router-link> -->
                                    <button class="text-white border-0 bg-transparent" @click="showModal">
                                        سجلى دخولك
                                    </button>
                                    <login-dialog :profileData="profileData" ref="modal"></login-dialog>
                                </li>
                                <!-- <div class="btn-main-style py-5" style="width: fit-content;">
                                            <router-link :to="getRouteLocale('register-affiliate')"
                                            class="btn-default text-black mt-2" style="box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125);"> انشاء حساب</router-link>
                                        </div>
                    
                                        <div class="btn-main-style py-5" style="width: fit-content;">
                                            <router-link :to="getRouteLocale('register-affiliate')"
                                            class="btn-default text-black mt-2" style="box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125);"> انشاء حساب</router-link>
                                        </div> -->
                            </div>
                        </template>
                    </div>
                </div>
                <div class="col-12 col-md-6" style="min-height: 414px;" v-if="!isMobile">
                    <div style="height:100%;">
                        <iframe class="rounded" style="width: 100%; height: 100%"
                            src="https://www.youtube.com/embed/mKfqJ_3-jWQ" title="جلسة حوارية عربيات" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import LoginDialog from '../login-dialog/index.vue';
import $ from 'jquery';

export default {
    name: 'section-header',
    components: {
        LoginDialog
    },
    data() {
        return {
            dialog: false,
            profileData: ''
        };
    },
    methods: {
        showLoginDialog() {
            this.dialog = true;
        },
        updateDialog(value) {
            this.dialog = value;
        },
        showModal() {
            let element = this.$refs.modal.$el
            $(element).modal('show')
        },

        affiliateRegister() {
            if (!this.token) {
                console.log('not registerd')
                window.errorMsg('  يجب عليك تسجيل الدخول فى حسابك العام على رياديات  ');
                this.hasError = true
            } else {
                this.$router.push({ name: 'register-affiliate' })
            }
        },
        async checkAffiliate() {
            try {
                let { data } = await this.$axios.get("affiliates/profile-info");
                if (data.success) {
                    console.log('affiliate_data', data.data)
                    this.profileData = data.data
                } else {
                    this.message = data.message;
                    this.hasError = true;
                }
            } catch (error) {
                this.profileData = ''
                window.errorMsg(error.message);
                this.hasError = true;
            }
        }
    },
    mounted() {
        if (this.token && this.user.affiliate) {
            this.checkAffiliate()
        }

    }
}
</script>

<style scoped>
.star-cons {
    position: absolute;
    left: 38.15%;
    right: 92.19%;
    top: 9.72%;
    bottom: 71.67%;
}

.star-cons.stars {
    left: 30.56%;
    right: 60.06%;
    top: 14.17%;
    bottom: 80.28%;
}
</style>