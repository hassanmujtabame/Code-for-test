<template>
  <div class="row justify-content-between mt-5 ">


              
                    <div class="col-md-6 ">
                    <div class="widget-card w-100 mt-3 p-3">
                        <div class="border p-3">
                        <widget-rate-service />
                        </div>
                    </div>
                    </div>
                    <div class="col-md-6">
                        <div class="widget-card w-100 mt-3 p-3">
                            <div class="border p-3">
                            <widget-investment />
                            </div>
                        </div>
                </div>
   
             
                    <div class="col-md-6 ">
                        <div class="widget-card w-100  mt-3 p-3">
                        <div class="border p-3">
                            <widget-investment-others />
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="widget-card w-100 mt-3 p-3">
                            <div class="border p-3">
                            <widget-blog />
                            </div>
                        </div>
                   </div>
          
      
    </div>
</template>

<script>
import WidgetBlog from './widget-blog.vue';
import WidgetInvestmentOthers from './widget-investment-others.vue';
import WidgetInvestment from './widget-investment.vue';
import WidgetRateService from './widget-rate-service.vue';

export default {
 name:'widgets-index',
 components:{
    WidgetBlog,
    WidgetInvestmentOthers,
    WidgetInvestment,
    WidgetRateService,
 }
}
</script>

<style scoped>
.widget-card{
    height: 100%;
}
</style>