<template>
  <d-dialog-large :xl="false"
  :open-dialog="openDialog"
  :close-dialog="closeDialog"
  :group="group"
  >
  <template v-slot:header>
    قيم مشروع الطالب
  </template>
  <template v-slot:default>
    <ValidationObserver v-if="showDialog" ref="form" tag="div">
        <ValidationProvider
        :name="$t('rate-project')"
        vid="rate"
        tag="div"
        class="mb-3"
        v-slot="{errors}"
        >
            <d-select-input :errors="errors" label="تقييم الطالب" v-model="itemForm.note">
            <option disabled>حدد قيمة المشروع</option>
            </d-select-input>
        </ValidationProvider>
        <ValidationProvider
        :name="$t('rate-project')"
        vid="rate"
        tag="div"
        class="mb-3"
        v-slot="{errors}"
        >
            <d-textarea-input :errors="errors" label="أكتب رسالة للطالب اذا رغبت" v-model="itemForm.desc">
           
            </d-textarea-input>
        </ValidationProvider>
    </ValidationObserver>
  </template>
  <template v-slot:actions>
    <div class="text-center">
        <button @click="save" :disabled="loading" class="btn btn custmer">أرسل التقييم</button>
    </div>
  </template>
  </d-dialog-large>
</template>

<script>
import academy from '@/services/api/academy';
export default {
 name:'project-rate-dialog',
 props:{
    group:{
        default:'project-rate-dialog'
    }
 },
 data:()=>({
    showDialog : false,
    loading:false,
    itemForm:{rate:null,desc:''},
    itemDialog :{},

 }),
 methods:{
    async save(){
        if(!this.$refs.form.validate()){
            console.mylog('invalid')
            return;
        }
        let formData = this.loadObjectToForm(this.itemForm)
        try {
            let {data} = await academy.instructor.rateProject(this.itemDialog.id,formData)
            if(data.success){
                this.fireCloseDialog(this.group);
            }else{
                window.SwalError(data.message)
            }
        } catch (error) {
            window.DHelper.catchException.call(this,error)
        }
    },
    openDialog(evt){
        this.itemDialog = evt;
        this.itemForm={rate:null,desc:''}
        this.showDialog = true;
        return true;
    },
    closeDialog(){
        this.showDialog = false;
        return true;
    }
 }
}
</script>

<style>

</style>