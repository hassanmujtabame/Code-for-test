<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" style="z-index: 10002 !important;" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fw-bolder m-c" id="exampleModalLabel">مرحبا بك</h5>
                    <button type="button" class="close fs-2"
                        style="border-radius: 10px;border: 1px solid #979797;width: 40px; background: #fff; height: 40px;border-color:#979797"
                        data-bs-dismiss="modal" aria-label="Close">
                        <span style="color: #222;" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <ValidationObserver ref="loginForm">

                        <!-- Start Email -->
                        <ValidationProvider vid="email" rules="required|email" :name="$t('Email')" v-slot="{ errors }"
                            tag="div" class="mb-3">
                            <b-form-input
                                style="box-shadow: rgba(0, 0, 0, 0.125) 4px 4px 8px 4px; padding:10px; border: none;"
                                type="text" :placeholder="$t('Email')" v-model="form.email" required />
                            <div class="text-input-error">{{ errors[0] }}</div>
                        </ValidationProvider>
                        <!-- End Email -->

                        <!-- Start Password -->
                        <ValidationProvider vid="password" rules="required" :name="$t('Password')" v-slot="{ errors }"
                            tag="div">
                            <div class="position-relative">
                                <b-form-input
                                    style="box-shadow: rgba(0, 0, 0, 0.125) 4px 4px 8px 4px; padding:10px; border: none;"
                                    id="password-field" :type="show ? 'text' : 'password'" v-model="form.password"
                                    class="form-control" :placeholder="$t('Password')" />
                                <span @click="show = !show" class="icon-input-end fa-regular position-absolute"
                                    :class="{ 'fa-eye': !show, 'fa-eye-slash': show }"></span>
                            </div>
                            <div class="text-input-error">{{ errors[0] }}</div>
                        </ValidationProvider>
                        <!-- End Password -->

                        <div class="d-flex justify-content-between mt-3" style="height: 60px;">

                            <div class="form-check">
                                <div class="box d-flex gap-2">
                                    <label class="form-check-label">{{ $t('rememberme') }}</label>
                                    <div class="item">
                                        <div class="toggle-pill-color">
                                            <input type="checkbox" id="pill3" name="check">
                                            <label for="pill3"></label>
                                        </div>
                                    </div>
                                </div>
                                <!-- <input class="form-check-input" type="checkbox" value id="flexCheckDefault" /> -->
                                <!-- <label class="form-check-label" for="flexCheckDefault">{{ $t('rememberme') }}</label> -->
                            </div>
                            <router-link :to="getRouteLocale('forget-password')" class="box m-c">{{ $t('forgot_password')
                            }}</router-link>
                        </div>

                        <div v-if="verifyCode" class="alert alert-danger mt-2" role="alert">
                            <a href="#" @click="resendCode">{{ $t('resend-code') }}</a>
                        </div>

                        <div class="text-center mt-5">
                            <button class="btn btn-main-v py-2 px-5" role="button" @click="login">{{ $t('login') }}</button>
                        </div>
                    </ValidationObserver>

                    <h6 class="no-have-account mt-3">
                        ليس لديك حساب ؟
                        <router-link :to="getRouteLocale('register')" class="m-c">أنشئ حساب الان</router-link>
                    </h6>

                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            form: {
                email: "",
                password: ""
            },
            verifyCode: false
        };
    },
    methods: {
        async resendCode() {
            let email = this.form.email;
            try {
                let { data } = await this.$axios.post("user/auth/resend-code", {
                    email
                });
                if (data.success) {
                    let pin_code = data.data.pin_code;
                    this.$emit("change-form", { data: { pin_code }, form: { email } });
                    window.successMsg(data.message);
                } else {
                    window.errorMsg(data.message);
                }
            } catch (error) {
                let response = error.response;
                window.errorMsg(response.data.message);
            }
        },
        async login() {
            this.verifyCode = false;
            let valid = await this.$refs.loginForm.validate();
            if (!valid) {
                return;
            }
            try {
                let { data } = await this.$axios.post("user/auth/login", this.form);
                if (data.success) {
                    window.successMsg();
                    let { token, ...user } = data.data;
                    window.store.commit("auth/SET_TOKEN", token);
                    window.store.commit("auth/SET_USER", user);
                    window.store.commit("auth/SET_IS_PROVIDER", user.subscribers.service_provider.subscribe);
                    window.store.commit("auth/ACADEMY_ROLE", "student");
                    let element = document.getElementById('exampleModal');
                    $(element).modal('hide')
                    this.$router.push({ name: "affiliate-marketing-dashboard" })
                } else {
                    if (data.data.type == "verify_code") {
                        this.verifyCode = true;
                    }
                }
                this.$refs.loginForm.reset();
            } catch (error) {
                let response = error.response;
                window.errorMsg(response.data.message);
                if (response.status == 422) {
                    this.setErrorsForm(this.$refs.loginForm, response);
                }
            }
        }
    }
};
</script>

