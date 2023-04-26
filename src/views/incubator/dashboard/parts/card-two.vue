<template>
  <div  class="box border  p-3 rounded-2">
                <div class="d-flex ">
                    <div class="w-75">

                        <h3 class="text-dark">
                            تبحثين عن موظفين؟
                        </h3>
                        <p  class="text-dark">
                            يمكنك الان البحث عن الموظفين المناسبين لك عن طريق وظائف رياديات
                        </p>
                        <router-link :to="getRouteLocale('service-provider-home')" class="border  border-white rounded-2  text-white bg-main p-2">
                            {{ $t('know_more') }} 
                        </router-link>
                    </div>
                    <div >
                        <img class="img-fluid" style="height: 184px;" src="/assets/img/Group 1171276124.png" alt="تبحثين عن موظفين؟">

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