<template>
  <div
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
  </div>
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
import RateStars from "../rate-stars/index";
export default {
  name: "card-parson",
  components: {
    RateStars,
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
    countCourse: {
      type: [String, Number],
    },
    rate: {
      type: [String, Number],
      default: 0,
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
