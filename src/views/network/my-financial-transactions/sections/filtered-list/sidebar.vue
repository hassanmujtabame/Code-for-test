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
                        نوع المعاملة
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
            <div class="accordion-item  show">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseTwo">
                     الفترة الزمنية

                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body show">
                        <div v-for="(cat,i) in categories" :key="i" class="form-check">
                            <input v-model="filter.time_period" :value="cat.id" class="form-check-input" type="radio">
                            <label class="form-check-label" for="defaultCheck1">
                                {{cat.name}}
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
                      المبلغ
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse "
                    aria-labelledby="panelsStayOpen-headingThree">
                    <div style="margin: 20px 0px 0 0" class="a">
                                    <div class="slider-container">
                                        <rslider-input
                                         :min.sync="filter.min_balance" 
                                         :max.sync="filter.max_balance"
                                         :step="10"
                                         :lmin="0"
                                         :lmax="1000"
                                         />
                                    </div>
                                </div>
                </div>
            </div>
        </div>
        <div class="mt-3 text-center">
            <button @click="updateFilter" class="btn-main">
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

            {id:'dues',name:'مستحقاتك'},
            {id:'recharge_balance',name:'شحن رصيدك'},
            {id:'fees',name:'رسوم'},
            {id:'balance_withdrawal',name:'سحب رصيدك'},

        ],
        categories:[
            {id:'last_month',name:vm.$t('last_month')},
            {id:'last_six_months',name:vm.$t('last_six_months')},
            {id:'last_year',name:vm.$t('last_year')},
            {id:'last_two_years',name:vm.$t('last_two_years')},
            {id:'before_three_years',name:vm.$t('before_three_years')},
            {id:'before_five_years',name:vm.$t('before_five_years')},
            {id:'five_years_and_more',name:vm.$t('five_years_and_more')},

        ],
    filter:vm.filterItem
 }},

 methods:{
 updateFilter(){
    this.$emit('change',this.filter)
 },

    },
    mounted() {
      
    }
}
</script>

