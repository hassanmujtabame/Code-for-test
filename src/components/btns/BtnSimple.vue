<template>
  <button      class="btn-custmer-w"
  :class="{'active':selected}"
                  type="button"
                 v-on="$listeners"
        
                >
                <slot>
                 
                </slot>
                </button>
</template>

<script>
export default {
    name:'BtnSimple',
    props:{
        selected:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        clicked(evt){
            this.$emit('click',evt)
        }
    }
}
</script>

<style>

</style>