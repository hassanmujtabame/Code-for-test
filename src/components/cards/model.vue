<template>
  <div class="model-card box border">
    <div class="model-card__wrapper box rounded-3">
      <div class="model-card__image rounded-top">
        <img
          class="w-100 rounded-top"
          v-if="img"
          :src="img"
          :alt="title"
          height="186"
        />
      </div>
      <div class="bg-white p-2">
        <div class="d-flex justify-content-start px-2">
          <h6
            style="color: black"
            class="model-card__title text-center text-two-lines"
          >
            {{ title }}
          </h6>
          <p>
            {{ department_name }}
          </p>
        </div>
        <div v-if="!hideCounter || value" class="text-center">
          <small class="m-c"> عدد التنزيلات </small>
          <span> | </span>
          <small class="t-c">
            {{ value }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-vue",
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    department_name: {
      type: String,
    },
    value: {
      type: [String, Number],
    },
    hideCounter: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.model-card__title {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */

  text-align: center;
  text-transform: capitalize;

  color: #414042;
  height: 48px;
}

.model-card__image {
  height: 186px;
}
</style>
