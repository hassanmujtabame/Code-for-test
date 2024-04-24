<template>
  <div
    style="border-radius: 10px; min-height: 240px; outline: solid 1px #cdd7d8"
    class="d-flex flex-column align-items-center justify-content-center"
  >
    <div style="height: 164px; width: 100%" class="">
      <router-link class="" v-if="to" :to="to">
        <img
          style="
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            height: 100%;
            width: 100%;
            object-fit: cover;
          "
          class="img-fluid"
          :src="img"
          @error="handleImageError"
          alt
        />
      </router-link>
    </div>
    <div class="text-center my-2">
      <div class="card-name my-1">
        {{ name }}
      </div>
      <p style="color: #1fb9b3" class="card-description my-1">
        {{ description ?? "ريادية" }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-parson",
  components: {},
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
  methods: {
    handleImageError(event) {
      // Handle the image error by replacing the src attribute with the placeholder image URL
      event.target.src = "/assets/img/businesswoman.jpg"; // Replace with your placeholder image URL
    },
  },
};
</script>

<style scoped>
.card-name {
  color: #434343;
  font-weight: 500;
  font-size: 22px;
}
.card-description {
  color: #1fb9b3;
  font-size: 16px;

  font-weight: 300;
}
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
