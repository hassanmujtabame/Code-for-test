<template>
  <div class="workspace-card box border w-100">
    <div class="workspace-card__wrapper">
      <div class="workspace-card__image">
        <d-swiper
          v-if="medias && medias.length > 1"
          :slides-per-view="1"
          is-auto
          :items="medias"
          :navigation="true"
          :loop="true"
        >
          <template v-slot:default="{ item }">
            <img
              class="w-100 rounded-3"
              style="object-fifill;"
              :src="item.image"
              :alt="title"
              height="165px"
            />
          </template>
        </d-swiper>
        <img v-else class="w-100" :src="image" :alt="title" height="165px" />
      </div>
      <div class="workspace-card__content">
        <div class="d-flex py-2 align-items-center justify-content-between">
          <h6 style="color: #2cb7b3" class="">{{ title }}</h6>
          <h6 style="color: #cf1f3e" class="">
            {{ price }}
            ر.س
          </h6>
        </div>
        <p
          class="text-four-lines workspace-card__description"
          v-html="description"
        ></p>
      </div>
      <div class="workspace-card__footer" style="">
        <div class="workspace-card__footer-item flex-grow-1">
          <d-localisation-icon :size="20" color="#979797" class="mx-1" />
          <span
            v-if="company.map_address && company.map_address.address_name"
            >{{ company.map_address.address_name }}</span
          >
        </div>

        <!-- <div
          class="workspace-card__footer-item flex-shrink-0 align-items-center"
        >
          <d-empty-wallet-icon :size="20" color="#414042" class="mx-1" />
          <span style="color: #414042 !important">{{ price ?? "N/A" }}</span>
          <span style="color: #414042 !important"> {{ $t("R.S") }}</span>
        </div> -->
      </div>
      <ul class="d-flex flex-wrap align-items-center gap-1">
        <li
          style="
            color: #010b38;
            background-color: #fafafa;
            font-size: 12px;
            list-style: none;
          "
          class="px-2 py-1 rounded-2"
          v-for="(f, i) in features"
          :key="i"
        >
          {{ f.title }}
        </li>
      </ul>
      <div class="d-flex align-items-center pb-3">
        <router-link class="router-link mx-3" :to="to" style="">
          <button
            class="btn btn-main"
            style="height: 30px; font-size: 12px; padding: 5px; width: 100%"
          >
            عرض التفاصيل
          </button>
        </router-link>

        <!-- <div class="d-flex align-items-center">
          <span class="px-1" style="font-size: 15px; color: #414042">{{
            rate
          }}</span>
        </div> -->
        <!--  star icon  -->
        <!-- <img
            :src="`${publicPath}assets/svg/Vectorrate.svg`" style="object-fit: contain;" /> -->
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
    medias: {
      type: Array,
    },
    title: {
      type: String,
    },
    area: {
      type: [String, Number],
    },
    to: {
      type: [String, Object],
    },
    rate: {
      type: [String, Number],
    },
    description: {
      type: String,
    },
    company: {
      type: [String, Object],
    },
    price: {
      type: [String, Number],
    },
    features: {
      type: [Array],
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
  margin: 0 10px;
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
  /* height: 40px; */
  word-break: break-all;
  margin-bottom: 0;
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

.workspace-card__image .swiper-button-prev {
  right: 5px !important;
  left: auto !important;
  color: black !important;
  border-radius: 100% !important;
  background: white;
  border: black !important;
  width: 23px !important;
  height: 23px !important;
}

.workspace-card__image .swiper-button-next {
  left: 5px !important;
  right: auto !important;
  color: black !important;
  border-radius: 100% !important;
  background: white;
  border: black !important;
  height: 23px !important;
  width: 23px !important;
}
</style>
