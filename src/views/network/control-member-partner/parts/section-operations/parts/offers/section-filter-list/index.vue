<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="row justify-content-center">
          <button @click="addNewOffer" class="btn btn-custmer" style="width: fit-content"><i class="far fa-square-plus"></i> أضف عرض جديد</button>
        </div>
        <d-filter-list 
        :call-list="loadList"
         classColCard="col-12" 
         hideSide
        hideTotal
        classTitle="col-md-6"
        classSearchOrder="col-md-6"
        :hideOrder="true"
        :hideSearch="true"
        >
          <template v-slot:before-body>
            <ul class="nav nav-pills justify-content-center">
              <li v-for="(btn, i) in actions" style="width: fit-content;" :key="i" class="nav-item">
                <button class="nav-link  border t-c m-auto ms-2" :class="{ active: filterItem.status == btn.status }"
                  type="button" @click="changeStatus(btn.status)">{{ btn.label }}</button>
              </li>
            </ul>
          </template>
          <template v-slot="{item}">
            <offerItem :item="item" />
          </template>

        </d-filter-list>
      </div>
    </div>
    </div>
</template>

<script>
import offerItem from './card'
import networkAPI from '@/services/api/network.js'
export default {
  name: 'filter-list',
  components: {
    offerItem
  },
  data: () => {
    return {
      filterSide: {},
      filterItem: {
        search: null,
        created_at: 'asc',
        status: null,
      },
      items: [
        {},
        {},
        {},
        {},
        {},
        {},
      ],
      actions: [

        { status: null, label: 'كل العروض' },
        { status: 'valid', label: 'العروض السارية ' },
        { status: 'finished', label: 'العروض المنتهية' },
      ],
    }
  },
  methods: {
    addNewOffer(){
      this.fireOpenDialog('add-new-offer')
    },
    changeStatus(status) {
      this.filterItem.status = status;
      this.fireEvent('d-filter-list-refresh')
    },
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val }
      this.fireEvent('d-filter-list-refresh')
    },
    async loadList(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page,
          ...this.filterItem
        }
        return await networkAPI.offers.getMyOffers(params)

      } catch (error) {
        console.log('error', error)
        console.log('response', error.response)
      }
    }
  }
}
</script>

<style scoped>
.sect-title{
  font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
/* identical to box height, or 125% */
text-transform: capitalize;

/* 414042 */

color: #414042;
}
.sect-subtitle{
  font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */
text-transform: capitalize;

/* 737373 */

color: #737373;
}
</style>