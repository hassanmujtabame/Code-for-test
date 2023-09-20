<template>
	<div class="container" style="margin-top:85px">
		<h1>
			<span class="" style="color: #1fb9b3">نموذج : </span> دراسة الجدوى الإلكترونية
		</h1>
		<div class="mt-3">
			<p> أهداف وأسباب اختيار المشروع :</p>
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                placeholder="ما هو الدافع في مشروعك الذي جعلك تريدين تطبيقه ورأيت أنه مميز عن باقي المشاريع؟"
              />
		</div>

    <div class="mt-3">
			<p>منتجات أو خدمات المشروع</p>
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                placeholder="المنتجات أو الخدمات النهائية التي يقدمها المشروع"
              />
		</div>
    <div class="mt-3 col-12">
			<p> طريقة البيع أو طريقة تقديم الخدمة</p>
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                placeholder="توضيح البيع إما بالجملة أو بالتجزئة أو تقديم الخدمة أو المنتج عن طريق محل أو موقع الكتروني"
              />
		</div>

     <div class="mt-3 col-12">
			<p>عملاء المشروع</p>
		<input
      class="form-control py-3 px-5 fs-r-12"
      type="text"
       placeholder="ذكر جميع شرائح العملاء المستهدفين" 
      />
		</div>
 
     <div class="mt-3 col-12">
			<p> المنطقة الجغرافية</p>
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                placeholder="تحديد المكان الذي سيتم إقامة المشروع فيه، هل هو محلي أو خارجي مع ذكر اسم المنطقة"
              />
		</div>

     <div class="mt-3" style="widthfit-content">
			<p>الشكل القانوني للمشروع:</p>
          <div
                        v-for="(state, i) in items"
                        :key="i"
                        class="form-check  d-flex align-items-center mb-1"
                      >
                     
                        <input
                          class="form-check-input mx-2"
                          type="radio"
                          :value="state.id"
                          v-model="stateValue"
                          :id="`flexRadioDefault1${state.id}`"
                        />
                         <label class="form-check-label t-c" :for="`flexRadioDefault1${state.id}`">
                          {{ state.name }}
                        </label>
                      </div>
                   
     </div>

 <div class="mt-3 col-12">
       <table class="col-12">
  <thead>
    <tr>
      <th></th>
      <th>الترخيص</th>
      <th> الجهة المصدرة</th>
      <th>نوع النشاط</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="background: rgba(31, 185, 179, 0.5); color: rgba(15, 119, 116, 1);">التراخيص المطلوبة</td>
      <td><input/> </td>
      <td><input/> </td>
      <td><input/> </td>
    </tr>
 
  </tbody>

</table>
 </div>
 <div class="mt-3 col-12">
			<p>أسماء الشركاء وفقا لعقد تأسيس (إذا كان المشروع توسعة)</p>
       <table class="col-12">
  <thead>
    <tr>
      <th>الاسم</th>
      <th>الجنسية</th>
      <th>نسبة المساهمة</th>
      <th>رقم السجل المدني</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input/> </td>
      <td><input/> </td>
      <td><input/> </td>
      <td><input/> </td>
    </tr>
 
  </tbody>

</table>
 </div>
       <div class="mt-3 col-12">
			<p>بداية الإنتاج وأوقات العمل:</p>
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                placeholder="توضيح متى يتم الإنتاج بالإضافة إلى ساعات العمل وفترة الاستراحة"
              />
		</div>
	</div>
</template>
<script>

export default {
  data:(vm)=>{
    return{
        loading:false,
    group:'add-blog',
    showDialog:false,
    items:[{name:'منشأة فردية',id:'1'},{name:'شركة تضامن',id:'2'},{name:'شركة توصية',id:'3'},{name:'ذات مسئولية محدودة',id:'4'}],
    stateValue:'',
    idImage: `image-selected-${vm.generateRandomString(8)}`,
    url:`${vm.publicPath}assets/svg/Group 1171275983.svg`,
    file:null,
      options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]

  }},
  methods:{

    makeImageEmpty(){
        this.file = null;
                window.$('#' + this.idImage)
                    .attr('src', 'none')
                    .css('opacity', '0');
    },
    async uploadImage(evt,validate){
       let resValid = await validate(evt)
       if(!resValid.valid){
                this.makeImageEmpty();
                return;
       }
        if (!evt.target.files && !evt.target.files[0]) {
            this.makeImageEmpty();
                return;
            }
            this.file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload =  (e) =>{
                console.log('result',e,this.idImage)
                window.$('#'+this.idImage)
                    .attr('src', e.target.result)
                    .css('opacity', '1');

            };
            reader.readAsDataURL(this.file);
    },

    openDialog(){
        this.loading =  false;
        window.$('#'+this.idImage)
                    .attr('src', 'none')
                    .css('opacity', '0');
        return true;
    },
 

  },
  mounted(){
 
    // this.openDialog()
  }
}
</script>

<style scoped>
label{
    width:100%;
    text-align: start;
}
.img-zone{
    max-width: 430px;
}
p{
  font-size: 20px;
}
th, td{
  height: 50px;
}
th, td,table{
  border: 1px solid rgba(200, 204, 204, 1);
  text-align: center;
}
th{
background: rgba(227, 241, 241, 1);
  color: rgba(15, 119, 116, 1);
  border-top: 0px !important ;
  border-right: 1px solid  rgba(31, 185, 179, 0.5)!important ;
  border-left: 1px solid rgba(31, 185, 179, 0.5) !important ;
}
table{
  border-right: 1px solid rgba(31, 185, 179, 0.5) !important ;
  border-left: 1px solid  rgba(31, 185, 179, 0.5)!important ;
  border-top: 0px !important ;
  border-radius:25px ;

}
td input{
  width: 100%;
    height: 100%;
    border: 0;
}
</style>

