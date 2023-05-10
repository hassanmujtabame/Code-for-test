<template>
    <d-dialog-large :xl="false" 
    :group="group"
    :open-dialog="openDialog"
    :close-dialog="closeDialog"
    >
    <template v-slot:header>
        {{ itemDialog.id?$t('meeting-modification'):$t('add-meeting') }}
        </template>
    <template v-slot:default>
        <p class="t-c fs-r-16-24">يمكنك رفع فيديو تعليمي لمدة ساعة</p>
        <div v-if="showDialog" ref="form" tag="div">
        <ValidationObserver class="form-step" ref="form1" id="form-step-1" v-show="step==1">
            <!--meeting-type-->
            <div class="mt-3">
                        <ValidationProvider :name="$t('meeting-type')"
                            vid="type"
                            rules="required"
                            v-slot="{errors}"
                            v-if="step==1"
                        >
                    <d-select-input name="type" :errors="errors" v-model="itemForm.type" :label="$t('meeting-type')" >
                    <option  selected disabled>{{ $t('meeting-type') }}</option>
                    <option v-for="(t,i) in types" :key="i" :value="t.id">{{ t.name }}</option>
                    </d-select-input>
                </ValidationProvider>
                </div>    
            <!--title-->
            <div class="mt-3">
                        <ValidationProvider :name="$t('meeting-title')"
                            vid="title"
                            rules="required"
                            v-slot="{errors}"
                            v-if="step==1"
                        >
                    <d-text-input name="title" :errors="errors" v-model="itemForm.title" label="عنوان اللقاء التدريبي" />
                </ValidationProvider>
                </div>
                 <!--start_date-->
            <div class="mt-3" name="start_date">
                        <ValidationProvider :name="$t('meeting-date')"
                            vid="start_date"
                            rules="required"
                            v-slot="{errors}"
                            v-if="step==1"
                        >
                        <d-datepicker-input  v-model="itemForm.start_date" :label="$t('meeting-date')" />
                <d-error-input :errors="errors" v-if="errors && errors.length>0" />
                </ValidationProvider>
                </div>
                <!--time-->
            <div class="mt-3 d-flex justify-content-around gap-1">
                        <ValidationProvider :name="$t('start-time')"
                        tag="div"
                        class="flex-grow-1"
                            vid="start_time"
                            rules="required"
                            v-slot="{errors}"
                            v-if="step==1"
                        >
                        <d-text-input name="start_time" :errors="errors" type="time" v-model="itemForm.start_time" :label="$t('start-time')" />
                </ValidationProvider>
                <ValidationProvider :name="$t('end-time')"
                tag="div"
                class="flex-grow-1"
                            vid="end_time"
                            rules="required"
                            v-slot="{errors}"
                            v-if="step==1"
                        >
                        <d-text-input name="end_time" :errors="errors" type="time" v-model="itemForm.end_time" :label="$t('end-time')" />
                </ValidationProvider>
                </div>
                  <!--specialite -->
                  <div class="mt-3" name="category_id">
                    
                    <ValidationProvider :name="$t('meeting-field')"
                    vid="category_id"
                    rules="required"
                    v-slot="{errors}"
                    v-if="step==1"
                    >
                    <d-multiselect-input :errors="errors" 
                    label="تخصص اللقاء" 
                    :opts="categories" 
                                track-id="id" label-name="name"
                                v-model="itemForm.category_id"
                               
                                seperate=" - "
                                />
                </ValidationProvider>
            
                </div>
                <div class="mt-3">
                    <ValidationProvider :name="$t('meeting-url')"
                    vid="meeting_url"
                    :rules="itemForm.type == 'live' ? 'required' : ''"
                    v-slot="{errors}"
                    v-if="step==1"
                    >
                    <d-text-input name="meeting_url" type="text" :errors="errors"  v-model="itemForm.meeting_url"  :label="$t('meeting-url')" />
                </ValidationProvider>
                </div>
                <div class="mt-3">
                
                <ValidationProvider :name="$t('about-meeting')"
                    vid="content"
                    rules="required"
                    v-slot="{errors}"
                    v-if="step==1"
                    >
                    <d-textarea-input name="content" type="text" :errors="errors" 
                    rows="10" 
                    v-model="itemForm.content"  label="عن اللقاء" />
                </ValidationProvider>
            
                    </div>
        </ValidationObserver>
        <!--form 2-->
        <ValidationObserver class="form-step" ref="form2" id="form-step-2" v-show="step==2">
            <ValidationProvider
                                :name="$t('Image')"
                             vid="image"
                             :rules="imageRules"
                           
                                v-slot="{validate,errors}">
            <div class="   m-auto">
                    <div class="col-md-12 text-center">
                        <label for="imginput" class="img-zone form-label file-label first w-100">
                            <div class="text-center p-5">
                              <img :src="`${publicPath}assets/svg/empty-image.svg`"  height="96" width="96"/>
                                  
                                <p class="m-c">{{ $t('add-display-image') }} </p>
                            </div>
                            <div class="add-img-selected w-100">

                                <img class="image-selected-dialog" src="none" id="meeting-image" width="100%" height="100%" />
                            </div>
                        </label>
                        <input name="image" @change="uploadImage($event,validate) || validate($event)" class="form-control opacity-0 " type="file"
                            id="imginput">
                            <d-error-input :errors="errors" v-if="errors.length!==0" />
                    </div>
                </div>
            </ValidationProvider>
            <ValidationProvider tag="div" 
                                :name="$t('lecture-video')"
                                vid="video"
                                :rules="videoRules"
                                v-slot="{errors,validate}"
                                >
                                <div class="add-lecture-video position-relative" >
                                    <d-overlays-simple v-if="loading" />
                                   
                                  <label for="imginput" class="form-label file-label first w-100" >
                                        <div class="text-center p-5">
                                          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M63.5698 66.0663C62.9365 66.0663 62.3031 65.8329 61.8031 65.3329C60.8365 64.3662 60.8365 62.7663 61.8031 61.7996C73.8365 49.7663 73.8365 30.1997 61.8031 18.1997C60.8365 17.2331 60.8365 15.6331 61.8031 14.6664C62.7698 13.6997 64.3698 13.6997 65.3365 14.6664C79.3031 28.6331 79.3031 51.3662 65.3365 65.3329C64.8365 65.8329 64.2031 66.0663 63.5698 66.0663Z" fill="#1FB9B3"/>
                                            <path d="M16.4292 66.0663C15.7958 66.0663 15.1625 65.8329 14.6625 65.3329C0.695833 51.3662 0.695833 28.6331 14.6625 14.6664C15.6292 13.6997 17.2292 13.6997 18.1958 14.6664C19.1625 15.6331 19.1625 17.2331 18.1958 18.1997C6.16249 30.2331 6.16249 49.7996 18.1958 61.7996C19.1625 62.7663 19.1625 64.3662 18.1958 65.3329C17.6958 65.8329 17.0625 66.0663 16.4292 66.0663Z" fill="#1FB9B3"/>
                                            <path d="M39.996 75.7006C35.8293 75.6672 31.8627 75.0004 28.1627 73.7004C26.8627 73.2338 26.1626 71.8006 26.6293 70.5006C27.0959 69.2006 28.496 68.5005 29.8293 68.9672C33.0293 70.0672 36.4293 70.6672 40.0293 70.6672C43.596 70.6672 47.0293 70.0672 50.196 68.9672C51.496 68.5338 52.9293 69.2006 53.3959 70.5006C53.8626 71.8006 53.1626 73.2338 51.8626 73.7004C48.1293 75.0004 44.1626 75.7006 39.996 75.7006Z" fill="#1FB9B3"/>
                                            <path d="M50.9979 11.1343C50.7313 11.1343 50.4313 11.1008 50.1646 11.0008C46.9646 9.90081 43.5313 9.30078 39.9646 9.30078C36.398 9.30078 32.998 9.90081 29.798 11.0008C28.498 11.4341 27.0647 10.7676 26.598 9.46761C26.1314 8.16761 26.8313 6.7342 28.1313 6.26754C31.8313 4.96754 35.8313 4.30078 39.9646 4.30078C44.098 4.30078 48.098 4.96754 51.798 6.26754C53.098 6.7342 53.798 8.16761 53.3313 9.46761C52.998 10.5009 52.0313 11.1343 50.9979 11.1343Z" fill="#1FB9B3"/>
                                            <path d="M35.1995 55.8668C33.7328 55.8668 32.3328 55.5001 31.0995 54.8001C28.2328 53.1334 26.6328 49.8667 26.6328 45.6V34.4334C26.6328 30.1668 28.1995 26.9001 31.0995 25.2334C33.9661 23.5667 37.5996 23.8333 41.2996 25.9667L50.9662 31.5335C54.6662 33.6668 56.6995 36.6667 56.6995 40.0001C56.6995 43.3334 54.6662 46.3333 50.9662 48.4667L41.2996 54.0335C39.1996 55.2668 37.0995 55.8668 35.1995 55.8668ZM35.1995 29.1334C34.5995 29.1334 34.0328 29.2667 33.5995 29.5333C32.3661 30.2667 31.6328 32.0334 31.6328 34.4001V45.5667C31.6328 47.9333 32.3328 49.7334 33.5995 50.4334C34.8328 51.1334 36.7329 50.8666 38.7996 49.7L48.4662 44.1334C50.5329 42.9334 51.6995 41.4334 51.6995 40.0001C51.6995 38.5667 50.5329 37.0668 48.4662 35.8668L38.7996 30.3001C37.4662 29.5335 36.2328 29.1334 35.1995 29.1334Z" fill="#1FB9B3"/>
                                            </svg>
                                            
                                              
                                            <p class="m-c">أضغط هنا لرفع فيديو اللقاء </p>
                                            <p class="t-c">لن يتم رفع أي فيديو يتعدي ال5 جيجا</p>
                      
                                        </div>
                                        <div class="w-100 h-100 top-0 left-0 position-absolute">
                                          <video id="video-add-lecture-player" src="none" ></video>
                                        </div>
                                        <input name="video" @change="uploadVideo($event,validate) || validate($event)" class="form-control hidden-file-input" type="file"
                                        id="video-add-lecture">
                                    </label>
                                   
                                </div>
                              <d-error-input :errors="errors" v-if="errors && errors.length>0" />
                                         
                                </ValidationProvider>
        
      
    
        </ValidationObserver>
    </div>
            </template>
            <template v-slot:actions>
                <button :disabled="step==1 || loading"  @click="prevStep" class="btn bg-main btn-danger text-white px-3" >رجوع</button>
              <button @click="save" :disabled="loading" class="btn bg-main text-white px-3" >
                <i v-if="loading" class="fa fa-spinner fa-spin" aria-hidden="true"></i> 
                أستمر
            </button>
                </template>
    </d-dialog-large>
    </template>
    
    <script>
    import academyAPI from '@/services/api/academy';
    import commonAPI from '@/services/api/common'
    export default {
        name:'add-meeting',
      props:{
        group:{
            type:String,
            default:'add-meeting'
        }
      },
      data:()=>{
        //let types = commonAPI.getMeetingTypes();
        let course_types = commonAPI.getCourseTypes();
        return{
            types:course_types,
            step:1,
            showDialog:false,
            categories:[],
            loading:false,
            itemForm:{},
            itemDialog:{}
        }
      },
      computed:{
        videoRules(){
            if(this.itemForm.id || this.itemForm.type!=='recored'){
                return  this.step==2?'ext:mp4':''
            }
            return this.step==2?'required|ext:mp4':''
        },
        imageRules(){
            if(this.itemForm.id){
                return  this.step==2?'image':''
            }
            return this.step==2?'required|image':''
        }
      },
      methods:{
        prevStep(){
            this.step-=1
        },
        makeImageEmpty(){
            this.itemForm.image = null;
            console.mylog('makeImageEmpty', this.itemDialog)
                window.$('#meeting-image')
                    .attr('src',this.itemDialog.image??'none')
                    .css('display',this.itemDialog.image?'block':'none')
                    .css('opacity',this.itemDialog.image?'1':'0');
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
        this.itemForm.image = evt.target.files[0];
        var reader = new FileReader();
        reader.onload =  (e) =>{
            console.log('result',e,'meeting-image')
            window.$('#meeting-image')
                .attr('src', e.target.result)
                .css('display','block')
                .css('opacity','1');

        };
        reader.readAsDataURL(this.itemForm.image);
},
        makeVideoEmpty(){
      console.mylog('makeVideoEmpty',this.itemDialog.video)
      window.$('#video-add-lecture-player')
                    .attr('src',this.itemDialog.video??'none')
                    .css('display',this.itemDialog.video?'block':'none');
                    this.itemForm.video = null;
    },
    async uploadVideo(evt,validate){
      this.makeVideoEmpty();
            if(validate){
                let valid = await validate(evt)
                if(!valid){
                    this.makeVideoEmpty();
                    return;
                }
            }
            if(!evt.target.files && !evt.target.files[0]){
                this.makeVideoEmpty();
                    return;
            }
            this.itemForm.video = evt.target.files[0];
            var reader = new FileReader();
            reader.onload =  (e) =>{
                //console.log('result',e,this.idImage)
                window.$('#video-add-lecture-player')
                    .attr('src', e.target.result)
                    .css('display','block');
            };
            reader.readAsDataURL(this.itemForm.video);
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
            let valid = await this.$refs.form2.validate();
            if(!valid){
                console.mylog('invalid step 2');
                return false;
            }
            let formData = this.loadObjectToForm(this.itemForm)
           
            try {
                let {data } = this.itemForm.id?await academyAPI.instructor.meetingsAPI.updateItem(this.itemForm.id,formData): await academyAPI.instructor.meetingsAPI.addItem(formData)
             if(data.success){
                this.closeEvent()
                   //redirect to course page
                let dataEvt={
                        title:'تم رفع اللقاء الخاص بك سيتم مراجعة اللقاء و نشره على الفور',
                    }
                    if(this.itemForm.id){
                        dataEvt={
                        title:'تم تعديل اللقاء  بنجاح ',
                    } 
                    }
                    this.showSuccessMsg(dataEvt)
                
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
           if(this.step==1){
            await this.saveStep1()
            return;
           }
           this.loading = true;
           await this.saveStep2();
           this.loading = false;
        },
        async loadCategories(){
        try {
            let { data } = await academyAPI.meetingsAPI.getCategories();
            if(data.success){
                this.categories = data.data;
            }
        } catch (error) {
            //
        }
    },
        changeInput(evt){
            console.mylog('dds',evt)
        },
    
        closeEvent(){
            this.fireCloseDialog(this.group)
    },
        openDialog(dataEvt){
            this.itemDialog = dataEvt
            this.step = 1;
            this.itemForm={
                title:'',
                category_id:'',
                content:'',
                video:null,
                image:null,
                type:'',
                start_date:'',
                start_time:'',
                end_time:'',
                meeting_url:''
            }
            if(dataEvt){
                let {
                    id, 
                title,
                type,
                category_id,
                content,
                image,
                video,
                start_date,
                start_time,
                end_time,
                meeting_url
                } = dataEvt;
                
                this.itemForm = Object.assign(this.itemForm,{ 
                    id, 
                title,
                type,
                category_id,
                content,
                image,
                video,
                start_date,
                start_time,
                end_time,
                meeting_url})
            }
            this.showDialog = true;
            this.$nextTick(()=>{
          this.makeVideoEmpty(),
          this.makeImageEmpty()
        })
            return true;
        },
        closeDialog(){
            this.showDialog = false;
            return true;
        }
      },
      mounted(){
        this.loadCategories()
      }
    }
    </script>
    
    <style scoped>
    #add-course-image{
        display: none;
    }
    #meeting-image{
        display: none; 
    }
    #video-add-lecture-player{
        max-width: 100%;
    max-height: 100%;
    }
    </style>