<template>
  <div class="container">
  
  <div class="row justify-content-between">
      <div class="col-md-6">
          <h3>
              <span class="m-c">
                  خدمة :

              </span>
            {{itemPage.title}}
          </h3>
      </div>
      <div class="col-md-6 d-flex gap-2 justify-content-end">
          <div>
              <!-- <button style="height: 40px; background-color:#FFBC00 ;" class="btn-main px-3 w-100 border-0 rounded-2"  data-bs-toggle="modal" href="#exampleModalToggle-stop" role="button">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.866 30.3333H12.1327C10.946 30.3333 9.42601 29.7066 8.59934 28.8666L3.13269 23.4C2.29269 22.56 1.66602 21.04 1.66602 19.8666V12.1333C1.66602 10.9467 2.29269 9.42667 3.13269 8.60001L8.59934 3.13333C9.43934 2.29333 10.9594 1.66666 12.1327 1.66666H19.866C21.0527 1.66666 22.5727 2.29333 23.3994 3.13333L28.866 8.60001C29.706 9.44001 30.3327 10.96 30.3327 12.1333V19.8666C30.3327 21.0533 29.706 22.5733 28.866 23.4L23.3994 28.8666C22.5594 29.7066 21.0527 30.3333 19.866 30.3333ZM12.1327 3.66666C11.4794 3.66666 10.466 4.07999 10.0127 4.54666L4.54602 10.0133C4.09269 10.48 3.66602 11.48 3.66602 12.1333V19.8666C3.66602 20.52 4.07935 21.5333 4.54602 21.9866L10.0127 27.4533C10.4793 27.9067 11.4794 28.3333 12.1327 28.3333H19.866C20.5193 28.3333 21.5327 27.92 21.986 27.4533L27.4527 21.9866C27.906 21.52 28.3327 20.52 28.3327 19.8666V12.1333C28.3327 11.48 27.9193 10.4667 27.4527 10.0133L21.986 4.54666C21.5194 4.09333 20.5193 3.66666 19.866 3.66666H12.1327Z" fill="white"/>
                      <path d="M6.58651 26.44C6.33318 26.44 6.07984 26.3466 5.87984 26.1466C5.49318 25.76 5.49318 25.12 5.87984 24.7333L24.7332 5.88C25.1198 5.49333 25.7598 5.49333 26.1465 5.88C26.5332 6.26666 26.5332 6.90666 26.1465 7.29333L7.29317 26.1466C7.09317 26.3466 6.83984 26.44 6.58651 26.44Z" fill="white"/>
                      </svg>
                      
                      
              تعليق
              </button> -->
              <div  v-if="itemPage.status!='finished'&&itemPage.user_offer && itemPage.user_offer && itemPage.user_offer.user_info.id==user.id" class="dropdown">
                  <button  style="height: 40px; background-color:#FFBC00 ;"  class="btn border-0 text-white dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.6552 22.75H6.2852C3.5452 22.75 1.3252 20.52 1.3252 17.79V10.47C1.3252 7.73001 3.5552 5.51001 6.2852 5.51001H13.6552C16.3952 5.51001 18.6152 7.74001 18.6152 10.47V17.79C18.6152 20.52 16.3852 22.75 13.6552 22.75ZM6.2852 7.01001C4.3752 7.01001 2.8252 8.56001 2.8252 10.47V17.79C2.8252 19.7 4.3752 21.25 6.2852 21.25H13.6552C15.5652 21.25 17.1152 19.7 17.1152 17.79V10.47C17.1152 8.56001 15.5652 7.01001 13.6552 7.01001H6.2852V7.01001Z" fill="white"/>
                          <path d="M5.5752 4.75C5.1652 4.75 4.8252 4.41 4.8252 4V2.25C4.8252 1.84 5.1652 1.5 5.5752 1.5C5.9852 1.5 6.3252 1.84 6.3252 2.25V4C6.3252 4.41 5.9852 4.75 5.5752 4.75Z" fill="white"/>
                          <path d="M9.5752 4.75C9.1652 4.75 8.8252 4.41 8.8252 4V2.25C8.8252 1.84 9.1652 1.5 9.5752 1.5C9.9852 1.5 10.3252 1.84 10.3252 2.25V4C10.3252 4.41 9.9852 4.75 9.5752 4.75Z" fill="white"/>
                          <path d="M13.5752 4.75C13.1652 4.75 12.8252 4.41 12.8252 4V2.25C12.8252 1.84 13.1652 1.5 13.5752 1.5C13.9852 1.5 14.3252 1.84 14.3252 2.25V4C14.3252 4.41 13.9852 4.75 13.5752 4.75Z" fill="white"/>
                          <path d="M17.8652 18.12C17.4552 18.12 17.1152 17.78 17.1152 17.37V8.94995C17.1152 8.53995 17.4552 8.19995 17.8652 8.19995C20.6052 8.19995 22.8252 10.43 22.8252 13.16C22.8252 15.89 20.5952 18.12 17.8652 18.12ZM18.6152 9.77995V16.54C20.1652 16.2 21.3252 14.81 21.3252 13.16C21.3252 11.51 20.1652 10.12 18.6152 9.77995Z" fill="white"/>
                          <path d="M17.5852 12.75H2.0752C1.6652 12.75 1.3252 12.41 1.3252 12C1.3252 11.59 1.6652 11.25 2.0752 11.25H17.5852C17.9952 11.25 18.3352 11.59 18.3352 12C18.3352 12.41 17.9952 12.75 17.5852 12.75Z" fill="white"/>
                          </svg>
                          
                      قائمة الاوامر
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item clickable"  @click="openChangePriceDialog">تعديل قيمة الصفقة</a></li>
                    <li><a class="dropdown-item clickable" @click="openChangeDateDeliveryDialog">تعديل موعد التسليم</a></li>
                    <li><a class="dropdown-item clickable" @click="openConfirmFinishDialog"> حذف و أنهاء المشروع</a></li>
                  </ul>
                </div>
          </div>

          <div> 
              <button v-if="itemPage.status!='finished'&&itemPage.user_info.id==user.id" @click="confirmDeliveredProductMsg" style="height: 40px;" class="btn-main px-3 w-100 border-0 rounded-2"  role="button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.9998 14.75H11.9998C11.5898 14.75 11.2498 14.41 11.2498 14C11.2498 13.59 11.5898 13.25 11.9998 13.25H12.9998C13.6898 13.25 14.2498 12.69 14.2498 12V2.75H5.99978C4.81978 2.75 3.73975 3.38998 3.15975 4.41998C2.95975 4.77998 2.49979 4.91002 2.13979 4.71002C1.77979 4.51002 1.64975 4.05 1.84975 3.69C2.68975 2.19 4.27978 1.25 5.99978 1.25H14.9998C15.4098 1.25 15.7498 1.59 15.7498 2V12C15.7498 13.52 14.5198 14.75 12.9998 14.75Z" fill="white"/>
                      <path d="M19 20.75H18C17.59 20.75 17.25 20.41 17.25 20C17.25 19.31 16.69 18.75 16 18.75C15.31 18.75 14.75 19.31 14.75 20C14.75 20.41 14.41 20.75 14 20.75H10C9.59 20.75 9.25 20.41 9.25 20C9.25 19.31 8.69 18.75 8 18.75C7.31 18.75 6.75 19.31 6.75 20C6.75 20.41 6.41 20.75 6 20.75H5C2.93 20.75 1.25 19.07 1.25 17C1.25 16.59 1.59 16.25 2 16.25C2.41 16.25 2.75 16.59 2.75 17C2.75 18.24 3.76 19.25 5 19.25H5.34998C5.67998 18.1 6.74 17.25 8 17.25C9.26 17.25 10.32 18.1 10.65 19.25H13.36C13.69 18.1 14.75 17.25 16.01 17.25C17.27 17.25 18.33 18.1 18.66 19.25H19C20.24 19.25 21.25 18.24 21.25 17V14.75H19C18.04 14.75 17.25 13.96 17.25 13V10C17.25 9.04 18.03 8.25 19 8.25L17.93 6.38C17.71 5.99 17.29 5.75 16.84 5.75H15.75V12C15.75 13.52 14.52 14.75 13 14.75H12C11.59 14.75 11.25 14.41 11.25 14C11.25 13.59 11.59 13.25 12 13.25H13C13.69 13.25 14.25 12.69 14.25 12V5C14.25 4.59 14.59 4.25 15 4.25H16.84C17.83 4.25 18.74 4.78001 19.23 5.64001L20.94 8.63C21.07 8.86 21.07 9.15 20.94 9.38C20.81 9.61 20.56 9.75 20.29 9.75H19C18.86 9.75 18.75 9.86 18.75 10V13C18.75 13.14 18.86 13.25 19 13.25H22C22.41 13.25 22.75 13.59 22.75 14V17C22.75 19.07 21.07 20.75 19 20.75Z" fill="white"/>
                      <path d="M8 22.75C6.48 22.75 5.25 21.52 5.25 20C5.25 18.48 6.48 17.25 8 17.25C9.52 17.25 10.75 18.48 10.75 20C10.75 21.52 9.52 22.75 8 22.75ZM8 18.75C7.31 18.75 6.75 19.31 6.75 20C6.75 20.69 7.31 21.25 8 21.25C8.69 21.25 9.25 20.69 9.25 20C9.25 19.31 8.69 18.75 8 18.75Z" fill="white"/>
                      <path d="M16 22.75C14.48 22.75 13.25 21.52 13.25 20C13.25 18.48 14.48 17.25 16 17.25C17.52 17.25 18.75 18.48 18.75 20C18.75 21.52 17.52 22.75 16 22.75ZM16 18.75C15.31 18.75 14.75 19.31 14.75 20C14.75 20.69 15.31 21.25 16 21.25C16.69 21.25 17.25 20.69 17.25 20C17.25 19.31 16.69 18.75 16 18.75Z" fill="white"/>
                      <path d="M22 14.75H19C18.04 14.75 17.25 13.96 17.25 13V10C17.25 9.04 18.04 8.25 19 8.25H20.29C20.56 8.25 20.81 8.39 20.94 8.63L22.65 11.63C22.71 11.74 22.75 11.87 22.75 12V14C22.75 14.41 22.41 14.75 22 14.75ZM19 9.75C18.86 9.75 18.75 9.86 18.75 10V13C18.75 13.14 18.86 13.25 19 13.25H21.25V12.2L19.85 9.75H19Z" fill="white"/>
                      <path d="M8 8.75H2C1.59 8.75 1.25 8.41 1.25 8C1.25 7.59 1.59 7.25 2 7.25H8C8.41 7.25 8.75 7.59 8.75 8C8.75 8.41 8.41 8.75 8 8.75Z" fill="white"/>
                      <path d="M6 11.75H2C1.59 11.75 1.25 11.41 1.25 11C1.25 10.59 1.59 10.25 2 10.25H6C6.41 10.25 6.75 10.59 6.75 11C6.75 11.41 6.41 11.75 6 11.75Z" fill="white"/>
                      <path d="M4 14.75H2C1.59 14.75 1.25 14.41 1.25 14C1.25 13.59 1.59 13.25 2 13.25H4C4.41 13.25 4.75 13.59 4.75 14C4.75 14.41 4.41 14.75 4 14.75Z" fill="white"/>
                      </svg>
                      
                      
                      تاكيد إستلام المشروع 
              </button>
          </div>
         


      </div>
      <div  class="col-12">

        <p style="width: fit-content;"
              class="rounded-1 px-2 py-1 text-white" :class="statusClass">
             {{ statusName }}
          </p>
      </div>
      <div class="row redy-services ">
          <div class="col-md-6 mt-5 ">

              <!-- section details-->
              <SectionDetails :item-page="itemPage" />
              <!-- section-conversation-->
              <SectionConversation :item-page="itemPage"/>
          </div>


          <div class="col-md-6 mt-5 ">
    
             <!--request description -->
             <SectionDesc :item-page="itemPage" />
              <div class="box border rounded-3 p-4 mt-3">
                  <p class="fs-3 text-center">
                      طلبات شراء هذه الخدمة
                  </p>
              </div>

              <div style="background-color: #FFF3E5;" class="box p-5 text-center mt-3 rounded-3">
                  <div>
                      <svg width="141" height="123" viewBox="0 0 141 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M62.7591 94.1327C62.7591 96.1299 63.5525 98.0453 64.9647 99.4576C66.377 100.87 68.2924 101.663 70.2897 101.663C72.2869 101.663 74.2024 100.87 75.6146 99.4576C77.0269 98.0453 77.8203 96.1299 77.8203 94.1327C77.8203 92.1354 77.0269 90.22 75.6146 88.8077C74.2024 87.3954 72.2869 86.602 70.2897 86.602C68.2924 86.602 66.377 87.3954 64.9647 88.8077C63.5525 90.22 62.7591 92.1354 62.7591 94.1327V94.1327ZM65.2693 46.4388V75.3061C65.2693 75.9964 65.8341 76.5612 66.5244 76.5612H74.055C74.7453 76.5612 75.3101 75.9964 75.3101 75.3061V46.4388C75.3101 45.7485 74.7453 45.1837 74.055 45.1837H66.5244C65.8341 45.1837 65.2693 45.7485 65.2693 46.4388ZM139.901 115.469L74.6355 2.5102C73.6628 0.831505 71.9841 0 70.2897 0C68.5953 0 66.9009 0.831505 65.9439 2.5102L0.678593 115.469C-1.25113 118.827 1.16494 123 5.02438 123H135.555C139.414 123 141.83 118.827 139.901 115.469ZM16.9792 111.092L70.2897 18.8108L123.6 111.092H16.9792V111.092Z" fill="#F2631C"/>
                          </svg>
                          
                  </div>
                  <div  class="mt-3">
                      <h6 style="color: #F2631C;" class="text-start">
                          تنبيه هام :
                      </h6>
                      <p class="text-start">
                          ممكن نكتب هنا اهم التنببيهات الاساسية لمقدم الخدمة 

