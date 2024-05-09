<!-- <template>
  <div
    style="
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      width: 250px;
    "
    class="d-flex flex-column gap-1"
  >
    <div
      class="position-relative"
      style="border-top-left-radius: 10px; border-top-right-radius: 10px"
    >
      <img
        style="
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          height: 150px;
          width: 100%;
        "
        class=""
        :src="img"
        :alt="title"
      />
      - <span style="top: 0; right: 0" class="position-absolute px-3 py-1">
      </span> 
    </div>
    <div>
      <h4 style="font-size: 16px; width: 100%">
        {{ title }}
      </h4>
      <p style="color: #2cb7b3; font-size: 14px" v-if="type === 'live'">
        لقاء اونلاين
      </p>
      <p style="color: #2cb7b3; font-size: 14px" v-if="type === 'recored'">
        لقاء مسجل
      </p>
      <p style="color: #2cb7b3; font-size: 14px" v-if="type === 'on-site'">
        لقاء حضورى
      </p>
    </div>
  </div>
  <div class="box" style="height: 200px; width: 300px">
    <div class="main-img position-relative">
      <img
        style="filter: brightness(0.7)"
        class="rounded-2"
        :src="img"
        :alt="title"
        width="100%"
        height="192"
      />
      <div class="position-absolute top-50 px-2 text-start">
        <h6
          style="width: fit-content"
          class="bg-yal p-1 px-2 rounded-2 text-white"
        >
          {{ typeText }}
        </h6>
        <p class="text-white m-0 p-0">{{ title }}</p>
        <p class="text-white p-0 m-0">
          {{ dateText }}
        </p>
      </div>
    </div>
  </div> -->
<!-- <div class="box" style="height: 200px; width: 300px">
    <div class="main-img position-relative">
      <img
        style="filter: brightness(0.7)"
        class="rounded-2"
        :src="img"
        :alt="title"
        width="100%"
        height="192"
      />
      <div class="position-absolute top-50 px-2 text-start">
        <h6
          style="width: fit-content"
          class="bg-yal p-1 px-2 rounded-2 text-white"
        >
          {{ typeText }}
        </h6>
        <p class="text-white m-0 p-0">{{ title }}</p>
        <p class="text-white p-0 m-0">
          {{ dateText }}
        </p>
      </div>
    </div>
  </div> -->
<!-- <div class="box" style="height: 200px; width: 300px">
    <div class="main-img position-relative">
      <img
        style="filter: brightness(0.7)"
        class="rounded-2"
        :src="img"
        :alt="title"
        width="100%"
        height="192"
      />
      <div class="position-absolute top-50 px-2 text-start">
        <h6
          style="width: fit-content"
          class="bg-yal p-1 px-2 rounded-2 text-white"
        >
          {{ typeText }}
        </h6>
        <p class="text-white m-0 p-0">{{ title }}</p>
        <p class="text-white p-0 m-0">
          {{ dateText }}
        </p>
      </div>
    </div>
  </div> -->
<!-- <div class="box  " style=" height:200px; width: 300px">

        <div class="main-img position-relative">
            <img style="filter: brightness(0.7);" class=" rounded-2" :src="img" :alt="title" width="100%" height="192">
            <div class="position-absolute top-50 px-2 text-start">
                <h6 style="width: fit-content;" class="bg-yal p-1 px-2 rounded-2 text-white ">
                    {{ typeText }}
                </h6>
                <p class="text-white m-0 p-0">{{ title }}
                </p>
                <p class="text-white p-0 m-0">
                    {{ dateText }}
                </p>
            </div>

        </div>
    </div> -->
<!-- <div class="box  " style=" height:200px; width: 300px">

        <div class="main-img position-relative">
            <img style="filter: brightness(0.7);" class=" rounded-2" :src="img" :alt="title" width="100%" height="192">
            <div class="position-absolute top-50 px-2 text-start">
                <h6 style="width: fit-content;" class="bg-yal p-1 px-2 rounded-2 text-white ">
                    {{ typeText }}
                </h6>
                <p class="text-white m-0 p-0">{{ title }}
                </p>
                <p class="text-white p-0 m-0">
                    {{ dateText }}
                </p>
            </div>

        </div>
    </div> -->
<!-- <div class="box  " style=" height:200px; width: 300px">

        <div class="main-img position-relative">
            <img style="filter: brightness(0.7);" class=" rounded-2" :src="img" :alt="title" width="100%" height="192">
            <div class="position-absolute top-50 px-2 text-start">
                <h6 style="width: fit-content;" class="bg-yal p-1 px-2 rounded-2 text-white ">
                    {{ typeText }}
                </h6>
                <p class="text-white m-0 p-0">{{ title }}
                </p>
                <p class="text-white p-0 m-0">
                    {{ dateText }}
                </p>
            </div>

        </div>
    </div> 
