<template>
  <div class="mt-3">
    <div id="course-desc">
      <h1 class="course-guest-section__title">{{ $t('description') }}</h1>
      <div v-html="itemPage.desc">
      </div>
      <div v-if="itemPage.type == 'recorded'" class="course-desc_info mt-3">
        <div><i class="far fa-clock"></i> 1 ساعة و 38 دقيقة/14 مقطع</div>
        <div><i class="fa fa-location-dot"></i> {{ $t('recorded') }}</div>
        <div></div>
      </div>
      <div v-if="itemPage.type == 'live'" class="course-desc_info mt-3">
        <div><i class="far fa-clock"></i> {{ itemPage.number_day ?? 'N/A' }} يوم</div>
        <div><i class="far fa-calendar-days"></i> {{ itemPage.start_date }}</div>
        <div><i class="fa fa-location-dot"></i> {{ $t('online') }}</div>
      </div>
      <div v-if="itemPage.type == 'on-site'" class="course-desc_info mt-3">
        <div><i class="far fa-clock"></i> {{ itemPage.number_day ?? 'N/A' }}</div>
        <div><i class="far fa-calendar-days"></i> {{ itemPage.start_date }}</div>
        <div><i class="fa fa-location-dot"></i>
          <!-- <a class="text-underline" target="_blank" :href="itemPage.place_map??'!#'" @click="(evt)=>{
          
        if(!this.itemPage.place_map) evt.preventDefault();
      }">{{ itemPage.place_name??$t('Course-headquarters') }}</a> -->
          <a v-if="itemPage && itemPage.map_address != null"
            :href="`https://www.google.com/maps/search/${itemPage.map_address.lat},${itemPage.map_address.lng}`"
            target="_blank">
            {{ itemPage.place_name ?? $t('Course-headquarters') }}
          </a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section-desc',
  props: {
    itemPage: {}
  }
}
</script>

<style>
.course-desc_info {
  display: flex;
  justify-content: space-between;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 2px rgba(0, 52, 57, 0.04);
  border-radius: 8px;
  padding: 11px 16px;
}

.course-desc_info>div {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height, or 142% */

  text-align: right;

  color: #1FB9B3;
}</style>