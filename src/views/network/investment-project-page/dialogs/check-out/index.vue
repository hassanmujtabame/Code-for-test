<template>
    <CheckOutDialog
    :group="group"
    title="مول المشروع"
    changeable
    >
    <template v-slot="{otherData}">
        <p class="t-c"><bdi>ادخل المبلغ الذي تريد تمويل المشروع به لا يقل 
عن </bdi> <span style="color:red">{{otherData.minimum_investment}}</span> <bdi>ريال</bdi>
</p>
    </template>
    </CheckOutDialog>
    </template>
    <script>
    import CheckOutDialog from '@/common/dialogs/check-out/index'
    export default {
      name:"checkout-project",
      props:{
        group:{
            type:String,
            default:'checkout-project'
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
    