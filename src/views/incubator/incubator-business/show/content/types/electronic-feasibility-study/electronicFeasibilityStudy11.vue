<template>
  <div class="container">
    <p class="mb-3 mt-3">قائمة الدخل المتوقعة (القيمة بالريال) للسنوات الخمس الأولى من عمر المشروع :</p>
    <div class="mt-3 col-12">
      <table class="col-12">
        <!-- <thead>
          <tr>
          </tr>
        </thead> -->
        <tbody>
          <tr>
            <td>
              السنوات
            </td>
            <td>السنة الاولى</td>
            <td>السنة التانية</td>
            <td>السنة التالثة</td>
            <td>السنة الرابعة</td>
            <td>السنة الخامسة</td>
          </tr>
          <tr>
            <th>نسبة الزيادة</th>
            <th>%</th>
            <th>%</th>
            <th>%</th>
            <th>%</th>
            <th>%</th>
          </tr>
          <tr>
            <td>الايرادات السنوية</td>
            <td>إجمالي جدول رقم 10</td>
            <td>(إجمالي جدول 10 * النسبة) + إجمالي جدول 10</td>
            <td>(إيراد س2 * النسبة) + إيراد س2</td>
            <td>(إيراد س3 * النسبة) + إيراد س3</td>
            <td>(إيراد س4 * النسبة) + إيراد س4</td>
          </tr>

          <tr>
            <th>نسبة الزيادة</th>
            <th>%</th>
            <th>%</th>
            <th>%</th>
            <th>%</th>
            <th>%</th>
          </tr>
          <tr>
            <td>_ التكاليف المتغيرة</td>
            <td>إجمالي جدول رقم 3</td>
            <td>(إجمالي جدول 3 * النسبة) + جدول 3</td>
            <td>(تكاليف س2 * النسبة) + تكاليف س2</td>
            <td>(تكاليف 3 * النسبة) + تكاليف س3</td>
            <td>(تكاليف س4 * النسبة) + تكاليف س4</td>
          </tr>
          <tr>
            <td>= اجمالي ربح النشاط</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>نسبة الزيادة</th>
            <th>%</th>
            <th>%</th>
            <th>%</th>
            <th>%</th>
            <th>%</th>
          </tr>
          <tr>
            <td>_ التكاليف الثابتة</td>
            <td>إجمالي جدول رقم 4</td>
            <td>(إجمالي جدول 4 * النسبة) + جدول 4</td>
            <td>(تكاليف س2 * النسبة) + تكاليف س2</td>
            <td>(تكاليف 3 * النسبة) + تكاليف س3</td>
            <td>(تكاليف س4 * النسبة) + تكاليف س4</td>
          </tr>
          <tr>
            <td>_ الاهلاك</td>
            <td>إجمالي الإهلاك السنوي جدول 5</td>
            <td>إجمالي الإهلاك السنوي جدول 5</td>
            <td>إجمالي الإهلاك السنوي جدول 5</td>
            <td>إجمالي الإهلاك السنوي جدول 5</td>
            <td>إجمالي الإهلاك السنوي جدول 5</td>
          </tr>
          <tr>
            <td>= صافي ربح النشاط</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

    </div>
    <div class="mt-3 col-md-12">
      <table>
        <tbody>
          <tr>
            <th>_ الزكاة 2.5%</th>
            <th>إجمالي جدول رقم صافي الربح
              * 2.5%</th>
            <th>صافي الربح * 2.5%
            </th>
            <th>صافي الربح
              * 2.5%</th>
            <th>صافي الربح
              * 2.5%</th>
            <th>صافي الربح
              * 2.5%</th>
          </tr>
          <tr>
            <td>_ ضريبة القيمة المضافة 15%</td>
            <td>(إيراد سنة 1*15%- التكاليف *15%)</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>= صافي الربح القابل للتوزيع</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-3 col-12">
      <p>
        <span>المؤشرات المالية والاقتصادية لتقييم المشروع : </span>
      </p>
      <span>1- معدل العائد على رأس المال المستثمر :</span>
      <p class="mt-3">معدل العائد على رأس المال المستثمر = (صافي الربح ÷ رأس المال المستثمر) ×100</p>
      <table class="col-12">
        <!-- <thead>
          <tr>
          </tr>
        </thead> -->
        <tbody>
          <tr>
            <th>
              السنوات
            </th>
            <th>السنة الاولى</th>
            <th>السنة التانية</th>
            <th>السنة التالثة</th>
            <th>السنة الرابعة</th>
            <th>السنة الخامسة</th>
          </tr>
          <tr>
            <td><span>العائد على الرأسمال المستثمر</span><span>البيان</span></td>
            <td>إجمالي جدول رقم 10</td>
            <td>(إجمالي جدول 10 * النسبة) + إجمالي جدول 10</td>
            <td>(إيراد س2 * النسبة) + إيراد س2</td>
            <td>(إيراد س3 * النسبة) + إيراد س3</td>
            <td>(إيراد س4 * النسبة) + إيراد س4</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:20px; color:gray;">يجب مقارنة النتائج مع المعدل السائد في البنوك 3.5.</p>
    </div>
    <div class="mt-3 col-12">
      <span>2-معيار فترة الاسترداد</span>
      <table class="col-12">
        <!-- <thead>
          <tr>
          </tr>
        </thead> -->
        <tbody>
          <tr>
            <th>
              السنوات
            </th>
            <th>السنة الاولى</th>
            <th>السنة التانية</th>
            <th>السنة التالثة</th>
            <th>السنة الرابعة</th>
            <th>السنة الخامسة</th>
            <th>الإجمالي</th>
          </tr>
          <tr>
            <td>صافي الارباح</td>
            <td>صافي الربح س1</td>
            <td>صافي الربح س2</td>
            <td>صافي الربح س3</td>
            <td>صافي الربح س4</td>
            <td>صافي الربح س5</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-3 col-12">
      <p>- متوسط صافي التدفقات النقدية = مجموع الأرباح السنوية ÷ عدد السنوات (5 سنوات)</p>
      <p>- معيار فترة الاسترداد = رأس مال المستثمر ÷ متوسط صافي التدفقات النقدية</p>
      <p> أي أن الفترة اللازمة لاسترداد رأس المال على هيئة أرباح صافية في المتوسط ستكون ..................</p>
      <span>1- معيار صافي القيمة الحالية للتدفقات النقدية</span>
      <p>
        معيار صافي القيمة الحالية للتدفقات النقدية = إجمالي القيمة الحالية لصافي التدفقات النقدية ــ رأس المال المستثمر
      </p>

    </div>
    
    <table class="col-12 mt-3 ">
      <thead>
        <tr>
          <th>_ الزكاة 2.5%</th>
          <th>صافي الربح * 2.5%</th>
          <th>صافي الربح * 2.5%</th>
          <th>صافي الربح * 2.5%</th>
          <th>صافي الربح * 2.5%</th>
          <th>صافي الربح * 2.5%</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>_ ضريبة القيمة المضافة 15%</td>
          <td>(إيراد سنة 1*15%- التكاليف *15%)</td>
          <td><input /> </td>
          <td><input /> </td>
          <td><input /> </td>
          <td><input /> </td>

        </tr>
        <tr>
          <td>= صافي الربح القابل للتوزيع</td>
          <td><input /> </td>
          <td><input /> </td>
          <td><input /> </td>
          <td><input /> </td>
          <td><input /> </td>
        </tr>

      </tbody>

    </table>
    <div>
      <p class="m-c">المؤشرات المالية والاقتصادية لتقييم المشروع :</p>
      <p class="m-c">1- معدل العائد على رأس المال المستثمر :</p>
      <p>معدل العائد على رأس المال المستثمر = (صافي الربح ÷ رأس المال المستثمر) ×100</p>
    </div>
    <table class="col-12 my-3 ">
      <thead>
        <tr>
          <th></th>
          <th>السنة الأولى</th>
          <th>السنة الثانية</th>
          <th>السنة الثالثة</th>
          <th>السنة الرابعة</th>
          <th>السنة الخامسة</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>العائد على الرأسمال المستثمر
            البيان
          </td>
          <td><input /> </td>
          <td><input /> </td>
          <td><input /> </td>
          <td><input /> </td>
          <td><input /> </td>

        </tr>
        <tr>
          <td>= صافي الربح القابل للتوزيع</td>
          <td><input /> </td>
          <td><input /> </td>
          <td><input /> </td>
          <td><input /> </td>
          <td><input /> </td>
        </tr>

      </tbody>

    </table>
    <p class="t-c">يجب مقارنة النتائج مع المعدل السائد في البنوك 3.5.</p>
    <p class="m-c my-3">2-معيار فترة الاسترداد</p>
    <table class="col-12 mt-3 ">
      <thead>
        <tr>
          <th></th>
          <th>البيان</th>
          <th>السنة الأولى</th>
          <th>السنة الثانية</th>
          <th>السنة الثالثة</th>
          <th>السنة الرابعة</th>
          <th>السنة الخامسة</th>
          <th>الإجمالي</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>صافي الارباح</td>
          <td> صافي الربح س1</td>
          <td> صافي الربح س2</td>
          <td>صافي الربح س3صافي الربح س4صافي الربح س5 </td>
          <td>صافي الربح س4صافي الربح س5 </td>
          <td> صافي الربح س5</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <p>- متوسط صافي التدفقات النقدية = مجموع الأرباح السنوية ÷ عدد السنوات (5 سنوات)
      - معيار فترة الاسترداد = رأس مال المستثمر ÷ متوسط صافي التدفقات النقدية
      أي أن الفترة اللازمة لاسترداد رأس المال على هيئة أرباح صافية في المتوسط ستكون ..................
      <br />
      <span class="m-c"> 3- معيار صافي القيمة الحالية للتدفقات النقدية </span>
      <br />

      معيار صافي القيمة الحالية للتدفقات النقدية = إجمالي القيمة الحالية لصافي التدفقات النقدية ــ رأس المال المستثمر
    </p>

    <table class="col-12 my-3 ">
      <thead>
        <tr>
          <th>السنة</th>
          <th>التدفقات النقدية الداخلة</th>
          <th>التدفقات النقدية الخارجة</th>
          <th>صافي التدفقات النقدية</th>
          <th>القيمة الحالية للريال عند سعر خصم 10%</th>
          <th>صافي القيمة الحالية للتدفقات النقدية</th>
        </tr>
      </thead>
      <tbody>
        <tr>

          <td> 0</td>
          <td> </td>
          <td>رأس المال </td>
          <td>داخلة - خارجة </td>
          <td> 0.1</td>
          <td>صافي التدفقات * القيمة الحالية للريال عند الخصم </td>
        </tr>
        <tr>
          <td>1</td>
          <td>الإيرادات س ١</td>
          <td>التكاليف السنوية</td>
          <td>داخلة - خارجة</td>
          <td>0.909</td>
          <td>صافي التدفقات * القيمة الحالية للريال عند الخصم</td>
        </tr>
        <tr>
          <td>2</td>
          <td>الإيرادات س 2</td>
          <td>التكاليف السنوية</td>
          <td>داخلة - خارجة</td>
          <td>0.826</td>
          <td>صافي التدفقات * القيمة الحالية للريال عند الخصم</td>
        </tr>
        <tr>
          <td>3</td>
          <td>الإيرادات س 3</td>
          <td>التكاليف السنوية + نسبة الزيادة</td>
          <td>داخلة - خارجة</td>
          <td>0.751</td>
          <td>صافي التدفقات * القيمة الحالية للريال عند الخصم</td>
        </tr>
        <tr>
          <td>4</td>
          <td>الإيرادات س 4</td>
          <td>التكاليف السنوية + نسبة الزيادة</td>
          <td>داخلة - خارجة</td>
          <td>0.909</td>
          <td>صافي التدفقات * القيمة الحالية للريال عند الخصم</td>
        </tr>
        <tr>
          <td>5</td>
          <td>الإيرادات س 5</td>
          <td>التكاليف السنوية + نسبة الزيادة</td>
          <td>داخلة - خارجة</td>
          <td>0.621</td>
          <td>صافي التدفقات * القيمة الحالية للريال عند الخصم</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <p>القيمة الحالية لصافي التدفقات النقدية =</p>
    <p>
      والإشارة الموجبة القيمة الحالية لصافي التدفقات النقدية تدل أن المشروع له ربحية وجدوى اقتصادية تبعاً لهذا المعيار
    </p>
    <p class="m-c">4- معيار دليل الربحية :</p>
    <p>معيار دليل الربحية = مجموع القيم الحالية لصافي التدفقات السنوية ÷ رأس المال المستثمر</p>
    <p>في حال كان الناتج أكبر من الواحد الصحيح أي أن المشروع مجدي ماليًا</p>
    <p class="m-c">5-تحليل الحساسية :</p>
    <p class="m-c">● نسبة المنافع/ التكاليف</p>
    <p>القيمة الحالية للعوائد الصافية / القيمة الحالية للتكاليف الاستثمارية ( جدول7)</p>
    <p>أي أن التكاليف يجب أن ترتفع بنسبة ( ) حتى يتحول المشروع من رابح الى خاسر.</p>
    <p class="m-c">● مقلوب نسبة المنافع / التكاليف</p>
    <p>القيمة الحالية للتكاليف الاستثمارية ( جدول7) / القيمة الحالية للعوائد الصافية</p>
    أي أن الإيرادات ( المنافع ) لابد أن تنخفض بنسبة ( ) حتى يتحول المشروع من رابح إلى خاسر.
  </div>
