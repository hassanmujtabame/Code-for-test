<template>
  <div class="container">
    <h1 class="mb-5">
      <span class="" style="color: #1fb9b3">نموذج : </span> نموذج العرض الاستثماري
    </h1>
    <div class="mt-3">
      <p>هل هناك منافسين كثيرين أم قليلين؟</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب إجابتك هنا" />
    </div>

    <div class="mt-3">
      <p>من هم منافسيك؟</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب إجابتك هنا" />
    </div>
    <div class="mt-3 col-12">
      <p>كيف تقارن نفسك معهم؟ إلى أي مدى تجد نفسك مختلف وافضل من منافسيك</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب إجابتك هنا" />
    </div>
    <div class="mt-3 col-12">
      <p>ما الذي يجعل الحل الذي تقدمه هو الحل الأنسب؟ ( وضح ميزتك التنافسية)</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب إجابتك هنا" />
    </div>
    <span>قيمة العميل = جدية الحالة الراهنة + مزايا الحالة المرغوبة في المستقبل .. تكلفة حلك</span>
    <div class="mt-3 col-12">
      <p>كيف ستجني المال؟</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب إجابتك هنا" />
    </div>
    <div class="mt-3 col-12">
      <p>هل هناك طريقة واحدة فقط أم عدة طرق؟</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب إجابتك هنا" />
    </div>
    <div class="mt-3 col-12">
      <p>هل لديك عملاء يدفعون المقابل المادي حالياً؟</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب إجابتك هنا" />
    </div>
    <div class="mt-3 col-12">
      <p>ما هي إيراداتك الحالية؟</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب إجابتك هنا" />
    </div>
    <div class="mt-3">
      <p>قدم الأدلة/ البيانات إن أمكن</p>
      <div class="container mb-5">
        <label style="border: 0px !important;" for="imginput" class="img-zone form-label file-label first w-100">
          <div v-if="file" class="add-img-selected w-100 ">

            <div style="width:120px; height:100px; margin: -20px 0 0 20px;">
              <img class="image-selected-dialog" style="width:100%; height:100%;" src="none" :id="idImage" />
            </div>
          </div>
          <div v-else class="text-center p-5">
            <img :src="`${publicPath}assets/svg/Group 117127598338.svg`" style="width: 205%;" />

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
    <div class="mt-3 col-12">
      <p>حدد نقاط العمل التي يجب أن تحقق المعالم الرئيسية في المستقبل؟</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب إجابتك هنا" />
    </div>
    <div class="my-5 col-12">
      <p>هل أنت بمفردك أم لديك فريق؟</p>
      <div class="d-flex w-100 justify-content-around">

        <div v-for="(state, i) in states" :key="i" class="form-check ">
          <input class="form-check-input" type="radio" v-model="stateValue" name="stateRadioDefault"
            id="flexRadioDefault1" />
          <label class="form-check-label" for="flexRadioDefault1">
            {{ state.name }}
          </label>
        </div>
      </div>

    </div>
    <div class="mt-3 col-12">
      <p>هل أعضاء الفريق متفرغين؟</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text"
        placeholder="اكتب هل أعضاء الفريق متفرغين بشكل كامل أم لا" />
    </div>
    <div class="mt-3 col-12">
      <p>هل هناك فريق كامل؟ أن كانت الإجابة بلا فهل لديك إمكانية الوصول إلى الموارد؟</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب إجابتك هنا" />
    </div>
    <div class="mt-3 col-12">
      <p>من هم أعضاء الفريق؟</p>
      <div class="d-flex justify-content-between flex-wrap" id="addJob">

        <div class="col-6">
          <p>المسمى الوظيفي</p>
          <input style="width:80%;" class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب إجابتك هنا" />
        </div>
        <div class="col-6">
          <p>المسمى الوظيفي</p>
          <input style="width:80%;" class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب إجابتك هنا" />
        </div>
      </div>
      <button @click="addHereMoreJob()" style="background: #2CB7B3; padding: 10px 20px;
      font-size: 20px;
      background: transparent;
      border: 3px solid #2CB7B3;
      border-radius: 5px;
      color:#2CB7B3; margin:20px 0;">إضافة المزيد</button>
    </div>
    <div class="mt-3 col-12">
      <p>ما هي مؤهلاتهم لضمان النجاح في المشروع؟</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب إجابتك هنا" />
    </div>
    <div class="mt-3">      
      <p>قدم الأدلة/ البيانات إن أمكن</p>
      <div class="container mb-5">
        <label style="border: 0px !important;" for="imginput" class="img-zone form-label file-label first w-100">
          <div v-if="file" class="add-img-selected w-100 ">

            <div style="width:120px; height:100px; margin: -20px 0 0 20px;">
              <img class="image-selected-dialog" style="width:100%; height:100%;" src="none" :id="idImage2" />
            </div>
          </div>
          <div v-else class="text-center p-5">
            <img :src="`${publicPath}assets/svg/Group 117127598338.svg`" style="width: 205%;" />
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
    <div class="mt-3 col-12">
      <p>التكاليف و المبيعات المتوقعه ل 3-5 سنوات القادمه</p>
      <table class="col-12">
        <thead>
          <tr>
            <th></th>
            <th>السنة الأولى</th>
            <th>السنة الثانية</th>
            <th>السنة الثالثة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>رأس المال</td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td>الأسعار</td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td>الكميات</td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td>الإيرادات</td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td>التكاليف</td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
          <tr>
            <td>الأرباح</td>
            <td><input /> </td>
            <td><input /> </td>
            <td><input /> </td>
          </tr>
        </tbody>

      </table>

    </div>

    <div class="mt-3 col-12">
      <p>اذكر مبلغ التمويل الذي يحتاجه المشروع؟ </p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="مبلغ التمويل الذي يحتاجه المشروع هنا" />
    </div>
    <div class="mt-3 col-12">
      <p>اذكر البنود التي سيصرف التمويل فيها؟</p>
      <input class="form-control py-3 px-5 fs-r-12" type="text"
        placeholder="على سبيل المثال (توسع، فريق عمل، إيجار، استيراد مواد .. إلخ)" />
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
      idImage2: `image-selected-${vm.generateRandomString(8)}`,
      url: `${vm.publicPath}assets/svg/Group 1171275983.svg`,
      file: null,
      stateValue: '',
      states: [{ name: 'بمفردك' }, { name: 'لديك فريق' }],
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
    addHereMoreJob() {
      const div = document.createElement("div");
      div.innerHTML = `<p>المسمى الوظيفي</p>
          <input style="width:80%;" class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب إجابتك هنا" />`;
      div.classList.add('col-6')
      const el =document.getElementById("addJob");
      el.appendChild(div);
      console.log('clicked')
    },
    makeImageEmpty() {
      this.file = null;
      window.$('#' + this.idImage2)
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
        console.log('result', e, this.idImage2)
        window.$('#' + this.idImage2)
          .attr('src', e.target.result)
          .css('opacity', '1');

      };
      reader.readAsDataURL(this.file);
    },

    openDialog() {
      this.loading = false;
      window.$('#' + this.idImage2)
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

