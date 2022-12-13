<template>
  
        <DialogSimple :show.sync="showDialog">
            <ValidationObserver ref="form">
                <div class=" add-portfolio m-3 p-0">
                    <div class="   m-auto">
                        <div class="col-md-12">
                            <label for="imginput" class="form-label file-label first w-100">
                                <div class="text-center p-5">
                                  <img :src="url"  height="96" width="96"/>
                                      
                                    <p class="m-c">أضافة صورة العرض </p>
                                </div>
                                <div class="add-img-selected w-100">

                                    <img class="" src="none" id="image_selected" width="434" height="236" />
                                </div>
                            </label>
                            <ValidationProvider
                                    :name="$t('Image')"
                                 vid="image"
                                 rules="required"
                                    v-slot="{validate,errors}">
                            <input @change="uploadImage($event) || validate($event)" class="form-control opacity-0 " type="file"
                                id="imginput">
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 mb-3">
                            <ValidationProvider
                                    :name="$t('name_company_ar')"
                                 vid="ar.name_company"
                                 rules="required"
                                    v-slot="{errors}">
                                    <label class="form-label">{{$t('name_company_ar')}}</label>
                            <input type="text" v-model="offer.title" class="form-control" placeholder="عنوان التدوينة">
                            <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <ValidationProvider
                                    :name="$t('name_company_en')"
                                 vid="en.name_company"
                                 rules="required"
                                    v-slot="{errors}">
                                    <label class="form-label">{{$t('name_company_en')}}</label>
                            <input type="text" v-model="offer.title_en" class="form-control" placeholder="عنوان التدوينة">
                            <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <ValidationProvider
                                    :name="$t('start_date')"
                                 vid="start_date"
                                 rules="required"
                                    v-slot="{errors}">
                                    <label class="form-label">{{$t('start_date')}}</label>
                            <input type="text" v-model="offer.start_date" class="form-control" placeholder="عنوان التدوينة">
                            <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <ValidationProvider
                                    :name="$t('during_day')"
                                 vid="day"
                                 rules="required"
                                    v-slot="{errors}">
                                    <label class="form-label">{{$t('during_day')}}</label>
                            <input type="text" v-model="offer.day" class="form-control" placeholder="عنوان التدوينة">
                            <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <ValidationProvider
                                    :name="$t('link')"
                                 vid="link"
                                 rules="required"
                                    v-slot="{errors}">
                                    <label class="form-label">{{$t('link')}}</label>
                            <input type="text" v-model="offer.link" class="form-control" placeholder="عنوان التدوينة">
                            <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                        </div>
                        <div class="col-12 mb-3 position-relative">
                            <ValidationProvider
                                    :name="$t('Category')"
                                 vid="category_id"
                                 rules="required"
                                    v-slot="{errors}">
                            <label class="form-label">{{$t('Category')}}</label>
                            <multi-select v-model="offer.category_id" 
                            selectLabel="أنقر لتحـددها"
                            selectedLabel="محـددة" 
                            deselectLabel="انقر لازالتها"
                            :options="categories" 
                            :multiple="false"  
                            :group-select="false" 
                            placeholder="" 
                            track-by="id" label="name">
                                <span slot="noResult">لم يتم العثور على عناصر. ضع في اعتبارك تغيير استعلام البحث.</span>
                            </multi-select>
                            <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                      </div>
                     
                      <div class="col-12 col-md-6 mb-3">
                            <ValidationProvider
                                    :name="$t('short_description_ar')"
                                 vid="ar.short_description"
                                 rules=""
                                    v-slot="{errors}">
                        <label class="form-label">{{$t('short_description_ar')}}</label>
                            <textarea v-model="offer.short_description" class="form-control" rows="10"
                                placeholder=""></textarea>
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <ValidationProvider
                                    :name="$t('short_description_en')"
                                 vid="en.short_description"
                                 rules=""
                                    v-slot="{errors}">
                        <label class="form-label">{{$t('short_description_en')}}</label>
                            <textarea v-model="offer.short_description_en" class="form-control" rows="10"
                                placeholder=""></textarea>
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <ValidationProvider
                                    :name="$t('description_ar')"
                                 vid="ar.description"
                                 rules="required"
                                    v-slot="{errors}">
                        <label class="form-label">{{$t('description_ar')}}</label>
                            <textarea v-model="offer.description" class="form-control" rows="10"
                                placeholder=""></textarea>
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <ValidationProvider
                                    :name="$t('description_en')"
                                 vid="en.description"
                                 rules="required"
                                    v-slot="{errors}">
                        <label class="form-label">{{$t('description_en')}}</label>
                            <textarea v-model="offer.description_en" class="form-control" rows="10"
                                placeholder=""></textarea>
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
                {{$t('save')}}
            </button>
        </template>
      </DialogSimple>

