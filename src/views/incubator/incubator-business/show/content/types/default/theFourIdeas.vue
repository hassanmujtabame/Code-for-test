<template>
  <div id="list-item-8p" class="container">
    <h1>
      <span class="" style="color: #1fb9b3">نموذج : </span> الأربع أفكار
    </h1>
    <p class="s-c">
      خصِّص/ي بعض الوقت للتفكير مليًّا في المشكلات التي تعاني منها مجالات اهتمام حاضنة رياديات ،و بعض الافكار والحلول والرؤى التي ترغب في تطويرها/ تغييرها/ أو تحسينها في هذا المجال ؟ من وجهة نظرك.
      فكِّر في كلِّ الجوانب والاتجاهات؛ الصحة، الغذاء، التعليم، الثقافة، التجارة الالكترونية ،التقنية، الإدارة والتسويق، السياحة، الترفيه، الفاشن، العقار والسكن، والمجتمعية؟
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
      <p>قد يكون شغفك هو نقطة الانطلاق نحو مشروعك الريادي، تساعدك "النظرية اليابانية ايكجاي" على اكتشاف هذا الشغف من خلال الاجابة على هذه الاسئلة:</p>
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
          <tr style="background: rgba(227, 241, 241, 1); color: rgba(15, 119, 116, 1);">
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
        <p class="my-3" style="color: rgba(118, 118, 118, 1)">هناك عدة معايير تستخدم لتقييم أفكار المشروعات التجارية الناشئة منها:</p>
        <p style="color: rgba(118, 118, 118, 1)"><span class="m-c">1.</span> المعيار المالي: مدى قدرتك المالية لإنشاء المشروع.</p>
        <p style="color: rgba(118, 118, 118, 1)"><span class="m-c">2.</span> المعيار البشري: توافر الكفاءات البشرية.</p>
        <p style="color: rgba(118, 118, 118, 1)"><span class="m-c">3.</span> المعيار التسويقي: وجود طلب كافٍ في السوق.</p>
        <p style="color: rgba(118, 118, 118, 1)"><span class="m-c">4.</span> المعيار الشخصي: مدى حماسك و رغبتك في القيام بالمشروع.</p>
        <p style="color: rgba(118, 118, 118, 1)"><span class="m-c">5.</span> المعيار المعرفي: خبراتك و معرفتك في مجال المشروع.</p>
      </div>
   <table class="col-12">
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
      <td class="text-end">1. المعيار المالي: مدى قدرتك المالية لإنشاء المشروع</td>
      <td><input v-model="financialCriteria.idea1" /></td>
      <td><input v-model="financialCriteria.idea2" /></td>
      <td><input v-model="financialCriteria.idea3" /></td>
      <td><input v-model="financialCriteria.idea4" /></td>
    </tr>
    <tr>
      <td class="text-end">2. المعيار البشري: توافر الكفاءات البشرية</td>
      <td><input v-model="humanCriteria.idea1" /></td>
      <td><input v-model="humanCriteria.idea2" /></td>
      <td><input v-model="humanCriteria.idea3" /></td>
      <td><input v-model="humanCriteria.idea4" /></td>
    </tr>
    <tr>
      <td class="text-end">3. المعيار التسويقي: وجود طلب كافٍ في السوق</td>
      <td><input v-model="marketingCriteria.idea1" /></td>
      <td><input v-model="marketingCriteria.idea2" /></td>
      <td><input v-model="marketingCriteria.idea3" /></td>
      <td><input v-model="marketingCriteria.idea4" /></td>
    </tr>
    <tr>
      <td class="text-end">4. المعيار الشخصي: مدى حماسك ورغبتك في القيام بالمشروع</td>
      <td><input v-model="personalCriteria.idea1" /></td>
      <td><input v-model="personalCriteria.idea2" /></td>
      <td><input v-model="personalCriteria.idea3" /></td>
      <td><input v-model="personalCriteria.idea4" /></td>
    </tr>
    <tr>
      <td class="text-end">5. المعيار المعرفي: خبراتك ومعرفتك في مجال المشروع</td>
      <td><input v-model="knowledgeCriteria.idea1" /></td>
      <td><input v-model="knowledgeCriteria.idea2" /></td>
      <td><input v-model="knowledgeCriteria.idea3" /></td>
      <td><input v-model="knowledgeCriteria.idea4" /></td>
    </tr>

    <tr style="background: rgba(255, 242, 205, 1);">
      <td>المجموع</td>
      <td>{{ calculateSum(financialCriteria) }}</td>
      <td>{{ calculateSum(humanCriteria) }}</td>
      <td>{{ calculateSum(marketingCriteria) }}</td>
      <td>{{ calculateSum(personalCriteria) }}</td>
    </tr>
  </tbody>
</table>


    </div>
    <button class="btn-custmer mt-5">{{ $t("save") }}</button>
  </div>
</template>

<script>
export default {
  data() {
  return {
    problems: [
      { problem: '', solution: '' },
      { problem: '', solution: '' },
      { problem: '', solution: '' },
      { problem: '', solution: '' },
    ],
    interests: { hobbies: '', skills: '' },
    needs: '',
    opportunity: '',
    financialCriteria: {
      idea1: 0,
      idea2: 0,
      idea3: 0,
      idea4: 0,
    },
    humanCriteria: {
      idea1: 0,
      idea2: 0,
      idea3: 0,
      idea4: 0,
    },
    marketingCriteria: {
      idea1: 0,
      idea2: 0,
      idea3: 0,
      idea4: 0,
    },
    personalCriteria: {
      idea1: 0,
      idea2: 0,
      idea3: 0,
      idea4: 0,
    },
    knowledgeCriteria: {
      idea1: 0,
      idea2: 0,
      idea3: 0,
      idea4: 0,
    },
  };
},

  methods: {
    calculateSum(criteria) {
      return Object.values(criteria).reduce(
        (acc, value) => acc + parseFloat(value || 0),
        0
      );
    },
  },
};
</script>

<style>
  label {
    width: 100%;
    text-align: start;
  }
  .img-zone {
    max-width: 430px;
  }
  th,
  td {
    height: 50px;
  }
  th,
  td,
  table {
    border: 1px solid rgba(0, 0, 0, 1);
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
