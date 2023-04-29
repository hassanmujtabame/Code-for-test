<template>
    <div class="box">
        <div class="box bg-white   rounded-4 mt-5 p-2 border">
            <div class="p-3">

                <div class="d-flex justify-content-between border-bottom">
                    <h4 class="s-c fw-bolder">
                        تقيم الخدمة </h4>


                </div>

            </div>
            <div>
                <rateCard v-for="(rateItem,i) in rates" :key="i"
                :image="item.user_info.image"
                :name="item.user_info.name"
                :rate="item.rate"
                :comment="rateItem.note"
                :datetime="rateItem.created_at"
                class="mt-2"
                :showBorder="(rates.length-1)>i"
                />
            </div>

        </div>
    </div>
</template>

<script>
let itemTest={
            note:'دكتور مميز لقد أستفدت منه الكثير',
            rate:3,
            user_info:{
                id:148,
                image:'/assets/img/avatar-11.jpg',
                name:'ليلى احمد'
            }
        }
let ratesTest=[
            itemTest,
            itemTest,
            itemTest,
        ]
import rateCard from '@/components/cards/rate-item.vue';
export default {
    name: 'section-rate-service',
    components:{
        rateCard
    },
     props:{
    item:{
        type:[Object,Array],
        require:true
    }
    },
    data:(vm)=>({
         rates:vm.item.rates??ratesTest
    })
}
</script>

<style>

</style>