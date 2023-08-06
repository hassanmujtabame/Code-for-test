<template>
    <div style="margin-top: 96px;">
        <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
        <div  v-else class="container exhibition-page">
            <div class=" ">
               <div class="alert bgc-warning c-opacity-10">
                <div class="border-bottom  border-dark">
                    <h3 class="text-warning-message p-3">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 34.4167C27.0433 34.4167 26.25 33.6233 26.25 32.6667V21C26.25 20.0433 27.0433 19.25 28 19.25C28.9567 19.25 29.75 20.0433 29.75 21V32.6667C29.75 33.6233 28.9567 34.4167 28 34.4167Z" fill="currentColor"/>
                            <path d="M27.9974 42.0006C27.8574 42.0006 27.6941 41.9773 27.5307 41.954C27.3907 41.9306 27.2507 41.884 27.1107 41.814C26.9707 41.7673 26.8307 41.6973 26.6907 41.604C26.5741 41.5106 26.4574 41.4173 26.3407 41.324C25.9207 40.8806 25.6641 40.274 25.6641 39.6673C25.6641 39.0606 25.9207 38.454 26.3407 38.0106C26.4574 37.9173 26.5741 37.824 26.6907 37.7306C26.8307 37.6373 26.9707 37.5673 27.1107 37.5206C27.2507 37.4506 27.3907 37.404 27.5307 37.3806C27.8341 37.3106 28.1607 37.3106 28.4407 37.3806C28.6041 37.404 28.7441 37.4506 28.8841 37.5206C29.0241 37.5673 29.1641 37.6373 29.3041 37.7306C29.4207 37.824 29.5374 37.9173 29.6541 38.0106C30.0741 38.454 30.3307 39.0606 30.3307 39.6673C30.3307 40.274 30.0741 40.8806 29.6541 41.324C29.5374 41.4173 29.4207 41.5106 29.3041 41.604C29.1641 41.6973 29.0241 41.7673 28.8841 41.814C28.7441 41.884 28.6041 41.9306 28.4407 41.954C28.3007 41.9773 28.1374 42.0006 27.9974 42.0006Z" fill="#currentColor"/>
                            <path d="M42.1404 51.7063H13.8604C9.31043 51.7063 5.83377 50.0496 4.06043 47.063C2.31043 44.0763 2.54377 40.2263 4.76043 36.2363L18.9004 10.803C21.2338 6.60297 24.4538 4.29297 28.0004 4.29297C31.5471 4.29297 34.7671 6.60297 37.1004 10.803L51.2404 36.2596C53.4571 40.2496 53.7138 44.0763 51.9404 47.0863C50.1671 50.0496 46.6904 51.7063 42.1404 51.7063ZM28.0004 7.79297C25.8071 7.79297 23.6604 9.47297 21.9571 12.5063L7.84043 37.963C6.25377 40.8096 5.9971 43.423 7.09377 45.313C8.19043 47.203 10.6171 48.2296 13.8838 48.2296H42.1638C45.4304 48.2296 47.8338 47.203 48.9538 45.313C50.0738 43.423 49.7938 40.833 48.2071 37.963L34.0438 12.5063C32.3404 9.47297 30.1938 7.79297 28.0004 7.79297Z" fill="currentColor"/>
                            </svg>
                            تنويهات صاحب المعرض
                    </h3>
                </div>
                <p>
                    ممكن هنا يكتب صاحب  المعرض زي نقاط مهمة او المعايير اللي هيقبل بيها الاشخاص او العقد هيمشي ازاي وكل التفاصيل الي عايز يقولها للناس اللي عايزا تقدمممكن هنا يكتب صاحب  المعرض زي نقاط مهمة او المعايير اللي هيقبل بيها الاشخاص او العقد هيمشي ازاي وكل التفاصيل الي عايز يقولها للناس اللي عايزا تقدمممكن هنا يكتب صاحب  المعرض زي نقاط مهمة او المعايير اللي هيقبل بيها الاشخاص او العقد هيمشي ازاي وكل التفاصيل الي عايز يقولها للناس اللي عايزا تقدمممكن هنا يكتب صاحب  المعرض زي نقاط مهمة او المعايير اللي هيقبل بيها الاشخاص او العقد هيمشي ازاي وكل التفاصيل الي عايز يقولها للناس اللي عايزا تقدم
                </p>

               </div>
     
            </div>
            <div class="row mt-5">
                <div class=" col-12 col-md-8">
                    <div class="border p-4">
                        <h3 class=" p-2">
                            إستمارة المشاركة 
                            <span class="m-c">

                                في {{itemPage.title}}
                            </span>
                        </h3>
                        <hr>
                        <ValidationObserver ref="form" >
                            <div class="mb-3">
                                <ValidationProvider 
                                :name="$t('your_own_booth_name')"
                                vid="brand_name"
                                rules="required"
                                v-slot="{errors}"
                                >
                                <label class="form-label">{{ $t('your_own_booth_name') }}</label>
                                <input type="text" v-model="itemForm.brand_name" class="form-control border p-2 rounded-2" 
                                placeholder=" أسم علامتك التجارية او محلك">
                            <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                            </div>
                            <div class="mb-3">
                                <ValidationProvider 
                                :name="$t('product_types')"
                                vid="type_products"
                                rules="required"
                                v-slot="{errors}"
                                >
                                <label class="form-label">{{ $t('product_types') }}</label>
                                <input type="text" v-model="itemForm.type_products" class="form-control border p-2 rounded-2" placeholder="أدخل اكثر من 5 بينهم فاصلة ">
                            <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>

                            </div>
                            <div class="mb-3">
                                <ValidationProvider 
                                :name="$t('resume_what_you_serve')"
                                vid="desc"
                                rules="required"
                                v-slot="{errors}"
                                >
                                <label class="form-label">{{ $t('resume_what_you_serve') }}</label>
                                <textarea  v-model="itemForm.desc"  class=" w-100 border p-2 rounded-2" rows="10" placeholder="أكتب نبذه عن ماذا تريد ان تقدم"></textarea>
                                <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                            </div>
                            <div class="mb-3">

                                <ValidationProvider 
                                :name="$t('number_people')"
                                vid="number_persons"
                                rules="required"
                                v-slot="{errors}"
                                >
                                <label class="form-label">{{ $t('number_people') }}</label>
                                <div class="mb-3">
                                    <select v-model="itemForm.number_persons" class="form-select ">
                                        <option value="" class="t-c" selected> عدد  الاشخاص </option>
                                        <option v-for="n in 10" :key="n" :value="n">{{n}}</option>
                                    </select>
                                </div>
                                <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                            </div>
                            <div class="mb-3">
                                <ValidationProvider 
                                :name="$t('booth')"
                                vid="booking_type"
                                rules="required"
                                v-slot="{errors}"
                                >
                                <label class="form-label">{{ $t('booth') }}</label>
                                <div class="mb-3">
                                    <select v-model="booking_type" class="form-select ">
                                        <option value="" class="t-c" disabled selected>   اختر البوث الذي تريد حجزه من البوثات المتاحة  </option>
                                        <template v-if="itemPage.post_member">
                                        <option v-for="(booth,i) in itemPage.post_member.booth_name" :key="i" :value="(i+1)">{{ booth }}</option>
                                    </template>
                                    </select>
                                  
                                </div>
                                <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                            </div>
                            <div class="mb-3">
                                <ValidationProvider 
                                :name="$t('number_days')"
                                vid="number_days_booking"
                                rules="required"
                                v-slot="{errors}"
                                >
                                <label class="form-label">{{ $t('number_days') }}</label>
                                <div class="mb-3">
                                    <select v-model="itemForm.number_days_booking" class="form-select ">
                                        <option value="" class="t-c" disabled selected>  عدد الايام الذي تريد حجزها </option>
                                        <option v-for="n in 30" :key="n" :value="n">{{n}}</option>
                                    </select>
                                </div>
                                <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                            </div>
                            <div class="mb-3">
                                <ValidationProvider 
                                :name="$t('exhibition_attechment')"
                                vid="media"
                                rules="required|ext:mp4,jpeg,jpg,png,bmp"
                                v-slot="{errors,validate}"
                                >
                              
                                <div class="d-flex upload-request-file form-control align-items-center  mb-3">
                                    <label for="fileinput1" class="form-label">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.3291 21.3404C11.2391 21.3404 10.1491 20.9304 9.31906 20.1004C7.65906 18.4404 7.65906 15.7504 9.31906 14.0904L11.7991 11.6204C12.0891 11.3304 12.5691 11.3304 12.8591 11.6204C13.1491 11.9104 13.1491 12.3904 12.8591 12.6804L10.3791 15.1504C9.30906 16.2204 9.30906 17.9704 10.3791 19.0404C11.4491 20.1104 13.1991 20.1104 14.2691 19.0404L18.1591 15.1504C19.3391 13.9704 19.9891 12.4004 19.9891 10.7304C19.9891 9.06035 19.3391 7.49035 18.1591 6.31035C15.7191 3.87035 11.7591 3.87035 9.31906 6.31035L5.07906 10.5504C4.08906 11.5404 3.53906 12.8604 3.53906 14.2604C3.53906 15.6604 4.08906 16.9804 5.07906 17.9704C5.36906 18.2604 5.36906 18.7404 5.07906 19.0304C4.78906 19.3204 4.30906 19.3204 4.01906 19.0304C2.74906 17.7504 2.03906 16.0604 2.03906 14.2604C2.03906 12.4604 2.73906 10.7604 4.01906 9.49035L8.25906 5.25035C11.2791 2.23035 16.1991 2.23035 19.2191 5.25035C20.6791 6.71035 21.4891 8.66035 21.4891 10.7304C21.4891 12.8004 20.6791 14.7504 19.2191 16.2104L15.3291 20.1004C14.4991 20.9304 13.4191 21.3404 12.3291 21.3404Z" fill="#737373"/>
                                            </svg>
                                    </label>

                                    <input class="form-control d-none" type="file" @change="uploadImage($event,validate) || validate($event)" id="fileinput1">
                                    <span id="selected_filename" class="mx-3 gray font-13 ">
                                        ارفق صور و فيدوهات لمنتجاتك او لبوثاتك السابقة
                                    </span>
                                </div>
                                <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                            </div>
                            <div class=" mb-3">
                                
                                <div class="d-flex">
                                    <div class="d-flex">
                                        <p style="background-color:#414042 ;" class="px-2 py-3 border text-white ">
                                            سعر الايجار
                                        </p>
                                        <ValidationProvider 
                                :name="$t('exhibition_rent_price')"
                                vid="rental_price"
                                v-slot="{errors}"
                                >
                                        <input type="text" disabled :value="itemForm.rental_price" class="p-3 w-50 h-75 border-0 bg-light" name="" id="" placeholder="2500ريال">
                                        <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                                    </div>
                                    <div class="d-flex">
                                        <p style="background-color:#F2631C ;" class="px-2 py-3 border text-white ">
                                            سعر التأمين
                                        </p>
                                        <ValidationProvider 
                                :name="$t('exhibition_insurance_price')"
                                vid="insurance_price"
                                rules=""
                                v-slot="{errors}"
                                >
                                        <input type="text" disabled :value="itemForm.insurance_price" class="p-3 w-50 h-75 border-0 bg-light" name="" id="" placeholder="2500ريال">
                                        <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <button class="btn bg-main px-5 py-3 text-white" @click="save">
                                    ارسل الاستمارة
                                </button>
                            </div>
                        </ValidationObserver>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                                <d-user-info-li-exhibitions v-if="!isOwner" sizeImage="100" :member="itemPage" />
                <!--details-exhibition-->
                <detailsExhibitionSection :itemPage="itemPage" />
                <successSharedExhibitionDialog />
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import exhibitionsAPI from '@/services/api/exhibitions';
import detailsExhibitionSection from './details-exhibition.vue';
import successSharedExhibitionDialog from '../../exhibitions/parts/dialogs/success-shared-exhibition.vue';
export default {
 name:'share-exhibition',
 components:{
    detailsExhibitionSection,
    successSharedExhibitionDialog
 },
  data:()=>{
    return {
        boothes:[
            {id:1,name:'تجريب'}
        ],
      isOwner:false,
      loading:true,
      hasError:false,
      itemPage:{},
      booking_type:null,
      itemForm:{
        brand_name:'',
        booking_type:'',
        type_products:'',
        desc:'',
        number_persons:0,
        number_days_booking:0,
        media:null,
        rental_price:0,
        insurance_price:0
      },
      colors:['#F2631C','#FFBC00','#2C98B3']
  }},
  watch:{
    booking_type(){
        
        if(this.booking_type){
            this.itemForm.booking_type = this.itemPage.post_member.booth_name[this.booking_type-1];
            this.itemForm.rental_price =  this.itemPage.post_member.rental_price[this.booking_type-1];
            this.itemForm.insurance_price =  this.itemPage.post_member.insurance_price[this.booking_type-1];
        }else{
            this.itemForm.rental_price = 0;
            this.itemForm.insurance_price = 0;
            this.itemForm.booking_type = null;
        }
    }
  },
  methods:{
    openSuccessSharedDialog(){
        this.fireOpenDialog('success-shared-exhibition')
    },
    async save() {
            let valid = await this.$refs.form.validate();
            if (!valid) {
                console.log('form invalid');
                return;
            }
            let formData = new FormData();
            Object.keys(this.itemForm).forEach(key=>{
                formData.append(key,this.itemForm[key])
            })
            formData.append('exhibition_id',this.$route.params.id)
            try {
                let { data } = await exhibitionsAPI.shareExhibition(formData)
                if (data.success) {
                    this.openSuccessSharedDialog()
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
    convertTime(time){
        if(!time) return time;
   return time.substring(0,5)
    },
    openShareDialog(){
      this.fireOpenDialog('share-exhibition',this.itemPage)
    },
    openEditDialog(){
      this.fireOpenDialog('update-dialog',this.itemPage)
    },
    openDeleteDialog(){
      this.fireOpenDialog('delete-dialog',this.itemPage)
    },
    makeImageEmpty(){
        this.itemForm.media = null;
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
        
            this.itemForm.media = evt.target.files[0];
        },
    async initializing() {
      this.loading = true;
      this.hasError = false;
            try {
                let { data } = await exhibitionsAPI.getItem(this.$route.params.id)
                if (data.success) {
                   this.itemPage = data.data;
                   this.itemPage.start_time = this.convertTime(this.itemPage.start_time)
                   this.itemPage.end_time = this.convertTime(this.itemPage.end_time)
                   this.isOwner = this.itemPage.user_info.id==this.user.id
                }else{
                  this.hasError = true;
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
                this.hasError = true;
              }

            this.loading = false;
        }
  },
  mounted(){
    this.initializing()
  }
}
</script>

<style>

</style>