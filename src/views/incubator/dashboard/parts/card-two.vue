<template>
  <div  class="box border  p-4 rounded-2">
                <div class="d-flex ">
                    <div class="w-75">

                        <h3 class="text-dark">
                            تحتاج الى المساعدة ؟
                        </h3>
                        <p  class="text-dark">
                            لانك عضو في شبكة رياديات يمكنك طلب استشارات  من مستشارينا المميزين في اغلب المجالات بكل سهولة     
                        </p>
                        <router-link :to="getRouteLocale('consulting-page')" class="border  border-white rounded-2  text-white bg-main p-2">
                            {{ $t('know_more') }} 
                        </router-link>
                    </div>
                    <div>
                        <img class="img-fluid"  src="/assets/img/vuesax/v2.png" alt="">

                    </div>
                </div>

            </div>
</template>

<script>
export default {

}
</script>

<style>

</style>