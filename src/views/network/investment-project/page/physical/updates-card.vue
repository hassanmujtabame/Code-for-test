<template>
  <div>

<h3 class="updates-title text-center">
    التحديثات الدورية
</h3>
<div class="border rounded-3">
    <div v-for="n in 4" :key="n" class="border-bottom my-1 ">
        <div class="p-2">
            <p class="update-item__date">
                25 مايو 2021
            </p>
            <p class="update-item__text">
                50 مليون ريال تم تجميع من جولة
            </p>
        </div>
    </div>

</div>
</div>
</template>

<script>
export default {
    props:{
    itemPage:{},
    isOwner:{}
 }
}
</script>

<style scoped>
.updates-title{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */
text-transform: capitalize;
color: #1FB9B3;
}
.update-item__date{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    /* identical to box height, or 142% */
    color: #979797;
}
.update-item__text{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    /* identical to box height, or 142% */
    color: #414042;

}
</style>