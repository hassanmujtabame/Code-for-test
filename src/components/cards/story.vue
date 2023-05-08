<template>
    <div class="user-story-card box border rounded-3">
        <div class="user-story-card__image border-bottom">
            <img class="w-100 rounded-top" :src="image" :alt="name"
               >
        </div>
        <div class="text-center p-2">
            <h5 class="user-story-card_title text-two-lines" >{{ title }}</h5>
            <div class="user-story-card__text">
                <span class="user-story-card__name">{{ name??'N/A' }}
                </span>
                <span>
                    |
                </span>
                <span class="user-story-card__job">{{ description??'N/A' }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 name:'story-card',
 props:{
    image:{
        type:String
    },
    name:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    }
 }
}
</script>

<style scoped>
.box-img>img{
    min-height: 259px;
}
.user-story-card_title{
    height: 48px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */
    text-transform: capitalize;
    color: #414042;
    margin: 0;
    height:48px;
}
.user-story-card__text>*{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */
color: #979797;
}
.user-story-card__job{
color: #979797;
}
.user-story-card__name{
    color: #1FB9B3;
}
.user-story-card__image{
    height:192px;
}
.user-story-card__image>img{
    height:100%;
    width:100%;
    object-fit: fill;

}
</style>