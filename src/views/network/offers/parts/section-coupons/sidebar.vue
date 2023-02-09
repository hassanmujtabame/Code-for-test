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
                            <div v-for="(state,i) in states" :key="i" class="form-check">
                                <input class="form-check-input" type="radio" :value="state.id" v-model="filter.expired" 
                                :selected="state.id===filter.expired"
                                name="stateRadioDefault"
                                    id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                   {{state.name}}
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
                        مجالات العروض
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
                        قيمة الخصم
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse "
                    aria-labelledby="panelsStayOpen-headingThree">
                    <div style="margin: 20px 0px 0 0" class="a">
                                    <div class="slider-container">
                                        <rslider-input
                                         :min.sync="filter.min_discount" 
                                         :max.sync="filter.max_discount"
                                         :tooltips="{start:'#v%',end:'#v%'}"
                                         :lmin="0"
                                         :lmax="100"
                                         />
                                    </div>
                                </div>
                </div>
            </div>
         
        </div>
        <div class="mt-3 text-center">
            <button @click="updateFilter" class="btn-custmer">
                {{$t('save')}}
            </button>
        </div>
    </div>
</template>

<script>
import OffersApi from '@/services/api/offers.js'
export default {
 name:'sidebar-box',
 props:{
    filterItem:{
        type:[Object,Array],//defaults values
        require:true
    }
 },
 data: (vm) => {
    return{
        states:[
            {id:null,name:'الكل'},
            {id:'soon',name:'ينتهي قريبا'},
            {id:'end-week',name:'ينتهي بعد اسبوع'},
        ],
     categories: [],
        
     filter:vm.filterItem
  }},
  watch:{
   /* filter:{
        immediate:true,
        deep:true,
        handler(val){
            this.$emit('update',val)
        }
    }*/
  },
 methods: {
    updateFilter(){
    this.$emit('change',this.filter)
 },
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