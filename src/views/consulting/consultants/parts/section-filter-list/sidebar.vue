<template>
  <div class="box border p-3 rounded-3">
      <h4>
          {{ $t('filter') }}
      </h4>
      <d-expanded-panel id="accordionPanelsStayOpenExample">
       <!--مجالات التريب-->
       <d-expanded-panel-item opened title="مجالات التدريب">
                <div v-for="(cat,i) in categories" :key="i" class="form-check">
                            <input v-model="filter.department_id" :value="cat.id" class="form-check-input" type="checkbox">
                            <label class="form-check-label" for="catCheck1">
                                {{cat.name}}
                            </label>
                        </div>
            </d-expanded-panel-item>
        <d-expanded-panel-item opened title="عدد ساعات">
            <div>
                          <div v-for="(state,i) in states" :key="i" class="form-check">
                              <input class="form-check-input" type="checkbox" :value="state.id" v-model="filter.during" 
                              :selected="state.id===filter.during"
                              name="timeDefault1"
                                  id="timeDefault1">
                              <label class="form-check-label" for="timeDefault1">
                                 {{state.name}}
                              </label>
                          </div>
                      </div>
            </d-expanded-panel-item>
        <d-expanded-panel-item opened title="طريقة الاتصال">
            <div v-for="(cat,i) in communications_type" :key="i" class="form-check">
                          <input v-model="filter.call_type" :value="cat.id" class="form-check-input" type="radio">
                          <label class="form-check-label" for="defaultCheck1">
                              {{cat.name}}
                          </label>
                      </div>
                  
        </d-expanded-panel-item>
       
          <d-expanded-panel-item opened title="سعر الساعة">
            <div style="margin: 20px 0px 0 0" class="a">
                                    <div class="slider-container">
                                       
                                       <rslider-input
                                        :min.sync="filter.min_price" 
                                        :max.sync="filter.max_price"
                                        :lmin="0"
                                        :lmax="1000"
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

import commonAPI from '@/services/api/common'
import consultingAPI from '@/services/api/consulting'
export default {
name:'sidebar-box',
props:{
  filterItem:{
      type:[Object,Array],//defaults values
      require:true
  }
},
data:(vm)=>{
    let types = commonAPI.getTypeConsultations()
    types.unshift({id:null,name:vm.$t('all')})
  return{
      states:[
          //{id:null,name:vm.$t('all')},
          {id:15,name:'ربع ساعة'},
          {id:30,name:'نصف ساعة'},
          {id:60,name:'ساعة'},

      ],
      communications_type:types,
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
async getDepartments() {
          try {
              let { data } = await consultingAPI.fields.getAll()
              if (data.success) {

                  let categories = data.data;
                  //categories.unshift({ id: null, name: 'الكل' })
                  this.categories=categories
              }
          } catch (error) {
              console.mylog('error', error)
              console.mylog('error response', error.response)
          }
      }
  },
  mounted() {
      this.getDepartments();
  }
}
</script>

