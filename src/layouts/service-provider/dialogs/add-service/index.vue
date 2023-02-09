<template>
  
    <d-dialog-large :xl="true" 
    :group="group" 
    :closeDialog="closeDialog"
    :openDialog="openDialog"
    :loading="loading"
    >
   
        <ValidationObserver v-if="showDialog" ref="form" >
        
                    <div class="row add-portfolio m-3 p-0">
                        <div class="col-12 col-lg-4  justify-content-center mx-auto">
                            <div class="col-md-12">
                                <label for="imginput" class="form-label file-label first w-100">
                                    <div class="text-center p-5">
                                      <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M60 91H36C14.28 91 5 81.72 5 60V36C5 14.28 14.28 5 36 5H60C81.72 5 91 14.28 91 36V60C91 81.72 81.72 91 60 91ZM36 11C17.56 11 11 17.56 11 36V60C11 78.44 17.56 85 36 85H60C78.44 85 85 78.44 85 60V36C85 17.56 78.44 11 60 11H36Z" fill="#1FB9B3"/>
                                          <path d="M36 43C29.92 43 25 38.08 25 32C25 25.92 29.92 21 36 21C42.08 21 47 25.92 47 32C47 38.08 42.08 43 36 43ZM36 27C33.24 27 31 29.24 31 32C31 34.76 33.24 37 36 37C38.76 37 41 34.76 41 32C41 29.24 38.76 27 36 27Z" fill="#1FB9B3"/>
                                          <path d="M10.6801 78.8002C9.72006 78.8002 8.76006 78.3202 8.20006 77.4802C7.28006 76.1202 7.64006 74.2402 9.04006 73.3202L28.7601 60.0802C33.0801 57.1602 39.0401 57.5202 42.9601 60.8402L44.2801 62.0002C46.2801 63.7202 49.6801 63.7202 51.6401 62.0002L68.2801 47.7202C72.5201 44.0802 79.2001 44.0802 83.4801 47.7202L90.0001 53.3202C91.2401 54.4002 91.4001 56.2802 90.3201 57.5602C89.2401 58.8002 87.3601 58.9602 86.0801 57.8802L79.5601 52.2802C77.5601 50.5602 74.1601 50.5602 72.1601 52.2802L55.5201 66.5602C51.2801 70.2002 44.6001 70.2002 40.3201 66.5602L39.0001 65.4002C37.1601 63.8402 34.1201 63.6802 32.0801 65.0802L12.3601 78.3202C11.8401 78.6402 11.2401 78.8002 10.6801 78.8002Z" fill="#1FB9B3"/>
                                          </svg>
                                          
                                        <p class="m-c">{{ $t('add-display-image') }}</p>
                                    </div>
                                    <div class="add-img-selected">
    
                                        <img class="w-100 h-100 image-selected-dialog" :style="{opacity:showImage?'1':'0'}" :src="showImage??'none'" :id="idImage" />
                                    </div>
                                </label>
                                <ValidationProvider
                                    :name="$t('Image')"
                                 vid="image"
                                 rules="required|image"
                                    v-slot="{validate,errors}">
                                <input @change="uploadImage($event,validate) || validate($event)" class="form-control d-none" type="file"
                                    id="imginput">
                                    <d-error-input :errors="errors" v-if="errors.length>0" />
                                </ValidationProvider>
                            </div>
                            <div class="col-md-12 ">
                                <div class="row"
                                style="max-height: 295px;overflow: auto;"
                                >
                                <!-- show galleries-->
                                <div class="col-md-6 my-1"
                                v-for="(g,i) in gallariesUrl" :key="i"
                                >
                                <galleryImage @remove="removeGallary" :item="{id:i,src:g}" />
                                </div>
                                </div>
                                </div>
                                
                                <div class="col-md-12">
                                    <!-- attchment galleries-->
                                    <div class="text">
    
                                        <label for="choose-file" class="custom-file-upload file-label  w-100 p-2 text-center "
                                            id="choose-file-label">
                                            <svg width="58" height="56" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M36.1174 53.0832H21.8801C8.99532 53.0832 3.49023 47.6698 3.49023 34.9998V20.9998C3.49023 8.32984 8.99532 2.9165 21.8801 2.9165H36.1174C49.0021 2.9165 54.5072 8.32984 54.5072 20.9998V34.9998C54.5072 47.6698 49.0021 53.0832 36.1174 53.0832ZM21.8801 6.4165C10.9411 6.4165 7.04956 10.2432 7.04956 20.9998V34.9998C7.04956 45.7565 10.9411 49.5832 21.8801 49.5832H36.1174C47.0563 49.5832 50.9479 45.7565 50.9479 34.9998V20.9998C50.9479 10.2432 47.0563 6.4165 36.1174 6.4165H21.8801Z" fill="#1FB9B3"/>
                                              <path d="M36.1175 23.94C35.6666 23.94 35.2158 23.7766 34.8598 23.4266L28.9988 17.6633L23.1378 23.4266C22.4497 24.1033 21.3107 24.1033 20.6225 23.4266C19.9344 22.75 19.9344 21.63 20.6225 20.9533L27.7412 13.9533C28.4293 13.2766 29.5683 13.2766 30.2564 13.9533L37.3751 20.9533C38.0632 21.63 38.0632 22.75 37.3751 23.4266C37.0192 23.7766 36.5683 23.94 36.1175 23.94Z" fill="#1FB9B3"/>
                                              <path d="M28.9994 35.6066C28.0265 35.6066 27.2197 34.8133 27.2197 33.8566V15.1899C27.2197 14.2333 28.0265 13.4399 28.9994 13.4399C29.9723 13.4399 30.779 14.2333 30.779 15.1899V33.8566C30.779 34.8366 29.9723 35.6066 28.9994 35.6066Z" fill="#1FB9B3"/>
                                              <path d="M28.9987 42.5369C23.9919 42.5369 18.9614 41.7435 14.1919 40.1802C13.2665 39.8769 12.7682 38.8736 13.0767 37.9636C13.3851 37.0536 14.4055 36.5402 15.3309 36.8669C24.158 39.7602 33.8631 39.7602 42.6902 36.8669C43.6157 36.5635 44.636 37.0536 44.9445 37.9636C45.2529 38.8736 44.7546 39.8769 43.8292 40.1802C39.036 41.7669 34.0055 42.5369 28.9987 42.5369Z" fill="#1FB9B3"/>
                                              </svg>
                                              
    
                                            <p class="m-c"> 
                                              اضافة مرفقات
                                            </p>
                                        </label>
                                        <ValidationProvider
                                    :name="$t('File')"
                                 vid="file"
                                 rules="required|image"
                                    v-slot="{validate,errors}">
                                        <input name="uploadDocument" @change="uploadGallary($event,validate) || validate($event)" type="file" id="choose-file"
                                            accept=".jpg,.jpeg,.png"
                                            style="display: none;" />
                                            <d-error-input :errors="errors" v-if="errors.length>0" />
                                </ValidationProvider>
    
                                    </div>
    
    
                                </div>
        
    
    
    
    
                        </div>
                        <div class="col-12 col-lg-8">
                           <!--title-->
                           <div class="mb-3">
                            <ValidationProvider
                                    :name="$t('service-title')"
                                 vid="title"
                                 rules="required"
                                    v-slot="{errors}">
                                    <label class="form-label">{{ $t('service-title') }}</label>
                            <input type="text" v-model="itemForm.title" class="form-control" :placeholder="$t('service-title')">
                            <d-error-input :errors="errors" v-if="errors.length>0" />
                                </ValidationProvider>
                        </div>
                           <!--price-->
                           <div class="mb-3">
                            <ValidationProvider
                                    :name="$t('service-price')"
                                 vid="price"
                                 rules="required"
                                    v-slot="{errors}">
                                    <label class="form-label">{{ $t('service-price') }}</label>
                            <input type="text" v-model="itemForm.price" class="form-control" :placeholder="$t('service-price')">
                            <d-error-input :errors="errors" v-if="errors.length>0" />
                                </ValidationProvider>
                        </div>
                        <!-- execution during-->
                        <div class="mb-3">
                            <ValidationProvider
                                    :name="$t('execution-during')"
                                 vid="execution_period"
                                 rules="required"
                                    v-slot="{errors}">
                                    <label class="form-label">{{ $t('execution-during') }} ({{ $t('days') }})</label>
                            <input type="text" v-model="itemForm.execution_period" class="form-control" :placeholder="$t('execution-during')">
                            <d-error-input :errors="errors" v-if="errors.length>0" />
                                </ValidationProvider>
                        </div>
                      <!-- تصنيف الخدمة--> 
                        <div class="mb-3">
                        <ValidationProvider 
                        :name="$t('state-service')" 
                        vid="state" 
                        rules="required"
                         v-slot="{ errors }"
                         >
                         <div class="form-group">
                            <label class="form-label">{{ $t('state-service') }}</label>
                        <select v-model="itemForm.state"  class="form-select">
                            <option disabled value="" class="t-c"> {{$t('state-service')}} </option>
                            <option :key="i" v-for="(option,i) in states" :value="option.id">
                                {{ option.name }}
                            </option>

                        </select>
                       
                    </div>
                        <d-error-input :errors="errors" v-if="errors.length>0" />
                    </ValidationProvider>
                    </div>
                      <!-- category -->
          <div class="mb-3">
                        <ValidationProvider
                        tag="div"
                        class="form-group"
                                :name="$t('request-domain')"
                             vid="category_id"
                             rules="required"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('request-domain') }} </label>
                        <select class="form-select" v-model="itemForm.category_id" 
                        @change="loadFields($event)"
                        >
                        <option v-for="(cat,i) in categories" :key="i" :value="cat.id"> {{ cat.name }}</option>
                        </select>
                    
                        <d-error-input :errors="errors" v-if="errors.length" />
                    </ValidationProvider>
                  </div>
                     <!--field-->
                     <div class="mb-3">
                        <ValidationProvider
                        tag="div"
                                :name="$t('specialite')"
                             vid="field_id"
                             rules="required"
                                v-slot="{errors}">
                                <d-drown-list :label="$t('select-specialite')" :opts="fields" 
                                track-id="id" label-name="name"
                                v-model="itemForm.field_id"
                                multi-select
                                opened
                                fixed
                                />
                        <d-error-input :errors="errors" v-if="errors.length" />
                    </ValidationProvider>
                  </div>
                     
                    <!--details-->
                    <div class="mb-3">
                            <ValidationProvider
                                    :name="$t('service-description')"
                                 vid="desc"
                                 rules="required"
                                    v-slot="{errors}">
                        <label class="form-label">أكتب التفاصيل الخاصة بالخدمة بدقة</label>
                            <d-ckeditor-classic v-model="itemForm.desc" class="form-control" rows="10"
                            placeholder="أكتب التفاصيل الخاصة بالخدمة بدقة"></d-ckeditor-classic>
                                <d-error-input :errors="errors" v-if="errors.length>0" />
                                </ValidationProvider>
                        </div>
                         <!-- if ready service offline-->
                         <template v-if="itemForm.state=='offline'">
                         <!-- address-service-->
                         <div class="mb-3">
                            <ValidationProvider
                                    :name="$t('address-service')"
                                 vid="city_id"
                                 rules="required"
                                    v-slot="{errors}">
                                    <label class="form-label">{{ $t('address-service') }}</label>
                                    <multi-select v-model="city" 
                            :selectLabel="$t('selectLabel')"
                            :selectedLabel="$t('selectedLabel')" 
                            :deselectLabel="$t('deselectLabel')"
                            :options="cities" 
                            :multiple="false"  
                            :group-select="false" 
                            placeholder="" 
                            :custom-label="(it)=>`${it.name}-${it.region.name}`"
                            track-by="id" label="name">
                                <span slot="noResult">{{ $t('no-result-search') }}</span>
                            </multi-select>

                            <d-error-input :errors="errors" v-if="errors.length>0" />
                            </ValidationProvider>
                        </div> 
                        <!-- delivery place-->
                        <div class="mb-3">
                            <ValidationProvider
                                    :name="$t('delivery-place')"
                                 vid="delivery_place"
                                 rules="required"
                                    v-slot="{errors}">
                                    <label class="form-label">{{ $t('delivery-place') }}</label>
                                    <select class="form-select" v-model="itemForm.delivery_place" >
                        <option v-for="(place,i) in delivery_places" :key="i" :value="place.id"> {{ place.name }}</option>
                        </select>
                            <d-error-input :errors="errors" v-if="errors.length>0" />
                                </ValidationProvider>
                        </div> 
                        </template>
                           <!--keywords-->
                        <div class="mb-3">
                        <ValidationProvider
                                    :name="$t('keywords')"
                                 vid="keywords"
                                 rules="required"
                                    v-slot="{errors}">
                        <label class="form-label">{{$t('keywords')}}</label>
                            <d-multi-select-tag v-model="itemForm.keywords" 
                              >
    
                            </d-multi-select-tag>
                            <d-error-input :errors="errors" v-if="errors.length>0" />
                                </ValidationProvider>
                      
                        </div>
                    </div>
                        <div v-if="false" class="mb-3 row">
                            <label class="form-label col-12">{{$t('gallery')}}</label>
                            
                             <div class="col-md-12">
                                <div style="height:50px;width:50px" class="position-relative">
                                <label  class="form-label file-label first w-100">
                                    <div class="">
                                      <PlusCircleOutlineIcon :size="48" />
                                    </div>
                                    <div class="add-img-selected">
                                    <img class="image-selected-dialog" :src="'none'" />
                                    </div>
                                </label>
                               
                                <input @change="uploadGallary($event)"  multiple="multiple" class="form-control hidden-file-input" type="file"
                                    >
                                </div>
                            </div>
                            <!-- gallary show -->
                            <div class="col-12">
                                <div class="list-add-gallary mt-1" >
                                        <div style="height:100px;width:100px" class="bx-img-gallary"
                                        v-for="(g,i) in gallariesUrl" :key="i"
                                        >
                                      
                                        <button @click="removeGallary(i)" class="btn-close">
                                            <TrashOutlineIcon :size="24"  />
                                        </button>
                                       
                                        <img class="w-100 h-100" :src='g'  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </ValidationObserver>
  
    <template v-slot:actions>
        <button @click="save" type="button" class="btn btn-main">
           {{ $t('publish-service') }}
        </button>
    </template>
  </d-dialog-large>

