<template>
    <div class="box border p-3 rounded-3">
        <h4>
            {{ $t('filter') }}
        </h4>
        <d-expanded-panel class="accordion" id="accordionPanelsStayOpenExample">
            <d-expanded-panel-item opened :title="$t('classification')">
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
            </d-expanded-panel-item>
            <d-expanded-panel-item opened :title="$t('section')" >
                <div>
                            <div v-for="(sect,i) in sections" :key="i" class="form-check">
                                <input class="form-check-input" type="checkbox" :value="sect.id" v-model="filter.section" 
                                :selected="sect.id===filter.section"
                                name="sectionDefault1"
                                    id="sectionDefault1">
                                <label class="form-check-label" for="sectionDefault1">
                                   {{sect.name}}
                                </label>
                            </div>
                        </div>
            </d-expanded-panel-item> 
            <d-expanded-panel-item opened :title="$t('offer-departments')">
                <div v-for="(cat,i) in categories" :key="i" class="form-check">
                            <input class="form-check-input" type="checkbox" :value="cat.id" v-model="filter.category_id" :id="`defaultCheck${cat.id}`">
                            <label class="form-check-label" :for="`defaultCheck${cat.id}`">
                                {{ cat.name }}
                            </label>
                        </div>
            </d-expanded-panel-item>
            <d-expanded-panel-item opened :title="$t('discount-value')">
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
            </d-expanded-panel-item>
      
        </d-expanded-panel>
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
        sections:[
        {id:null,name:'الكل'},
            {id:'network',name:vm.$t('network')},
            {id:'service-provider',name:vm.$t('service-provider')},
            {id:'academy',name:vm.$t('academy')}
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