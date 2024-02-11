<template>
  <div class="student-course box border" style="height: auto; width: 100%">
    <div class="student-course__image">
      <router-link
        custom
        v-slot="{ navigate }"
        :to="getRouteLocale('academy-course-show', { id: item.id })"
      >
        <img
          @click="goToCourse(navigate, $event)"
          class="w-100 px-3 py-3 rounded-top"
          :src="item.image_path"
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
        >
          <!-- <h6 class="student-course__title">
            {{ item.title }}
          </h6> -->
          <!-- <div class="d-flex">
            <p class="student-course__department t-c">
              {{ item.views }} مشاهدة
            </p>
            <img
              class="mx-2"
              style="width: 20px; height: 20px"
              :src="`${publicPath}assets/img/WhatsApp Image 2023-09-20 at 2.50.30 PM.jpeg`"
            />
          </div> -->
        </div>
        <h6 class="text-end px-3">
          {{ item.title }}
        </h6>
        <div class="d-flex px-3 align-items-center">
          <svg
            width="15"
            height="14"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4127 15.8781L15.1377 18.8781C15.7471 19.2625 16.4971 18.6906 16.319 17.9875L14.9502 12.6062C14.9132 12.4571 14.9191 12.3005 14.9672 12.1545C15.0153 12.0086 15.1037 11.8792 15.2221 11.7812L19.4596 8.24687C20.0127 7.78749 19.7315 6.85937 19.0096 6.81249L13.4784 6.45624C13.3274 6.44746 13.1823 6.39491 13.0608 6.305C12.9393 6.2151 12.8466 6.09174 12.794 5.94999L10.7315 0.756243C10.6769 0.606152 10.5774 0.476496 10.4466 0.384876C10.3158 0.293256 10.16 0.24411 10.0002 0.24411C9.84053 0.24411 9.68468 0.293256 9.55386 0.384876C9.42305 0.476496 9.32359 0.606152 9.26899 0.756243L7.20649 5.94999C7.15392 6.09174 7.06121 6.2151 6.93967 6.305C6.81813 6.39491 6.67304 6.44746 6.52212 6.45624L0.990865 6.81249C0.26899 6.85937 -0.0122599 7.78749 0.540865 8.24687L4.77837 11.7812C4.8968 11.8792 4.98516 12.0086 5.03327 12.1545C5.08137 12.3005 5.08725 12.4571 5.05024 12.6062L3.78462 17.5937C3.56899 18.4375 4.46899 19.1219 5.19087 18.6625L9.58774 15.8781C9.71104 15.7997 9.85413 15.7581 10.0002 15.7581C10.1464 15.7581 10.2894 15.7997 10.4127 15.8781Z"
              fill="#FFC27A"
            />
          </svg>
          <svg
            width="15"
            height="14"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4127 15.8781L15.1377 18.8781C15.7471 19.2625 16.4971 18.6906 16.319 17.9875L14.9502 12.6062C14.9132 12.4571 14.9191 12.3005 14.9672 12.1545C15.0153 12.0086 15.1037 11.8792 15.2221 11.7812L19.4596 8.24687C20.0127 7.78749 19.7315 6.85937 19.0096 6.81249L13.4784 6.45624C13.3274 6.44746 13.1823 6.39491 13.0608 6.305C12.9393 6.2151 12.8466 6.09174 12.794 5.94999L10.7315 0.756243C10.6769 0.606152 10.5774 0.476496 10.4466 0.384876C10.3158 0.293256 10.16 0.24411 10.0002 0.24411C9.84053 0.24411 9.68468 0.293256 9.55386 0.384876C9.42305 0.476496 9.32359 0.606152 9.26899 0.756243L7.20649 5.94999C7.15392 6.09174 7.06121 6.2151 6.93967 6.305C6.81813 6.39491 6.67304 6.44746 6.52212 6.45624L0.990865 6.81249C0.26899 6.85937 -0.0122599 7.78749 0.540865 8.24687L4.77837 11.7812C4.8968 11.8792 4.98516 12.0086 5.03327 12.1545C5.08137 12.3005 5.08725 12.4571 5.05024 12.6062L3.78462 17.5937C3.56899 18.4375 4.46899 19.1219 5.19087 18.6625L9.58774 15.8781C9.71104 15.7997 9.85413 15.7581 10.0002 15.7581C10.1464 15.7581 10.2894 15.7997 10.4127 15.8781Z"
              fill="#FFC27A"
            />
          </svg>
          <svg
            width="15"
            height="14"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4127 15.8781L15.1377 18.8781C15.7471 19.2625 16.4971 18.6906 16.319 17.9875L14.9502 12.6062C14.9132 12.4571 14.9191 12.3005 14.9672 12.1545C15.0153 12.0086 15.1037 11.8792 15.2221 11.7812L19.4596 8.24687C20.0127 7.78749 19.7315 6.85937 19.0096 6.81249L13.4784 6.45624C13.3274 6.44746 13.1823 6.39491 13.0608 6.305C12.9393 6.2151 12.8466 6.09174 12.794 5.94999L10.7315 0.756243C10.6769 0.606152 10.5774 0.476496 10.4466 0.384876C10.3158 0.293256 10.16 0.24411 10.0002 0.24411C9.84053 0.24411 9.68468 0.293256 9.55386 0.384876C9.42305 0.476496 9.32359 0.606152 9.26899 0.756243L7.20649 5.94999C7.15392 6.09174 7.06121 6.2151 6.93967 6.305C6.81813 6.39491 6.67304 6.44746 6.52212 6.45624L0.990865 6.81249C0.26899 6.85937 -0.0122599 7.78749 0.540865 8.24687L4.77837 11.7812C4.8968 11.8792 4.98516 12.0086 5.03327 12.1545C5.08137 12.3005 5.08725 12.4571 5.05024 12.6062L3.78462 17.5937C3.56899 18.4375 4.46899 19.1219 5.19087 18.6625L9.58774 15.8781C9.71104 15.7997 9.85413 15.7581 10.0002 15.7581C10.1464 15.7581 10.2894 15.7997 10.4127 15.8781Z"
              fill="#FFC27A"
            />
          </svg>
          <svg
            width="15"
            height="14"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4127 15.8781L15.1377 18.8781C15.7471 19.2625 16.4971 18.6906 16.319 17.9875L14.9502 12.6062C14.9132 12.4571 14.9191 12.3005 14.9672 12.1545C15.0153 12.0086 15.1037 11.8792 15.2221 11.7812L19.4596 8.24687C20.0127 7.78749 19.7315 6.85937 19.0096 6.81249L13.4784 6.45624C13.3274 6.44746 13.1823 6.39491 13.0608 6.305C12.9393 6.2151 12.8466 6.09174 12.794 5.94999L10.7315 0.756243C10.6769 0.606152 10.5774 0.476496 10.4466 0.384876C10.3158 0.293256 10.16 0.24411 10.0002 0.24411C9.84053 0.24411 9.68468 0.293256 9.55386 0.384876C9.42305 0.476496 9.32359 0.606152 9.26899 0.756243L7.20649 5.94999C7.15392 6.09174 7.06121 6.2151 6.93967 6.305C6.81813 6.39491 6.67304 6.44746 6.52212 6.45624L0.990865 6.81249C0.26899 6.85937 -0.0122599 7.78749 0.540865 8.24687L4.77837 11.7812C4.8968 11.8792 4.98516 12.0086 5.03327 12.1545C5.08137 12.3005 5.08725 12.4571 5.05024 12.6062L3.78462 17.5937C3.56899 18.4375 4.46899 19.1219 5.19087 18.6625L9.58774 15.8781C9.71104 15.7997 9.85413 15.7581 10.0002 15.7581C10.1464 15.7581 10.2894 15.7997 10.4127 15.8781Z"
              fill="#FFC27A"
            />
          </svg>
          <svg
            width="15"
            height="14"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4127 15.8781L15.1377 18.8781C15.7471 19.2625 16.4971 18.6906 16.319 17.9875L14.9502 12.6062C14.9132 12.4571 14.9191 12.3005 14.9672 12.1545C15.0153 12.0086 15.1037 11.8792 15.2221 11.7812L19.4596 8.24687C20.0127 7.78749 19.7315 6.85937 19.0096 6.81249L13.4784 6.45624C13.3274 6.44746 13.1823 6.39491 13.0608 6.305C12.9393 6.2151 12.8466 6.09174 12.794 5.94999L10.7315 0.756243C10.6769 0.606152 10.5774 0.476496 10.4466 0.384876C10.3158 0.293256 10.16 0.24411 10.0002 0.24411C9.84053 0.24411 9.68468 0.293256 9.55386 0.384876C9.42305 0.476496 9.32359 0.606152 9.26899 0.756243L7.20649 5.94999C7.15392 6.09174 7.06121 6.2151 6.93967 6.305C6.81813 6.39491 6.67304 6.44746 6.52212 6.45624L0.990865 6.81249C0.26899 6.85937 -0.0122599 7.78749 0.540865 8.24687L4.77837 11.7812C4.8968 11.8792 4.98516 12.0086 5.03327 12.1545C5.08137 12.3005 5.08725 12.4571 5.05024 12.6062L3.78462 17.5937C3.56899 18.4375 4.46899 19.1219 5.19087 18.6625L9.58774 15.8781C9.71104 15.7997 9.85413 15.7581 10.0002 15.7581C10.1464 15.7581 10.2894 15.7997 10.4127 15.8781Z"
              fill="#FFC27A"
            />
          </svg>
          <small style="marign-top: 2px" class="mx-2">(20)</small>
        </div>

        <!-- <p class="student-course__description text-two-lines">{{ item.desc }}</p> -->
        <div
          v-if="item.user_info"
          class="border-top d-flex justify-content-between px-4 align-items-center mt-2 py-2 w-100"
        >
          <!-- <div class="px-3" v-if="item.user_info.name">
            {{ item.user_info.name }}
          </div> -->
          <button class="btn" style="background-color: #1fb9b3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6.00003"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.25 6.00003H18V15.75"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <p
            class="student-course__item-info price-section"
            style="color: #000"
          >
            {{ item.price ?? "N/A" }} {{ $t("riyals") }}
          </p>

          <div
            class="px-3 user_info_description"
            v-if="item.user_info.description"
          >
            {{ item.user_info.description }}
          </div>
        </div>
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
  border-radius: var(--bs-border-radius) !important;
}

.student-course__image {
  height: 173px;
  min-height: 173px;
  border: 1px solid #efefef;
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
