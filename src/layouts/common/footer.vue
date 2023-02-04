<template>
     <footer>
      <div class="container-fluid">
          <div class="row justify-content-between align-items-center p-3 text-center">
              <div class="col-12 col-md-3 mt-2 ">
                  <a href="/"
                      class="d-flex header-logo align-items-center justify-content-center mb-2 mb-lg-0 text-dark text-decoration-none">
                      <div>
                          <img src="/assets/img/logo-footer.png" >
                      </div>
                  </a>
                  <div class="social mt-3">
                      <a href="#">
                          <img src="/assets/img/Twitter.png" alt="">
                      </a>
                      <a href="#">
                          <img src="/assets/img/Instagram.png" alt="">
                      </a>
                      <a href="">
                      <img src="/assets/img/Linkedin.png" alt="">
                      </a>
                      <a href="">
                          <img src="/assets/img/Facebook.png" alt="">
                      </a>
                  </div>
                  <div class="policy-links">
                      <router-link :to="getRouteLocale('Terms-and-Conditions')">
                          {{ $t('terms-use') }}
                      </router-link>
                      <router-link :to="getRouteLocale('Terms-and-Conditions')">
                          {{ $t('Privacy-policy') }}
                      </router-link>
                  </div>
              </div>
              <div class="col-12 col-md-7 mt-2">
                  <div class="row justify-content-between nav ">
                      <div class="col-3 col-md-3">
                          <h6>{{ $t('Riadiat') }}</h6>
                          <router-link :to="getRouteLocale('who-are-we')" class="d-block">{{ $t('who-are-we') }}</router-link>
                          <a href="#" class="d-block">{{ $t('comparation-services') }}</a>
                      </div>
                      <div class="col-3 col-md-3">
                          <h6>{{ $t('riadiat-channel') }}</h6>
                          <router-link  :to="getRouteLocale('network-blogs')" class="d-block">{{ $t('Blogs') }}</router-link>
                          <router-link  :to="getRouteLocale('network-podcasts')" class="d-block">{{ $t('podcast') }}</router-link>
                          <router-link :to="getRouteLocale('network-success-stories')" class="d-block">{{ $t('success-story') }}</router-link>
                      </div>
                      <div class="col-3 col-md-3">
                          <h6>{{ $t('join-us') }}</h6>
                          <router-link :to="getRouteLocale('service-provider-jobs')" class="d-block">{{ $t('recruitment') }}</router-link>
                          <router-link :to="getRouteLocale('network-affiliate-marketing')" class="d-block">{{ $t('Affiliate-marketing') }}</router-link>
                      </div>
                      <div class="col-3 col-md-3">
                          <h6>{{ $t('support') }}</h6>
                          <router-link :to="getRouteLocale('common-questions')" class="d-block">{{ $t('faq') }}</router-link>
                          <router-link :to="getRouteLocale('contact-us')" class="d-block">{{ $t('contact-us') }}</router-link>
                      </div>
                  </div>
              </div>
              <div class="col-12 col-md-2   text-center mt-2">
                  <h6>  {{ $t('download-application') }}</h6>
        <div class="newsletter">

          <div>
            <a href="">
              <img src="/assets/img/google-paly.png">

            </a>
          </div>
          <div>
            <a href="">
              <img src="/assets/img/app-store.png" alt="">

            </a>
          </div>
        </div>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    name:'default-footer'
}
</script>

<style scoped>
footer{
    max-width: 100vw;
    overflow: hidden;
}
</style>