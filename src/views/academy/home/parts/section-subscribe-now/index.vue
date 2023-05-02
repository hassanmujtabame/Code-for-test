<template>
  <div class="container mt-5">
            <div class="row align-items-center justify-content-between m-auto">
                <div class="col-12 col-md-5">
                    <div>
                        <div class="bg-back position-relative">
                            <img  class="img-fluid" :src="`${publicPath}assets/img/Rectangle 1777_2.png`" alt="">
                       
                        </div>
                    </div>

                </div>
                <div class="col-12 col-md-6 text">
                    <h2 class="home-section-title">
                        اشتركى فى الاكاديميه الان
                    </h2>
                    <p class="home-section-text">
                        باشتراكك في اكاديمية ريايات ستتمكنين من الحصول على  الدورات التدريبة  باسعار مخفضة بدلا من شراء كل دورة على حدى كما انك ستحصلين على العديد من المميزات و من أهم هذه المميزات  :
                    </p>
                    <p class="text-list">
                        <d-flower-icon /> الحصول على عضوية في شبكة رياديات
                    </p>
                    <p class="text-list">
                        <d-flower-icon /> توفير فرص وظيفية في نفس المجال
                    </p>
                    <p class="text-list">
                        <d-flower-icon /> فرصة تقديم الخدمات في منصة مقدمي خدمة رياديات
                    </p>
                </div>

            </div>
           
    
        </div>
</template>

<script>
export default {
name:'section-2'
}
</script>

<style scoped>
.home-section-text{
   margin: 0;
}
.text-list{
    font-size: 20px;
line-height: 24px;
/* or 120% */

display: flex;
align-items: center;
text-align: start;
text-transform: capitalize;
margin: 0;
color: #979797;
}
</style>