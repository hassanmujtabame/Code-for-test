<template>

    <d-dialog-large 
    :group="group" 
    :openDialog="openDialog" 
    :close-dialog="closeDialog"
    
    >
        <ValidationObserver ref="form">
            <div class="form-exhibition row add-portfolio m-3 p-0 position-relatiuve">
                <div class="col-12 col-lg-5  justify-content-center mx-auto">
                    <div class="col-md-10">
                        <ValidationProvider :name="$t('Image')" vid="image" rules="required|image" v-slot="{ validate, errors }">
                            <label for="imginput" class="form-label file-label first w-100">
                                <div class="text-center p-5">
                                    <img src="/assets/svg/empty-image.svg">

                                    <p class="m-c">{{ $t('add-display-image') }} </p>
                                </div>
                                <div class="add-img-selected">

                                    <img class="w-100 h-100 image-selected-dialog" :src="showImage??'none'" :style="{opacity:showImage?'1':'0'}" :id="idImage" />
                                </div>
                            </label>

                            <input @change="uploadImage($event,validate) || validate($event)" class="form-control opacity-0"
                                type="file" id="imginput" style="display:none">
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
                                            أرفق خريطة المعرض
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
                                :name="$t('details-enter')" 
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
                        <div class="border mt-2 p-3 text-center">

                            <h6>{{$t('is_exhibition_available_for_sharing')}}</h6>
                           
                                <ValidationProvider :name="$t('is_exhibition_available_for_sharing')"
                                 vid="is_share"
                                 rules="required"
                                 tag="div"
                                 class="d-flex justify-content-evenly   gap-2"
                                    v-slot="{ errors }">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" :value="1" v-model="itemForm.is_share" name="flexRadioDefault">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            {{$t('yes')}}
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" :value="0" v-model="itemForm.is_share" name="flexRadioDefault"
                                            id="flexRadioDefault2" >
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            {{$t('no')}}
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
                        <label class="form-label">{{$t('exhibition_title')}}</label>
                            <input type="text" class="form-control" 
                            v-model="itemForm.title"
                            :placeholder="hidePlaceholder?'':$t('exhibition_title')">
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
                            <input type="text" v-model="itemForm.price" class="form-control" :placeholder="hidePlaceholder?'':$t('entry_price')">
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

                    <div class="mb-3 position-relative">
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
                            :placeholder="hidePlaceholder?'':$t('the_city')" 
                            :custom-label="(it)=>`${it.name}-${it.region.name}`"
                            track-by="id" label="name">
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
                                    :placeholder="hidePlaceholder?'':$t('exhibition_map_url')">
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
                            v-model="itemForm.content"
                            :editorConfig='configContent'
                            >
                        </d-ckeditor-classic>
                        <div v-if="errors.length !== 0" class="col-12 text-input-error">
                                {{ errors[0] }}
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class="mb-3 position-relative">
                        <ValidationProvider 
                        :name="$t('exhibition_categories')" 
                        vid="category_id" 
                        rules="required"
                         v-slot="{ errors }"
                         >
                         <div class="form-group position-relative">
                            <label class="form-label">{{ $t('exhibition_categories') }}</label>
                        <select v-model="itemForm.category_id"  class="form-control" :plaeholder="$t('exhibition_categories')">
                            <option disabled :value="null"  class="t-c" selected>{{ $t('exhibition_categories') }}</option>
                            <option :key="i" v-for="(option,i) in categories" :value="option.id">
                                {{ option.name }}
                            </option>
                        </select>
                        <div style="top: 7px;left: 10px;" class="position-absolute">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"
                                    fill="#737373" />
                            </svg>

                        </div>
                    </div>
                        <div v-if="errors.length !== 0" class="col-12 text-input-error">
                                {{ errors[0] }}
                            </div>
                    </ValidationProvider>
                    </div>

                </div>
            </div>
        </ValidationObserver>
        <template v-slot:actions>
            <button @click="save" type="button" class="btn btn-main">
             {{$t("publish-exhibition")}}
            </button>
        </template>
    </d-dialog-large>

</template>
<script>
import exhibitionsAPI from '@/services/api/exhibitions';
import commonAPI from '@/services/api/common';
export default {

    data: (vm) => {
        return{
        group: 'add-dialog',
        showDialog: false,
        idImage: `image-selected-${vm.generateRandomString(8)}`,
        categories: [],
        cities:[],
        showImage:false,
        tags: [],
        file: null,
        mapFile: null,
        hidePlaceholder:true,
        configContent:{minHeight:"150px",
                            placeholder:"أكتب التفاصيل الخاصة بالمعرض ( عن المعرض و اهميته و المنتجات المعروضة به )"
                    },
        configEnter:{minHeight:"150px",placeholder:"أكتب تفاصيل الدخول الى المعرض والتعليمات العامة التي يجب مراعتها ان وجدت مثل ( لا يوجد ةغرف تغير ملابس ) (لا يوجد دفع غير كاش ) (يمنع اصطحاب الاطفال )"},
        region:null,
        itemForm: {
            content:'',
            region_id:null,
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
    methods: {
        async save() {
            let valid = await this.$refs.form.validate();
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
            formData.append('is_share', this.itemForm.is_share);
            formData.append('image', this.file);
            formData.append('imageMap', this.mapFile);
            formData.append('user_id', this.user.id);

            try {
                let { data } = await exhibitionsAPI.addExhibition(formData)
                if (data.success) {
                    console.log('success', data)
                    this.fireOpenDialog('success-add-exhibition',data.data)
                    this.fireCloseDialog(this.group)
                }
            } catch (error) {
                //
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
        openDialog() {
            this.itemForm= {
                content:'',
                region_id:null,
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
        this.file = null;
        this.showImage = false;
            this.showDialog = true;
            return true;
        },
        closeDialog() {
            console.log('close ')
            this.showDialog = false
            return true;
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
</style>
<style>
.form-exhibition .vc-time-picker .vc-date-time .vc-date{
    display: none !important;
}
</style>