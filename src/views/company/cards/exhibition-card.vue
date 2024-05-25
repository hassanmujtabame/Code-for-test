<template>
  <div class="p-0 d-flex flex-wrap card-item">
    <div class="card-img-contaner">
      <div class="card-status" :class="status == 'مفتوح' ? 'open' : 'closed'">
        {{ status }}
      </div>
      <img
        height="150px"
        class="card-img"
        :src="image"
        @error="handleImageError"
      />
    </div>
    <hr />
    <div class="card-title-box px-3">
      <p class="card-title my-1 p-0">
        {{ title }}
      </p>
      <div class="card-date-box">
        <div class="date">
          <i class="fa-regular fa-clock mx-1"></i>
          {{ date }}
        </div>
        <div class="vr mx-2"></div>
        <div class="location">
          <i class="fa-solid fa-location-dot mx-1"></i>
          {{ location }}
        </div>
      </div>
    </div>
    <button
      class="text-light rounded-3 mx-2 btn py-1 w-100"
      style="background-color: #1fb9b3"
    >
      صفحة المعرض
    </button>
  </div>
</template>

<script>
export default {
  name: "exhibition-card",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    title() {
      return this.item.title;
    },
    date() {
      return this.item.date;
    },
    image() {
      return this.item.image;
    },
    status() {
      return this.item.status == "open" ? "مفتوح" : "مغلق";
    },
    location() {
      return this.item.location;
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
  },
};
</script>

<style scoped>
.card-item {
  min-height: 290px;
  border-radius: 12px;
  background-color: #f9fafc;
}
.card-img-contaner {
  position: relative;
  margin: 10px;
  width: 100%;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
}
.card-img {
  object-fit: cover;
}
.card-status {
  position: absolute;
  font-size: 12px;
  padding: 4px;
  padding-inline: 10px;
  top: 8px;
  left: 8px;
  z-index: 19;
  border-radius: 4px;
  color: #fff;
}
.open {
  background: #ffbc00;
}
.closed {
  background: #f2631c;
}
.card-title-box {
  width: 100%;
}
.card-title {
  display: block; /* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.8em;
  font-size: 16px;
  font-weight: 500;
  color: #1fb9b3;
}
.card-date-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.date {
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #979797;
}
.fa-clock {
  color: #101828;
}
.location {
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #f2631c;
}
</style>
