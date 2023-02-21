<template>
    <d-dialog-large :xl="false" :open-dialog="openDialog" :close-dialog="closeDialog" :group="group">
        <template v-slot:header>
            ارسل رسالة جماعية
            </template>
        <template v-slot>
            <h6 class="t-c fs-r-16-24 mb-5">ارسل رساله لكل المنضمين الى اللقاء</h6>
        <ValidationObserver ref="form">
            <div class="mb-3">
                <ValidationProvider
                :name="$t('message-title')"
                tag="div"
                vid="title"
                v-slot="{errors}"
                >
                    <d-text-input v-model="itemForm.title" :errors="errors" label="عنوان الرسالة"></d-text-input>
                </ValidationProvider>
            </div>
            <div class="mb-3">
                <ValidationProvider
                :name="$t('message-content')"
                tag="div"
                vid="note"
                v-slot="{errors}"
                >
                    <d-textarea-input rows="10" v-model="itemForm.note" :errors="errors" label="ضع رسالتك هنا"></d-textarea-input>
                </ValidationProvider>
            </div>
            <div class="mb-3 text-center">
                <button @click="sendMessage" :disabled="loading" class="btn btn-custmer">
                    <i v-if="loading" class="fa fa-spinner fa-spin"></i>
                    <i v-else class="fa fa-send"></i>
                    {{ $t('send') }}
                </button>
            </div>
        </ValidationObserver>
    </template>
    </d-dialog-large>
</template>


<script>
import instructorAPI from '@/services/api/academy/instructor/index.js';
export default {
    name: "message-participants",
    props: {
        group: {
            type: String,
            default: "send-all-participants"
        }
    },
    data: () => {
        return {
            loading:false,
            itemDialog: {},
            showDialog: false,
            itemForm:{
                title:'',
                note:''
            }
        };
    },
    methods: {
        async sendMessage(){
            this.loading = true;
            let valid = await this.$refs.form.validate();
            if(!valid){
                this.loading = false;
                console.mylog('invalid');
                return;
            }
            let formData = this.loadObjectToForm(this.itemForm)
            formData.append('meeting_id', this.itemDialog.id)
            try {
               let { data } = await instructorAPI.meetingsAPI.sendGroupMessage(formData)
               if(data.success){
                let dataEvt={
                    title:'لقد تم إرسال الرسالة بنجاح',
                    btns:[
                        {title:'حسنا'}
                    ]
                }
                this.showSuccessMsg(dataEvt)
               }else{
                window.SwalError(data.message)
               }
            } catch (error) {
                if(error.response){
                            let response = error.response
                            if (response.status == 422) {
                                this.setErrorsForm(this.$refs.form,response)
                            }
                        }
            }
            this.loading = false;
        },
        openDialog(dataEvt) {
            this.itemDialog = dataEvt;
            this. itemForm={
                title:'',
                message:''
            }
            this.showDialog = true;
            return true;
        },
        closeDialog() {
            this.showDialog = false;
            return true;
        }
    }

}
</script>

<style></style>