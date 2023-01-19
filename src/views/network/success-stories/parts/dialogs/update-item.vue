<template>
  
        <d-dialog-large 
        mlg
        :group="group" 
        :closeDialog="closeDialog"
        :openDialog="openDialog"
        >
            <ValidationObserver ref="form"  >
                <div class=" add-portfolio m-3 p-0">
                <div class="   m-auto">
                    <h3>
                        ألهمي الاخرين بقصتك
                    </h3>
                </div>
                <div class="">
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder=" عنوان القصة">
                    </div>

                    <div class="mb-3">
                        <textarea class="form-control" rows="10" placeholder="    أكتبي قصتك هنا"></textarea>
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
    group:'update-story',
    showDialog:false,
    categories:[],
    tags:[],
    idImage: `image-selected-${vm.generateRandomString(8)}`,
    url:'/assets/svg/empty-image.svg',
    imageUrl:'none',
    file:null,
    itemDialog:{
        id:null,
        title:'',
        description:'',
        short_description:'',
    }
  }},
  
  methods:{
   async save(){
    let valid = await this.$refs.form.validate();
        if(!valid){
            console.log('form invalid');
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
    },
    openDialog(data){
        this.itemDialog.id=data
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