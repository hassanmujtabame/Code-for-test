<template>
  <div class="container mt-5">
    <h2 class="home-section-title text-center">مزايا أماكن العمل</h2>
    <div class="row min-riadiat academy">
      <div class="col-xl-3 col-md-6 mt-2">
        <CardItem
          :src="require('../../../../../assets/img/workspace/Icon.png')"
        >
          أماكن موثوقة وإمنه
        </CardItem>
      </div>
      <div class="col-xl-3 col-md-6 mt-2">
        <CardItem
          :src="require('../../../../../assets/img/workspace/Icon (1).png')"
        >
          موجودين في مناطق ودول مختلفة
        </CardItem>
      </div>
      <div class="col-xl-3 col-md-6 mt-2">
        <CardItem
          :src="require('../../../../../assets/img/workspace/Icon (2).png')"
        >
          اماكن تناسب انشطة وفعاليات متعددة
        </CardItem>
      </div>
      <div class="col-xl-3 col-md-6 mt-2">
        <CardItem
          :src="require('../../../../../assets/img/workspace/Icon (3).png')"
        >
          سعر مميز لأعضاء الشبكة
        </CardItem>
      </div>
    </div>
  </div>
</template>
<script>
import CardItem from "./card-item";
export default {
  name: "WorkSpaceFeatures",
  components: {
    CardItem,
  },
};
</script>
