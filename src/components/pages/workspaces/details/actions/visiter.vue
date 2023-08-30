<template>
  <div class="col-md-6 d-flex gap-1 visitor-action" style="height:40px">
    <div>
      <button class="btn-main-v px-5 py-2 h-100" role="button" @click="rescheduleRequest">احجز الآن</button>
    </div>
    <div>
      <!-- <a :href="singleWorkspace.location" target="_blank" class=" google btn-main-v px-3  py-2" >العنوان </a> -->
          <a v-if="singleWorkspace && singleWorkspace.map_address !=null"  :href="`https://www.google.com/maps/search/${singleWorkspace.map_address.lat},${singleWorkspace.map_address.lng}`" target="_blank">
            <img style="height:40px; width153px"   class="w-100" :src="`${publicPath}assets/svg/Group 1171276111.svg`" />
          </a>
    </div>
    <div>
      <button @click="sendAbuse" class="border-0 px-3 py-1 rounded-3">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.86621 30.3327C6.31954 30.3327 5.86621 29.8793 5.86621 29.3327V2.66602C5.86621 2.11935 6.31954 1.66602 6.86621 1.66602C7.41288 1.66602 7.86621 2.11935 7.86621 2.66602V29.3327C7.86621 29.8793 7.41288 30.3327 6.86621 30.3327Z"
            fill="#CDD7D8"
          />
          <path
            d="M21.7995 22.334H6.86621C6.31954 22.334 5.86621 21.8807 5.86621 21.334C5.86621 20.7873 6.31954 20.334 6.86621 20.334H21.7995C23.2529 20.334 23.9329 19.9473 24.0662 19.614C24.1995 19.2807 23.9995 18.534 22.9595 17.5073L21.3595 15.9073C20.7062 15.334 20.3062 14.4673 20.2662 13.5073C20.2262 12.494 20.6262 11.494 21.3595 10.7607L22.9595 9.16065C23.9462 8.17398 24.2529 7.37398 24.1062 7.02732C23.9595 6.68065 23.1995 6.33398 21.7995 6.33398H6.86621C6.30621 6.33398 5.86621 5.88065 5.86621 5.33398C5.86621 4.78732 6.31954 4.33398 6.86621 4.33398H21.7995C24.7195 4.33398 25.6529 5.54732 25.9595 6.26732C26.2529 6.98732 26.4529 8.50732 24.3729 10.5873L22.7729 12.1873C22.4395 12.5207 22.2529 12.9873 22.2662 13.454C22.2795 13.854 22.4395 14.214 22.7195 14.4673L24.3729 16.1073C26.4129 18.1473 26.2129 19.6673 25.9195 20.4007C25.6129 21.1073 24.6662 22.334 21.7995 22.334Z"
            fill="#CDD7D8"
          />
        </svg>
        {{ $t("submit-report") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "action-for-visiter",
  props: ["singleWorkspace"],
  computed: {},
  methods: {
    sendAbuse() {
      this.showAbuseDialog({
        item: this.singleWorkspace,
        form: {
          table_type: "workspace",
          table_id: this.singleWorkspace.id,
        },
      });
    },
    rescheduleRequest() {
      this.fireOpenDialog("reschedule-reservation", this.singleWorkspace);
    },

  },
};
</script>

<style scoped>
.google {
  display: block;
}
.visitor-action {
  justify-content: end;
      font-size: 13px;
}
@media (max-width: 991px) {

  .visitor-action {
    justify-content: center; 
    margin-top:15px ;
   }
}
</style>