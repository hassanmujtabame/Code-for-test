<template>
  <div class="provider-card" >
    <div class="provider-card__wrapper relative">
      <div class="provider-card__image parent">
        <router-link v-if="to" :to="to">
          <img :src="img" alt width="259" height="192"  class="image1"/>
          <!-- <img :src="img" alt class="image2"/> -->
        </router-link>
        <img v-else @click="$emit('click-image')" :src="img" alt width="259" height="192" />    
      </div>
      
      <div class="provider-card__content py-0 " style="height: 190px !important; display: flex; flex-direction: column; justify-content: space-between;">
       
        <h6 class="provider-card__name">{{ name | truncateWords(2) }}</h6>
       <div class="d-flex px-3" style="width: 100%; justify-content: space-between;">
        <p  class="provider-card__description">{{ description }}</p>
        <div v-if="showRate" class="show-rate">
          <RateStars :value="rate" :size="12" />
        </div>
       </div>
        <div class="provider-card__bio text-two-lines px-0">{{bio}} </div>

       <button @click="openChat" class="text-white border-0 py-2 bg-main w-100 rounded-3">تواصل</button>

      </div>

    </div>
  </div>
</template>

<script>
import RateStars from "../rate-stars/index";
export default {
  name: "card-parson",
  components: {
    RateStars
  },
  props: {
    showRate: {
      type: Boolean,
      default: false
    },
    img: {
      type: String
    },
    name: {
      type: String
    },
    to: {
      type: [Object, Array],
      default: null
    },
    description: {
      type: String
    },
      bio: {
      type: String
    },
    member:{
     type:[Array,Object],
    },
    rate: {
      type: [String, Number],
      default: 0
    }
  },
  methods:{
       openChat(){
        this.fireEvent('chat-bar',{user:this.member})
    }
  },
  mounted(){
  }
};
</script>

<style scoped>
.provider-card {
  --raduis-provider: 11px;
  padding: 5px;
}

.provider-card__wrapper {
  margin: 0 0 0px 0;
  width: 100%;
  /*max-width: 250px;*/
  /*height: 340px;*/
  border-radius: 11px;
  /*border:0.5px solid #f2f2f2;*/
  border: 1px solid #cdd7d8;
}

.provider-card__wrapper:hover {
  box-shadow: 0px 1px 8px;
}

.provider-card__image {
  border-radius: 11px 11px 0 0;
  width: 100%;
  height: 192px;
  overflow: hidden;
}

.provider-card__image img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

.provider-card__content {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #cdd7d8;
  box-shadow: 0px 0px 78.2699px rgba(187, 188, 189, 0.3);
  border-radius: 0px 0px var(--raduis-provider) var(--raduis-provider);
}

.provider-card__name {
  margin: 0;
  padding: 0;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  /* identical to box height, or 167% */

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: capitalize;

  /* color: #737373; */
  /*color:var(--b-color)*/
}

.provider-card__description {
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 400;
  width: 150px;
  font-size: 15px;
  line-height: 24px;
  /* identical to box height, or 120% */
  display: flex;
  align-items: center;
  /* text-align: center; */
  /* justify-content: center; */
  text-transform: capitalize;
  color: var(--m-color);
}
.show-rate{
  width: 60px !important;
}
.provider-card__bio{
  /* white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis !important; */
  /* height: 60px; */
  font-size: 13px;

}
.parent {
  position: relative;
  top: 0;
  left: 0;
}

.image1 {
  position: relative;
  top: 0;
  left: 0;
}

.image2 {
  position: absolute;
  bottom: 0px;
  left: 30%;
  width: 100px !important;
    height: 100px !important;
    border-radius: 100%;
}
</style>