</template>-->

<template>
  <div class="d-flex flex-wrap card-item">
    <div class="card-img-contaner">
      <div class="course-category">{{ departmentName ?? "department" }}</div>
      <img
        height="150px"
        class="card-img"
        :src="image"
        @error="handleImageError"
      />
    </div>
    <hr />
    <div class="card-title-box px-3">
      <div class="d-flex justify-content-between">
        <div class="d-flex mb-2 align-items-center">
          <i class="fa-solid fa-star star-icon" v-for="i in rate" :key="i"></i>
          <i
            class="fa-regular fa-star star-icon"
            v-for="i in 5 - rate"
            :key="i"
          ></i>
          <span class="mx-1" style="font-size: 9px">({{ ratesNumber }})</span>
        </div>
        <div class="views-text">{{ participants + " " }}مشارك</div>
      </div>

      <p class="card-title p-0">
        {{ title }}
      </p>
      <div class="mb-2">
        <span class="fw-bolder price-text"> {{ price ?? "--.--" }}ر.س </span>
      </div>
    </div>
    <div class="card-teacher-box">
      <div>
        <img
          width="32px"
          height="32px"
          :src="teacher_image"
          @error="handleImageError"
          class="teacher-image"
        />
      </div>
      <div>
        <div class="tacher-name">{{ tacher_name }}</div>
        <div class="tacher-job-title">{{ tacher_job_title }}</div>
      </div>
      <!-- <router-link :to="getRouteLocale('academy-course-show', { id: item_id })">
         ,lang : "ar" 
        <div @click="linkToCourse" class="shadow-sm arrow-box">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </router-link> -->
    </div>
  </div>
</template>

<script>
// import commonAPI from "@/services/api/common";

export default {
  name: "meeting-card",

  props: {
    item: {},
  },
  computed: {
    typeText() {
      // let r = commonAPI.getCourseTypes().find((x) => x.id == this.type);
      // return r ? r.name : this.type;
    },
    dateText() {
      if (!this.date) return "N/A";
      let parts = this.date.trim().split("-");

      let date = new Date(parts[2], parts[1], parts[0]);
      let d = date.getDate();
      let m = this.getTranslateMonth(date.getMonth());
      return `${d} ${m}`;
    },
    title() {
      return this.item.title;
    },
    price() {
      return this.item.price;
    },
    image() {
      return this.item.image;
    },
    departmentName() {
      return this.item.categoryName;
    },
    rate() {
      if (!this.item.rates) {
        return 0;
      }
      const rate = this.item.rates[0];
      if (isNaN(rate)) {
        return 0;
      }
      return rate;
    },
    ratesNumber() {
      if (!this.item.rates) {
        return "0";
      }
      return this.item.rates.length;
    },
    item_id() {
      return this.item.id;
    },
    participants() {
      return this.item.number_participants;
    },
    tacher_name() {
      return this.item.user_info.name;
    },
    tacher_job_title() {
      return this.item.user_info.job_title ?? "ريادية";
    },
    teacher_image() {
      return this.item.user_info.image;
    },
  },
  methods: {
    handleImageError(event) {
      // Handle the image error by replacing the src attribute with the placeholder image URL
      event.target.src = "/assets/img/no-img.png"; // Replace with your placeholder image URL
    },
    linkToCourse() {},
  },
};
</script>

<style scoped>
.card-item {
  min-height: 290px;
  border-radius: 12px;
  background-color: #fff;
}
.card-img-contaner {
  position: relative;
  margin: 12px;
  width: 100%;
  height: 150px;
  border-radius: 6px;
  overflow: hidden;
}
.card-img {
  object-fit: cover;
}
.course-category {
  position: absolute;
  font-size: 12px;
  padding-inline: 10px;
  top: 5px;
  left: 6px;
  z-index: 119;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
}
.card-title-box {
  width: 100%;
}
.card-title {
  font-size: 14px;
  display: block; /* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  height: 1.8em;
  line-height: 1.8em;
}
.card-teacher-box {
  border-top: solid 1px #e7e9eb;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 5px 10px;
}
.star-icon {
  font-size: 9px;
  color: #ffc27a;
}
.arrow-box {
  border-radius: 5.5px;
  background-color: #f9fafc;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6d737a;
}
.arrow-box:hover {
  cursor: pointer;
}
.price-text {
  color: #1fb9b3;
  font-size: 10px;
  font-weight: 400;
}
.views-text {
  color: #52565c;
  font-size: 9px;
  font-weight: 200;
}
.teacher-image {
  margin: 5px;
  border-radius: 32px;
  object-fit: cover;
}
.tacher-name {
  color: #414042;
  font-size: 9px;
  font-weight: 500;
}
.tacher-job-title {
  color: #979797;
  font-size: 8px;
  font-weight: 400;
}
</style>
