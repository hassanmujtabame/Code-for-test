<template>
  
        <d-dialog-large 
        :xl="false"
        :group="group" 
        :loading="loading"
        :closeDialog="closeDialog"
        :openDialog="openDialog"
        >
        <template v-slot:header>
              <div class="col-8 justify-content-center"
           
            >
            <div class="col-8  text-center avatar-user-card clickable"
            style="width: 70px !important; height: 70px !important;"
            >
            <img :src="owner.image" />
</div>
            </div>
             <div class="col-8">
                <p  style="font-size: 17px !important;" v-if="owner.name" class="fw-bold mb-0 m-c">
                  {{owner.name}}
                </p>
                <span v-if="owner.job">{{ owner.job??owner.job_title }}</span>
                <p class="mb-0" style="font-size: 13px !important;" >lorem</p>
             </div>
        </template>
      <div>
           <ValidationObserver ref="form">
<ValidationProvider :name="$t('title_message')" vid="title_message"
       rules="required" v-slot="{ errors }">
     <input type="text" v-model="itemForm.title"
           class="border rounded-2 w-100  p-3 " name=""
           :placeholder="$t('title_message')">
     <d-error-input :errors="errors" v-if="errors.length" />
 </ValidationProvider>

   <div class="my-3">
                <ValidationProvider :name="$t('message')" vid="message"
                    rules="required" 
                    v-slot="{errors}"
                    >
                    <d-textarea-input :errors="errors" v-model="itemForm.message" rows="6" class="form-control" placeholder="اكتب رسالة الى صاحب الخدمة">
                    </d-textarea-input>     
                </ValidationProvider>
                </div>
   <div class="my-3">
                    <ValidationProvider :name="$t('record-audio')" 
                    vid="audio"
                    v-slot="{errors}"
                    >
                    <d-audio-input v-model="itemForm.audio" :errors="errors"   :label="$t('add-audio-message')" />     
                </ValidationProvider>
                </div>


        <button style="display: flex; margin:auto" @click="sendMessage" class="btn btn-custmer mt-5">أرسل رسالة</button>

</ValidationObserver>
  
      </div>
      </d-dialog-large>

</template>
<script>

import usersAPI from '@/services/api/user';

export default {

  
  data:()=>{
    return{
        loading:false,
    group:'send-service-provider-message',
    showDialog:false,
    audi:null,
    owner:{},
    itemForm:{
            title:'',
            message:'',
            audio:null
        },
           opts:{
            sendEvent:false,
            openSuccess:true,
            user:{}
        },

  }},
  
  methods:{
 
    close(){
        this.refreshPage()
    },

    openDialog(data){
        this.loading =  false;
  console.log('data',data);
   this.owner=data
        this.showDialog = true;
     
        return true;
    },
    closeDialog(){
        this.showDialog = false

        return true;
    },
       async sendMessage(){
        let valid =  await this.$refs.form.validate()
        if(!valid){
            return;
        }
        let formData = new FormData();
        Object.keys(this.itemForm).forEach(key=>{
            formData.append(key,this.itemForm[key])
        })
        try {
            let { data } = await usersAPI.sendMessageToExhibitionOwner(formData)
            if(data.success){
                let dataMessage = {
                    title:'لقد تم إرسال رسالتك بنجاح',
                    description:'سيتواصل معك مقدم الخدمة عندما يتواجد'
                }
                if(this.opts.sendEvent)
                this.fireEvent(this.opts.sendEvent,{itemForm:this.itemForm,data:data.data,opts:this.opts})
                if(this.opts.openSuccess)
                this.fireOpenDialog('standard-success-message',dataMessage)
                this.closeEvent()
            }
        } catch (error) {
            //
        }
    },
    
    closeEvent(){
       this.fireEvent(this.group+'-close-dialog')
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
label{
    width:100%;
    text-align: start;
}
.img-zone{
    max-width: 430px;
}
input,button,textarea:focus{
    outline: none !;
}
</style>