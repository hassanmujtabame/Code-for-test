<template>
  <div class="container">
    <div class="row speical-members-row d-flex justify-content-center">
      <div class="d-flex justify-content-center align-items-center">
        <p
          class="position-relative"
          style="
            font-size: 32px;
            font-weight: 500;
            width: 100%;
            text-align: center;
            margin: 50px 0px;
          "
        >
          أعضاء مميزون

          <img
            style="bottom: -10px; left: calc(50% - 100px); z-index: -1"
            class="position-absolute"
            width="200px"
            src="../assets/img/network/Vector 14.png"
            alt=""
          />
        </p>
      </div>
      <div
        class="speical-members-card col-md-6 col-lg-3 gap-2 col-12 p-2"
        v-for="item in sliceArray"
        :key="item.id"
      >
        <CardItem
          :id="item.id"
          :to="
            item.id > 0
              ? getRouteLocale('network-show-profile', { id: item.id })
              : getRouteLocale()
          "
          :name="item.name"
          :description="item.job_title == null ? 'عضو مميز' : item.job_title"
          :img="`${publicPath + item.img}`"
          :showJob="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MembersApi from "@/services/api/members.js";
import CardItem from "./speical-member-item.vue";
import { url } from "vuelidate/lib/validators";

export default {
  name: "speical-member",
  components: { CardItem },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getData() {
      try {
        let { data } = await MembersApi.getAll();
        if (data.success) {
          this.items = data.data;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    sliceArray() {
      // this.items = [
      //   {
      //     id: 1,
      //     name: "ريم محمد",
      //     job_title: "مصممة جرافيك",
      //     img: "assets/img/women_personasl1.png",
      //   },
      //   {
      //     id: 2,
      //     name: "عبير أحمد",
      //     job_title: "مصممة أزياء",
      //     img: "assets/img/women_personal2.png",
      //   },
      //   {
      //     id: 3,
      //     name: "زينة علي",
      //     job_title: "مديرة مشروع",
      //     img: "assets/img/women_personal3.jpeg",
      //   },
      //   {
      //     id: 4,
      //     name: "سارة عبدالله",
      //     job_title: "مديرة تسويق",
      //     img: "assets/img/women_personal4.png",
      //   },
      //];
      // if (this.items.length < 4) {
      //   const placeholderItems = [
      //     {
      //       id: -1,
      //       name: "عضو مميز",
      //       job_title: "...",
      //       img: "assets/img/businesswoman.jpg",
      //     },
      //     {
      //       id: -2,
      //       name: "عضو مميز",
      //       job_title: "...",
      //       img: "assets/img/businesswoman.jpg",
      //     },
      //     {
      //       id: -3,
      //       name: "عضو مميز",
      //       job_title: "...",
      //       img: "assets/img/businesswoman.jpg",
      //     },
      //     {
      //       id: -4,
      //       name: "عضو مميز",
      //       job_title: "...",
      //       img: "assets/img/businesswoman.jpg",
      //     },
      //   ];
      //   return [...this.items, ...placeholderItems].slice(0, 4);
      // }

      return this.items.slice(0, 4);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.speical-members-row {
  background-image: url(@/assets/img/member/decorationIcons3.png),
    url(@/assets/img/member/decorationIcons2.png);
  background-position: bottom right, left 30px;
  background-repeat: no-repeat;
}
.speical-members-card {
  max-width: 80%;
}
@media screen and (min-width: 426px) {
  .speical-members-card {
    max-width: 46%;
  }
}
@media screen and (min-width: 860px) {
  .speical-members-card {
    max-width: 22%;
  }
}
</style>
