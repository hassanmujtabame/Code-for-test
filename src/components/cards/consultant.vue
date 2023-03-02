<template>
  <div class="card" v-bind="$attrs">
    <img :src="item.image" class="card-img-top" :alt="item.name">
    <div class="card-body">
        <div class="d-flex">
    <h5 class="card-title flex-grow-1">{{ item.name }}</h5>
    <h6 class="card-field flex-shrink-0">إدارة اعمال</h6>
    </div>
    <p class="card-text">حاصل على درجة الدكتوراة في ادارة الاعمال كما حصت على شهادة الجامعة الامريكية في هذا المجال</p>
    </div>
  </div>
</template>

<script>
export default {
 name:'consultant-card',
 props:{
    item:{}
 }
}
</script>

<style scoped>
.card{
    width: 340px;
}
.card-img-top{
    height:173px;
}
.card-title{
    font-style: normal;
font-weight: 400;
font-size: 22.6px;
line-height: 38px;
/* identical to box height, or 167% */

text-transform: capitalize;

color: #414042;
}
.card-text{
    font-style: normal;
font-weight: 400;
font-size: 11.3px;
line-height: 16px;
/* or 142% */
color: #737373;
}
.card-field{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    /* identical to box height, or 142% */
    color: #1FB9B3;
}
</style>