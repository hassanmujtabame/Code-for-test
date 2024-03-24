<template>
  <div
    style="background-color: #fff; width: 280px"
    class="d-flex flex-column gap-2 rounded-4 shadow"
  >
    <div style="height: 164px" class="px-2 py-2 rounded-4">
      <router-link class="" v-if="to" :to="to">
        <img
          style="height: 100%; width: 100%"
          class="img-fluid rounded-4"
          :src="img"
          alt
        />
      </router-link>
      <img
        style="height: 100%; width: 100%"
        class="img-fluid rounded-3"
        v-else
        @click="$emit('click-image')"
        :src="img"
        alt
      />
    </div>
    <div class="d-flex justify-content-between align-items-center px-2 py-2">
      <h6 style="font-size: 16px">
        {{ name }}
      </h6>
      <span style="color: #f2631c; font-size: 14px">
        {{ number }}
        دورة تدريبية
      </span>
    </div>
    <!-- <p style="color: #888" class="my-2">
      {{ job_title }}
    </p> -->
    <router-link class="" v-if="to" :to="to">
      <div class="d-flex justify-content-between px-2 py-2">
        <p style="color: #2cb7b3; font-size: 16px">مشاهده پروفایل</p>
        <svg
          style="padding-top: 6px"
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
  <!-- <div
    style="
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      min-height: 250px;
    "
    class="d-flex gap-4 flex-column align-items-center shadow justify-content-center"
  >
    <div style="height: 164px; width: 100%" class="">
      <router-link class="" v-if="to" :to="to">
        <img
          style="
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            height: 100%;
            width: 100%;
          "
          class="img-fluid"
          :src="img"
          alt
        />
      </router-link>
      <img
        style="
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          height: 100%;
          width: 100%;
        "
        class="img-fluid"
        v-else
        @click="$emit('click-image')"
        :src="img"
        alt
      />
    </div>
    <div style="min-height: 86px" class="text-center">
      <h3>
        {{ name }}
      </h3>
      <p style="color: #1fb9b3" class="my-2">
        {{ description }}
      </p>
    </div>
  </div> -->
  <!-- <div class="" :class="{ 'h-job': showJob }" style="">
      <h6 class="">{{ name | truncateWords(2) }}</h6>
      <p style="color: #1fb9b3" class="">
        {{ description }}
      </p>
      <div
        v-if="countCourse"
        class="provider-card__description t-c d-flex align-items-center pb-2"
      >
        <img :src="`${publicPath}assets/svg/MyIcon.svg`" />
        <span>{{ countCourse }} دورة تدريبية </span>
      </div>
      <div
        v-if="!countCourse"
        class="provider-card__description t-c d-flex align-items-center pb-2"
      ></div>
      <div v-if="showRate">
        <RateStars :value="rate" :size="12" />
      </div>
    </div>
  </div> -->
  <!-- <div class="provider-card">
    <div class="provider-card__wrapper">
      <div class="provider-card__image mb-4 px-3 py-3 rounded-3">
        <router-link class="" v-if="to" :to="to">
          <img class="rounded-3" :src="img" alt />
        </router-link>
        <img v-else @click="$emit('click-image')" :src="img" alt />
      </div>
      <div
        class="provider-card__content"
        :class="{ 'h-job': showJob }"
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <h6 class="provider-card__name">{{ name | truncateWords(2) }}</h6>
        <p style="color: #1fb9b3" class="provider-card__description t-c">
          {{ description }}
        </p>
        <div
          v-if="countCourse"
          class="provider-card__description t-c d-flex align-items-center pb-2"
        >
          <img :src="`${publicPath}assets/svg/MyIcon.svg`" />
          <span>{{ countCourse }} دورة تدريبية </span>
        </div>
        <div
          v-if="!countCourse"
          class="provider-card__description t-c d-flex align-items-center pb-2"
        ></div>
        <div v-if="showRate">
          <RateStars :value="rate" :size="12" />
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div class="" :class="{ 'h-job': showJob }" style="">
      <h6 class="">{{ name | truncateWords(2) }}</h6>
      <p style="color: #1fb9b3" class="">
        {{ description }}
      </p>
      <div
        v-if="countCourse"
        class="provider-card__description t-c d-flex align-items-center pb-2"
      >
        <img :src="`${publicPath}assets/svg/MyIcon.svg`" />
        <span>{{ countCourse }} دورة تدريبية </span>
      </div>
      <div
        v-if="!countCourse"
        class="provider-card__description t-c d-flex align-items-center pb-2"
      ></div>
      <div v-if="showRate">
        <RateStars :value="rate" :size="12" />
      </div>
    </div>
  </div> -->
  <!-- <div class="provider-card">
    <div class="provider-card__wrapper">
      <div class="provider-card__image mb-4 px-3 py-3 rounded-3">
        <router-link class="" v-if="to" :to="to">
          <img class="rounded-3" :src="img" alt />
        </router-link>
        <img v-else @click="$emit('click-image')" :src="img" alt />
      </div>
      <div
        class="provider-card__content"
        :class="{ 'h-job': showJob }"
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <h6 class="provider-card__name">{{ name | truncateWords(2) }}</h6>
        <p style="color: #1fb9b3" class="provider-card__description t-c">
          {{ description }}
        </p>
        <div
          v-if="countCourse"
          class="provider-card__description t-c d-flex align-items-center pb-2"
        >
          <img :src="`${publicPath}assets/svg/MyIcon.svg`" />
          <span>{{ countCourse }} دورة تدريبية </span>
        </div>
        <div
          v-if="!countCourse"
          class="provider-card__description t-c d-flex align-items-center pb-2"
        ></div>
        <div v-if="showRate">
          <RateStars :value="rate" :size="12" />
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div class="" :class="{ 'h-job': showJob }" style="">
      <h6 class="">{{ name | truncateWords(2) }}</h6>
      <p style="color: #1fb9b3" class="">
        {{ description }}
      </p>
      <div
        v-if="countCourse"
        class="provider-card__description t-c d-flex align-items-center pb-2"
      >
        <img :src="`${publicPath}assets/svg/MyIcon.svg`" />
        <span>{{ countCourse }} دورة تدريبية </span>
      </div>
      <div
        v-if="!countCourse"
        class="provider-card__description t-c d-flex align-items-center pb-2"
      ></div>
      <div v-if="showRate">
        <RateStars :value="rate" :size="12" />
      </div>
    </div>
  </div> -->
  <!-- <div class="provider-card">
    <div class="provider-card__wrapper">
      <div class="provider-card__image mb-4 px-3 py-3 rounded-3">
        <router-link class="" v-if="to" :to="to">
          <img class="rounded-3" :src="img" alt />
        </router-link>
        <img v-else @click="$emit('click-image')" :src="img" alt />
      </div>
      <div
        class="provider-card__content"
        :class="{ 'h-job': showJob }"
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <h6 class="provider-card__name">{{ name | truncateWords(2) }}</h6>
        <p style="color: #1fb9b3" class="provider-card__description t-c">
          {{ description }}
        </p>
        <div
          v-if="countCourse"
          class="provider-card__description t-c d-flex align-items-center pb-2"
        >
          <img :src="`${publicPath}assets/svg/MyIcon.svg`" />
          <span>{{ countCourse }} دورة تدريبية </span>
        </div>
        <div
          v-if="!countCourse"
          class="provider-card__description t-c d-flex align-items-center pb-2"
        ></div>
        <div v-if="showRate">
          <RateStars :value="rate" :size="12" />
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "card-parson",
  components: {},
  mounted() {
    this.randomNumber();
  },
  props: {
    showRate: {
      type: Boolean,
      default: false,
    },
    showJob: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
    },
    name: {
      type: String,
    },
    to: {
      type: [Object, Array],
      default: null,
    },
    description: {
      type: String,
    },
    job_title: {
      type: String,
    },
    countCourse: {
      type: [String, Number],
    },
    rate: {
      type: [String, Number],
      default: 0,
    },
  },
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    randomNumber() {
      this.number = Math.floor(Math.random() * (21 - 10)) + 10;
      return this.number;
    },
  },
};
</script>

