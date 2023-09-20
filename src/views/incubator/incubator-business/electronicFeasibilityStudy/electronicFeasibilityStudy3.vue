<template>
	<div class="container" style="margin-top:85px">
		<h1>
			<span class="" style="color: #1fb9b3">نموذج : </span> دراسة الجدوى الإلكترونية
		</h1>
		<div class="mt-3">
      <p>الرسالة</p>
      <textarea
               rows="3" 
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                placeholder="اكتب رسالة المشروع هنا.."
              />
		</div>
    <div class="mt-3">
      <p>الرؤية</p>
      <textarea
               rows="3" 
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                placeholder="اكتب رؤية المشروع هنا.."
              />
		</div>



     <div class="mt-3" style="widthfit-content">
			<p>أهداف المشروع</p>
          <div
                        v-for="(state, i) in items"
                        :key="i"
                        class="form-check  d-flex align-items-center mb-1"
                      >
                     
                        <input
                          class="form-check-input mx-2"
                          type="checkbox"
                          :value="state.id"
                          v-model="stateValue"
                          :id="`flexRadioDefault1${state.id}`"
                        />
                         <label class="form-check-label t-c" :for="`flexRadioDefault1${state.id}`">
                          {{ state.name }}
                        </label>
                      </div>
                   
     </div>



       <div class="mt-3 col-8">
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                placeholder="اكتب هدف المشروع هنا.."
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
    items:[{name:'توفير الخدمات بجودة عالية',id:'1'},{name:'توفير الخدمات بجودة عالية',id:'2'},{name:'توفير الخدمات بجودة عالية',id:'3'},{name:'توفير الخدمات بجودة عالية',id:'4'},{name:'توفير الخدمات بجودة عالية',id:'5'},{name:'أخرى',id:'6'}],
    stateValue:[],
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
