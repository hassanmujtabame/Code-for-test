<template>
  <div style="margin-top: 96px">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">هناك خطأ غير معروف يرجي تحديث الصفحة</div>
    <div v-else class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-md-6">
          <h3 class="home-section-title">جدول مواعيدي</h3>
          <p style="font-size: 18px" class="home-section-text">
            قم بإضافة مواعيدك المتاحة ليتمكن أعضاء الشبكة من حجز الموعد المناسب
            لهم
          </p>
        </div>
        <div class="col-md-6 text-start">
          <button class="btn btn-accent py-3" @click="openDialogNewCatSchedule">
            <i style="font-size: 20px" class="fa fa-pen-to-square"></i>{{ " " }}
            ضبط الأوقات وتفاصيل الاستشارات
          </button>
        </div>
      </div>
      <div>
        <div class="m-4">
          <div class="calendar-service-schedule" :class="{ mobile: isMobile }">
            <d-calendar
              v-if="!loading"
              class="custom-calendar max-w-full"
              is-expanded
              :masks="masks"
              disable-page-swipe
              :attributes="attributes"
              @dayclick="dayclick"
            >
              <template v-slot:day-content="{ day, attributes }">
                <div
                  class="d-flex flex-column h-100 z-10 overflow-hidden"
                  :class="{
                    'bg-day':
                      attributes && attributes.some((x) => x.customData),
                  }"
                  :style="{
                    background:
                      attributes && attributes.some((x) => x.customData)
                        ? category_schedule.color
                        : 'inherit',
                  }"
                >
                  <span class="day-label color-day text-sm text-gray-900">{{
                    day.day
                  }}</span>
                  <div
                    class="d-flex flex-column justify-content-center align-items-start flex-grow-1 overflow-y-auto overflow-x-auto"
                  >
                    <div
                      v-for="attr in attributes"
                      :key="attr.id"
                      class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1 w-100"
                    >
                      <div class="text-center" :class="attr.customData.class">
                        <bdi>
                          {{ timeFormatAMPM(attr.customData.start_hour, true) }}
                          :
                          {{
                            timeFormatAMPM(attr.customData.end_hour, true)
                          }}</bdi
                        >
                      </div>
                      <div v-if="false" class="text-center w-100">
                        <button
                          @click="showMenu($event, attr.customData)"
                          class="btn"
                        >
                          <i class="fa-solid fa-ellipsis"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <template v-slot:day-popover="{ day, format, masks }">
                <div class="text-xs text-gray-300 font-semibold text-center">
                  {{ format(day.date, masks.dayPopover) }}
                  <hr class="mt-1" />
                  <div
                    :class="{
                      'text-right': $i18n.locale == 'ar',
                      'text-left': $i18n.locale !== 'ar',
                    }"
                  >
                    <p class="pb-1 mb-1">
                      {{ day.attributes[0].customData.categoryName }}
                    </p>
                    <p class="pb-1 mb-1">
                      {{ $t("titled") }} :
                      {{
                        day.attributes[0]
                          ? day.attributes[0].customData.title
                          : "N/A"
                      }}
                    </p>
                    <p class="pb-1 mb-1">
                      {{ $t("at-time") }} :
                      {{ timeFormatAMPM(day.attributes[0].customData.time) }}
                    </p>
                  </div>
                </div>
              </template>
            </d-calendar>
          </div>
        </div>
      </div>
    </div>
    <div class="day-menu" :style="styleObject">
      <button class="btn" @click="updateEvent" href="#">تعديل</button>
      <button class="btn" @click="deleteEvent" href="#">حذف</button>
    </div>

    <DialogNewSchedule @success="updateEventSuccess" />
  </div>
</template>

