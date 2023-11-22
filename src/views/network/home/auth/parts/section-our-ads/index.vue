<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 offset-md-2">
        <div class="ad-slider">
          <carousel :perPage="1" :navigationEnabled="true" :paginationEnabled="true">
            <slide v-for="(ad, index) in ads" :key="index">
              <img :src="`${publicPath}assets/img/${ad.image}`" alt="Ad"  class="full-width-image" /> <!-- Update the path as needed -->
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide,
  },

  data() {
    return {
      ads: [
        { image: 'ads.png' }, // Make sure the path is relative to your assets folder
        { image: 'ads.png' },
        { image: 'ads.png' },
        // Add more ad objects with image paths as needed
      ],
    };
  },
  name: 'AdsSection',
};
</script>

<style>
.full-width-image {
  width: 100%; /* Set the width to 100% */
  max-width: 100%; /* Ensure it doesn't exceed the parent container's width */
  height: auto; /* Maintain aspect ratio */
}
</style>
