<template>
 <d-dialog-large :xl="false" 
    :group="group" 
    :closeDialog="closeDialog"
    :openDialog="openDialog"
    >
  
    <template v-slot:default>
      <div v-if="showDialog"  class="container">
        <div class="text-center">
                <h4 >
                 {{itemDialog.title}}
                </h4>
                <p class="t-c fs-r-16-24">
                    {{ itemDialog.description }}
                </p>
              </div>
        <ValidationObserver ref="formRate" >
          <ValidationProvider
                      :name="$t('rate')"
                      vid="rate"
                      rules="required"
                        v-slot="{errors}">
                        
              <div class="starts-rate">
                <startItem v-for="id in stars" :key="id" 
                :itemId="id" :isSelected="itemForm.rate>=id" 
              v-model="itemForm.rate" 
                :size="32"
                />
              </div>
            <d-error-input v-if="errors.length>0" :errors="errors" />

          </ValidationProvider>
      <div class="mt-1">
        <ValidationProvider
                      :name="$t('comment')"
                      vid="comment"
                      rules="required"
                        v-slot="{errors}">
                      <textarea class="form-control" rows="5"
                      v-model="itemForm.comment"
                      :placeholder="$t('write-your-comment')"
                      >
                      </textarea>
          <d-error-input v-if="errors.length>0" :errors="errors" />
        </ValidationProvider>
      </div>
      <ValidationProvider
      v-if="itemDialog.withImage"
      tag="div"
      class="mt-1"
                      :name="$t('Image')"
                      vid="image"
                      rules="required|image"
                        v-slot="{errors}">
                        <d-file-input class="rate-image" 
                                                        prendIcon="far fa-square-plus"
                                                        :validate="validate" 
                                                        :errors="errors" 
                                                        v-model="file" 
                                                        placeholder="ارفق صورة" />
        </ValidationProvider>
    </ValidationObserver>
    </div>
    </template>
    <template v-slot:actions>
      <div v-if="itemDialog.btns" >
              <div  v-for="(btn,i) in itemDialog.btns"
                :key="i" class="mt-3">
                <button
                @click="callAction(btn)" :disabled="btn.loading" style="height: 40px;" :class="[btn.class??'btn btn-custmer']">
                <i v-if="btn.loading"  class="fa fa-spinner fa-spin"  aria-hidden="true"></i>
                {{btn.title}}
              </button>

              </div>
            </div>
    </template>
    </d-dialog-large>
</template>

<script>
import startItem from './star-item.vue'
export default {
  name:'standard-rate-dialog',
  props:{
    group:{
        type:String,
        default:'standard-rate-dialog'
    },
    title:{
      type:String,
      require:true
    },
    category:{
      type:String,
      require:true
    }
  },
  components:{
    startItem
  },
  data:()=>({
    stars:[5,4,3,2,1],
    itemForm:{
      rate:null,
      comment:'',
      image:null
    },
    itemDialog:{},
    showDialog:false,
  }),
  methods:{
    async callAction(btn){
      let canClose = true;
      if(btn.action){
        btn.loading = true;
      canClose = await btn.action(this.itemForm, this.$refs.formRate)
       btn.loading = false;
      }
      if(canClose)
      this.closeEvent()
    },
    openDialog(data){
      if(data.btns){
        data.btns.forEach(btn=> btn.loading=false)
      }
      this.itemDialog=Object.assign({},data);
        if(!data.btns)  this.itemDialog.btns= null
      this.itemForm.rate = null;
      this.itemForm.comment = '';
      this.itemForm.image = null;
    this.showDialog = true;
    return true;
},
closeDialog(evt,btn){
    this.showDialog = false;
    if(this.itemDialog.onClose && btn)
        this.itemDialog.onClose()
    return true;
},
closeEvent(){
   this.fireEvent(this.group+'-close-dialog')
},
openSuccessDialog(){
        this.fireOpenDialog('rate-success', this.title)
    }
  }
}
</script>

<style>
.starts-rate{
  display: flex;
  justify-content: center;
}
.rate-image .input-file__wrapper{
  border-style: solid !important;
  border-color: var(--m-color) !important;
  color: var(--m-color) !important;
}
.rate-image .input-file__label{
  color: var(--m-color) !important;
}
</style>