<template>
  <div style="margin: -51px 0;" :id="id" class=" e "></div>
</template>

<script>
export default {
 name:'calendar-simple',
 props:{
  events:{
    type:[Array,Object],
    default:()=>[ // generate new event after tomorrow for one hour
      {
          startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
          endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),
          summary: 'Visit of the Eiffel Tower'
      },
      // generate new event for yesterday at noon
      {
          startDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 12, 0)).toISOString(),
          endDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 11)).getTime(),
          summary: 'Restaurant'
      },
      // generate new event for the last two days
      {
          startDate: new Date(new Date().setHours(new Date().getHours() - 48)).toISOString(),
          endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),
          summary: 'Visit of the Louvre'
      }]
  },
  displayEvent:{
    type:Boolean,
    default:false,
  },
  disableEventDetails:{
    type:Boolean,
    default:true,
  },
  disableEmptyDetails:{
    type:Boolean,
    default:true,
  }
 },
 data:()=>({
  id:'calendar-'+Math.random().toString().substring(2,16)
 }),
 methods:{
 onSelectDate(date,events){
  console.log('onSelectDate',date,events)
  return false;
 }
 },
 mounted(){
    window.$("#"+this.id).simpleCalendar({
      displayYear: true,              // Display year in header
        fixedStartDay: true,            // Week begin always by monday or by day set by number 0 = sunday, 7 = saturday, false = month always begin by first day of the month
        displayEvent: this.displayEvent,             // Display existing event
        disableEventDetails: this.disableEventDetails, // disable showing event details
        disableEmptyDetails: this.disableEmptyDetails, // disable showing empty date details
        events: [],
        onInit: function (calendar) {}, // Callback after first initialization
        onMonthChange: function (month, year) {}, // Callback on month change
        onDateSelect: this.onSelectDate, // Callback on date selection
        onEventSelect: function() {}, // Callback on event selection - use $(this).data('event') to access the event
        onEventCreate: function( $el ) {},          // Callback fired when an HTML event is created - see $(this).data('event')
        onDayCreate:   function( $el, d, m, y ) {},  // Callback fired when an HTML day is created   - see $(this).data('today'), .data('todayEvents')
  months:[this.$t('January'), this.$t('February'), this.$t('March'), this.$t('April'), this.$t('May'), this.$t('June'), this.$t('July'), this.$t('August'), this.$t('September'), this.$t('October'), this.$t('November') , this.$t('December')],
  days:this.$i18n.locale=='ar'?['الاحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت']:undefined,
})

 }
}
</script>

<style>
/*
.e .calendar header{
position: relative;
}
.e .calendar header .btn-prev {
    top: calc(50% - 15px);
    left: 0;
    transform: rotate(-180deg);
}
.e .calendar header .btn-next {
  top: calc(50% - 15px);
    right: 0;
}*/
</style>