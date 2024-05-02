<template>
  <div style="background-color: #f6f8f9">
    <div class="container py-2">
      <h2 class="text-center mt-5 mb-3">أهداف الاستشارة من رياديات</h2>
      <div class="row pb-5">
        <div class="col-md-4">
          <div class="box border text-center p-3 rounded-2 bg-white goals-card">
            <div style="height: 112px">
              <img :src="`${publicPath}assets/img/es 1.png`" alt="" />
            </div>
            <p class="goals-card-text">
              إن كنت تنشئين مشروعـا أو تقومين بتأسيس أو تطويــر شركــــة ناشئة،
              فيمكننا أن نساعدك في كل مرحلة من مراحل العمل.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box border text-center p-3 rounded-2 bg-white goals-card">
            <div>
              <img :src="`${publicPath}assets/img/es 2.png`" alt="" />
            </div>
            <p class="goals-card-text">
              تقديم استشارات إلكترونية، وعقد جلسات استشاريـــــة متخصصة فـي مجال
              معين.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box border text-center p-3 rounded-2 bg-white goals-card">
            <div>
              <img :src="`${publicPath}assets/img/es 3.png`" alt="" />
            </div>
            <p class="goals-card-text">
              تنفيذ الخدمات الاستشاريــة و تطويــــر الأعمـال فــــي مـجــالات
              عـــمـــل رياديات.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-goals",
};
</script>

<style scoped>
.goals-card {
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.goals-card-text {
  padding: 20px;
  font-size: 24px;
  color: #737373;
  word-wrap: break-word;
  white-space: normal;
  text-align: justify;
}
</style>
