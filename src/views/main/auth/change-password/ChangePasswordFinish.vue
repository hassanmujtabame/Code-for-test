<template>
    <div class="container">
        <div class="box bg-white    rounded-3">

            <div class="row align-items-center p-0 position-relative ">
                <div class="col-12 col-md-6 p-4">
                    <div style="" class="text-center ">
                        <img class="" :src="`${publicPath}assets/img/pot_2.png`" alt="" width="320" height="220">
                    </div>
                    <div class=" text-center">

                        <h1 class="fw-bolder  ">
                            تم تغير كلمة السر بنجاح </h1>


                        <div class="col-12 text-center ">
                            <button class="btn btn-main  " @click="redirectToHome" role="button"> الصفحة الرئيسية </button>
                        </div>

                    </div>

                </div>
                <div class=" col-12 col-md-6">
                    <div class="box">
                        <img :src="`${publicPath}assets/svg/riadiat-green-card.svg`" />

                    </div>

                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    data: () => ({
        show: false,
        form: {
            email: process.env.EMAIL || '',
            password: process.env.PASSWORD || ''
        },
        hasError: false,
        message: '',
    }),
    methods: {
        redirectToHome() {
            this.router_push('index')
        }
    }
}
</script>