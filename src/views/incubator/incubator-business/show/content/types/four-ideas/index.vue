<template>
  <div id="list-item-8p" class="container arabic-text">
    <h1><span class="" style="color: #1fb9b3">نموذج : </span> الأربع أفكار</h1>
    <p class="s-c">
      خصِّص/ي بعض الوقت للتفكير مليًّا في المشكلات التي تعاني منها مجالات اهتمام
      حاضنة رياديات ،و بعض الافكار والحلول والرؤى التي ترغب في تطويرها/ تغييرها/
      أو تحسينها في هذا المجال ؟ من وجهة نظرك. فكِّر في كلِّ الجوانب والاتجاهات؛
      الصحة، الغذاء، التعليم، الثقافة، التجارة الالكترونية ،التقنية، الإدارة
      والتسويق، السياحة، الترفيه، الفاشن، العقار والسكن، والمجتمعية؟
    </p>
    <p>الآن، هل يمكن ترتيب المشكلات التي تعاني منها احد هذه المجالات؟</p>
    <div class="col-12">
      <table class="col-12">
        <thead>
          <tr>
            <th>المشكلات</th>
            <th>حل المشكلات / الفكرة</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in problems" :key="index">
            <td><input v-model="row.problem" /></td>
            <td><input v-model="row.solution" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-12 mt-3">
      <p>كيف تختار/ي الفكرة الأنسب لك ؟</p>
      <p>
        قد يكون شغفك هو نقطة الانطلاق نحو مشروعك الريادي، تساعدك "النظرية
        اليابانية ايكجاي" على اكتشاف هذا الشغف من خلال الاجابة على هذه الاسئلة:
      </p>
      <table class="col-12">
        <thead>
          <tr>
            <th>الاهتمامات والهوايات ماذا تحب؟</th>
            <th>القدرات والمهارات ماذا تجيد؟</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input v-model="interests.hobbies" /></td>
            <td><input v-model="interests.skills" /></td>
          </tr>
          <tr
            style="
              background: rgba(227, 241, 241, 1);
              color: rgba(15, 119, 116, 1);
            "
          >
            <td>الاحتياج مالذي يحتاجه العالم منك؟</td>
            <td>الفرصة مالذي يمكن ان يدفع لك من اجله؟</td>
          </tr>
          <tr>
            <td><input v-model="needs" /></td>
            <td><input v-model="opportunity" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-3">
      <p>معايير تقييم أفكار المشروعات التجارية الناشئة :</p>
      <div>
        <p class="my-3" style="color: rgba(118, 118, 118, 1)">
          هناك عدة معايير تستخدم لتقييم أفكار المشروعات التجارية الناشئة منها:
        </p>
        <p style="color: rgba(118, 118, 118, 1)">
          <span class="m-c">1.</span> المعيار المالي: مدى قدرتك المالية لإنشاء
          المشروع.
        </p>
        <p style="color: rgba(118, 118, 118, 1)">
          <span class="m-c">2.</span> المعيار البشري: توافر الكفاءات البشرية.
        </p>
        <p style="color: rgba(118, 118, 118, 1)">
          <span class="m-c">3.</span> المعيار التسويقي: وجود طلب كافٍ في السوق.
        </p>
        <p style="color: rgba(118, 118, 118, 1)">
          <span class="m-c">4.</span> المعيار الشخصي: مدى حماسك و رغبتك في
          القيام بالمشروع.
        </p>
        <p style="color: rgba(118, 118, 118, 1)">
          <span class="m-c">5.</span> المعيار المعرفي: خبراتك و معرفتك في مجال
          المشروع.
        </p>
      </div>
      <div class="col-12" id="myTable">
        <table>
          <thead>
            <tr>
              <th>المعيار</th>
              <th>فكرة 1</th>
              <th>فكرة 2</th>
              <th>فكرة 3</th>
              <th>فكرة 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-end">
                1. المعيار المالي: مدى قدرتك المالية لإنشاء المشروع
              </td>
              <td><input type="number" v-model="idea1.financialCriteria" /></td>
              <td><input type="number" v-model="idea2.financialCriteria" /></td>
              <td><input type="number" v-model="idea3.financialCriteria" /></td>
              <td><input type="number" v-model="idea4.financialCriteria" /></td>
            </tr>
            <tr>
              <td class="text-end">
                2. المعيار البشري: توافر الكفاءات البشرية
              </td>
              <td><input type="number" v-model="idea1.humanCriteria" /></td>
              <td><input type="number" v-model="idea2.humanCriteria" /></td>
              <td><input type="number" v-model="idea3.humanCriteria" /></td>
              <td><input type="number" v-model="idea4.humanCriteria" /></td>
            </tr>
            <tr>
              <td class="text-end">
                3. المعيار التسويقي: وجود طلب كافٍ في السوق
              </td>
              <td><input type="number" v-model="idea1.marketingCriteria" /></td>
              <td><input type="number" v-model="idea2.marketingCriteria" /></td>
              <td><input type="number" v-model="idea3.marketingCriteria" /></td>
              <td><input type="number" v-model="idea4.marketingCriteria" /></td>
            </tr>
            <tr>
              <td class="text-end">
                4. المعيار الشخصي: مدى حماسك ورغبتك في القيام بالمشروع
              </td>
              <td><input type="number" v-model="idea1.personalCriteria" /></td>
              <td><input type="number" v-model="idea2.personalCriteria" /></td>
              <td><input type="number" v-model="idea3.personalCriteria" /></td>
              <td><input type="number" v-model="idea4.personalCriteria" /></td>
            </tr>
            <tr>
              <td class="text-end">
                5. المعيار المعرفي: خبراتك ومعرفتك في مجال المشروع
              </td>
              <td><input type="number" v-model="idea1.knowledgeCriteria" /></td>
              <td><input type="number" v-model="idea2.knowledgeCriteria" /></td>
              <td><input type="number" v-model="idea3.knowledgeCriteria" /></td>
              <td><input type="number" v-model="idea4.knowledgeCriteria" /></td>
            </tr>

            <tr style="background: rgba(255, 242, 205, 1)">
              <td>المجموع</td>
              <td>{{ calculateSum(idea1) }}</td>
              <td>{{ calculateSum(idea2) }}</td>
              <td>{{ calculateSum(idea3) }}</td>
              <td>{{ calculateSum(idea4) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <button @click="createPDF" class="btn-custmer mt-5">
      {{ $t("save") }}
    </button>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  name: "pdf-download",
  data() {
    return {
      problems: [
        { problem: "", solution: "" },
        { problem: "", solution: "" },
        { problem: "", solution: "" },
        { problem: "", solution: "" },
      ],
      interests: { hobbies: "", skills: "" },
      needs: "",
      opportunity: "",
      idea1: {
        financialCriteria: "",
        humanCriteria: "",
        marketingCriteria: "",
        personalCriteria: "",
        knowledgeCriteria: "",
      },
      idea2: {
        financialCriteria: "",
        humanCriteria: "",
        marketingCriteria: "",
        personalCriteria: "",
        knowledgeCriteria: "",
      },
      idea3: {
        financialCriteria: "",
        humanCriteria: "",
        marketingCriteria: "",
        personalCriteria: "",
        knowledgeCriteria: "",
      },
      idea4: {
        financialCriteria: "",
        humanCriteria: "",
        marketingCriteria: "",
        personalCriteria: "",
        knowledgeCriteria: "",
      },
    };
  },

  methods: {
    calculateSum(idea) {
      var totalSum = Object.values(idea).reduce(
        (acc, value) => acc + parseFloat(value || 0),
        0
      );
      if (totalSum == 0) {
        return "";
      }
      return totalSum;
    },
    createPDF() {
      // var sTable = document.getElementById('myTable').innerHTML;
      // var style = "<style>";
      // style = style + "table {width: 100%;font: 17px Calibri;}";
      // style = style + "table, th, td {border: solid 1px #000; border-collapse: collapse;";
      // style = style + "padding: 2px 3px;text-align: center;}";
      // style = style + "</style>";
      // var win = window.open('', '', 'height=700,width=700');
      // win.document.write('<html><head>');
      // win.document.write('<title>my table</title>');
      // win.document.write(style);
      // win.document.write('</head>');
      // win.document.write('<body>');
      // win.document.write(sTable);
      // win.document.write('</body></html>');
      // win.document.close();
      // win.print();
      // Import jsPDF
      // Create a new instance of jsPDF
      // const doc = new jsPDF();
      // Define the content for the PDF
      // Set font size and add content to the PDF
      // doc.setFontSize(12);
      // doc.html(content, {
      //   callback: function () {
      //     // Save the PDF
      //     doc.save("document.pdf");
      //   },
      // });

      html2pdf()
        .from(document.getElementById("list-item-8p"))
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
.arabic-text {
  direction: rtl;
  text-align: right; /* Adjust text alignment as needed */
  font-family: sans-serif;
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
