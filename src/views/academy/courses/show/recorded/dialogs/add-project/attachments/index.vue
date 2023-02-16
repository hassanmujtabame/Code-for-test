<template>
     <d-course-panel
     :class-header="`d-flex justify-content-between ${isMobile?'flex-column':''}`"
     >
              <template v-slot:header>
                <h1 class="flex-grown-1">المرفقات : </h1>
                <ValidationObserver ref="form" class="flex-shrink-0" tag="div" v-slot="{invalid }">
                <div class="d-flex align-items-center">
                   
                    <ValidationProvider tag="div" 
                                :name="$t('lecture-title')"
                                vid="title"
                                rules="required"
                                v-slot="{errors}"
                            class="">
                    <d-text-input :disabled="!lectureId" :errors="errors" v-model="itemForm.title" label="اسم المرفق الجديد" >
                       <!--after error-->
                        <template v-slot:after-error>
                        <div class="d-flex" style="font-size: 10px;" v-if="itemForm.file"><span class="flex-grow-1">{{ itemForm.file.name }} </span><span class="flex-shrink-0" style="color:red">{{ percentage }} %</span></div>
                       </template>
                       <!--prend-icon-->
                        <template v-slot:prend-icon>
                            <ValidationProvider tag="div" 
                                :name="$t('attachment')"
                                vid="file"
                                rules="required"
                            class=""
                            v-slot="{errors,validate}"
                            
                            >
                            <label  class="btn position-relative">
                            <i class="fa fa-paperclip" :class="[lectureId?'m-c':'t-c']"></i>
                            <input type="file" :disabled="!lectureId" @change="uploadFile($event,validate) || validate($event)" class="position-absolute top-0 left-0 w-100 h-100" style="opacity: 0;">
                            </label>
                            <d-error-input :errors="errors" v-if="errors && errors.length>0" />
                    </ValidationProvider>
                        
                        </template>
                        <!--append-icon-->
                        <template v-slot:append-icon>
                            <div class="">
                                <button @click="uploadAttachment" :disabled="!lectureId || invalid || loading" class="btn no-border" :class="{'c-save':!invalid,'t-c':invalid}" >
                                    <i v-if="!loading" class="fa fa-upload"></i>
                                    <i v-else class="fa fa-spinner fa-spin"></i>
                                </button>
                            </div>
                                </template>
                    </d-text-input>
                </ValidationProvider>
                </div>
                </ValidationObserver>
                </template>
                <template v-slot:default>
            <div>
                <rateCard v-for="(rateItem,i) in attachments" :key="i"
                :item="rateItem" 
                @delete="showConfirmDeleteItem"
                :showBorder="(attachments.length-1)>i"
                />
            </div>
            </template>

        </d-course-panel>
</template>

<script>
/*let itemTest={
            title:'دراسة جدوي',
            file: "testing/uploads/defuals.pdf",
            id:1,
        }*/
//let attachments=[]
import rateCard from './card.vue';
import academyAPI from '@/services/api/academy';
export default {
    name: 'section-attachments-lecture',
    components:{
        rateCard
    },
     props:{
        itemPage:{
                type:[Object,Array],
                require:true
            },
        lectureId:{}
    },
    data:(vm)=>({
        attachments:vm.itemPage.attachments??[],
        loading:false,
        percentage:0,
        itemForm:{
            file:null,
            title:null,
        }
    }),
    watch:{

        lectureId(){}
    },
    methods:{
        showConfirmDeleteItem(item){
        let dataEvent={
          title:'هل حقا تريد حذف هذا المرفق؟',
          description:`${item.title}`,
          groupBtns:'d-flex justify-content-evenly',
          btns:[
            {title:'تراجع',class:"btn btn-custmer btn-danger"},
            {title:this.$t('confirm_delete'),action:()=>this.deleteItem(item),class:"btn btn-custmer"},
          ]
        }
        this.showConfirmMsg(dataEvent)
    },
    async deleteItem(item){
        console.mylog('deleting ...',item)
        try {

                        let {data} =  await academyAPI.projectsApi.deleteAttachment(item.id)
                        if(data.success){
                            let index  = this.attachments.findIndex(l=>l.id===item.id)
                            console.mylog('deleting index',index)
                            if(index>-1){
                                this.attachments.splice(index,1)
                            }
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
                
      
    },
        async uploadAttachment(){
            this.percentage = 0
            this.loading =  true;
                    let valid = await this.$refs.form.validate()
                    if(!valid){
                        this.loading =  false;
                        return;
                    }
                    let config ={
            onUploadProgress: progressEvent =>{
              
              const { loaded, total } = progressEvent;
              this.percentage = Math.floor((loaded * 100) / total);
            /*if (percent < 100) {
              console.log(`${loaded} bytes of ${total} bytes. ${percent}%`);
            }*/
            } 
          }
                    try {
                        let formData = this.loadObjectToForm(this.itemForm)
                        let {data} =  await academyAPI.projectsApi.addAttachment(this.lectureId,formData,config)
                        if(data.success){
                            this.attachments.push(data.data)
                            this.itemForm.title = '';
                            this.itemForm.file = null;
                            await this.$refs.form.reset()
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
                
                
                    this.loading =  false;
        },
        async uploadFile(evt,validate){
            if(validate){
                let valid = await validate(evt)
                if(!valid){
                    this.itemForm.file = null;
                    return;
                }
            }
            if(!evt.target.files && !evt.target.files[0]){
                this.itemForm.file = null;
                    return;
            }
            this.itemForm.file = evt.target.files[0];
        }
    }
}
</script>