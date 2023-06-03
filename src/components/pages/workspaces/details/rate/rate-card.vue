<template>
  <div class="rate-item" v-bind="$attrs">
    <div class="rate-item__wrapper">
      <div class="rate-item__body">
        <div class="rate-item__avatar">
          <img :src="rate.user_info.image" :alt="rate.user_info.name" />
        </div>
        <div class="rate-item__info mx-2">
          <h1 class="rate-item__name">{{ rate.user_info.name }}</h1>
          <div class="rate-item__rate">
            <i
              v-for="star in starts"
              :key="star"
              class="fa-solid fa-star"
              :class="{ active: star <= rate.rate }"
            ></i>
          </div>
        </div>
        <div class="rate-item__action">
          <time :datetime="rate.user_info.date" class="rate-item__date">{{
            rate.user_info.date ? timeAgoToHuman(rate.user_info.date) : "N/A"
          }}</time>
        </div>
      </div>
      <p class="rate-item__comment mt-3" v-html="rate.note"></p>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "d-rate-card",
  props: ["rate"],
  data() {
    return {
      starts: [5, 4, 3, 2, 1],
    };
  },
};
</script>
  
  <style>
.rate-item__wrapper {
  padding: 10px;
}
.rate-item:not(:last-of-type) > .rate-item__wrapper {
  border-bottom: 0.5px solid #d1d1d1;
}
.rate-item__body {
  display: flex;
}
.rate-item__avatar,
.rate-item__action {
  flex-shrink: 0;
}
.rate-item__info {
  flex: 1;
  
}
.rate-item__avatar {
  width: 48px;
  height: 48px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rate-item__avatar > img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  min-width: 48px;
  min-height: 48px;
  background-color: gray;
}
.rate-item__name {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */
  text-transform: capitalize;
  /* Dark gray */
  color: var(--color-primary);
  margin: 0;
}
.rate-item__rate > i {
  font-size: 16px;
}
.rate-item__comment {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  /* or 142% */
  color: #737373;
  margin: 0;
}
.rate-item__date {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  /* or 142% */
  /* Boarders */

  color: #d1d1d1;
}
</style>