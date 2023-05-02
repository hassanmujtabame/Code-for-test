<template>
  <div  class="box bg-main p-3 rounded-2">
                <div class="d-flex">
                    <div class="w-75">

                        <h3 class="text-white">
                            ابحثي عن مستثمر
                        </h3>
                        <p  class="text-white">
                            اعرضي مشروعك على الشبكة واحصلي على تمويل مالي لتنفيذ مشروعك.</p>
                        <router-link custom :to="getRouteLocale('network-investment-project-request-add')" v-slot="{navigate}">
                        <button @click="navigate"  class="border  border-white rounded-2  text-white bg-transparent p-2">
                           {{ $t('know_more') }}
                        </button>
                    </router-link>
                    </div>
                    <div>
                        <img class="img-fluid"  :src="`${publicPath}assets/img/Group 1171276122.png`" alt="">

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