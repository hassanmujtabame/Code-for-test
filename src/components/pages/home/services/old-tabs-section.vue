<template>

    <div>
        <DTabs group="pills" :current.sync="currentTab">
          <TabHead :current.sync="currentTab" group="pills" reference="home">
            <WorldSVG />
            {{ $t("network") }}
          </TabHead>
  
          <!-- uncomment after the incubator activated -->
          <!-- <TabHead :current.sync="currentTab" group="pills" reference="profile">
            <LightSVG />
            {{ $t("incubator") }}
          </TabHead> -->
  
          <TabHead :current.sync="currentTab" group="pills" reference="contact">
            <CameraSVG />
            {{ $t("academy") }}
          </TabHead>
  
          <TabHead :current.sync="currentTab" group="pills" reference="servProvider">
            <HeartSVG />
            {{ $t("service-providers") }}
          </TabHead>
  
          <TabHead :current.sync="currentTab" group="pills" reference="workspaces">
            <WorkspaceSVG />
            {{ $t("workspaces") }}
          </TabHead>
  
          <TabHead :current.sync="currentTab" group="pills" reference="affiliate">
            <AffiliateIconSVG />
            {{ $t("Affiliate-marketing") }}
          </TabHead>
          <!-- <TabHead :current.sync="currentTab" group="pills" reference="shop">
            <ShopSVG />
            {{ $t("market") }}
          </TabHead> -->
        </DTabs>
  
        <div class="tab-content" id="pills-tabContent">
          <TabItem :current.sync="currentTab" group="pills" reference="home" v-slot="{ selected }">
            <div data-aos="fade-left" v-if="!isMobile" data-aos-duration="2000">
              <img class="img-fluid" :src="`${publicPath}assets/img/Rectangle 1763.png`" alt="" />
            </div>
            <ServiceCard :selected="selected" :title="$t('network')" routeName="network-home">
              {{ $t("home-riadiat-srv-f-y-network") }}
            </ServiceCard>
          </TabItem>
  
          <!-- uncomment after the incubator activated -->
  
          <!-- <TabItem :current.sync="currentTab" group="pills" reference="profile" v-slot="{ selected }">
            <div data-aos="fade-left" v-if="!isMobile" data-aos-duration="2000">
              <img class="img-fluid" :src="`${publicPath}assets/img/Rectangle 1763.png`" alt="" />
            </div>
            <ServiceCard :title="$t('incubator')" :selected="selected" routeName="incubator-home">
              {{ $t("home-riadiat-srv-f-y-incubator") }}
            </ServiceCard>
          </TabItem> -->
  
          <TabItem :current.sync="currentTab" group="pills" reference="contact" v-slot="{ selected }">
            <div data-aos="fade-left" v-if="!isMobile" data-aos-duration="2000">
              <img class="img-fluid" :src="`${publicPath}assets/img/Rectangle 1763.png`" alt="" />
            </div>
            <ServiceCard :title="$t('academy')" :selected="selected" routeName="academy-home">
              {{ $t("home-riadiat-srv-f-y-academy") }}
            </ServiceCard>
          </TabItem>
  
          <TabItem :current.sync="currentTab" group="pills" reference="servProvider" v-slot="{ selected }">
            <div data-aos="fade-left" v-if="!isMobile" data-aos-duration="2000">
              <img class="img-fluid" :src="`${publicPath}assets/img/Rectangle 1763.png`" alt="" />
            </div>
            <ServiceCard :title="$t('service-providers')" :selected="selected" routeName="service-provider-home">
              {{ $t("home-riadiat-srv-f-y-service-provider") }}
            </ServiceCard>
          </TabItem>
  
          <TabItem :current.sync="currentTab" group="pills" reference="workspaces" v-slot="{ selected }">
            <div data-aos="fade-left" v-if="!isMobile" data-aos-duration="2000">
              <img class="img-fluid" :src="`${publicPath}assets/img/Rectangle 1763.png`" alt="" />
            </div>
            <ServiceCard :title="$t('workspaces')" :selected="selected" routeName="workspaces-home">
              {{ $t("home-riadiat-srv-f-y-service-provider") }}
            </ServiceCard>
          </TabItem>
  
          <TabItem :current.sync="currentTab" group="pills" reference="affiliate" v-slot="{ selected }">
            <div data-aos="fade-left" v-if="!isMobile" data-aos-duration="2000">
              <img class="img-fluid" :src="`${publicPath}assets/img/Rectangle 1763.png`" alt="" />
            </div>
            <ServiceCard :title="$t('Affiliate-marketing')" :selected="selected" routeName="affiliate-marketing-home">
              {{ $t("home-riadiat-srv-f-y-service-provider") }}
            </ServiceCard>
          </TabItem>
          <!-- <TabItem :current.sync="currentTab" group="pills" reference="shop" v-slot="{ selected }">
            <div data-aos="fade-left" v-if="!isMobile" data-aos-duration="2000">
              <img class="img-fluid" :src="`${publicPath}assets/img/Rectangle 1763.png`" alt="" />
            </div>
            <ServiceCard :title="$t('market')" :selected="selected">
              {{ $t("home-riadiat-srv-f-y-market") }}
            </ServiceCard>
          </TabItem> -->
        </div>
      </div>
</template>

<script>
import WorldSVG from "@/components/icon-svg/world.vue";
import WorkspaceSVG from "@/components/icon-svg/workspace.vue";
import AffiliateIconSVG from "@/components/icon-svg/affiliate-icon.vue";
import LightSVG from "@/components/icon-svg/light.vue";
import CameraSVG from "@/components/icon-svg/camera.vue";
import ShopSVG from "@/components/icon-svg/shop.vue";
import HeartSVG from "@/components/icon-svg/heart.vue";
import ServiceCard from "./tab-content/service-desc-card.vue";
import TabItem from "@/components/tabs/TabItem.vue";
import TabHead from "@/components/tabs/TabHead.vue";
import DTabs from "@/components/tabs/DTabs.vue";
export default {
  name: "services-section",
  components: {
    WorldSVG,
    LightSVG,
    ServiceCard,
    DTabs,
    TabItem,
    TabHead,
    CameraSVG,
    ShopSVG,
    HeartSVG,
    WorkspaceSVG,
    AffiliateIconSVG
  },
  data: () => ({
    currentTab: "",
  }),
  mounted() {
    this.currentTab = "home";
  },
};
</script>
