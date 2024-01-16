<template>
    <div class="container mt-5">
        <PartMembership />
        <PartSchedule />

    </div>
</template>

<script>
import PartSchedule from './schedule-riadiat.vue'
import PartMembership from './join-membership.vue'
export default {
    name: "section-3",
    components: {
        PartMembership,
        PartSchedule
    },

    created() {
        const plugin = document.createElement("script");
        plugin.innerHTML = `
    $(function() {     $("#calendarContainer").simpleCalendar({
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
})
`;
        document.body.appendChild(plugin);
    }
}
</script>

<style></style>