<template>
 <div>

                        <div class="box d-flex align-items-center justify-content-between ">
                            <h5 :style="{color:color}">
                                {{title}}
                            </h5>
                            <p :style="{color:color}">
                                {{value}}
                            </p>
                        </div>
                        <div class="box d-flex align-items-center justify-content-between ">
                            <router-link :to="url" class="btn border rounded-2 bg-transparent">
                                {{ btnTitle??$t('show-all') }} 
                            </router-link>
          
                        </div>
                   </div>

    
</template>

<script>
import commonAPI from '@/services/api/common';

export default {
 props:{
    title:{
        type:String,
        require:true
    },
    code:{
        default:''
    },
    btnTitle:{type:String},
    color:{
        default:'#F2631C'
    },
    url:{
        type:[String,Object],
        
    }
 },
    data:()=>({
      value:0,
    }),
    methods:{
     async initializing(){
        try {
          let {data}= await commonAPI.getWidgetValue({code:this.code})
          if(data.success){
            this.value=data.data
          }
        } catch (error) {
          console.mylog('error',error)
        }
      }
    },
    mounted(){
        if(this.code) this.initializing()
    }

}
</script>