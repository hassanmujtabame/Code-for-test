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
                    :title="item.title"
                    :status="item.status"
                    :price="item.price"
                    :date-start="item.dateStart"
                    :date-end="item.dateEnd"
                    ></subscribeItem>
                </div>

            </div>

        </div>

    </div>   
</template>

<script>
import subscribeItem from '@/components/cards/subscribe-item.vue';
export default {
 name:'menu-subscribe',
 components:{
    subscribeItem
 },
 data:()=>({
    items:[
        {title:'إشتراك شهري',price:2000,status:'active',dateStart:'2022-01-01',dateEnd:'2022-05-12'},
        {title:'إشتراك شهري',price:2000,status:'expired',dateStart:'2022-01-01',dateEnd:'2022-05-12'},
        {title:'إشتراك شهري',price:2000,status:'expired',dateStart:'2022-01-01',dateEnd:'2022-05-12'},
        {title:'إشتراك شهري',price:2000,status:'expired',dateStart:'2022-01-01',dateEnd:'2022-05-12'},
       
    ]
 })
}
</script>

<style>

</style>