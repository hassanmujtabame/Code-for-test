<template>
    <div class="invest-project-request">
  
  <div class="d-flex align-items-center justify-content-between">
      <div >
        <div class="d-flex"> 
        <p style="width: fit-content;"
              class="rounded-1 invest-project-request__type" >
             {{ typeName }}:
          </p>
          <h4 class="invest-project-request__title" @click="router_push('service-provider-request-purchase-service-show',{id:itemId})">
                  {{ title??'N/A' }}
          </h4>
          </div>
          <div class="d-flex gap-2 flex-wrap">
      <p class="invest-project-request__info-label">
          <d-user-rect-icon :size="16" color="currentColor" />
          {{ userName }}
      </p>
      <p class="invest-project-request__info-label">
          <d-localisation-icon :size="16" color="currentColor" />
          {{ place }}
      </p>
      <p class="invest-project-request__info-label">
          <d-empty-wallet-icon :size="16" color="currentColor" />
            
          {{ price }} {{ $t('riyals') }}
      </p>
      <p class="invest-project-request__info-label">
        <d-distance-icon :size="16" color="currentColor" />
         {{ distance }}  {{ $t('meter') }}
      </p>

     
  </div>
          <p class="t-c w-75 m-0" v-html="description">
      </p>
      </div>

      <div class="d-flex flex-column flex-shrink-0 justify-content-between">
          <p class="t-c text-end">
             {{ dateRequest }}
          </p>
          <div class="d-flex">
            <button class="btn btn-custmer" @click="acceptRequest">{{ $t('accept') }}</button>
            <button class="btn btn-custmer btn-danger mx-2">{{ $t('reject') }}</button>
          </div>
      </div>
  
  
  </div>
  </div>
  </template>
  
  <script>
import networkAPI from '@/services/api/network';
  export default {
      name:'my-request-client-card',
   props:{
      itemId:{
          type:[String,Number],
      },
      title:{
          type:String,
      },
      type:{
          type:String,
          default:'moral'
      },
      userName:{
          type:Boolean,
          default:true
      },
      place:{
          type:String,
      },
      price:{
          type:[String,Number],
      },
      description:{
          type:String,
      },
      dateRequest:{
          type:String,
      },
      status:{
          type:String,
      },
  
   },
   data:()=>({
    loading:false,
   }),
   computed:{
      typeName(){
          return this.type == 'moral'? "طلب استثمار معنوي":  "طلب استثمار مادي";
        }
      
   },
   methods:{
    async acceptRequest(){
        this.loading = true;
        try {
            let { data } = await networkAPI.projects.approveInvestProjectRequest(this.itemId);
            if(data.success){
                let dataEvt={
                    title:'تم قبول طلب الاستثمار بنجاح',
                    description:'يمكنك التواصل الان مع العميل لمعرفة باقي التفاصيل',
                    btns:[
                        {title:'تواصل الان'}
                    ]
                }
                this.showSuccessMsg(dataEvt);
                this.$emit('accepted')
            }else{
                window.SwalError(data.message)
            }
        } catch (error) {
            //
        }
        this.loading =false;
    }
   }
  }
  </script>
  
  <style scoped>
  .invest-project-request{
      padding: 10px;
    border-bottom: 1px solid rgba(205, 215, 216, 1);
;
  }
  .invest-project-request__title{
      cursor: pointer;
      font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

display: flex;
align-items: center;
text-decoration-line: underline;
text-transform: capitalize;

color: #003439;
  }
  .invest-project-request__type{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

display: flex;
align-items: center;
text-transform: capitalize;
color: #F2631C;
  }
  .invest-project-request__info-label{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */

color: #737373;
  }
  </style>    