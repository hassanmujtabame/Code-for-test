<template>
<d-dialog-large :xl="false"
:group="group"
:closeDialog="closeDialog"
:openDialog="openDialog"
>
<template v-slot:default>
    <div v-if="showDialog" class="text-center">
                <!-- icon-->
                <img :src="`${publicPath}assets/svg/warning-dialog.svg`"  alt="">
              </div>
    <h3>هل أنت متأكد من تمويل هذا المشروع ؟</h3>
              
              <p class="m-c fs-5 m-3">  
                سيتم تحويلك للدفع الان اختار قيمة التمويل الذي ترغب به عما لا يقل عن {{project.minimum_investment}} {{ $t('riyals') }}
              </p>
</template>
<template v-slot:actions>
    <button
        @click="openCheckoutDialog"
               class="btn bg-main text-white"
               >  تقديم طلب </button>
</template>
</d-dialog-large>
</template>
<script>
export default {
  name:"confirm-make-finance",
  components:{},
  props:{
    group:{
        type:String,
        default:'confirm-make-finance'
    }
  },
  data:()=>({
    showDialog:false,
    project:{}
  }),
  methods:{
    openCheckoutDialog(){
    this.fireOpenDialog('checkout-project',{item:{amount:this.project.minimum_investment},data:this.project});
    this.closeMe()
  },
  closeMe(){
    this.fireCloseDialog(this.group)
  },
    openDialog(data){
        this.project =  data;
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