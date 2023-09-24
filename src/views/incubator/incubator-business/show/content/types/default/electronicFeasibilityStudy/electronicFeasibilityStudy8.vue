<template>
	<div class="container" >
<p>اختيار الموقع المقترح: (تحديد الموقع بشكل دقيق)</p>
		<div class="mt-3">
      <p>موطن المشروع</p>
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
              />
		</div>

    <div class="mt-3">
      <p>مكان المشروع</p>
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
              />
		</div>
    <div class="mt-3 col-12">
      <p>مساحة المشروع</p>
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
              />
		</div>

     <div class="mt-3 col-12">
       <table class="col-12">
  <thead>
    <tr>
      <th>البيان</th>
      <th>المساحة</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input/> </td>
      <td><input/> </td>
      <td><input/> </td>
      <td><input/> </td>
    </tr>
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
      <p>رسم هندسي لموقع المشروع:
احتياجات المشروع ومساحاتها: (يتم توضيح الغرف وتقسيمات موقع المشروع بالتفصيل ومساحاتها بالمتر المربع)
</p>
		<input
      class="form-control py-3 px-5 fs-r-12"
      type="text"
      />
		</div>
 <div class="mt-3">
   <p>الرسم الهندسي</p>
  <div class="col-md-12">
                            <label style="border: 0px !important;" for="imginput" class="img-zone form-label file-label first w-100">
																		<div v-if="file" class="add-img-selected w-100" >

																				<img class="image-selected-dialog" src="none" :id="idImage"/>
																		</div>
																			<div v-else class="text-center p-5" >
                                  <img :src="`${publicPath}assets/svg/Group 11712759833.svg`"  style="width: 205%" />
                                      
                                </div>
          
                            </label>
                            <ValidationProvider
                                    :name="$t('Image')"
                                 vid="image"
                                 rules="required|image"
                                    v-slot="{validate,errors}">
                            <input @change="uploadImage($event,validate) || validate($event)" class="form-control opacity-0 " type="file"
                                id="imginput">
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                        </div> 
 </div>
 <p>اختيار الفن الإنتاجي الملائم من حيث:</p>
		<div class="mt-3">
<p>درجة توفر العمالة ووعيه</p>      
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                placeholder="هل المشروع يحتاج إلى أيدي عاملة أكثر من الآلات والمعدات أو العكس؟ وهل الأيدي العاملة مدربة أو لا؟"
              />
		</div>
    <div class="mt-3">
<p>هيكل السوق</p>     
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                placeholder="أين يتركز المشروع؟ وهل سيتوسع في المستقبل أو لا؟"
              />
		</div>


 
 
     <div class="mt-3 col-12">
      <p>درجة توفر العمالة ووعيه</p>
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                placeholder="هل المشروع يحتاج إلى أيدي عاملة أكثر من الآلات والمعدات أو العكس؟ وهل الأيدي العاملة مدربة أو لا؟"
              />
		</div>

     <div class="mt-3" style="widthfit-content">
    <p>هيكل السوق</p>
        <input    class="form-control py-3 px-5 fs-r-12"
                type="text" placeholder="أين يتركز المشروع؟ وهل سيتوسع في المستقبل أو لا؟"/>
     </div>

    <p class="mt-3">متطلبات المشروع من العمالة وأجورهم: (اذكري الموارد البشرية المستخدمة في المشروع بمسماها الوظيفي وأجورهم)
عمالة ثابتة:
</p>
     <table class="col-12">
  <thead>
    <tr>
      <th>الوظيفة</th>
      <th>المؤهل</th>
      <th>العدد</th>
      <th>الأجر الأساسي</th>
      <th>أقساط التأمينات الاجتماعية</th>
      <th>البدلات</th>
      <th>الراتب (الشهري)</th>
      <th>الراتب (السنوي)</th>

    </tr>
  </thead>
  <tbody >
    <tr>
      <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
    </tr>

   <tr>
      <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
    </tr>
      <tr>
      <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
    </tr>
     <tr>
      <td style="background: rgba(255, 242, 205, 1);">الإجمالي</td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
    
    </tr>
  </tbody>

</table>
<div class="mt-3">
<p>عمالة متغيرة: (هم الموظفين الذين لا يدفع لهم راتب شهري ثابت بل بعمولة أو نسبة)</p>
     <table class="col-12">
  <thead>
    <tr>
      <th>البيان</th>
      <th>المؤهل</th>
      <th>طريقة التكلفة</th>
      <th>التكلفة السنوية</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
    </tr>
     <tr>
      <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
    </tr>

     <tr>
      <td style="background: rgba(255, 242, 205, 1);">الإجمالي</td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
    </tr>
  </tbody>

</table>
</div>
<div class="mt-3">
<p>متطلبات المشروع من المواد الخام والمواد المستهلكة:</p>
     <table class="col-12">
  <thead>
    <tr>
      <th>البيان</th>
      <th>الوصف</th>
      <th>العدد</th>
      <th>تكلفة الوحدة</th>
      <th>التكلفة السنوية</th>
      <th>المصدر</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
    </tr>
     <tr>
      <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
    </tr>

     <tr>
      <td style="background: rgba(255, 242, 205, 1);">الإجمالي</td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
    </tr>
  </tbody>

</table>
</div>
<div class="mt-3">
<p>متطلبات المشروع من الأثاث والنقل ومتطلبات التأثيث:</p>
     <table class="col-12">
  <thead>
    <tr>
      <th>البيان</th>
      <th>الوصف</th>
      <th>الكمية</th>
      <th>المصدر (ذكر اسم المحل أو الموقع الذي تم الشراء منه)</th>
      <th>تكلفة الوحدة الواحدة</th>
      <th>اجمالي التكلفة</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
    </tr>
     <tr>
      <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
       <td><input/> </td>
    </tr>

     <tr>
      <td style="background: rgba(255, 242, 205, 1);">الإجمالي</td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
      <td style="background: rgba(255, 242, 205, 1);"></td>
    </tr>
  </tbody>

</table>
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