</template>
<script>

export default {
  data: (vm) => {
    return {
      loading: false,
      group: 'add-blog',
      showDialog: false,
      items: [{ name: 'منشأة فردية', id: '1' }, { name: 'شركة تضامن', id: '2' }, { name: 'شركة توصية', id: '3' }, { name: 'ذات مسئولية محدودة', id: '4' }],
      stateValue: '',
      idImage: `image-selected-${vm.generateRandomString(8)}`,
      url: `${vm.publicPath}assets/svg/Group 1171275983.svg`,
      file: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]

    }
  },
  methods: {

    makeImageEmpty() {
      this.file = null;
      window.$('#' + this.idImage)
        .attr('src', 'none')
        .css('opacity', '0');
    },
    async uploadImage(evt, validate) {
      let resValid = await validate(evt)
      if (!resValid.valid) {
        this.makeImageEmpty();
        return;
      }
      if (!evt.target.files && !evt.target.files[0]) {
        this.makeImageEmpty();
        return;
      }
      this.file = evt.target.files[0];
      var reader = new FileReader();
      reader.onload = (e) => {
        console.log('result', e, this.idImage)
        window.$('#' + this.idImage)
          .attr('src', e.target.result)
          .css('opacity', '1');

      };
      reader.readAsDataURL(this.file);
    },

    openDialog() {
      this.loading = false;
      window.$('#' + this.idImage)
        .attr('src', 'none')
        .css('opacity', '0');
      return true;
    },


  },
  mounted() {

    // this.openDialog()
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
  background: rgba(227, 241, 241, 1);
  color: rgba(15, 119, 116, 1);
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
</style>

