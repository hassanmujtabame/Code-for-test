<template>
  <div class="work-space-requests">
    <div class="container work-space-requests-contain">
      <d-filter-list
        :call-list="getWorkSpacesRequests"
        hideSide
        classColCard="col-12 mt-2"
        @change="changeFilter"
        class="filter-requests"
      >
        <template v-slot:total>
          <h4 class="fw-bold">طلبات أماكن العمل</h4>
        </template>
        <template v-slot:before-body>
          <ul class="nav nav-pills mb-3">
            <li
              v-for="(btn, i) in actions"
              :key="i"
              class="nav-item col-12 col-md-3"
            >
              <button
                class="nav-link border w-75 t-c m-auto"
                :class="{ active: status == btn.status }"
                type="button"
                @click="changeStatus(btn.status)"
              >
                {{ btn.label }}
              </button>
            </li>
          </ul>
        </template>
        <template v-slot:default="{ item }">
          <WorkSpaceRequestCard :item="item" @update-list="updateList" />
        </template>
      </d-filter-list>
    </div>
  </div>
</template>
  <script>
import WorkSpaceRequestCard from "./card-item.vue";
import WorkspaceAPI from "@/services/api/workspace";
export default {
  name: "WorkSpaceRequest",
  components: {
    WorkSpaceRequestCard,
  },
  data: () => {
    return {
      status: "waiting",
      actions: [
        { status: "waiting", label: "في انتظار موافقتك" },
        { status: "comping", label: "قادمة" },
        { status: "current", label: "حالية" },
        { status: "precedent", label: "سابقة" },
      ],
      filterItem: {
        search: null,
        created_at: "asc",
        status: "waiting",
      },
    };
  },
  methods: {
    updateList() {
      this.fireEvent("d-filter-list-change-page", 1);
    },
    changeStatus(status) {
      this.status = status;
      this.filterItem.status = status;
      this.fireEvent("d-filter-list-change-page", 1);
    },
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    async getWorkSpacesRequests(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page,
          paginate: 4,
          ...this.filterItem,
        };
        let data = await WorkspaceAPI.requests.getWorkSpacesRequests(params);
        console.log('requests_workspaces', data)
        return data 
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>
  
  <style scoped>
.work-space-requests {
  margin-top: 83px;
  background-color: #f6f8f9;
  padding: 5rem 0;
}
.filter-requests {
  padding: 1.5em;
  border-radius: 10px;
}
</style>