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
                        تصنيف الخريجين
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <div>
                            <div v-for="(state,i) in states" :key="i" class="form-check">
                                <input class="form-check-input" type="radio" :value="state.id" v-model="filter.graduate" 
                                :selected="state.id===filter.graduate"
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
                        مجالات الاختصاص
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
            <div class="accordion-item show">
                <h2 class="accordion-header" id="panelsStayOpen-headingExperience">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapse" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseExperience">
                        سنوات الخبرة
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseExperience" class="accordion-collapse collapse show "
                    aria-labelledby="panelsStayOpen-headingExperience">
                    <div style="margin: 20px 0px 0 0" class="a">
                                    <div class="slider-container">
                                        <rslider-input
                                         :min.sync="filter.year_experience_from" 
                                         :max.sync="filter.year_experience_to"
                                         :step="1"
                                         :lmin="0"
                                         :lmax="40"
                                         />
                                    </div>
                                </div>
                </div>
            </div>
            <div class="accordion-item show">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseThree">
                      الراتب المتوقع
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show "
                    aria-labelledby="panelsStayOpen-headingThree">
                    <div style="margin: 20px 0px 0 0" class="a">
                                    <div class="slider-container">
                                        <rslider-input
                                         :min.sync="filter.expected_salary_from" 
                                         :max.sync="filter.expected_salary_to"
                                         :step="50"
                                         :lmin="0"
                                         :lmax="3000"
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
import GraduateJobsApi from '@/services/api/graduate-jobs'

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
            {id:'academy',name:'الاكاديمية'},
            {id:'incubator',name:'الحاضنة'},
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
                let { data } = await GraduateJobsApi.getCategories()
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

