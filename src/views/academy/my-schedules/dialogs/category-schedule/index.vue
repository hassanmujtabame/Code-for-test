<template>
    <d-dialog-large :xl="false" :group="group"
    :open-dialog="openDialog"
    :close-dialog="closeDialog"
    >
                    <template v-slot:header>تصنيف جداول مواعيد </template>
                    <template v-slot:default>
                    <ValidationObserver v-if="showDialog" tag="div" class="form-dialog" ref="form">
                        <div class="row add-portfolio m-3 p-0">
                            <div class="col-12 ">
                                <ValidationProvider
                                tag="div"
                                :name="$t('category-schedule')"
                                vid="title"
                                rules="required"
                                v-slot="{errors}"
                                >
                                <div class="mb-3">
                                    <input type="text" class="form-control" v-model="itemForm.title"  :placeholder="$t('category-schedule')">
                                </div>
                                <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                            
                                <div class="mb-3">
                                 
                                <ValidationProvider
                                    tag="div"
                                    :name="$t('color')"
                                    vid="color"
                                    rules="required"
                                    v-slot="{errors}">
                                    <label class="form-label">اختار لون  لتميز  الجدول</label>  
                                    <input type="color" pattern = "#[0-9A-Fa-f]{6}" :value="itemForm.color" @change="updateColor" class="form-control" placeholder="أقصى عدد من العملاء لكل موعد">
                                    <d-error-input :errors="errors" v-if="errors.length" />
                                </ValidationProvider>
                                </div>
                            </div>
                        </div>
                    </ValidationObserver>
                    </template>
                <template v-slot:actions>
                    <button @click="save" type="button" class="btn btn-main" >
                        {{itemForm.id?$t('update'): $t('add') }}
                    </button>
                </template>
    </d-dialog-large>
</template>

<script>
import categoriesScheduleAPI from '@/services/api/service-provider/categories-schedule'
export default {
 name:'dialog-new-category-schedule',
 props:{
    group:{
        type:String,
        default:'new-category-schedule'
    }
 },
 data:()=>{
    return {
        showDialog:false,
        itemForm:{
            id:null,
            title:false,
            color:null,
            
        }
    }
 },
 methods:{
    updateColor(evt){
       this.itemForm.color = window.$(evt.target).val()
    },
    async save() {
            let valid = await this.$refs.form.validate();
            if (!valid) {
                console.log('form invalid');
                return;
            }
            let formData =  new FormData();
            Object.keys(this.itemForm).forEach(key=>{
                formData.append(key,this.itemForm[key])
            })
            try {
               let { data } = this.itemForm.id?await categoriesScheduleAPI.updateItem(this.itemForm.id,formData) : await categoriesScheduleAPI.addItem(formData)
               if(data.success){
                this.$emit('success',Object.assign({},this.itemForm))
                this.closeEvent()
               }
            } catch (error) {
                console.log('error',error)
            }
    },
    closeEvent(){
        this.fireCloseDialog(this.group)
    },
    openDialog(dataEvent){
       
            this.itemForm.id=null
            this.itemForm.title=''
            this.itemForm.color=null
            
    
        if(dataEvent){
            this.itemForm.id=dataEvent.id
            this.itemForm.title=dataEvent.title
            this.itemForm.color=dataEvent.color
        } 
        
        this.$nextTick(()=>{
            this.showDialog =  true;
            if(!this.itemForm.id && this.$refs && this.$refs['form'])
            this.$refs.form.reset();
           
        })
        
        return true;
    },
    closeDialog(){
        this.showDialog =  false;
        return true;
    }
 }
 
}
</script>

<style scoped>
.form-dialog{
    max-height: 400px;
    overflow: auto;
}
</style>