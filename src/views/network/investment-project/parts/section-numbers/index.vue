<template>
  <div class="mt-5">
            <div class="riadiat-of-number">
                <div class="row justify-content-evenly ">
                    <div class="col-6 col-md-2 mt-3">
                        <div class="box">
                            <h5 class="m-c fw-bolder">
                                {{statics.invest_projects}}
                            </h5>
                            <p>
                                مشروع لاستثمار
    
                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-2 mt-3">
                        <div class="box">
    
                            <h5 class="m-c fw-bolder">
                                {{statics.invested}}
                            </h5>
                            <p>
                                مسثمر
    
                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-2 mt-3">
                        <div class="box">
    
                            <h5 class="m-c fw-bolder">
                                {{statics.investment_amounts}}
                            </h5>
                            <p>
                                مبالغ الاستثمار
    
                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-2 mt-3">
                        <div class="box">
    
                            <h5 class="m-c fw-bolder">
                                {{statics.demand_investment}}
                            </h5>
                            <p>
                                طالبين للاستثمار
    
                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-2 mt-3">
                        <div class="box">
    
                            <h5 class="m-c fw-bolder">
                                {{statics.moral_investments}}
                            </h5>
                            <p>
                                أستثمارات معنوية
    
                            </p>
                        </div>
                    </div>
    
                </div>
    
            </div>
    
        </div>
</template>

<script>
import projectAPI from '@/services/api/projects'
export default {
 name:'section-numbers',
 data:()=>({
     statics:{}
//    statics: {
//         "invest_projects": 'N/A',
//         "invested": 'N/A',
//         "investment_amounts": 'N/A',
//         "demand_investment": 'N/A',
//         "moral_investments": 'N/A'
//     }
 }),
 methods:{
    async initializing(){
        try {
            let {data} =  await projectAPI.getStatistics()
            if(data.success){
                console.log('data',data);
                this.statics =Object.assign(this.statics,data.data) 
            }
        } catch (error) {
             console.log('error',error)
        }
    }
 },
 mounted(){
    this.initializing()
 }
}
</script>

<style>

</style>