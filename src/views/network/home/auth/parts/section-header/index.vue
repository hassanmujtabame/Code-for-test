<template>
  <div class="consulting " :class="{'p-5':!isMobile}">
            <div class="netwok-home-header">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-6">
                        <h1 class="header-title-page">
                            {{ $t('Riadiat-network') }}                                                                     </h1>
                        <p class="header-desc-page">
                            {{ $t('riadiat-network-home-text-1') }}
                  </p><p class="header-desc-page">
                            {{ $t('riadiat-network-home-text-2') }}
                            </p>
                            <p class="header-desc-page">
                                {{ $t('riadiat-network-home-text-3') }}
                        </p>     
                        <div class="btn-main-style mt-5">
                          <router-link v-if="!userIsSubNetwork || !userIsSubNetwork.subscribe" :to="getRouteLocale('network-subscribe')" class="btn-custmer fs-r-24 shadow mt-2">{{ $t('join-us') }}</router-link>

                            </div>                                   
                    </div>
                    <div class="col-md-6">
                        <div style="overflow: inherit;" class=" m-auto text-end">
                            <img class="img-fluid"  src="/assets/img/pana-network.png" alt="" >
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
 name:'section-header'
}
</script>

<style>
</style>