</template>
<script>
import DialogSimple from '@/components/modals/large.vue'
export default {
  components:{
    DialogSimple
  },
  data:()=>({
    group:'add-dialog',
    showDialog:false,
    categories:[],
    tags:[],
    url:'/assets/svg/empty-image.svg',
    file:null,
    offer:{
        title:'',
        title_en:'',
        description:'',
        description_en:'',
        short_description:'',
        short_description_en:'',
        category_id:null,
        link:'',
        day:'',
        start_date:'',
       
    }
  }),
  methods:{
   async save(){
    console.log('refs',this.$refs)
    let valid = await this.$refs.form.validate();
        if(!valid){
            console.log('form invalid');
            return ;
        }
     let formData = new FormData();
     formData.append('link',this.offer.link);
     formData.append('start_date',this.offer.start_date);
     formData.append('day',this.offer.day);

     formData.append('ar[name_company]',this.offer.title);
     formData.append('en[name_company]',this.offer.title_en);
     formData.append('ar[description]',this.offer.description);
     formData.append('en[description]',this.offer.description_en);
     formData.append('ar[short_description]',this.offer.short_description);
     formData.append('en[short_description]',this.offer.short_description_en);
     formData.append('file',this.file);

    //for ( i = 0; i < this.offer.category.length; i++) {
            formData.append('category_id', this.offer.category_id.id);
   // }
        try {
            let { data } = await this.$axios.post('/network/offers',formData)
            if(data.success){
                console.log('success',data)
                this.closeDialog()
            }
        } catch (error) {
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
    uploadImage(evt){
        this.file = evt.target.files[0];
        if(this.file)
        this.url = URL.createObjectURL( this.file);
        else{
            URL.revokeObjectURL(this.url);
            this.url = '/assets/svg/empty-image.svg'
        }
        

    },
    async loadCategories(){
        try {
            let {data} =  await this.$axios.get('/network/offers-categories')
            if(data.success){
                this.categories = data.data
            }
        } catch (error) {
             console.log('error',error)
        }
    },
    openDialog(){
        console.log('open ')
        this.url='/assets/svg/empty-image.svg'
        this.file=null;
        this.offer.title=''
        this.offer.title_en=''
        this.offer.description=''
        this.offer.description_en=''
        this.offer.short_description=''
        this.offer.short_description_en=''
        this.offer.category_id=null
        this.offer.link=''
        this.offer.day=''
        this.offer.start_date=''

        this.showDialog = true
    },
    closeDialog(){
        this.showDialog = false
    }
  },
  created(){
    window.EventBus.listen(this.group+'-open-dialog',this.openDialog)
    window.EventBus.listen(this.group+'-close-dialog',this.closeDialog)
  },
  beforeDestroy(){
    window.EventBus.off(this.group+'-open-dialog',this.openDialog)
    window.EventBus.off(this.group+'-close-dialog',this.closeDialog)
  },
  mounted(){
    this.loadCategories()
    console.log(this.$refs)
  }
}
</script>

<style scoped>
label{
    width:100%;
    text-align: start;
}

</style>