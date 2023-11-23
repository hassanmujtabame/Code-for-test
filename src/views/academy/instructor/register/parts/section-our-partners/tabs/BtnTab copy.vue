<template>
  <button
                  class="nav-link btn-custmer-w"
                  :class="{active:current==reference}"
                  :id="`${group}-${reference}-tab`"
                  :data-bs-toggle="group"
                  :data-bs-target="`#${group}-${reference}`"
                  type="button"
                 @click="selected"
                  :aria-controls="`${group}-${reference}`"
                  :aria-selected="current==reference?'true':'false'"
                >
                <slot>
                 
                </slot>
                </button>
</template>

<script>
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