<style scoped>
.modal.fade>div {
    top: 50%;
    transform: translateY(-50%);
}

.box {
    padding: 2em;
}

.item {
    margin-bottom: 2em;
}

/* checkbox-rect */
.checkbox-rect input[type="checkbox"] {
    display: none;
}

.checkbox-rect input[type="checkbox"]+label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 20px;
    font: 14px/20px "Open Sans", Arial, sans-serif;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.checkbox-rect input[type="checkbox"]:hover+label:hover {
    color: rgb(23, 86, 228);
}

.checkbox-rect input[type="checkbox"]:hover+label:before {
    background: #50565a;
    box-shadow: inset 0px 0px 0px 2px #f7f2f2;
}

.checkbox-rect input[type="checkbox"]+label:last-child {
    margin-bottom: 0;
}

.checkbox-rect input[type="checkbox"]+label:before {
    content: "";
    display: block;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid #343a3f;
    border-radius: 0.2em;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transition: all 0.2s, background 0.2s ease-in-out;
    transition: all 0.2s, background 0.2s ease-in-out;
    background: #f3f3f3;
}

.checkbox-rect input[type="checkbox"]:checked+label:before {
    width: 1.3em;
    height: 1.3em;
    border-radius: 0.2em;
    border: 2px solid #fff;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    background: #50565a;
    box-shadow: 0 0 0 1px #000;
}

/* checkbox-rect end */

/* checkbox-rect2 */
.checkbox-rect2 input[type="checkbox"] {
    display: none;
}

.checkbox-rect2 input[type="checkbox"]+label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 20px;
    font: 14px/20px "Open Sans", Arial, sans-serif;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.checkbox-rect2 input[type="checkbox"]:hover+label:hover {
    color: rgb(23, 86, 228);
}

.checkbox-rect2 input[type="checkbox"]:hover+label:before {
    border: 1px solid #343a3f;
    box-shadow: 2px 1px 0 #343a3f;
}

.checkbox-rect2 input[type="checkbox"]+label:last-child {
    margin-bottom: 0;
}

.checkbox-rect2 input[type="checkbox"]+label:before {
    content: "";
    display: block;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid #343a3f;
    border-radius: 0.2em;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transition: all 0.2s, background 0.2s ease-in-out;
    transition: all 0.2s, background 0.2s ease-in-out;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: -2px -1px 0 #343a3f;
    background: #f3f3f3;
}

.checkbox-rect2 input[type="checkbox"]:checked+label:before {
    border: 2px solid #fff;
    border-radius: 0.3em;
    background: #50565a;
    box-shadow: 2px 1px 0 #50565a;
}

/* checkbox-rect2 end */

/* checkbox-circle */
.checkbox-circle input[type="checkbox"] {
    display: none;
}

.checkbox-circle input[type="checkbox"]+label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 20px;
    font: 14px/20px "Open Sans", Arial, sans-serif;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.checkbox-circle input[type="checkbox"]:hover+label:hover {
    color: rgb(23, 86, 228);
}

.checkbox-circle input[type="checkbox"]:hover+label:before {
    border: 1px solid #343a3f;
    width: 1.2em;
    height: 1.2em;
    border: 2px solid #fff;
    background: #50565a;
    box-shadow: 0 0 0 1px #000;
}

.checkbox-circle input[type="checkbox"]+label:last-child {
    margin-bottom: 0;
}

.checkbox-circle input[type="checkbox"]+label:before {
    content: "";
    display: block;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid #343a3f;
    border-radius: 1em;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transition: all 0.2s, transform 0.3s ease-in-out;
    transition: all 0.2s, transform 0.3s ease-in-out;
    background: #f3f3f3;
}

