<template>
<d-dialog-large :xl="false" 
    :group="group" 
    :closeDialog="closeDialog"
    :openDialog="openDialog"
    >
        <ValidationObserver tag="div" class="d-flex flex-column position-relative"
         v-if="showDialog" ref="form" >
         <d-overlays-simple v-if="sending" />
            <!-- user info-->
            <div class="d-flex align-items-center">
                <div class="user-image">
                    <img class="rounded-circle border" :src="opts.user.image" :alt="opts.user.name"
                    width="80px" height="80px">
                </div>
                <div class="user-info flex-grow-1 p-2">
                    <h3 class="m-c">{{ opts.user.name }}</h3>
                    <h5 >{{ opts.user.job_title }}</h5>
                </div>
            </div>
            <!-- form inputs-->
            <div class="d-flex flex-column mt-5">
                <!-- title-->
                <div class=" mb-3">
                <ValidationProvider :name="$t('message-title')" vid="title"
                    rules="required" 
                    v-slot="{errors}"
                    >
                    <d-text-input v-model="itemForm.title" :errors="errors" type="text" class="form-control" :label="$t('message-title')" />     
                </ValidationProvider>
                </div>
                <!-- message-->
                <div class="mb-3">
                <ValidationProvider :name="$t('message')" vid="message"
                    rules="required" 
                    v-slot="{errors}"
                    >
                    <d-textarea-input :errors="errors" v-model="itemForm.message" rows="5" class="form-control" label="أكتب رسالة لمقدم الخدمة" >
                    </d-textarea-input>     
                </ValidationProvider>
                </div>
                <!--audio-->
                <div class="mb-3">
                    <ValidationProvider :name="$t('record-audio')" 
                    vid="audio"
                    rules="required" 
                    v-slot="{errors}"
                    >
                    <d-audio-input v-model="itemForm.audio" :errors="errors"   :label="$t('add-audio-message')" />     
                </ValidationProvider>
                </div>
            </div>
            <div class="text-center">
                <button :disabled="sending" @click="sendMessage" class="btn btn-custmer">{{ $t('send') }}</button>
            </div>
        </ValidationObserver>
</d-dialog-large>
</template>

<script>
import usersAPI from '@/services/api/user';
export default {
 name:'send-message-to-provider',
 props:{
    group:{
        type:String,
        default:'send-message-to-provider'
    }
 },
 data:()=>{
    return {
        sending : false,
        showDialog : false,
        opts:{
            sendEvent:false,
            openSuccess:true,
            user:{}
        },
        itemForm:{
            title:'',
            message:'',
            audio:null
        }
    }
 },
 methods:{
    async sendMessage(){
        this.sending = true;
        let valid =  await this.$refs.form.validate()
        if(!valid){
            this.sending = false;
            return;
        }
        let formData = new FormData();
        Object.keys(this.itemForm).forEach(key=>{
            formData.append(key,this.itemForm[key])
        })
        try {
            let { data } = await usersAPI.sendMessageToProvider(formData)
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
        this.sending = false;
    },
    closeDialog(){
        this.showDialog =  false;
        this.sending  = false;
        return true;
    },
    openDialog(dataEvent){
        this.itemForm.title = ''
        this.itemForm.message = '';
        this.itemForm.audio = null;
        if(dataEvent.formData)
        this.itemForm = {...this.itemForm,...dataEvent.formData}
        if(dataEvent.opts)
        this.opts = {...this.opts,...dataEvent.opts}
         this.showDialog =  true;
        return true;
    },
closeEvent(){
   this.fireEvent(this.group+'-close-dialog')
}
 }
}
</script>

<style>

</style>