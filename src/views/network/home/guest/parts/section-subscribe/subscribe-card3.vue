<template>
  <!-- start -->
  <div class="subscription-card">
    <div class="subscription-header d-flex flex-column align-items-center">
      <h2 class="subscription-title">
        باقه الشركات
      </h2>
      <span>
        اختبر قدرات شركتك
      </span>
      <div class="subscription-price d-flex flex-column align-items-center">
        <span class="price">1000</span>
        <span class="currency">{{ $t('riyals') }}</span>
      </div>
    </div>
    <div class="subscription-features">
      <ul class="feature-list d-flex flex-row flex-wrap">
<li class="feature-item"><i class="fas fa-check-circle mx-2"></i><span>التسجيل في دليل أعضاء الشبكة مع الحصول على
            صفة خاصة بك.</span></li>
        <li class="feature-item"><i class="fas fa-check-circle mx-2"></i><span>الحصول على مجموعة خاصة من النماذج والأدوات
            المجانية لرواد الأعمال</span></li>
        <li class="feature-item"><i class="fas fa-check-circle mx-2"></i><span>حضور لقاءين شهريا عن ريادة الأعمال العامة
            والمتخصصة عن بعد تغطي موضوعات متعددة مع الحصول على شهادة.</span></li>
        <li class="feature-item"><i class="fas fa-check-circle mx-2"></i><span>عرض طلبات استثمار مع الآخرين</span></li>
        <li class="feature-item"><i class="fas fa-check-circle mx-2"></i><span>الحصول على بطاقة عضوية رياديات والاستفادة
            من مميزاتها</span></li>
        <li class="feature-item"><i class="fas fa-check-circle mx-2"></i><span>مجموعة تفاعلية</span></li>
        <li class="feature-item"><i class="fas fa-check-circle mx-2"></i><span>الحصول على استشارة متخصصة لمدة 30
            دقيقة.</span></li>
        <li class="feature-item"><i class="fas fa-check-circle mx-2"></i><span>التسجيل كشريك ورفع خصومات وعروض لأعضاء
            رياديات.</span></li>
        <li class="feature-item"><i class="fas fa-check-circle mx-2"></i><span>تمويل مشروع</span></li>
        <li class="feature-item"><i class="fas fa-check-circle mx-2"></i><span>إضافة معرض</span></li>
        <li class="feature-item"><i class="fas fa-check-circle mx-2"></i><span>الاطلاع على الخصومات والعروض المقدمة من
            الشركات</span></li>
      </ul>
    </div>
    <div class="subscription-actions w-100 d-flex justify-content-center mt-auto">
      <button class="upgrade-button" @click="$router.push({name: 'network-subscribe'})">
        عرض التفاصيل
      </button>
    </div>
  </div>
  <!-- end -->
</template>

<script>

export default {
};
</script>
<style scoped>
.subscription-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background: #f9f9f936;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  width: 30%;
}

@media screen and (max-width: 1200px) {
  .subscription-card {
    flex-direction: column;
    align-items: center;
  }

  .subscription-header {
    flex-direction: column;
    align-items: center !important;
  }

  .subscription-actions {
    align-self: center !important;
  }

}

.subscription-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.subscription-header {
  text-align: center;
  margin-bottom: 20px;
}

.subscription-title {
  font-size: 28px;
  color: #333;
  font-weight: 700;
  margin: 10px 0 10px 20px;
}

.subscription-price {
  font-size: 36px;
  display: flex;
  align-items: center;
}

.subscription-price span {
  color: #222222;
  margin-right: 5px;
}

.currency {
  font-size: 24px;
  color: #555;
  margin-left: 8px;
}

.subscription-features {
  margin-bottom: 10px;
  margin-right: 10px;
}

.features-title {
  font-size: 20px;
  color: #333;
  font-weight: 600;
  margin-bottom: 15px;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-item {
  margin: 10px 0;
  display: flex;
  align-items: center;
  color: #555;
  font-size: 18px;
}

.feature-item i {
  color: #1FB9B3;
  margin-right: 10px;
}

.subscription-actions {
  align-self: end;
}

.subscribe-button,
.upgrade-button,
.subscribed-button {
  padding: 12px 30px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  width: 180px;
  transition: all 0.3s;
}

.subscribe-button {
  background: linear-gradient(to bottom, #1FB9B3, #13a89d);
  color: #fff;
  margin-bottom: 15px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);

}

.subscribe-button:hover {
  background: linear-gradient(to bottom, #13a89d, #1FB9B3);
}

.upgrade-button {
  background: var(--pc);
  color: #fff;
  margin-bottom: 20px;

}

.upgrade-button:hover {
  opacity: 0.8;
}

.subscribed-button {
  background: #2eb9b3;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.subscribed-button:hover {
  opacity: 0.8;
}</style>