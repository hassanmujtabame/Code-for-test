<template>
    <div style="margin-top: 96px;">
        <div class="container shadow p-4 rounded-2">
            <div class="d-flex justify-content-between">
                <div class="">
                    <h3>
                        أضافة اختبارات
                    </h3>
                </div>
                <div class="w-25">
                    <d-text-input type="text" class="form-control border " label="عنوان الاختبار" />
                <div class="text-end mt-3">
                <button @click="addQuestion" class="btn bg-main rounded-2 px-4 text-white">
                    اضافة سؤال
                </button>
            </div>
                </div>
            </div>
           
            <form action="">
                <div class="row">
                    <div v-for="(q,i) in questions" :key="i" class="col-md-6 mt-4">
                           <AddQuestion @update="updateQuestion" :item="q"  />
                    </div>
                    <div class="mt-3 text-center">
                        <a class="btn bg-main text-white px-3"
                            role="button">
                            أرفعي الاختبار
                        </a>

                    </div>
                </div>
            </form>
        </div>
        <pre v-if="isDevelopment">
            {{ questions }}
        </pre>
    </div>
</template>

<script>
import AddQuestion from './parts/add-question.vue'
export default {
    name: 'add-exam-page',
    components:{
        AddQuestion
    },
    data:()=>{
        return {
            questions:[],
        }
    },
    methods:{
        addQuestion(){
            this.questions.push({
                title:`سؤال ${this.questions.length+1}`,
                uuid:this.generateRandomString(8),
                options:[]
            })
        },
        updateQuestion(item){
            let index =this.questions.findIndex(q=>q.uuid==item.uuid)
            if(index>-1){
                this.questions[index] = Object.assign(this.questions[index],item)
            }
        }
    },
    mounted(){
       
    }
}
</script>

<style>

</style>