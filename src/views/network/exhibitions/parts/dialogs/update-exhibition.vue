<template>

    <d-dialog-large 
    :group="group" 
    :openDialog="openDialog" 
    :close-dialog="closeDialog"
    
    >
        <ValidationObserver v-if="showDialog" ref="form">
            <div class="form-exhibition row add-portfolio m-3 p-0 position-relatiuve">
                <div class="col-12 col-lg-5  justify-content-center mx-auto">
                    <div class="col-md-10">
                        <ValidationProvider :name="$t('Image')" 
                        vid="image"
                         rules="image"
                         
                         v-slot="{ validate, errors }">
                            <label for="imginput" class="form-label file-label first w-100">
                                <div class="text-center p-5">
                                    <img src="/assets/svg/empty-image.svg">

                                    <p class="m-c">{{ $t('add_image_exhibition') }}</p>
                                </div>
                                <div class="add-img-selected">

                                    <img class="w-100 h-100 image-selected-dialog" :src="showImage??'none'" :style="{opacity:showImage?'1':'0'}" :id="idImage" />
                                </div>
                            </label>

                            <input @change="uploadImage($event,validate) || validate($event)" class="form-control opacity-0"
                                type="file" id="imginput">
                            <div v-if="errors.length !== 0" class="col-12 text-input-error">
                                {{ errors[0] }}
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-10">
                        <div class="col-md-12">
                            <div class="text">
                                <ValidationProvider 
                                :name="$t('exhibition_map_file')" 
                                vid="mapfile" 
                                rules=""
                                    v-slot="{ validate, errors }">
                                    <label for="choose-file"
                                        class="custom-file-upload file-label  w-100 p-4 text-center d-flex justify-content-center m-auto"
                                        id="choose-file-label">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16.4388 28.4538C14.9854 28.4538 13.5321 27.9071 12.4254 26.8005C10.2121 24.5871 10.2121 21.0005 12.4254 18.7871L15.7321 15.4938C16.1188 15.1071 16.7588 15.1071 17.1454 15.4938C17.5321 15.8805 17.5321 16.5205 17.1454 16.9071L13.8388 20.2005C12.4121 21.6271 12.4121 23.9605 13.8388 25.3871C15.2654 26.8138 17.5988 26.8138 19.0254 25.3871L24.2121 20.2005C25.7854 18.6271 26.6521 16.5338 26.6521 14.3071C26.6521 12.0805 25.7854 9.98714 24.2121 8.4138C20.9587 5.16047 15.6788 5.16047 12.4254 8.4138L6.77208 14.0671C5.45208 15.3871 4.71875 17.1471 4.71875 19.0138C4.71875 20.8805 5.45208 22.6405 6.77208 23.9605C7.15875 24.3471 7.15875 24.9871 6.77208 25.3738C6.38542 25.7605 5.74542 25.7605 5.35875 25.3738C3.66542 23.6671 2.71875 21.4138 2.71875 19.0138C2.71875 16.6138 3.65208 14.3471 5.35875 12.6538L11.0121 7.00047C15.0388 2.9738 21.5988 2.9738 25.6254 7.00047C27.5721 8.94714 28.6521 11.5471 28.6521 14.3071C28.6521 17.0671 27.5721 19.6671 25.6254 21.6138L20.4388 26.8005C19.3321 27.9071 17.8921 28.4538 16.4388 28.4538Z"
                                                fill="#1FB9B3" />
                                        </svg>

                                        <p class="m-c m-0 p-0">
                                        {{ $t('attachment_exhibition_image') }}
                                        </p>
                                    </label>
                                    <input @change="uploadMap($event) || validate($event)" name="uploadDocument"
                                        type="file" id="choose-file"
                                
                                        accept=".jpg,.jpeg,.pdf,doc,docx,application/msword,.png" style="opacity: 0;" />
                                    <div v-if="errors.length !== 0" class="col-12 text-input-error">
                                        {{ errors[0] }}
                                    </div>
                                </ValidationProvider>


                            </div>


                        </div>
                    </div>
                    <div class="col-md-10">
                        <ValidationProvider 
                                :name="$t('details-enter-exhibition')" 
                                vid="details"  rules=""
                                    v-slot="{  errors }">
                        <d-ckeditor-classic 
                        v-model="itemForm.details"
                        :editorConfig='configEnter'
                        class="w-100 border t-c " 
                         rows="10"></d-ckeditor-classic>
                                 <div v-if="errors.length !== 0" class="col-12 text-input-error">
                                        {{ errors[0] }}
                                    </div>
                        </ValidationProvider>

                    </div>
                    <div class="col-md-10">
                        <div class="border p-3 text-center">

                            <h6>{{ $t('is_exhibition_available_for_shared') }}</h6>
                          
                                <ValidationProvider :name="$t('is_exhibition_available_for_shared')"
                                tag="div" 
                                vid="is_share"
                                class="d-flex justify-content-evenly   gap-2"
                                 rules="required"
                                    v-slot="{ errors }">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" :value="1" v-model="is_share" name="flexRadioDefault">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            {{$t('yes') }}
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" :value="0" v-model="is_share" name="flexRadioDefault"
                                            id="flexRadioDefault2" >
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            {{ $t('no') }}
                                        </label>
                                    </div>
                                    <div v-if="errors.length !== 0" class="col-12 text-input-error">
                                        {{ errors[0] }}
                                    </div>
                                </ValidationProvider>
                            
                        </div>
                    </div>


                </div>
                <div class="col-12 col-lg-7">
                    <div class="mb-3">
                        <ValidationProvider 
                        :name="$t('exhibition_title')" 
                        vid="title" 
                        rules="required" 
                        v-slot="{ errors }"
                        >
                        <label class="form-label">{{ $t('exhibition_title') }}</label>
                            <input type="text" class="form-control" 
                            v-model="itemForm.title"
                            :placeholder="hidePlaceholder?'': $t('exhibition_title')">
                            <div v-if="errors.length !== 0" class="col-12 text-input-error">
                                {{ errors[0] }}
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class="mb-3">
                        <ValidationProvider 
                        :name="$t('entry_price')" 
                        vid="price" 
                        rules="required|numeric" 
                        v-slot="{ errors }">
                        <label class="form-label">{{ $t('entry_price') }}</label>
                            <input type="text" v-model="itemForm.price" class="form-control" 
                            :placeholder="hidePlaceholder?'':$t('entry_price')">
                            <div v-if="errors.length !== 0" class="col-12 text-input-error">
                                {{ errors[0] }}
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class=" mb-3 row">
                    
                        <!-- date end-->
                        <div class="col-23 col-md-12">
                           
                                <div class="form-group position-relative">
                                    <label class="form-label">{{ $t('start_date_exhibition') }} - {{ $t('end_date_exhibition') }}</label>
                                    <date-picker-range 
                                    :valueStart.sync="itemForm.start_date"
                                    :valueEnd.sync="itemForm.end_date"
                                    :names="{start:$t('Start-date'),end:$t('End-date')}"
                                :vids="{start:'start_date',end:'end_date'}"
                                :rules="{start:'required',end:'required'}"
                                   mask="YYYY-MM-DD"
                                    mode="date"
                                    class="form-control"
                                    >
                                    </date-picker-range>
                                </div>
                                
                        </div>
                    </div>
                    <div class=" mb-3 row">
                    
                    <!-- time end-->
                    <div class="col-23 col-md-12">
                       
                            <div class="form-group position-relative">
                                <label class="form-label">{{ $t('start_time_exhibition') }} - {{ $t('end_time_exhibition') }}</label>
                                <date-picker-range 
                                :valueStart.sync="itemForm.start_time"
                                :valueEnd.sync="itemForm.end_time"
                                :names="{start:$t('Start-time'),end:$t('End-time')}"
                                :vids="{start:'start_time',end:'end_time'}"
                                :rules="{start:'required',end:'required'}"
                                mode="time"
                                mask="HH:mm"
                                class="form-control"
                                >
                                </date-picker-range>
                            </div>
                            
                    </div>
                </div>

                    <div class="mb-3">
                        <ValidationProvider :name="$t('the_city')" 
                        vid="region_id" 
                        rules="required" v-slot="{ errors }"
                        >
                        <label class="form-label">{{ $t('the_city') }}</label>
                        <multi-select v-model="region" 
                            :selectLabel="$t('selectLabel')"
                            :selectedLabel="$t('selectedLabel')" 
                            :deselectLabel="$t('deselectLabel')"
                            :options="cities" 
                            :multiple="false"  
                            :group-select="false" 
                            :placeholder="hidePlaceholder?'': $t('the_city')" 
                            :custom-label="(it)=>`${it.name}-${it.region?it.region.name:''}`"
                            track-by="id" 
                            label="name"
                            >
                                <span slot="noResult">{{ $t('no-result-search') }}</span>
                            </multi-select>
                            <div v-if="errors.length !== 0" class="col-12 text-input-error">
                                {{ errors[0] }}
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class="mb-3">
                        <ValidationProvider 
                        :name="$t('exhibition_map_url')" 
                        vid="address" rules="required"
                         v-slot="{ errors }"
                         >
                            <div class="form-group position-relative">
                                <label class="form-label">{{ $t('exhibition_map_url') }}</label>

                                <input type="text" class="form-control" 
                                    v-model="itemForm.address"
                                    :placeholder="hidePlaceholder?'': $t('exhibition_map_url')">
                            </div>
                            <div v-if="errors.length !== 0" class="col-12 text-input-error">
                                {{ errors[0] }}
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class="mb-3">
                        <ValidationProvider 
                        :name="$t('content')" 
                        vid="content" 
                        rules="required"
                         v-slot="{ errors }"
                         >
                        <d-ckeditor-classic 
                            class="form-control" 
                            rows="10"
                            :editorConfig="configContent"
                            v-model="itemForm.content"
                            placeholder="أكتب التفاصيل الخاصة بالمعرض ( عن المعرض و اهميته و المنتجات المعروضة به )">
                        </d-ckeditor-classic>
                        <div v-if="errors.length !== 0" class="col-12 text-input-error">
                                {{ errors[0] }}
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class="mb-3">
                        <ValidationProvider 
                        :name="$t('exhibition_categories')" 
                        vid="category_id" 
                        rules="required"
                         v-slot="{ errors }"
                         >
                         <div class="form-group">
                        <select v-model="itemForm.category_id"  class="form-select">
                            <option disabled value="" class="t-c" > {{ $t('exhibition_categories') }} </option>
                            <option :key="i" v-for="(option,i) in categories" :value="option.id">
                                {{ option.name }}
                            </option>

                        </select>
                    
                    </div>
                        <div v-if="errors.length !== 0" class="col-12 text-input-error">
                                {{ errors[0] }}
                            </div>
                    </ValidationProvider>
                    </div>

                </div>
                <div class="" ref="booth">
                    <div  v-if="is_share" >
                <h3>مشاركة الاعضاء في معرضك</h3>
                <p>بناء على خريطة موقعك حدد البوثات المتاحة للحجز واكتب اسعارها 
                </p>
             <!-- list boothes-->
             <div  v-for="(bn,i) in this.itemForm.booth_name" :key="'bo'+i" class="row  m-3 p-0 position-relatiuve">
                    <div class="col-12 col-md-5 col-lg-5">
                            <div  class="mb-3">
                                <ValidationProvider 
                                :name="$t('booth_name')" 
                                tag='div'
                                :vid="`booth_name.${i}`" 
                                rules="required"
                                v-slot="{ errors }"
                            >
                            <label class="form-label">{{ $t('booth_name') }}</label>
                                <input type="text" v-model="itemForm.booth_name[i]" class="form-control" placeholder="أدخل اسم البوث">
                           <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                            </div>
                    </div>
                    <div  class="col-12 col-md-3 col-lg-3">
                        <div  class="mb-3 d-flex">
                        <div>
                                <ValidationProvider 
                                :name="$t('rent_price')" 
                                tag='div'
                                :vid="`rental_price.${i}`" 
                                rules="required|numeric"
                                v-slot="{ errors }"
                            >
                            <label class="form-label">{{ $t('rent_price') }}</label>
                            <div class="position-relative d-flex">
                            <input type="text" v-model="itemForm.rental_price[i]" class="form-control" :placeholder="$t('rent_price')">
                            <div class="d-flex align-items-center">
                       </div>
                        </div>
                            <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                        </div>
                      
                    </div>
                    </div>
                    <div  class="col-12 col-md-4 col-lg-4">
                        <div  class="mb-3 d-flex">
                        <div>
                                <ValidationProvider 
                                :name="$t('insurance_price')" 
                                tag='div'
                                :vid="`insurance_price.${i}`" 
                                rules="required|numeric"
                                v-slot="{ errors }"
                            >
                            <label class="form-label">{{ $t('insurance_price') }}</label>
                            <div class="position-relative d-flex">
                            <input type="text" v-model="itemForm.insurance_price[i]" class="form-control" :placeholder="$t('insurance_price')">
                            <div class="d-flex align-items-center">
                        <button v-if="i!==0" @click="removeBooth(i)"
                        style="border: none;background: transparent;color: red;"
                        ><trashOutlineIcon color="red" :size="24"/></button>
                       </div>
                        </div>
                            <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                        </div>
                      
                    </div>
                    </div>
                </div>
                <!-- end list-->
                    <div class="row add-portfolio m-3 p-0 position-relatiuve">
                    
                    
                    <div  class="col-12 mb-3 ">
                        <button @click="addBooth" class="btn m-c border p-2 px-3 ">
                            المزيد من البوثات
                        </button>

                    </div>
                    <div>
                        <ValidationProvider 
                                :name="$t('observation_for_participant')" 
                                tag='div'
                                vid="notice_peoples" 
                                rules="required"
                                v-slot="{ errors }"
                            >
                            <label class="form-label">{{ $t('observation_for_participant') }}</label>
                        <textarea v-model="itemForm.notice_peoples" class="w-100 p-3 border"   rows="10" placeholder="أكتب تنويه للاشخاص المشاركين في المعرض "></textarea>
                        <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                    </div>

            
                </div>
                    </div>
            </div>
            </div>
        </ValidationObserver>
        <template v-slot:actions>
            <button @click="save" type="button" class="btn btn-main">
                {{  $t('publish-exhibition') }}
            </button>
        </template>
    </d-dialog-large>

