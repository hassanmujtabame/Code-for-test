<template>
  <div class="container">
    <div class="decoration-image">
      <div class="mt-5 py-5">
        <div class="text-center title-text mb-3">
          استكشف مجالات <span>رياديات</span>
        </div>
        <div class="row py-5">
          <d-swiper
            class="my-swiper-container"
            :slides-per-view="5.5"
            :space-between="3"
            is-auto
            :items="items"
          >
            <template v-slot:default="{ item }">
              <departmentCard :item="item" />
            </template>
          </d-swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import departmentCard from "./department-card.vue";
import academyAPI from "@/services/api/academy/index.js";

export default {
  name: "section-training-fields",
  components: {
    departmentCard,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    // Fetch data from API
    async loadDepartmints() {
      let { data } = await academyAPI.getDepartments();
      this.items = this.transformArray(data.data);
    },
    transformArray(data) {
      return data.map((item) => {
        // Remove the prefix "أكاديمية" from the name if it starts with it
        let newName = item.name;
        if (newName.startsWith("أكاديمية")) {
          newName = newName.replace("أكاديمية", "").trim();
        } else if (newName.startsWith("اكاديمية")) {
          newName = newName.replace("اكاديمية", "").trim();
        } else if (newName.startsWith("اكاديميه")) {
          newName = newName.replace("اكاديميه", "").trim();
        } else if (newName.startsWith("أكاديميه")) {
          newName = newName.replace("أكاديميه", "").trim();
        }

        // Return the new object with the required attributes
        return {
          id: item.id,
          image_path: item.image_path,
          name: newName,
        };
      });
    },
  },
  mounted() {
    this.loadDepartmints();
  },
};
</script>

<style scoped>
.row {
  padding-inline: 120px;
}
.container {
  background: #fafafa;
}
.title-text {
  font-family: Cairo;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  color: #414042;
}
.title-text span {
  color: #2cb7b3;
}
</style>

<style>
.my-swiper-container .swiper-slide {
  width: 185px !important;
}
.decoration-image {
  width: 100%;
  height: 100%;
  background-image: url("/public/assets/img/IconsTopLeft.png"),
    url("/public/assets/img/IconsButtomRight.png"),
    url("/public/assets/img/VectorTopRight.png");
  background-position: top left, bottom right, top right;
  background-size: auto 100%, auto 100%, 380px auto;
  background-repeat: no-repeat, no-repeat, no-repeat;
}
</style>
