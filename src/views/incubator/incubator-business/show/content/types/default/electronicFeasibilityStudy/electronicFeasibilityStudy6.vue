<template>
  <div class="container">
    <div class="mt-3">

      <p>
        أنواع وأقسام السوق من الممكن توضيح نوعية السوق للمنتج كالتالي:
      </p>
      <p style="color:gray; font-size:20px">
        1. أفقي أو رأسي: (يتم اختيار نوع السوق حسب كل مشروع)
      </p>
      <p style="color:gray; font-size:20px">
        الأسواق الأفقية: وهي التي تخدم أنواع عديدة من العملاء على حد سواء. وهذه الأسواق تتميز بالتشتت النوعي لإن مبيعاتها
        تختلف بين أنواع مختلفة من العملاء.
      </p>
      <p style="color:gray; font-size:20px">
        الأسواق الرأسية: وهي أسواق تقتصر على توفير المنتجات للعملاء ذوي طبيعة واحدة في استخدامهم للمنتج، وهذه الأسواق
        تتميز
        بالتمركز نظراً لعدم وجود هذا التنوع في العملاء.
      </p>

    </div>
    <p>ومن الممكن تقسيم السوق حسب المعايير التالية: (يتم تحديد المعايير حسب كل مشروع):</p>
    <div class="mt-3">
      <p>المعايير الجغرافية</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text"
        placeholder='يقسم إلى سوق محلي وأجنبي، أو سوق حضر وسوق ريف.' />
    </div>
    <div class="mt-3">
      <p>المعايير الاجتماعية</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text"
        placeholder='يقسم السوق إلى سوق عائلات وسوق أفراد، أو سوق عائلات كبيرة وعائلات متوسطة وعائلات صغيرة.' />
    </div>
    <div class="mt-3">
      <p>المعايير الديموغرافيه</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text"
        placeholder='يقسم السوق إلى فئة صغار السن (الأطفال) والشباب وفئة كبار السن، أو سوق ذكور وسوق إناث.' />
    </div>
    <div class="mt-3">
      <p> المعايير التعليمية والثقافية</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder='يقسم السوق إلى سوق متعلمين وغير متعلمين' />
    </div>
    <div class="mt-3">
      <p>المعايير الصحية</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text"
        placeholder='يقسم السوق إلى سوق مرضى القلب ومرضى السكر والسمنة' />
    </div>
    <div class="mt-3">
      <p> معيار طبيعة المنتجين أو البائعين</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text"
        placeholder='يقسم السوق إلى سوق منافسة كاملة وسوق احتكار تام (طبيعي) وسوق احتكار قلة' />
    </div>
    <div>
      <h1 class="course-guest-section__title">
        تحديد استراتيجية السوق: (يتم تحديد الاستراتيجية المتبعة حسب المشروع)
        <p>
          تحديد النصيب النسبي للمشروع من السوق لها استراتيجيات فرعية:
        </p>
      </h1>

      <ul style="display:block !important;" class="course-teaching__list">
        <li v-for="(it, i) in items" :key="i">
          <img src="@/assets/img/ul_strategy.png">
          {{ it.text }}
        </li>
      </ul>
    </div>


    <div class="mt-3 col-12">
      <p>
        جدول تحديد أدوات التسويق(4Ps):
      </p>
      <p>
        (لمعرفة كل من الخدمات/السلع المقدمة في المشروع، كذلك الأسعار هل هي تنافسية أو احتكارية، وما هي طرق الترويج
        والتسويق للإعلان عن الخدمات/ السلع المقدمة، وأخيرا ذكر السبب من اختيار الموقع لإقامة المشروع فيه)</p>
      <table class="mt-5 col-12">
        <thead>
          <tr>
            <th>المنتجات والخدمات (Product)
               العدد والمواصفات وخدمات ما بعد البيع والضمان</th>
            <th>السعر (Price) 
              نسبة الخصم وشروط الدفع طرق التمويل</th>
            <th>الترويج (Promotion) الإعلان والعلاقات العامة والعينات والمبيعات الشخصية.v</th>
            <th>الموقع (Place) 
              قنوات التوزيع مثل الجملة والتجزئة والبيع المباشر والتوزيع في كل قناة ووقت التوصيل وكميات المخزون وطرق النقل
              والمواصلات.
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
        </tbody>

      </table>
    </div>
    <div class="mt-3">
      <p>
        الاستراتيجيات التسويقية:
      </p>
      <p>
        تحديد علاقة المنتج بالسوق:
      </p>
      <p>
        لها استراتيجيات فرعية:
      </p>
      <ul style="display:block !important;" class="course-teaching__list">
        <li v-for="(it, i) in items2" :key="i">
          <img src="@/assets/img/ul_strategy.png">
          {{ it.text }}
        </li>
      </ul>
    </div>
    <div class="mt-3">
      <p>
        استراتيجية تحديد الموقف التنافسي للمشروع:
      </p>
      <p>
        لها استراتيجيات فرعية:
      </p>
      <ul style="display:block !important;">
        <li>
          استراتيجية المنافسة: إذا كان المشروع قادراً على المنافسة من خلال إتباع أساليب تمييزية، أو كان السوق في مرحلة
          الاستقرار أو الانكماش.
        </li>
      </ul>
      <p>
        استراتيجية توسيع السوق:
        <span style="font-size:smaller; color: gray !important;">
          إذا كان المشروع غير قادر على المنافسة فتح فروع في مناطق جديدة، أو كان السوق في مرحلة
          النمو.
        </span>
      </p>
    </div>
  </div>
</template>
<script>

export default {
  data: () => {
    return {
      items: [
        { value: null, text: 'استراتيجية قيادة التكلفة: رفع الطاقة الإنتاجية / وفورات الحجم / الرقابة على العمال.' },
        { value: 'a', text: 'استراتيجية التمييز: أي يقصد بها البحث والتطوير.' },
        { value: 'b', text: 'استراتيجية التركز: أي التركز على منطقة جغرافية معينة أو فئة معينة من المجتمع.' },
      ],
      items2: [
        { value: 'h', text: 'الاختراق: اختراق السوق بخفض الأسعار أو الإعلانات. ' },
        { value: 'd', text: 'تطوير السوق: منطقة جديدة أو فئة جديدة / منافذ توزيع جديدة.' },
        { value: 'g', text: 'تطوير المنتج: تطوير المنتج بإضافة مميزات وخصائص جديدة.' },
      ]
    }
  },
  methods: {



  },
  mounted() {

  }
}
</script>

<style scoped>
label {
  width: 100%;
  text-align: start;
}

.img-zone {
  max-width: 430px;
}

p {
  font-size: 20px;
}

th,
td {
  height: 50px;
}

th,
td,
table {
  border: 1px solid rgba(200, 204, 204, 1);
  text-align: center;
}

th {
  font-weight: 200;
  padding: 10px 15px;
  background: #E3F1F1;
  color: #0F7774;
  border-top: 0px !important;
  border-right: 1px solid rgba(31, 185, 179, 0.5) !important;
  border-left: 1px solid rgba(31, 185, 179, 0.5) !important;
}

table {
  border-right: 1px solid rgba(31, 185, 179, 0.5) !important;
  border-left: 1px solid rgba(31, 185, 179, 0.5) !important;
  border-top: 0px !important;
  border-radius: 25px;
}

td input {
  width: 100%;
  height: 100%;
  border: 0;
}

.course-teaching__list {
  list-style: none;
  padding: 0%;
  margin: 0%;
}

.course-teaching__list li {
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 5px;
}

.course-teaching__list li img {
  object-fit: cover;
  width: 50px;
  height: 50px;
}
</style>



