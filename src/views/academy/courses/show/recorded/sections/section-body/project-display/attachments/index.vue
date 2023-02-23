<template>
     <d-course-panel
     :class-header="`d-flex justify-content-between ${isMobile?'flex-column':''}`"
     >
              <template v-slot:header>
                <h1 class="flex-grown-1">المرفقات : </h1>
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

                        let {data} =  await academyAPI.projectsAPI.deleteAttachment(item.id)
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
                        console.mylog('error',error)
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
                        let {data} =  await academyAPI.projectsAPI.addAttachment(this.lectureId,formData,config)
                        if(data.success){
                            this.attachments.push(data.data)
                            this.itemForm.title = '';
                            this.itemForm.file = null;
                            await this.$refs.form.reset()
                        }else{
                            window.SwalError(data.message)
                            }
                    } catch (error) {
                        console.mylog('error',error)
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