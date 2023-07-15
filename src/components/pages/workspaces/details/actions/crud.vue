<template>
  <div class="col-md-6 d-flex gap-2 crud-actions">
            <button
            @click="openAddWorkSpace"
            style="height: 45px;"
            class="btn bg-main bg border text-white px-5"
          >
                            <i class="fa fa-pen-to-square"></i>
          تعديل
          </button> 
    <div>
      <button
        @click="openDeleteDialog"
        style="height: 45px;"
        class="btn-main btn-danger px-5 w-100 border-0 rounded-2"
        role="button"
      >
        <i class="fa-solid fa-trash-can"></i>
        {{ $t("delete") }}
      </button>
    </div>
        <edit />
    <SuccessAddWorkspace />
  </div>
</template>

<script>
import WorkspaceAPI from "@/services/api/workspace";
import edit from "@/components/pages/workspaces/edit";
import SuccessAddWorkspace from "@/components/pages/workspaces/edit/SuccessAddWorkspace.vue";

export default {
  name: "action-crud",
  props: ["singleWorkspace"],
    components: {
    edit,
SuccessAddWorkspace
  },
    data:()=>{
    return {
      loading: true,
      items: [],
    };
  },
  methods: {
            openAddWorkSpace() {
      this.fireOpenDialog("edit-dialog");
    },
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

<style scoped>
.crud-actions {
  justify-content: end;
}
@media (max-width: 991px) {
  .crud-actions {
    justify-content: center;
    margin-top: 15px;
  }
}
</style>