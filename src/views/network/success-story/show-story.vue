<template>
        <div class="container">
            <d-overlays-simple v-if="loading" />
            <div v-else-if="hasError">
            <h1>هناك خطأ، يرجى إعادة تحميل الصفحة</h1>
            </div>
            <div class="row" v-else>
                <div class="col-md-8 ">
                    <div class="shadow p-3">
                        <h3 class="m-c">
                            رحلتي في ريادة الأعمال
                        </h3>
                        <p class="t-c">
                            تاريخ نشر: 12-4-2022
                        </p>
                        <p>
                            اسمي "هبة بنت حسن حسين فراش"، وأعتبر نفسي من النِّساء الشَّغوفات، اللاتي صنعن أنفسهُنَّ بفضل
                            الله، وأعمل في مجال تصميم الأزياء، ولقد حصلتُ على عدد كبير من الشهادات التي تخطَّت 30 شهادة
                            في مجال عملي، وأمتلك عضويَّة في مجلس الأزياء السُّعودي.

                            منذ نعومة أظافري كُنتُ مُهتمَّة بمجال تصميم الأزياء، وتأثَّرتُ كثيرًا بالفوازير
                            الاستعراضيَّة التي كانت تُقدِّمها الفنَّانة الشَّهيرة "شريهان" بجمهوريَّة مصر العربيَّة،
                            وأعتبر هذه الفنَّانة بمثابة أيقونة للجمال والأناقة، وعندما كُنتُ أُتابعها كان عُمري في ذلك
                            الحين ثلاث سنوات، وكُنتُ أذهب إلى المحلات التي تبيع الأقمشة رفقة والدتي، وهو ما شجَّعني
                            كثيرًا على الاهتمام بتصميم الأزياء، ومضى العُمر وكبرت معي أحلامي.

                            وتمثَّلت فكرة المشروع الخاصَّة بي في أن أقوم بتقديم أفضل الأزياء للنِّساء السُّعوديَّات
                            اللاتي يبحثن عن أفضل الموديلات، ولي بصمات مُميَّزة في التَّصميم، ويتمثَّل ذلك في عرض
                            التَّصميمات الكلاسيكيَّة بشكل جديد، وفلسفتي تتمثَّل في تقديم قطعة من الملابس يُمكن ارتداؤها
                            في جميع الأماكن، وفي مُختلف التَّوقيتات، والأهمُّ من ذلك هو إضفاء الجمال والأناقة على
                            المرأة.

                            أوَّل التَّصميمات التي قُمتُ بعرضها كانت تتَّسم بالبساطة، وكانت أوَّل عُروضي في عام 2008م
                            بالعاصمة اللبنانيَّة "بيروت"، ويحضرني في ذلك أحد المواقف المُهمَّة؛ حيث قامت إحدى صاحبات
                            المحلات باستيقافي، وإبداء الإعجاب بما قدَّمته من تصميمات في العرض، وتلك كانت نقطة البداية
                            والعمل بشكل مُوسَّع، وبالطبع واجهني كثير من الصُّعوبات والتَّحدِّيات، فلم يكُن مفهوم الأزياء
                            والعروض مُتداوَلًا داخل المملكة بشكل مُوسَّع، وكذلك كانت هناك صعوبة أخرى تمثَّلت في عدم وجود
                            بوتيك، وكذلك مُودلز للعرض، بالإضافة إلى المُصوِّرين المُحترفين.

                            بعد ذلك قُمتُ بافتتاح المُؤسَّسة الخاصَّة بي، وقُمتُ بعمل البراند بصورة احترافيَّة. وجدير
                            بالذِّكر أنني قد تخرَّجت في جامعة الملك سعود عام 2010م، وكُنتُ أدرس بكُليَّة الحاسب الآلي
                            ونُظُم المعلومات، غير أن ذلك لم يكُن هو المضمار الذي يشغلني ويدخل ضمن اهتماماتي، لذلك تُركتُ
                            العمل في هذا المجال، وقُمتُ بافتتاح مُؤسَّستي في مجال تصميم الأزياء.


                        </p>

                    </div>
                </div>
                <div class="col-md-4 ">

                    <div class="box ">
                        <div class="box  rounded-3 p-2">
                            <div v-if="isOwner" class="text-center">
                                <button class="btn bg-main p-1 px-2 text-white" >
                                    <img src="/assets/svg/update.svg" />
                                    تعديل
                                </button>
                                <button class="btn bg-danger p-1 px-2 text-white mx-4" >
                                    <img src="/assets/svg/trash-outline.svg" />
                                    حذف
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import MembersNetwork from './members-network/index.vue'
import StoriesApi from '@/services/api/stories.js'
export default {
    props:{
        isOwner:{
            type:Boolean,
            require:true,
        },  
        storyId:{
            type:[Number,String]
        }
    },
 name:'show-story',
 components:{
    MembersNetwork
 },
 data:()=>{
    return {
      loading:true,
      story:{},
      hasError:false,
    }
 },
 methods:{
    async initializing(){
        this.loading=true;
        this.hasError=false
        try {
            let { data } = await StoriesApi.getItem(this.storyId);
            if(data.success){
                    this.story=data.data;      
            }else{
                this.hasError=true
            }
        } catch (error) {
            console.log('error',error)
            console.log('error response',error.response)
            this.hasError=true
        }
        this.loading = false
    }
 },
 mounted(){
    this.initializing()
 }
}
</script>

<style>

</style>