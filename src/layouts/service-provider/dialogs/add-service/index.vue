<template>
    <!-- -------------------------add service  ---------------------------------------- -->
    <DialogSimple :group="group" :open-dialog="openDialog" :close-dialog="closeDialog">
        <ValidationObserver ref="form" tag="form">
            <div class="row add-portfolio m-3 p-0">
                <div class="col-12 col-lg-4  justify-content-center m-auto">
                    <div class="col-md-12">
                        <label for="imginput" class="form-label file-label first w-100">
                            <div class="text-center p-5">
                                <img src="/assets/svg/empty-image.svg">

                                <p class="m-c">أضافة صورة العرض </p>
                            </div>
                            <div class="add-img-selected">

                                <img class="w-100 h-100 image-selected-dialog" src="none" :id="idImage" />
                            </div>
                        </label>
                        <input @change="uploadImage" class="form-control d-none" type="file" id="imginput">
                    </div>
                    <div class="col-md-12">
                        <div class="col-md-12">
                            <div class="text">

                                <label for="choose-file" class="custom-file-upload file-label  w-100 p-2 text-center "
                                    id="choose-file-label">
                                    <svg width="58" height="56" viewBox="0 0 58 56" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M36.1174 53.0832H21.8801C8.99532 53.0832 3.49023 47.6698 3.49023 34.9998V20.9998C3.49023 8.32984 8.99532 2.9165 21.8801 2.9165H36.1174C49.0021 2.9165 54.5072 8.32984 54.5072 20.9998V34.9998C54.5072 47.6698 49.0021 53.0832 36.1174 53.0832ZM21.8801 6.4165C10.9411 6.4165 7.04956 10.2432 7.04956 20.9998V34.9998C7.04956 45.7565 10.9411 49.5832 21.8801 49.5832H36.1174C47.0563 49.5832 50.9479 45.7565 50.9479 34.9998V20.9998C50.9479 10.2432 47.0563 6.4165 36.1174 6.4165H21.8801Z"
                                            fill="#1FB9B3" />
                                        <path
                                            d="M36.1175 23.94C35.6666 23.94 35.2158 23.7766 34.8598 23.4266L28.9988 17.6633L23.1378 23.4266C22.4497 24.1033 21.3107 24.1033 20.6225 23.4266C19.9344 22.75 19.9344 21.63 20.6225 20.9533L27.7412 13.9533C28.4293 13.2766 29.5683 13.2766 30.2564 13.9533L37.3751 20.9533C38.0632 21.63 38.0632 22.75 37.3751 23.4266C37.0192 23.7766 36.5683 23.94 36.1175 23.94Z"
                                            fill="#1FB9B3" />
                                        <path
                                            d="M28.9994 35.6066C28.0265 35.6066 27.2197 34.8133 27.2197 33.8566V15.1899C27.2197 14.2333 28.0265 13.4399 28.9994 13.4399C29.9723 13.4399 30.779 14.2333 30.779 15.1899V33.8566C30.779 34.8366 29.9723 35.6066 28.9994 35.6066Z"
                                            fill="#1FB9B3" />
                                        <path
                                            d="M28.9987 42.5369C23.9919 42.5369 18.9614 41.7435 14.1919 40.1802C13.2665 39.8769 12.7682 38.8736 13.0767 37.9636C13.3851 37.0536 14.4055 36.5402 15.3309 36.8669C24.158 39.7602 33.8631 39.7602 42.6902 36.8669C43.6157 36.5635 44.636 37.0536 44.9445 37.9636C45.2529 38.8736 44.7546 39.8769 43.8292 40.1802C39.036 41.7669 34.0055 42.5369 28.9987 42.5369Z"
                                            fill="#1FB9B3" />
                                    </svg>


                                    <p class="m-c">
                                        اضافة ملف
                                    </p>
                                </label>
                                <input name="uploadDocument" type="file" id="choose-file"
                                    accept=".jpg,.jpeg,.pdf,doc,docx,application/msword,.png" style="display: none;" />

                            </div>


                        </div>



                    </div>


                </div>
                <div class="col-12 col-lg-8">
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="عنوان الخدمة">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="سعر الخدمة">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder=" مدة التنفيذ">
                    </div>
                    <div class="mb-3 position-relative">
                        <select name="" id="" class="form-control ">
                            <option value="" class="t-c" selected> تصنيف الخدمة</option>
                            <option value="">اونلاين</option>
                            <option value="">اوفلاين</option>
                        </select>
                        <div style="top: 7px;
                          left: 10px;" class="position-absolute">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"
                                    fill="#737373" />
                            </svg>

                        </div>
                    </div>
                    <div class="mb-3  position-relative">
                        <select name="" id="" class="form-control">
                            <option value="" class="t-c" selected> مجال الخدمة</option>
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



                    <div class="mb-3">
                        <textarea class="form-control" rows="10"
                            placeholder="أكتب التفاصيل الخاصة بالخدمة بدقة"></textarea>
                    </div>
                    <div class="mb-3 position-relative">
                        <select name="" id="" class="form-control">
                            <option value="" class="t-c" selected> الكلمات المفتاحية</option>
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
            <button type="button" class="btn btn-main">
                انشري الخدمة
            </button>
        </template>
    </DialogSimple>
</template>

<script>
import DialogSimple from '@/components/modals/large.vue'
export default {
    name: 'dialog-add-service',
    components: {
        DialogSimple
    },
    data: (vm) => {
      return  {
        idImage: `image-selected-${vm.generateRandomString(8)}`,
        group: 'dialog-add-service',
        imageSelected: null,
    }
    },
    methods: {
        uploadImage(evt) {
            if (!evt.target.files && !evt.target.files[0]) {
                console.log('none',evt)
                this.imageSelected = null;
                window.$('#' + this.idImage)
                    .attr('src', 'none')
                    .css('opacity', '0');
                return;
            }
            this.imageSelected = evt.target.files[0];
            var reader = new FileReader();
            reader.onload =  (e) =>{
                console.log('result',e,this.idImage)
                window.$('#'+this.idImage)
                    .attr('src', e.target.result)
                    .css('opacity', '1');

            };
            reader.readAsDataURL(this.imageSelected);

},
openDialog(){
    window.$('#'+this.idImage)
                    .attr('src', 'none')
                    .css('opacity', '0');
return true;
},
closeDialog(){
return true;
}
}
}
</script>