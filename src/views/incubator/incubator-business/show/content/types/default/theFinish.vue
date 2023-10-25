<template>
  <div id="finish-main-content" class="container">
    <h1 class="mt-3">
      تهانينا!
    </h1>
    <div class="mt-3">
      <p>
        نبذة عن مشروعك      
      </p>
      <input class="form-control py-3 px-5 fs-r-12" type="text" placeholder="اكتب نبذة عن مشروعك" />
    </div>
    <div class="mt-3">
      <p>
        مواقع التواصل الاجتماعي      
      </p>
      <input class="form-control py-3 px-5 fs-r-12 placeholder_icon _instagram" type="text" placeholder="رابط حساب الانستقرام الخاص بالمشروع (اختياري)" />
      <br>
      <input class="form-control py-3 px-5 fs-r-12 placeholder_icon _twitter" type="text" placeholder="رابط حساب تويتر الخاص بالمشروع (اختياري)"/>
      <br>
      <input class="form-control py-3 px-5 fs-r-12 placeholder_icon _linkedIn" type="text" placeholder="رابط حساب لينكد إن الخاص بالمشروع (اختياري)"/>
    </div>

    <div class="mt-3">
      <p> لوجو المشروع</p>

      <div class="col-md-12 mb-5">
        <label style="border: 0px !important;" for="imginput" class="img-zone form-label file-label first w-100">
          <div v-if="file" class="add-img-selected w-100">
            <div style="width:120px; height:100px; margin: -20px 0 0 20px;">
              <img class="image-selected-dialog" style="width:100%; height:100%;" src="none" :id="idImage" />
            </div>
          </div>
          <div v-else class="text-center p-5">
            <img :src="`${publicPath}assets/svg/Group 1171275983.svg`" style="width: 205%;" />

          </div>

        </label>
        <ValidationProvider style="margin-bottom:100px;" :name="$t('Image')" vid="image" rules="required|image" v-slot="{ validate, errors }">
          <input @change="uploadImage($event, validate) || validate($event)"  class="form-control opacity-0" type="file"
            id="imginput">
          <div v-if="errors.length !== 0" class="col-12 text-input-error">
            {{ errors[0] }}
          </div>
        </ValidationProvider>
      </div>
    </div>
    
    
    <button @click="createPDF" class="btn-custmer mt-5">{{ $t("save") }}</button>
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
      createPDF() {
      var sTable = document.getElementById('finish-main-content').innerHTML;
      // add all the css and styling for the table 
      var style = "<style>";
      style = style + "table {width: 100%;font: 17px Calibri;}";
      style = style + "table, th, td {border: solid 1px #000; border-collapse: collapse;";
      style = style + "padding: 2px 3px;text-align: center;}";
      style = style + "</style>";

      // here we creat our window object
      var win = window.open('', '', 'height=700,width=700');

      win.document.write('<html><head>');
      win.document.write('<title>my model</title>');   // title or name for pdf
      win.document.write(style);          // add our css.
      win.document.write('</head>');
      win.document.write('<body>');
      win.document.write(sTable);         // table content. 
      win.document.write('</body></html>');

      win.document.close();   // close the window.

      win.print();    // print the table.
    }
  },
};
</script>

<style scoped>

.placeholder_icon {
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
  text-indent: 20px;
  height: 50px;
}
._instagram {
  background-image: url('~@/assets/img/instagram.png');
}
._twitter {
  background-image: url('~@/assets/img/twitter.png');
}
._linkedIn {
  background-image: url('~@/assets/img/linkedIn.png');
}
.d-flex .col-3 img {
  width: 200px;
}
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