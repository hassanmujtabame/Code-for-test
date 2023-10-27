<template>
  <div class="container">

    <div class="mt-3">
      <p>عنوان المشروع</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text"
        placeholder="ويتم اختيار المنطقة والحي بشكل مبدئي، والتي سيتم التأكد منه في جداول لاحقه" />
    </div>

    <div class="mt-3">
      <p> بريد إلكتروني</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" />
    </div>
    <div class="mt-3">
      <p> عنوان إلكتروني</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" />
    </div>

    <div class="mt-3">
      <p>هاتف</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" />
    </div>
    <div class="mt-3">
      <p>تصنيف المشروع</p>
    </div>
    <div class="mt-3">
      <p>من الناحية الانشائية</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="هل المشروع جديد أو توسعة أو إعادة تأهيل؟" />
    </div>

    <div class="mt-3 col-12">
      <p>الأفق الزمني للمشروع: (توضيح الفترة اللازمة بالشهور)</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>الفترة</th>
            <th>بداية</th>
            <th>نهاية</th>
            <th>طول الفترة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>فترة الإنشاء </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td>فترة الإنتاج أو الخدمة </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>

        </tbody>

      </table>
    </div>

    <div class="mt-3 col-12">
      <p>الجدول الزمني لإنشاء المشروع: (يتم ذكر الأشهر المخصصة لكل مرحلة وتظليلها عند مرحلتها)</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>المرحلة</th>
            <th>شهر</th>
            <th>شهر</th>
            <th>شهر</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1- إعداد دراسة الجدوى الاقتصادية وخطة العمل</td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td>2- التسجيل واستخراج التراخيص </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td>3- تحليل النظام</td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td>4- استئجار الأراضي والمباني وشراء الآلات والمعدات والاحتياجات الأخرى</td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td>5- موقع إلكتروني وحسابات تواصل اجتماعي</td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>

          <tr>
            <td>6- تركيب الآلات والمعدات ولوازم التأثيث</td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td>7- التشغيل التجريبي وتشغيل العاملين</td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td>8- بداية الانتاج</td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>

        </tbody>

      </table>
    </div>
    <div class="mt-3">
      <p>اختيار الموقع المقترح: (يتم الاستغناء عن تعبئة البيانات المتعلقة بالموقع في حال كان مكان المشروع هو المنزل أو
        تطبيق أو موقع الكتروني)</p>
    </div>

    <div class="mt-3 col-12">
      <p>
        مرحلة التصفية الأولى: (اذكر على الأقل 5 مواقع للمقارنة بينهم من حيث النقاط الموضحة بالجدول من خلال كتابة الأرقام من 1 إلى 5)      </p>
      <p>
        5 ممتاز، 4 جيد جداً، 3 جيد، 2 مقبول، 1ضعيف
      </p>

      <table class="mt-3 col-12">
        <thead>
          <tr>
            <th>العناصر الأساسية لخدمة المشروع</th>
            <th>موقع 1</th>
            <th>موقع 2</th>
            <th>موقع 3</th>
            <th>موقع 4</th>
            <th>موقع 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>توفر المرافق العامة (كهرباء وماء)</td>
            <td><input min="1" max="5" type="number" v-model="site1._1" /></td>
            <td><input min="1" max="5" type="number" v-model="site2._1" /></td>
            <td><input min="1" max="5" type="number" v-model="site3._1" /></td>
            <td><input min="1" max="5" type="number" v-model="site4._1" /></td>
            <td><input min="1" max="5" type="number" v-model="site5._1" /></td>
          </tr>
          <tr>
            <td>مدى توفر الطرق والمواصلات</td>
            <td><input min="1" max="5" type="number" v-model="site1._2" /></td>
            <td><input min="1" max="5" type="number" v-model="site2._2" /></td>
            <td><input min="1" max="5" type="number" v-model="site3._2" /></td>
            <td><input min="1" max="5" type="number" v-model="site4._2" /></td>
            <td><input min="1" max="5" type="number" v-model="site5._2" /></td>
          </tr>
          <tr>
            <td>القرب من سكن العمالة</td>
            <td><input min="1" max="5" type="number" v-model="site1._3" /></td>
            <td><input min="1" max="5" type="number" v-model="site2._3" /></td>
            <td><input min="1" max="5" type="number" v-model="site3._3" /></td>
            <td><input min="1" max="5" type="number" v-model="site4._3" /></td>
            <td><input min="1" max="5" type="number" v-model="site5._3" /></td>
          </tr>
          <tr>
            <td>مدى توفر الخدمات الاجتماعية</td>
            <td><input min="1" max="5" type="number" v-model="site1._4" /></td>
            <td><input min="1" max="5" type="number" v-model="site2._4" /></td>
            <td><input min="1" max="5" type="number" v-model="site3._4" /></td>
            <td><input min="1" max="5" type="number" v-model="site4._4" /></td>
            <td><input min="1" max="5" type="number" v-model="site5._4" /></td>
          </tr>
          <tr>
            <td>لإيجار/البناء</td>
            <td><input min="1" max="5" type="number" v-model="site1._5" /></td>
            <td><input min="1" max="5" type="number" v-model="site2._5" /></td>
            <td><input min="1" max="5" type="number" v-model="site3._5" /></td>
            <td><input min="1" max="5" type="number" v-model="site4._5" /></td>
            <td><input min="1" max="5" type="number" v-model="site5._5" /></td>
          </tr>

          <tr>
            <td>مدى توفر شبكات الصرف الصحي</td>
            <td><input min="1" max="5" type="number" v-model="site1._6" /></td>
            <td><input min="1" max="5" type="number" v-model="site2._6" /></td>
            <td><input min="1" max="5" type="number" v-model="site3._6" /></td>
            <td><input min="1" max="5" type="number" v-model="site4._6" /></td>
            <td><input min="1" max="5" type="number" v-model="site5._6" /></td>
          </tr>
          <tr>
            <td>الحاجة إلى الترميم</td>
            <td><input min="1" max="5" type="number" v-model="site1._8" /></td>
            <td><input min="1" max="5" type="number" v-model="site2._8" /></td>
            <td><input min="1" max="5" type="number" v-model="site3._8" /></td>
            <td><input min="1" max="5" type="number" v-model="site4._8" /></td>
            <td><input min="1" max="5" type="number" v-model="site5._8" /></td>
          </tr>
          <tr>
            <td>القرب من سكن مالك المشروع</td>
            <td><input min="1" max="5" type="number" v-model="site1._9" /></td>
            <td><input min="1" max="5" type="number" v-model="site2._9" /></td>
            <td><input min="1" max="5" type="number" v-model="site3._9" /></td>
            <td><input min="1" max="5" type="number" v-model="site4._9" /></td>
            <td><input min="1" max="5" type="number" v-model="site5._9" /></td>
          </tr>
          <tr>
            <td style="background: rgba(255, 242, 205, 1);">المجموع</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(site1) }}</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(site2) }}</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(site3) }}</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(site4) }}</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(site5) }}</td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>
