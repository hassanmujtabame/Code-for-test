<template>
    <div class="consulting " :class="[isMobile ? 'p-3' : 'p-5 pb-0']">
        <div class="" :class="{ container: !isMobile }">
            <div class="row">
                <div class="col-8 col-md-6">
                    <h1 class="header-title-page">
                        لقاءات تعليمية </h1>
                    <p class="header-desc-page mt-3">كابشن بسيط عن اللقاءات واهميتها في سطرين</p>
                    <p class="header-desc-page mt-3">كابشن بسيط عن اللقاءات واهميتها في سطرين</p>

                </div>
                <div class="col-3 col-md-6  d-none d-lg-block d-xl-block">
                    <div style="overflow: inherit; background:transparent;" class="float-start">
                        <img src="@/assets/img/educational_meetings.png" alt=""
                            style="height: 256px !important; object-fit: contain !important;">
                    </div>
                </div>
            </div>
            <div class="star-cons">
                <img :src="`${publicPath}assets/img/starrrr.png`" alt="">
            </div>
            <div class="star-cons stars">
                <img :src="`${publicPath}assets/img/starsss.png`" alt="">
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'section-top',
    data: () => {
        return {
            subNetworkTitle: 'يجب عليك الاشتراك في الشبكة حتى يمكنك الاشتراك في حاضنة رياديات'
        }
    }
}
</script>

<style></style>