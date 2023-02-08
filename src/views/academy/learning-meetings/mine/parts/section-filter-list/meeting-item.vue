<template>
  <div class="academy-blog-item">
  <div class="academy-blog-item__wrapper">
  <div class="academy-blog-item__body">
  <div class="academy-blog-item__title">
<h1>خطة العمل ودراسة الجدوى المالية</h1>
  </div>
  <div class="academy-blog-item__subtitle">
<h6>عدد المنضمين : 557878 شخص</h6>
  </div>
  <div class="academy-blog-item__description">
    <p>وهناك الكثيرون غيرهم ممن طبقوا مبادئ ريادة الاعمال، وقدموا للعالم حلولاً مبتكرةً في كافة المجالات، استفادت، ولازالت تستفيد منها البشرية حتى اليوم.</p>
    </div>
  </div>
  <div class="academy-blog-item__actions">
    <div class="academy-blog-item__date">
        <i class="fa-regular fa-clock"></i>
        <span class="px-2">تاريخ النشر :</span>
        <span>2010-10-10</span>
    </div>
    <div class="academy-blog-item__btns">
        <button class="btn btn-custmer btn-small">صفحة التدوينة</button>
        <button class="btn btn-custmer btn-danger btn-small mx-1">خذف التدوينة</button>
    </div>
</div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.academy-blog-item{
    width: 100%;
}
.academy-blog-item__wrapper{
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #CDD7D8;
}
.academy-blog-item__actions{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
}
.academy-blog-item__btns{
    display: flex;
    flex-direction: row; 
}
span {
    color:inherit
}
.academy-blog-item__title>h1{
    margin: 0;
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */

display: flex;
align-items: center;
text-transform: capitalize;

color: #1FB9B3;
}
.academy-blog-item__description{
    margin:10px 0;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */

color: #737373;
}
.academy-blog-item__subtitle>h6{
    margin:10px 0;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


color: #F2631C;
}
.academy-blog-item__date{
    color:#737373
}
</style>