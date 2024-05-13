<template>
  <div class="d-flex flex-wrap card-item mb-3">
    <div class="card-img-contaner">
      <div class="course-category">{{ categoryName ?? "department" }}</div>
      <img
        height="220px"
        class="card-img"
        :src="image"
        @error="handleImageError"
      />
    </div>
    <hr />
    <div class="card-title-box px-3">
      <div class="d-flex justify-content-between">
        <div>
          <div class="card-title p-0">
            {{ title }}
          </div>
          <div class="type-text p-0">{{ typeText }}</div>
        </div>
        <div>
          {{ dateText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import commonAPI from "@/services/api/common";

export default {
  name: "meeting-card",

  props: {
    item: {},
  },
  computed: {
    typeText() {
      switch (this.item.type) {
        case "live":
          return this.$t("live_meeting");
        case "on-site":
          return this.$t("on_site_meeting");
        case "recored":
          return this.$t("recored_meeting");
        default:
          return "نشاط";
      }
    },
    dateText() {
      if (!this.date) return "N/A";
      let parts = this.date.trim().split("-");

      let date = new Date(parts[2], parts[1], parts[0]);
      let d = date.getDate();
      let m = this.getTranslateMonth(date.getMonth());
      return `${d} ${m}`;
    },
    title() {
      return this.item.title;
    },
    image() {
      return this.item.image;
    },
    categoryName() {
      return this.item.categoryName;
    },
    item_id() {
      return this.item.id;
    },
  },
  methods: {
    handleImageError(event) {
      // Handle the image error by replacing the src attribute with the placeholder image URL
      event.target.src = "/assets/img/no-img.png"; // Replace with your placeholder image URL
    },
    linkToCourse() {},
  },
};
</script>

<style scoped>
.card-item {
  min-height: 310px;
  border-radius: 12px;
  background-color: #fff;
}
.card-img-contaner {
  position: relative;
  margin: 12px;
  width: 100%;
  height: 220px;
  border-radius: 6px;
  overflow: hidden;
}
.card-img {
  object-fit: cover;
}
.course-category {
  position: absolute;
  font-size: 12px;
  padding-inline: 10px;
  top: 5px;
  left: 6px;
  z-index: 119;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  background-color: #2cb7b3;
}
.card-title-box {
  width: 100%;
}
.card-title {
  font-family: Cairo;
  font-size: 16px;
  font-weight: 700;

  display: block; /* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  height: 1.8em;
  line-height: 1.8em;
}

.type-text {
  color: #2cb7b3;
  font-family: Cairo;
  font-size: 14px;
  font-weight: 600;
}
</style>
