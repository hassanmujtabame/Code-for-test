<template>
  
    <d-dialog-large 
    mlg
    :group="group" 
    :loading="loading"
    :closeDialog="closeDialog"
    :openDialog="openDialog"
    >
    <template v-slot:header>
        تعديل المدونة
    </template>
        <ValidationObserver ref="form"  >
            <div class=" add-portfolio m-3 p-0">
                <div class="   m-auto">
                    <div class="col-md-12 text-center">
                        <label for="imginput" class="img-zone form-label file-label first w-100">
                            <div class="text-center p-5">
                              <img src="/assets/svg/empty-image.svg"  height="96" width="96"/>
                                  
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
                                :name="$t('blog-title')"
                             vid="title"
                             rules="required"
                                v-slot="{errors}">
                        <input :errors="errors" type="text" v-model="blog.title" class="form-control" :label="$t('blog-title')">
                        
                            </ValidationProvider>
                    </div>
                  <!-- category-->
                  <div class="mb-3">
                        <ValidationProvider
                                :name="$t('blog-category')"
                             vid="category_id"
                             rules="required"
                                v-slot="{errors}">

                                <d-multiselect-input
                        track-id="id" label-name="name"
                        multi-select
                        :opts="categories" 
                        v-model="blog.category_id" 
                       :errors="errors"
                        :label="$t('blog-category')" 
                       >
                        </d-multiselect-input>
                            </ValidationProvider>
                  </div>
                
                    <!--content-->
                    <div class="mb-3">
                        <ValidationProvider
                                :name="$t('description_blog')"
                             vid="description"
                             rules="required"
                                v-slot="{errors}">
                    <label class="form-label">{{ $t('description_blog') }}</label>
                        <d-ckeditor-classic 
                        v-if="showDialog"
                        v-model="blog.description" class="form-control" rows="10"
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
        <button @click="save" :disabled="loading" type="button" class="btn btn-custmer">
            <i v-if="loading" class="fa fa-spinner fa-spin"></i>
            {{ $t('save_modifications') }}
        </button>
    </template>
  </d-dialog-large>

</template>
<script>
import BlogsAPI from '@/services/api/blogs.js'
export default {
data:(vm)=>{
return{
    loading:false,
group:'update-blog',
showDialog:false,
categories:[],
idImage: `image-selected-${vm.generateRandomString(8)}`,
url:'/assets/svg/empty-image.svg',
imageUrl:'none',
file:null,
blog:{
    id:null,
    title:'',
    description:'',
    short_description:'',
    category_id:[],
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
 formData.append('title',this.blog.title);
 formData.append('ar[title]',this.blog.title);
 formData.append('ar[description]',this.blog.description);
 formData.append('ar[short_description]',this.blog.short_description);
 formData.append('image',this.file);
 formData.append('user_id',this.user.id);
 if(Array.isArray(this.blog.category_id)){
    this.blog.category_id.forEach(cat=> formData.append('categories[]',cat))
 }
    try {
        let { data } = await BlogsAPI.updateBlog(this.blog.id,formData)
        if(data.success){
            //console.log('success',data)
            //this.fireEvent('list-blogs-update')
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
            //console.log('result',e,this.idImage)
            window.$('#'+this.idImage)
                .attr('src', e.target.result)
                .css('opacity', '1');

        };
        reader.readAsDataURL(this.file);
},
async loadBlogTags(){
    try {
        let {data} =  await BlogsAPI.getTags()
        if(data.success){
            this.tags = data.data
        }
    } catch (error) {
         console.log('error',error)
    }
},
async loadBlogCategories(){
    try {
        let {data} =  await BlogsAPI.getCategories()
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
    this.blog.id=data.id
    this.blog.category_id = [];
    if(Array.isArray(data.categories))
    this.blog.category_id=data.categories.map(cat=>cat.id)
    this.blog.description=data.description??''
    this.blog.short_description=data.short_description??''
    this.blog.title=data.title
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
created(){
//window.EventBus.listen(this.group+'-open-dialog',this.openDialog)
//window.EventBus.listen(this.group+'-close-dialog',this.closeDialog)
},
beforeDestroy(){
//window.EventBus.off(this.group+'-open-dialog',this.openDialog)
//window.EventBus.off(this.group+'-close-dialog',this.closeDialog)
},
mounted(){
this.loadBlogTags()
this.loadBlogCategories()
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