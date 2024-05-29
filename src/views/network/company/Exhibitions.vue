<template>
  <div class="container" style="margin-top: 105px">
    <d-filter-list
      :call-list="loadList"
      hideSide
      hideOrder
      hideSearch
      classTitle="col-lg-4 mb-4"
      HeadEndClasses="col-lg-3 mb-4"
      classColCard=" col-md-4 col-lg-3"
    >
      <template v-slot:title>
        <h4 class="text-cairo">{{ $t("company-exhibitions") }}</h4>
      </template>
      <template v-slot:head-end>
        <button
          @click="openAddDialog"
          class="py-3 btn btn-danger w-100 d-flex justify-content-center align-items-center gap-2"
        >
          <i class="fa-solid fa-plus"></i>{{ $t("add-exhibitions") }}
        </button>
      </template>
      <template v-slot="{ item }">
        <Card :item="item" />
      </template>
    </d-filter-list>
    <addExhibitionDialg />
  </div>
</template>

<script>
import exhibitionAPI from "@/services/api/exhibitions.js";
import Card from "@/components/list-cards/network/ExhibitionCard.vue";
import addExhibitionDialg from "@/components/dialogs/network/AddExhibition.vue";

export default {
  name: "company-exhibitions",
  components: { Card, addExhibitionDialg },
  data: () => ({
    addExhibition: false,
  }),
  methods: {
    async loadList(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page,
          paginate: 8,
        };
        return await exhibitionAPI.getMy(params);
      } catch (error) {
        console.log("error", error);
        console.log("response", error.response);
      }
    },
    openAddDialog() {
      if (this.addExhibition) {
        this.fireOpenDialog("add-dialog");
      } else {
        let dataEvt = {
          title: "للأسف لا يمكنك  إضافة معرض",
          description: `هذه الباقة لا تمكنك من إضافة معرض - رقي حسابك إلى الباقة السنوية واستفيد من إضافة معرضك و المزيد من المميزات في الشبكة`,
          image: `${this.publicPath}assets/img/Group 1171275670.png`,
          btns: [
            {
              title: "رقي حسابك",
              action: () => this.$router.push({ name: "network-subscribe" }),
            },
          ],
        };
        this.showConfirmMsg(dataEvt);
        return;
      }
    },
    checkSubscriptionOptions() {
      for (
        let index = 0;
        index < this.user.subscription_options.length;
        index++
      ) {
        const element = this.user.subscription_options[index];
        if (element.key == "add_exhibitions") {
          this.addExhibition = true;
          console.log("element", element);
        }
      }
    },
  },
  mounted() {
    this.checkSubscriptionOptions();
  },
};
</script>

<style scoped>
.page-title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  text-align: right;
  text-transform: capitalize;

  color: #414042;
}
h4 {
  font-size: 40px;
  font-weight: 800;
  color: #1fb9b3;
}
</style>
