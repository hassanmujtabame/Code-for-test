<template>
   <d-dialog-large 
    :group="group" 
    :openDialog="openDialog" 
    :close-dialog="closeDialog"
    :xl="false"
    :loading="loading"
    >
    <div v-if="showDialog" class="text-center">
                  <div>
                      <img class="img-fluid" :src="`${publicPath}assets/img/Group 1171275567.png`" alt="">
                  </div>
                  <div>
                 
                      <p class="w-75 m-auto fs-r-24-40"
                      style="color: #5d5d5d;"
                      >
                        هل لديك منتجات تخص هذا المعرض وتود حجز بوث لك يمكنك من خلاله عرض منتجاتك ؟ فقط كل ما عليك فعله هو ملئ استمارة المشاركة وسنقوم بأرسالها الى صاحب المعرض ليختار المشاركين المناسبين له , نأمل انت تكون منهم بكل تأكيد !                      
                      </p>
                  </div>
    </div>
              <template v-slot:actions>
            <button @click="openDemandParticipatePage" type="button" class="btn btn-main">
             {{$t("fill-out-form")}}
            </button>
        </template>
    </d-dialog-large>
</template>

<script>
export default {
    props:{
        group:{
            type:String,
            default:'share-exhibition'
        }
    },
    data: () => {
        return{
            loading:false,
            showDialog:false,
            itemPage:{}
        }
    },
    methods:{
        openDemandParticipatePage(){
            this.$router.push(this.getRouteLocale('network-exhibition-demand-participate',{id:this.itemPage.id}))
        },
        closeDialog(){
            this.showDialog = false;
            return true;
        },
        openDialog(data){
                this.itemPage = data;
                this.showDialog = true;
            return true;
        },
    }
}
</script>

<style>

</style>