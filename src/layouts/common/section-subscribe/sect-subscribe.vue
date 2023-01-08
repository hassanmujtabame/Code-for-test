<template>
  <div class="sec-subscripe mt-5">
        <div class="container">
          <div class="row align-items-center justify-content-center p-4">
            <div class="col-md-6">
              <h1 class="text-white">
              {{ $t('subscribe-newsletter') }}
              </h1>
              <p class="text-white">
                {{ $t('subscribe-newsletter-text') }}
              </p>
            </div>
            <div class="col-md-6">
              <div class="input-group input-group-lg w-75 m-auto"  >
                <input type="text" class="form-control p-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" :placeholder="$t('write-your-email')">
                <span class="input-group-text bg-yal text-white" id="inputGroup-sizing-lg">{{ $t('Subscribe') }}</span>
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