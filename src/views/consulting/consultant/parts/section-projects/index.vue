<template>
  <div
    style="height: 150px"
    class="consult-details overflow-y-auto col-md-6 col-12 pt-3"
  >
    <h4>مشاريع المستشار</h4>
    <ol v-if="items.length > 0" type="1">
      <li v-for="(item, i) in items" :key="i" class="consultant-text">
        {{ item.title }}
      </li>
    </ol>
    <div v-else>
      <h1 class="consultant-text empty-list">لا يوجد مشاريع</h1>
    </div>
    <div></div>
  </div>
</template>

<script>
import consultingAPI from "@/services/api/consulting";
export default {
  name: "section-projects",
  props: {
    itemPage: {},
  },
  data: () => ({
    loading: false,
    items: [],
  }),
  methods: {
    async initializing() {
      this.loading = true;
      try {
        let { data } = await consultingAPI.consultants.getProjects(
          this.itemPage.id
        );
        if (data.success) {
          this.items = data.data;
        }
      } catch (error) {
        //
      }
      this.loading = false;
    },
  },
  mounted() {
    this.initializing();
  },
};
</script>

<style scoped>
.consultant-text {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */
  text-transform: capitalize;

  color: #979797;
}
.consultant-title {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  text-transform: capitalize;

  color: #414042;
}
</style>
