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
                        تصنيف الخدمة
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <div>
                            <div v-for="(item,i) in states" :key="i" class="form-check">
                                <input class="form-check-input" type="radio" v-model="filter.state" :value="item.id" name="flexRadioDefault"
                                    >
                                <label class="form-check-label" >
                                  {{  item.name }}
                                </label>
                            </div>
                           

                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo">
                        مجالات الاختصاص

                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        <div v-for="(cat,i) in categories" :key="i" class="form-check">
                            <input v-model="filter.category_id" :value="cat.id" class="form-check-input" type="radio">
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
                        المدة
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse "
                    aria-labelledby="panelsStayOpen-headingThree">
                    <div style="margin: 20px 0px 0 0" class="a">
                                    <div class="slider-container">
                                        <rslider-input
                                         :min.sync="filter.valueMinDuring" 
                                         :max.sync="filter.valueMaxDuring"
                                         :lmin="0"
                                         :lmax="100"
                                         />
                                    </div>
                                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour">
                        التكلفة
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" class="accordion-collapse "
                    aria-labelledby="panelsStayOpen-headingFour">
                    <div style="margin: 20px 0px 0 0" class="a">
                                    <div class="slider-container">
                                        <rslider-input
                                         :min.sync="filter.priceMin" 
                                         :max.sync="filter.priceMax"
                                         :lmin="0"
                                         :lmax="100"
                                         />
                                    </div>
                                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import myRequestsAPIs from '@/services/api/service-provider/user/my-requests.js'

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
            {id:'online',name:'خدمات اونلاين'},
            {id:'offline',name:'خدمات اوفلاين'},
        ],
        categories:[],
    filter:vm.filterItem
 }},
 watch:{
    filter:{
        deep:true,
        handler(val){
            this.$emit('change',val)
        }
    }
 },
 methods:{

 async getCategories() {
            try {
                let { data } = await myRequestsAPIs.getCategories()
                if (data.success) {

                    let categories = data.data;
                    categories.unshift({ id: null, name: 'الكل' })
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

</style>