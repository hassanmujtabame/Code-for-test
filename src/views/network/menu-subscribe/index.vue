<template>
  <div style="margin-top: 96px;">
        <div class="container">
            <div class="box border shadow  rounded-4">
                <div class=" p-4" >
                    <div class="border-bottom mt-3">
                        <div class="d-flex justify-content-between  align-items-center" >
                            <h3>
                                قائمة اشتركاتك 
                            </h3>
                            <div>
                                <button style="height: 40px;" class="btn-main">
                                    تجديد الاشتراك 
                                </button>
                            </div>
                        </div>
                    </div>
                    <subscribeItem 
                    v-for="(item,i) in items" :key="i"
                    :title="getTitle(item.package_type)"
                
                    :status="item.package_status"
                    :price="item.package_price"
                    :date-start="item.start_date"
                    :date-end="item.end_date"
                    ></subscribeItem>
                </div>

            </div>

        </div>

    </div>   
</template>

<script>
import networkAPI from '@/services/api/network';
import subscribeItem from '@/components/cards/subscribe-item.vue';
export default {
 name:'menu-subscribe',
 components:{
    subscribeItem
 },
 data:()=>({
    items:[
        /*{package_type:'month',package_price:2000,package_status:'active',start_date:'2022-01-01',end_date:'2022-05-12'},
        {package_type:'month',package_price:2000,package_status:'finished',start_date:'2022-01-01',end_date:'2022-05-12'},
        {package_type:'month',package_price:2000,package_status:'finished',start_date:'2022-01-01',end_date:'2022-05-12'},
        {package_type:'month',package_price:2000,package_status:'finished',start_date:'2022-01-01',end_date:'2022-05-12'},
       */
    ]
 }),
 methods:{
    getTitle(type){
        switch (type) {
            case 'free': return this.$t('free_subscibe');
            case 'month': return this.$t('monthly_subscribe');
            case 'year': return this.$t('annually_subscribe');
            default: return 'N/A'

        }
    },
    async loadList(){
        try {
            let { data } = await networkAPI.getSubscribes()
            if(data.success){
                this.items = data.data
            }
        } catch (error) {
            console.log(error)
        }
    }
 },
 mounted(){
    this.loadList()
 }
}
</script>

<style>

</style>