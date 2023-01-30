<template>
  
        <d-dialog-large 
        mlg
        :group="group" 

        :closeDialog="closeDialog"
        :openDialog="openDialog"
        >
            <ValidationObserver ref="form" >
                <div class="add-dialog add-portfolio m-3 p-0">
                    <div class="   m-auto">
                        <div class="col-md-12 text-center">
                            <label for="imginput" class="img-zone form-label file-label first w-100 position-relative">
                                <div class="text-center p-5">
                                  <img src="/assets/svg/empty-image.svg"  height="96" width="96"/>
                                      
                                    <p class="m-c">{{ $t('add-display-image') }} </p>
                                </div>
                                <div class="add-img-selected w-100">

                                    <img class="image-selected-dialog" src="none" :id="idImage" width="434" height="236" />
                                </div>
                                <ValidationProvider
                                    :name="$t('Image')"
                                    tag="div"
                                    class=" position-absolute w-100 h-100"
                                    style="top: 0;"
                                    vid="image"
                                    rules="required|image"
                                    v-slot="{validate,errors}">
                                    <input @change="uploadImage($event,validate) || validate($event)" class="form-control opacity-0  w-100 h-100" type="file"
                                            id="imginput">
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                            </label>
                            
                        </div>
                    </div>
                </div>
            </ValidationObserver>
      
        <template v-slot:actions>
            <button @click="save" type="button" class="btn btn-main">
                 {{ $t('add') }} 
            </button>
        </template>
      </d-dialog-large>

</template>
<script>
import UserApi from '@/services/api/user.js';
export default {
  data:(vm)=>{
    return{
    group:'add-item-image-project',
    showDialog:false,
 
    idImage: `image-selected-${vm.generateRandomString(8)}`,
    url:'/assets/svg/empty-image.svg',
    file:null
  }},
  methods:{
   async save(){
    let valid = await this.$refs.form.validate();
        if(!valid){
            console.log('form invalid');
            return ;
        }
     let formData = new FormData();
     formData.append('image',this.file);

   
        try {
            let { data } = await UserApi.addMyWorkGallary(formData)
            if(data.success){
                //console.log('success',data)
               this.$emit('success',{})
                this.closeEvent()
            }
        } catch (error) {
            //
            if(error.response){
                    let response =error.response
                    if(response.status==422){
                        if(response.data.errors)
                        this.$refs.form.setErrors(response.data.errors)
                    }
                }
           
        }
    },
    makeImageEmpty(){
        this.file = null;
                window.$('#' + this.idImage)
                    .attr('src', 'none')
                    .css('opacity', '0');
    },
    async uploadImage(evt,validate){
        console.log('uploadImage')
       let resValid = await validate(evt)
       if(!resValid.valid){
        console.log('invalid')
                this.makeImageEmpty();
                return;
       }
        if (!evt.target.files && !evt.target.files[0]) {
            console.log('not file')
            this.makeImageEmpty();
                return;
            }
            this.file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload =  (e) =>{
                console.log('result',e,this.idImage)
                window.$('#'+this.idImage)
                    .attr('src', e.target.result)
                    .css('opacity', '1');

            };
            reader.readAsDataURL(this.file);
    },
    openDialog(){
        //console.log('open')
        window.$('#'+this.idImage)
                    .attr('src', 'none')
                    .css('opacity', '0');
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

