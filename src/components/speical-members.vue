<template>
  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-center align-items-center">
        <h1 class="position-relative">
          أعضاء مميزون

          <img
            style="bottom: -25px; left: 0"
            class="position-absolute"
            src="../assets/img/network/Vector 14.png"
            alt=""
          />
        </h1>
      </div>
      <div
        class="col-md-3 gap-2 col-12 p-2"
        v-for="item in sliceArray"
        :key="item.id"
      >
        <CardItem
          :to="getRouteLocale('network-show-profile', { id: item.id })"
          :name="item.name"
          :description="item.job_title"
          :img="item.image"
          :showJob="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MembersApi from "@/services/api/members.js";
import CardItem from "./speical-member-item.vue";

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
      return this.items.slice(0, 4);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
