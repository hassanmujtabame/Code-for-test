<template>
  <div class="container mt-5">
    <d-filter-list :call-list="loadList"
    :pluralName="$t('coupons')"
    :singleName="$t('coupon')"
    @change="changeFilter"
    :searchPlaceholder="$t('search_for_coupon')"
    orderName="price"
        :orderOpts="
             [
                {id:'asc',name:'الأقل سعرا'},
                {id:'desc',name:'الأغلى سعرا',}
            ]"
     classColCard="col-md-6 mt-2">
      <template v-slot="{ item }">
       
          <CouponCard 
          :img="item.image"    
          :title="item.name_company" 
          :discount="item.discount"
            :date="item.start_date" 
            :during="item.day" :name="item.code" 
            :tag="item.category ? item.category.name : null" 
            />

      </template>
      <template v-slot:side>
        <SidebarBox :filterItem="filterSide" @change="changeFilter" />
      </template>
    </d-filter-list>
  </div>
</template>
<script>
import OffersApi from '@/services/api/offers.js'
import CouponCard from '@/components/cards/coupon.vue'
import SidebarBox from './sidebar.vue'
export default {
  name: 'section-coupons',
  components: {
    CouponCard,
    SidebarBox
  },
  data: (vm) => {
    console.mylog('section',vm.$route.query)
    let section = vm.$route.query.section;
        if(!['network','academy','service-provider'].includes(section))
        section = null;
    return{
    group: 'list-coupon',
    filterSide:{
      section:[section],
      expired:null,
      category_id:[],
    min_discount:0,
    max_discount:100,

    },
    filterItem:{
      section:[section],
      search:null,
      price:'asc',
      expired:null,
      category_id:[],
    min_discount:0,
    max_discount:100,

    },
    item_test: { title: 'معرض الازياء الرجالي', img: `${vm.publicPath}assets/img/Rectangle -network.png`, description: 'معرض متكام لبيع و تنسيق الزهور' },
    categories: [{ id: null, name: 'الكل' }],
        category_id: null,
    items: []
  }},
  methods: {
    changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
    },
    async loadList(metaInfo) {
      //let {category_id,...restFilter} = this.filter
      //console.log(category_id,restFilter)
      try {
        let params={
          page:metaInfo.current_page,
          ...this.filterItem
        }
       return await OffersApi.getAll(params);

       
      } catch (error) {
        console.log('error', error)
        console.log('response', error.response)
      }
    },
    
  },
  created() {
   // window.EventBus.listen(this.group + '-update', this.loadList)
  },
  beforeDestroy() {
   // window.EventBus.off(this.group + '-update', this.loadList)

  }
}
</script>

<style>

</style>