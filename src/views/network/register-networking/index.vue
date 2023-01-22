<template>
    <div class="mt-5">
        <div class="main-top p-5 position-relative">
            <h1 class="text-white p-5 fs-1"> {{ $t('Join-our-family-of-partners') }}</h1>
            <a id="btn-register" href="#register-form" class="mx-5">
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 21.5319C6.07 21.5319 1.25 17.0351 1.25 11.5028C1.25 5.97043 6.07 1.47363 12 1.47363C17.93 1.47363 22.75 5.97043 22.75 11.5028C22.75 17.0351 17.93 21.5319 12 21.5319ZM12 2.87305C6.9 2.87305 2.75 6.74477 2.75 11.5028C2.75 16.2608 6.9 20.1325 12 20.1325C17.1 20.1325 21.25 16.2608 21.25 11.5028C21.25 6.74477 17.1 2.87305 12 2.87305Z"
                        fill="white" />
                    <path
                        d="M11.9999 17.3338C11.7899 17.3338 11.5899 17.3058 11.4199 17.2498C9.26986 16.5687 5.85986 14.1244 5.85986 10.4859C5.85986 8.54542 7.53986 6.96875 9.60986 6.96875C10.5099 6.96875 11.3399 7.25796 12.0099 7.78041C12.6799 7.25796 13.5199 6.96875 14.3999 6.96875C16.4699 6.96875 18.1499 8.54542 18.1499 10.4859C18.1499 14.1151 14.7399 16.5594 12.5799 17.2498C12.4099 17.3058 12.1999 17.3338 11.9999 17.3338ZM9.59987 8.37748C8.35987 8.37748 7.34987 9.3291 7.34987 10.4953C7.34987 13.7513 10.7199 15.5612 11.8999 15.9343C11.9399 15.9437 12.0399 15.9437 12.0799 15.9343C13.2599 15.5612 16.6299 13.7513 16.6299 10.4953C16.6299 9.3291 15.6199 8.37748 14.3799 8.37748C13.6799 8.37748 13.0099 8.69468 12.5899 9.22646C12.3099 9.58098 11.6699 9.58098 11.3899 9.22646C10.9699 8.68535 10.3199 8.37748 9.59987 8.37748Z"
                        fill="white" />
                </svg>

                {{ $t('Register-now') }}
            </a>
            <div class="position-absolute anim-hwo-ar-you" :style="$i18n.locale !== 'ar' ? { left: 'auto', right: 0 } : {}">
                <img src="/assets/img/anim-hwo-ar-you.png" :class="{ 'rotateY-180': $i18n.locale !== 'ar' }" alt="">
            </div>
            <div class="star position-absolute">
                <img class="landing" src="/assets/img/start.png" alt="">
            </div>
            <div class="square position-absolute">
                <img class="landing" src="/assets/img/square.png" alt="">
            </div>
            <div class="star-two position-absolute">
                <img class="landing" src="/assets/img/start.png" alt="">
            </div>
            <div class="star-big position-absolute">
                <img class="landing" src="/assets/img/star-big.png" alt="">
            </div>
        </div>
        <!--features-->
        <SectionFeatures />
        <!-- form register-->
        <SectionForm />
        <!--  خدمات رياديات لك-->
        <SectionServices />
        <successRegisterDialog />
    </div>
</template>

<script>
import SectionForm from './parts/section-form/index.vue'
import SectionServices from './parts/section-services/index.vue'
import SectionFeatures from './parts/section-features/index.vue'
import successRegisterDialog from './parts/dialogs/success-register.vue'
export default {
    name: 'register-networking',
    components:{
        SectionForm,
        successRegisterDialog,
        SectionServices,
        SectionFeatures
    }
}
</script>

<style scoped>
#btn-register {
    border: 1px solid #FFFFFF;
    box-shadow: 0px 4px 15px 1px rgb(0 0 0 / 25%);
    border-radius: 8px;
    background: transparent;
    padding: 10px 25px;
    color: white
}

.eye-password-icon {
    top: 12px;
    left: 15px;
    color: #CDD7D8;
    font-size: 23px;
}
</style>