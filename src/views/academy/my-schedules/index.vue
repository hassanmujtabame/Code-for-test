<template>
  <div style="margin-top: 95px">
    <div class="container">
      <div class="d-flex justify-content-between">
        <h1 class="home-section-title">جدول مواعيدي</h1>
        <button @click="addSchedule" class="btn btn-danger px-5 my-3">
          <i class="fa-solid fa-plus"></i> {{ $t("add-schedule") }}
        </button>
      </div>

      <SectionFilterList />
      <DialogNewSchedule @success="updateEventSuccess" />
    </div>
  </div>
</template>

<script>
import SectionFilterList from "./parts/section-filter-list/index";
import DialogNewSchedule from "./dialogs/new-schedule/index.vue";

export default {
  name: "ready-services",
  components: {
    SectionFilterList,
    DialogNewSchedule,
  },
  data: () => ({}),
  methods: {
    addSchedule() {
      this.fireOpenDialog("new-schedule", this.eventSelected);
    },
    updateEventSuccess(item) {
      // let index = this.items.findIndex((x) => x.id == item.id);
      // this.items[index] = Object.assign(this.items[index], item);
      // this.updateAttributes();
    },
  },
};
</script>

<style></style>
