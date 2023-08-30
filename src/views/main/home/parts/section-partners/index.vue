<template>
  <div class="sec-six" v-if="items && items.length>0">
    <div class="container p-3">
      <h2>{{ $t('our-partners-in-riadiat') }}</h2>
      <div class="row justify-content-center gap-2">
        <div
          v-for="(partner,i) in items"
          :key="i"
          class="col-12 col-md-3 text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div class="mx-auto" style="width:fit-content">
            <ImgAvatar class="filter-shadow-partner mx-auto" :item="partner" size="180" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import partnersAPI from "@/services/api/partners.js";
import ImgAvatar from "@/components/avatars/img-avatar-partners.vue";
export default {
  name: "partners-riadiat",
  components: {
    ImgAvatar
  },
  data() {
    return {
      partners: [],
      loading: true,
      items: []
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
    }
  },
  mounted() {
    this.initlizing();
  }
};
</script>

<style>
</style>