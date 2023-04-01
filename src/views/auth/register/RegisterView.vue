<template>
    <div class="box bg-white    rounded-3">

        <div class="row align-items-center p-0 position-relative ">
            <div class="col-12 col-md-6 p-4">
                <div :style="{ top: '17px', left: $i18n.locale == 'ar' ? 'auto' : '0', right: $i18n.locale !== 'ar' ? 'auto' : '0' }"
                    class="position-absolute form-loging">
                    <h6>لديك حساب بالفعل؟
                        <router-link :to="getRouteLocale('login')" class="m-c">
                            سجل دخولك الان
                        </router-link>
                    </h6>
                </div>
                <h1 class="fw-bolder">مرحبا بك معنا</h1>
                <p>انشئ حساب جديد وأنضمي الى عالم رياديات</p>
                <ValidationObserver ref="form">
                    <ValidationProvider :name="$t('Full-name')" vid="name" rules="required" v-slot="{ errors }">
                        <div class="col-md-4 w-100 row mb-2">
                            <div class="cols-12">
                                <d-text-input type="text" :errors="errors" class="form-control" v-model="form.name"
                                    :label="$t('Full-name')">
                                </d-text-input>
                            </div>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider :name="$t('Email')" vid="email" rules="required" v-slot="{ errors }">
                        <div class="col-md-4 w-100 row mb-2">
                            <div class="cols-12">
                                <d-text-input :errors="errors" type="email" class="form-control" v-model="form.email"
                                    :label="$t('Email')">
                                </d-text-input>
                            </div>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider :name="$t('Phone')" 
                    vid="phone" 
                    rules="required|numeric|min:8" 
                    v-slot="{ errors }"
                    >
                        <div class="col-md-4 w-100 row mb-2">
                            <div class="cols-12">
                                <d-text-input :errors="errors" type="text" class="form-control" v-model="form.phone"
                                    :label="$t('Phone')">
                                </d-text-input>
                            </div>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider :name="$t('Password')" vid="password" rules="required" v-slot="{ errors }">
                        <div class="col-md-4 w-100 row mb-2">
                            <div class="cols-12 position-relative">
                                <d-text-input :errors="errors" id="password-register" :type="show ? 'text' : 'password'"
                                    class="form-control  " v-model="form.password" :label="$t('Password')"
                                    autocomplete="new-password">
                                    <template v-slot:append-icon>
                                        <span style="color: #CDD7D8;font-size: 23px;" @click="show = !show"
                                            class="fa-regular mx-1" :class="{ 'fa-eye': !show, 'fa-eye-slash': show }">
                                        </span>
                                    </template>
                                </d-text-input>
                            </div>

                        </div>
                    </ValidationProvider>
                    <ValidationProvider :name="$t('Password-confirm')" vid="passwordConfirm" rules="required"
                        v-slot="{ errors }">
                        <div class="col-md-4 w-100 row mb-2">
                            <div class="cols-12 position-relative">
                                <d-text-input :errors="errors" id="password-register-confirm"
                                    :type="showC ? 'text' : 'password'" class="form-control  " v-model="form.passwordConfirm"
                                    :label="$t('Password-confirm')">
                                    <template v-slot:append-icon>
                                        <span style="color: #CDD7D8;font-size: 23px;" @click="show = !show"
                                            class="fa-regular mx-1" :class="{ 'fa-eye': !show, 'fa-eye-slash': show }">
                                        </span>
                                    </template>
                                </d-text-input>
                            </div>
                        </div>
                    </ValidationProvider>
                    <div class="col-12 text-center">
                        <button @click="signup" class="btn btn-main  " type="submit"> أشتركي الان </button>
                    </div>
                    <div>
                        <p>
                            بانشاءك حساب جديد، انت توافق على
                            <router-link :to="getRouteLocale('terms-and-conditions')" class="m-c">
                                شروط الاستخدام وسياسة الخصوصيه
                            </router-link>
                        </p>
                    </div>

                </ValidationObserver>
            </div>
            <div class=" col-12 col-md-6">
                <div class="box">
                    <img src="/assets/svg/riadiat-green-card.svg" />
                </div>
            </div>

        </div>
    </div>
</template>

<script>


export default {
    data: () => ({
        show: false,
        showC: false,
        form: {
            email: process.env.EMAIL || '',
            password: process.env.PASSWORD || '',
            name: '',
            phone: '',
            passwordConfirm: ''
        },
        hasError: false,
        message: '',
    }),
    methods: {
        async signup(e) {
            e.preventDefault();
            this.hasError = false;
            this.message = '';
            let valid = await this.$refs.form.validate();
            if (!valid) {
                console.log('form invalid');
                return;
            }
            try {
                let { data } = await this.$axios.post('user/auth/register', this.form);
                if (data.success) {
                    let info = {
                        data: data,
                        form: this.form
                    }
                    this.$emit('success', info)
                } else {
                    this.message = data.message;
                    this.hasError = true;
                }

            } catch (error) {
                this.message = 'خطا غير معروف'
                if (error.response) {
                    let response = error.response
                    if (response.status == 422) {
                        this.message = response.data.message;
                        if (Object.hasOwnProperty.call(response.data, 'errors')) {
                            this.$refs.form.setErrors(response.data.errors)
                        }
                    }
                }

                this.hasError = true;
            }
        }
    }
}
</script>
<style scoped>
.icon-input-end {
    color: #CDD7D8;
    font-size: 23px;
    left: 15px;
}

html[lang="en"] .icon-input-end {
    left: auto;
    right: 15px
}
</style>
