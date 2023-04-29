<template>
    <div class="box border p-3 rounded-3">
        <h4>
            {{ $t('filter') }}
        </h4>
        <d-expanded-panel id="accordionPanelsStayOpenExample">
        <d-expanded-panel-item opened title="نوع التدريب">
            <div>
                            <div v-for="(state,i) in states" :key="i" class="form-check">
                                <input class="form-check-input" type="radio" :value="state.id" v-model="filter.type_training" 
                                :selected="state.id==filter.type_training"
                                name="stateRadioDefault"
                                    id="RadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                   {{state.name}}
                                </label>
                            </div>
                        </div>
            </d-expanded-panel-item>
           
            <!--مجالات التريب-->
            <d-expanded-panel-item title="مجالات التدريب">
                <div v-for="(cat,i) in categories" :key="i" class="form-check">
                            <input v-model="filter.department_id" :value="cat.id" class="form-check-input" type="checkbox">
                            <label class="form-check-label" for="defaultCheck1">
                                {{cat.name}}
                            </label>
                        </div>
            </d-expanded-panel-item>
         <!--طريقة العرض-->
         <d-expanded-panel-item title="طريقة العرض">
            <div>
                            <div v-for="(it,i) in types" :key="i" class="form-check">
                                <input class="form-check-input" type="radio" :value="it.id" v-model="filter.type" 
                                :selected="it.id===filter.type"
                                name="typeRadioDefault"
                                    id="typeRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                   {{it.name}}
                                </label>
                            </div>
                        </div>
         </d-expanded-panel-item>
            <!--سعر الدورة-->
         <d-expanded-panel-item title="سعر الدورة">
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
import academyAPI from '@/services/api/academy'

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
            {id:'public',name:'عام'},
            {id:'prive',name:'متخصص'},
        ],
        types:[
            {id:null,name:'الكل'},
            {id:'on-site',name:'في مقرات'},
            {id:'live',name:'لايف'},
            {id:'recorded',name:'مسجلة'},
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
                let { data } = await academyAPI.getDepartments();
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

