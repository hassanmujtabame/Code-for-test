<template>
  <div id="course-contents" class="mt-4">
    <div class="w-100">
      <h1 class="course-guest-section__title">{{ $t("course-contents") }}</h1>
      <d-expanded-panel :id="'accordionFlushExample'">
        <d-expanded-panel-item :title="$t('lectures')" :opened="true">
          <div
            v-for="(lecture, c) in lectures"
            :key="'c' + c"
            class="course-lectures__item"
          >
            <div class="course-lectures__item-tile">{{ lecture.title }}</div>
            <div
              v-if="lecture.is_free === true || c === 0"
              class="course-lectures__item-action"
            >
              <a href="#" @click="watchVideo(lecture, $event)" class="m-c"
                ><i class="fa fa-circle-play"></i> شاهد مجانا</a
              >
            </div>
          </div>
        </d-expanded-panel-item>
      </d-expanded-panel>
    </div>
    <WatchVideo />
  </div>
</template>

<script>
import academyAPI from "@/services/api/academy";
import WatchVideo from "../../dialogs/watch-video/index.vue";
export default {
  name: "section-lectures",
  props: {
    itemPage: {},
  },
  components: {
    WatchVideo,
  },
  data: () => ({
    loading: false,
    lectures: [
      // { title: "مقدمة", is_free: true },
      // { title: "درس الاول" },
      // { title: "درس الثاني" },
    ],
  }),
  methods: {
    watchVideo(lecture, evt) {
      if (evt) evt.preventDefault();
      console.log("tst");

      this.fireOpenDialog("watch-lecture-course-dialog", {
        page: this.itemPage,
        item: lecture,
      });
    },
    async initializing() {
      this.loading = true;
      try {
        let { data } = await academyAPI.lecturesAPI.getAll(this.itemPage.id);
        if (data.success) {
          this.lectures = data.data.map((l) => {
            return {
              is_completed: false,
              ...l,
              uuid: this.generateRandomString(16),
            };
          });
        }
      } catch (error) {
        console.mylog("error", error);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.initializing();
  },
};
</script>

<style>
#course-contents {
  max-width: 628px;
}

#course-contents .accordion-header {
  background: #fdfdfd;
  /* Boarders */

  border: 0.5px solid #d1d1d1;
  border-radius: 8px 8px 0px 0px;
}

#course-contents .accordion-body {
  padding: 0;
}

#course-contents .course-lectures__item {
  /* Turquoise background */
  height: 46px;
  background: #f6f8f9;
  /* Boarders */

  border: 0.5px solid #d1d1d1;
  border-radius: 8px;
  display: flex;
  align-content: center;
  padding: 0 15px;
}

#course-contents .course-lectures__item:not(:last-child) {
  margin-bottom: 10px;
}

#course-contents .course-lectures__item-tile {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  /* Medium gray */

  color: #737373;
  flex: 1;
}

#course-contents .course-lectures__item-tile,
#course-contents .course-lectures__item-action {
  display: flex;
  align-items: center;
}

#accordionFlushExample .accordion-button::after {
  all: unset;
}

#accordionFlushExample .accordion-button::before {
  all: unset;
  content: "\f146";
  font-family: "Font Awesome 6 Free";
  width: var(--bs-accordion-btn-icon-width);
  height: var(--bs-accordion-btn-icon-width);
}

#accordionFlushExample .accordion-button.collapsed::before {
  content: "\f0fe";
}
</style>
