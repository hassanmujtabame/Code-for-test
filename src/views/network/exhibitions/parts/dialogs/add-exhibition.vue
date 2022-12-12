<template>
  
        <DialogSimple :show.sync="showDialog">
           
            <ValidationObserver ref="form">
                        <div class="row add-portfolio m-3 p-0 position-relatiuve">
                            <div class="col-12 col-lg-4  justify-content-center m-auto">
                                <div class="col-md-12">
                                    <label for="imginput" class="form-label file-label first w-100">
                                        <div class="text-center p-5">
                                            <svg width="96" height="96" viewBox="0 0 96 96" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M60 91H36C14.28 91 5 81.72 5 60V36C5 14.28 14.28 5 36 5H60C81.72 5 91 14.28 91 36V60C91 81.72 81.72 91 60 91ZM36 11C17.56 11 11 17.56 11 36V60C11 78.44 17.56 85 36 85H60C78.44 85 85 78.44 85 60V36C85 17.56 78.44 11 60 11H36Z"
                                                    fill="#1FB9B3" />
                                                <path
                                                    d="M36 43C29.92 43 25 38.08 25 32C25 25.92 29.92 21 36 21C42.08 21 47 25.92 47 32C47 38.08 42.08 43 36 43ZM36 27C33.24 27 31 29.24 31 32C31 34.76 33.24 37 36 37C38.76 37 41 34.76 41 32C41 29.24 38.76 27 36 27Z"
                                                    fill="#1FB9B3" />
                                                <path
                                                    d="M10.6801 78.8002C9.72006 78.8002 8.76006 78.3202 8.20006 77.4802C7.28006 76.1202 7.64006 74.2402 9.04006 73.3202L28.7601 60.0802C33.0801 57.1602 39.0401 57.5202 42.9601 60.8402L44.2801 62.0002C46.2801 63.7202 49.6801 63.7202 51.6401 62.0002L68.2801 47.7202C72.5201 44.0802 79.2001 44.0802 83.4801 47.7202L90.0001 53.3202C91.2401 54.4002 91.4001 56.2802 90.3201 57.5602C89.2401 58.8002 87.3601 58.9602 86.0801 57.8802L79.5601 52.2802C77.5601 50.5602 74.1601 50.5602 72.1601 52.2802L55.5201 66.5602C51.2801 70.2002 44.6001 70.2002 40.3201 66.5602L39.0001 65.4002C37.1601 63.8402 34.1201 63.6802 32.0801 65.0802L12.3601 78.3202C11.8401 78.6402 11.2401 78.8002 10.6801 78.8002Z"
                                                    fill="#1FB9B3" />
                                            </svg>

                                            <p class="m-c">أضافة صورة العرض </p>
                                        </div>
                                        <div class="add-img-selected">

                                            <img class="w-100 h-100" src="none" id="image_selected" />
                                        </div>
                                    </label>
                                    <input onchange="readURL(this);" class="form-control opacity-0" type="file"
                                        id="imginput">
                                </div>
                                <div class="col-md-12">
                                    <div class="col-md-12">
                                        <div class="text">

                                            <label for="choose-file"
                                                class="custom-file-upload file-label  w-100 p-4 text-center d-flex justify-content-center m-auto"
                                                id="choose-file-label">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16.4388 28.4538C14.9854 28.4538 13.5321 27.9071 12.4254 26.8005C10.2121 24.5871 10.2121 21.0005 12.4254 18.7871L15.7321 15.4938C16.1188 15.1071 16.7588 15.1071 17.1454 15.4938C17.5321 15.8805 17.5321 16.5205 17.1454 16.9071L13.8388 20.2005C12.4121 21.6271 12.4121 23.9605 13.8388 25.3871C15.2654 26.8138 17.5988 26.8138 19.0254 25.3871L24.2121 20.2005C25.7854 18.6271 26.6521 16.5338 26.6521 14.3071C26.6521 12.0805 25.7854 9.98714 24.2121 8.4138C20.9587 5.16047 15.6788 5.16047 12.4254 8.4138L6.77208 14.0671C5.45208 15.3871 4.71875 17.1471 4.71875 19.0138C4.71875 20.8805 5.45208 22.6405 6.77208 23.9605C7.15875 24.3471 7.15875 24.9871 6.77208 25.3738C6.38542 25.7605 5.74542 25.7605 5.35875 25.3738C3.66542 23.6671 2.71875 21.4138 2.71875 19.0138C2.71875 16.6138 3.65208 14.3471 5.35875 12.6538L11.0121 7.00047C15.0388 2.9738 21.5988 2.9738 25.6254 7.00047C27.5721 8.94714 28.6521 11.5471 28.6521 14.3071C28.6521 17.0671 27.5721 19.6671 25.6254 21.6138L20.4388 26.8005C19.3321 27.9071 17.8921 28.4538 16.4388 28.4538Z"
                                                        fill="#1FB9B3" />
                                                </svg>



                                                <p class="m-c m-0 p-0">
                                                    أرفق خريطة المعرض
                                                </p>
                                            </label>
                                            <input name="uploadDocument" type="file" id="choose-file"
                                                accept=".jpg,.jpeg,.pdf,doc,docx,application/msword,.png"
                                                style="opacity: 0;" />

                                        </div>


                                    </div>



                                </div>
                                <div class="col-md-12">
                                    <textarea class="w-100 border t-c " name="" id="" rows="10">أكتب تفاصيل الدخول الى المعرض والتعليمات العامة التي يجب مراعتها ان وجدت 
                                مثل ( لا يوجد ةغرف تغير ملابس ) (لا يوجد دفع غير كاش ) (يمنع اصطحاب الاطفال )
                                 </textarea>

                                </div>
                                <div class="col-md-12">
                                    <div class="border p-3 text-center">

                                        <h6>هل المعرض متاح للمشاركة ؟</h6>
                                        <div class="d-flex justify-content-center   gap-2">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault1" data-bs-toggle="modal" data-bs-target="#addModal2">
                                                <label class="form-check-label" for="flexRadioDefault1"
                                                    >
                                                    نعم
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault2" checked>
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    لا
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="col-12 col-lg-8">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="عنوان المعرض">
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="سعر الدخول  ">
                                </div>
                                <div class=" mb-3">
                                    <div class="form-group position-relative">

                                        <input type="text" class="form-control" id="input_from"
                                            placeholder=" تاريخ بداية المعرض - تاريخ نهاية المعرض">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="form-group position-relative">

                                        <input type="text" class="form-control" id="input_to"
                                            placeholder=" وقت بداية المعرض - وقت نهاية المعرض">
                                    </div>
                                </div>

                                <div class="mb-3 position-relative">
                                    <select name="" id="" class="form-control ">
                                        <option value="" class="t-c" selected> المدينة</option>
                                        <option value="">اونلاين</option>
                                        <option value="">اوفلاين</option>
                                    </select>
                                    <div style="    top: 7px;
                          left: 10px;" class="position-absolute">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"
                                                fill="#737373" />
                                        </svg>

                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="form-group position-relative">

                                        <input type="text" class="form-control" id="input_to"
                                            placeholder=" حدد العنوان على جوجل ماب">
                                    </div>
                                </div>



                                <div class="mb-3">
                                    <textarea class="form-control" rows="10"
                                        placeholder="أكتب التفاصيل الخاصة بالمعرض ( عن المعرض و اهميته و المنتجات المعروضة به )"></textarea>
                                </div>
                                <div class="mb-3 position-relative">
                                    <select name="" id="" class="form-control">
                                        <option value="" class="t-c" selected> تصنيفات المعرض</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                    </select>
                                    <div style="    top: 7px;
                          left: 10px;" class="position-absolute">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"
                                                fill="#737373" />
                                        </svg>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </ValidationObserver>
        <template v-slot:actions>
            <button @click="save" type="button" class="btn btn-main">
                 انشري التدوينة 
            </button>
        </template>
      </DialogSimple>

