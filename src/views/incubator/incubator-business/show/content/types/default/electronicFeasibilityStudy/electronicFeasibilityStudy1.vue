<template>
	<div class="container mt-5">
		<h1>
			<span class="" style="color: #1fb9b3">نموذج : </span> دراسة الجدوى الإلكترونية
		</h1>
		<div class="mt-3">
			<p>اسم المشروع:</p>
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                placeholder="اكتب اسم مشروعك هنا"
              />
		</div>
			<div class="mt-3">
			<p> شعار المشروع</p>
	
	<div class="container">
                            <label style="border: 0px !important;" for="imginput" class="img-zone form-label file-label first w-100">
																		<div v-if="file" class="add-img-selected w-100">

																				<img class="image-selected-dialog" src="none" :id="idImage" />
																		</div>
																			<div v-else class="text-center p-5" >
                                  <img :src="`${publicPath}assets/svg/Group 1171275983.svg`"  style="width: 205%;"/>
                                      
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
    <div class="mt-3">
			<p> اصنع شعارك</p>
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
              />
		</div>
    <div class="mt-3 col-12">
			<p> وصف الفكرة</p>
		<input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                placeholder="اكتبي مقدمة أو اشرحي فكرة المشروع بما لا يقل عن 50 كلمة"
              />
		</div>
     <div class="mt-3 col-12">
			<p>القطاع</p>
        <b-form-select class="w-100" v-model="selected" :options="options"></b-form-select>
		</div>
     <div class="mt-3 col-12">
			<p>النشاط</p>
        <b-form-select class="w-100" v-model="selected" :options="options"></b-form-select>
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
    categories:[],
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
</style>

