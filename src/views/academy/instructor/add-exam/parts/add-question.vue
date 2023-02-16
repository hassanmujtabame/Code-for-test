<template>
    <div class="add-question-item border p-3 rounded-3 h-100 d-flex flex-column">
 <div class="add-question-item__wrapper box flex-grow-1">
    <div class="add-question-item__close">
        <button class="btn" @click="deleteItem" ><i class="fa fa-trash"></i></button>
    </div>
    <div class="mt-3 d-flex">
        <d-text-input inline type="text" v-model="opt.title" class="border w-100 p-2 rounded-2" label="اضف الاختيار" >
            <!--append-icon-->
            <template v-slot:append-icon>
                            <div class="">
                                <button v-if="loading" class="btn no-border t-c" >
                                  
                                    <i  class="fa fa-spinner fa-spin"></i>
                                </button>
                            </div>
                                </template>
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
    <div v-if="itemLocal.options.length===0" class="add-quetion-item__content" >
        <h1  class="add-question-item__empty">لا يوجد اختيارات</h1>
    </div>
    <template v-else >
    <div v-for="(o,i) in itemLocal.options" :key="i" class="form-check mt-3">
                <input  class="form-check-input" v-model="value_" type="radio" :name="`exampleRadios-${item.uuid}`" :id="`exampleRadios-${o.id}`" :value="o.id">
                <label @dblclick="editOption(o,i)" class="form-check-label clickable" :for="`exampleRadios-${item.uuid}`">
                  {{o.title}} <i>[{{o.id}}]</i>
    </label>
    </div>
    </template>
    
</div>
<div class="add-question-item__footer mt-3 text-end flex-shrink-0">
                        <a  class="btn bg-main text-white px-3"
                            role="button">
                            حفظ السؤال
                        </a>
</div>
</div>
</template>

<script>
import academyAPI from '@/services/api/academy';
export default {
    props:{
        label:{},
        item:{}
    },
data:(vm)=>{
    return{
        itemUUID:vm.generateRandomString(8),
        value_:null,
        loading:false,
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
    deleteItem(){
        this.$emit('delete',this.itemLocal)
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

<style scoped>
.add-question-item__wrapper{
    position: relative;
}
.add-question-item__close{
    width: 100%;
    text-align: end;
    position: absolute;
    top: -10px;
    
}
.add-question-item__close>button{
    color: red;
    padding: 1px 5px;
}
.add-question-item__close>button:hover{
    background: rgb(243 20 20 / 8%);
    padding: 2px 5px;
}
.add-question-item__content{
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.add-question-item__footer{
 border-top: 1px solid #f1f1f1;
 padding-top: 5px;
}
.add-question-item__empty{
    color:var(--b-color);
    font-size: 24px;
    line-height: 30px;
    text-align: center;
}
</style>