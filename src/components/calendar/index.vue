<template>
  <div style="margin: -51px 0;" :id="id" class=" e "></div>
</template>

<script>
export default {
 name:'calendar-simple',
 data:()=>({
  id:'calendar-'+Math.random().toString().substring(2,16)
 }),
 mounted(){
    $("#"+this.id).simpleCalendar({
  displayEvent: true,
  events: [
      // generate new event after tomorrow for one hour
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
      }
  ],
  months: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
})

 }
}
</script>

<style>

</style>