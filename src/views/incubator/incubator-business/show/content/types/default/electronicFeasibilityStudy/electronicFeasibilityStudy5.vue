<template>
  <div class="container">

    <div class="mt-3">
      <p>نبذة عن المنتج أو الخدمة</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text"
        placeholder="ما هي الخدمات أو المنتجات التي يقدمها المشروع" />
    </div>

    <div class="mt-3 col-12">
      <p>السعر / السعر المتوقع</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>المرحلة</th>
            <th>متطلباتها</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
          </tr>


        </tbody>

      </table>
    </div>
    <div class="mt-3 col-12">
      <p>طريقة الإنتاج: (توضيح المراحل المتبعة في المشروع بالتفصيل وتوضيح متطلبات كل مرحلة)</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>الخدمة\المنتج</th>
            <th>السعر</th>
          </tr>
        </thead>
        <tbody id="addHere2more">
          <tr>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
          </tr>

          <tr>
            <td style="background: rgba(255, 242, 205, 1);">الإجمالي</td>
            <td style="background: rgba(255, 242, 205, 1);"></td>

          </tr>
        </tbody>

      </table>
      <button @click="addHere2more()" style="background: #2CB7B3; padding: 10px 20px;
      font-size: 20px;
      background: transparent;
      border: 3px solid #2CB7B3;
      border-radius: 5px;
      color:#2CB7B3; margin:20px 0;">إضافة المزيد</button>
    </div>
    <div class="mt-3 col-12">
      <p>جدول تحليل المنافسين</p>
      <p class="t-c">يساعدك هذا النموذج على مقارنة وضع مشروعك في السوق مع منافسيك، يمكنك زيادة عدد المنافسين حسب مشروعك.
      </p>
      <table class="col-12">
        <thead>
          <tr>
            <th>المنافس</th>
            <th>وصف المنافسين</th>
            <th>المنافس</th>
            <th>الخدمات</th>
            <th>الجودة والخبرة</th>
            <th>التسعير</th>
            <th>قنوات البيع \ تقديم الخدمة</th>
            <th>الصورة الذهنية والتسويق</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>


        </tbody>

      </table>
    </div>
    <div class="mt-3 col-12">
      <p>جدول تحليل SWOT للمشروع</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>نقاط القوة داخل (مشروعك الخاص)</th>
            <th>نقاط الضعف داخل (مشروعك الخاص)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr style="background: rgba(227, 241, 241, 1); color: rgba(15, 119, 116, 1);">
            <td>الفرص خارج (مشروعك الخاص)</td>
            <td>التهديدات خارج (مشروعك الخاص)</td>
          </tr>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
          </tr>

        </tbody>

      </table>
    </div>

    <div class="mt-3 col-12">
      <p>SWOT الافتراضات و المبادئ المبنية على تحليل</p>
      <table class="col-12">
        <thead>
          <tr>
            <th>WT</th>
            <th>ST</th>
            <th>WO</th>
            <th>SO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="background:rgba(227, 241, 241, 1); color: rgba(15, 119, 116, 1)">المبادرات المبنية على مواطن الضعف
              الداخلية والتهديدات الخارجية </td>
            <td style="background:rgba(227, 241, 241, 1); color: rgba(15, 119, 116, 1)">المبادرات المبنية مواطن القوة
              الداخلية والتهديدات الخارجية</td>
            <td style="background:rgba(227, 241, 241, 1); color: rgba(15, 119, 116, 1)">المبادرات المبنية على مواطن الضعف
              الداخلية والفرص الخارجية </td>
            <td style="background:rgba(227, 241, 241, 1); color: rgba(15, 119, 116, 1)">المبادرات المبنية على مواطن القوة
              الداخلية والفرص الخارجية </td>

          </tr>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
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
      <p> تحليل الاستبيان</p>

      <div class="col-md-12 mb-5">
        <label style="border: 0px !important;" for="imginput" class="img-zone form-label file-label first w-100">
          <div v-if="file" class="add-img-selected w-100">
            <div style="width:120px; height:100px; margin: -20px 0 0 20px;">
              <img class="image-selected-dialog" style="width:100%; height:100%;" src="none" :id="idImage" />
            </div>
          </div>
          <div v-else class="text-center p-5">
            <img :src="`${publicPath}assets/svg/Group 11712759838.svg`" style="width: 205%;" />

          </div>

        </label>
        <ValidationProvider :name="$t('Image')" vid="image" rules="required|image" v-slot="{ validate, errors }">
          <input @change="uploadImage($event, validate) || validate($event)" class="form-control opacity-0 " type="file"
            id="imginput">
          <div v-if="errors.length !== 0" class="col-12 text-input-error">
            {{ errors[0] }}
          </div>
        </ValidationProvider>
      </div>
    </div>

    <div class="mt-3">
      <p>خصائص المشروع</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="هل المشروع صناعي أو تجاري أو مهني" />
    </div>
    <div class="mt-3">
      <p>الموردين للمشروع</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text"
        placeholder="في الغالب تحتاج إلى وسيط يتوسط بين البائع والمشتري، فمن هم الوكلاء الرئيسيين لمشروعك؟" />
    </div>
  </div>
</template>
<script>

export default {
  data: (vm) => {
    return {
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
    addHere2more() {
      const tr = document.createElement("tr");
      tr.innerHTML = "<td style=' border: 1px solid rgba(200, 204, 204, 1);text-align: center; height:50px;'><input /> </td><td style=' border: 1px solid rgba(200, 204, 204, 1);text-align: center;height:50px;'><input /> </td>";
      const el =document.getElementById("addHere2more");
      el.insertBefore(tr, el.lastElementChild);
      console.log('clicked')
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
</style>



