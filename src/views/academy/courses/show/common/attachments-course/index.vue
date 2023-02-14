<template>
     <d-course-panel>
              <template v-slot:header>
                <h1>المرفقات : </h1>
                </template>
                <template v-slot:default>
            <div>
                <rateCard v-for="(rateItem,i) in attachments" :key="i"
                :item="rateItem" 
                :showBorder="(attachments.length-1)>i"
                />
            </div>
            </template>

        </d-course-panel>
</template>

<script>
let itemTest={
            title:'دراسة جدوي',
            file: "testing/uploads/defuals.pdf",
            id:1,
        }
let attachments=[
            itemTest,
            itemTest,
            itemTest,
        ]
import rateCard from './card.vue';
export default {
    name: 'section-attachments-course',
    components:{
        rateCard
    },
     props:{
        itemPage:{
                type:[Object,Array],
                require:true
            }
    },
    data:(vm)=>({
        attachments:vm.itemPage.attachments??attachments
    })
}
</script>