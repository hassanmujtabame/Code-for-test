<template>
  <div class="row mt-5">
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <cardIconSVG color="#1FB9B3" />
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #1fb9b3">{{ $t("your-courses") }}</h3>
            <button
              @click="router_push('academy-your-courses')"
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <h3>6</h3>
          <!-- <div>
            <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <cardIconSVG color="#FFBC00" />
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #ffbc00">{{ $t("your-learning-meetings") }}</h3>
            <button
              @click="router_push('academy-your-learning-meetings')"
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <h3>0</h3>
          <!-- <div>
            <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <cardIconSVG color="#F2631C" />
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #f2631c">{{ $t("Models") }}</h3>
            <button
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <h3>24</h3>
          <!-- <div>
            <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <cardIconSVG color="#2C98B3" />
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #2c98b3">{{ $t("your-certificates") }}</h3>
            <button
              @click="router_push('academy-your-certificates')"
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <h3>6</h3>
          <!-- <div>
            <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <cardIconSVG color="#FFBC00" />
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #ffbc00">{{ $t("your_courses_projects") }}</h3>
            <button
              @click="router_push('academy-my-projects')"
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <h3>3</h3>
          <!-- <div>
            <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <cardIconSVG color="#1FB9B3" />
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #1fb9b3">{{ $t("my_schedule") }}</h3>
            <button
              @click="router_push('academy-my-schedules')"
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <h3>0</h3>
          <!-- <div>
            <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <cardIconSVG color="#F2631C" />
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #2c98b3">
              {{ $t("training_and_employment_opportunities") }}
            </h3>
            <button
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <h3>0</h3>
          <!-- <div>
            <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <cardIconSVG color="#2C98B3" />
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #2c98b3">
              {{ $t("your_exams_list") }}
            </h3>
            <button
              @click="router_push('academy-your-exams')"
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <h3>0</h3>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="row justify-content-between mt-5 ">



        <div class="col-md-6 ">
            <div class="widget-card w-100 mt-3 p-3">
                <div class="border p-3">
                    <widget-rate-service />
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="widget-card w-100 mt-3 p-3">
                <div class="border p-3">
                    <widget-investment />
                </div>
            </div>
        </div>


        <div class="col-md-6 ">
            <div class="widget-card w-100  mt-3 p-3">
                <div class="border p-3">
                    <widget-investment-others />
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="widget-card w-100 mt-3 p-3">
                <div class="border p-3">
                    <widget-blog />
                </div>
            </div>
        </div>


    </div> -->
</template>

<script>
import cardIconSVG from "@/assets/svg/card-icon.vue";
import WidgetBlog from "./widget-blog.vue";
import WidgetInvestmentOthers from "./widget-investment-others.vue";
import WidgetInvestment from "./widget-investment.vue";
import WidgetRateService from "./widget-rate-service.vue";

export default {
  name: "widgets-index",
  components: {
    cardIconSVG,
    WidgetBlog,
    WidgetInvestmentOthers,
    WidgetInvestment,
    WidgetRateService,
  },
};
</script>

<style scoped>
.widget-card {
  height: 100%;
}
</style>
