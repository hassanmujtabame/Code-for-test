<template>
  <div>
    <div>
      <GmapAutocomplete @place_changed="updateMapCenter" />
    </div>
    <GmapMap
      :center="{ lat: center?.lat ?? 24.774265, lng: center?.lng ?? 46.738586 }"
      :zoom="10"
      style="width: 100%; height: 400px"
      @click="updateMarkerPosition"
    >
      <GmapMarker
        :position="{
          lat: marker?.lat ?? 24.774265,
          lng: marker?.lng ?? 46.738586,
        }"
        draggable
        @dragend="updateMarkerPosition"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "VGoogleMap",
  props: {
    center: Object,
    marker: Object,
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    // updateMapCenter(data) {
    //     this.marker = {
    //         lat: data.geometry.location.lat(),
    //         lng: data.geometry.location.lng(),
    //         address_name: data.formatted_address
    //     };
    //     this.center = this.marker;
    //     this.MapMarkerUpdatedEvent();
    // },
    updateMapCenter(data) {
      const newMarker = {
        lat: data.geometry.location.lat(),
        lng: data.geometry.location.lng(),
        address_name: data.formatted_address,
      };
      this.marker = newMarker; // Update only the marker prop
      this.MapMarkerUpdatedEvent();
    },
    updateMarkerPosition(data) {
      const marker = {
        lat: data.latLng.lat(),
        lng: data.latLng.lng(),
      };
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ latLng: marker }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            marker.address_name = results[0].formatted_address;
          }
        }
      });
      this.marker = marker;
      this.MapMarkerUpdatedEvent();
    },
    MapMarkerUpdatedEvent() {
      this.$emit("mapUpdated", this.marker);
    },
    // geolocate: function () {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.center = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude,
    //     };
    //   });
    // },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        const newCenter = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.$emit("update:center", newCenter); // Emit event to update center prop in parent
      });
    },
  },
};
</script>
<style>
.pac-target-input {
  border: 1px solid #979797 !important;
  border-radius: 5px !important;
  padding: 5px !important;
  width: 100%;
}

.pac-target-input:focus {
  outline: none !important;
}

.pac-container {
  z-index: 999999999999;
}
</style>
