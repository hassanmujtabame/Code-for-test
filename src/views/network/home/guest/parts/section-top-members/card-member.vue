<template>
  <div class="provider-card">
    <div class="provider-card__wrapper ">
      <span class="jop_tilte" :class="item.isPartner ? 'partner' : ''">{{ item.isPartner ? 'شريك' : 'عضو' }}</span>
      <div class="provider-card__image mb-4">
        <router-link v-if="to" :to="to">
          <img :src="img" alt width="259" height="200" />
        </router-link>
        <img v-else @click="$emit('click-image')" :src="img" alt width="259" height="200" />
      </div>
      <div class="provider-card__content" :class="{ 'h-job': showJob }"
        style=" display: flex; flex-direction: column; justify-content: space-between;">
        <h6 class="provider-card__name">{{ name | truncateWords(2) }}</h6>
        <p class="provider-card__description t-c">{{ description }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-parson",
  components: {
  },
  props: {
    showRate: {
      type: Boolean,
      default: false
    },
    showJob: {
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
    countCourse: {
      type: [String, Number],
    },
    rate: {
      type: [String, Number],
      default: 0
    },
    item: {
      type: [Object, Array],
      default: null
    }
  }
};
</script>

<style scoped>
span.jop_tilte {
  position: absolute;
  background: #F55B00;
  color: white;
  padding: 5px;
  width: 80px;
  font-size: 22px;
  right: 20px;
  top: 20px;
  border-radius: 5px;
}

.partner {
  background: #ffc107 !important;
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
  /*height: 100%;*/
  margin: auto;
  overflow: hidden;
}

.provider-card__image img {
  object-fit: cover;
  width: 100%;
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