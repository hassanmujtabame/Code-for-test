<template>
  <div class="p-0 d-flex flex-wrap card-item">
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
          :key="10 + i"
        ></i>
        <!-- <span class="mx-1">(15)</span> -->
      </div>
    </div>
    <div class="card-link-box">
      <!-- <router-link :to="getRouteLocale('academy-course-show', { id: item_id })"> -->
      <router-link :to="getRouteLocale('')">
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
  name: "service-card",
  props: {
    item: {
      type: Object,
      required: true,
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
      return this.item.image;
    },
    categoryName() {
      return this.item.categoryName;
    },
    rate() {
      return this.item.rate;
    },
    item_id() {
      return this.item.id;
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

<style scoped>
.card-item {
  min-height: 290px;
  border-radius: 12px;
  background-color: #f9fafc;
}
.card-img-contaner {
  position: relative;
  margin: 10px;
  width: 100%;
  height: 150px;
  border-radius: 12px;
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
  z-index: 19;
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
  max-height: 3.6em;
  line-height: 1.8em;
  font-family: Cairo;
  font-weight: 500;
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
