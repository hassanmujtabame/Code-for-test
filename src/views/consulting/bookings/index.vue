<template>
  <div style="margin-top: 96px">
    <div class="container mt-5">
      <d-filter-list
        :call-list="loadList"
        hideSide
        classColCard="col-12 mt-2"
        @change="changeFilter"
      >
        <template v-slot:total>
          <h4 class="fw-bold">حجوزات إستشارة</h4>
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
          <ConsultingRequest :item="item" @update-list="updateList">
          </ConsultingRequest>
        </template>
      </d-filter-list>
    </div>
    <showLinkDialog />
  </div>
  <!-- <div style="margin-top: 96px;">
        <div class="container mt-5">
      <d-filter-list
      :call-list="loadList"
      hideSide
      classColCard="col-12 mt-2"
      @change="changeFilter"
      >
        <template v-slot:total>
            <h4 class="fw-bold">حجوزات إستشارة</h4>
        </template>
        <template v-slot:before-body>
            <ul class="nav nav-pills  mb-3">
                    <li v-for="(btn,i) in actions" :key="i" class="nav-item col-12 col-md-3">
                        <button class="nav-link  border w-75 t-c m-auto" :class="{active:status==btn.status}"
                             type="button" 
                             @click="changeStatus(btn.status)"
                            >{{ btn.label }}</button>
                    </li>
                </ul>
        </template>
        <template v-slot:default="{item}">
            
            <ConsultingRequest
                            :itemId="item.id"
                            :status="item.status"
                            :title="item.department_name"
                            :userName="item.user_info.name"
                            :dateBooking="item.start_date"
                            :timeBooking="item.available_time"
                            :duringBooking="30"
                            :desc="item.description"
                            :price="item.price"
                            @update-list="updateList"
                            
                            
                            >
                        </ConsultingRequest>
            
        </template>
      </d-filter-list>
    </div>
    <showLinkDialog />
    </div> -->
  <!-- <div style="margin-top: 96px;">
        <div class="container mt-5">
      <d-filter-list
      :call-list="loadList"
      hideSide
      classColCard="col-12 mt-2"
      @change="changeFilter"
      >
        <template v-slot:total>
            <h4 class="fw-bold">حجوزات إستشارة</h4>
        </template>
        <template v-slot:before-body>
            <ul class="nav nav-pills  mb-3">
                    <li v-for="(btn,i) in actions" :key="i" class="nav-item col-12 col-md-3">
                        <button class="nav-link  border w-75 t-c m-auto" :class="{active:status==btn.status}"
                             type="button" 
                             @click="changeStatus(btn.status)"
                            >{{ btn.label }}</button>
                    </li>
                </ul>
        </template>
        <template v-slot:default="{item}">
            
            <ConsultingRequest
                            :itemId="item.id"
                            :status="item.status"
                            :title="item.department_name"
                            :userName="item.user_info.name"
                            :dateBooking="item.start_date"
                            :timeBooking="item.available_time"
                            :duringBooking="30"
                            :desc="item.description"
                            :price="item.price"
                            @update-list="updateList"
                            
                            
                            >
                        </ConsultingRequest>
            
        </template>
      </d-filter-list>
    </div>
    <showLinkDialog />
    </div> -->
  <!-- <div style="margin-top: 96px;">
        <div class="container mt-5">
      <d-filter-list
      :call-list="loadList"
      hideSide
      classColCard="col-12 mt-2"
      @change="changeFilter"
      >
        <template v-slot:total>
            <h4 class="fw-bold">حجوزات إستشارة</h4>
        </template>
        <template v-slot:before-body>
            <ul class="nav nav-pills  mb-3">
                    <li v-for="(btn,i) in actions" :key="i" class="nav-item col-12 col-md-3">
                        <button class="nav-link  border w-75 t-c m-auto" :class="{active:status==btn.status}"
                             type="button" 
                             @click="changeStatus(btn.status)"
                            >{{ btn.label }}</button>
                    </li>
                </ul>
        </template>
        <template v-slot:default="{item}">
            
            <ConsultingRequest
                            :itemId="item.id"
                            :status="item.status"
                            :title="item.department_name"
                            :userName="item.user_info.name"
                            :dateBooking="item.start_date"
                            :timeBooking="item.available_time"
                            :duringBooking="30"
                            :desc="item.description"
                            :price="item.price"
                            @update-list="updateList"
                            
                            
                            >
                        </ConsultingRequest>
            
        </template>
      </d-filter-list>
    </div>
    <showLinkDialog />
    </div> -->
  <!-- <div style="margin-top: 96px;">
        <div class="container mt-5">
      <d-filter-list
      :call-list="loadList"
      hideSide
      classColCard="col-12 mt-2"
      @change="changeFilter"
      >
        <template v-slot:total>
            <h4 class="fw-bold">حجوزات إستشارة</h4>
        </template>
        <template v-slot:before-body>
            <ul class="nav nav-pills  mb-3">
                    <li v-for="(btn,i) in actions" :key="i" class="nav-item col-12 col-md-3">
                        <button class="nav-link  border w-75 t-c m-auto" :class="{active:status==btn.status}"
                             type="button" 
                             @click="changeStatus(btn.status)"
                            >{{ btn.label }}</button>
                    </li>
                </ul>
        </template>
        <template v-slot:default="{item}">
            
            <ConsultingRequest
                            :itemId="item.id"
                            :status="item.status"
                            :title="item.department_name"
                            :userName="item.user_info.name"
                            :dateBooking="item.start_date"
                            :timeBooking="item.available_time"
                            :duringBooking="30"
                            :desc="item.description"
                            :price="item.price"
                            @update-list="updateList"
                            
                            
                            >
                        </ConsultingRequest>
            
        </template>
      </d-filter-list>
    </div>
    <showLinkDialog />
    </div> -->
  <!-- <div style="margin-top: 96px;">
        <div class="container mt-5">
      <d-filter-list
      :call-list="loadList"
      hideSide
      classColCard="col-12 mt-2"
      @change="changeFilter"
      >
        <template v-slot:total>
            <h4 class="fw-bold">حجوزات إستشارة</h4>
        </template>
        <template v-slot:before-body>
            <ul class="nav nav-pills  mb-3">
                    <li v-for="(btn,i) in actions" :key="i" class="nav-item col-12 col-md-3">
                        <button class="nav-link  border w-75 t-c m-auto" :class="{active:status==btn.status}"
                             type="button" 
                             @click="changeStatus(btn.status)"
                            >{{ btn.label }}</button>
                    </li>
                </ul>
        </template>
        <template v-slot:default="{item}">
            
            <ConsultingRequest
                            :itemId="item.id"
                            :status="item.status"
                            :title="item.department_name"
                            :userName="item.user_info.name"
                            :dateBooking="item.start_date"
                            :timeBooking="item.available_time"
                            :duringBooking="30"
                            :desc="item.description"
                            :price="item.price"
                            @update-list="updateList"
                            
                            
                            >
                        </ConsultingRequest>
            
        </template>
      </d-filter-list>
    </div>
    <showLinkDialog />
    </div> -->
</template>
<script>
import ConsultingRequest from "./card-item.vue";
import consultingAPI from "@/services/api/consulting/index";
import showLinkDialog from "./dialogs/show-consultation-link/index";
export default {
  name: "consultation-bookings-page",
  components: {
    ConsultingRequest,
    showLinkDialog,
  },
  data: () => {
    return {
      status: null, //status=coming|past
      actions: [
        { status: null, label: "كل حجوزات" },
        { status: "coming", label: "حجوزات القادمة" },
        { status: "past", label: "حجوزات الماضية  " },
      ],
      filterItem: {
        search: null,
        created_at: "asc",
        status_date: null,
      },
    };
  },
  methods: {
    updateList() {
      this.fireEvent("d-filter-list-change-page", 1);
    },
    changeStatus(status) {
      this.status = status;
      this.filterItem.status_date = status;
      this.fireEvent("d-filter-list-change-page", 1);
    },
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    async loadList(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page,
          paginate: 4,
          ...this.filterItem,
        };
        return await consultingAPI.client.getBookings(params);
      } catch (error) {
        console.log("error", error);
        console.log("response", error.response);
      }
    },
  },
};
</script>

<style></style>
