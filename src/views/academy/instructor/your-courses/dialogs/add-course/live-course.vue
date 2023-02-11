<template>
    <d-dialog-large :xl="false" 
    :group="group"
    :open-dialog="openDialog"
    :close-dialog="closeDialog"
    >
    <template v-slot:default>
        <div class="form-step" id="form-step-1" v-show="step==1">
                <div class="mt-3">
                    <input type="text" class="form-control" name="" id="" placeholder="عدد ايام الدورة ">
                </div>
                <div class="mt-3">
                    <d-drown-list label="ايام الدورة ( حددي ايام الاسبوع )" :opts="daysOfWeek" 
                                track-id="id" label-name="name"
                                v-model="itemForm.days"
                                multi-select
                                placeholder="ايام الدورة ( حددي ايام الاسبوع )"
                                />

                 
                </div>
                <div class="mt-3">
                    <input type="text" class="form-control" id="input_from" placeholder="موعد بداية الدورة  ">

                </div>
                <div class="mt-3">
                    <input type="text" class="form-control" id="" placeholder="نوع الشهادة التي تمنح للطلاب   ">

                </div>
                </div>
                <div class="form-step" id="form-step-2" v-show="step==2">
                <div class="mt-3">
                    <input type="text" class="form-control" name="" id="" placeholder="عنوان الدورة ">
                </div>
                <div class="mb-3 position-relative">
                    <select name="" id="" class="form-select " >
                        <option value="" class="t-c" selected> حدد مجال الدورة  </option>
                        <option value="">لايف</option>
                        <option value="">اوفلاين</option>
                    </select>
                </div>
                <div class="dropdown">
                  <button class="btn  border bg-transparent text-darkdropdown-toggle w-100 text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    أضافة اختبار 
                  
                  </button>
                  <ul class="dropdown-menu w-100">
                    <li><a class="dropdown-item" >لايف</a></li>
                    <li><a class="dropdown-item" href="">  نعم  </a></li>
                    <li><a class="dropdown-item" href="">لا  </a></li>
                  </ul>
                </div>
                <div class="mb-3">
                    <div class="d-flex upload-request-file form-control align-items-center border-0  mb-3">
                        <label for="fileinput1" class="form-label">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2566 22.2483H8.73656C3.82656 22.2483 1.72656 20.1483 1.72656 15.2383V15.1083C1.72656 10.6683 3.47656 8.52832 7.39656 8.15832C7.79656 8.12832 8.17656 8.42832 8.21656 8.83832C8.25656 9.24832 7.95656 9.61832 7.53656 9.65832C4.39656 9.94832 3.22656 11.4283 3.22656 15.1183V15.2483C3.22656 19.3183 4.66656 20.7583 8.73656 20.7583H15.2566C19.3266 20.7583 20.7666 19.3183 20.7666 15.2483V15.1183C20.7666 11.4083 19.5766 9.92832 16.3766 9.65832C15.9666 9.61832 15.6566 9.25832 15.6966 8.84832C15.7366 8.43832 16.0866 8.12832 16.5066 8.16832C20.4866 8.50832 22.2666 10.6583 22.2666 15.1283V15.2583C22.2666 20.1483 20.1666 22.2483 15.2566 22.2483Z" fill="#1FB9B3"/>
                                <path d="M12 15.7511C11.59 15.7511 11.25 15.4111 11.25 15.0011V3.62109C11.25 3.21109 11.59 2.87109 12 2.87109C12.41 2.87109 12.75 3.21109 12.75 3.62109V15.0011C12.75 15.4111 12.41 15.7511 12 15.7511Z" fill="#1FB9B3"/>
                                <path d="M15.3538 6.60141C15.1638 6.60141 14.9738 6.53141 14.8238 6.38141L12.0038 3.56141L9.18375 6.38141C8.89375 6.67141 8.41375 6.67141 8.12375 6.38141C7.83375 6.09141 7.83375 5.61141 8.12375 5.32141L11.4738 1.97141C11.7638 1.68141 12.2438 1.68141 12.5338 1.97141L15.8838 5.32141C16.1738 5.61141 16.1738 6.09141 15.8838 6.38141C15.7438 6.53141 15.5438 6.60141 15.3538 6.60141Z" fill="#1FB9B3"/>
                                </svg>
                                
                                
                        </label>
                        <input style="z-index: 99;" class="form-control opacity-0 position-absolute  " type="file" onchange="readName(this)" id="fileinput1">
                        <span id="selected_filename" class="mx-3 px-4 gray font-13 border-0  position-absolute m-c">
                            ارفق صور و فيدوهات لمنتجاتك او لبوثاتك السابقة
                        </span>
                    </div>
                </div>
       
            </div>
            </template>
            <template v-slot:actions>
              <button @click="nextStep" class="btn bg-main text-white px-3" >أستمر</button>
                </template>
    </d-dialog-large>
    </template>
    
    <script>
    import commonAPI from '@/services/api/common'
    export default {
        name:'add-course-dialog-live',
      props:{
        group:{
            type:String,
            default:'add-course-live'
        }
      },
      data:()=>{
        let daysOfWeek = commonAPI.getDaysOfWeek()
        return{
            daysOfWeek:daysOfWeek,
            step:1,
            showDialog:false,
            itemForm:{
                days:[]
            }
        }
      },
      methods:{
        nextStep(){
            this.step+=1
        },
        closeEvent(){
      this.fireOpenDialog(this.group)
    },
        openDialog(){
            this.showDialog = true;
            return true;
        },
        closeDialog(){
            this.showDialog = false;
            return true;
        }
      }
    }
    </script>
    
    <style>
    
    </style>