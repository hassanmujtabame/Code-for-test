<template>
  <div
    style="
      height: 400px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    "
    class="box shadow border w-100 blog-info-card"
  >
    <div class="image">
      <img
        style="border-top-left-radius: 10px; border-top-right-radius: 10px"
        class="w-100 overflow-hidden"
        :src="img"
        :alt="title"
        height="184"
      />
    </div>
    <div class="text p-3 text-end">
      <h6 class="blog-info__title text-two-lines">{{ title }}</h6>
      <p style="height: 80px" class="description-blog overflow-y-auto text-end">
        {{ strip_tags(description) }}
      </p>
    </div>
    <div class="d-flex text-end">
      <div
        class="d-flex align-items-center justify-content-between px-2 py-1 w-100"
      >
        <!-- <h3 style="color: #2c98b3">{{ categories.name }}</h3> -->
        <p
          v-for="(item, c) in categories"
          :key="c"
          :style="{ color: `${colors[c % 3]}!important` }"
          class="p-1 px-2 rounded-2 text-white m-0"
        >
          {{ item.name }}
        </p>
        <p class="d-flex m-0">
          <bdi class="blog-info__date text-two-lines" style="padding: 0 5px">
            {{ dayjs(date, "DD-MM-YYYY").locale("ar").format("DD MMMM YYYY") }}
          </bdi>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
              fill="#979797"
            />
            <path
              d="M10.4 11.2002L8.4688 9.269C8.16872 8.96901 8.00009 8.56211 8 8.1378V3.2002"
              fill="#979797"
            />
            <path
              d="M10.4 11.2002L8.4688 9.269C8.16872 8.96901 8.00009 8.56211 8 8.1378V3.2002"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
var locale_de = require("dayjs/locale/ar");
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
dayjs.extend(customParseFormat);
export default {
  name: "recent-cards-blogs",
  props: {
    img: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      default: "",
    },
    categories: {
      type: [Array, Object],
      default: () => {
        return [];
      },
    },
  },
  data: () => ({
    colors: ["#1FB9B3", "#FFBC00", "#F2631C", "#2C98B3"],
  }),
  computed: {
    dayjs() {
      return dayjs;
    },
    dateText() {
      if (!this.date) return "N/A";
      return this.dateTextMonth(this.date);
      /*let parts = this.date.trim().split('-');
         
          let date = new Date(parts[2],parts[1],parts[0]);
          if(date=='Invalid Date') return this.date.trim()
          let d = date.getDate()
          let m =  date.toLocaleString('default', { month: 'short' });
          let y =date.getFullYear();
      return `${d} ${m},${y}`*/
    },
  },
};
</script>

<style></style>
