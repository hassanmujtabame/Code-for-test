<template>
  <div class="provider-card rounded-4">
    <div class="shadow-sm mx-3 my-2 rounded-4">
      <div class="provider-card__image p-2 rounded-4">
        <router-link class="" v-if="to" :to="to">
          <img class="rounded-3" :src="img" alt />
        </router-link>
        <img v-else @click="$emit('click-image')" :src="img" alt />
      </div>
      <div class="pb-2">
        <h6 class="provider-card__name px-2">
          {{ name | truncateWords(2) }}
        </h6>
        <p class="provider-card__description px-2">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-parson-market",
  components: {},
  props: {
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
  },
};
</script>

<style scoped>
.provider-card {
  padding: 5px;
  width: 100%;
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
}

.provider-card__name {
  font-family: Cairo;
  font-size: 16px;
  font-weight: 700;
  line-height: 29.98px;

  text-align: start;
  color: #495057;
}

.provider-card__description {
  font-family: Cairo;
  font-size: 12px;
  font-weight: 400;
  line-height: 22.49px;

  text-align: start;
  color: #acb5bd;
}
</style>
