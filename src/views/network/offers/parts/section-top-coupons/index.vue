<template>
  <div class=" mt-5 p-3">
    <div class="">
      <div class="d-flex justify-content-between align-items-center container">
        <h1> أهم اكواد الخصم </h1>
        <div>
          <button @click="addOffer" class="btn bg-main text-white p-2">
            أضف عرض او خصم
          </button>
        </div>
      </div>
      <d-swiper v-if="!loading" :items="items" :slides-per-view="3" :space-between="5">
        <template v-slot="{ item }">
          <div class=" mt-2 ">
            <CouponCard 
            :img="item.image"                   
              :title="item.name_company" 
          :discount="item.discount"
            :date="item.start_date" 
            :during="item.day" 
            :name="item.code" 
            :tag="item.category ? item.category.name : ''" 
              />
          </div>
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
import OffersApi from '@/services/api/offers.js'
import CouponCard from '@/components/cards/coupon.vue'
export default {
  name: 'corpon-section',
  components: {
    CouponCard
  },
  data: () => ({
    loading:true,
    items: []
  }),
  methods:{
    addOffer() {
      window.EventBus.fire('add-dialog-open-dialog')
    },
    async getRecents() {
      this.loading = true;
            try {
                let { data } = await OffersApi.getRecent()
                if (data.success) {
                    this.items=data.data
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
            }
            this.loading = false;
        }
 },
 mounted(){
    this.getRecents()
 }
}
</script>

<style>

</style>