<template>
  <div
    class="col-8 crud-actions"
    style="
      height: 100%;
      display: grid;
      gap: 10px;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: end;
    "
  >
    <div style="height: 100%">
      <button
        @click="openEditDialog"
        style="height: 100%"
        class="btn-main px-3 w-100 border-0 rounded-2"
      >
        <i class="fa-regular fa-pen-to-square"></i>
        {{ $t("modification") }}
      </button>
    </div>
    <div style="height: 100%">
      <button
        :disabled="loading"
        @click="suspendItem"
        v-if="!itemPage.is_suspend"
        style="height: 100%; background-color: #ffbc00"
        class="btn-main px-3 w-100 border-0 rounded-2"
        role="button"
      >
        <img :src="`${publicPath}assets/svg/suspendu.svg`" />
        {{ $t("suspend") }}
      </button>
      <button
        :disabled="loading"
        @click="notSuspendItem"
        v-else
        style="height: 100%; background-color: #ffbc00"
        class="btn-main px-3 w-100 border-0 rounded-2"
        role="button"
      >
        <img :src="`${publicPath}assets/svg/suspendu.svg`" />
        {{ $t("republish") }}
      </button>
    </div>
    <div style="height: 100%">
      <button
        @click="openDeleteDialog"
        style="height: 100%"
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
import ServiceProviderAPIs from "@/services/api/service-provider/provider/ready-service";
export default {
  name: "action-crud",
  props: ["itemPage"],
  data: (/*vm*/) => {
    return {
      loading: false,
    };
  },
  watch: {
    itemPage: {
      deep: true,
      immediate: true,
      handler(/*val*/) {
        //
      },
    },
  },
  methods: {
    openEditDialog() {
      this.fireOpenDialog("update-ready-service", this.itemPage);
    },
    openDeleteDialog() {
      let dataEvt = {
        title: this.$t("confirm_delete_ready_service_message"),
        description:
          "عند تأكيد الحذف لن تستطيع استعادة الخدمة مرة اخرى  يمكنك تعليق الخدمة لفترة زمنية معينة  بدلا من حذفها",
        btns: [
          {
            title: this.$t("confirm_delete"),
            action: () => this.delelteItem(),
          },
        ],
      };
      this.showConfirmMsg(dataEvt);
      //this.fireOpenDialog('delete-ready-service',this.itemPage)
    },
    async delelteItem() {
      try {
        let { data } = await ServiceProviderAPIs.delete(this.itemPage.id);
        if (data.success) {
          this.$router.push(
            this.getRouteLocale("service-provider-my-ready-services")
          );
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
    },
    async suspendItem() {
      this.loading = true;
      try {
        let { data } = await ServiceProviderAPIs.suspend(this.itemPage.id);
        if (data.success) {
          this.is_suspend = 1;
          this.$emit("suspend", 1);
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
      this.loading = false;
    },
    async notSuspendItem() {
      this.loading = true;
      try {
        let { data } = await ServiceProviderAPIs.notSuspend(this.itemPage.id);
        if (data.success) {
          this.is_suspend = 0;
          this.$emit("suspend", 0);
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
      this.loading = false;
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
