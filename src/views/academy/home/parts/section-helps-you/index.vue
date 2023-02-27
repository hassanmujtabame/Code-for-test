<template>
     <div class="container mt-5">
                <h2 class="home-section-title text-center">
                    أكاديمية رياديات تساعدكِ أينما تكونين
                                                </h2>
                <div class="row min-riadiat academy">
                    <div class="col-md-3 mt-2 ">
                        <CardItem src="/assets/img/location.png" title="دورات في المقرات" >
                            نقدم دورات مميزة مع افضل المدربين في كل المجالات في  المملكة والوطن العربي , مما يسمح لك بالتفاعل الحقيقي مع المدربين وزملائك في الدورة
                        </CardItem>
                    </div>
                    <div class="col-md-3 mt-2 ">
                        <CardItem src="/assets/img/pause-circle.png" title="دورات  مسجلة" >
                            تحتوى اكاديمية رياديات على دورات تعليمية مسجلة مسبقا تكون متاحة لك فور التسجيل لتشاهدها في أي وقت
                        </CardItem>
                    </div>
                    <div class="col-md-3 mt-2 ">
                        <CardItem src="/assets/img/video-play.png" title="دورات" >
                            يقدم مدربين دورات لايف تفاعلية مما يساعدك على التفاعل مع المدرب بشكل اكبر 
                        </CardItem>
                    </div>
                    <div class="col-md-3 mt-2 ">
                        <CardItem src="/assets/img/heart.png" title="الدعم و المساعدة" >
                            سنكون معك دائما خطوة بخطوة لمساعددتك على اكمال مساراتك وتقديم الدعم والاجابة عى الاستفسارات
                        </CardItem>
                    </div>

                </div>
            </div>
</template>
<script>
import CardItem from './card-item'
export default {
    name: 'academy-helps-you',
    components:{
        CardItem
    }
}
</script>

