<template>
  <div class="consulting py-2 work-space-header">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 text-white">
          <h1 class="fs-1">أماكن العمل</h1>
          <p>
            حافظ على إنتاجيتك مع أماكن العمل الحديثة والآمنة والمجهزة بأحدث
            الأجهزة في شبكة رياديات التي توجد في مختلف الأماكن!
          </p>
        </div>
        <div class="col-lg-6">
          <div class="m-auto text-end">
            <img
              class="img-fluid"
              :src="`${publicPath}assets/img/Component 47.png`"
              alt="WorkSpaceMainHeader"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkSpaceHeader",
};
</script>

<style scoped>
.work-space-header p {
  font-size: 1.4em;
}
</style>