</template>
<script>
import DialogSimple from '@/components/modals/large.vue'
export default {
  components:{
    DialogSimple
  },
  data:()=>({
    group:'add-dialog',
    showDialog:false,
    categories:[],
    tags:[],
    url:'/assets/svg/empty-image.svg',
    file:null,
    blog:{
        title:'',
        description:'',
        short_description:'',
        category:[],
        tag:[],
    }
  }),
  methods:{
   async save(){
    let valid = await this.$refs.form.validate();
        if(!valid){
            console.log('form invalid');
            return ;
        }
     let formData = new FormData();
     formData.append('title',this.blog.title);
     formData.append('ar[title]',this.blog.title);
     formData.append('ar[description]',this.blog.description);
     formData.append('ar[short_description]',this.blog.short_description);
     formData.append('file',this.file);
     formData.append('user_id',this.user.id);
    // for (var i = 0; i < this.blog.tag.length; i++) {
            formData.append('tags', this.blog.tag.id);
    //}
    //for ( i = 0; i < this.blog.category.length; i++) {
            formData.append('categories', this.blog.category.id);
   // }
        try {
            let { data } = await this.$axios.post('/network/blogs',formData)
            if(data.success){
                console.log('success',data)
            }
        } catch (error) {
            //
            if(error.response){
                    let response =error.response
                    console.log('error',response)
                    if(response.status==422){
                        if(response.data.errors)
                        this.$refs.form.setErrors(response.data.errors)
                    }
                }
           
        }
    },
    uploadImage(evt){
        this.file = evt.target.files[0];
        if(this.file)
        this.url = URL.createObjectURL( this.file);
        else{
            URL.revokeObjectURL(this.url);
            this.url = '/assets/svg/empty-image.svg'
        }
        

    },
    async loadBlogTags(){
        try {
            let {data} =  await this.$axios.get('/network/blogs-tags')
            if(data.success){
                this.tags = data.data
            }
        } catch (error) {
             console.log('error',error)
        }
    },
    async loadBlogCategories(){
        try {
            let {data} =  await this.$axios.get('/network/blogs-categories')
            if(data.success){
                this.categories = data.data
            }
        } catch (error) {
             console.log('error',error)
        }
    },
    openDialog(){
        console.log('open ')
        this.showDialog = true
    },
    closeDialog(){
        this.showDialog = false
    }
  },
  created(){
    window.EventBus.listen(this.group+'-open-dialog',this.openDialog)
    window.EventBus.listen(this.group+'-close-dialog',this.closeDialog)
  },
  beforeDestroy(){
    window.EventBus.off(this.group+'-open-dialog',this.openDialog)
    window.EventBus.off(this.group+'-close-dialog',this.closeDialog)
  },
  mounted(){
    //this.loadBlogTags()
    //this.loadBlogCategories()
  }
}
</script>

<style scoped>
label{
    width:100%;
    text-align: start;
}

</style>