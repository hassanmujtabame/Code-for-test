<template>
  <div class="box member-filter">
   
      <d-expanded-panel  class="accordion d-flex align-items-center" id="accordionPanelsStayOpenExample">
          <d-expanded-panel-item class="col-12 col-md-2 border rounded-3 p-2 " :title="$t('classification')" >
              <div class="">
                          <div v-for="(state,i) in states" :key="i" class="form-check states-input-custom" style="">
                              <input class="form-check-input " type="radio" :value="state.id" v-model="filter.membership" 
                              :selected="state.id===filter.membership"
                              @change="updateFilter"
                              name="stateRadioDefault"
                                  :id="`flexRadioDefault${i}`">
                              <label class="form-check-label mb-1" :for="`flexRadioDefault${i}`">
                                 {{state.name}}
                              </label>
                          </div>
                      </div>
          </d-expanded-panel-item> 
          <d-expanded-panel-item class="col-12 col-md-2 border rounded-3 p-2" :title="'مجالات الاختصاص'" >
              <div v-for="(cat,i) in categories" :key="i" class="form-check states-input-custom">
                          <input v-model="filter.category_id" :value="cat.id" class="form-check-input form-check-input-member" type="checkbox"
                          :id="`defaultCheck1${i}`"
                              @change="updateFilter"

                          >
                          <label class="form-check-label" :for="`defaultCheck1${i}`">
                              {{cat.name}}
                          </label>
              </div>
          </d-expanded-panel-item>
                 <div class="col-12 col-md-6">
          <slot name="search">
            <label for="" class="position-relative w-100">
              <input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                v-model="filter.search"
                @change="updateFilter"
                placeholder="أبحث  بالاسم او المجال"
              />
              <p style="top: 25%; right: 7px" class="position-absolute">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                    fill="#979797"
                  />
                  <path
                    d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                    fill="#979797"
                  />
                </svg>
              </p>
            </label>
          </slot>
        </div>
      </d-expanded-panel >

  </div>
</template>

<script>
import networkAPIs from '@/services/api/network.js'
 
export default {
name:'sidebar-box',
props:{
  filterItem:{
      type:[Object,Array],//defaults values
      require:true
  }
},
data:(vm)=>{

  return{
      states:[
          {id:null,name:'الكل'},
          {id:'member',name:'عضو'},
          {id:'partner',name:'شريك'},
          {id:'instructor',name:'مدرب'},
      ],
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
              let { data } = await networkAPIs.getCategories()
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
<style>
.member-filter .accordion-collapse {
    position: relative !important;

}
.member-filter .accordion-body{
    position: absolute !important;
    background: white !important;
    width: 100% !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12) !important;
    border-bottom-left-radius:20px ;
    border-bottom-right-radius:20px ;
    padding: 5px !important;
    height: 140px;
    overflow-y: scroll;
}
.states-input-custom input{
    display: none;
}
.states-input-custom label:hover{
     background-color: #1FB9B3 !important;
    color: white;
}
.states-input-custom label{
    cursor:pointer;
    width: 100%;
    padding: 2px 12px;
}
.form-check-input-member:checked + label{
     background-color: #1FB9B3 !important;
    color: white;

}
</style>
