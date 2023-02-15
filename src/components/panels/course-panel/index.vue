<template>
  <div class="course-panel">
    <div class="course-panel__wrapper">
        <div class="course-panel__header" :class="classHeader">
            <slot name="header"></slot>
        </div>
        <div class="course-panel__body" :class="classBody">
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
 name:'course-panel',
 props:{
    classHeader:{
        type:[String,Object,Array],
        default:''
    },
    classBody:{
        type:[String,Object,Array],
        default:''
    }
 },
 watch:{
    classHeader(){},
    classBody(){},
 }

}
</script>

<style scoped>
.course-panel
{
    width: 100%;
}
.course-panel__wrapper{
    display: flex;
    flex-direction: column;
    background: white;
    border:1px solid #f1f1f1;
    border-radius: 8px;
}
.course-panel__header{
    border-bottom:1px solid #f1f1f1;
    padding:15px;
    
}
.course-panel__header>h1{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */
text-transform: capitalize;

color: #414042;
padding:0;
margin: 0;
}
.course-panel__header,
.course-panel__body{
    width: 100%;
    max-width: 100%;
    min-height: 50px;
    padding: 10px 10px;
}
</style>