<template>
    <div class="add-question-item border p-3 rounded-3 h-100 d-flex flex-column">
 <div class="add-question-item__wrapper box flex-grow-1">
    <div class="add-question-item__close">
        <button class="btn" @click="deleteItem" ><i class="fa fa-trash"></i></button>
    </div>
    <div class="mt-3 d-flex border-botton-thin">
        <div  class="row">
            <div class="col-12 row">
            <div class="col-12 col-md-5">
        <d-text-input solo type="text" v-model="opt.title" class=" border w-100 p-2 rounded-2" label="اضف الاختيار" >
            <!--append-icon-->
            <template v-slot:append-icon>
                            <div class="">
                                <button v-if="loading" class="btn no-border t-c" >
                                  
                                    <i  class="fa fa-spinner fa-spin"></i>
                                </button>
                            </div>
                                </template>
        </d-text-input>
        </div>
        <div class="col-12 col-md-5">
        <d-text-input solo type="text" v-model="opt.id" class="col-12 col-md-6 border w-100 p-2 rounded-2 mx-2" label="قيمة الاختيار" >
        </d-text-input>
    </div>
    </div>
        <!--correct-->
        <div  class="col-12 form-check mt-3">
                <input  class="form-check-input" v-model="isCorrect" type="checkbox" :name="`correctRadios-${item.uuid}`"  :value="1">
                <label class="form-check-label clickable fs-r-12-17" style="color:var(--label-color)" :for="`correctRadios-${item.uuid}`">
              هذا جواب صحيح
    </label>
    </div>
</div>
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
            <!-- question  -->  
            <ValidationObserver ref="form" tag="div">
    <div class="mt-3">
        <validationProvider 
            :name="$t('question-title')"
            vid="title"
            rules="required"
            v-slot="{errors}"
        >
        <d-text-input :errors="errors" v-model="itemLocal.title" class="border w-100 rounded-2" label="السؤال" > 
        </d-text-input>
    </validationProvider>
    </div>
    <div v-if="itemLocal.options.length===0" class="add-quetion-item__content" >
        <h1  class="add-question-item__empty">لا يوجد اختيارات</h1>
    </div>
    <div v-else class="add-quetion-item__content mt-3">
    <div v-for="(o,i) in itemLocal.options" :key="i" class="form-check form-check-option mt-1" :class="{'correct-answer':o.is_correct}">
                <input  class="form-check-input" v-model="value_" type="radio" :name="`exampleRadios-${item.uuid}`" :id="`exampleRadios-${o.id}`" :value="o.id">
                <label @dblclick="editOption(o,i)" class="form-check-label clickable" :for="`exampleRadios-${item.uuid}`">
                  {{o.title}} <i>[{{o.id}}]</i>
    </label>
    </div>
    </div>
</ValidationObserver>
</div>
<div class="add-question-item__footer mt-3 text-end flex-shrink-0">
                        <button @click="save" :disabled="adding" class="btn bg-main text-white px-3"
                            role="button">
                            <i class="fa fa-spinner fa-spin" v-if="adding"></i>
                           {{ this.itemLocal.id?$t('question-modification') :$t('new-question') }}
                        </button>
</div>
</div>
</template>

<script>
import academyAPI from '@/services/api/academy'
export default {
    props:{
        label:{},
        item:{}
    },
data:(vm)=>{
    return{
        itemUUID:vm.generateRandomString(8),
        value_:null,
        isCorrect:false,
        loading:false,
        adding:false,
        itemLocal:{...vm.item},
        opt:{
            title:'',id:'',
            is_correct:0,
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
    isCorrect(){
        this.opt.is_correct = this.isCorrect?1:0
    },
    itemLocal:{
        deep:true,
        handler(){
            this.$emit('update',{...this.itemLocal})
        }
    }
},
methods:{
    async save(){
        this.adding = true;
        let valid = await this.$refs.form.validate();
        if(!valid){
        this.adding = false;

            return;
        }
            if(this.itemLocal.options.length<=1){
                let message = "على اقل اختيارين لكل سؤال";
                window.SwalError(message);
                this.adding = false;
            }
            let form= {
                title:this.itemLocal.title,
                options:this.itemLocal.options.map(o=>o.title),
                question_values:this.itemLocal.options.map(o=>o.id),
                corrects:this.itemLocal.options.map(o=>o.is_correct),
            }

            let formData = this.loadObjectToForm(form); 
        try {
            let {data} =  await academyAPI.examsAPI.addQuestion(this.item.exam_id,formData)
            if(data.success){
                this.itemLocal.id= data.data.question_id
            }else{
                window.SwalError(data.message)
            }
        } catch (error) {
            console.mylog('error',error)
        }
        this.adding = false;
    },
    editOption(newOpt,index){
        console.mylog('ssset',newOpt,index)
        this.opt = Object.assign(this.opt,newOpt)
        this.isCorrect = this.opt.is_correct === 1
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
        this.opt.is_correct=0,
        this.isCorrect=false,
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
.border-botton-thin{
    border-bottom: 1px solid #f1f1f1;
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
.form-check-option{
    border-radius: 8px;
    padding: 10px 10px;

}
.form-check{
    align-items: center;
    display: flex;
}
.form-check>input{
    margin: 0;
    flex-shrink: 0;
}
.form-check>label{
    margin-right: .5rem;
    margin-left: .5rem;
    flex:1
}
.correct-answer{
    background: #659f0c73;
    
}
</style>