<template>

  <div class="form-group" :class="{focused:focused,'inline':inline,'solo':solo}" v-click-outside="outSide">
    <label v-if="label" class="form-label">{{ label }}</label>
    <Mentionable
    :keys="['@', '#']"
    :items="items"
    offset="6"
    insert-space
    style="width:fit-content"
    v-on="events"
  >

    <div class="input-group">
        <slot name="prend-icon"></slot>
        <div class="d-flex flex-wrap">
            <div :key="i" class="flex-shrink-0 flex-grow-1 d-flex" v-for="(sel,i) in selected">
                <d-chip class="w-100" :item="sel" @close="unselected(i)" />
            </div>
        <input style="min-with:50px" ref="inputMention" v-on="$listeners" @focus="focused=true" @input="inputEvent" class="form-control flex-shink-0" v-bind="{...$attrs,value:undefined}" v-model="value" />
        </div>
        <slot name="append-icon"></slot>
    </div>
    <d-error-input :errors="errors" v-if="errors && errors.length>0" />
    <slot name="after-error"></slot>
    <template #no-result>
        <slot name="no-result">

      <div class="dim">
        No result
      </div>
      </slot>
    </template>

    <template v-slot:[`item-@`]="{ item }">
        <slot name="item-@" :item="item">

      <div class="user">
        {{ item.id }}
        <span class="dim">
          ({{ item.name }})
        </span>
      </div>
      </slot>
    </template>

    <template v-slot:[`item-#`]="{ item }">
        <slot name="item-#" :item="item">
      <div class="issue">
        <span class="number">
          #{{ item.id }}
        </span>
        <span class="dim">
          {{ item.name }}
        </span>
      </div>
    </slot>
    </template>
</Mentionable>
 
</div>
</template>

<script>
//import DChip from './chip'
import { Mentionable } from 'vue-mention'
export default {
 name:'d-mention-input',
 components:{
    Mentionable,
  //  DChip
 },
 props:{
    label:{},
    inline:{
        type:Boolean,
        default:false,
    },
    solo:{
        type:Boolean,
        default:false,
    },
    errors:{
        type:[Array,Object],
    },
    items:{
        type:[Array,Object],
    },
    tooltipEvents:{
        type:[Array,Object],
        default:()=>{return {}}
    }
 },
 model: {
      prop: 'value',
      event: 'updateValue'
  },
    data: () => {
        return {
            value:'',
            selected:[],
           focused:false,
        }
    },
    watch: {
      errors:{
        immediate:true,
        deep:true,
        handler(){}
      },
      items:{
        immediate:true,
        deep:true,
        handler(){}
      } 
    },
    computed:{
        events(){
            return {...this.tooltipEvents,apply:this.onChooseMention}
        }
    },
    methods:{
        unselected(item){
            let index;
            if(typeof item == 'number'){
                index = item;
            }
            else if( typeof item == 'object'){
                 index = this.selected.findIndex(x=>x.id==item.id)
            }else{
                return;
            }
            if(index>-1)
            this.selected.splice(index,1)
            this.$refs['inputMention'].focus()
        },
        onChooseMention(item,/*key,replacedWith*/){
            if(!this.selected.find(i=>i.id==item.id)){
                this.selected.push(item)
                this.$emit('updateValue',this.selected)
                this.value=''
            }
            this.$refs['inputMention'].focus()
        },
        loadItems(search=null){
            this.$emit('load-items',search)
        },
        outSide(vn){
            let att=vn.target.attributes[0];
            this.focused=(this.$el.attributes[0]==att)
        },
        inputEvent(/*evt*/){
           // this.$emit('updateValue',evt.target.value)
        }
    },
    mounted(){
        //console.mylog('lis',this.$listeners)
    }
}
</script>

<style scoped>

.form-group {
    background: #FFFFFF;
    border: 0.5px solid #D1D1D1;
    border-radius: 4px;
    padding: 0px 5px;
    display: flex;
    flex-direction: column;
}
.form-group.inline{
    flex-direction: row; 
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
    color: #667D80;
    font-weight: 400;
    padding: 4px 1px;
    font-size: 0.9rem;
    line-height: 1;
    border: none;
    flex:1;
   /* box-shadow: 0 0 0 0.1rem rgb(13 110 253 / 25%);*/
   box-shadow:none;
}
.form-group.solo{
    position: relative;
}
.solo label.form-label {
    position: absolute;
    right: 6px;
    top: -10px;
    z-index: 2;
    background: white;
    padding: 1px 5px;
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