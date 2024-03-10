<template>
  <div class="container position-relative rounded-2 border py-2">
    <div class="row">
      <div class="col-12 row align-items-center">
        <div class="col-12 col-md-8">
          <h1 class="sect-title">قائمة إعلاناتي</h1>
        </div>
        <div class="col-12 col-md-4">
          <button @click="addNewOffer" class="btn btn-custmer w-100">
            <i class="far fa-square-plus"></i> أضف إعلان جديد
          </button>
        </div>
      </div>
      <div class="col-12">
        <d-filter-list
          :call-list="loadList"
          classColCard="col-12"
          hideSide
          hideTotal
          classTitle="col-md-6"
          classSearchOrder="col-md-6"
        >
          <template v-slot:title="{}">
            <h1 class="sect-subtitle">
              كل اكواد الخصم الذي قمت بأضافتها مسبقاً
            </h1>
          </template>
          <template v-slot:before-body>
            <ul class="nav nav-pills mb-3 justify-content-center">
              <li
                v-for="(btn, i) in actions"
                :key="i"
                class="nav-item col-12 col-md-3"
              >
                <button
                  class="nav-link border w-75 t-c m-auto"
                  :class="{ active: filterItem.status == btn.status }"
                  type="button"
                  @click="changeStatus(btn.status)"
                >
                  {{ btn.label }}
                </button>
              </li>
            </ul>
          </template>
          <template v-slot="{ item }">
            <OfferItem
              @sendToggle="handleToggle"
              @itemDeleted="loadList"
              :item="item"
              @sendId="handleId"
            />
          </template>
        </d-filter-list>
      </div>
      <div
        v-if="toggle"
        style="
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: white;
          z-index: 10;
        "
        class="position-absolute"
      >
        <EditOffer @close="closeToggle" :id="id" />
      </div>
    </div>
  </div>
</template>

<script>
import OfferItem from "./card";
import networkAPI from "@/services/api/network.js";
import EditOffer from "@/components/update-offer.vue";

export default {
  name: "filter-list",
  components: {
    OfferItem,
    EditOffer,
  },
  data: () => {
    return {
      toggle: false,
      filterSide: {},
      filterItem: {
        search: null,
        created_at: "asc",
        status: null,
      },
      id: "",
      items: [{}, {}, {}, {}, {}, {}],
      actions: [
        { status: null, label: "كل الاعلانات" },
        { status: "valid", label: "الإعلانات السارية " },
        { status: "finished", label: "الإعلانات المنتهية" },
      ],
    };
  },
  methods: {
    addNewOffer() {
      this.fireOpenDialog("add-new-offer");
    },
    handleToggle(toggle) {
      this.toggle = toggle;
      console.log(`here is the parent toggle ${this.toggle}`);
    },
    closeToggle() {
      this.toggle = false;
    },
    changeStatus(status) {
      this.filterItem.status = status;
      this.fireEvent("d-filter-list-refresh");
    },
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    async loadList(metaInfo) {
      console.log("hi");
      try {
        let params = {
          // page: metaInfo.current_page,
          ...this.filterItem,
        };
        // let params = {
        //   page: metaInfo.current_page,
        //   ...this.filterItem,
        // };
        return await networkAPI.offers.getMyOffers(params);
      } catch (error) {
        console.log("error", error);
        console.log("response", error.response);
      }
    },
    handleId(id) {
      this.id = id;
      console.log(`this id ${this.id}`);
    },
    // async loadList(metaInfo) {
    //   try {
    //     let params = {
    //       // page: metaInfo.current_page,
    //       ...this.filterItem,
    //     };
    //     // let params = {
    //     //   page: metaInfo.current_page,
    //     //   ...this.filterItem,
    //     // };
    //     return await networkAPI.offers.getMyOffers(params);
    //   } catch (error) {
    //     console.log("error", error);
    //     console.log("response", error.response);
    //   }
    // },
  },
};
</script>

<style scoped>
.sect-title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */
  text-transform: capitalize;

  /* 414042 */

  color: #414042;
}
.sect-subtitle {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */
  text-transform: capitalize;

  /* 737373 */

  color: #737373;
}
</style>
