<template>
    <div class="workspace-card box border">
        <div class="workspace-card__wrapper">
        <div class="workspace-card__image" >
            <img class="w-100" :src="image" :alt="title" height="164px">
        </div>
        <div class="workspace-card__content">
            <div class="d-flex align-items-center justify-content-between">
                <h6 class="workspace-card__title">{{ title }}</h6>
            </div>
            <p class="text-four-lines workspace-card__description"  v-html="description"></p>
        </div>
        <div class="workspace-card__footer">

            <div class="workspace-card__footer-item">
            <d-localisation-icon :size="16" color="#979797"/>
            <span>{{ company }}</span>
            </div>
            <div class="workspace-card__footer-item">
            <d-empty-wallet-icon :size="16" color="#979797"/>
            <span>{{ price??'N/A' }}</span>
            <span> {{ $t('R.S') }}</span>
            </div>
        </div>
       
        </div>
        </div>
</template>

<script>
export default {
 name:'workspace-card',
 props:{
    image:{
        type:String
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    company:{
        type:String,
    },
    price:{
        type:[String,Number],
    }
 }
}
</script>

<style>
.workspace-card{
    height: 331.47px;
    border-radius: 8px;
}

.workspace-card__footer{
    display:flex;
    justify-content: space-evenly;
    margin: 5px 5px;
}
.workspace-card__footer-item{
    display: flex;
    margin:0 5px;
}
.workspace-card__footer-item span{
   
    font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 106% */

display: flex;
align-items: center;
text-align: start;

color: #979797;
}
.workspace-card__title{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */
text-transform: capitalize;
text-align: start;
margin: 0 0 10px;
color: #414042;
    width: 180px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
}
.workspace-card__description{
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* or 142% */
text-align: right;
color: #737373;
height: 50px;
word-break: break-all;
}
.workspace-card__content{
    padding:5px 16px;
}
.workspace-card__category{
    font-weight: 400;
font-size: 12px;
line-height: 17px;
color: #1FB9B3;

}
.workspace-card__image{
    height:173px;
    border-radius: 8px 8px 0 0;
    min-height:173px;
    overflow: hidden;
}
.workspace-card__image>img{
    border-radius: 8px 8px 0 0;
    height:100%;
    width:100%;
    object-fit: fill;
}
</style>