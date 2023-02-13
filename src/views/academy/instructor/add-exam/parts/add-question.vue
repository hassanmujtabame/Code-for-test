<template>
    <div class="border p-3 rounded-3">
 <div class="box">
    <div class="mt-3 d-flex">
        <d-text-input inline type="text" v-model="opt.title" class="border w-100 p-2 rounded-2" label="اضف الاختيار" >
        </d-text-input>
        <d-text-input inline type="text" v-model="opt.id" class="border w-100 p-2 rounded-2 mx-2" label="قيمة الاختيار" >
        </d-text-input>
            
                <button v-if="selectedIndex===false" @click="addOption" class="btn h-100"><i    class="m-c fa  fa-circle-plus clickable"></i></button>
                <template v-else>
                <button  @click="updateOption" class="btn h-100">
                    <i  style="color:blue"  class=" fa  fa-floppy-disk clickable"></i>
                </button>
                <button  @click="cancelUpdateOption" class="btn h-100">
                   
    
                   <i  style="color:red"  class=" fa  fa-circle-xmark clickable"></i>
               </button>
            </template>
            </div>     
    <div class="mt-3">
        <d-text-input type="text" v-model="itemLocal.title" class="border w-100 p-2 rounded-2" label="السؤال" > 
        </d-text-input>
    </div>
    
    <div v-for="(o,i) in itemLocal.options" :key="i" class="form-check mt-3">
                <input  class="form-check-input" v-model="value_" type="radio" :name="`exampleRadios-${item.uuid}`" :id="`exampleRadios-${o.id}`" :value="o.id">
                <label @dblclick="editOption(o,i)" class="form-check-label clickable" :for="`exampleRadios-${item.uuid}`">
                  {{o.title}} <i>[{{o.id}}]</i>
    </label>
    </div>
</div>
</div>
</template>

<script>
export default {
    props:{
        label:{},
        item:{}
    },
data:(vm)=>{
    return{
        itemUUID:vm.generateRandomString(8),
        value_:null,
        itemLocal:{...vm.item},
        opt:{
            title:'',id:''
        },
        selectedIndex:false,
        opts:[
            {id:'1',title:"الغسالة"},
            {id:'2',title:"الغسالة"},
            {id:'3',title:"الغسالة"},
            {id:'4',title:"الغسالة"},
            {id:'5',title:"الغسالة"},
        ]
    }
},
watch:{
    itemLocal:{
        deep:true,
        handler(){
            this.$emit('update',{...this.itemLocal})
        }
    }
},
methods:{
    editOption(newOpt,index){
        console.mylog('ssset',newOpt,index)
        this.opt = Object.assign(this.opt,newOpt)
        this.selectedIndex = index;

    },
    cancelUpdateOption(){
        this.clearOpt()
    },
    updateOption(){
        this.itemLocal.options[this.selectedIndex] = Object.assign(this.itemLocal.options[this.selectedIndex] ,this.opt)
        this.clearOpt()
    },
    addOption(){
        this.itemLocal.options.push({...this.opt});
       this.clearOpt()
    },
    clearOpt(){
        this.opt.title = '';
        this.opt.id = '';
        this.selectedIndex = false;
    }
}
}
</script>

<style>

</style>