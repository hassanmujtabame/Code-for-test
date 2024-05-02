<template>
  <div class="d-flex flex-wrap card-item">
    <div class="card-img-contaner">
      <img
        height="150px"
        class="card-img"
        :src="image"
        @error="handleImageError"
      />
    </div>
    <hr />
    <div class="card-title-box px-3">
      <p class="card-title p-0">
        {{ title }}
      </p>
      <div class="blog-statics d-flex mb-2 align-items-center">
        <span style="color: #1fb9b3"
          ><i class="fa-solid fa-wallet" style="color: #737373"></i>
          {{ price }} ر.س</span
        >

        <span
          :v-if="place"
          class="mx-1"
          style="text-align: left; color: #f2631c"
        >
          <i class="fa-solid fa-location-dot mx-1"></i>{{ place }}
        </span>
      </div>
    </div>
    <div class="card-date-box">
      <!-- <router-link :to="getRouteLocale('network-blogs-mine' , {id: item.id})"> -->
      <!-- ,lang : "ar" -->
      <div @click="linkToCourse" class="icon-box shadow-sm mx-1">
        <i class="fa-regular fa-clock"></i>
      </div>
      <!-- </router-link> -->
      <!-- ,lang : "ar" -->
      <div class="inline-block">
        {{ date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-item",
  props: {
    item: {},
  },
  computed: {
    title() {
      return this.item.title;
    },
    place() {
      return this.item.city;
    },
    date() {
      return this.item.date_publish;
    },
    status() {
      return this.item.status;
    },
    image() {
      return this.item.image;
    },
    price() {
      return this.item.price;
    },
    itemId() {
      return this.item.itemId;
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

<style>
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

.card-title-box {
  width: 100%;
}
.card-title {
  font-size: 14px;
  font-weight: 500;
  display: inline-block; /* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  height: 1.2em;
  line-height: 1.2em;
}
.blog-statics {
  width: 100%;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
  color: #979797;
}
.card-date-box {
  color: #979797;
  border-top: solid 1px #e7e9eb;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
}

.icon-box {
  font-size: 12px;
  border-radius: 5.5px;
  background-color: #f9fafc;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6d737a;
}
</style>
