<template>
    <div class="consulting " style="background-image: linear-gradient(to bottom , #2EB9B3 , white);">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md-6">
                    <h1 class="fs-r-56 text-white"> التسويق بالعمولة </h1>
                    <span data-v-c867e3b8="" class="line"
                        style="display: inline-block; width: 80%; background: #fff; height: 2px; margin-bottom: 29px;"></span>
                    <p class=" fs-r-24" style="color:#414042; width: 90%;">
                        كونى شريكة رياديات التسويقية من خلال برنامج التسويق بالعمولة وأكسبى مقابل كل عملية تسجيل
                    </p>
                    <div class="row d-flex  gap-2">
                        <li class="nav-item px-2 btn-main border-0 text-center"
                            style="box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125); background: white; padding:10px; height:auto; margin-right: 5px; display: flex; justify-content: center; align-items: center;">
                            <div v-if="profileData.status == 'deactive'" class="text-black">جارى تفعيل حسابك</div>
                            <button v-else class="text-black bg-transparent border-0" @click="affiliateRegister"> انشاء حساب
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
                </div>
                <div class="col-md-6">
                    <div style="overflow: inherit" class="m-auto text-start ">
                        <img class="rounded-circle" style="background: rgb(255 188 0 / 10%);"
                            src="@/assets/img/affiliate-top.png" alt="" />
                    </div>
                </div>
            </div>

            <div class="star-cons">
                <img :src="`${publicPath}assets/img/starrrr.png`" alt="" />
            </div>
            <div class="star-cons stars">
                <img :src="`${publicPath}assets/img/starsss.png`" alt="" />
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
                    // console.log('affiliate_data', data.data)
                    this.profileData = data.data
                    if (data.data.status == 'active') {
                        this.$router.push({ name: "affiliate-marketing-dashboard", params: { profileData: this.profileData } })
                    }
                } else {
                    this.message = data.message;
                    this.hasError = true;
                }
            } catch (error) {
                this.profileData = ''
                // console.log(error)
                // if (error.response) {
                //     let response = error.response;
                window.errorMsg(' انت لست مسجل كمقدم خدمه, انشئ حساب');
                //     if (response.status == 422) {
                //         this.message = 'انت لست مسجل كمقدم خدمه';
                //         if (Object.hasOwnProperty.call(response.data, "errors")) {
                //             this.$refs.form.setErrors(response.data.errors);
                //         }
                //     }
                // }

                this.hasError = true;
            }
        }
    },
    mounted() {
        this.shouldLoginMsg()
        if (this.token) {
            this.checkAffiliate()
            // console.log('tsetsdf', this.profileData.status)
            // if (this.profileData) {
            //     this.$router.push({ name: "affiliate-marketing-dashboard" })

            // }
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