زي متتوصلش برا رياديات علشان حسابك ميقفش و تحجز مستحقاتك واشياء من هذا القبيل
                      </p>
                  </div>


              </div>

          </div>
      </div>



  </div>
  <ConfirmFinishRequest />
    <ChangePriceRequest />
    <ChangeDateRequest />
</div>
</template>

<script>
import myRequestsAPIs from '@/services/api/service-provider/user/my-requests-client.js'
  import SectionConversation from './parts/section-conversation/index.vue'
  import SectionDesc from './parts/section-description/index.vue'
  import SectionDetails from './parts/section-details/index.vue'
  import ConfirmFinishRequest from './dialogs/confirm-finish-request.vue'
import ChangePriceRequest from './dialogs/change-value-amount.vue'
import ChangeDateRequest from './dialogs/change-value-date.vue'
  export default {
    name:'request-progress-page',
 props:['itemPage'],
   components:{

        ChangeDateRequest,
      SectionDesc,
      SectionDetails,
      SectionConversation,
      ConfirmFinishRequest,
    ChangePriceRequest
   },
   computed:{
      statusClass(){
          return `status-request-${this.itemPage.status}`
      },
      statusName(){
          switch (this.itemPage.status) {
              case 'finished': return "مكتمل";
              case 'waiting': return "قيد الانتظار";
              case 'underway': return "قيد التنفيذ";
              case 'cancel': return"ملغاة";
                  
          
              default:
                  return this.status
          }
      }
   },
    data:()=>{
      return {
        loading:true,
        hasError:false,
        msgError:null,
        colors:['#F2631C','#FFBC00','#2C98B3']
    }},
    methods:{
        showConfirmRateProvider(){
            let dataEvent = {
            image:'/assets/img/Group 3024.png',
            title:'قيم مقدم الخدمة بشكل شخصي',
            description:'قم بتقيم مقدم الخدمة و تعامله معك و اتقانه لعمله لا تقيم الخدمة نفسها الان',
            groupBtns:'d-flex justify-content-evenly',
            onClose:this.showConfirmRateService,
            btns:[
            {title:'قيم',action:()=>this.showRateProvider(),class:'btn btn-custmer'},
                {title:'تخطي',action:()=>this.showConfirmRateService(),class:'btn btn-custmer-w'}
            ]
        } 
        this.showSuccessMsg(dataEvent)
        },
        showRateProvider(){
            let dataEvent = {
            title:'قيم  مقدم الخدمة',
            description:'هل كان متعاون ؟ هل كان متفاعل معك وسريع الرد ؟',
            onClose:this.showConfirmRateService(),
            btns:[
            {title:'تقييم',action:(evt,form)=>this.rateProvider(evt,form),class:'btn btn-custmer'},
            ]
        }
            this.showRateMsg(dataEvent)
        },
       async rateProvider(dataE,form){
            console.mylog(dataE,this)
            let valid = await form.validate();
            if(!valid){
                console.mylog('invalid')
                return false;
            }
            let formData = this.loadObjectToForm(dataE)
            formData.append('user_id', this.itemPage.user_info.id)
            try{
                let {data} = await myRequestsAPIs.rateProvider(formData)
                if(data.success){
                    this.showConfirmRateService()
                }else{
                    window.SwalError(data.message);
                    return false;
                }
            }catch(error){
                //
                console.log('error',error)
                return false;
            }
            
            return true;
        },
        async rateService(dataE,form){
            console.mylog(dataE,this)
            let valid = await form.validate();
            if(!valid){
                console.mylog('invalid')
                return false;
            }
            let formData = this.loadObjectToForm(dataE)
            formData.append('user_id', this.itemPage.user_info.id)
            try{
                let {data} = await myRequestsAPIs.rateService(formData)
                if(data.success){
                    this.router_push('service-provider-home')
                }else{
                    window.SwalError(data.message)
                    return false;
                }
            }catch(error){
                //
                console.log('error',error)
                return false;
            }
            
            return true;
        },
        showRateService(){
            let dataEvent = {
            title:'قيم الخدمة',
            description:'هل نالت الخدمة رضاك ؟ هل كانت بشكل المطلوب ؟',
            withImage:true,
            btns:[
            {title:'تقييم',action:(evt,form)=>this.rateService(evt,form),class:'btn btn-custmer'},
            ]
        }
            this.showRateMsg(dataEvent)
        },
        showConfirmRateService(){
           setTimeout(()=>{
            let dataEvent = {
            image:'/assets/img/Frame1.png',
            title:'الان حان دور تقيم الخدمة',
            description:'قم بتقيم الخدمة نفسها , هل وجدت الخدمة كما ترغب؟ هل كانت متقنة و جيدة بنسبة لك',
            groupBtns:'d-flex justify-content-evenly',
            btns:[
            {title:'قيم',action:()=>this.showRateService(),class:'btn btn-custmer'},
                {title:'تخطي',action:()=> this.router_push('service-provider-home'),class:'btn btn-custmer-w'}
            ]
        } 
        this.showSuccessMsg(dataEvent)
    },500)
        },
        async confirmDeliveredProduct(){
            try {
                let {data} =  await myRequestsAPIs.confirmDelivery(this.itemPage.user_offer.id)
              // let data = {  success:true }
               if(data.success){
                    this.showConfirmRateProvider()
                }else{
                    window.SwalError(data.message)
                }
            } catch (error) {
                //
            }
        },
    confirmDeliveredProductMsg(){
        let dataEvent = {
            title:'هل أنت متأكد انك استلمت الخدمة ؟',
            description:'تأكد جيداً من انك قمت بأستلام الخدمة كاملة من مقدم الخدمة قبل تأكيد الاستلام',
            btns:[
                {title:'تأكيد الاستلام',action:()=>this.confirmDeliveredProduct(),class:'btn btn-custmer'}
            ]
        }
        this.showConfirmMsg(dataEvent)
    },
      openChangeDateDeliveryDialog(evt){
          if(evt) evt.preventDefault();
          
          this.fireOpenDialog('change-value-date',this.itemPage)
      },
      openChangePriceDialog(evt){
          if(evt) evt.preventDefault();
          
        this.fireOpenDialog('change-value-amount',this.itemPage)
      },
      openConfirmFinishDialog(evt){
          if(evt) evt.preventDefault();
          
        this.fireOpenDialog('confirm-finish-request',this.itemPage)
      }
    }
  }
  </script>
  
  <style>
  
  </style>