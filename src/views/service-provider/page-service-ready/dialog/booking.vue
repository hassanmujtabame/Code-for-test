<template>
  <!-- -------------------------------- request service  -->
  <d-dialog-large :group="group"
  :openDialog="openDialog"
  :closeDialog="closeDialog"
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
        <template v-slot:actions="{close}">
          <button @click="doBooking(close)" :disabled="!dateSelected" style="height: 45px;" class="btn btn-main" >حجز</button>
          <button type="button" class="btn btn-custmer-w " @click="close">الغاء</button>
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
    minDate:null
  }
 },
 methods:{
  openDialog(){
            this.dateSelected = null
            this.minDate=new Date()
            return true;
        },
        closeDialog(){
            return true;
        },
  doBooking(close){
    close()
    this.fireOpenDialog('request-service',this.dateSelected.toISOString().split("T")[0])
  }
 }
 }
</script>

<style>

</style>