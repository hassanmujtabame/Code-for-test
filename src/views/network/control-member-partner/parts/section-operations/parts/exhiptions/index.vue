<template>
  <div>
    <div class="col-md-6 text-start">
      <button @click="openAddDialog" class="btn bg-main bg border text-white">
        <plusRectRoundIcon />
        {{ $t("add_exhibition") }}
      </button>
    </div>
    <SectionFilter />
    <addExhibitionDialg />
    <addSuccessExhibitionDialg />
  </div>
</template>

<script>
import SectionFilter from "./section-filter-exhibitions/index.vue";

import addExhibitionDialg from "@/components/dialogs/network/AddExhibition.vue";

import addSuccessExhibitionDialg from "./dialogs/success-add-exhibition.vue";

export default {
  name: "exhiption-dashboard-partner",
  data: () => {
    return {
      addExhibition: false,
      showExhibition: false,
    };
  },
  components: {
    SectionFilter,
    addExhibitionDialg,
    addSuccessExhibitionDialg,
  },
  methods: {
    openAddDialog() {
      if (this.addExhibition) {
        this.fireOpenDialog("add-dialog");
      } else {
        let dataEvt = {
          title: "للأسف لايمكنك  اضافة معرض",
          description: `انت غير مشترك في الباقة السنوية وهذه الباقة لا تمنحك  إضافة معرض  - رقي حسابك الى الباقة السنويه و استفيد من إضافة معرضك و المزيد من المميزات في الشبكة`,
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
        } else if (element.key == "show_exhibitions") {
          this.showExhibition = true;
        }
      }
    },
  },
  mounted() {
    this.checkSubscriptionOptions();
  },
};
</script>