</template>
<script>
import exhibitionsAPI from '@/services/api/exhibitions';
import commonAPI from '@/services/api/common';
import trashOutlineIcon from '@/components/icon-svg/trash-outline.vue';
export default {
components:{
    trashOutlineIcon
},

    data: (vm) => {
        return{
        group: 'update-dialog',
        showDialog: false,
        idImage: `image-selected-${vm.generateRandomString(8)}`,
        categories: [],
        cities:[],
        showImage:false,
        hidePlaceholder:true,
        tags: [],
        file: null,
        mapFile: null,
        configContent:{minHeight:"150px",
                            placeholder:"أكتب التفاصيل الخاصة بالمعرض ( عن المعرض و اهميته و المنتجات المعروضة به )"
                    },
        configEnter:{minHeight:"150px",placeholder:"أكتب تفاصيل الدخول الى المعرض والتعليمات العامة التي يجب مراعتها ان وجدت مثل ( لا يوجد ةغرف تغير ملابس ) (لا يوجد دفع غير كاش ) (يمنع اصطحاب الاطفال )"},
        region:null,
        is_share:0,
        itemForm: {
            content:'',
            region_id:'',
            address:'',
            price: '',
            start_date : '',
            end_date: '',
            category_id:null,
            title: '',
            start_time: '',
            end_time: '',
            details:'',
            is_share: 0,
        }
    }
},
watch:{
    is_share(){
        this.itemForm.is_share = this.is_share;
        if(this.is_share){
            this.$nextTick(()=>{
                this.gotoShare()
            })
        }
    }
},
    methods: {
        addBooth(){
         
         this.itemForm.booth_name.push(null)
         this.itemForm.rental_price.push(null)
         this.itemForm.insurance_price.push(null)
         
     },
     removeBooth(id){
         if(id==0) return ;
         this.itemForm.booth_name.splice(id,1)
         this.itemForm.rental_price.splice(id,1)
         this.itemForm.insurance_price.splice(id,1)
     },
        async save() {
            let valid = await this.$refs.form.validate();
            //console.log('save',valid)
            if (!valid) {
                console.log('form invalid');
                return;
            }
            let formData = new FormData();
            formData.append('content', this.itemForm.content);
            if(this.region)
            formData.append('region_id', this.region.id);
            formData.append('address', this.itemForm.address);
            formData.append('price', this.itemForm.price);
            formData.append('start_date', this.itemForm.start_date);
            formData.append('end_date', this.itemForm.end_date);
            formData.append('category_id', this.itemForm.category_id);
            formData.append('title', this.itemForm.title);
            formData.append('start_time', this.itemForm.start_time);
            formData.append('end_time', this.itemForm.end_time);
            formData.append('details', this.itemForm.details);
            formData.append('is_share', this.is_share);
            formData.append('image', this.file);
            formData.append('imageMap', this.mapFile);
            formData.append('user_id', this.user.id);
            formData.append('notice_peoples', this.itemForm.notice_peoples);
            this.itemForm.booth_name.forEach(name=>{
                formData.append('booth_name[]', name);
            })
            this.itemForm.rental_price.forEach(price=>{
                formData.append('rental_price[]', price);
            })
            this.itemForm.insurance_price.forEach(price=>{
                formData.append('insurance_price[]', price);
            })
            
            try {
                let { data } = await exhibitionsAPI.updateExhibition(this.itemForm.id,formData)
                if (data.success) {
                    //console.log('success', data)
                    this.$emit('success')
                    this.fireCloseDialog(this.group)
                }
            } catch (error) {
              console.log(error)
                if (error.response) {
                    let response = error.response
                    console.log('error', response)
                    if (response.status == 422) {
                        this.setErrorsForm(this.$refs.form,response)
                    }
                }

            }
        },
        makeImageEmpty(){
        this.file = null;
        this.showImage =  false;
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
                this.showImage =  e.target.result;
               /* window.$('#'+this.idImage)
                    .attr('src', e.target.result)
                    .css('opacity', '1');*/

            };
            reader.readAsDataURL(this.file);
        },
        uploadMap(evt) {
            this.mapFile = evt.target.files[0];
        },
        async loadBlogCategories() {
            try {
                let { data } = await this.$axios.get('/network/categories')
                if (data.success) {
                    this.categories = data.data
                }
            } catch (error) {
                console.log('error', error)
            }
        },
        openDialog(dataItem) {
           let {post_member,...restDat} =dataItem 
            this.itemForm=Object.assign({
                booth_name:[null],
                rental_price:[null],
                insurance_price:[null],
            notice_peoples:'',
                content:'',
            region_id:'',
            address:'',
            price: '',
            start_date : '',
            end_date: '',
            category_id:null,
            title: '',
            start_time: '',
            end_time: '',
            details:'',
            is_share: 0,
        },restDat)
        this.is_share = restDat.is_share
        if(post_member){
            let {booth_name,rental_price,notice_peoples,insurance_price} = post_member
        this.itemForm.booth_name=booth_name;
        this.itemForm.rental_price=rental_price;
        this.itemForm.notice_peoples=notice_peoples;
        this.itemForm.insurance_price = insurance_price
        }
        
       
        this.region = this.cities.find(x=>x.id==this.itemForm.region_id)
        this.file = null;
        this.showImage = dataItem.image;
            /*window.$('#'+this.idImage)
                    .attr('src', 'none')
                    .css('opacity', '0');*/
            this.showDialog = true;
            return true;
        },
        closeDialog() {
            console.log('close ')
            this.showDialog = false
            return true;
        },
        async loadCities() {
            try {
                let { data } = await commonAPI.cities()
                if (data.success) {
                    this.cities = data.data
                }
            } catch (error) {
                console.log('error', error)
            }
        },
        gotoShare(){
    
      this.$nextTick(()=>{
        var element = this.$refs["booth"];
        var top = element.offsetTop;
        var div = document.getElementsByClassName('form-exhibition')[0]
       // window.$('.form-exhibition').scrollTop(top);
       //console.log('gottoshare',top,div)
       div.scrollTo(0, top-50);
      })

        }
    },
    mounted() {
        this.loadCities()
        this.loadBlogCategories()
    }
}
</script>

<style scoped>
label {
    width: 100%;
    text-align: start;
}
@media screen and (max-width:600px){
    .form-label{
        font-size: 0.8rem;
    }
    .form-control {
    font-size: .8rem;
    }
}
</style>
<style>
.form-exhibition .vc-time-picker .vc-date-time .vc-date{
    display: none !important;
}
</style>