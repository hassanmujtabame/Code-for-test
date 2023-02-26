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
                        نوع التدريب
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
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
                    </div>
                </div>
            </div>
            <!--مجالات التريب-->
            <div class="accordion-item  show">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseTwo">
                        مجالات التدريب

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
         <!--طريقة العرض-->
         <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingType">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseType" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseType">
                        طريقة العرض
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseType" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingType">
                    <div class="accordion-body">
                        <div>
                            <div v-for="(it,i) in types" :key="i" class="form-check">
                                <input class="form-check-input" type="radio" :value="it.id" v-model="filter.type" 
                                :selected="it.id===filter.type"
                                name="stateRadioDefault"
                                    id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                   {{it.name}}
                                </label>
                            </div>
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
            {id:'global',name:'عام'},
            {id:'specialite',name:'متخصص'},
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