.checkbox-circle input[type="checkbox"]:checked+label:before {
    border-radius: 1em;
    border: 2px solid #fff;
    width: 1.2em;
    height: 1.2em;
    background: #50565a;
    box-shadow: 0 0 0 1px #000;
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
}

/* checkbox-circle end */

/* checkbox-circle2 */
.checkbox-circle2 input[type="checkbox"] {
    display: none;
}

.checkbox-circle2 input[type="checkbox"]+label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 20px;
    font: 14px/20px "Open Sans", Arial, sans-serif;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.checkbox-circle2 input[type="checkbox"]:hover+label:hover {
    color: rgb(23, 86, 228);
}

.checkbox-circle2 input[type="checkbox"]:hover+label:before {
    border: 1px solid #343a3f;
    box-shadow: 2px 1px 0 #343a3f;
}

.checkbox-circle2 input[type="checkbox"]+label:last-child {
    margin-bottom: 0;
}

.checkbox-circle2 input[type="checkbox"]+label:before {
    content: "";
    display: block;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid #343a3f;
    border-radius: 1em;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transition: all 0.2s, background 0.2s ease-in-out;
    transition: all 0.2s, background 0.2s ease-in-out;
    background: #f3f3f3;
    box-shadow: -2px -1px 0 #343a3f;
}

.checkbox-circle2 input[type="checkbox"]:checked+label:before {
    border-radius: 1em;
    border: 2px solid #fff;
    width: 1.15em;
    height: 1.15em;
    background: #50565a;
    box-shadow: 2px 1px 0 #50565a;
}

/* checkbox-circle2 end */

/* toggle-rect */
.toggle-rect input[type="checkbox"] {
    display: none;
}

