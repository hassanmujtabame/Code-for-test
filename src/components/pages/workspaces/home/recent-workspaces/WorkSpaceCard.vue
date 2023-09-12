<template>
  <div class="workspace-card box border">
    <div class="workspace-card__wrapper"> 
      <div class="workspace-card__image">
        <img class="w-100" :src="image" :alt="title" height="165px" />
      </div>
      <div class="workspace-card__content">
        <div class="d-flex align-items-center justify-content-between">
          <h6 class="workspace-card__title">{{ title }}</h6>
        </div>
        <p
          class="text-four-lines workspace-card__description"
          v-html="description"
        ></p>
      </div>
      <div class="workspace-card__footer">
        <div class="workspace-card__footer-item flex-grow-1">
          <d-localisation-icon :size="20" color="#979797" class="mx-1"  />
          <!-- <span v-if="company.map_address && company.map_address.address_name">{{ company.map_address.address_name }}</span>
          <span v-else>{{ company.city_name }}</span> -->
          <span>{{ company }}</span>

        </div>
        <div class="workspace-card__footer-item flex-shrink-0">
          <d-empty-wallet-icon :size="20" color="#979797"  class="mx-1"/>
          <span>{{ price ?? "N/A" }}</span>
          <span> {{ $t("R.S") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "workspace-card",
  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    company: {
      type: String,
    },
    price: {
      type: [String, Number],
    },
  },
};
</script>

<style>
.workspace-card {
  border-radius: 10px;
}

.workspace-card__footer {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  font-size: 1.3em;
}

.workspace-card__footer-item {
  display: flex;
  margin: 10px;
}
.workspace-card__footer-item span {
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: start;
  color: #979797;
      /* height: 22px;
    overflow: hidden;
    text-overflow: ellipsis; */
}
.workspace-card__title {
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  text-transform: capitalize;
  text-align: start;
  margin: 10px 0;
  color: #414042;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.workspace-card__description {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  /* or 142% */
  text-align: start;
  color: #737373;
  height: 50px;
  word-break: break-all;
}
.workspace-card__content {
  padding: 5px 16px;
}
.workspace-card__category {
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #1fb9b3;
}
.workspace-card__image {
  height: 173px;
  border-radius: 8px 8px 0 0;
  min-height: 173px;
}
.workspace-card__image > img {
  border-radius: 8px 8px 0 0;
  height: 100%;
  width: 100%;
  object-fit: fill;
}
</style>