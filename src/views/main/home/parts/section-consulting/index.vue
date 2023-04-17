<template>
  <div style="overflow: hidden;" class="sec-four mt-5">
          <div class="row align-items-center">
            <div class="col-md-6" data-aos="fade-left"  data-aos-duration="2000">
              <h2>{{ $t('Riadiat-consulting') }}</h2>
              <p style="line-height: 2" class="pt-3">
                {{ $t('Riadiat-consulting-text') }}
                <a style="color: #ffbc00" href="">
                  {{ $t('Riadiat-consulting-link') }}
                </a>
              </p>
              <div class="w-100 text-end">
              <button class="btn btn-custmer my-2">
                <i class="fa fa-arrow-up-right-from-square"></i>
                {{$t('know-more')}}
              </button>
            </div>
            </div>

            <div class="col-md-6" data-aos="fade-right"  data-aos-duration="2000">
              <img class="w-100" src="/assets/img/Rectangle 1777.png" alt="" width="460" />
            </div>
          </div>
        </div>
</template>

<script>
export default {
 name:'consulting-riadiat'
}
</script>

<style>

</style>