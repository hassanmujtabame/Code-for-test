<template>
  <d-dialog-large 
  :group="group"
        :loading="loading"
        :closeDialog="closeDialog"
        :openDialog="openDialog"
  >

    <template v-slot:header>
      <span v-html="titleDialog"></span>
      </template>
    <template v-slot:default>
        <div v-if="showDialog" class="row">
                            <div class="col-md-6">
                              <div>
                                <ValidationObserver tag="div" ref="form-title" v-slot="{invalid}">
                                <ValidationProvider tag="div" 
                                :name="$t('lecture-title')"
                                vid="title"
                                rules="required"
                                v-slot="{errors}"
                                >
                                    <d-text-input type="text" v-model="itemForm.title" :errors="errors"  label="عنوان الدرس ">
                                      <!--append-icon-->
                        <template v-slot:append-icon>
                            <div class="">
                                <button @click="saveTitle" :disabled="invalid || saving" class="btn no-border" :class="{'c-save':!invalid,'t-c':invalid}" >
                                    <i v-if="!saving" class="fa fa-floppy-disk"></i>
                                    <i v-else class="fa fa-spinner fa-spin"></i>
                                </button>
                            </div>
                                </template>
                                      </d-text-input>
                                  </ValidationProvider>
                                  </ValidationObserver>
                                 <div class="mt-3">
                                    <attachmentsList  :itemPage="itemDialog" :lectureId="lectureId"/>
                                 </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                              <ValidationObserver tag="div" ref="form-video" v-slot="{invalid}">
                                <ValidationProvider tag="div" 
                                :name="$t('lecture-video')"
                                vid="video"
                                rules="required|ext:mp4"
                                v-slot="{errors,validate}"
                                >
                                <div class="add-lecture-video position-relative" :class="{'video-disabled':!lectureId}">
                                    <d-overlays-simple v-if="videoing" />
                                   
                                  <label for="imginput" class="form-label file-label first w-100">
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
                                        <input @change="uploadVideo($event,validate) || validate($event)" class="form-control hidden-file-input" type="file"
                                        id="video-add-lecture">
                                    </label>
                                   
                                </div>
                              <d-error-input :errors="errors" v-if="errors && errors.length>0" />
                                          <div class="w-100 text-center mt-2">
                                          <button @click="saveVideo" :disabled="!lectureId || invalid || videoing || !itemForm.video" class="btn btn-custmer">
                                            <i v-if="!videoing" class="fa fa-upload"></i>
                                            <i v-else >
                                              {{ percentVideo }} %
                                            </i>
                                              {{ $t('upload-video') }}
                                          </button>  
                                          <button v-if="itemForm.video && false" @click="emptyVideo()" class="btn btn-custmer bg-danger">{{ $t('clear-video') }}</button>
                                          </div>
                                </ValidationProvider>
                                </ValidationObserver>
                            </div>
                        </div>
    </template>
  </d-dialog-large>
</template>