</template>
<script>
import PlusCircleOutlineIcon from '@/components/icon-svg/plus-circle-outline.vue'
import TrashOutlineIcon from '@/components/icon-svg/trash-outline.vue'
import ServiceProviderAPIs from '@/services/api/service-provider/provider/ready-service'
import commonAPIs from '@/services/api/common.js'
import galleryImage  from './gallery-image.vue'
export default {
    name:'add-ready-service-dialog',
    components:{
        PlusCircleOutlineIcon,
        TrashOutlineIcon,
        galleryImage
    },
data:(vm)=>{
return{
    loading: false,
        group:'add-ready-service-dialog',
        showDialog:false,
        states:[
            {id:'online',name:'اونلاين'},
            {id:'offline',name:'اوفلاين'},
        ],
        delivery_places:[
            {id:'client_choosen',name:'ما يفضله العميل'},
        ],
        categories:[],
        fields:[],

        cities:[],
        showImage:false,
        idImage: `image-selected-${vm.generateRandomString(8)}`,
        url:'/assets/svg/empty-image.svg',
        attachment:null,
        imageFile:null,
        gallaries:[],
        gallariesUrl:[],
        itemForm:{}
}},
methods:{
async save(){
    this.loading = true;
let valid = await this.$refs.form.validate();
    if(!valid){
        console.log('form invalid');
        this.loading = false
        return ;
    }
 let formData = new FormData();
 formData.append('title',this.itemForm.title);
 formData.append('desc',this.itemForm.desc);
 formData.append('price',this.itemForm.price);
 formData.append('state',this.itemForm.state);
 formData.append('execution_period',this.itemForm.execution_period)
 if(this.city && this.itemForm.state=='offline')
 formData.append('city_id',this.city.id)
 //formData.append('execution_place',this.itemForm.execution_place)
 formData.append('file',this.attachment);
 formData.append('keywords',this.itemForm.keywords);
 formData.append('category_id',this.itemForm.category_id);
 //formData.append('field_id',this.itemForm.field_id);
 formData.append('images[]', this.imageFile); // main image as first in gallary
 for (var i = 0; i < this.gallaries.length; i++) {
        formData.append('images[]', this.gallaries[i]);
}

for ( i = 0; i < this.itemForm.field_id.length; i++) {
        formData.append('field_id[]', this.itemForm.field_id[i].id);
}
    try {
        let { data } = await ServiceProviderAPIs.add(formData)
        if(data.success){
            //console.log('success',data)
            //this.fireEvent('list-blogs-update')
            this.closeEvent()
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
    this.loading = false;
},
removeGallary(index){
    this.gallaries.splice(index, 1);
    this.gallariesUrl.splice(index, 1);
},
async uploadGallary(evt,validate){
    if(validate){
        let resValid = await validate(evt)
       if(!resValid.valid){
                return;
       }
    }
    //console.log('uploadGallary',evt.target.files)
    if (!evt.target.files && evt.target.files.length===0) {
        //console.log('empty')
            return;
        }
        for(let i=0;i<evt.target.files.length; i++){
            let file = evt.target.files[i]
            this.gallaries.push(file)
           
        var reader = new FileReader();
        reader.onload =  (e) =>{
           
            this.gallariesUrl.push( e.target.result) 
        };
        reader.readAsDataURL(file);
        }
        
},
makeImageEmpty(){
        this.imageFile = null;
        this.showImage = false
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
        this.imageFile = evt.target.files[0];
        var reader = new FileReader();
        reader.onload =  (e) =>{
            console.log('result',e,this.idImage)
            this.showImage = e.target.result
        };
        reader.readAsDataURL(this.imageFile);
},
uploadFile(evt){
    //console.log('uploadFile')
    if (!evt.target.files && !evt.target.files[0]) {
            this.attachment = null;
            
            return;
        }
        this.attachment = evt.target.files[0];
},
async loadCategories(){
    try {
        let {data} =  await ServiceProviderAPIs.getCategories()
        if(data.success){
            this.categories = data.data
        }
    } catch (error) {
         console.log('error',error)
    }
},
async loadFields(val,ch=true){
    console.mylog('cc',val)
    if(ch)
    this.itemForm.field_id = [];
   
    if(!this.itemForm.category_id) {
        this.fields = [];
        return;
    }
    try {
        let {data} =  await ServiceProviderAPIs.getFields(this.itemForm.category_id)
        if(data.success){
            this.fields = data.data
        }
    } catch (error) {
         console.log('error',error)
    }
},
async loadCities(){
    try {
        let { data } =  await commonAPIs.cities()
        if(data.success){
            this.cities = data.data
        }
    } catch (error) {
         console.mylog('error',error)
    }
},
openDialog(){
    this.itemForm =Object.assign({},{
    id:null,
    title:null,
    price:'',
    execution_period:'',
    state:'',
    category_id:null,
    field_id:[],
    desc:'',
    city_id:'',
    delivery_place:'client_choosen',
    keywords:'',
})
this.city=null,
this.gallaries = [];
this.gallariesUrl = []
    this.imageFile = null;
    this.attachment = null;

    this.showImage = false
    this.showDialog = true;
    return true;
},
closeDialog(){
    this.showDialog = false
    this.loading = false
    return true;
},
closeEvent(){
   this.fireEvent(this.group+'-close-dialog')
}

},
mounted(){
    this.loadCategories()
    this.loadCities()
}
}
</script>

<style scoped>
label{
width:100%;
text-align: start;
}
.bx-img-gallary{
    padding:5px;
    margin-right:5px;
    margin-left:5px;
    height: 100px;
    width: 100px;
    position: relative;
    border: 1px solid;
    display: inline-block;
}
.list-add-gallary{
    max-width: 100%;
    overflow: auto;
    background: #80808042;
    width: 100%;
    height: 100px;
   
}
.list-add-gallary .bx-img-gallary .btn-close{
    position: absolute;
    background: #b41313f7;
    border: 0;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>