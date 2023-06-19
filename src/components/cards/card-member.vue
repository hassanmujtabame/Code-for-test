<template>
  <div class="provider-card">
    <div class="provider-card__wrapper">
      <div class="provider-card__image">
        <router-link v-if="to" :to="to">
          <img :src="img" alt width="259" height="192" />
        </router-link>
        <img v-else @click="$emit('click-image')" :src="img" alt width="259" height="192" />
      </div>
      <div class="provider-card__content" :class="{ 'p-3': !description }">
        <h6 class="provider-card__name">{{ name | truncateWords(2) }}</h6>
        <p v-if="description" class="provider-card__description">{{ description }}</p>
        <div v-if="showRate">
          <RateStars :value="rate" :size="12" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RateStars from "../rate-stars/index";
export default {
  name: "card-parson",
  components: {
    RateStars
  },
  props: {
    showRate: {
      type: Boolean,
      default: false
    },
    img: {
      type: String
    },
    name: {
      type: String
    },
    to: {
      type: [Object, Array],
      default: null
    },
    description: {
      type: String
    },
    rate: {
      type: [String, Number],
      default: 0
    }
  }
};
</script>

<style scoped>
.provider-card {
  --raduis-provider: 11px;
  padding: 5px;
}

.provider-card__wrapper {
  margin: 0 0 0px 0;
  width: 250px;
  max-width: 250px;
  /*height: 340px;*/
  border-radius: 11px;
  /*border:0.5px solid #f2f2f2;*/
  border: 1px solid #cdd7d8;
}

.provider-card__wrapper:hover {
  box-shadow: 0px 1px 8px;
}

.provider-card__image {
  border-radius: 11px 11px 0 0;
  width: 100%;
  height: 192px;
  overflow: hidden;
}

.provider-card__image img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

.provider-card__content {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #cdd7d8;
  box-shadow: 0px 0px 78.2699px rgba(187, 188, 189, 0.3);
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

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-transform: capitalize;
  color: var(--m-color);
}
</style>