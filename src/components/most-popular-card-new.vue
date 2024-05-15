<template>
  <div
    class="student-course d-flex flex-column gap-2 rounded-3"
    style="height: auto; width: 100%"
  >
    <div class="student-course__image rounded-3">
      <router-link
        custom
        v-slot="{ navigate }"
        :to="getRouteLocale('academy-course-show', { id: item.id })"
      >
        <img
          @click="goToCourse(navigate, $event)"
          class="w-100 px-3 py-3 rounded-3"
          :src="item.image_path"
          @error="handleImageError"
          :alt="item.title"
          height="100%"
        />
      </router-link>
    </div>
    <router-link
      style="color: black"
      :to="getRouteLocale('academy-course-show', { id: item.id })"
    >
      <div class="py-3">
        <div
          class="d-flex justify-content-between align-items-cent px-3"
          style="align-items: baseline"
        ></div>
        <h6 class="title-text text-end px-3">
          {{ item.title }}
        </h6>
      </div>
      <div class="d-flex justify-content-between px-2 align-items-center">
        <p style="color: #1fb9b3; font-size: 16px">اذهب الى اللقاء</p>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_4986_192319)">
            <path
              opacity="0.5"
              d="M18.3314 11.1377C18.8491 11.1377 19.2689 10.718 19.2689 10.2002C19.2689 9.68243 18.8491 9.2627 18.3314 9.2627V11.1377ZM18.3314 9.2627H4.99805V11.1377H18.3314V9.2627Z"
              fill="#2CB7B3"
            />
            <path
              d="M9.99805 5.2002L4.99805 10.2002L9.99805 15.2002"
              stroke="#2CB7B3"
              stroke-width="1.875"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_4986_192319"
              x="-2.33398"
              y="0.200195"
              width="28"
              height="28"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4986_192319"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4986_192319"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </router-link>
  </div>
</template>

<script>
import academyAPI from "@/services/api/academy";
export default {
  name: "most-popular-cards",
  props: {
    item: {},
    showInfo: {
      type: Boolean,
      default: true,
    },
    url: {},
    showProgress: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    courseType() {
      if (this.item.type === "on-site") return this.item.place_name;
      return this.$t(this.item.type);
    },
  },
  methods: {
    handleImageError(e) {
      e.target.src = `${this.publicPath}assets/img/no-img.png`;
    },
    async rateCourse(dataR, form) {
      let valid = await form.validate();
      if (!valid) return;
      try {
        let { data } = await academyAPI.coursesApi.rateItem(
          this.item.id,
          dataR
        );
        if (data.success) {
          /* let dataEvt ={
                         title:'',
                         description:``
                     }
                     this.showSuccessMsg(dataEvt);
                     */
          return true;
        } else {
          window.SwalError(data.message);
          return false;
        }
      } catch (error) {
        window.DHelper.catchException.call(this, error, form);
        return false;
      }
    },
    rateCourseDialog() {
      this.fireOpenDialog("standard-rate-dialog", {
        title: this.$t("rate-training-course"),
        btns: [{ title: this.$t("send-rate"), action: this.rateCourse }],
      });
    },
    goToCourse(navigate, evt) {
      //if(evt) evt.preventDefault();
      if (this.item) navigate(evt);
      else {
        console.mylog("not url");
      }
    },
  },
};
</script>

<style scoped>
.student-course {
  box-shadow: 0px 1px 2px 0px #3d3c3c1a;
}
.title-text {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.student-course__image {
  height: 173px;
  min-height: 173px;
  border-top-left-radius: var(--bs-border-radius) !important;
  border-top-right-radius: var(--bs-border-radius) !important;
}

.student-course__image img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

.student-course__title {
  font-style: normal;
  font-size: 17px;
  line-height: 24px;
  /* identical to box height, or 120% */
  text-transform: capitalize;
  color: #414042;
}

.student-course__department {
  font-size: 12px;
  line-height: 17px;
  /* identical to box height, or 142% */

  /* color: #1FB9B3; */
}

.student-course__description {
  font-style: normal;
  font-size: 12px;
  line-height: 17px;
  /* or 142% */
  color: #737373;
  margin: 0;
  height: 34px;
  text-align: start;
}

.student-course__item-info {
  min-width: 50px;
  margin: 0;
  font-style: normal;
  font-size: 13px;
  line-height: 17px;
  /* identical to box height, or 106% */

  display: flex;
  align-items: center;

  color: #979797;
}

.student-course__item-percent-label {
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  text-transform: capitalize;

  /* Medium gray */

  color: #737373;
}

.user_info_description {
  overflow: hidden;
  text-overflow: ellipsis;
  height: 50px;
}
.price-section {
  font-weight: bold;
}
</style>
