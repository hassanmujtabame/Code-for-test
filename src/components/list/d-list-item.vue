<template>
  <div class="d-list-item">
    <div class="d-list-item__wrapper">
    <div v-if="avatar && image" class="d-list-item__avatar" :style="{'background-image':`url('${image}')`}"></div>
    <div class="d-list-item__content">
        <slot>
      <h3 class="d-list-item__title">{{ title }}</h3>
      <h4 v-if="subTitle" class="d-list-item__subtitle">{{ subTitle }}</h4>
        </slot>
    </div>
    <div v-if="action" class="d-list-item__action"></div>
    </div>

    </div>
</template>

<script>
export default {
 name:'d-list-item',
 props:{
    avatar:{
        type:Boolean,
        default:false
    },
    action:{
        type:Boolean,
        default:false
    },
    image:{
        type:String
    },
    title:{
        type:String
    },
    subTitle:{
        type:String
    }
 }
}
</script>

<style>
.d-list-item{
    width: 100%;
    border:thin solid #d1d1d1;
    border-radius: 8px;

}
.d-list-item__wrapper{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.1rem;
    padding: 0.2rem;
}
.d-list-item_content{
    flex:1
}
.d-list-item__avatar,.d-list-item__action{
    flex-shrink: 0;
}
.d-list-item__title,.d-list-item__subtitle{
margin: 0;
/*padding: 0.25rem 0;*/
}
.d-list-item__title{
    font-size: 1rem;
}

.d-list-item__subtitle{
    font-size: .75rem;
    color:#d1d1d1;
    text-align: start;
}
.d-list-item__avatar{
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 50%;
    border: 1px solid;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>