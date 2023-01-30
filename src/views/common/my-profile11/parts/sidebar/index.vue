<template>
                <div id="list-example" class="list-group position-fixed ">
                  <a class="list-group-item list-group-item-action" href="#list-item-1">معلومات العرض</a>
                  <a class="list-group-item list-group-item-action" href="#list-item-2">معلومات شخصية</a>
                  <a class="list-group-item list-group-item-action" href="#list-item-payment">بطاقات الدفع</a>
                  <a class="list-group-item list-group-item-action" href="#list-item-3">معلومات الدراسة</a>
                  <a class="list-group-item list-group-item-action" href="#list-item-4"> معلومات مهنية</a>
                  <a class="list-group-item list-group-item-action" href="#list-item-5">معلومات الاقامة </a>
                  <a class="list-group-item list-group-item-action" href="#list-item-6">معلومات التواضل </a>
                  <a class="list-group-item list-group-item-action" href="#list-item-7"> اعدادات الاشعارت</a>
                  <a class="list-group-item list-group-item-action" href="#list-item-8">  قائمة الحظر</a>
                  <a class="list-group-item list-group-item-action" href="#list-item-9">  معرض الاعمال</a>

                </div>
</template>

<script>
export default {
 name:"side-bar"
}
</script>

<style scoped>
.list-group-item.active {
    z-index: 2;
    color: #1FB9B3;
    background-color: transparent !important;
    border: 1px solid #CDD7D8;
    border-right: 2px solid #1FB9B3;
}
 .list-group-item {
    padding: 10px 10px 0 150px;
}
</style>