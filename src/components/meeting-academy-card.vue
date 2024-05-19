<template>
  <div class="col-md-4 col-12 p-2">
    <div class="d-flex flex-column my-2 gap-2" style="height: auto">
      <div class="student-course__image" style="height: 200px">
        <router-link
          custom
          :to="getRouteLocale('academy-learning-meeting-show', { id: item.id })"
        >
          <img
            @click="goToCourse(navigate, $event)"
            @error="handleImageError"
            class="px-2 py-2 rounded-3"
            height="180px"
            :src="img"
            :alt="title"
            style="width: 100%; height: 220px"
          />
        </router-link>
      </div>
      <router-link
        style="color: black"
        :to="getRouteLocale('academy-learning-meeting-show', { id: item.id })"
      >
        <div class="py-3">
          <div
            class="d-flex justify-content-between align-items-cent px-3"
            style="align-items: baseline"
          ></div>
          <h6 class="text-end px-3">
            {{ title }}
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
  </div>
</template>

<script>
import commonAPI from "@/services/api/common";

export default {
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    type: {
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    item: {
      type: Object,
    },
  },
  computed: {
    typeText() {
      let r = commonAPI.getCourseTypes().find((x) => x.id == this.type);
      return r ? r.name : this.type;
    },
    dateText() {
      if (!this.date) return "N/A";
      let parts = this.date.trim().split("-");

      let date = new Date(parts[2], parts[1], parts[0]);
      let d = date.getDate();
      let m = this.getTranslateMonth(date.getMonth());
      return `${d} ${m}`;
    },
  },
  methods: {
    handleImageError(event) {
      // Handle the image error by replacing the src attribute with the placeholder image URL
      event.target.src = "/assets/img/no-img.png"; // Replace with your placeholder image URL
    },
  },
};
</script>

<style></style>
