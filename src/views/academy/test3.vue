<template>
  <div style="margin-top:85px">
    <div>
      <!-- <h2>Search and add a pin</h2> -->
      <GmapAutocomplete
        @place_changed='setPlace'
      />
      <button
      class="btn"
        @click='addMarker'
      >
        Add
      </button>
    </div>
    <br>
    <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
      @click="getMarker"

    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      />
    </GmapMap>
    {{address}}
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
     center: { lat: 24.774265, lng: 46.738586 },
      currentPlace: null,
      markers: [{ lat: 24.774265, lng: 46.738586 }],

      places: [],
      address:{}

    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
      console.log(place);
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }

    },
    getMarker(event) {
      console.log('event',event);
      const marker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      console.log(marker);
      this.markers.push({ position: marker });
      // this.$refs.mmm.panTo(marker);
      //this.center = marker;
      this.address = marker
  },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>
