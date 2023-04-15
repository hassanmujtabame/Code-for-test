<template>
   <div class="box border p-3 rounded-3">
                    <h4>{{ $t('filter') }}</h4>
                    <d-expanded-panel id="accordionPanelsStayOpenExample">
                        <d-expanded-panel-item :title="$t('type')">
                            <div v-for="(cat,i) in categories" :key="i" class="form-check">
                                    <input v-model="filter.type" :value="cat.id" class="form-check-input" type="checkbox">
                                    <label class="form-check-label" for="defaultCheck1">
                                        {{cat.name}}
                                    </label>
                                </div>
                        </d-expanded-panel-item>
                        <!-- order-->
                        <d-expanded-panel-item :title="$t('orderby')">
                            <div>
                                        <div v-for="(state,i) in states" :key="i" class="form-check">
                                <input class="form-check-input" type="radio" :value="state.id" v-model="filter.created_at" 
                                :selected="state.id===filter.created_at"
                                name="stateRadioDefault"
                                    id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                   {{state.name}}
                                </label>
                            </div>
                                    </div>
                        </d-expanded-panel-item>
                        <d-expanded-panel-item :title="$t('display-method')">
                            <div style="margin: 20px 0px 0 0" class="a">
                                    <div v-for="(cat,i) in show_types" :key="i" class="form-check">
                                    <input v-model="filter.type" :value="cat.id" class="form-check-input" type="checkbox">
                                    <label class="form-check-label" for="defaultCheck1">
                                        {{cat.name}}
                                    </label>
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
import readyServiceAPIs from '@/services/api/service-provider/provider/ready-service'
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
            {id:'desc',name:vm.$t('newly')},
            {id:'asc',name:vm.$t('oldest')},
    
            
        ],
        categories:[
        {id:'course',name:vm.$t('training-course')},
            {id:'meeting',name:vm.$t('educational-meeting')},
        ],
        show_types:[
            {id:'on-site',name:vm.$t('on-site')},
            {id:'live',name:vm.$t('live')},
        ],
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
                let { data } = await readyServiceAPIs.getCategories()
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
        //this.getCategories();
    }
}
</script>



<style>

</style>