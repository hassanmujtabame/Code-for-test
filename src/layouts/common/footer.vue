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
                      <a href="#">
                          شروط الاستخدام
                      </a>
                      <a href="#">
                          سياسة الخصوصية
                      </a>
                  </div>
              </div>
              <div class="col-12 col-md-7 mt-2">
                  <div class="row justify-content-between nav ">
                      <div class="col-3 col-md-3">
                          <h6>رياديات</h6>
                          <router-link :to="getRouteLocale('who-are-we')" class="d-block">من نحن</router-link>
                          <a href="#" class="d-block">مقارنة الخدمات</a>
                      </div>
                      <div class="col-3 col-md-3">
                          <h6>قناة رياديات</h6>
                          <a href="#" class="d-block">المدونة</a>
                          <a href="#" class="d-block">البودكاست</a>
                          <a href="#" class="d-block">قصص نجاح</a>
                      </div>
                      <div class="col-3 col-md-3">
                          <h6>انضمي إلينا</h6>
                          <a href="#" class="d-block">التوظيف</a>
                          <a href="#" class="d-block">التسويق بالعمولة</a>
                      </div>
                      <div class="col-3 col-md-3">
                          <h6>الدعم</h6>
                          <router-link :to="getRouteLocale('common-questions')" class="d-block">الأسئلة الشائعة</router-link>
                          <a href="#" class="d-block">تواصل معنا</a>
                      </div>
                  </div>
              </div>
              <div class="col-12 col-md-2   text-center mt-2">
                  <h6>  حملي التطبيق</h6>
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

<style>

</style>