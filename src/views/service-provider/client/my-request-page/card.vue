<template>
  <div class="box-provider-offer">
    <div class="box-provider-offer__wrapper">
    <div class="d-flex flex-column box-provider-offer_start px-5">
        <!-- provider info -->
        <div class="d-flex align-items-center">
            <div class="box-provider-offer__image">
               <imgAvatar :img="user.image" :size="58" />
            </div>
            <div class="box-provider-offer__info mx-3 ">
                <h2 class="box-provider-offer__info-name">علا مصطفي</h2>
                <h4 class="box-provider-offer__info-job">مصمم جرافيك</h4>
            </div>
        </div>
        <!-- provider text-->
        <div class="t-c">
            تفاصيل العرض الذي  سيقدمه لمقدم الخدمة للعميل تفاصيل العرض الذي  سيقدمه لمقدم الخدمة للعميل تفاصيل العرض الذي  سيقدمه لمقدم الخدمة للعميل تفاصيل العرض الذي  سيقدمه لمقدم الخدمة للعميل
        </div>
        <div class="mt-2">
            <button class="btn btn-custmer">اقبل العرض</button>
        </div>
    </div>
    <div class="box-provider-offer_end">
        <div class="t-c box-provider-offer__date">
            <timeIcon :size="24" color="currentColor" />
            <span class="mx-2">تاريخ تقديمك العرض :</span>
        <span>2023-10-11</span>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import timeIcon from '@/components/icon-svg/time.vue';
import imgAvatar from '@/components/avatars/img-avatar.vue';
export default {
 name:'card-info',
 components:{
    timeIcon,
    imgAvatar
 }
}
</script>

<style scoped>
.box-provider-offer{
    background: white;
    border-bottom:1px solid #cfcfcf;
    padding: 10px 0;
}
.box-provider-offer__wrapper{
    display: flex;
    flex-direction: row;
}
.box-provider-offer_end{
    flex-grow: 0;
    flex-shrink: 0;
}
.box-provider-offer_start{
   flex:1
}
.box-provider-offer__info-job{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
color: #414042;

}
.box-provider-offer__info-name{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
color: #414042;
}
.box-provider-offer__date{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

color: #737373 !important;
}
</style>