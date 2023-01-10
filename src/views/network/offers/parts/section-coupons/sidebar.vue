<template>
    <div class="box border p-3 rounded-3">
        <h4>
            {{ $t('filter') }}
        </h4>
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne">
                        تصنيف
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="filter.isOnline" :value="true" name="flexRadioDefault"
                                    id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    خدمات اونلاين
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="filter.isOnline" :value="false" name="flexRadioDefault"
                                    id="flexRadioDefault2" checked>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    خدمات اوفلاين
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo">
                        مجالات الاختصاص
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        <div v-for="(cat,i) in categories" :key="i" class="form-check">
                            <input class="form-check-input" type="checkbox" :value="cat.id" v-model="filter.category_id" :id="`defaultCheck${cat.id}`">
                            <label class="form-check-label" :for="`defaultCheck${cat.id}`">
                                {{ cat.name }}
                            </label>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree">
                        المدة
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse "
                    aria-labelledby="panelsStayOpen-headingThree">
                    <div style="margin: 20px 0px 0 0" class="a">
                                    <div class="slider-container">
                                        <rslider-input
                                         :min.sync="filter.valueMinDuring" 
                                         :max.sync="filter.valueMaxDuring"
                                         :lmin="0"
                                         :lmax="100"
                                         />
                                    </div>
                                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour">
                        التكلفة
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" class="accordion-collapse "
                    aria-labelledby="panelsStayOpen-headingFour">
                    <div style="margin: 20px 0px 0 0" class="a">
                                    <div class="slider-container">
                                        <rslider-input
                                         :min.sync="filter.valueMinAmount" 
                                         :max.sync="filter.valueMaxAmount"
                                         :lmin="0"
                                         :lmax="100"
                                         />
                                    </div>
                                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OffersApi from '@/services/api/offers.js'
export default {
 name:'sidebar-box',
 data: () => ({
     categories: [],
        
   filter:{
    isOnline:true,
    category_id:[],
    valueMinDuring:0,
    valueMaxDuring:100,
    valueMinAmount:0,
    valueMaxAmount:100
   }
  }),
  watch:{
    filter:{
        immediate:true,
        deep:true,
        handler(val){
            this.$emit('update',val)
        }
    }
  },
 methods: {
    async getCategories() {
            try {
                let { data } = await OffersApi.getCategories()
                   if (data.success) {

                    let categories = data.data;
                    //categories.unshift({ id: null, name: 'الكل' })
                    this.categories=categories
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
            }
        }
 },

  mounted() {
    this.getCategories()
  }
}
</script>

<style>

</style>