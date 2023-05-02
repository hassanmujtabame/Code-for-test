<template>
  
        <d-dialog-large 
        mlg
        :loading="loading"
        :group="group" 
        :closeDialog="closeDialog"
        :openDialog="openDialog"
        >
            <ValidationObserver ref="form"  >
                <div class=" add-portfolio m-3 p-0">
                    <div class="   m-auto">
                        <div class="col-md-12 text-center">
                            <label for="imginput" class="img-zone form-label file-label first w-100">
                                <div class="text-center p-5">
                                  <img :src="`${publicPath}assets/svg/empty-image.svg`"  height="96" width="96"/>
                                      
                                    <p class="m-c">{{ $t('add-display-image') }}</p>
                                </div>
                                <div class="add-img-selected w-100">

                                    <img class="image-selected-dialog " src="none" :id="idImage" width="434" height="236" />
                                </div>
                            </label>
                            <ValidationProvider
                                    :name="$t('Image')"
                                 vid="image"
                                 rules="image"
                                    v-slot="{validate,errors}">
                            <input @change="uploadImage($event,validate) || validate($event)" class="form-control opacity-0 " type="file"
                                id="imginput">
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                        </div>
                    </div>
                    <div class="">
                        <div class="mb-3">
                            <ValidationProvider
                                    :name="$t('podcast-title')"
                                 vid="title"
                                 rules="required"
                                    v-slot="{errors}">
                            <input type="text" v-model="itemForm.title" class="form-control" :placeholder="$t('podcast-title')">
                            <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                        </div>
                        <div class="mb-3">
                            <ValidationProvider
                                    :name="$t('podcast-category')"
                                 vid="categories"
                                 rules="required"
                                    v-slot="{errors}">
                            <label class="form-label">{{ $t('podcast-category') }}</label>
                            <multi-select v-model="itemForm.category" 
                            :selectLabel="$t('selectLabel')"
                            :selectedLabel="$t('selectedLabel')" 
                            :deselectLabel="$t('deselectLabel')"
                            :options="categories" 
                            :multiple="false"  
                            :group-select="false" 
                            placeholder="" 
                            track-by="id" label="name">
                                <span slot="noResult"></span>
                            </multi-select>
                            <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                      </div>
                     
                
                        <div class="mb-3">
                            <ValidationProvider
                                    :name="$t('description_podcast')"
                                 vid="tag"
                                 rules="required"
                                    v-slot="{errors}">
                        <label class="form-label">{{ $t('description_podcast') }}</label>
                            <d-ckeditor-classic 
                            v-if="showDialog"
                            v-model="itemForm.description" class="form-control" rows="10"
                                placeholder=""></d-ckeditor-classic>
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
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
import objAPI from '@/services/api/podcasts.js'
export default {
  data:(vm)=>{
    return{
        loading:false,
    group:'update-item',
    showDialog:false,
    categories:[],
    tags:[],
    idImage: `image-selected-${vm.generateRandomString(8)}`,
    url:`${vm.publicPath}assets/svg/empty-image.svg`,
    imageUrl:'none',
    file:null,
    itemForm:{
        id:null,
        title:'',
        description:'',
        short_description:'',
        category:[],
        tag:[],
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
     Object.keys(this.itemForm).forEach(key=>{
            formData.append(key, this.itemForm[key])
        })
        try {
            let { data } = await objAPI.updateItem(this.itemForm.id,formData)
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
        this.loading =  false;
    },
    makeImageEmpty(){
        this.file = null;
                window.$('#' + this.idImage)
                    .attr('src', 'none')
                    .css('opacity', '0');
    },
    async uploadImage(evt,validate){
       let resValid = await validate(evt)
       if(!resValid.valid){
                this.makeImageEmpty();
                return;
       }
        if (!evt.target.files && !evt.target.files[0]) {
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

    async loadCategories(){
        try {
            let {data} =  await objAPI.getCategories()
            if(data.success){
                this.categories = data.data
            }
        } catch (error) {
             console.log('error',error)
        }
    },
    openDialog(data){
        this.loading =  false;
        this.imageUrl = data.image
        this.itemForm.id=data.id
        this.itemForm.title=data.title
        this.showDialog = true;
        window.$('#'+this.idImage)
                    .attr('src', this.imageUrl??'none')
                    .css('opacity', this.imageUrl?'1':'0');
        return true;
    },
    closeDialog(){
        this.showDialog = false

        return true;
    },
    closeEvent(){
       this.fireEvent(this.group+'-close-dialog')
    }
  },

  mounted(){
    this.loadCategories()
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