<template>
    <div class="consulting">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md-6">
              <h1 class="fs-1 text-white">مشاريع للأستثمار  </h1>
              <p class="text-white">
                يمكنك الان عرض مشروعك لأستثمار المادي او حتى المعنوى كما يمكنك المشاركة و تقديم عروض الاستثمار للاعضاء الاخرين
            </p>
            <div>
                <form action="">

                    <input type="text" class="form-control" placeholder="ابحث عن مشروع " >
                    <button style="background-color:#414042d4 ;" class="btn rounded-2 p-2 px-4 mt-2 text-white ">
                        ابحث
                    </button>
                </form>
            </div>
            </div>
            <div class="col-md-6">
              <div style="overflow: inherit" class="m-auto text-end">
                <img class="img-fluid" :src="`${publicPath}assets/img/V 67.svg`" alt="" />
              </div>
            </div>
          </div>
          <div class="star-cons">
          <img :src="`${publicPath}assets/img/starrrr.png`" alt="" />
          </div>
          <div class="star-cons stars">
            <img :src="`${publicPath}assets/img/starsss.png`" alt="" />
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