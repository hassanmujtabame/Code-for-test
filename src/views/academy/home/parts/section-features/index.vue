<template>
     <div class="conatiner mt-5">
                <h2 class="home-section-title text-center">
                    مزايا أكاديمية رياديات
                                                </h2>
                <div class="row min-riadiat network">
                    <div class="col-md-3 mt-2 ">
                        <div class="academy-features-item box border d-flex gap-4 align-items-center rounded-2">

                            <div>
                                <img src="/assets/img/Group-academy.png" alt="">
                            </div>
                            <div class="academy-features-item-text">
                                دورت و معسكرات
                                تدريبة مميـــــــــزة
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-3 mt-2 ">
                        <div class="academy-features-item box border d-flex align-items-center  gap-4  rounded-2">

                            <div>
                                <img src="/assets/img/Group-academy-2.png" alt="">
                            </div>
                            <div class="academy-features-item-text">
                                جلسة ارشاديــــــــة جماعية عن بعـــــــد
                            
                            
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-3 mt-2 ">
                        <div class="academy-features-item box border d-flex align-items-center gap-4 rounded-2">

                            <div>
                                <img src="/assets/img/Group-aca-3.png" alt="">
                            </div>
                            <div class="academy-features-item-text">
                                برامج التــــــــــــدريب يقدمها نخبة مــــــن رائدات الاعمــــــــــال 
                                                                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-3 mt-2 ">
                        <div class="academy-features-item box border d-flex align-items-center gap-4 rounded-2">

                            <div>
                                <img src="/assets/img/Group-aca-4.png" alt="">
                            </div>
                            <div class="academy-features-item-text">
                                الانضمام لمجموعات  متخصصة فــي مجال اهتمامـــــــــــــــــــك
                                                                   </div>
                            
                        </div>
                    </div>

                </div>
            </div>
</template>
<script>
export default {
    name: 'academy-features'
}
</script>

<style scoped>
.academy-features-item {
    box-shadow: 0px 0px 6px 0.1px #1fb9b369;
}
.academy-features-item:hover{
    box-shadow: 0px 0px 10px 2px var( --m-color);
}
.academy-features-item-text{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */

display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;
color: #7C797E;
}
</style>