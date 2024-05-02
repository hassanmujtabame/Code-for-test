<template>
  <div class="pb-2 box border rounded-top rounded-2 p-2">
    <div class="section-top-inf">
      <div class="publish-date-text mb-1">
        {{ $t("publish-date") }}
        <span class="publish-date m-0"> : {{ publishDate }} </span>
      </div>
      <div class="card-img-div">
        <img
          height="150px"
          width="100%"
          class="img-card"
          :src="image"
          @error="handleImageError"
        />
      </div>
      <span class="title">
        {{ title }}
      </span>
      <div class="card-statics d-flex mb-2 align-items-center">
        <span style="color: #1fb9b3"
          ><i class="fa-solid fa-wallet" style="color: #737373"></i>
          {{ price }} ر.س</span
        >

        <span
          v-if="place"
          class="mx-1"
          style="text-align: left; color: #f2631c"
        >
          <i class="fa-solid fa-location-dot mx-1"></i>{{ place }}
        </span>
      </div>
      <div class="d-flex mb-2 align-items-center">
        <i class="fa-solid fa-star star-icon" v-for="i in rate" :key="i"></i>
        <i
          class="fa-regular fa-star star-icon"
          v-for="i in 5 - rate"
          :key="i"
        ></i>
        <span class="mx-1 rate-number">({{ rateNumber }})</span>
      </div>
      <div class="desc-text mt-x">
        <div v-html="description"></div>
      </div>
      <div
        class="buttom-section d-flex justify-content-between"
        style="align-items: center"
      >
        <div class="" style="width: 100%; height: 35px">
          <button class="btn-custmer desc-btn p-0">التفاصيل</button>
        </div>
        <div class="m-1">
          <div class="icon-box shadow-sm mx-1">
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "physical-invest-card",
  props: {
    item: {},
  },
  computed: {
    image() {
      return this.item.image;
    },
    title() {
      return this.item.short_description;
    },
    publishDate() {
      return this.item.start_date;
    },
    restDay() {
      return this.item.day;
    },
    price() {
      return this.item.price;
    },
    place() {
      return this.item.place;
    },
    rateNumber() {
      return this.item.rate ?? 0;
    },
    rate() {
      return this.item.rate ?? 0;
    },
    description() {
      return this.item.description;
    },
  },
  methods: {
    handleImageError(event) {
      console.log("img Error : ", event.target.src);
      // Handle the image error by replacing the src attribute with the placeholder image URL
      event.target.src = "/assets/img/no-img.png"; // Replace with your placeholder image URL
    },
  },
};
</script>

<style scoped>
.publish-date-text > *,
.publish-date-text {
  font-size: 10px;
  font-weight: 400;
  color: #707070;
}
.title {
  font-size: 16px;
  font-weight: 400;
  color: #737373;
}
.section-top-inf {
  overflow: hidden;
}

.star-icon {
  font-size: 12px;
  color: #ffc27a;
}
.rate-number {
  font-size: 13px;
  font-weight: 400;
  color: #52565c;
}
.card-img-div {
  width: 100%;
  height: 100px;
  border-radius: 6px;
  overflow: hidden;
}
.img-card {
  object-fit: cover;
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

.card-statics {
  width: 100%;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
  color: #979797;
}
.icon-box {
  font-size: 12px;
  border-radius: 5.5px;
  background-color: #fff;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a5a5a5;
  cursor: pointer;
}
.desc-text {
  color: #737373;
  font-size: 10px;
  font-weight: 500;
  max-height: 50px;
  overflow: hidden;
}
.desc-btn {
  width: 100%;
  height: 35px;
  font-size: 8px;
  font-weight: 500;
}
</style>
