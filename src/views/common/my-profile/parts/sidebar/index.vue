<template>
  <div id="list-example" class="list-group position-fixed">
    <a class="list-group-item list-group-item-action" href="#list-item-1">معلومات العرض</a>
    <a class="list-group-item list-group-item-action" href="#list-item-2">معلومات شخصية</a>
    <a class="list-group-item list-group-item-action" href="#list-item-3">معلومات الدراسة</a>
    <a class="list-group-item list-group-item-action" href="#list-item-4">معلومات مهنية</a>
    <a class="list-group-item list-group-item-action" href="#list-item-5">معلومات الاقامة</a>
    <a class="list-group-item list-group-item-action" href="#list-item-6">معلومات التواضل</a>
    <a class="list-group-item list-group-item-action" href="#list-item-7">اعدادات الاشعارت</a>
    <a class="list-group-item list-group-item-action" href="#list-item-8">قائمة الحظر</a>
    <a class="list-group-item list-group-item-action" href="#list-item-9">معرض الاعمال</a>
  </div>
</template>

<script>
export default {
  name: "side-bar"
};
</script>

<style scoped>
.list-group-item.active {
  z-index: 2;
  color: #1fb9b3;
  background-color: transparent !important;
  border: 1px solid #cdd7d8;
  border-right: 2px solid #1fb9b3;
}
.list-group-item {
  padding:15px 10px 15px 150px
}
</style>