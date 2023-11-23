<template>
    <div
                class="tab-pane fade"
                :class="{'show active':selected}"
                :id="`${group}-${reference}`"
                role="tabpanel"
                :aria-labelledby="`${group}-${reference}-tab`"
                tabindex="0"
              >
                <div
                  class="d-flex align-items-center justify-content-center flex-wrap"
                >
                 
                  <slot :selected="selected" :current="current"></slot>
                 
                </div>
              </div>
</template>

<script>
export default {
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
computed:{
  selected(){
    return this.current=='' || this.current==this.reference
  }
}
}
</script>

<style>

</style>