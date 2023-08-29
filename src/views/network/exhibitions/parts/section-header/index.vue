<template>
   <div class="consulting">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white"> المعارض </h1>
                        <p class="text-white">
                            ستجد في هذا القسم كل المعارض التي نشرها الاعضاء يمكنك المشاركة بها او زيارتها كما يمكنك
                            اضافة معرضك </p>
                        <button @click="openAddDialog" class="btn border text-white px-3" >
                            <!-- icon-->
                            <plus-rect-round-icon />
                            {{ $t('add_exhibition') }}
                        </button>
                    </div>
                    <div class="col-md-6">
                        <div style="overflow: inherit" class="m-auto text-start ">
                            <img class="cloud-bg" :src="`${publicPath}assets/svg/Group 1171275412.svg`" alt="" />
                            <img class="img-header" :src="`${publicPath}assets/img/vector 555@2x.png`" alt="" />
                        </div>
                    </div>
                </div>
                <div class="star-cons">
                    <img :src="`${publicPath}assets/img/starrrr.png`" alt="" />
                </div>
                <div class="star-cons stars">
                    <img :src="`${publicPath}assets/img/starsss.png`" alt="" />
                </div>
            </div>
        </div>
</template>

<script>
import plusRectRoundIcon from '@/components/icon-svg/plus-rect-round.vue';
export default {
  name:'section-header',
  components:{
    plusRectRoundIcon
  },
  methods:{
    openAddDialog(){ 
        if (this.userSubNetwork.type=='year') {
       this.fireOpenDialog('add-dialog')
        }else{
            let dataEvt ={
                        title:'للأسف لايمكنك  اضافة معرض',
                        description:`انت غير مشترك في الباقة السنوية وهذه الباقة لا تمنحك  إضافة معرض  - رقي حسابك الى الباقة السنويه و استفيد من إضافة معرضك و المزيد من المميزات في الشبكة`,
                        image:`${this.publicPath}assets/img/Group 1171275670.png`,
                        btns:[
                            {title:'رقي حسابك',action:()=>this.router_push('network-subscribe')}
                        ]
                    }
                    this.showConfirmMsg(dataEvt);
                    return;

        }
  },
  }
}
</script>

<style scoped>
.cloud-bg{
    position: absolute;
    width: 635.34px;
    height: 370.04px;
    left: -37.3px;
    top: 27px;
    transform: rotate(13.26deg);
    z-index: -1;
}
.img-header{
    width: 488.29px;
    height: 355.51px;
}
</style>