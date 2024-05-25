<template>
  <div class="card">
    <img :src="item.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <p class="card-text">{{ item.description }}</p>
      <p class="card-location">
        <i class="fa-solid fa-location-dot mx-1"></i>
        {{ item.location }}
      </p>
      <div class="options-list d-flex gap-1 w-100">
        <div class="options-item" v-for="(option, i) in item.options" :key="i">
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "place-card",
  props: {
    item: Object,
  },
  computed: {},
};
</script>

<style>
.card {
  padding: 11px;
}
.card-img-top {
  height: 144px;
  border-radius: 6px;
}

.card-title {
  font-family: Cairo;
  font-size: 14.4px;
  font-weight: 700;
  line-height: 26.99px;
  color: #2cb7b3;
}
.card-text {
  font-family: Cairo;
  font-size: 8.64px;
  font-weight: 400;
  line-height: 16.19px;
  color: #010b3899;
}
.card-location {
  font-family: Cairo;
  font-size: 8.64px;
  font-weight: 400;
  line-height: 16.19px;

  color: #a6a6a6;
}
.options-list {
  flex-wrap: wrap;
}
.options-item {
  font-size: 8.64px;
  font-weight: 400;
  line-height: 15.9px;
  color: #010b38;
  padding: 4.32px 8.64px 4.32px 8.64px;
  border-radius: 5.76px 0px 0px 0px;
  white-space: nowrap;
  background: #fafafa;
}
</style>
