<template>
   <div class="container  mt-5 p-5">
            <h2 class="text-center"> 
                كيف تقدم خدماتك في المنصة
            </h2>
            <div class=" mt-5">
                <div style="overflow: hidden;" class="row position-relative service-riadiat mt-5">
                    <div class="col-lg-2 even ">
                        
                        <BoxEvent color="#1FB9B3" :level="1">

                      
                        <template v-slot:title>
                            التعرف علـــى المنصة وعلى مميزتهــــــــــا
                        </template>
                        </BoxEvent>

                    </div>
                    <div class="col-lg-2 odd">
                        <BoxEvent color="orange" :level="2">
                            <template v-slot:title>
                                سجل كمقدم خدمة وأختـــار الـبـاقـــــــــــة
                            </template>
                            </BoxEvent>
                    </div>
                    <div class="col-lg-2 even ">
                                <BoxEvent color="blue" :level="3">
                            <template v-slot:title>
                                التعرف علـــى المنصة وعلى مميزتهــــــــــا
                            </template>
                            </BoxEvent>
                    </div>
                    <div class="col-lg-2 odd">
                        <BoxEvent color="black" :level="4">
                            <template v-slot:title>
                                أبدأ بنشـــــــــر خدماتــــــــــك ومهاراتــــــك
                            </template>
                            </BoxEvent>
                    </div>
                    <div class="col-lg-2 even ">
                        <BoxEvent color="#ff3000" :level="5">
                            <template v-slot:title>
                                تـلـقــــــــــــى الطلبات مـــن الاعضـــــــــــاء
                            </template>
                            </BoxEvent>
                                
     
                    </div>
                    <div class="col-lg-2 odd">
                        <BoxEvent isLast color="#555454" :level="6">
                            <template v-slot:title>
                                و أخيــــــــــــراً أستقبــــــــــل مستحقاتــــك
                            </template>
                            </BoxEvent>
                            
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import BoxEvent from './box-svg'
export default {
 name:'section-how-offer-service',
 components:{
    BoxEvent
 },
 data:()=>({
    colors:['#1FB9B3','orange'],
    items:[
        {title:''}
    ]
 })
}
</script>

<style>

</style>