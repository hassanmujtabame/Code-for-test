<template>
  <div class="sec-subscripe mt-5">
        <div class="container">
          <div class="row align-items-center justify-content-center " :class="{'p-4':!isMobile,'py-4':isMobile}">
            <div class="col-md-6">
              <h1 class="text-white">
              {{ $t('subscribe-newsletter') }}
              </h1>
              <p class="text-white">
                {{ $t('subscribe-newsletter-text') }}
              </p>
            </div>
            <div class="col-md-6">
              <div class="input-group input-group-sm input-group-md input-group-lg  m-auto"  :class="{'w-75':!isMobile,'w-100':isMobile}">
                <input type="text" class="form-control p-3" :class="{'fs-6':isMobile}" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" :placeholder="$t('write-your-email')">
                <span class="input-group-text bg-yal text-black" :class="{'fs-6':isMobile}" id="inputGroup-sizing-lg">{{ $t('Subscribe') }}</span>
              </div>
            </div>
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