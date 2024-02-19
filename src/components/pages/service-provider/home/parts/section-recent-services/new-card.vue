<template>
  <router-link
    style="color: inherit"
    :to="getRouteLocale('service-provider-ready-service', { id: id })"
  >
    <div
      style="height: 300px"
      class="card-container mx-1 d-flex flex-column overflow-y-auto"
    >
      <div>
        <h4 class="card-title h-6 m-3">
          {{ title }}
        </h4>
        <div class="tags d-flex flex-row flex-wrap gap-2">
          <span class="tag" v-for="(keyw, i) in keywords.split(',')" :key="i">{{
            keyw
          }}</span>
        </div>
        <div class="price mt-3 d-flex justify-content-end px-4 fs-5">
          ر.س
          {{ price.toLocaleString() }}
        </div>
      </div>
      <div>
        <div style="display: flex; align-items: center; gap: 15px">
          <ShowTime
            :dateTime="created_at"
            style="color: var(--Teal-Primary, #1fb9b3); font-size: 12px"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="179"
            height="2"
            viewBox="0 0 179 2"
            fill="none"
          >
            <line
              x1="0.65"
              y1="1.35"
              x2="178.35"
              y2="1.35001"
              stroke="white"
              stroke-width="1.3"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div
          style="
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <span
            style="
              color: black;
              display: flex;
              padding: 0px 10px 0px 9px;
              justify-content: center;
              align-items: center;
              border-radius: 24px;
              background: #fdc0ae;
            "
          >
            {{ state == "offline" ? "حضورى" : "اونلاين" }}
          </span>
          <div style="display: flex; align-items: center; gap: 10px">
            <img
              style="width: 50px; height: 50px; border-radius: 10px"
              :src="image"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.tags .tag {
  color: white;
  width: fit-content;
  display: flex;
  padding: 8px 12px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 23px;
  background: var(--Teal-Primary, #1fb9b3);
}

.card-container {
  border-radius: 16px;
  background: rgba(31, 185, 179, 0.2);
  padding: 10px;
  min-height: 300px;
}
</style>

<script>
import ShowTime from "./show-time.vue";

export default {
  name: "card-service",
  components: {
    ShowTime,
  },
  props: {
    name: {
      type: [String, Object],
    },

    image: {
      type: String,
    },
    title: {
      type: String,
    },
    state: {
      type: String,
    },
    id: {
      type: [String, Number],
    },
    description: {
      type: String,
    },
    place: {
      type: String,
      default: "N/A",
    },
    price: {
      type: [String, Number],
    },
    keywords: {
      type: [String, Array],
    },
    created_at: {
      type: [String, Number],
    },
  },
  data: () => {
    return {
      state_ar: {
        online: "اونلاين",
        offline: "حضورى",
      },
      shareLink: "",
    };
  },
  mounted() {
    this.shareLink = window.location.href + "/" + this.id;
  },
};
</script>
