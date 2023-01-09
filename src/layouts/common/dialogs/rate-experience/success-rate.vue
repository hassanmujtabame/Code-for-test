<template>
  <d-dialog-large :xl="false" 
    :group="group" 
    :closeDialog="closeDialog"
    :openDialog="openDialog"
    hideHeader
    >
    <template v-slot:default>
        <div>
            <div class="image-thanks">
                <ImgSuccess />
            </div>
            <div class="txt-thanks">
                <p>
                    شكرا لك على تقيمك لمنصة <span class="name-thanks">{{ name }}</span> رياديات , نحن  دائما هنا لخدمتك
                </p>
            </div>
        </div>
    </template>
    <template v-slot:actions>
        <button @click="closeEvent" type="button" class="btn btn-main">
           {{ $t('Ok') }}
        </button>
    </template>
    </d-dialog-large>
</template>

<script>
import ImgSuccess from './img-success.vue'
export default {
    name:'success-rate',
    components:{
        ImgSuccess
    },
    props:{
    group:{
        type:String,
        default:'rate-success'
    }
  },
  data:()=>({
    showDialog:false,
    name:'',
  }),
  methods:{
    openDialog(dataItem){
        this.name = dataItem
    this.showDialog = true;
    return true;
},
closeDialog(){
    this.showDialog = false
    return true;
},
closeEvent(){
   this.fireEvent(this.group+'-close-dialog')
}
  }
}
</script>

<style>
.image-thanks{
    text-align: center;
}
.txt-thanks{
font-size: 24px;
color:#414042
}
.name-thanks{
    color:var(--m-color)
}
</style>