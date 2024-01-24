<template>
    <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <h1 class="header-title-page text-black" style="display: inline;">
                        حاضنة
                    </h1>
                    <h1 class="header-title-page select-title-main text-black" style="display: inline;">
                        رياديات
                        <img src="@/assets/img/new/main-page/header/Vector 14.png" alt="">
                    </h1>

                    <p class="header-desc-page text-black my-5">فكـــرة مشروعـــــك راح تـــصـــبـــح واقـــــــــــــع
                        أول خطوة لتحقيقه أشتراكك في حاضنة رياديات</p>
                    <div class="mt-4">
                        <a v-if="!token" @click="shouldLoginMsg" class="btn-custmer shadow mt-2 "> {{ $t('join-us') }} </a>
                        <router-link v-if="!token" :to="getRouteLocale('login')"
                            class="btn-custmer-w bg-transparent text-white mt-2 mx-3"> {{ $t('login-female') }}
                        </router-link>
                    </div>

                </div>
                <div  class="col-12 col-md-6" style="min-height: 414px;" v-if="!isMobile">
                    <div style="height:100%;">

                        <iframe class="rounded" style="width: 100%; height: 100%" src="https://www.youtube.com/embed/aZuyVcgBKGs"
                            title="جلسة حوارية عربيات" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
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

<style scoped>
.select-title-main {
    position: relative;
  }
  
  .select-title-main img {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0px;
    width: 100%;
  }
</style>