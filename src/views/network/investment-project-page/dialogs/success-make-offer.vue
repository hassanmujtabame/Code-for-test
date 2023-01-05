<template>
<d-dialog-large :xl="false"
:group="group"
:closeDialog="closeDialog"
:openDialog="openDialog"
>
<template v-slot:default>
  <div>
                <img class="img-fluid" src="/assets/img/cuate-2.png" alt="">
            </div>
            <div>
                <h3>
                    تم ارسال طلبك بنجاح
                </h3>
                <p>
                    طلبك الان قد وثل الى مرسل الاعلان اذا كان المكان الذي عرضته عليه مناسب بنسبه له سيتواصل معك
                </p>
            </div>
</template>
<template v-slot:actions>
  <a class="btn bg-main text-white" >{{ $t('Ok') }}</a>
</template>
</d-dialog-large>
</template>
<script>
export default {
  name:"success-make-offer",
  props:{
    group:{
        type:String,
        default:'success-make-offer'
    }
  },
  data:()=>({
    showDialog:false,
  }),
  methods:{
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