<template>
  <div>
  <label v-if="label" class="typo__label">{{label}}</label>
  <multiselect v-model="value_" 
  :tag-placeholder="tagPlaceholder" 
  :placeholder="placeholder" 
  @remove="removeTag"
  :label="trackText"
   :track-by="trackBy" 
   :options="options_" 
   :multiple="true" 
   :taggable="true" 
   @tag="addTag"
 
  ></multiselect>
</div>
</template>
<script>

import Multiselect from 'vue-multiselect'

export default {
    name:'d-multi-select-tag',
    props:{
        value:{
            type:String,
            default:''
        },
        label:{
            type:String,
        },
        trackText:{
            type:String,
            default:'name'
        },
        trackBy:{
            type:String,
            default:'name'
        },
        tagPlaceholder:{
            type:String,
            default:()=>{
              return window.i18n.t('add-this-as-new-tag')
            }
        },
        placeholder:{
            type:String,
            default:()=>{
              return window.i18n.t('search-or-add-tag')
            }
        },
        options:{
            type:[Array,Object],
            default:()=> { return []}
        }
    },
  components: {
    Multiselect
  },
  data (vm) {
    return {
      value_:[],
      options_:vm.options
    }
  },
  watch:{
    value:{

        immediate:true,
        handler(val){
             if(!val)
             this.value_ = [];
             else{
                this.value_ = this.value.split(',').map(x=>{return {name:x}})
             }
        }
    }
  },    
  methods: {
    updateEvent(){
        this.$emit('input',this.value_.map(v=>v.name).join(','))
    }
    ,
    removeTag(tag){
    this.value_ = this.value_.filter(x=>x.name!==tag.name)
    this.updateEvent()
    },
    addTag (newTag) {
      const tag ={name:newTag} 
      this.options_.push(tag)
      this.value_.push(tag)
      this.updateEvent()
    }
  }
}
</script>
<style>

</style>