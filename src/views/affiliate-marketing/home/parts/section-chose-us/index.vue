<template>
    <div class="container-fluid col-12" style="background: #F4FBFB; padding: 50px 15%;">
        <div class="row justify-content-center text-center mb-4">
            <span style="color: #FFBE39; font-size: 24px">
                خطوه بخطوه
            </span>
            <h2 class="mt-2" style="color: #2EB9B3">
                كيف تبدأى الأن بكل بساطه
            </h2>
        </div>
        <div class="row">
            
            <div class="col-3 text-center">
                <div class="icon d-flex icon-4 justify-content-center">
                    <div>

                        <img src="@/assets/af-icons/Coin/Filled.svg" alt="">
                    </div>
                </div>
                <div class="content row">
                    <h4>
                        الحصول علي عمولة
                    </h4>
                    <span>
                        عندما ينقر أحد الزوار على رابط الإحالة الخاص بك ويشتري منتجًا أو خدمة، ستحصل على عمولة . عادةً ما يتم دفع العمولات شهريًا أو ربع سنويًا. ستتلقى إشعارًا عبر البريد الإلكتروني أو البريد العادي عندما تستحق العمولات. بمجرد حصولك على العمولات، يمكنك سحبها إلى حسابك المصرفي أو استخدامها لشراء منتجات أو خدمات من المنصة.  </span>
                </div>
            </div>

            <div class="col-3 text-center">
                <div class="icon d-flex icon-3 justify-content-center">
                    <div>

                        <img src="@/assets/af-icons/Calendar/Filled.svg" alt="">
                    </div>
                </div>
                <div class="content row">
                    <h4>
                        التسويق للمنصة
                    </h4>
                    <span>
                        الآن بعد أن حصلت على الروابط والمحتوي، يمكنك البدء في التسويق للمنصة. يمكنك القيام بذلك باستخدام مجموعة متنوعة من الأساليب، 
وسائل التواصل الاجتماعي
التسويق عبر البريد الإلكتروني
التسويق عبر محركات البحث
الإعلانات المدفوعة  </span>
                </div>
            </div>

            <div class="col-3 text-center">
                <div class="icon d-flex icon-2 justify-content-center">
                    <div>
                        <img src="@/assets/af-icons/Clock/Filled.svg" alt="">
                    </div>
                </div>
                <div class="content row">
                    <h4>
                        الحصول علي الروابط والمحتوي 
                    </h4>
                    <span>

                        بالإضافة إلى الروابط، ستحصل أيضًا على محتوى خاص يمكنك استخدامه للترويج للمنتجات أو الخدمات. هذا المحتوى قد يشمل ما يلي:
                        المحتوى المكتوب، مثل المقالات أو المراجعات
                        المحتوى المرئي، مثل مقاطع الفيديو أو الصور
                        المحتوى الصوتي، مثل البودكاست أو ملفات الصوت
                    </span>
                </div>
            </div>

            <div class="col-3 text-center">
                <div class="icon d-flex icon-1 justify-content-center">
                    <div>

                        <img src="@/assets/af-icons/User/filled.svg" alt="">
                    </div>
                </div>
                <div class="content row">
                    <h4>
                        التسجيل
                    </h4>
                    <span>
                        سجلي كمسوقة بالعمولة وابدأي العمل معنا عادةً ما يكون هذا إجراءً بسيطًا يتضمن تقديم بعض المعلومات الشخصية الأساسية، مثل اسمك وعنوان بريدك الإلكتروني وعنوانك.
                    </span>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script></script>
<style scoped>

.icon div {
    background: white;
    width: 75px;
    height: 75px;
    padding: 10px;
    border-radius: 30%;
    padding: 20px;
    box-shadow: 0px 0px 6px 1px lightgrey;
    margin-bottom: 30px;
    position: relative;
}

.icon-1 div::before, .icon-3 div::before {
    position: absolute;
    content: '';
    width: 130px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-image: url('~@/assets/af-icons/Arrow1.png');
    background-size: contain;
    background-repeat: no-repeat;
    bottom: -10px;
    right: -150px;
}

.icon-2 div::before {
    position: absolute;
    content: '';
    width: 130px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-image: url('~@/assets/af-icons/Arrow2.png');
    background-size: contain;
    background-repeat: no-repeat;
    top: 15px;
    right: -150px;
}

.icon div::after {
    position: absolute;
    content: '';
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #FFBE39;
    top: 0;
    right: -20px;
    border-radius: 50%;
}
.content h4 {
    color: #2EB9B3
}
.icon-1 div::after {
    content: '1';
}
.icon-2 div::after {
    content: '2';
}
.icon-3 div::after {
    content: '3';
}
.icon-4 div::after {
    content: '4';
}
</style>