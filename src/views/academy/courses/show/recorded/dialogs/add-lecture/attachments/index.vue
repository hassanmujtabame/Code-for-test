<template>
     <d-course-panel
     class-header="d-flex justify-content-between"
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
                    <d-text-input :errors="errors" v-model="itemForm.title" label="اسم المرفق الجديد" >
                       <!--after error-->
                        <template v-slot:after-error>
                        <div style="font-size: 10px;" v-if="itemForm.file">{{ itemForm.file.name }}</div>
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
                            <i class="m-c fa fa-paperclip"></i>
                            <input type="file" @change="uploadFile($event,validate) || validate($event)" class="position-absolute top-0 left-0 w-100 h-100" style="opacity: 0;">
                            </label>
                            <d-error-input :errors="errors" v-if="errors && errors.length>0" />
                    </ValidationProvider>
                        
                        </template>
                        <!--append-icon-->
                        <template v-slot:append-icon>
                            <div class="">
                                <button @click="uploadAttachment" :disabled="invalid || loading" class="btn no-border" :class="{'c-save':!invalid,'t-c':invalid}" >
                                    <i v-if="!loading" class="fa fa-floppy-disk"></i>
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
let attachments=[]
import rateCard from './card.vue';
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
    data:()=>({
        attachments:attachments,
        loading:false,
        itemForm:{
            file:null,
            title:null,
        }
    }),
    methods:{
        async uploadAttachment(){
            this.loading =  true;
                    let valid = await this.$refs.form.validate()
                    if(!valid){
                        this.loading =  false;
                        return;
                    }
                this.attachments.push({
                    title:this.itemForm.title,
                    file: "testing/uploads/defuals.pdf",
                    id:this.attachments.length+1,
                })
                this.itemForm.title = '';
                this.itemForm.file = null;
                await this.$refs.form.reset()
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