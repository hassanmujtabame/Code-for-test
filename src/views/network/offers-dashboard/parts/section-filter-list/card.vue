<template>
  <div
    style="border-top-left-radius: 10px; border-top-right-radius: 10px"
    class="my-2"
  >
    <div
      style="
        background-color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      "
      class="d-flex flex-column justify-content-center border align-items-center"
    >
      <div
        style="
          height: 200px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        "
        class=""
      >
        <img
          style="border-top-left-radius: 10px; border-top-right-radius: 10px"
          class="img-fluid h-100"
          :src="item.image"
        />
      </div>
      <div class="">
        <!-- <div class="" :class="item.status">
            {{ statusText }}
          </div> -->
        <div class="text-center my-2">
          <h6 class="">{{ item.name_company }}</h6>
        </div>
        <div class="">{{ item.short_description }}</div>
        <!-- <div class="d-flex align-items-center">
          <div class="">
            <i class="fa fa-calendar"></i> {{ item.start_date }}
          </div>
          <div class="">
            <i class="fa fa-calendar"></i> المدة : {{ item.day }}
          </div>
          <div class="">
            <i class="fa fa-calendar"></i> عدد النسخ: {{ item.number_copies }}
          </div>
        </div> -->
      </div>
      <div class="d-flex align-items-center gap-2 my-2">
        <button @click="sendIdToParent" class="btn color2 px-4 py-2 rounded-3">
          <i style="font-size: 25px" class="fa fa-pen-to-square"></i>
        </button>
        <!-- <button v-if="item.status == 'finished'" class="btn btn-custmer-w">
          <i class="fa fa-arrow-rotate-right"></i> إعادة النشر
        </button> -->
        <button
          @click="deleteItem(item.id)"
          v-if="item.status == 'valid'"
          class="btn px-4 py-2 color rounded-3"
        >
          <i style="font-size: 25px" class="fa fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
  <!-- <div class="offer-item">
    <div class="offer-item__wrapper">
      <img class="offer-item__img" :src="item.image" />
      <div class="offer-item__info">
        <div class="offer-item__metatitle">
          <div class="offer-item__status" :class="item.status">
            {{ statusText }}
          </div>
          <h1 class="offer-item__title">{{ item.name_company }}</h1>
        </div>
        <div class="offer-item__subtitle">{{ item.short_description }}</div>
        <div class="offer-item__details">
          <div class="offer-item__details-item date-color">
            <i class="fa fa-calendar"></i> {{ item.start_date }}
          </div>
          <div class="offer-item__details-item day-color">
            <i class="fa fa-calendar"></i> المدة : {{ item.day }}
          </div>
          <div class="offer-item__details-item copies-color">
            <i class="fa fa-calendar"></i> عدد النسخ: {{ item.number_copies }}
          </div>
        </div>
      </div>
      <div class="offer-item__actions">
        <button class="btn btn-custmer">
          <i class="fa fa-pen-to-square"></i> تعديل الاعلان
        </button>
        <button v-if="item.status == 'finished'" class="btn btn-custmer-w">
          <i class="fa fa-arrow-rotate-right"></i> إعادة النشر
        </button>
        <button
          v-if="item.status == 'valid'"
          class="btn btn-custmer-w btn-danger"
        >
          <i class="fa fa-trash"></i> حذف الاعلان
        </button>
      </div>
    </div>
  </div> -->
</template>

<script>
import networkAPI from "@/services/api/network.js";

export default {
  name: "offer-item",
  props: {
    item: {},
  },
  data() {
    return {
      toggle: false,
    };
  },
  computed: {
    statusText() {
      switch (this.item.status) {
        case "valid":
          return this.$t("offer-valid");
        case "finished":
          return this.$t("offer-finished");
        default:
          return this.item.status;
      }
    },
  },
  methods: {
    addNewOffer() {
      this.fireOpenDialog("add-new-offer", this.item);
    },
    sendIdToParent() {
      this.$emit("sendId", this.item.id); // Emit an event with the ID
      this.toggle = true;
      this.$emit("sendToggle", this.toggle); // Emit an event with the ID
    },
    async deleteItem(id) {
      try {
        await networkAPI.offers.deleteItem(id);
        console.log("deleted");

        // this.$emit("itemDeleted"); // Emit event when item is deleted
        this.fireEvent("d-filter-list-refresh");
        window.SwalSuccess("تم حذف عرضك بنجاح");
      } catch (err) {
        console.log("error");
      }
    },
  },
};
</script>

<style scoped>
/* .offer-item {
  border-bottom: 0.5px solid #e1e5e7;
}
.offer-item__wrapper {
  padding: 35px 5px 5px;
  display: flex;
  flex-direction: column;
}
.offer-item__img {
  width: 88px;
  height: 88px;
  min-width: 88px;
  min-height: 88px;
  background: #ffffff;
  flex-shrink: 0;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  margin: 0 30px 30px;
}
.offer-item__info {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.offer-item__actions {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.offer-item__metatitle {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.offer-item__status {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #ffffff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 5px;
  height: fit-content;
}
.offer-item__status.valid {
  background-color: #ffbc00;
}
.offer-item__status.finished {
  background: #ff1616;
}
.offer-item__title {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  text-transform: capitalize;
  color: #585858;
  padding: 5px;
  margin: 0;
}
.offer-item__subtitle {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;

  text-align: right;

  color: #bbaacc;
  margin-bottom: 15px;
}
.offer-item__details {
  display: flex;
  margin: 0 -5px;
}
.offer-item__details-item {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 14px;
  padding: 0 5px;
}
.mobile-layout .offer-item__details-item {
  font-size: 10px;
}

.date-color {
  color: #1fb9b3;
}

.day-color {
  color: #ffbc00;
}
.copies-color {
  color: #f2631c;
} */
.color {
  color: red;
  background-color: white;
}
.color:hover {
  color: white;
  background-color: red;
}
.color2 {
  color: rgb(105, 105, 16);
  background-color: white;
}
.color2:hover {
  color: white;
  background-color: rgb(95, 95, 20);
}
</style>
