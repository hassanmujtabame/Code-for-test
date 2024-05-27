<template>
  <div class="d-flex flex-column">
    <!-- <RiaCardHome /> -->
    <div style="margin-top: 96px">
      <div class="container">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h3 class="home-section-title">استمتع ببطاقة العضوية</h3>
              <p class="page-text">
                بفضل بطاقة العضوية في رياديات، يمكنك الآن الحصول على خصومات
                حصرية في مجموعة متنوعة من المحلات والمتاجر المحلية.
              </p>

              <button
                style="background-color: #f2631c"
                class="px-5 btn text-btn py-3 mt-4"
                @click="showCard"
              >
                تفاصيل بطاقتك
              </button>
            </div>
            <div class="col-md-6">
              <div>
                <img
                  class="img-fluid"
                  :src="`${publicPath}assets/img/riadiat-card.png`"
                  alt="hero iamge"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <CardFeatures />
    </div>
    <div class="my-5">
      <CardStep />
    </div>

    <div class="p-3 mt-5">
      <CategoryCards />
    </div>
  </div>
</template>

<script>
import dFilterList from "./filter-list/filter";
import RiaCardHome from "../../../views/network/ria-card-homepage.vue";
import AnimateCard from "@/components/cards/image-card-membership/index.vue";
import CardFeatures from "@/components/cards-features.vue";
import CategoryCards from "@/components/categories.vue";
import CardStep from "@/components/Sextion-step.vue";
export default {
  name: "card-membership",
  components: {
    AnimateCard,
    CategoryCards,
    dFilterList,
    CardFeatures,
    CardStep,
    RiaCardHome,
  },

  data: () => {
    return {
      offersCardMember: false,
    };
  },
  methods: {
    showCard(evt) {
      if (!this.offersCardMember) {
        let dataEvt = {
          title: "للأسف ليست لديك بطاقة عضوية",
          description: `انت مشترك في الباقة المجانية وهذه الباقة لا تمنحك بطاقة العضوية - رقي حسابك الى الباقة الشهرية أو الباقة السنويه و استفيد من بطاقة العضوية و المزيد من المميزات في الشبكة`,
          image: `${this.publicPath}assets/img/EmptyState2.png`,
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
      let dataEvt = {
        title: "بطاقة عضوية",
        description: `بطاقة العضوية غير جاهزة الان`,
        image: `${this.publicPath}assets/img/EmptyState2.png`,
      };
      this.showConfirmMsg(dataEvt);
      // }
      this.$router.push({ name: "show-card" });
    },

    checkSubscriptionOptions() {
      for (
        let index = 0;
        index < this.user.subscription_options.length;
        index++
      ) {
        const element = this.user.subscription_options[index];
        if (element.key == "offers_card_member") {
          this.offersCardMember = true;
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
.page-text {
  margin-block: 32px;
  font-family: Cairo;
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #979797;
}
.home-section-title {
  font-family: Cairo;
  font-size: 48px;
  font-weight: 700;
  line-height: 67.68px;
  color: #414042;
}
.text-btn {
  font-family: Cairo;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
  color: #fff;
}
</style>
