<template>
    <d-dialog-large :xl="false" 
    :group="group"
    :open-dialog="openDialog"
    :close-dialog="closeDialog"
    >
    <template v-slot:header>
            {{ itemForm.id?$t('modification-course'):$t('add-your-new-course') }}
        </template>
    <template v-slot:default>
        <div v-if="showDialog" ref="form" tag="div">
        <ValidationObserver class="form-step" ref="form1" id="form-step-1" v-show="step==1">
            <!--number_day-->
            <div class="mt-3">
                    <!-- <keep-alive> -->
                    <ValidationProvider :name="$t('num_days')"
                    vid="number_day"
                    rules="required|numeric"
                    v-slot="{errors}"
                    v-if="step==1"
                    >
                    <d-text-input type="text" :errors="errors"  v-model="itemForm.number_day" label="عدد ايام الدورة " />
                </ValidationProvider>
            <!-- </keep-alive> -->
                </div>
                <!--course_days-->
                <div class="mt-3">
                    <!-- <keep-alive> -->
                    <ValidationProvider :name="$t('days_week')"
                    vid="course_days"
                    rules="required"
                    v-slot="{errors}"
                    v-if="step==1"
                    >
                    <d-multiselect-input :errors="errors" label="ايام الدورة ( حددي ايام الاسبوع )" :opts="daysOfWeek" 
                                track-id="id" label-name="name"
                                v-model="itemForm.course_days"
                                multi-select
                                placeholder="ايام الدورة ( حددي ايام الاسبوع )"
                                />
                </ValidationProvider>
            <!-- </keep-alive> -->
                </div>
                <!--start_date-->
                <div class="mt-3">
                    <!-- <keep-alive> -->
                    <ValidationProvider :name="$t('start_date_course')"
                    vid="start_date"
                    rules="required"
                    v-slot="{errors}"
                    v-if="step==1"
                    >
                    <d-datepicker-input  v-model="itemForm.start_date" label="موعد بداية الدورة" />
                <d-error-input :errors="errors" v-if="errors && errors.length>0" />
                
                </ValidationProvider>
            <!-- </keep-alive> -->
                </div>
                  <!-- time -->
                  <div class="col-23 col-md-12">
                        <div class="form-group position-relative">
                            <label class="form-label">{{ $t('start-time-course') }} - {{ $t('end-time-course') }}</label>
                            <date-picker-range :valueStart.sync="itemForm.start_time" :valueEnd.sync="itemForm.end_time"
                                :names="{ start: $t('Start-time'), end: $t('End-time') }"
                                :vids="{ start: 'start_time', end: 'end_time' }" :rules="{ start: 'required', end: 'required' }"
                                mode="time" mask="HH:mm" class="form-control time-input">
                            </date-picker-range>
                        </div>
                    </div>
                <!--type_certificate -->
                <div class="mt-3">
                    <!-- <keep-alive> -->
                    <ValidationProvider :name="$t('type_certificate_for_student')"
                    vid="type_certificate"
                    rules="required"
                    v-slot="{errors}"
                    v-if="step==1"
                    >
                
                <d-multiselect-input :errors="errors" label="نوع الشهادة التي تمنح للطلاب" :opts="type_certificates" 
                                track-id="id" label-name="name"
                                v-model="itemForm.type_certificate"
                                multi-select
                                seperate=" - "
                                />
                </ValidationProvider>
            <!-- </keep-alive> -->
                </div>
        <!--price-->
        <div class="mb-3">
                <!-- <keep-alive> -->
                <ValidationProvider :name="$t('course-price')"
                    vid="price"
                    rules="required|numeric"
                    v-slot="{errors}"
                    v-if="step==1"
                    >
                <d-text-input type="text" :errors="errors"  v-model="itemForm.price"  :label="$t('course-price')" />
            </ValidationProvider>
        <!-- </keep-alive> -->
            </div>
            </ValidationObserver>
        <ValidationObserver class="form-step" ref="form2" id="form-step-2" v-show="step==2">
            <!--title-->
            <div class="mb-3">
                <!-- <keep-alive> -->
                <ValidationProvider :name="$t('course-title')"
                    vid="title"
                    rules="required"
                    v-slot="{errors}"
                    v-if="step==2"
                    >
                <d-text-input type="text" :errors="errors"  v-model="itemForm.title"  label="عنوان الدورة " />
            </ValidationProvider>
        <!-- </keep-alive> -->
            </div>
            <!--department_id-->
            <div class="mb-3 position-relative">
                <!-- <keep-alive> -->
                <ValidationProvider :name="$t('course-domain')"
                    vid="department_id"
                    rules="required"
                    v-slot="{errors}"
                    v-if="step==2"
                    >
                <d-select-input :errors="errors" v-model="itemForm.department_id" label="حدد مجال الدورة " >
                    <option value="" class="t-c" selected disabled>حدد مجال الدورة  </option>
                    <option  class="t-c" v-for="(dept,i) in departments" :key="i" :value="dept.id"> {{ dept.name }}</option>
                  
                </d-select-input>
            </ValidationProvider>
        <!-- </keep-alive> -->
            </div>
             
            <!--type_training-->
            <div class="mb-3 position-relative">
                <!-- <keep-alive> -->
                <ValidationProvider :name="$t('type-training')"
                    vid="type_training"
                    rules="required"
                    v-slot="{errors}"
                    v-if="step==2"
                    >
                <d-select-input :errors="errors" v-model="itemForm.type_training" label="حدد نوع التريب" >
                    <option value="" class="t-c" selected disabled>حدد نوع التريب</option>
                    <option  class="t-c"  value="prive"> {{ $t('prive') }}</option>
                    <option  class="t-c"  value="public"> {{ $t('public') }}</option>
                  
                </d-select-input>
            </ValidationProvider>
        <!-- </keep-alive> -->
            </div>
            <!--meeting_url-->
            <div class="mb-3">
                <!-- <keep-alive> -->
                <ValidationProvider :name="$t('course-meeting-url')"
                    vid="meeting_url"
                    rules="required"
                    v-slot="{errors}"
                    v-if="step==2"
                    >
                    <d-text-input type="text" :errors="errors"  v-model="itemForm.meeting_url"  label="رابط الدورة على زوم او جوجل ميت " />
                </ValidationProvider>
            <!-- </keep-alive> -->
                    </div>
                    <!--has exam-->
            <div class="mb-3 position-relative">
                <!-- <keep-alive> -->
                <ValidationProvider :name="$t('course-add-exam')"
                    vid="has_exam"
                    rules="required"
                    v-slot="{errors}"
                    v-if="step==2"
                    >
                <d-select-input :errors="errors"  v-model="itemForm.has_exam" label="إضافة اختبار" >
                    <option value="" class="t-c" selected disabled>إضافة اختبار</option>
                    <option :value="1">نعم</option>
                    <option :value="0">لا</option>
                </d-select-input>
            </ValidationProvider>
        <!-- </keep-alive> -->
            </div>
            <!--short_description course-->
            <div class="mb-3">
                <!-- <keep-alive> -->
                <ValidationProvider :name="$t('course-bio')"
                    vid="short_description"
                    rules="required"
                    v-slot="{errors}"
                    v-if="step==2"
                    >
                    <d-textarea-input type="text" :errors="errors" 
                    rows="3" 
                    v-model="itemForm.short_description"  :label="$t('course-bio')" />
                </ValidationProvider>
            <!-- </keep-alive> -->
                    </div>
                    <!-- image course-->
            <div class="mb-3">
                <div class="d-flex upload-request-file form-control align-items-center border-0  mb-3">
                    <!-- <keep-alive> -->
                    <ValidationProvider 
                            :name="$t('add-display-image')"
                            vid="image"
                            :rules="itemForm.id?'image':'required|image'"
                            v-slot="{errors,validate}"
                            v-if="step==2">

                    <label for="fileinput1" class="form-label">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.2566 22.2483H8.73656C3.82656 22.2483 1.72656 20.1483 1.72656 15.2383V15.1083C1.72656 10.6683 3.47656 8.52832 7.39656 8.15832C7.79656 8.12832 8.17656 8.42832 8.21656 8.83832C8.25656 9.24832 7.95656 9.61832 7.53656 9.65832C4.39656 9.94832 3.22656 11.4283 3.22656 15.1183V15.2483C3.22656 19.3183 4.66656 20.7583 8.73656 20.7583H15.2566C19.3266 20.7583 20.7666 19.3183 20.7666 15.2483V15.1183C20.7666 11.4083 19.5766 9.92832 16.3766 9.65832C15.9666 9.61832 15.6566 9.25832 15.6966 8.84832C15.7366 8.43832 16.0866 8.12832 16.5066 8.16832C20.4866 8.50832 22.2666 10.6583 22.2666 15.1283V15.2583C22.2666 20.1483 20.1666 22.2483 15.2566 22.2483Z" fill="#1FB9B3"/>
                            <path d="M12 15.7511C11.59 15.7511 11.25 15.4111 11.25 15.0011V3.62109C11.25 3.21109 11.59 2.87109 12 2.87109C12.41 2.87109 12.75 3.21109 12.75 3.62109V15.0011C12.75 15.4111 12.41 15.7511 12 15.7511Z" fill="#1FB9B3"/>
                            <path d="M15.3538 6.60141C15.1638 6.60141 14.9738 6.53141 14.8238 6.38141L12.0038 3.56141L9.18375 6.38141C8.89375 6.67141 8.41375 6.67141 8.12375 6.38141C7.83375 6.09141 7.83375 5.61141 8.12375 5.32141L11.4738 1.97141C11.7638 1.68141 12.2438 1.68141 12.5338 1.97141L15.8838 5.32141C16.1738 5.61141 16.1738 6.09141 15.8838 6.38141C15.7438 6.53141 15.5438 6.60141 15.3538 6.60141Z" fill="#1FB9B3"/>
                            </svg>
                    </label>
                    <input style="z-index: 99;" @change="uploadImage($event,validate) || validate($event)" class="form-control opacity-0 position-absolute  " type="file" id="fileinput1">
                    <span id="selected_filename" class="mx-3 px-4 gray font-13 border-0  position-absolute m-c">
                        أضف صورة للعرض
                    </span>
                <d-error-input :errors="errors" v-if="errors && errors.length>0" />
                        <img id="add-course-image" class="mt-3" height="100" width="100" />
                </ValidationProvider>
            <!-- </keep-alive> -->
                </div>
            </div>
    
        </ValidationObserver>
        <ValidationObserver class="form-step" ref="form3" id="form-step-3" v-show="step == 3">
             <!--desc course-->
             <div class="mb-3">
                <!-- <keep-alive> -->
                <ValidationProvider :name="$t('course-description')"
                    vid="desc"
                    rules="required"
                    v-slot="{errors}"
                    v-if="step==3"
                    >
                    <d-textarea-input type="text" :errors="errors" 
                    rows="5" 
                    v-model="itemForm.desc"  :label="$t('course-description')" />
                </ValidationProvider>
            <!-- </keep-alive> -->
                    </div>
                    <!-- what you will learn -->
                    <div class="mb-3" v-if="itemForm.learn.length < 2">
                        <ValidationProvider :name="$t('what-you-will-learn')" :vid="`learn`" :rules="step == 3 ? 'required' : ''"
                            v-slot="{ errors }">
                            <d-text-input type="text" :errors="errors" v-model="itemForm.learn[0]"
                                :label="$t('what-you-will-learn')" />
                        </ValidationProvider>
                    </div>
                    <template v-else>
                        <div class="mb-3" v-for="l in itemForm.learn.length" :key="l">
                            <ValidationProvider :name="$t('what-you-will-learn')" :vid="`learn-${l}`"
                                :rules="step == 3 ? 'required' : ''" v-slot="{ errors }">
                                <d-text-input type="text" :errors="errors" v-model="itemForm.learn[l-1]"
                                    :label="$t('what-you-will-learn')" >
                                    <template v-slot:append-icon>
                                        <i class="fa fa-trash-can c-danger clickable" @click="deleteLearn(l-1)"></i>
                                    </template>
                                    </d-text-input>
                            </ValidationProvider>
                        </div>
                    </template>
                    <!-- </keep-alive> -->
                    <div class="mb-3">
                <a class="text-underline m-c" href="#" @click="addLearnItem">
                    أضف نقطة اخرى
                </a>
            </div>
        </ValidationObserver>
    </div>
            </template>
            <template v-slot:actions>
                <button :disabled="step==1"  @click="prevStep" class="btn bg-main btn-danger text-white px-3" >رجوع</button>
              <button @click="save" class="btn bg-main text-white px-3" >
                <i v-if="loading" class="fa fa-spinner fa-spin" aria-hidden="true"></i> 
                أستمر
            </button>
                </template>
    </d-dialog-large>
    </template>
    
    <script>
    import commonAPI from '@/services/api/common'
    import academyAPI from '@/services/api/academy';
    export default {
        name:'add-course-dialog-live',
      props:{
        group:{
            type:String,
            default:'add-course-live'
        }
      },
      data:()=>{
        let daysOfWeek = commonAPI.getDaysOfWeek()
        let types = commonAPI.getTypeCertificates()
        return{
            daysOfWeek:daysOfWeek,
            step:1,
            type_certificates:types,
            showDialog:false,
            departments:[],
            loading:false,
            itemForm:{}
        }
      },
      methods:{
        deleteLearn(index){
            this.itemForm.learn.splice(index,1)
        },
        addLearnItem(evt) {
            evt.preventDefault();
            this.itemForm.learn.push('')
        },
        prevStep(){
            this.step-=1
        },
        emptyImage(){
            window.$('#add-course-image')
                    .attr('src','none')
                    .css('display', 'none');
        },
        async uploadImage(evt,validate){
       let resValid = await validate(evt)
       if(!resValid.valid){
        this.itemForm.image =  null;
        this.emptyImage()
                return;
       }
        if (!evt.target.files && !evt.target.files[0]) {
            this.itemForm.image =  null;
            this.emptyImage()
                return;
            }
        this.itemForm.image = evt.target.files[0];
        var reader = new FileReader();
            reader.onload =  (e) =>{
                //console.log('result',e,this.idImage)
                window.$('#add-course-image')
                    .attr('src', e.target.result)
                    .css('display', 'block');

            };
            reader.readAsDataURL(this.itemForm.image);
        },
        async saveStep1(){
            let valid = await this.$refs.form1.validate(['number_day']);
            if(!valid){
                console.mylog('invalid step 1');
                return false;
            }
            this.step+=1;
            return true;
        },
        async saveStep2(){
            let valid = await this.$refs.form2.validate(['number_day']);
            if(!valid){
                console.mylog('invalid step 2');
                return false;
            }
            this.step+=1;
            return true;
        },
        async saveStep3(){
            let valid = await this.$refs.form3.validate();
            if(!valid){
                console.mylog('invalid step 3');
                return false;
            }
            let formData = this.loadObjectToForm(this.itemForm)
           
            try {
                let {data } = this.itemForm.id?await academyAPI.coursesApi.updateItem(this.itemForm.id,formData): await academyAPI.coursesApi.addItem(formData)
             if(data.success){
                this.closeEvent()
                if(this.itemForm.has_exam222){
                    //redirect to add exam page
                    this.router_push('academy-course-add-exam',{id:data.data.course_id})
                }else{
                    //redirect to course page
                    let dataEvt={
                        title:'تم أضافة دورتك  بنجاح ',
                        
                        btns:[
                            {title:'صفحة الدورة',action:()=>this.router_push('academy-course-show',{id:data.data.course_id}),class:'btn btn-custmer'}
                        ]
                    }
                    if(this.itemForm.id){
                        dataEvt={
                        title:'تم تعديل دورتك  بنجاح ',
                        btns:[
                            {title:'حسنا',action:()=>this.refreshPage(),class:'btn btn-custmer'}
                        ]
                    } 
                    }
                    this.showSuccessMsg(dataEvt)
                }
                
             }
           } catch (error) {
            console.log('error',error)
            if(error.response){
                    let response = error.response
                    if (response.status == 422) {
                        this.setErrorsForm(this.$refs.form,response)
                    }
                }
           }
          
        },
        async save(){
        console.log('ddsdfghj')

           if(this.step==1){
            await this.saveStep1()
            return;
           }
           if(this.step==2){
            await this.saveStep2()
            return;
           }
           this.loading = true;
           await this.saveStep3();
           this.loading = false;
        },
        async loadDepartments(){
        try {
            let { data } = await academyAPI.getDepartments();
            if(data.success){
                this.departments = data.data;
            }
        } catch (error) {
            //
        }
    },
        changeInput(/*evt*/){
            //console.mylog('dds',evt)
        },
    
        closeEvent(){
      this.fireCloseDialog(this.group)
    },
        openDialog(dataEvt){
            this.step = 1;
            this.emptyImage()
            this.itemForm={
                type:'live',
                course_days:null,
                number_day:null,
                start_date:'',
                start_time:'',
                end_time:'',
                type_certificate:null,
                title:'',
                department_id:'',
                meeting_url:'',
                has_exam:0,
                desc:'',
                short_description:'',
                image:null,
                price:null,
                type_training:null,
                learn:[''],
                instructors:dataEvt.instructors??[]
            }
            if(dataEvt){
                let { id,course_days,
                number_day,
                start_date,
                start_time,
                end_time,
                type_certificate,
                title,
                department_id,
                meeting_url,
                has_exam,
                desc,
                short_description,
                image,
                price,
                type_training,
                learn,
               instructors
            } = dataEvt
            if(id)
                this.itemForm = Object.assign(this.itemForm,{ id,course_days,
                number_day,
                start_date,
                start_time,
                end_time,
                type_certificate,
                title,
                department_id,
                meeting_url,
                has_exam,
                desc,
                short_description,
                image,
                price,
                type_training,
                learn:learn??[''],
                instructors:instructors?instructors.map(x=>typeof x =='object'?x.id:x):[]
            })
            }
            this.showDialog = true;
            return true;
        },
        closeDialog(){
            this.showDialog = false;
            return true;
        }
      },
      mounted(){
        this.loadDepartments()
      }
    }
    </script>
    
    <style scoped>
    #add-course-image{
        display: none;
    }
    </style>