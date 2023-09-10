<template>
  <div class="row mt-5">
    <div class="col-md-6">
      <div class="box border p-5 mt-3">
        <div class="d-flex align-items-center justify-content-between">
          <h3>أماكن العمل</h3>
          <p class="fw-bolder fs-3">{{itemCard.count_offers}}</p>
        </div>
        <div class="row">
          <div class="col-md-6 mt-5">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-label="Example with label"
                :style="{width: `${percentUnderway}%`}"
                :aria-valuenow="percentUnderway"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="position-absolute text">
                  <div class="d-flex justify-content-between">
                    <p>
                      <span class="fw-bolder m-c fs-6">{{itemCard.service_finished}}</span>
                      <span class="fs-6"> تم حجزها </span>
                    </p>
                    <p class="fs-6 t-c">{{percentFinished}}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-5">
            <div class="progress">
              <div
                class="progress-bar tow"
                role="progressbar"
                aria-label="Example with label"
                :style="{width: `${percentWaiting}%`}"
                :aria-valuenow="percentWaiting"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="position-absolute text">
                  <div class="d-flex justify-content-between">
                    <p>
                      <span class="fw-bolder m-c fs-6">{{itemCard.service_waiting}}</span>
                      <span class="fs-6"> حجز ينتظر الموافقة</span>
                    </p>
                    <p class="fs-6 t-c">{{percentWaiting}}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-5">
            <div class="progress three">
              <div
                class="progress-bar three"
                role="progressbar"
                aria-label="Example with label"
                :style="{width: `${percentUnderway}%`}"
                :aria-valuenow="percentUnderway"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="position-absolute text">
                  <div class="d-flex justify-content-between">
                    <p>
                      <span
                        style="color:#FFBC00 ;"
                        class="fw-bolder m-c fs-6"
                      >{{itemCard.service_underway}}</span>
                      <span class="fs-6"> قيد الحجز </span>
                    </p>
                    <p class="fs-6 t-c">{{percentUnderway}}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-5">
            <div class="progress four">
              <div
                class="progress-bar four"
                role="progressbar"
                aria-label="Example with label"
                :style="{width: `${percentExcluded}%`}"
                :aria-valuenow="percentExcluded"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="position-absolute text">
                  <div class="d-flex justify-content-between">
                    <p>
                      <span
                        style="color:#FFBC00 ;"
                        class="fw-bolder m-c fs-6"
                      >{{itemCard.service_excluded}}</span>
                      <span class="fs-6">عرض مستبعد</span>
                    </p>
                    <p class="fs-6 t-c">{{percentExcluded}}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-md-6">
      <div class="box">
        <div class="row flex-column mt-3 gap-4">
          <div class="col-md-12 border p-3">
          <div class="p-3">
            <div class="box d-flex align-items-center justify-content-between">
              <h5> أماكن العمل القريبة</h5>
              <p>{{itemCard.count_rate}}</p> 
            </div>
            <img @click="openDialog" style="cursor: pointer ; height:40px; width153px; margin-right: auto;"   class="d-flex " :src="`${publicPath}assets/svg/Group 1171276111.svg`" />
          </div>
            <div class="px-3" style="height:300px; overflow-y: scroll;">
                <workSpaces v-for="(item,i) in 20" :key="i" class="my-3" :name="'قاعات مؤتمرات'" :comment="'قاعات  مؤتمرات مؤتمرات مؤتمرات'" :image="'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <workSpacesMap/>
  </div>
</template>

<script>
import readyServicesAPI from "@/services/api/service-provider/provider/ready-service.js";
import workSpaces from '../work-spaces.vue'
import workSpacesMap from './work-spaces-map.vue'

export default {
  name: "section-near-work-spaces",
  components:{workSpaces,workSpacesMap},
  data: () => ({
    loading: true,
    itemCard: {}
  }),
  computed: {
    percentFinished() {
      return this.calcPercent(
        this.itemCard.service_finished,
        this.itemCard.count_offers
      );
    },
    percentUnderway() {
      return this.calcPercent(
        this.itemCard.service_underway,
        this.itemCard.count_offers
      );
    },
    percentWaiting() {
      return this.calcPercent(
        this.itemCard.service_waiting,
        this.itemCard.count_offers
      );
    },
    percentExcluded() {
      return this.calcPercent(
        this.itemCard.service_excluded,
        this.itemCard.count_offers
      );
    }
  },
  methods: {
    calcPercent(x, total) {
      if (!total) return 0;
      return Math.floor((x / total) * 100);
    },
    async initializing() {
      console.log("ss");
      this.loading = true;
      try {
        let { data } = await readyServicesAPI.getServiceOffersStatistics();
        if (data.success) {
          this.itemCard = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
      this.loading = false;
    },
    openDialog(){
    this.fireOpenDialog('work-spaces-map',this.itemCard)
    }
  },
  mounted() {
    this.initializing();
  }
};
</script>

<style>
</style>