<template>
  <d-dialog-large 
  :group="group"
  :openDialog="openDialog"
  :closeDialog="closeDialog"
  :xl="false"
  >
      <template v-slot:default="{dialog}">
        <div>
          {{ dateSelected?dateSelected.toISOString().split("T")[0]:'' }}
        </div>
        <d-date-picker v-if="dialog" v-model="dateSelected" 
        :attributes="attributes_date" 
        :min-date="minDate"
        is-expanded  
        class="date-service-provider " 
        />
      </template>
        <template v-slot:actions="">
          <button @click="doBooking" :disabled="!dateSelected" style="height: 45px;" class="btn btn-main" >حجز</button>
          <button type="button" class="btn btn-custmer-w " @click="closeEvent">الغاء</button>
        </template>

  
  </d-dialog-large>
</template>

<script>
export default {
 props:{
    group:{
        type:String,
        default:'booking-service'
    }
 },
 name:'booking-service',
 data:()=>{
  return {
    attributes_date:[
          {
            key: 'today',
            highlight: true,  
            dates: {
        start: new Date(), 
        //end:null  
      }
          }
        ],
    dateSelected:null,
    minDate:null,
    itemDialog :{},
  }
 },
 methods:{
  openDialog(dataEvent){
            this.dateSelected = null
            this.minDate=new Date()
            this.itemDialog = {...dataEvent}
            return true;
        },
        closeDialog(){
            return true;
        },
        closeEvent(){
          this.fireCloseDialog(this.group)
        },
  doBooking(){
    this.closeEvent()
    let dataEvent = {
      date:this.dateSelected.toISOString().split("T")[0],
      item:this.itemDialog
    }
    this.fireOpenDialog('request-service',dataEvent)
  }
 }
 }
</script>

<style>

</style>