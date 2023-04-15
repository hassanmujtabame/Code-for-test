<template>
    <div class="box border p-3 rounded-3">
        <h4>
            {{ $t('filter') }}
        </h4>
        <d-expanded-panel  class="accordion" id="accordionPanelsStayOpenExample">
            <d-expanded-panel-item :title="$t('classification')" >
                <div>
                            <div v-for="(state,i) in states" :key="i" class="form-check">
                                <input class="form-check-input" type="radio" :value="state.id" v-model="filter.is_share" 
                                :selected="state.id===filter.is_share"
                                name="stateRadioDefault"
                                    id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                   {{state.name}}
                                </label>
                            </div>
                        </div>
            </d-expanded-panel-item> 
            <d-expanded-panel-item :title="$t('exhibition-departments')" >
                <div v-for="(cat,i) in categories" :key="i" class="form-check">
                            <input v-model="filter.category_id" :value="cat.id" class="form-check-input" type="checkbox">
                            <label class="form-check-label" for="defaultCheck1">
                                {{cat.name}}
                            </label>
                </div>
            </d-expanded-panel-item>
        </d-expanded-panel >
        <div class="mt-3 text-center">
            <button @click="updateFilter" class="btn-custmer">
                {{$t('save')}}
            </button>
        </div>
    </div>
</template>

<script>
import exhibitionsAPIs from '@/services/api/exhibitions.js'

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
            {id:'1',name:'متاح للمشاركة'},
            {id:'0',name:'زيارة فقط'},
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
                let { data } = await exhibitionsAPIs.getCategories()
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

