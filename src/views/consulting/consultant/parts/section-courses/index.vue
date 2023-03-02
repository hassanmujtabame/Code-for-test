<template>
  <div class="consult-details pt-3">
    <h4 class="consultant-title">
        الدورات التدريبة
    </h4>
    <ol type="1">
        <li class="consultant-text">
            عنوان الدورة

        </li>
        <li class="consultant-text">
            عنوان الدورة

        </li>
        <li class="consultant-text">
            عنوان الدورة

        </li>
        <li class="consultant-text">
            عنوان الدورة

        </li>
    </ol>
</div>
</template>

<script>
export default {
  name:'section-courses',
    props:{
        itemPage:{}
    }
}
</script>

<style scoped>

.consultant-text{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */
text-transform: capitalize;

color: #979797;

}
.consultant-title{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */

text-transform: capitalize;

color: #414042;
}
</style>