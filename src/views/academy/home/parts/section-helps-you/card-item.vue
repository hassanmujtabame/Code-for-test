<template>
  <div class="academy-help-item border  gap-4 rounded-2">
  <div class="academy-help-item_wrapper">

<div class="text-start">
    <img :src="src" alt="">
</div>
<h1 class="academy-help-item-title">{{ title }}</h1>
<div class="academy-help-item-text">
<slot></slot>
</div>

</div>
</div>
</template>

<script>
export default {
name:'card-item',
props:{
    src:{},
    title:{}
}
}
</script>

<style scoped>
.academy-help-item {
    box-shadow: 0px 0px 6px 0.1px #1fb9b369;
    flex-direction: column;
    display:flex;
    align-items: center;
    height: 100%;
}
.academy-help-item_wrapper{
    padding:15px;
}
.academy-help-item:hover{
    box-shadow: 0px 0px 10px 2px var( --m-color);
}
.academy-help-item-title{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */
text-align: start;
text-transform: capitalize;
color: #1FB9B3;
}
.academy-help-item-text{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */

display: flex;
align-items: center;
text-align: start;
text-transform: capitalize;
color: #7C797E;
}
</style>