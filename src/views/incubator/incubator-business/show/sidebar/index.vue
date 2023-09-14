<template>
  <div class="incubator-business-sidebar">
    <div class="incubator-business-sidebar__wrapper">
    <div class="incubator-business-sidebar__header">
      <h1 class="my-1">مسار حاضنة {{itemPage.department_name}}</h1>
      <div class="d-flex align-items-center">
        <div class="flex-grow-1">
        <d-progress-bar :height="3" bgColor="#F6F8F9" percentColor="var(--color-primary)" :progress="itemPage.ratio"/>
      </div>
        <span class="flex-shrink-0 percent-label">{{itemPage.ratio}}%</span>
      </div>
      <div class="d-flex justify-content-between my-3">
        <span class="percent-label">بداية الحاضنة:{{ itemPage.start_date }}</span>
        <span class="percent-label">المدة:{{ itemPage.duration }} {{ $t('day_s') }}</span>
      </div>

    </div>
    <div class="incubator-business-sidebar__body my-3">
      <d-expanded-panel  id="step-1">
  <template v-slot>
        <d-expanded-panel-item v-for="(item,n) in items" 
        :opened="status[(n-1)%3]==='selected'" :key="n" 
        classTitle="step-title">
          <template v-slot:btnTitle >
    <d-stepper-icon  :status="item.status">
    </d-stepper-icon>
                         
    {{ item.title }}
        </template>
   <d-stepper-head vertical>

        <d-stepper-head-item v-for="(phase,i) in item.courses" :key="i" 
        :status="phase.status"
        @click="onChoose(phase,item.id)"
        >
             <!-- <input
                          class="form-check-input"
                          type="radio"
                          name="stateRadioDefault23"
                          id="flexRadioDefault123"
                          style="transform: translateX(16px);"
                        />
                        <label class="form-check-label" for="flexRadioDefault123"> -->
                          {{ phase.title }}
                        <!-- </label> -->
          </d-stepper-head-item>
          </d-stepper-head>
        </d-expanded-panel-item>
      </template>
      </d-expanded-panel>
    </div>
    </div>    
  </div>
</template>

<script>
import incubatorAPI from '@/services/api/incubator'
//import ListItem from './list-item'
export default {
name:'d-sidebar',
props:{
  itemPage:{}
},
components:{
  //ListItem
},
data:(vm)=>({
  start_date:vm.itemPage.start_date,
  period:vm.itemPage.duration,
  status:['done','selected','disabled'],
  items:[]
}),
methods:{
  onChoose(phase,stage_id){
    this.fireEvent('phase-choosen',{...phase,stage_id})
  },
  async initializing(){
    try{
      let { data } = await incubatorAPI.getStages({department_id:this.$route.params.id});
      if(data.success){
        this.items = data.data
      }
    }catch(error){
      console.log('error',error)
      //
    }
  }
},
mounted(){
this.initializing()
}
}
</script>

<style>
.incubator-business-sidebar{
  width: 100%;
  overflow: auto;
  height: calc(100vh - 150px);
  background: #c0c0c0;
  min-height: 400px;
  background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
}
.incubator-business-sidebar__wrapper{
  padding: 5px;
}
h1{
  font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 44px;


/* Secondary/#2D2F3A */

color: #2D2F3A;
margin:0;
}
.incubator-business-sidebar__body{
  margin-top: 15px;
}
.incubator-business-sidebar .percent-label{
  font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
padding: 0 5px;
text-transform: capitalize;

/* Secondary/#2D2F3A */

color: #2D2F3A;
}
.incubator-business-sidebar .step-title{
  font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
/* Secondary/#2D2F3A */
padding: 3px;
color: #2D2F3A;
margin:0;
}
</style>