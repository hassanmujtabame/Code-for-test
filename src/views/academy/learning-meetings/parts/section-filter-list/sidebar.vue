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
                      {{ $t('Category') }}
                  </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                      <div>
                          <div v-for="(state,i) in states" :key="i" class="form-check">
                              <input class="form-check-input" type="radio" :value="state.id" v-model="filter.type" 
                              :selected="state.id===filter.type"
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
          <div class="accordion-item  show">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseTwo">
                      مجالات القاء
                  </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body show">
                      <div v-for="(cat,i) in categories" :key="i" class="form-check">
                          <input v-model="filter.category_id" :value="cat.id" class="form-check-input" type="checkbox">
                          <label class="form-check-label" for="defaultCheck1">
                              {{cat.name}}
                          </label>
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
import meetingsAPIs from '@/services/api/learning-meetings.js'
import commonAPI from '@/services/api/common'
export default {
name:'sidebar-box',
props:{
  filterItem:{
      type:[Object,Array],//defaults values
      require:true
  }
},
data:(vm)=>{
    let types = commonAPI.getMeetingTypes();
    types.unshift({id:null,name:vm.$t('all')})
  return{
      states:types,
      categories:[],
  filter:vm.filterItem
}},
watch:{
  /*filter:{
      deep:true,
      handler(val){
          this.$emit('change',val)
      }
  }*/
},
methods:{
updateFilter(){
  this.$emit('change',this.filter)
},
async getCategories() {
          try {
              let { data } = await meetingsAPIs.getCategories()
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
      this.getCategories();
  }
}
</script>

