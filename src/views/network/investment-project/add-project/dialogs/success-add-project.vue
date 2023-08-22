<template>
<d-dialog-large :xl="false"
:group="group"
:closeDialog="closeDialog"
:openDialog="openDialog"
>
<template v-slot:default>
  <div class="text-center">
    <div>
                        <img class="img-fluid" :src="`${publicPath}assets/img/cuate-2.png`" alt="">
                    </div>
                    <div>
                        <h3>
                            تم ارسال طلبك بنجاح
                        </h3>
                        <p>
                            طلبك الان قد وثل الى مرسل الاعلان اذا كان المكان الذي عرضته عليه مناسب بنسبه له سيتواصل معك
                        </p>
                    </div>
            </div>
</template>
<template v-slot:actions>
  <button @click="goToProjects" class="btn bg-main text-white" >{{ $t('Home-page') }}</button>
</template>
</d-dialog-large>
</template>
<script>
export default {
  name:"success-add-project",
  props:{
    group:{
        type:String,
        default:'success-add-project'
    }
  },
  data:()=>({
    showDialog:false,
  }),
  methods:{
    goToProjects(){
      this.closeMe();
      this.$router.push(this.getRouteLocale('network-investment-project'))

    },
    closeMe(){
    this.fireCloseDialog(this.group)
  },
    openDialog(){

        this.showDialog = true;
        return true;
    },
    closeDialog(){
        this.showDialog = false

        return true;
    },
  }
}

</script>