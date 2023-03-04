<template>
  <div class="box bg-white   rounded-4 mt-5 p-2 border">
                        <div class="p-3">

                            <div class="d-flex justify-content-between">
                                <h4 class="s-c fw-bolder">
                                    التقيمات
                                </h4>
                                <h4 class="s-c">
                                    {{itemPage.rate}}
                                </h4>

                            </div>
                            <p class="text-end">
                                <d-rate-font-stars :value="itemPage.rate" readonly/>
                            </p>
                        </div>
                        <div>
                            <rateItem v-for="(item,i) in items" :key="i" :item="item" />
                        </div>
                    </div>
</template>

<script>
import consultingAPI from '@/services/api/consulting'
import rateItem from './rate-item.vue'
export default {
 name:'section-rates',
 props:{
    itemPage:{}
 },
 components:{
    rateItem
 },
 data:()=>({
    loading:false,
    items:[
        /*{name:'ليلى احمد',rate:4,comment:' دكتور مميز لقد أستفدت منه الكثير'},
        {name:'ليلى احمد',rate:4,comment:' دكتور مميز لقد أستفدت منه الكثير'},
        {name:'ليلى احمد',rate:4,comment:' دكتور مميز لقد أستفدت منه الكثير'},
 */]
 }),
 methods:{
    async initializing(){
        this.loading = true;
            try {
                let {data} = await consultingAPI.consultants.getRates(this.itemPage.id)
                if(data.success){
                    this.items = data.data
                }
            } catch (error) {
                //
            }
            this.loading = false;
        },
 },
 mounted(){
    this.initializing()
 }
}
</script>

<style scoped>

.consultant-text{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */

text-transform: capitalize;

color: #1FB9B3;
}
</style>