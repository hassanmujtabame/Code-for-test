<template>
  <div
    style="
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      width: 250px;
    "
    class="d-flex flex-column gap-1"
  >
    <div
      class="position-relative"
      style="border-top-left-radius: 10px; border-top-right-radius: 10px"
    >
      <img
        style="
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          height: 150px;
          width: 100%;
        "
        class=""
        :src="img"
        :alt="title"
      />
      <!-- <span style="top: 0; right: 0" class="position-absolute px-3 py-1">
      </span> -->
    </div>
    <div>
      <h4 style="font-size: 16px; width: 100%">
        {{ title }}
      </h4>
      <p style="color: #2cb7b3; font-size: 14px" v-if="type === 'live'">
        لقاء اونلاين
      </p>
      <p style="color: #2cb7b3; font-size: 14px" v-if="type === 'recored'">
        لقاء مسجل
      </p>
      <p style="color: #2cb7b3; font-size: 14px" v-if="type === 'on-site'">
        لقاء حضورى
      </p>
    </div>
  </div>
  <!-- <div class="box" style="height: 200px; width: 300px">
    <div class="main-img position-relative">
      <img
        style="filter: brightness(0.7)"
        class="rounded-2"
        :src="img"
        :alt="title"
        width="100%"
        height="192"
      />
      <div class="position-absolute top-50 px-2 text-start">
        <h6
          style="width: fit-content"
          class="bg-yal p-1 px-2 rounded-2 text-white"
        >
          {{ typeText }}
        </h6>
        <p class="text-white m-0 p-0">{{ title }}</p>
        <p class="text-white p-0 m-0">
          {{ dateText }}
        </p>
      </div>
    </div>
  </div> -->
  <!-- <div class="box" style="height: 200px; width: 300px">
    <div class="main-img position-relative">
      <img
        style="filter: brightness(0.7)"
        class="rounded-2"
        :src="img"
        :alt="title"
        width="100%"
        height="192"
      />
      <div class="position-absolute top-50 px-2 text-start">
        <h6
          style="width: fit-content"
          class="bg-yal p-1 px-2 rounded-2 text-white"
        >
          {{ typeText }}
        </h6>
        <p class="text-white m-0 p-0">{{ title }}</p>
        <p class="text-white p-0 m-0">
          {{ dateText }}
        </p>
      </div>
    </div>
  </div> -->
  <!-- <div class="box" style="height: 200px; width: 300px">
    <div class="main-img position-relative">
      <img
        style="filter: brightness(0.7)"
        class="rounded-2"
        :src="img"
        :alt="title"
        width="100%"
        height="192"
      />
      <div class="position-absolute top-50 px-2 text-start">
        <h6
          style="width: fit-content"
          class="bg-yal p-1 px-2 rounded-2 text-white"
        >
          {{ typeText }}
        </h6>
        <p class="text-white m-0 p-0">{{ title }}</p>
        <p class="text-white p-0 m-0">
          {{ dateText }}
        </p>
      </div>
    </div>
  </div> -->
  <!-- <div class="box  " style=" height:200px; width: 300px">

        <div class="main-img position-relative">
            <img style="filter: brightness(0.7);" class=" rounded-2" :src="img" :alt="title" width="100%" height="192">
            <div class="position-absolute top-50 px-2 text-start">
                <h6 style="width: fit-content;" class="bg-yal p-1 px-2 rounded-2 text-white ">
                    {{ typeText }}
                </h6>
                <p class="text-white m-0 p-0">{{ title }}
                </p>
                <p class="text-white p-0 m-0">
                    {{ dateText }}
                </p>
            </div>

        </div>
    </div> -->
  <!-- <div class="box  " style=" height:200px; width: 300px">

        <div class="main-img position-relative">
            <img style="filter: brightness(0.7);" class=" rounded-2" :src="img" :alt="title" width="100%" height="192">
            <div class="position-absolute top-50 px-2 text-start">
                <h6 style="width: fit-content;" class="bg-yal p-1 px-2 rounded-2 text-white ">
                    {{ typeText }}
                </h6>
                <p class="text-white m-0 p-0">{{ title }}
                </p>
                <p class="text-white p-0 m-0">
                    {{ dateText }}
                </p>
            </div>

        </div>
    </div> -->
  <!-- <div class="box  " style=" height:200px; width: 300px">

        <div class="main-img position-relative">
            <img style="filter: brightness(0.7);" class=" rounded-2" :src="img" :alt="title" width="100%" height="192">
            <div class="position-absolute top-50 px-2 text-start">
                <h6 style="width: fit-content;" class="bg-yal p-1 px-2 rounded-2 text-white ">
                    {{ typeText }}
                </h6>
                <p class="text-white m-0 p-0">{{ title }}
                </p>
                <p class="text-white p-0 m-0">
                    {{ dateText }}
                </p>
            </div>

        </div>
    </div> -->
</template>
<script>
import commonAPI from "@/services/api/common";

export default {
  name: "meeting-card",
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    type: {
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  computed: {
    typeText() {
      let r = commonAPI.getCourseTypes().find((x) => x.id == this.type);
      return r ? r.name : this.type;
    },
    dateText() {
      if (!this.date) return "N/A";
      let parts = this.date.trim().split("-");

      let date = new Date(parts[2], parts[1], parts[0]);
      let d = date.getDate();
      let m = this.getTranslateMonth(date.getMonth());
      return `${d} ${m}`;
    },
  },
};
</script>

<style></style>
