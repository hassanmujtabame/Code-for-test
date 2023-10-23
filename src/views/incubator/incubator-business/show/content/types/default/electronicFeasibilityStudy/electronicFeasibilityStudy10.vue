<template>
  <div class="container">
    <div class="mt-3 col-12">
      <p>1- التكاليف الرأسمالية في المشروع: (من الدراسة الفنية)</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>البيان</th>
            <th>القيمة (ريال)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>قيمة الأرض (في حال تم شراؤها) </td>
            <td><input type="number" v-model="table_1.column_1.row_1" /> </td>
          </tr>
          <tr>
            <td>تكاليف الترميم (جدول الترميم)</td>
            <td><input type="number" v-model="table_1.column_1.row_2" /> </td>
          </tr>
          <tr>
            <td>تكاليف الأثاث والمفروشات (جدول الأثاث) </td>
            <td><input type="number" v-model="table_1.column_1.row_3" /> </td>
          </tr>
          <tr>
            <td>تكاليف الآلات والمعدات (جدول الآلات) </td>
            <td><input type="number" v-model="table_1.column_1.row_4" /> </td>
          </tr>
          <tr>
            <td>تكاليف السيارات (في حال تم شراؤها)</td>
            <td><input type="number" v-model="table_1.column_1.row_5" /> </td>
          </tr>

          <tr>
            <td style="background: rgba(255, 242, 205, 1);">إجمالي رأس المال الثابت</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_1['column_1']) }}</td>

          </tr>
        </tbody>

      </table>
    </div>

    <div class="mt-3 col-12">
      <p>2- مصروفات ما قبل التشغيل: (من الدراسة الفنية)</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>البيان</th>
            <th>القيمة (ريال)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>مصاريف التأسيس (جدول مصاريف التأسيس)</td>
            <td><input /> </td>
          </tr>
          <tr>
            <td>احتياطي الطوارئ (يتم احتساب احتياطي الطوارئ بنسبة 10% من رأس المال أو التكاليف الرأسمالية للمشروع)</td>
            <td><input /> </td>
          </tr>
          <tr>
            <td>مصروفات ما قبل التشغيل</td>
            <td><input /> </td>
          </tr>
        </tbody>

      </table>
    </div>
    <div class="mt-3 col-12">
      <p>رأس المال العامل لتشغيل دورة إنتاجية واحدة (ستة أشهر):</p>
      <p>3- تكاليف متغيرة:</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>البيان</th>
            <th>التكلفة السنوية</th>
            <th>التكلفة لدورة إنتاجية واحدة</th>
          </tr>
        </thead>
        <tbody id="changeable-cost">
          <tr>
            <td>العمالة المتغيرة</td>
            <td><input type="number" v-model="table_2.column_1.row_1" /> </td>
            <td><input type="number" v-model="table_2.column_2.row_1" /> </td>
          </tr>
          <tr>
            <td>المواد الخام</td>
            <td><input type="number" v-model="table_2.column_1.row_2" /> </td>
            <td><input type="number" v-model="table_2.column_2.row_2" /> </td>
          </tr>
          <tr>
            <td>التسويق</td>
            <td><input type="number" v-model="table_2.column_1.row_3" /> </td>
            <td><input type="number" v-model="table_2.column_2.row_3" /> </td>
          </tr>

          <tr>
            <td style="background: rgba(255, 242, 205, 1);">إجمالي التكاليف المتغيرة</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_2['column_1']) }}</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_2['column_2']) }}</td>
          </tr>
        </tbody>

      </table>
      <button @click="addHereMore(3, 'changeable-cost')" style="background: #2CB7B3; padding: 10px 20px;
      font-size: 20px;
      background: transparent;
      border: 3px solid #2CB7B3;
      border-radius: 5px;
      color:#2CB7B3; margin:20px 0;">إضافة المزيد</button>
    </div>
    <div class="mt-3 col-12">
      <p>4- تكاليف ثابتة:</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>البيان</th>
            <th>التكلفة السنوية</th>
            <th>التكلفة لدورة إنتاجية واحدة</th>
          </tr>
        </thead>
        <tbody id="static-cost">
          <tr>
            <td>الرواتب للعمالة الثابتة</td>
            <td><input type="number" v-model="table_3.column_1.row_1" /> </td>
            <td><input type="number" v-model="table_3.column_2.row_1" /> </td>
          </tr>
          <tr>
            <td>الإيجار</td>
            <td><input type="number" v-model="table_3.column_1.row_2" /> </td>
            <td><input type="number" v-model="table_3.column_2.row_2" /> </td>
          </tr>
          <tr>
            <td>المنافع العامة</td>
            <td><input type="number" v-model="table_3.column_1.row_3" /> </td>
            <td><input type="number" v-model="table_3.column_2.row_3" /> </td>
          </tr>

          <tr>
            <td style="background: rgba(255, 242, 205, 1);">إجمالي التكاليف الثابتة</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_3['column_1']) }}</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_3['column_2']) }}</td>
          </tr>
        </tbody>

      </table>
      <button @click="addHereMore(3, 'static-cost')" style="background: #2CB7B3; padding: 10px 20px;
      font-size: 20px;
      background: transparent;
      border: 3px solid #2CB7B3;
      border-radius: 5px;
      color:#2CB7B3; margin:20px 0;">إضافة المزيد</button>
    </div>
    <div class="mt-3 col-12">
      <p>5- الإهلاك:</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>الأصول</th>
            <th>القيمة (ريال)</th>
            <th>العمر الافتراضي (عدد السنوات)</th>
            <th>قيمة الإهلاك السنوي</th>
            <th>قيمة الإهلاك لدورة إنتاجية واحدة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>تكاليف المبنى</td>
            <td><input type="number" v-model="table_4.column_1.row_1" /> </td>
            <td><input type="number" v-model="table_4.column_2.row_1" /></td>
            <td><input type="number" v-model="table_4.column_3.row_1" /> </td>
            <td><input type="number" v-model="table_4.column_4.row_1" /> </td>
          </tr>
          <tr>
            <td>تكاليف الأثاث والمفروشات</td>
            <td><input type="number" v-model="table_4.column_1.row_2" /> </td>
            <td><input type="number" v-model="table_4.column_2.row_2" /></td>
            <td><input type="number" v-model="table_4.column_3.row_2" /> </td>
            <td><input type="number" v-model="table_4.column_4.row_2" /> </td>
          </tr>
          <tr>
            <td>تكاليف الآلات والمعدات</td>
            <td><input type="number" v-model="table_4.column_1.row_3" /> </td>
            <td><input type="number" v-model="table_4.column_2.row_3" /></td>
            <td><input type="number" v-model="table_4.column_3.row_3" /> </td>
            <td><input type="number" v-model="table_4.column_4.row_3" /> </td>
          </tr>
          <tr>
            <td>تكاليف الآلات والمعدات</td>
            <td><input type="number" v-model="table_4.column_1.row_4" /> </td>
            <td><input type="number" v-model="table_4.column_2.row_4" /></td>
            <td><input type="number" v-model="table_4.column_3.row_4" /> </td>
            <td><input type="number" v-model="table_4.column_4.row_4" /> </td>
          </tr>
          <tr>
            <td>تكاليف الأجهزة والبرامج</td>
            <td><input type="number" v-model="table_4.column_1.row_5" /> </td>
            <td><input type="number" v-model="table_4.column_2.row_5" /></td>
            <td><input type="number" v-model="table_4.column_3.row_5" /> </td>
            <td><input type="number" v-model="table_4.column_4.row_5" /> </td>
          </tr>
          <tr>
            <td>تكاليف السيارات</td>
            <td><input type="number" v-model="table_4.column_1.row_6" /> </td>
            <td><input type="number" v-model="table_4.column_2.row_6" /></td>
            <td><input type="number" v-model="table_4.column_3.row_6" /> </td>
            <td><input type="number" v-model="table_4.column_4.row_6" /> </td>
          </tr>

          <tr>
            <td style="background: rgba(255, 242, 205, 1);">الإجمالي</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_4['column_1']) }}</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_4['column_2']) }}</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_4['column_3']) }}</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_4['column_4']) }}</td>
          </tr>
        </tbody>

      </table>
    </div>
    <div class="mt-3 col-12">
      <p>6- إجمالي رأس المال العامل لتشغيل دورة إنتاجية واحدة (لمدة ستة أشهر):</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>البيـان</th>
            <th>مصاريف التشغيل السنوية (ريال)</th>
            <th>رأس المال العامل (ريال)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>تكاليف متغيرة(جدول 3)</td>
            <td><input type="number" v-model="table_5.column_1.row_1" /> </td>
            <td><input type="number" v-model="table_5.column_2.row_1" /> </td>
          </tr>
          <tr>
            <td>تكاليف ثابتة (جدول 4)</td>
            <td><input type="number" v-model="table_5.column_1.row_2" /> </td>
            <td><input type="number" v-model="table_5.column_2.row_2" /> </td>
          </tr>
          <tr>
            <td>مصروفات الاهلاك (جدول5)</td>
            <td><input type="number" v-model="table_5.column_1.row_3" /> </td>
            <td><input type="number" v-model="table_5.column_2.row_3" /> </td>
          </tr>


          <tr>
            <td style="background: rgba(255, 242, 205, 1);">إجمالي رأس المال العامل لدورة إنتاجية واحدة</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_5['column_1']) }}</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_5['column_2']) }}</td>
          </tr>
        </tbody>

      </table>
    </div>
    <div class="mt-3 col-12">
      <p>7- التكاليف الاستثمارية:</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>البيـان</th>
            <th>القيمة (ريال)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>التكاليف الرأسمالية الثابتة</td>
            <td><input type="number" v-model="table_6.column_1.row_1" /> </td>
          </tr>
          <tr>
            <td>مصروفات ما قبل التشغيل</td>
            <td><input type="number" v-model="table_6.column_1.row_2" /> </td>
          </tr>
          <tr>
            <td>رأس المال العامل لدورة إنتاجية واحدة</td>
            <td><input type="number" v-model="table_6.column_1.row_3" /> </td>
          </tr>


          <tr>
            <td style="background: rgba(255, 242, 205, 1);">إجمالي التكلفة الاستثمارية</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_6['column_1'])}}</td>
          </tr>
        </tbody>

      </table>
    </div>
    <div class="mt-3 col-12">
      <p>مصادر التمويل:</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>البيـان</th>
            <th>النسبة المئوية</th>
            <th>القيمة (ريال)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>رأس المال المدفوع</td>
            <td><input type="number" v-model="table_7.column_1.row_1" /> </td>
            <td><input type="number" v-model="table_7.column_2.row_1" /> </td>
          </tr>
          <tr>
            <td>قروض</td>
            <td><input type="number" v-model="table_7.column_1.row_2" /> </td>
            <td><input type="number" v-model="table_7.column_2.row_2" /> </td>
          </tr>
          <tr>
            <td style="background: rgba(255, 242, 205, 1);">الإجمالي</td>
            <td style="background: rgba(255, 242, 205, 1);">{{calculateSum(table_7['column_1'])}}</td>
            <td style="background: rgba(255, 242, 205, 1);">{{calculateSum(table_7['column_2'])}}</td>
          </tr>
        </tbody>

      </table>
    </div>

    <div class="mt-3 col-12">
      <p>7-التكاليف السنوية للمشروع :</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>البيـان</th>
            <th>التكلفة السنوية</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>التكاليف الثابتة (جدول 4)</td>
            <td><input type="number" v-model="table_8.column_1.row_1" /> </td>
          </tr>
          <tr>
            <td>التكاليف المتغيرة (جدول 3)</td>
            <td><input type="number" v-model="table_8.column_1.row_2" /> </td>
          </tr>
          <tr>
            <td>الاهلاك (جدول 5)</td>
            <td><input type="number" v-model="table_8.column_1.row_3" /> </td>
          </tr>


          <tr>
            <td style="background: rgba(255, 242, 205, 1);"> إجمالي التكاليف</td>
            <td style="background: rgba(255, 242, 205, 1);">{{calculateSum(table_8['column_1'])}}</td>
          </tr>
        </tbody>

      </table>
    </div>
    <div class="mt-3 col-12">
      <p>الإيرادات السنوية للمشروع:</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>البيـان</th>
            <th>حجم المبيعات الشهرية</th>
            <th>حجم المبيعات السنوية</th>
            <th>السعر (ريال)</th>
            <th>الإيرادات السنوية (ريال)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>منتج 1</td>
            <td><input type="number" v-model="table_9.column_1.row_1" /> </td>
            <td><input type="number" v-model="table_9.column_2.row_1" /> </td>
            <td><input type="number" v-model="table_9.column_3.row_1" /> </td>
            <td><input type="number" v-model="table_9.column_4.row_1" /> </td>
          </tr>
          <tr>
            <td>منتج 2</td>
            <td><input type="number" v-model="table_9.column_1.row_2" /> </td>
            <td><input type="number" v-model="table_9.column_2.row_2" /> </td>
            <td><input type="number" v-model="table_9.column_3.row_2" /> </td>
            <td><input type="number" v-model="table_9.column_4.row_2" /> </td>
          </tr>
          <tr>
            <td>منتج 3</td>
            <td><input type="number" v-model="table_9.column_1.row_3" /> </td>
            <td><input type="number" v-model="table_9.column_2.row_3" /> </td>
            <td><input type="number" v-model="table_9.column_3.row_3" /> </td>
            <td><input type="number" v-model="table_9.column_4.row_3" /> </td>
          </tr>
          <tr>
            <td>منتج 4</td>
            <td><input type="number" v-model="table_9.column_1.row_4" /> </td>
            <td><input type="number" v-model="table_9.column_2.row_4" /> </td>
            <td><input type="number" v-model="table_9.column_3.row_4" /> </td>
            <td><input type="number" v-model="table_9.column_4.row_4" /> </td>
          </tr>


          <tr>
            <td style="background: rgba(255, 242, 205, 1);"> إجمالي الايرادات</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_9['column_1']) }}</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_9['column_2']) }}</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_9['column_3']) }}</td>
            <td style="background: rgba(255, 242, 205, 1);">{{ calculateSum(table_9['column_4']) }}</td>
          </tr>
        </tbody>

      </table>
    </div>
    <div class="mt-3 col-12">
      <p>الأرباح الاجمالية للمشروع</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>البيـان</th>
            <th>القيمة (ريال)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>الإيرادات السنوية </td>
            <td><input type="number" v-model="table_10.column_1.row_1" /> </td>
          </tr>
          <tr>
            <td>_ التكاليف السنوية</td>
            <td><input type="number" v-model="table_10.column_1.row_2" /> </td>
          </tr>
          <tr>
            <td style="background: rgba(255, 242, 205, 1);"> = اجمالي الأرباح</td>
            <td style="background: rgba(255, 242, 205, 1);">{{calculateSum(table_10['column_1'])}}</td>
          </tr>
        </tbody>

      </table>
    </div>
    <div class="mt-3 col-12">
      <p>صافي الربح</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>البيـان</th>
            <th>القيمة (ريال)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>الأرباح الإجمالية</td>
            <td><input type="number" v-model="table_11.column_1.row_1" /> </td>
          </tr>
          <tr>
            <td>_ الزكاة 2.5% من الأرباح</td>
            <td><input type="number" v-model="table_11.column_1.row_2" /> </td>
          </tr>
          <tr>
            <td>_ ضريبة القيمة المضافة 5% من الارباح</td>
            <td><input type="number" v-model="table_11.column_1.row_3" /> </td>
          </tr>
          <tr>
            <td style="background: rgba(255, 242, 205, 1);">= صافي الربح</td>
            <td style="background: rgba(255, 242, 205, 1);">{{calculateSum(table_11['column_1'])}}</td>
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
      table_1: {
        column_1: {
          row_1: '',
          row_2: '',
          row_3: '',
          row_4: '',
          row_5: ''
        }
      },
      table_2: {
        column_1: {
          row_1: '',
          row_2: '',
          row_3: ''
        },
        column_2: {
          row_1: '',
          row_2: '',
          row_3: ''
        }
      },
      table_3: {
        column_1: {
          row_1: '',
          row_2: '',
          row_3: '',

        },
        column_2: {
          row_1: '',
          row_2: '',
          row_3: '',
        }
      },
      table_4: {
        column_1: {
          row_1: '',
          row_2: '',
          row_3: '',
          row_4: '',
          row_5: '',
          row_6: '',
        },
        column_2: {
          row_1: '',
          row_2: '',
          row_3: '',
          row_4: '',
          row_5: '',
          row_6: '',
        },
        column_3: {
          row_1: '',
          row_2: '',
          row_3: '',
          row_4: '',
          row_5: '',
          row_6: '',
        },
        column_4: {
          row_1: '',
          row_2: '',
          row_3: '',
          row_4: '',
          row_5: '',
          row_6: '',
        }
      },
      table_5: {
        column_1: {
          row_1: '',
          row_2: '',
          row_3: '',

        },
        column_2: {
          row_1: '',
          row_2: '',
          row_3: '',
        }
      },
      table_6: {
        column_1: {
          row_1: '',
          row_2: '',
          row_3: ''
        }
      },
      table_7: {
        column_1: {
          row_1: '',
          row_2: '',
        },
        column_2: {
          row_1: '',
          row_2: '',
        }
      },
      table_8: {
        column_1: {
          row_1: '',
          row_2: '',
          row_3: ''
        }
      },
      table_9: {
        column_1: {
          row_1: '',
          row_2: '',
          row_3: '',
          row_4: '',

        },
        column_2: {
          row_1: '',
          row_2: '',
          row_3: '',
          row_4: '',
        },
        column_3: {
          row_1: '',
          row_2: '',
          row_3: '',
          row_4: '',
        },
        column_4: {
          row_1: '',
          row_2: '',
          row_3: '',
          row_4: '',
        }
      },
      table_10: {
        column_1: {
          row_1: '',
          row_2: '',
        }
      },
      table_11: {
        column_1: {
          row_1: '',
          row_2: '',
          row_3: '',
        }
      },

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
    calculateSum(column) {

      var totalSum = Object.values(column).reduce((acc, value) => acc + parseFloat(value || 0), 0);
      if (totalSum == 0) {
        return ''
      }
      return totalSum
      // var table = document.getElementById(selectedTable), sumVal = 0;

      // for (var i = 1; i < table.rows.length; i++) {
      //   sumVal = sumVal + parseInt(table.rows[i].cells[1].innerHTML);
      // }



    },
    addHereMore(count, selected) {
      const tr = document.createElement("tr");
      const td = `<td style=' border: 1px solid rgba(200, 204, 204, 1);text-align: center;height:50px;'><input /> </td>`
      tr.innerHTML = td.repeat(count)
      const el = document.getElementById(selected);
      el.insertBefore(tr, el.lastElementChild);
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

    this.calculateSum()
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

tr td:first-child {
  text-align: start;
  font-weight: 400;
}
</style>

