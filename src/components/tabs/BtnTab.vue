<template>
  <BtnSimple
                  class="nav-link"
                  :class="{active:current==reference}"
                  :id="`${group}-${reference}-tab`"
                  :data-bs-toggle="group"
                  :data-bs-target="`#${group}-${reference}`"
                 
                 @click="selected"
                  :aria-controls="`${group}-${reference}`"
                  :aria-selected="current==reference?'true':'false'"
                >
                <slot>
                 
                </slot>
                </BtnSimple>
</template>

<script>
import BtnSimple from '../btns/BtnSimple.vue';
export default {
    name:'BtnTab',
props:{
   group:{
        type:String,
        require:true,
   },
   reference:{
    type:String,
        require:true,
   },
    current:{
        type:String,
        default:''
    }
},
components:{
    BtnSimple
},
watch:{
    current:{
        immediate:true,
        handler(){}
    }
},
methods:{
    selected(){
       
        this.$emit('selected',this.reference)
        this.$emit('update:current',this.reference)
    }
}
}
</script>

<style>

</style>