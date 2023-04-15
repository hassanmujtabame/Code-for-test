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
                                <input class="form-check-input" type="radio" :value="state.id" v-model="filter.type_training" 
                                :selected="state.id===filter.type_training"
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
            <!--سعر الدورة-->
            <div class="accordion-item show">
                            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseFour">
                                    سعر الدورة
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingFour">
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
 }
    }
}
</script>

