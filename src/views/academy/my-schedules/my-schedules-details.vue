<template>
  <div class="section container" style="margin-top: 125px">
    <div class="d-flex justify-content-between">
      <h1 class="home-section-title">جدول مواعيدي</h1>
      <span>
        <button
          @click="editSchedule"
          class="mx-2 btn btn-danger btn-edit px-5 my-3"
        >
          <i class="fa-regular fa-pen-to-square"></i>{{ " " + $t("edit") }}
        </button>
        <button @click="deleteSchedule" class="mx-2 btn btn-danger px-5 my-3">
          <i class="fa-regular fa-trash-can"></i> {{ " " + $t("delete") }}
        </button>
      </span>
    </div>

    <vc-calendar
      class="custom-calendar max-w-full mt-5"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
      :locale="$i18n.locale"
    >
      <template v-slot:day-content="{ day, attributes }">
        <div
          class="flex flex-col h-full position-relative z-10 overflow-hidden mb-3"
          style="
            background: #f6f8f9;
            border-radius: 20px;
            width: 150px;
            height: 115px;
            padding: 14px;
          "
        >
          <span class="day-label text-sm" style="color: #cdd7d8">{{
            day.day
          }}</span>
          <div
            class="flex-grow overflow-y-autooverflow-x-auto overflow-hidden position-absolute top-0 left-0 w-100 h-100"
          >
            <div
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs w-100 h-100 leading-tight rounded-sm mt-0 mb-1"
              style="padding: 14px"
              :class="attr.customData.class"
            >
              <span class="day-label text-sm" style="color: #cdd7d8">{{
                day.day
              }}</span>

              <p
                class="text-center"
                style="margin-top: 10% !important; margin-bottom: 0 !important"
              >
                <!-- {{ attr.customData.title }} -->
                <d-time-icon :size="16" color="white" />
                10AM : 12PM
              </p>
              <div class="text-center">...</div>
            </div>
          </div>
        </div>
      </template>
    </vc-calendar>

    <DialogEditSchedule @success="updateEventSuccess" />
    <DialogDeleteSchedule @success="updateEventSuccess" />
  </div>
</template>

<script>
import DialogEditSchedule from "./dialogs/edit-schedule/index.vue";
import DialogDeleteSchedule from "./dialogs/delete-schedule/index.vue";
export default {
  name: "my-schedule",
  components: {
    DialogEditSchedule,
    DialogDeleteSchedule,
  },
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      schedule: {},
      masks: {
        weekdays: "WWW",
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: "Lunch with mom.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            title: "Take Noah to basketball practice",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          customData: {
            title: "Noah's basketball game.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: "Take car to the shop",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 20),
        },
        {
          key: 4,
          customData: {
            title: "Meeting with new client.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 7),
        },
        {
          key: 5,
          customData: {
            title: "Mia's gymnastics practice.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 6,
          customData: {
            title: "Cookout with friends.",
            class: "bg-red-600 text-white",
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {
          key: 7,
          customData: {
            title: "Mia's gymnastics recital.",
            class: "bg-pink-500 text-white",
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 8,
          customData: {
            title: "Visit great grandma.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 25),
        },
      ],
    };
  },
  methods: {
    updateEventSuccess() {},
    editSchedule() {
      this.fireOpenDialog("edit-schedule", this.schedule);
    },
    deleteSchedule() {
      this.fireOpenDialog("delete-schedule", this.schedule);
    },
    async loadBlogCategories() {
      try {
        // let { data } = await this.$axios.get("academy/schedule");
        if (data.success) {
          console.log("data", data);
          // this.categories = data.data
        }
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.btn-edit {
  border: 1px solid #1fb9b3 !important;
  color: #1fb9b3 !important;
}
.bg-red-600 {
  background: #f2631c;
}
::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-track {
  display: none;
}

/deep/ .custom-calendar.vc-container {
  border: 0 !important;
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;

  & .vc-header {
    background-color: #f1f5f8;

    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;

    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>
