<template>
  <div class="d-flex flex-wrap card-item">
    <div class="card-img-contaner">
      <div class="course-category">{{ categoryName ?? "category" }}</div>
      <img
        height="150px"
        class="card-img"
        :src="image"
        @error="handleImageError"
      />
    </div>
    <hr />
    <div class="card-title-box px-3">
      <p class="card-title my-1 p-0">
        {{ title }}
      </p>
      <div class="d-flex mb-2 align-items-center">
        <i class="fa-solid fa-star star-icon" v-for="i in rate" :key="i"></i>
        <i
          class="fa-regular fa-star star-icon"
          v-for="i in 5 - rate"
          :key="i"
        ></i>
        <!-- <span class="mx-1">(15)</span> -->
      </div>
    </div>
    <div class="card-link-box">
      <router-link :to="getRouteLocale('academy-course-show', { id: item_id })">
        <!-- ,lang : "ar" -->
        <div @click="linkToCourse" class="shadow-sm arrow-box">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </router-link>
      <span class="fw-bolder price-text"> {{ price ?? "--.--" }}ر.س </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-vue",
  props: {
    item: {},
  },
  computed: {
    title() {
      return this.getPropsMeeting("title");
    },
    price() {
      return this.getPropsMeeting("price");
    },
    image() {
      return this.getPropsMeeting("image");
    },
    dateItem() {
      return this.item.date;
    },
    name() {
      return this.getPropsUser("user");
    },
    categoryName() {
      return this.getPropsMeeting("categoryName");
    },
    rate() {
      const rate = parseInt(this.getPropsMeeting("rate"), 10);
      if (isNaN(rate)) {
        return 0;
      }
      return rate;
    },
    item_id() {
      this.getPropsMeeting("id");
    },
  },
  methods: {
    getPropsMeeting(name, def = "N/A") {
      return this.item.meeting ? this.item.meeting[name] : def;
    },
    getPropsUser(name, def = "N/A") {
      return this.item.meeting && this.item.meeting.user_info
        ? this.item.meeting.user_info[name]
        : def;
    },
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
  background-color: #f9fafc;
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
  height: 3.6em;
  line-height: 1.8em;
}
.card-link-box {
  border-top: solid 1px #e7e9eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
}
.star-icon {
  font-size: 12px;
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
  font-size: 15px;
  font-weight: 400;
}
</style>
