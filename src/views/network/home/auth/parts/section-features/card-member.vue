<template>
  <div class="provider-card mb-5">
    <div class="provider-card__wrapper">
      <div class="provider-card__image mb-4">
        <img :src="require(`@/assets/img/${img}`)" alt width="259" height="162" />
      </div>
      <div class="provider-card__content text-end"
        style=" display: flex; flex-direction: column; justify-content: space-between;">
        <h6 class="provider-card__name" style="color: #F2631C">{{ name }}</h6>
        <p class="provider-card__description">{{ description }} </p>
        <router-link v-if="to" class="router-link mt-2 m-c" :to="{name: to}">
            
          اعرفى المزيد
  
          <Arrow />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "@/components/icon-svg/go-to-icon.vue"
export default {
  name: "card-items",
  components: {
    Arrow
  },
  props: {
    img: {
      type: String,
      default: false
    },
    name: {
      type: String,
      default: false
    },
    to: {
      type: [Object, Array],
      default: null
    },
    description: {
      type: String
    }
  }
};
</script>

<style scoped>
.provider-card {
  --raduis-provider: 11px;
  padding: 5px;
  width: 400px;
  height: 340px;
}

.provider-card__wrapper {
  /*overflow: hidden;*/
  margin: 0 0 0px 0;
  width: 100%;
  height: 100%;
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
  margin: auto;
  height: 50%;
  /*overflow: hidden;*/
}

.provider-card__image img {
  width: 100%;
  height: 100%;
}

.provider-card__content {
  padding: 20px;
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
  font-size: 14px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show before truncating */
  -webkit-box-orient: vertical;
  /* identical to box height, or 120% */

  text-transform: capitalize;
  color: #646464 !important;
}

.h-job {
  height: 115px;
}
</style>