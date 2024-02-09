<template>
  <div class="sec-six" v-if="items && items.length > 0">
    <div class="container p-3">
      <div class="text-center">
        <h2>{{ $t("our-partners-in-riadiat") }}</h2>
        <img src="" alt="" />
      </div>
      <!-- <d-swiper v-if="!loading" :slides-per-view="!isMobile ? 1 : 5" is-auto :space-between="10" :items="items"> -->
      <!-- <template v-slot:default="{ item }"> -->
      <div class="d-flex container-fluid justify-content-center gap-5">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="text-center row"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div class="mx-auto" style="width: fit-content">
            <ImgAvatar
              class="filter-shadow-partner mx-auto"
              :item="item"
              size="180"
            />
          </div>
        </div>
      </div>
      <!-- </template> -->
      <!-- </d-swiper> -->
    </div>
  </div>
</template>

<script>
import partnersAPI from "@/services/api/partners.js";
import ImgAvatar from "@/components/avatars/img-avatar-partners.vue";
export default {
  name: "partners-riadiat",
  components: {
    ImgAvatar,
  },
  data() {
    return {
      partners: [],
      loading: true,
      items: [],
    };
  },
  methods: {
    async initlizing() {
      this.loading = true;
      try {
        let { data } = await partnersAPI.getPartnersHome();
        if (data.success) {
          this.items = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.initlizing();
  },
};
</script>

<style></style>
