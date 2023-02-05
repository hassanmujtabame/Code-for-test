<template>
  
        <d-dialog-large 
        mlg
        :loading="loading"
        :group="group" 
        :closeDialog="closeDialog"
        :openDialog="openDialog"
        >
        <ValidationObserver ref="form">
            <div v-if="showDialog" class=" add-portfolio m-3 p-0">
                <div class="   m-auto">
                    <h3>
                        ألهمي الاخرين بقصتك
                    </h3>
                </div>
                <div class="">
                    <div class="mb-3">
                        <ValidationProvider
                            :name="$t('story-title')"
                            vid="title"
                            rules="required"
                                    v-slot="{errors}">
                                    <label class="form-label">{{$t('story-title')}}</label>
                                <input type="text" v-model="itemDialog.title" class="form-control" placeholder=" عنوان القصة">
                            <d-error-input :errors="errors" v-if="errors.length" />
                        </ValidationProvider>
                    </div>

                    <div class="mb-3">
                        <ValidationProvider
                            :name="$t('story-title')"
                            vid="title"
                            rules="required"
                                    v-slot="{errors}">
                                    <label class="form-label">{{$t('story-title')}}</label>

                        <d-ckeditor-classic v-model="itemDialog.description" 
                        class="form-control" 
                        rows="10"
                        :editorConfig="{minHeight:'150px'}"
                        placeholder="أكتبي قصتك هنا"/>
                        <d-error-input :errors="errors" v-if="errors.length" />
                        </ValidationProvider>
                    </div>
                </div>
            </div>
        </ValidationObserver>
        <template v-slot:actions>
            <button @click="save" type="button" class="btn btn-main">
                {{ $t('save_modifications') }}
            </button>
        </template>
      </d-dialog-large>

</template>
<script>
import StoriesAPI from '@/services/api/stories.js'
export default {
  data:(vm)=>{
    return{
        loading:false,
    group:'update-story',
    showDialog:false,
    categories:[],
    tags:[],
    idImage: `image-selected-${vm.generateRandomString(8)}`,
    url:'/assets/svg/empty-image.svg',
    imageUrl:'none',
    file:null,
    itemOrigin:{},
    itemDialog:{
        id:null,
        title:'',
        description:'',
       }
  }},
  
  methods:{
   async save(){
    this.loading =  true;
    let valid = await this.$refs.form.validate();
        if(!valid){
            console.log('form invalid');
            this.loading =  false;
            return ;
        }
     let formData = new FormData();
     Object.keys(this.itemDialog).forEach(key => {
                formData.append(key, this.itemDialog[key]);
        })
        try {
            let { data } = await StoriesAPI.updateItem(this.itemDialog.id,formData)
            if(data.success){
                console.log('success',data)
                this.$emit('updated', this.itemDialog)
                this.closeEvent()
            }
        } catch (error) {
            console.log('error',error)
            //
            if(error.response){
                    let response =error.response
                    console.log('error',response)
                    if(response.status==422){
                        if(response.data.errors)
                        this.$refs.form.setErrors(response.data.errors)
                    }
                }
           
        }
        this.loading =  false;
    },
    openDialog(data){
        this.itemOrigin = data
        this.itemDialog.id = data.id
        this.itemDialog.title = data.title
        this.itemDialog.description = data.description
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

<style scoped>
label{
    width:100%;
    text-align: start;
}
.img-zone{
    max-width: 430px;
}
</style>