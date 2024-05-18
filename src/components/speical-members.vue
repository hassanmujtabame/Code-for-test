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
import CardItem from "./speical-member-item.vue";

export default {
  name: "speical-member",
  components: { CardItem },
  props: {
    featured_members: [],
  },
  data() {
    return {
      items: [],
    };
  },

  computed: {
    sliceArray() {
      return this.featured_members.slice(0, 4);
    },
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
