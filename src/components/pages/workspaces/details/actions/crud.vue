<template>
  <div class="col-md-6 d-flex gap-2 justify-content-end">
    <div>
      <button
        @click="openDeleteDialog"
        class="btn-main btn-danger px-3 w-100 border-0 rounded-2"
        role="button"
      >
        <i class="fa-solid fa-trash-can"></i>
        {{ $t("delete") }}
      </button>
    </div>
  </div>
</template>

<script>
import WorkspaceAPI from "@/services/api/workspace";
export default {
  name: "action-crud",
  props: ["singleWorkspace"],
  methods: {
    openDeleteDialog() {
      let dataEvt = {
        title: "هل أنت متأكد من الحذف؟",
        btns: [
          {
            title: this.$t("confirm_delete"),
            action: () => this.deleteWorkspace(),
          },
        ],
      };
      this.showConfirmMsg(dataEvt);
    },
    async deleteWorkspace() {
      try {
        let { data } = await WorkspaceAPI.deleteWorkspace(
          this.singleWorkspace.id
        );
        if (data.success) {
          this.$router.push(this.getRouteLocale("workspaces-home"));
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>

<style>
</style>