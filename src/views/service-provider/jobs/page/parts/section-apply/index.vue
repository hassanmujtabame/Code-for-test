<template>
   <div class="box border rounded-3 p-4 position-relative">
    <d-overlays-simple v-if="loading" />
                            <div class=" justify-content-center border-bottom ">
                                <div class=" img-service text-center">
                                    <img class="rounded-circle "
                                        src="/assets/img/صورة واتساب بتاريخ 2022-10-18 في 09.53.21.jpg" alt=""
                                        width="120" height="120">
                                </div>
                                <div class=" t-c text-center mt-3">
                                    <h4 class="fw-bold">
                                        عبد الرحمن الشيخ
                                    </h4>
                                    <p>
                                        عضو في الشبكة
                                    </p>
                                </div>
                            </div>
                            <ValidationObserver ref="form">
                                <h3 class="m-c p-2">
                                    قدم على الوظيفة
                                </h3>
                                <ValidationProvider 
                                tag="div"
                                :name="$t('appy-job-note')"
                                vid="note"
                                rules="required"
                                v-slot="{errors}"
                                >
                                    <textarea v-model="itemForm.note" name="" class="w-100 border p-2 rounded-2" id="" rows="7" placeholder="أكتب ماذا يمكنك أن تقدم  "></textarea>
                                <d-error-input :errors="errors" v-if="errors.length" />
                                </ValidationProvider>
                                <div class="col-md-4 w-100">
                                    <ValidationProvider 
                                tag="div"
                                :name="$t('appy-job-note')"
                                vid="cv"
                                rules="required|ext:pdf,doc,docx"
                                v-slot="{errors,validate}"
                                >
                                    <label  class="w-100 position-relative  rounded-2">
                                        <input type="file" @change="uploadFile($event,validate) || validate($event)" id="validationCustom03" class="form-control opacity-0 " required>
                                        <svg style="    top: 12px;" class="position-absolute" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.99967 15.1668H5.99967C2.37967 15.1668 0.833008 13.6202 0.833008 10.0002V6.00016C0.833008 2.38016 2.37967 0.833496 5.99967 0.833496H9.99967C13.6197 0.833496 15.1663 2.38016 15.1663 6.00016V10.0002C15.1663 13.6202 13.6197 15.1668 9.99967 15.1668ZM5.99967 1.8335C2.92634 1.8335 1.83301 2.92683 1.83301 6.00016V10.0002C1.83301 13.0735 2.92634 14.1668 5.99967 14.1668H9.99967C13.073 14.1668 14.1663 13.0735 14.1663 10.0002V6.00016C14.1663 2.92683 13.073 1.8335 9.99967 1.8335H5.99967Z" fill="#1FB9B3"/>
                                            <path d="M10.0003 6.84013C9.87362 6.84013 9.74695 6.79346 9.64695 6.69346L8.00029 5.0468L6.35362 6.69346C6.16028 6.8868 5.84029 6.8868 5.64695 6.69346C5.45362 6.50013 5.45362 6.18013 5.64695 5.9868L7.64695 3.9868C7.84029 3.79346 8.16028 3.79346 8.35362 3.9868L10.3536 5.9868C10.547 6.18013 10.547 6.50013 10.3536 6.69346C10.2536 6.79346 10.127 6.84013 10.0003 6.84013Z" fill="#1FB9B3"/>
                                            <path d="M8 10.1732C7.72667 10.1732 7.5 9.94651 7.5 9.67318V4.33984C7.5 4.06651 7.72667 3.83984 8 3.83984C8.27333 3.83984 8.5 4.06651 8.5 4.33984V9.67318C8.5 9.95318 8.27333 10.1732 8 10.1732Z" fill="#1FB9B3"/>
                                            <path d="M7.99997 12.1531C6.5933 12.1531 5.17996 11.9264 3.83996 11.4798C3.57996 11.3931 3.43996 11.1065 3.52663 10.8465C3.6133 10.5865 3.89997 10.4398 4.15997 10.5331C6.63997 11.3598 9.36664 11.3598 11.8466 10.5331C12.1066 10.4464 12.3933 10.5865 12.48 10.8465C12.5666 11.1065 12.4266 11.3931 12.1666 11.4798C10.82 11.9331 9.40663 12.1531 7.99997 12.1531Z" fill="#1FB9B3"/>
                                            </svg>
                                        <p  style="top: 6px;right: 13px; " class="position-absolute px-2 m-c" >
                               أرفق سيرتك الذاتية
                                        </p>

                                      </label>
                                      <d-error-input :errors="errors" v-if="errors.length" />
                                </ValidationProvider>
                                </div>
                                <div class="col-12 m-2 m-auto text-center">
                                    <button @click="applyJob" class="btn btn-main  w-75" type="submit"  role="button"> 
                                        قدم طلب توظيف
                                    </button>
                                </div>
                            </ValidationObserver>
                        </div>



</template>

<script>
import jobsProviderAPIs from '@/services/api/service-provider/jobs'
export default {
 name:'section-apply',
 props:['itemPage'],
 data:(vm)=>{
    return {
        loading:false,
        itemForm:{
            cv:null,
            note:null,
            job_id:vm.itemPage.id
        }
    }
 },
 methods:{
    async applyJob(){
        let valid =  this.$refs.form.validate();
        if(!valid){
            return;
        }
            this.loading = true;
            let formData = new FormData();
            Object.keys(this.itemForm).forEach(key =>{
                formData.append(key,this.itemForm[key])
            })
        try {
            let {data} = await jobsProviderAPIs.applyJob(formData)
            if(data.success){
                let dataMessage = {
                    title:'لقد تم إرسال طلب توظيفك بنجاح',
                    description:'سيتواصل معك صاحب العمل اذا وجدك مناسب لاحتياجته ،  نتمنى لك كل التوفيق '
                }
                this.showSuccessMsgProvider(dataMessage) 
            }else{
                window.SwalError(data.data.message)
            }
        } catch (error) {
            console.log('error',error)
            console.log('error response',error.response)
        }
        this.loading = false;
    },
    async uploadFile(evt,validate){
       let resValid = await validate(evt)
       if(!resValid.valid){
        this.itemForm.cv =  null;
                return;
       }
        if (!evt.target.files && !evt.target.files[0]) {
            this.itemForm.cv =  null;
                return;
            }
        this.itemForm.cv = evt.target.files[0];
   
       
},
 }
 }
</script>

<style>

</style>