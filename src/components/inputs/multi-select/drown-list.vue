<template>
    <div class="container my-5">
  
    <div class="my-form-input">
      <div @click="show=!show" class="my-form-select clickable">
        <label class="my-form-input__label">{{label}}</label>
      </div>
      
      <div class="my-form-input__body" v-show="show">
        <div class="row">
          <div v-if="!opts || opts.length==0" class="col-12 my-form-select__empty">
            <span>{{ $t('no-options') }}</span>
          </div>
        <div v-else v-for="(item,i) in opts" :key="i" class="col-12 col-md-6">
          <div class="form-check">
    <input class="form-check-input" v-model="value_" :value="getTrackOpt(item)" :type="multiSelect?'checkbox':'radio'" >
    <label class="my-form-select_item-label" for="defaultCheck1">
{{getLabelOpt(item)}}
    </label>
  </div>
        </div>
    </div>
      </div>
    </div>
   
    
  
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'drow-list',
    props:{
        value:{

        },
        label:{
                type:[String],
                default:null,
        },
        trackId:{
                type:[String],
                default:null,
        },
        labelName:{
                type:[String,Function],
                default:null,
        },
        multiSelect:{
                type:[Boolean],
                default:false,
        },
        opts:{
            type:[Array,Object],
            default:()=>[]
        }
    },
    data:(vm)=>{
        let v=vm.value;
        if(vm.multiSelect) v=v??[]
        return{
        value_:v,
      show:false
    }},
    watch:{
        value_(){
            this.$emit('input',this.value_)
        },

        value:{
            deep:true,
            immediate:true,
            handler(){
                let v=this.value;
                if(this.multiSelect) v=v??[]
                this.value_=v
            }
        }
    },
    methods:{
        getLabelOpt(item){
            if(this.labelName)
            {
                if(typeof this.labelName == "function"){
                    return this.labelName(item)
                }
                return item[this.labelName]
            }
            
            return item
        },
        getTrackOpt(item){
            if(this.trackId)
            {
                if(typeof this.trackId == "function"){
                    return this.trackId(item)
                }
                return item[this.trackId]
            }
            return item
        }
    }
  
  }
  </script>
  <style scoped>
  
  .my-form-input{
    background: #FFFFFF;
  border: 0.5px solid #D1D1D1;
  border-radius: 4px;
  padding:10px 15px
  }
  .my-form-input__label{
    font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  color: #737373;
  
  }
  .my-form-input__body{
    margin: 15px 0;
  }
  .my-form-select{
    color: #212529;
      background-color: #fff;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: left 0.65rem;
      background-size: 16px 12px;
  
  }
  .my-form-select_item-label{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
/* identical to box height, or 106% */

display: flex;
align-items: center;
text-align: right;

color: #979797;
  }
  .my-form-select__empty{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 150px;
  }
  </style>