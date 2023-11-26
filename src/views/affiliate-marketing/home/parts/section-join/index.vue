<template>
    <div class="login-page" style="background-image: linear-gradient(-55deg, #FFF7E0, transparent);">
        <b-container>
            <LoginForm @change-form="afterSuccessForm" v-if="status == 'form'" />
            <ResendCodeView @success="afterSuccessCheck" @cancel="status = 'form'" :dataInfo="dataCheck"
                v-if="status == 'resend-code'" />
        </b-container>
    </div>
</template>

<script>
import ResendCodeView from "./ResendCode.vue";
import LoginForm from "./loginForm.vue";

export default {
    name: "section-join",
    metaInfo() {
        return { title: this.$t("login") };
    },
    components: {
        LoginForm,
        ResendCodeView
    },
    data: () => ({
        status: "form",

        dataCheck: {},
        dataFinish: {}
    }),
    methods: {
        afterSuccessForm(evt) {
            this.dataCheck = evt;
            this.status = "resend-code";
        },
        afterSuccessCheck(/*evt*/) {
            /*this.dataFinish= evt*/
            window.SwalSuccess("تم تفيعل حسابك بنجاح");
            this.status = "form";
        }
    },
    mounted() {
        this.status = "form";
    }
};
</script>

<style scoped> .login-page {
     background-color: #f6f8f9;
     padding: 3em 0 6em;
 }
</style>