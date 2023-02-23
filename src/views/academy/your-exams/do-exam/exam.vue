<template>
 <div style="margin-top: 96px;" class="bg-body-page">
    <div class="container pt-5">
<div class="do-exam">
    <div class="do-exam__wrapper">
        <div class="do-exam__header">
            <div class="do-exam__header-start">
            <h1 class="do-exam__title">اختبار 1 : {{itemPage.title}}</h1>
        </div>
            <div class="do-exam__header-end">
                <d-dots-progress :dots="itemPage.number_questions" :value="step" />
            </div>
        </div>
        <div class="do-exam__body">
            <d-overlays-simple v-if="loading" />
            <div v-else-if="hasError">
            <p>هناك خطا غير معروف</p>
            <button class="btn btn-custmer" @click="loadQuestion">إعادة تحميل السؤال</button>
            </div>
            <div v-else class="position-relative">
                <d-overlays-simple v-if="responsing"/>
                <div  v-if="hasErrorResponse" class="btn-danger">
                    هناك خطب ما، من فضل اعد ارسال الجواب
                </div>
                <showQuestion @update="updateResponse" :item="currentQuestion"/>
            </div>
            <div v-if="env.NODE_ENV=='development'">
        {{ responses.map(x=>x.value) }}
    </div>
        </div>
        <div class="do-exam__footer">
            <button :disabled="step<=1  || responsing" @click="prevStep" class="btn btn-custmer btn-small">السابق</button>
            <button :disabled="step>itemPage.number_questions || responsing" @click="nextStep" class="btn btn-custmer btn-small">
                <i class="fa fa-spinner fa-spin" v-if="responsing"></i>
                إرسال الجواب</button>
        </div>
    </div>
</div>

    </div>
 </div>
</template>

<script>
import academyAPI from '@/services/api/academy';
//import dotsProgress from './dots-progress.vue';
import showQuestion from './show-question.vue';
export default {
 name:'do-exam-page',
 props:['itemPage'],
 components:{
  
    showQuestion
 },
 data:()=>{
    return  {
        env:process.env,
        loading:true,
        responsing:false,
        hasError:false,
        hasErrorResponse:false,
        step:1,
        responses:[],
        currentQuestion:{id:null,title:null,opts:[],type:'radio'}
    }
 },
 methods:{
    updateResponse(data){
            let stepResponse = this.responses.findIndex(x=>x.step==this.step)
            if(stepResponse<0){
                this.responses.push({step:this.step,value:null})
                stepResponse = this.responses.length -1;
            }
            this.responses[stepResponse].value = data
    },
   async sendResponse(){
    this.responsing = true;
    this.hasErrorResponse =  false;
    let stepResponse = this.responses.find(x=>x.step==this.step);
    if(!stepResponse) {
        this.responsing = false;
        return false;
    }
    let formData = stepResponse.value
    console.mylog('sending...',formData)
        try {
            let { data } = await academyAPI.student.setMyResponseQuestionExam(this.itemPage.id,this.step,formData)
            if(data.success){
                if(this.step==this.itemPage.number_questions){
                    this.$emit('finished',data.data);
                }
            }else{
                window.SwalError(data.message)
                this.hasErrorResponse =  true;
                
            }
        } catch (error) {
            window.DHelper.catchException.call(this,error)
            this.hasErrorResponse =  true;
        }
        this.responsing = false;
        return !this.hasErrorResponse;
    },
    prevStep(){
        this.step-=1;
    },
    async nextStep(){
       let result =await this.sendResponse()
       if(!result) return;
       if(this.step<this.itemPage.number_questions){
        this.step+=1;
        this.loadQuestion()
       }
        
    },
   async loadQuestion(){
    this.loading = true;
    this.hasError =  false;
        try {
            let { data } = await academyAPI.student.getMyQuestionExam(this.itemPage.id,this.step)
            if(data.success){
                let {options,question_values,...q} = data.data;
               q.opts=options.map((o,i)=>{
                    return {
                        id:question_values[i],
                        title:o
                    }
                })
                this.currentQuestion = Object.assign(this.currentQuestion,{id:null,title:null,opts:[]},q)
            }else{
                window.SwalError(data.message)
                this.hasError =  true;
            }
        } catch (error) {
            window.DHelper.catchException.call(this,error)
            this.hasError =  true;
        }
        this.loading = false;
    }
 },
 mounted(){
    this.step = 1;
    this.loadQuestion()
 }
}
</script>

<style scoped>
.do-exam{
    background: white;
    padding: 5px;
    border-radius: 8px;
}
.do-exam__body{
    padding:40px;
}
.do-exam__title{
    
    margin: 1px;
    padding: 0 5px;
    font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;

text-transform: capitalize;

color: #414042;
}
.do-exam__header{
    margin-top:20px;
    margin-right:10px;
    margin-left:10px;
    display: flex;
    align-items: center;
}
.do-exam__header-start{
    flex: 1;
}
.do-exam__header-end{
    flex-shrink: 0;
}
.do-exam__body{
   
    min-height: 300px;
width: calc(100% - 80px);
position: relative;
}
.do-exam__footer{
    padding: 5px;
    border-top: 1px solid #c6c6c6;
}
.do-exam__footer>button{
    min-width: 200px;
}
</style>