<script>
//import categoriesScheduleAPI from '@/services/api/service-provider/categories-schedule'
//import delCatItemDialog from '../dialogs/category-schedule/del-item.vue';
//import delItemDialog from '../dialogs/new-schedule/del-item.vue';
//import DialogNewCategorySchedule from '../dialogs/category-schedule/index.vue'
import DialogNewSchedule from "./dialogs/new-schedule/index.vue";
import consultingAPI from "@/services/api/consulting";
export default {
  name: "page-schedule-consulting",
  components: {
    DialogNewSchedule,
  },
  data: () => {
    return {
      styleObject: {
        display: "none",
      },
      loading: false,
      eventSelected: null,
      hasError: false,
      category_schedule: {
        title: "",
        color: "var(--color-accent)",
      },
      items: [],
      attributes: [],
      masks: {
        weekdays: "WWW",
      },
    };
  },

  methods: {
    updateEvent() {
      this.fireOpenDialog("new-schedule-consulting", this.eventSelected);
      this.hideMenu();
    },
    deleteEvent() {
      this.fireOpenDialog("delete-schedule", this.eventSelected);
      this.hideMenu();
    },
    deleteEventSuccess(item) {
      this.items = this.items.filter((x) => x.id != item.id);
      this.updateAttributes();
    },
    updateEventSuccess(item) {
      let index = this.items.findIndex((x) => x.id == item.id);
      this.items[index] = Object.assign(this.items[index], item);
      this.updateAttributes();
    },
    successUpdate(dataEvent) {
      this.category_schedule.title = dataEvent.title;
      //this.category_schedule.color="var(--color-accent)";
      this.updateAttributes();
    },
    openDialogNewCatSchedule() {
      this.fireOpenDialog("new-schedule-consulting", this.category_schedule);
    },
    hideMenu() {
      if (!this.eventSelected) return;
      this.eventSelected = null;
      this.styleObject.display = "none";
    },
    showMenu(evt, itemSelected) {
      this.eventSelected = itemSelected;
      let width = evt.target.offsetWidth;
      //let height = evt.target.offsetHeight;
      console.log("evt", evt, width);
      let x = evt.clientX - 40 - 20 - evt.offsetX;
      let y = evt.pageY;
      this.styleObject.display = "flex";
      this.styleObject.position = "absolute";
      this.styleObject.top = y + "px";
      this.styleObject.left = x + "px";
      this.styleObject["z-index"] = 9999;
    },
    dayclick(day) {
      console.mylog("day", day);
    },
    async initializing() {
      this.loading = true;
      this.hasError = false;
      try {
        let { data } = await consultingAPI.consultants.myAppointments(
          this.$route.params.id
        );
        if (data.success) {
          this.items = data.data;
          //this.category_schedule = data.data
        } else {
          //this.hasError = true;
        }
      } catch (error) {
        console.log("error", error);
        this.hasError = true;
      }
      this.loading = false;
    },
    updateAttributes() {
      this.attributes = [
        // Attributes for todos
        ...this.items.map((event) => ({
          dates: {
            start: new Date(event.start_date),
            end: new Date(event.end_date),
          },
          popover: true,
          customData: event,
        })),
      ];
    },
    async loadList() {
      this.loading = true;
      try {
        let { data: appointmentsData } =
          await consultingAPI.consultants.myAppointments();
        let { data: availabilityData } =
          await consultingAPI.consultants.getMyAvailability();

        if (availabilityData.success) {
          console.log("availabilityData", availabilityData.data);
        }
        if (appointmentsData.success) {
          console.log("appointmentsData", appointmentsData.data);

          if (process.env.NODE_ENV !== "production")
            this.items.push({
              id: -1,
              title: "تجريب",
              categoryName: "ويبنار تججريب",
              start_date: this.dateToString(new Date()),
              end_date: this.dateToString(new Date()),
              image: null,
              start_hour: "02:37",
              end_hour: "15:00",
              class: "text-white",
            });
          this.updateAttributes();
        }
      } catch (error) {
        console.log("error", error);
      }
      this.loading = false;
    },
  },
  async mounted() {
    //await this.initializing();
    this.loadList();
  },
};
</script>

<style>
.day-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 150px;
  height: 80px;
  background: #ffffff;
  /* box */
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
  border-radius: 0px 0px 8px 8px;
}
.day-menu > a {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* or 142% */

  align-items: center;
  text-align: center;
  color: #737373;
  padding: 10px;
  width: 100%;
}
.calendar-service-schedule::-webkit-scrollbar {
  width: 0px;
}

.calendar-service-schedule::-webkit-scrollbar-track {
  display: none;
}

.calendar-service-schedule .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;
}

.calendar-service-schedule .bg-day {
  background: var(--color-accent);
  height: 100%;
  width: 100%;
}

.calendar-service-schedule .custom-calendar.vc-container .vc-header {
  background-color: #f1f5f8;
  padding: 10px 0;
}

.calendar-service-schedule .custom-calendar.vc-container .vc-weeks {
  padding: 0;
}

.calendar-service-schedule .custom-calendar.vc-container .vc-weekday {
  background-color: var(--weekday-bg);
  border-bottom: var(--weekday-border);
  border-top: var(--weekday-border);
  padding: 5px 0;
}

.calendar-service-schedule .custom-calendar.vc-container .vc-day {
  /* padding: 0 5px 3px 5px;*/
  text-align: left;
  height: var(--day-height);
  min-width: var(--day-width);
  background-color: #f6f8f9;
}

.calendar-service-schedule .custom-calendar.vc-container .vc-day.weekday-1,
.calendar-service-schedule .custom-calendar.vc-container .vc-day.weekday-7 {
  background-color: #f6f8f9;
}

.calendar-service-schedule
  .custom-calendar.vc-container
  .vc-day:not(.on-bottom) {
  border-bottom: var(--day-border);
}

.calendar-service-schedule
  .custom-calendar.vc-container
  .vc-day:not(.on-bottom).weekday-1 {
  border-bottom: var(--day-border-highlight);
}

.calendar-service-schedule
  .custom-calendar.vc-container
  .vc-day:not(.on-right) {
  border-right: var(--day-border);
}

.calendar-service-schedule .custom-calendar.vc-container .vc-day-dots {
  margin-bottom: 5px;
}
.color-day {
  color: #cdd7d8 !important;
}
</style>
