<template>
<d-dialog-large :xl="false"
:group="group"
:closeDialog="closeDialog"
:openDialog="openDialog"
>
<template v-slot:default>
    <div class="text-center">
                <!-- icon-->
                <img :src="`${publicPath}assets/svg/warning-dialog.svg`"  alt="">
              </div>
    <h3>هل لديك مكان للأيجار لهذا المشروع</h3>
              
              <p class="m-c fs-5 m-3">  
                اذا كنت ترغب في تأجير مكان بالمواصفات التي طلبها العميل فقدم طلبك الان
              </p>
</template>
<template v-slot:actions>
    <button
        @click="openOfferDialog"
               class="btn bg-main text-white"
               >  تقديم طلب </button>
</template>
</d-dialog-large>
</template>
<script>

export default {
  name:"confirm-make-offer",
  components:{},
  props:{
    group:{
        type:String,
        default:'confirm-make-offer'
    }
  },
  data:()=>({
    project:{},
    showDialog:false,
  }),
  methods:{
    openOfferDialog(){
    this.fireOpenDialog('make-offer',this.project);
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