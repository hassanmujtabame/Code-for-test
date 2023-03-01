<template>
    <div class="form-group " :class="{focused:focused}" v-click-outside="outSide">
      <div class="select-arrow clickable" @click="toggleList">
        <label @click="toggleList" class="form-label " :class="{'clickable':!fixed}">{{label}}</label>
        <div class="input-group">
          <slot name="prend-icon"></slot>
          <input  class="form-control" readonly  :value="localValue" />
          <slot name="append-icon"></slot>
        </div>
      <d-error-input :errors="errors" v-if="errors && errors.length>0" />
    </div>
        <div class="form-input__body" v-show="show">
        <div class="row">
          <div v-if="!opts || opts.length==0" class="col-12 form-select__empty">
            <span>{{ $t('no-options') }}</span>
          </div>
        <div v-else v-for="(item,i) in opts" :key="i" class="col-12 col-md-6">
          <div class="form-check">
        <input class="form-check-input" v-model="value_" :value="getTrackOpt(item)" :type="multiSelect?'checkbox':'radio'" >
          <label class="form-select_item-label" for="defaultCheck1">
          {{getLabelOpt(item)}}
          </label>
  </div>
        </div>
    </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'd-multiselect',
    props:{
        value:{},
        label:{},
        seperate:{
                type:[String],
                default:',',
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
        opened:{
                type:[Boolean],
                default:false,
        },
        fixed:{
                type:[Boolean],
                default:false,
        },
        opts:{
            type:[Array,Object],
            default:()=>[]
        },
    errors:{
        type:[Array,Object],
    }
    },
    data:(vm)=>{
        let v=vm.value;
        if(vm.multiSelect) v=v??[]
        return{
          focused:false,
          localValue:'',
        value_:v,
      show:vm.opened
    }},
    watch:{
      errors:{
        immediate:true,
        deep:true,
        handler(){}
      } ,
        value_(){
         this.fillInput()
            this.$emit('input',this.value_)
        },
        opts:{
          deep:true,
          immediate:true,
          handler(){
            this.fillInput()
          }
        },
        value:{
            deep:true,
            immediate:true,
            handler(){
                let v=this.value;
                if(this.multiSelect) v=v??[]
                this.value_=v
                this.fillInput()
            }
        }
    },
    methods:{
      fillInput(){
        if(!this.value_) this.localValue = '';
          else{
            if(Array.isArray(this.value_))this.localValue = this.value_.map(item=>this.getLabelOpt( this.opts.find(o=>this.getTrackOpt(o)==item))).join(this.seperate);
            else{
              let item = this.opts.find(o=>this.getTrackOpt(o)==this.value_)
              if(item){
                this.localValue = this.getLabelOpt(item);
              }
              
            }
            //if(typeof this.value_ =='string')
            
          }
      },
      outSide(vn){
        let att=vn.target.attributes[0];
            this.focused=(this.$el.attributes[0]==att)
        },
      toggleList(){
        if(!this.fixed)
        this.show=!this.show;
       this.focused=true
      },
        getLabelOpt(item){
            if(this.labelName)
            {
                if(typeof this.labelName == "function"){
                    return this.labelName(item)
                }
                //console.mylog('ee',item,this.labelName)
                if(!item) return null;
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
  .form-group {
      background: #FFFFFF;
      border: 0.5px solid #D1D1D1;
      border-radius: 4px;
      
      display: flex;
      flex-direction: column;
  }
  .select-arrow{
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: left 0.375rem center;
    background-size: 16px 12px;
    padding: 0px 5px;
    padding-left:20px;
 
  }
  html[lang=en] .select-arrow{
   background-repeat: no-repeat;
    background-position: right 0.375rem top;
    padding: 5px 5px;
      padding-right:20px;
  }
  
  .form-group .form-label{
    margin-bottom: 0;
      flex-shrink: 0;
      font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height, or 142% */
  
  display: flex;
  align-items: center;
  
  
  color: #979797;
  }
  .form-group .form-control{
      padding: 4px 1px;
      font-weight: 400;
      font-size: 16px;
      line-height: 17px;
      border: none;
      flex:1;
      font-style: normal;
        color: #667D80;
          /* box-shadow: 0 0 0 0.1rem rgb(13 110 253 / 25%);*/
   box-shadow:none;
  }
 
  .form-input__body{
    padding: 15px 15px;
  }
  .form-select__empty{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
  }
  .form-select_item-label{
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
  .focused{
    box-shadow: 0 0 0 0.1rem #1fb9b359;
    border-color: #1fb9b359;
}
.form-group[disabled] {
    background: #f7f7f7a1;
}
.form-control:disabled {
    background-color: #f6f9fb00;
    opacity: 1;
}
  </style>