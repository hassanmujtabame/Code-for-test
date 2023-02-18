<template>
    <div class="">
        <div class="over-lay">
            <div :style="{height:isMobile?'400px':'600px'}" class="container d-flex flex-column justify-content-center align-items-center py-5">

                <h1  class="service-provider-header_title" :class="{'mobile':isMobile}">
                    أهلاً و مرحباً بك في مقدمي الخدمات
                </h1>
                <h6 class="service-provider-header_subtitle" :class="{'mobile':isMobile}">
                    منصة تجمع أهم وألمع رائدين و رائدات الأعمال في السعودية والخليج في مكان واحد
                </h6>
                <div class="row w-75" :class="{'mx-5':!isMobile,'mx-1':isMobile}">
                    <div class="col-12 col-md-9">
                    <input class=" p-3 w-100 rounded-2 border-0 bg-white" type="text"
                        placeholder="ابحث عن خدمات او طلبات من هنا">
                    </div>
                    <div class="col-12 col-md-3 d-flex align-items-center" :class="{'mt-2 mb-3':isMobile}">
                    <button style="height: 51px;" class="btn-main" :class="{'w-100':isMobile}">
                        ابحث
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 name:'section-auth-header'
}
</script>

<style scoped>
.service-provider-header_subtitle{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */

text-align: center;
text-transform: capitalize;

color: #FFFFFF;

/* T */

text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.27);
}
.service-provider-header_subtitle.mobile{
    font-size: 12px;
    line-height: 16px;
}
.service-provider-header_title{
    font-style: normal;
font-weight: 600;
font-size: 56px;
line-height: 72px;
/* identical to box height, or 129% */

text-align: center;
text-transform: capitalize;

color: #FFFFFF;

/* T */

text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.27);
}
.service-provider-header_title.mobile{
    font-size: 30px;
    line-height: 40px;
}
</style>