<template>
  <div class="row mt-5">
    <!-- تقييم خدماتي -->
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
            <h3 style="color: #1fb9b3">{{ $t("rate-my-services") }}</h3>
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
          <div>
            <d-rate-stars
              v-if="!loading"
              :size="32"
              :value="2"
              :readonly="true"
            />
          </div>
        </div>
      </div>
    </div>

    <!--  عدد مرات شراء بطاقات الاهداء -->
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
            <h3 style="color: #ffbc00">
              {{ $t("gift-card-purchased-times") }}
            </h3>
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

    <!-- عدد عمليات استخدام الكود -->
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
            <h3 style="color: #f2631c">{{ $t("code-used-times") }}</h3>
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

    <!-- طلبات على مكان العمل -->
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
            <h3 style="color: #2c98b3">{{ $t("workspaces-requests") }}</h3>
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

    <!-- عدد حجوزات اماكن العمل -->
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
            <h3 style="color: #ffbc00">
              {{ $t("workspaces-booking-number") }}
            </h3>
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

    <!-- خدمة مكتملة -->
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
            <h3 style="color: #1fb9b3">{{ $t("completed-services") }}</h3>
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

    <!-- خدمة قيد التنفيذ -->
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
              {{ $t("service-in-progress") }}
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

    <!-- عروض وخضومات الشركة -->
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
              {{ $t("sales-offers") }}
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

    <!-- اعلانات -->
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
              {{ $t("ads") }}
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

    <!-- معارض الشركة -->
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
              {{ $t("compaty-exhibitions") }}
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

export default {
  name: "widgets-index",
  components: {
    cardIconSVG,
  },
};
</script>

<style scoped>
.widget-card {
  height: 100%;
}
</style>