<style scoped>
.provider-card {
  --raduis-provider: 11px;
  padding: 5px;
  width: 100%;
}

.provider-card__wrapper {
  overflow: hidden;
  margin: 0 0 0px 0;
  width: 90%;
  /*max-width: 250px;*/
  /*height: 340px;*/
  border-radius: 11px;
  /*border:0.5px solid #f2f2f2;*/
  border: 1px solid #cdd7d8;
  background: white;
}

.provider-card__wrapper:hover {
  box-shadow: 0px 1px 8px;
}

.provider-card__image {
  /*border-radius: 100%;*/
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
}

.provider-card__image img {
  object-fit: cover;
  width: 100%;
  height: 200px;
  /*
  object-fit: fill;
  width: 100%;
  height: 100%;*/
}

.provider-card__content {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 20px 12px; */
  gap: 8px;
  background: #ffffff;
  /* box-shadow: 0px 0px 78.2699px rgba(187, 188, 189, 0.3); */
  border-radius: 0px 0px var(--raduis-provider) var(--raduis-provider);
}

.provider-card__name {
  margin: 0;
  padding: 0;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  /* identical to box height, or 167% */

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: capitalize;

  color: #737373;
  /*color:var(--b-color)*/
}

.provider-card__description {
  margin: 0;
  padding: 0;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */
  height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-transform: capitalize;
}
.h-job {
  height: 115px;
}
</style>
