<template>
  <d-course-panel>
    <template v-slot:header>
      <h1>رابط و موعد الدورة :</h1>
    </template>
    <template v-slot:default>
      <div class="information-item">
        <p class="information-item__label">رابط الدورة :</p>
        <a
          target="_blank"
          :href="itemPage.meeting_url"
          class="information-item__value"
          >الرابط</a
        >
      </div>
      <div class="information-item">
        <p class="information-item__label">عدد ايام الدورة :</p>
        <p class="information-item__value">
          {{ numberToDay(itemPage.number_day_course) }}
        </p>
      </div>
      <div class="information-item">
        <p class="information-item__label">ايام الدورة :</p>
        <p class="information-item__value">
          {{
            itemPage.course_days
              ? itemPage.course_days.map((d) => $t(d)).join(",")
              : ""
          }}
        </p>
      </div>
      <div class="information-item">
        <p class="information-item__label">موعد بداية الدورة :</p>
        <p class="information-item__value">{{ itemPage.start_date }}</p>
      </div>
      <!--                <div class="information-item">-->
      <!--                  <p class="information-item__label">موعد غلق الحجز : </p>-->
      <!--                  <p class="information-item__value">{{ itemPage.reservation_closing_date }}</p>-->
      <!--                </div>-->
    </template>
  </d-course-panel>
</template>

<script>
export default {
  props: {
    itemPage: {},
  },
};
</script>

<style scoped>
.information-item {
  display: flex;
  margin-bottom: 10px;
}
.information-item__label,
.information-item__value {
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  /* identical to box height, or 106% */

  color: #737373;
}
.information-item__label {
  flex-shrink: 0;
}
.information-item__value {
  padding: 0 10px;
}
</style>
