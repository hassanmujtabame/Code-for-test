<template>
  <div class="widget-course-top box border rounded-2 text-center p-2">
    <div class="widget-course-top__wrapper">
        <div class="widget-course-top__header">
                        <h6 class="widget-course-top__title">
                           {{title}}
                        </h6>
                        <span v-if="link" class="widget-course-top__link">عرض الكل</span>
                    </div>
                        <p class="widget-course-top__content">
                            {{content}}
                        </p>
        </div>
</div>
</template>

<script>
export default {
  props:{
    title:{},
    content:{},
    link:{},
  }
}
</script>

<style scoped>
.widget-course-top__header{
    display: flex;
}
.widget-course-top__title{
    flex:1;
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
/* identical to box height, or 106% */
text-align: start;
color: #000000;
}
.widget-course-top__link{
    flex-shrink: 0;
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */
text-align: end;
color: #F2631C;
}
.widget-course-top__content{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */
margin: 0;
text-align: start;
text-transform: capitalize;
color: #1FB9B3;
}
</style>