<template>
<div class="box">
    <div class="box-wrapper">
    <h5  class="m-c fw-bolder box-value">
        {{value}}
    </h5>
    <p class="box-title"> {{title}}</p>
</div>
</div>
</template>

<script>
export default {
 name:'card-number',
 props:{
    title:{
        type:String
    },
    value:{
        type:[String,Number],
        default:'N/A'
    }
 },
 watch:{
    value(){

    }
 }
}
</script>

<style scoped>
.box{
    width: 158px;
    max-width: 158px;
    height: 145px;
    margin: 10px;
    background: #FFFFFF;
    padding: 5px;
    box-shadow: 0px 0px 4px rgb(0 0 0 / 12%);
    border-radius: 8px;
    align-items: center;
    display: flex;
    justify-content: center;
}
.box-wrapper{ 
    display: flex;
    flex-wrap: wrap;
    flex-direction: column ;
}
.box-wrapper .box-title,.box-wrapper .box-value{
    flex: 1;
}
.box-value{
    font-family: 'Poppins';
    font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 40px;
/* identical to box height, or 100% */
text-transform: capitalize;
color: #1FB9B3;
}
.box-title{
    font-family: 'Changa';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    /* identical to box height, or 167% */
    text-transform: capitalize;
    color: #737373;
}
</style>