<script>
import attachmentsList from './attachments/index'
import academyAPI from '@/services/api/academy';
export default {
  name:'add-lecture-dialog',
  props:{
    group:{
        type:String,
        default:'add-lecture-dialog'
    }
  },
  components:{
    attachmentsList
  },
  computed:{
    titleDialog(){
     return this.itemForm.id?`${this.$t('lecture-modification')}: <span class="m-c">${this.itemDialog.title}</span>`: this.$t('new-lecture')
    }
  },
  data:()=>({
    loading :  false,
    videoing: false,
    percentVideo:0,
    saving: false,
    showDialog : false,
    itemDialog:{video:null},
    itemPage:{},
    itemForm:{id:null},
    lectureId:null,
  }),
  methods:{
    async saveTitle(){
        this.saving = true;
        let valid = await this.$refs['form-title'].validate();
        if(!valid) {
          this.saving = false;
          console.mylog('invalid title')
          return;
        }
        let formData = new FormData();
          formData.append('title', this.itemForm.title)
           
            try {
             let {data } = this.itemForm.id?  await academyAPI.lecturesAPI.updateItem(this.itemForm.id,formData) :await academyAPI.lecturesAPI.addItem(this.itemPage.id,formData)
             if(data.success){
              if(this.itemForm.id){
                this.$emit('update',{...this.itemForm})
                this.fireEvent('update-lectures',{title:this.itemForm.title})
              }else{
                this.itemForm.id= data.data.lesson_id
                this.$emit('add',{...this.itemForm})
                this.fireEvent('update-lectures',{...this.itemForm})
              this.lectureId = this.itemForm.id;
              this.itemDialog.id = this.itemForm.id
              }
              
              this.itemDialog.title = this.itemForm.title
             }else{
              window.SwalError(data.message)
             }
          
        } catch (error) {
          console.mylog('error',error)
                if(error.response){
                    let response = error.response
                    if (response.status == 422) {
                        this.setErrorsForm(this.$refs.form,response)
                    }
                }
        }
        this.saving = false;
    },
    async saveVideo(){
      this.percentVideo = 0
        this.videoing = true;
        let valid = await this.$refs['form-video'].validate();
        if(!valid) {
          this.videoing = false;
          return;
        }
        let formData = new FormData();
          formData.append('video', this.itemForm.video)
          
          let config ={
            onUploadProgress: progressEvent =>{
              
              const { loaded, total } = progressEvent;
              this.percentVideo = Math.floor((loaded * 100) / total);
            /*if (percent < 100) {
              console.log(`${loaded} bytes of ${total} bytes. ${percent}%`);
            }*/
            } 
          }
            try {
             let {data } = await academyAPI.lecturesAPI.addVideo(this.lectureId,formData,config)
             if(data.success){
              this.itemDialog.video = data.data.video;
              this.emptyVideo()
              if(this.itemForm.id){
                this.$emit('update',{...this.itemForm})
                this.fireEvent('update-lectures',{title:this.itemForm.title})
              }else{
                this.itemForm.id= data.data.lesson_id
                this.$emit('add',{...this.itemForm})
                this.fireEvent('update-lectures',{...this.itemForm})
              }
                
             }else{
              window.SwalError(data.message)
             }
          
        } catch (error) {
          console.mylog('error',error)
                if(error.response){
                    let response = error.response
                    if (response.status == 422) {
                        this.setErrorsForm(this.$refs.form,response)
                    }
                }
        }
        this.videoing = false;
    },
    emptyVideo(){
      console.mylog('emptyVideo',this.itemDialog.video)
      window.$('#video-add-lecture-player')
                    .attr('src',this.itemDialog.video??'none')
                    .css('display',this.itemDialog.video?'block':'none');
                    this.itemForm.video = null;
    },
    async uploadVideo(evt,validate){
      this.emptyVideo();
            if(validate){
                let valid = await validate(evt)
                if(!valid){
                    this.emptyVideo();
                    return;
                }
            }
            if(!evt.target.files && !evt.target.files[0]){
                this.emptyVideo();
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
    openDialog(dataItem){
        this.itemPage ={... dataItem.page}
        this.itemDialog = {... dataItem.item}
        let {id,title,video} = dataItem.item;
        this.itemForm.id = id
        this.itemForm.title = title
        this.itemForm.video = video
        this.loading =  false;
        this.lectureId = this.itemForm.id??null;
        
        this.showDialog = true;
        this.$nextTick(()=>{
          this.emptyVideo()
        })
        return true;
    },
    closeDialog(){
        this.showDialog = false
        this.fireEvent('update-lectures',{item:{},type:'all'})
        return true;
    },
    closeEvent(){
       this.fireEvent(this.group+'-close-dialog')
    }
  }
}
</script>

<style scoped>
#video-add-lecture-player{
  position: absolute;
  display: none;
  width:100%;
  height:100%
}
.add-lecture-video{
  background: #1fb9b32e;
}

</style>