.toggle-rect input[type="checkbox"]+label {
    display: block;
    position: relative;
    width: 3em;
    height: 1.6em;
    margin-bottom: 20px;
    border-radius: 0.2em;
    background: #f3f3f3;
    box-shadow: inset 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.toggle-rect input[type="checkbox"]+label:before {
    content: "";
    display: block;
    width: 1.2em;
    height: 1.2em;
    border-radius: 0.2em;
    background: #50565a;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 0.2em;
    top: 0.2em;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.toggle-rect input[type="checkbox"]:checked+label {
    background: #fff;
}

.toggle-rect input[type="checkbox"]:checked+label:before {
    box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2);
    left: 1.6em;
}

/* toggle-rect end*/

/* toggle-rect-bw */
.toggle-rect-bw input[type="checkbox"] {
    display: none;
}

.toggle-rect-bw input[type="checkbox"]+label {
    display: block;
    position: relative;
    width: 3em;
    height: 1.6em;
    margin-bottom: 20px;
    background: #50565a;
    border-radius: 0.2em;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.toggle-rect-bw input[type="checkbox"]+label:before {
    content: "";
    display: block;
    width: 1.2em;
    height: 1.2em;
    border-radius: 0.2em;
    background: #f7f2f2;
    position: absolute;
    left: 0.2em;
    top: 0.2em;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.toggle-rect-bw input[type="checkbox"]:checked+label {
    background: #40464a;
}

.toggle-rect-bw input[type="checkbox"]:checked+label:before {
    left: 1.6em;
}

/* toggle-rect-bw end*/

/* toggle-rect-color */
.toggle-rect-color input[type="checkbox"] {
    display: none;
}

.toggle-rect-color input[type="checkbox"]+label {
    display: block;
    position: relative;
    width: 3em;
    height: 1.6em;
    margin-bottom: 20px;
    background: #fff;
    border-radius: 0.2em;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.toggle-rect-color input[type="checkbox"]+label:before {
    content: "";
    display: block;
    width: 1.2em;
    height: 1.2em;
    border-radius: 0.2em;
    background: #50565a;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 0.2em;
    top: 0.2em;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.toggle-rect-color input[type="checkbox"]:checked+label {
    background: #2eb9b3;
}

.toggle-rect-color input[type="checkbox"]:checked+label:before {
    box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2);
    left: 1.6em;
}

/* toggle-rect-color end*/

/* toggle-rect-color */
.toggle-rect-dark input[type="checkbox"] {
    display: none;
}

.toggle-rect-dark input[type="checkbox"]+label {
    display: block;
    position: relative;
    width: 3em;
    height: 1.6em;
    margin-bottom: 20px;
    background: #303e58;
    border-radius: 0.2em;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.toggle-rect-dark input[type="checkbox"]+label:before {
    content: "";
    display: block;
    width: 1.2em;
    height: 1.2em;
    border-radius: 0.2em;
    background: #fff;
    position: absolute;
    left: 0.2em;
    top: 0.2em;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.toggle-rect-dark input[type="checkbox"]:checked+label:before {
    background: #2eb9b3;
    left: 1.6em;
}

/* toggle-rect-dark end*/

/* toggle-pill */
.toggle-pill input[type="checkbox"] {
    display: none;
}

.toggle-pill input[type="checkbox"]+label {
    display: block;
    position: relative;
    width: 3em;
    height: 1.6em;
    margin-bottom: 20px;
    border-radius: 1em;
    background: #f3f3f3;
    box-shadow: inset 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-transition: background 0.1s ease-in-out;
    transition: background 0.1s ease-in-out;
}

.toggle-pill input[type="checkbox"]+label:before {
    content: "";
    display: block;
    width: 1.2em;
    height: 1.2em;
    border-radius: 1em;
    background: #50565a;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 0.2em;
    top: 0.2em;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.toggle-pill input[type="checkbox"]:checked+label {
    background: #fff;
}

.toggle-pill input[type="checkbox"]:checked+label:before {
    box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2);
    left: 1.6em;
}

/* toggle-pill end */

/* toggle-pill-bw */
.toggle-pill-bw input[type="checkbox"] {
    display: none;
}

.toggle-pill-bw input[type="checkbox"]+label {
    display: block;
    position: relative;
    width: 3em;
    height: 1.6em;
    margin-bottom: 20px;
    background: #50565a;
    border-radius: 1em;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-transition: background 0.1s ease-in-out;
    transition: background 0.1s ease-in-out;
}

.toggle-pill-bw input[type="checkbox"]+label:before {
    content: "";
    display: block;
    width: 1.2em;
    height: 1.2em;
    border-radius: 1em;
    background: #f7f2f2;
    position: absolute;
    left: 0.2em;
    top: 0.2em;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.toggle-pill-bw input[type="checkbox"]:checked+label {
    background: #40464a;
}

.toggle-pill-bw input[type="checkbox"]:checked+label:before {
    left: 1.6em;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

/* toggle-pill-bw end */

/* toggle-pill-color */
.toggle-pill-color input[type="checkbox"] {
    display: none;
}

.toggle-pill-color input[type="checkbox"]+label {
    display: block;
    position: relative;
    width: 3em;
    height: 1.6em;
    margin-bottom: 20px;
    border-radius: 1em;
    background: #fff;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-transition: background 0.1s ease-in-out;
    transition: background 0.1s ease-in-out;
}

.toggle-pill-color input[type="checkbox"]+label:before {
    content: "";
    display: block;
    width: 1.2em;
    height: 1.2em;
    border-radius: 1em;
    background: #fff;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 0.2em;
    top: 0.2em;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.toggle-pill-color input[type="checkbox"]:checked+label {
    background: #2eb9b3;
}

.toggle-pill-color input[type="checkbox"]:checked+label:before {
    box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2);
    left: 1.6em;
}

/* toggle-pill-color end */

/* toggle-pill-color */
.toggle-pill-dark input[type="checkbox"] {
    display: none;
}

.toggle-pill-dark input[type="checkbox"]+label {
    display: block;
    position: relative;
    width: 3em;
    height: 1.6em;
    margin-bottom: 20px;
    border-radius: 1em;
    background: #303e58;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-transition: background 0.1s ease-in-out;
    transition: background 0.1s ease-in-out;
}

.toggle-pill-dark input[type="checkbox"]+label:before {
    content: "";
    display: block;
    width: 1.2em;
    height: 1.2em;
    border-radius: 1em;
    background: #fff;
    position: absolute;
    left: 0.2em;
    top: 0.2em;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}

.toggle-pill-dark input[type="checkbox"]:checked+label:before {
    background: #2eb9b3;
    box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2);
    left: 1.6em;
    -webkit-transform: rotate(295deg);
    transform: rotate(295deg);
}

/* toggle-pill-dark end */
</style>