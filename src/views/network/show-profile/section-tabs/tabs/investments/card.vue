<template>
  <div class="box border rounded-top rounded-2 p-2">
    <div class="section-top-inf">
      <div class="publish-date-text mb-1">
        {{ $t("publish-date") }}
        <span class="publish-date m-0"> : {{ publishDate }} </span>
      </div>
      <div class="card-img-div">
        <img
          height="100px"
          width="100%"
          class="img-card"
          :src="image"
          @error="handleImageError"
        />
      </div>
      <span class="title">
        {{ title }}
      </span>
      <div class="amount mt-x">
        <span>
          {{ amount ?? "N/A" }}
        </span>
        <span>
          {{ $t("SAR") }}
        </span>
      </div>
      <div class="position-absolute text mt-x">
        <div class="d-flex justify-content-between">
          <p>
            <span class="investor">
              {{ investor ?? "N/A" }} {{ $t("of-investor") }}
            </span>
          </p>
        </div>
      </div>
      <div class="col-md-12 mt-4 dashbord">
        <div style="height: 10px" class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-label="Example with label"
            style="height: 10px"
            :style="{ width: `${minimumGoal}%` }"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div class="required-minimum">
          <span> {{ minimumGoal ?? "N/A" }}% </span>
          {{ $t("required-minimum") }}
        </div>
      </div>
    </div>
    <hr class="m-1" />
    <div class="buttom-section row justify-content-between">
      <div class="buttom-section-line d-flex col-md-6">
        <div class="buttom-section-text">
          <i class="fa-regular fa-clock"></i>
        </div>
        <div class="buttom-section-text mx-1">
          {{ $t("rest-days-to-end") }}
          <span style="color: #f2631c">
            {{ restDay ?? "N/A" }} {{ $t("day") }}
          </span>
        </div>
      </div>
      <div class="buttom-section-line d-flex col-md-6">
        <div class="buttom-section-text">
          <i class="fa-solid fa-percent"></i>
        </div>
        <div class="buttom-section-text mx-1">
          {{ $t("offered-property") }}
          <span style="color: #f2631c">{{ offeredProperty ?? "N/A" }} %</span>
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
      return this.item.title;
    },
    publishDate() {
      return this.item.created_at;
    },
    restDay() {
      return this.item.rest_days;
    },
    investor() {
      return this.item.count_invest;
    },
    minimumGoal() {
      return this.item.minimum_investment;
    },
    offeredProperty() {
      return this.item.offered_property;
    },
    amount() {
      return this.item.amount_financing_required;
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
.publish-date-text {
  font-size: 10px;
  font-weight: 400;
  color: #cdd7d8;
}
.title {
  font-size: 16px;
  font-weight: 400;
  color: #737373;
}
.mt-x {
  margin-top: -5px;
}
.amount > * {
  font-size: 10px;
  font-weight: 400;
  color: #1fb9b3;
}
.section-top-inf {
  overflow: hidden;
}
.investor {
  font-size: 10px;
  font-weight: 400;
  color: #979797;
}
.required-minimum {
  margin-top: 6px;
  font-size: 10px;
  font-weight: 400;
  color: #737373;
}

.buttom-section-line {
  min-width: 160px;
}
.buttom-section-text {
  font-size: 10px;
  font-weight: 400;
  color: #979797;
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
</style>
