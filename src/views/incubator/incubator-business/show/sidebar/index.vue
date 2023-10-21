<template>
  <div class="incubator-business-sidebar">
    <div class="incubator-business-sidebar__wrapper">
      <div class="incubator-business-sidebar__header">
        <h1 class="my-1">مسار حاضنة {{ itemPage.department_name }}</h1>
        <div class="d-flex align-items-center">
          <div class="flex-grow-1">
            <d-progress-bar :height="3" bgColor="#F6F8F9" percentColor="var(--color-primary)" :progress="itemPage.ratio" />
          </div>
          <span class="flex-shrink-0 percent-label">{{ itemPage.ratio }}%</span>
        </div>
        <div class="d-flex justify-content-between my-3">
          <span class="percent-label">بداية الحاضنة:{{ itemPage.start_date }}</span>
          <span class="percent-label">المدة:{{ itemPage.duration }} {{ $t('day_s') }}</span>
        </div>
      </div>
      <div class="incubator-business-sidebar__body my-3">
        <d-expanded-panel id="step-1">
          <template v-slot>
            <d-expanded-panel-item v-for="(item, n) in items" :opened="status[(n - 1) % 3] === 'selected'" :key="n" classTitle="step-title">
              <template v-slot:btnTitle>
                <d-stepper-icon :status="item.status"></d-stepper-icon>
                {{ item.title }}
              </template>
              <d-stepper-head vertical>
                <d-stepper-head-item
                  v-for="(phase, i) in item.courses"
                  :key="i"
                  :status="phase.status"
                  @click="onChoose(phase, item.id)"
                >
                  {{ phase.title }}
                </d-stepper-head-item>
                <div v-if="item.models.length > 0">
                  <d-stepper-head-item v-for="(phase, i) in item.models" :key="i" :status="phase.status" @click="onChoose2(phase, item.id)">
                    {{ phase.title }}
                  </d-stepper-head-item>
                </div>
                <div v-if="item.title == 'المرحلة الأولى'" style="cursor: pointer" class="t-c mt-3" @click="onChoose3('145')">نموذج : الأربع أفكار</div>
                <div v-if="item.title == 'المرحلة الثانية'" style="cursor: pointer" class="t-c mt-3" @click="onChoose3('1450')">نموذج: العرض الاستثماري</div>
                <div v-if="item.title == 'المرحلة النهائية'" style="cursor: pointer" class="t-c mt-3" @click="onChoose3('146')">نموذج: دراسة الجدوى الإلكترونية</div>
              </d-stepper-head>
            </d-expanded-panel-item>
          </template>
        </d-expanded-panel>
      </div>
    </div>
  </div>
</template>

<style>
.incubator-business-sidebar {
  width: 100%;
  overflow: auto;
  height: 900px;
  background: #F9FAFC; /* A light background color */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); /* A subtle box shadow for elevation */
  border: 1px solid #E5E9F2; /* A light border for separation */
  border-radius: 10px; /* Round the corners */

  /* Add a linear gradient background for a modern look */
  background: linear-gradient(45deg, #EDEFF7, #F9FAFC);
}
.incubator-business-sidebar__wrapper {
  padding: 20px;
}

h1 {
  font-size: 24px;
  font-weight: 600; /* Increase font weight for emphasis */
  color: #2D3748; /* A darker text color */
  margin: 0;
  padding-bottom: 15px; /* More spacing at the bottom */
}

.incubator-business-sidebar__header {
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}


.incubator-business-sidebar__body {
  height: 80%;
  margin: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
}

.incubator-business-sidebar .percent-label {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.1667;
  padding: 0 5px;
  text-transform: capitalize;
  color: #2D2F3A;
}

.incubator-business-sidebar .step-title {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: #2D2F3A;
  margin: 0;
  background-color: #F5F5F5; /* Add a background color to step titles */
  padding: 5px 10px; /* Add padding to step titles */
  border-radius: 5px; /* Round the corners of step titles */
}
</style>

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
  items:[],
  modelsDesigne:[{name:'',id:'145'},{name:'',id:'145'}]
}),
methods:{
  onChoose(phase,stage_id){
    this.fireEvent('phase-choosen',{...phase,stage_id})
  },
  onChoose2(phase,stage_id){
    this.fireEvent('phase-choosen',{...phase,stage_id})
  },
    onChoose3(Id){
    this.fireEvent('phase-choosen',{Id});

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
  height: 900px;
  /* height: calc(100vh - 150px); */
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
  height: 80%;
  margin: 15px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

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
.active-shadow {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
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
  items:[],
  modelsDesigne:[{name:'',id:'145'},{name:'',id:'145'}]
}),
methods:{
  onChoose(phase,stage_id){
    this.fireEvent('phase-choosen',{...phase,stage_id})
  },
  onChoose2(phase,stage_id){
    this.fireEvent('phase-choosen',{...phase,stage_id})
  },
    onChoose3(Id){
    this.fireEvent('phase-choosen',{Id});

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
  height: 900px;
  /* height: calc(100vh - 150px); */
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
  height: 80%;
  margin: 15px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

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