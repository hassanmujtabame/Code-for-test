<template>
   <div class="box border rounded-top" v-bind="$attrs">
                    <div class="position-relative">
                        <div v-if="userInfo && false" class="exibition-item__avatar">
                            <img :src="userInfo.image" width="48" height="48" />
                            <h6>{{ userInfo.name }}</h6>
                        </div>
                        <img class="w-100 rounded-top" :src="img" :alt="title"
                            height="167">
                            <button v-if="isShared" class="btn-shared-exibition"><tickCircleIcon />{{ $t('shared') }}</button>
                    </div>
                    <div class="p-2 text-start">
                        <h6 class="exhibition-card-title mt-2">
                        {{title}}
                        </h6>
                        <p class="t-c text-two-lines exhibition-card-desc exhibition-card-text" v-html="description">
                        </p>
                        <div class="d-flex justify-content-between flex-wrap">
                            <p class="exhibition-card-text">
                                <d-empty-wallet-icon :size="24" color="currentColor" />
                                <template v-if="price=='0'">
                                   {{ $t('free-enter') }}
                                </template>
                                <template v-else>
                            {{ $t('ticket') }}   {{ price??'N/A'}} {{ $t('riyals') }}
                            </template>
                            </p>
                            <p class="exhibition-card-text">
                              <d-localisation-icon :size="24" color="currentColor" />
                               {{place}}
                            </p>
                            <p class="exhibition-card-text">
                                <d-school-wallet-icon :size="24" color="currentColor" />

                                {{userName}}

                            </p>
                            
                        </div>
                    </div>
                </div>
</template>

<script>
import tickCircleIcon from '../icon-svg/tick-circle.vue';
export default {
 name:'exhibition-card',
 components:{
    tickCircleIcon
 },
 props:{
    img:{
        type:String,
        require:true
    },
    isShared:{
        type:[Boolean,Number],
        require:false
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
    },
    userName:{
        type:String,
        default:'N/A'
    },
    place:{
        type:String,
        default:'N/A'
    },
    price:{
        type:[String,Number],
        default:'N/A'
    },
    userInfo:{
        type:[Object,Array]
    }
}
}
</script>

<style scoped>
.exhibition-card-title{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */

text-align: start;
text-transform: capitalize;

color: #1FB9B3;
}
.exhibition-card-desc{
    height:54px;
}
.exhibition-card-text{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */
text-align: start;
color: #A6A6A6;
}
.exhibition-card-text>p{
    font-size: 20px;
line-height: 24px;
}
.btn-shared-exibition{
    font-size: 12px;
    border-radius: 4px;
    border:none;
    height: 24px;
    background:var(--m-color);
    position:absolute;
    top:5px;
    color:#FFF;
    left: 5px;
}
html[dir=ltr] .btn-shared-exibition{
    right: 5px; 
    left:auto
}
.btn-shared-exibition svg{
    margin-left: 5px;
}
html[dir=ltr] .btn-shared-exibition svg{
    margin-left: 0;
    margin-right: 5px;
}
.exibition-item__avatar{
    position: absolute;
    bottom: -10px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.exibition-item__avatar>img{

    border-radius: 50%;
    min-height: 48px;
    min-width: 48px;
    background-color: #fdf9f9a8;
}
.exibition-item__avatar>h6{
    background: orange;
    padding: 5px 10px;
    border-radius: 3px;
    margin: 0;
}
</style>