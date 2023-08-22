<template>
  <div style="">

    <div class="flex" style="width: fit-content; margin-right: auto;"> 

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
    </div>
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
        // this.markers.push({ position: marker });
        this.markers =[{ position: marker }];
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
      // this.markers.push({ position: marker });
      this.markers=[{ position: marker }];

      // this.$refs.mmm.panTo(marker);
      //this.center = marker;
      this.address = marker;
            this.$emit('address_map', this.address)
 
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
<style>
.pac-target-input{
  border: 1px solid #979797 !important;
    border-radius: 5px !important;
    padding: 5px !important;
}
.pac-target-input:focus {
  outline: none !important;
}
</style>