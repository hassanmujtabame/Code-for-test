<template>
    <div class="container">
        <div class="box bg-white rounded-3">
            <div class="row align-items-center p-0 position-relative">
                <div class="col-12 col-md-6 p-4">
                    <div style="" class="text-center">
                        <img
                            class=""
                            :src="`${publicPath}assets/img/pot_3_.png`"
                            alt=""
                            width="320"
                            height="220"
                        />
                    </div>
                    <div class="">
                        <h1 class="fw-bolder">أعادة تعين كلمة السر</h1>
                        <p>أختر كلمة سر قوية وسهلة الحفظ</p>
                        <ValidationObserver
                            ref="form"
                            tag="div"
                            class="row g-3 needs-validation"
                        >
                            <div class="col-md-4 w-100 position-relative">
                                <ValidationProvider
                                    tag="div"
                                    :name="$t('Password')"
                                    vid="new_password"
                                    rules="required"
                                    v-slot="{ errors }"
                                >
                                    <d-text-input
                                        :errors="errors"
                                        v-model="itemForm.new_password"
                                        :type="show ? 'text' : 'password'"
                                        class="form-control"
                                        label="كلمة المرور"
                                        autocomplete="new-password"
                                    >
                                        <template v-slot:append-icon>
                                            <span
                                                style="
                                                    color: #cdd7d8;
                                                    font-size: 23px;
                                                "
                                                @click="show = !show"
                                                class="fa-regular mx-1"
                                                :class="{
                                                    'fa-eye': !show,
                                                    'fa-eye-slash': show,
                                                }"
                                            >
                                            </span>
                                        </template>
                                    </d-text-input>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-4 w-100">
                                <ValidationProvider
                                    tag="div"
                                    :name="$t('password-confirmation')"
                                    vid="new_password_confirmation"
                                    rules="required|confirmed:new_password"
                                    v-slot="{ errors }"
                                >
                                    <d-text-input
                                        :errors="errors"
                                        v-model="
                                            itemForm.new_password_confirmation
                                        "
                                        :type="showC ? 'text' : 'password'"
                                        class="form-control"
                                        label="تاكيد كلمة السر"
                                    >
                                        <template v-slot:append-icon>
                                            <span
                                                style="
                                                    color: #cdd7d8;
                                                    font-size: 23px;
                                                "
                                                @click="showC = !showC"
                                                class="fa-regular mx-1"
                                                :class="{
                                                    'fa-eye': !showC,
                                                    'fa-eye-slash': showC,
                                                }"
                                            >
                                            </span>
                                        </template>
                                    </d-text-input>
                                </ValidationProvider>
                            </div>
                            <div class="col-12 text-center mx-auto w-50">
                                <button
                                    @click="resetPassword"
                                    :disabled="loading"
                                    class="btn btn-main w-100"
                                >
                                    تغير كلمة السر
                                </button>
                            </div>
                        </ValidationObserver>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="box">
                        <img
                            :src="`${publicPath}assets/svg/riadiat-green-card.svg`"
                        />
                    </div>
                </div>
            </div>
        </div>
        <d-dialog-large
            :xl="false"
            :group="group"
            :closeDialog="closeDialog"
            :openDialog="openDialog"
            hideHeader
        >
            <template v-slot:default>
                <div>
                    <div class="image-thanks py-2">
                        <img
                            :src="`${publicPath}assets/img/reset-password1.png`"
                        />
                    </div>
                    <div class="txt-thanks text-center">
                        <p>تم تغيير كلمة السر بنجاح</p>
                    </div>
                </div>
            </template>
            <template v-slot:actions>
                <button type="button" @click="closeEvent" class="btn btn-main">
                    الصفحة تسجيل الدخول
                </button>
            </template>
        </d-dialog-large>
    </div>
</template>

<script>
    export default {
        props: {
            dataInfo: {},
        },
        data: () => ({
            show: false,

            showC: false,
            loading: false,
            itemForm: {
                new_password: '',
                new_password_confirmation: '',
            },
            hasError: false,
            message: '',
            group: 'forget-password',
            showDialog: false,
        }),
        methods: {
            openDialog() {
                this.showDialog = true;
                return true;
            },
            closeDialog() {
                this.showDialog = false;
                return true;
            },
            closeEvent() {
                this.fireEvent(this.group + '-close-dialog');
                // got to home page
                this.$router.push({ name: 'login' });
            },
            async resetPassword(e) {
                e.preventDefault();
                this.hasError = false;
                this.loading = true;
                this.message = '';
                let valid = await this.$refs.form.validate();
                if (!valid) {
                    this.loading = false;
                    console.log('form invalid');
                    return;
                }
                let formData = this.loadObjectToForm(this.itemForm);
                formData.append('email', this.dataInfo.form.email);
                try {
                    let { data } = await this.$axios.post(
                        'user/auth/new-password',
                        formData
                    );
                    if (data.success) {
                        this.fireEvent(this.group + '-open-dialog');
                        this.openDialog();
                        // let info = {
                        //     data: data,
                        //     form: this.itemForm,
                        // };
                        // this.$emit('success', info);
                    } else {
                        window.SwalError(data.message);
                        this.message = data.message;
                        this.hasError = true;
                    }
                } catch (error) {
                    this.message = 'خطا غير معروف';
                    if (error.response) {
                        let response = error.response;
                        if (response.status == 422) {
                            this.message = response.data.message;
                            if (
                                Object.hasOwnProperty.call(
                                    response.data,
                                    'errors'
                                )
                            ) {
                                this.$refs.form.setErrors(response.data.errors);
                            }
                        }
                    }

                    this.hasError = true;
                }
                this.loading = false;
            },
        },
    };
</script>

<style></style>
