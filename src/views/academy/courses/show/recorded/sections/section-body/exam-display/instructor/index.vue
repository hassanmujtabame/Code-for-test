<template>

    <div class="container">
<div class="do-exam">
    <div class="do-exam__wrapper">
        <div class="do-exam__header">
            <div class="do-exam__header-start">
            <h1 class="do-exam__title">اختبار 1 : دورة الازياء</h1>
        </div>
            <div class="do-exam__header-end">
                <d-dots-progress :dots="questions.length" :value="step" />
            </div>
        </div>
        <div class="do-exam__body">
            <div v-for="(q,i) in questions" :key="i">
                <showQuestion @update="updateResponse" 
        :item="q"
        v-if="(i+1)==step"
        
        />
            </div>
            <div v-if="env.NODE_ENV=='development'">
        {{ responses.map(x=>x.value) }}
    </div>
        </div>
        <div class="do-exam__footer">
            <button :disabled="step<=1" @click="prevStep" class="btn btn-custmer btn-small">السابق</button>
            <button :disabled="step>=questions.length" @click="nextStep" class="btn btn-custmer btn-small">التالى</button>
        </div>
    </div>
</div>

    </div>
</template>

<script>
//import dotsProgress from './dots-progress.vue';
import showQuestion from './show-question.vue';
import academyAPI from '@/services/api/academy';
export default {
 name:'do-exam-page-instructor',
 props:{
  exam:{}
 },
 components:{
    showQuestion
 },
 watch:{
  exam:{
    deep:true,
    immediate:true,
    handler(){}
  }
 },
 data:()=>{
    return  {
        env:process.env,
        step:1,
        responses:[],
        questions:[
            {id:1,title:'مانوع  ماكينة الخياطة ؟',type:'radio',options:[
            {id:1,title:'الخيار الاول'},
            {id:2,title:'الخيار الثاني'},
            {id:3,title:'الخيار الثالث'},
            {id:4,title:'الخيار الرابع'},
            {id:5,title:'الخيار الخامس'},
        ]},
        {id:1,title:'مانوع التصاميم ؟',type:'checkbox',options:[
            {id:1,title:'الخيار الاول'},
            {id:2,title:'الخيار الثاني'},
            {id:3,title:'الخيار الثالث'},
            {id:4,title:'الخيار الرابع'},
            {id:5,title:'الخيار الخامس'},
        ]}
        ]
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
    prevStep(){
        this.step-=1;
    },
    nextStep(){
        this.step+=1;
    },
    async loadQuestions(){
            this.loading = true;
            try {
                let {data} =  await academyAPI.examsAPI.getQuestions(this.exam.id)
                if(data.success){
                
                    let questions = []
                    data.data.forEach(question=>{
                        console.mylog('question',question)
                            questions.push({
                                title:question.title,
                                id:question.id,
                                uuid:this.generateRandomString(8),
                                exam_id:this.lectureId,
                                    options:question.options.map((x,i)=>{
                                        return {id:question.question_values[i],title:x,is_correct: parseInt(question.corrects[i])}
                                    })
                            })
                    })
                    console.mylog('questions',questions)
                    this.questions = questions
                    
                }
            } catch (error) {
                console.mylog('error',error)
              //  
            }
            this.loading = false;
        }
 },
 mounted(){
    this.loadQuestions()
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
}
.do-exam__footer{
    padding: 5px;
    border-top: 1px solid #c6c6c6;
}
.do-exam__footer>button{
    min-width: 200px;
}
</style>