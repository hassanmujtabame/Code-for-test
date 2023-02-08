<template>
    <div class="rates-course">
        <div class="rates-course__wrapper">
            <div class="">

                <div class="d-flex justify-content-between border-bottom">
                    <h4 class="rates-course-title">
                        تقيم الدورة </h4>


                </div>

            </div>
            <div>
                <rateCard v-for="(rateItem,i) in rates" :key="i"
                :item="rateItem" 
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
                image:'/assets/img/صورة واتساب بتاريخ 2022-10-18 في 09.53.21.jpg',
                name:'ليلى احمد'
            }
        }
let ratesTest=[
            itemTest,
            itemTest,
            itemTest,
        ]
import rateCard from './rate-card.vue';
export default {
    name: 'section-rate-course',
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

<style scoped>
.rates-course__wrapper{
    background: white;
    border:1px solid #f1f1f1;
    border-radius: 8px;
}
.rates-course-title{
    font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */

text-align: center;
text-transform: capitalize;
padding: 10px;
margin: 0;
/* 414042 */

color: #414042;
}
</style>