<script>

export default {
  data: (vm) => {
    return {
      site1: {
        _1: '',
        _2: '',
        _3: '',
        _4: '',
        _5: '',
        _6: '',
        _7: '',
        _8: '',
        _9: ''
      },
      site2: {
        _1: '',
        _2: '',
        _3: '',
        _4: '',
        _5: '',
        _6: '',
        _7: '',
        _8: '',
        _9: ''
      },
      site3: {
        _1: '',
        _2: '',
        _3: '',
        _4: '',
        _5: '',
        _6: '',
        _7: '',
        _8: '',
        _9: ''
      },
      site4: {
        _1: '',
        _2: '',
        _3: '',
        _4: '',
        _5: '',
        _6: '',
        _7: '',
        _8: '',
        _9: ''
      },
      site5: {
        _1: '',
        _2: '',
        _3: '',
        _4: '',
        _5: '',
        _6: '',
        _7: '',
        _8: '',
        _9: ''
      },
      loading: false,
      group: 'add-blog',
      showDialog: false,
      categories: [],
      idImage: `image-selected-${vm.generateRandomString(8)}`,
      url: `${vm.publicPath}assets/svg/Group 1171275983.svg`,
      file: null,
      items: [{ name: 'منشأة فردية', id: '1' }, { name: 'شركة تضامن', id: '2' }, { name: 'شركة توصية', id: '3' }, { name: 'ذات مسئولية محدودة', id: '4' }],
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
    calculateSum(site) {
      var totalSum = Object.values(site).reduce((acc, value) => acc + parseFloat(value || 0), 0);
      if (totalSum == 0) {
        return ''
      }
      return totalSum
    },
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
  padding-right: 5px;
  padding-left: 5px;
}

th,
td,
table {
  border: 1px solid rgba(200, 204, 204, 1);
  text-align: center;
}

th {
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

tr td:first-child{
  text-align: start;
  font-weight: 400;
}
</style>



