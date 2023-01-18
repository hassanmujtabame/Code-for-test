<template>
<CheckOutDialog
:group="group"
title=" تفاصيل الدفع"
>
<template v-slot:default="{ item }">
       
                        
                            <p class="t-c">شراء خدمة تجهيز مشروعك لعرضه للإستثمار</p>
                                <p class="m-c fw-bold">     {{item.amount}} <bdi>ريال</bdi></p>                       
</template>
</CheckOutDialog>
</template>
<script>
import CheckOutDialog from '@/common/dialogs/check-out/index'
export default {
  name:"checkout-project-physical",
  props:{
    group:{
        type:String,
        default:'checkout-project-physical'
    }
  },
  components:{
    CheckOutDialog
  },
  data:()=>({
    showDialog:false,

  })
}

</script>

<style scoped>

</style>
