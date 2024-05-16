<template>
  <router-link
    :to="getRouteLocale('academy-course-show', { id: item.id })"
    class="px-3 py-3"
  >
    <div class="d-flex flex-wrap card-item">
      <div class="card-img-contaner">
        <div class="course-type" :class="courseTypeClass">
          {{ courseType ?? "" }}
        </div>
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
            <i
              class="fa-solid fa-star star-icon"
              v-for="i in rate"
              :key="i"
            ></i>
            <i
              class="fa-regular fa-star star-icon"
              v-for="i in 5 - rate"
              :key="10 - i"
            ></i>
            <span class="mx-1" style="font-size: 9px">({{ ratesNumber }})</span>
          </div>
          <div class="views-text">{{ views }}مشاهدة</div>
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
  </router-link>
</template>

<script>
import academyAPI from "@/services/api/academy";
export default {
  name: "academy-course-card",
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
    title() {
      return this.item.title;
    },
    price() {
      return this.item.price;
    },
    image() {
      return this.item.image_path;
    },
    departmentName() {
      return "department_name";
      // return this.item.department_name;
    },
    rate() {
      return 4;
      const rate = this.item.rates[0];
      if (isNaN(rate)) {
        return 0;
      }
      return rate;
    },
    ratesNumber() {
      return 22;
      // return this.item.rates.length;
    },
    item_id() {
      return this.item.id;
    },
    views() {
      return 50;
      // return this.item.views;
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
    courseTypeClass() {
      if (this.item.type === "on-site") return "course-on-site";
      if (this.item.type === "live") return "course-live";
      if (this.item.type === "recorded") return "course-recorded";
    },
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
    handleImageError(event) {
      // Handle the image error by replacing the src attribute with the placeholder image URL
      event.target.src = "/assets/img/no-img.png"; // Replace with your placeholder image URL
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
.course-type {
  position: absolute;
  font-size: 12px;
  padding-inline: 10px;
  top: 5px;
  left: 6px;
  z-index: 119;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  color: #fff;
}
.course-recorded {
  background-color: #ffbc00;
}
.course-live {
  background-color: #1fb9b3;
}
.course-on-site {
  background-color: #f2631c;
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
