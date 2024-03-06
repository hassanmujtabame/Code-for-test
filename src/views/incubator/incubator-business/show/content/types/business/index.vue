<template>
  <div id="business-main-content" class="container">
    <h1 class="mt-3">
      <span class="" style="color: #1fb9b3">نموذج : </span> العمل التجاري
    </h1>
    <div class="col-12 mt-5">
      <table>
        <thead>
          <tr>
            <th>شرائح العملاء</th>
            <th>العلاقات مع العملاء</th>
            <th>القيم المقترحة</th>
            <th>الانشطة المقترحة</th>
            <th>الشراكات الرئيسية</th>
          </tr>
        </thead>
        <tbody>
          <tr style="height: 150px !important">
            <td rowspan="3"><input /></td>
            <td><input /></td>
            <td rowspan="3"><input /></td>
            <td><input /></td>
            <td rowspan="3"><input /></td>
          </tr>
          <tr style="background: rgba(255, 242, 205, 1)">
            <!-- <td><input /></td> -->
            <td>القنوات</td>
            <!-- <td><input /></td> -->
            <td>الموارد الرئيسية</td>
            <!-- <td><input /></td> -->
          </tr>
          <tr style="height: 150px !important">
            <!-- <td><input /></td> -->
            <!-- <td><input /></td> -->
            <!-- <td><input /></td> -->
            <td><input /></td>
            <td><input /></td>
          </tr>

          <tr style="height: 100px !important">
            <td class="text-end p-3 special_td" colspan="2">
              <small> مصادر الايرادات :</small> <input />
            </td>
            <td class="text-end p-3 special_td" colspan="3">
              <small> هيكل التكاليف :</small> <input />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="createPDF" class="btn-custmer mt-5">
      {{ $t("save") }}
    </button>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  methods: {
    createPDF() {
      // var sTable = document.getElementById('business-main-content').innerHTML;
      // // add all the css and styling for the table
      // var style = "<style>";
      // style = style + "table {width: 100%;font: 17px Calibri;}";
      // style = style + "table, th, td {border: solid 1px #000; border-collapse: collapse;";
      // style = style + "padding: 2px 3px;text-align: center;}";
      // style = style + "</style>";

      // // here we creat our window object
      // var win = window.open('', '', 'height=700,width=700');

      // win.document.write('<html><head>');
      // win.document.write('<title>my model</title>');   // title or name for pdf
      // win.document.write(style);          // add our css.
      // win.document.write('</head>');
      // win.document.write('<body>');
      // win.document.write(sTable);         // table content.
      // win.document.write('</body></html>');

      // win.document.close();   // close the window.

      // win.print();    // print the table.
      html2pdf()
        .from(document.getElementById("business-main-content"))
        .toContainer()
        .toCanvas()
        .toImg()
        .toPdf()
        .save();
    },
  },
};
</script>

<style scoped>
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

th,
.special_td {
  font-weight: 200;
  padding: 10px 15px;
  background: #e3f1f1;
  color: #0f7774;
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
.special_td input {
  background: transparent;
}
input {
  outline: none;
}
input:focus {
  outline: none;
}
td input {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
