<template>
    <div style="margin-top: 96px;">
        <div class="container network-profile">

            <div class="row">
                <div class="col-md-4  mt-3">
                    <userInfoCard />
                </div>
                <div class="col-md-8 mt-3 ">
                    <div v-if="false" class="row border px-2">
                        <div class="p-2 col-12 col-md-6">
                            <h5>
                                متاح لتقديم الخدمات
                            </h5>
                            <p>
                                يمكنك تصفح خدمات هذا العضو او غيره من اعضاء مقدمي الخدمة عند الدخول الى منصة مقدمي خدمة
                                رياديات
                            </p>
                            <div>
                                <button class="btn bg-main p-2 text-white rounded-2">
                                    الدخول للمنصة
                                </button>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <img class="w-100" :src="`${publicPath}assets/img/Group 1171275405.png`" alt="">
                        </div>

                    </div>
                    <!-- tabs-->
                    <TabsUser :userId="$route.params.id" />

                </div>
            </div>
        </div>




    </div>
</template>

<script>
import userInfoCard from '@/components/cards/user-info.vue';
import TabsUser from './section-tabs/index'
export default {
    name: 'show-profile',
    components: {
        userInfoCard,
        TabsUser
    }
}
</script>

<style>

</style>