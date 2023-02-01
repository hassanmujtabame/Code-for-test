<template>
    <d-dialog-large :group="group" 
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    :xl="false"
    >

        <template  v-slot:header>
            <div v-if="showDialog">
            <a href="" class="m-c">
                خدمة جاهزة :
            </a>
         {{ itemDialog.title }}
        </div>
        </template>
        <template v-slot:default>
            <h4 class="t-c">
                معلومات الخدمة {{ dateSelected }}
            </h4>
            <div v-if="showDialog">
                <p>
                    هذه المعلومات تم أضافتها بواسطه مقدم الخدمة يمكنكم دائما التواصل معاً و تغيرها في اي وقت بما يتناسب
                    مع مطلباتكم أنت و مقدم الخدمة
                </p>
                <div class="d-flex justify-content-between border-bottom">
                    <p>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.8993 14.1675C10.7693 14.1675 9.0293 12.4375 9.0293 10.2975C9.0293 8.1575 10.7693 6.4375 12.8993 6.4375C15.0293 6.4375 16.7693 8.1675 16.7693 10.3075C16.7693 12.4475 15.0293 14.1675 12.8993 14.1675ZM12.8993 7.9375C11.5993 7.9375 10.5293 8.9975 10.5293 10.3075C10.5293 11.6175 11.5893 12.6775 12.8993 12.6775C14.2093 12.6775 15.2693 11.6175 15.2693 10.3075C15.2693 8.9975 14.1993 7.9375 12.8993 7.9375Z"
                                fill="#979797" />
                            <path
                                d="M12.9001 22.76C11.4201 22.76 9.93008 22.2 8.77008 21.09C5.82008 18.25 2.56008 13.72 3.79008 8.33C4.90008 3.44 9.17008 1.25 12.9001 1.25C12.9001 1.25 12.9001 1.25 12.9101 1.25C16.6401 1.25 20.9101 3.44 22.0201 8.34C23.2401 13.73 19.9801 18.25 17.0301 21.09C15.8701 22.2 14.3801 22.76 12.9001 22.76ZM12.9001 2.75C9.99008 2.75 6.25008 4.3 5.26008 8.66C4.18008 13.37 7.14008 17.43 9.82008 20C11.5501 21.67 14.2601 21.67 15.9901 20C18.6601 17.43 21.6201 13.37 20.5601 8.66C19.5601 4.3 15.8101 2.75 12.9001 2.75Z"
                                fill="#979797" />
                        </svg>
                        العنوان
                        <a href="" class="m-c">
                            {{itemDialog.city}}
                        </a>
                    </p>
                    <p>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.1912 22.75H6.71117C4.22117 22.75 2.20117 20.73 2.20117 18.24V11.51C2.20117 9.02001 4.22117 7 6.71117 7H18.1912C20.6812 7 22.7012 9.02001 22.7012 11.51V12.95C22.7012 13.36 22.3612 13.7 21.9512 13.7H19.9312C19.5812 13.7 19.2612 13.83 19.0312 14.07L19.0212 14.08C18.7412 14.35 18.6112 14.72 18.6412 15.1C18.7012 15.76 19.3312 16.29 20.0512 16.29H21.9512C22.3612 16.29 22.7012 16.63 22.7012 17.04V18.23C22.7012 20.73 20.6812 22.75 18.1912 22.75ZM6.71117 8.5C5.05117 8.5 3.70117 9.85001 3.70117 11.51V18.24C3.70117 19.9 5.05117 21.25 6.71117 21.25H18.1912C19.8512 21.25 21.2012 19.9 21.2012 18.24V17.8H20.0512C18.5412 17.8 17.2612 16.68 17.1412 15.24C17.0612 14.42 17.3612 13.61 17.9612 13.02C18.4812 12.49 19.1812 12.2 19.9312 12.2H21.2012V11.51C21.2012 9.85001 19.8512 8.5 18.1912 8.5H6.71117Z"
                                fill="#979797" />
                            <path
                                d="M2.95117 13.16C2.54117 13.16 2.20117 12.82 2.20117 12.41V7.84006C2.20117 6.35006 3.14117 5.00001 4.53117 4.47001L12.4712 1.47001C13.2912 1.16001 14.2012 1.27005 14.9112 1.77005C15.6312 2.27005 16.0512 3.08005 16.0512 3.95005V7.75003C16.0512 8.16003 15.7112 8.50003 15.3012 8.50003C14.8912 8.50003 14.5512 8.16003 14.5512 7.75003V3.95005C14.5512 3.57005 14.3712 3.22003 14.0512 3.00003C13.7312 2.78003 13.3512 2.73003 12.9912 2.87003L5.05117 5.87003C4.24117 6.18003 3.69117 6.97006 3.69117 7.84006V12.41C3.70117 12.83 3.36117 13.16 2.95117 13.16Z"
                                fill="#979797" />
                            <path
                                d="M20.0526 17.7992C18.5426 17.7992 17.2626 16.6792 17.1426 15.2392C17.0626 14.4092 17.3626 13.5992 17.9626 13.0092C18.4726 12.4892 19.1726 12.1992 19.9226 12.1992H22.0026C22.9926 12.2292 23.7526 13.0092 23.7526 13.9692V16.0292C23.7526 16.9892 22.9926 17.7692 22.0326 17.7992H20.0526ZM21.9826 13.6992H19.9326C19.5826 13.6992 19.2626 13.8292 19.0326 14.0692C18.7426 14.3492 18.6026 14.7292 18.6426 15.1092C18.7026 15.7692 19.3326 16.2992 20.0526 16.2992H22.0126C22.1426 16.2992 22.2626 16.1792 22.2626 16.0292V13.9692C22.2626 13.8192 22.1426 13.7092 21.9826 13.6992Z"
                                fill="#979797" />
                            <path
                                d="M14.4521 12.75H7.45215C7.04215 12.75 6.70215 12.41 6.70215 12C6.70215 11.59 7.04215 11.25 7.45215 11.25H14.4521C14.8621 11.25 15.2021 11.59 15.2021 12C15.2021 12.41 14.8621 12.75 14.4521 12.75Z"
                                fill="#979797" />
                        </svg>
                        سعر الخدمة
                        <a href="" class="m-c">
                            {{itemDialog.price}} {{$t('riyals')}}
                        </a>
                    </p>
                    <p>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.6172 22.75C7.37719 22.75 3.11719 18.49 3.11719 13.25C3.11719 8.01 7.37719 3.75 12.6172 3.75C17.8572 3.75 22.1172 8.01 22.1172 13.25C22.1172 18.49 17.8572 22.75 12.6172 22.75ZM12.6172 5.25C8.20719 5.25 4.61719 8.84 4.61719 13.25C4.61719 17.66 8.20719 21.25 12.6172 21.25C17.0272 21.25 20.6172 17.66 20.6172 13.25C20.6172 8.84 17.0272 5.25 12.6172 5.25Z"
                                fill="#979797" />
                            <path
                                d="M12.6172 13.75C12.2072 13.75 11.8672 13.41 11.8672 13V8C11.8672 7.59 12.2072 7.25 12.6172 7.25C13.0272 7.25 13.3672 7.59 13.3672 8V13C13.3672 13.41 13.0272 13.75 12.6172 13.75Z"
                                fill="#979797" />
                            <path
                                d="M15.6172 2.75H9.61719C9.20719 2.75 8.86719 2.41 8.86719 2C8.86719 1.59 9.20719 1.25 9.61719 1.25H15.6172C16.0272 1.25 16.3672 1.59 16.3672 2C16.3672 2.41 16.0272 2.75 15.6172 2.75Z"
                                fill="#979797" />
                        </svg>

                        مدة التنفيذ
                        <a href="" class="m-c">
                            {{ itemDialog.execution_period }} {{ $t('days') }}
                        </a>
                    </p>
                </div>
                <div class="p-2">
                    <h3 class="text-danger">
                        معلومات يجب عليك أضافتها
                    </h3>

                        <ValidationProvider
                        tag="div"
                        class="mb-3"
                        :name="$t('execution_period')"
                        vid="execution_period"
                        v-slot="{errors}"
                        >
                        <label class="form-label"> وقت تنفيذ او استلام الخدمة</label>
                        <div class="position-relative">
                        <select v-model="itemForm.execution_period" class="form-control ">
                            <option value="" class="t-c" selected> وقت تنفيذ او استلام الخدمة</option>
                            <option value="specific_date">تحديد موعد التنفيذ</option>
                            <option value="time_available_product">الاستلام  وقت توفر المنتج</option>
                        </select>
                        <div style="top: 7px;left: 10px;" class="position-absolute">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"
                                    fill="#737373" />
                            </svg>

                        </div>
                        </div>
                        <d-error-input :errors="errors" v-if="errors.length" />
                    </ValidationProvider>
                    <!--for specific_date-->
                    <div v-if="itemForm.execution_period=='specific_date'">
                        <ValidationProvider
                        tag="div"
                        class="mb-3"
                        :name="$t('execution_period')"
                        vid="execution_period"
                        v-slot="{errors}"
                        >
                        <date-picker-input
                        class="form-control"  
                            v-model="itemForm.specific_date" 
                            mode="date" 
                        />
                        <d-error-input :errors="errors" v-if="errors.length" />
                        </ValidationProvider>
                    </div>
                    <ValidationProvider
                        tag="div"
                        class="mb-3"
                        :name="$t('execution_place')"
                        vid="execution_place"
                        v-slot="{errors}"
                        >
                        <label class="form-label"> مكان التنفيذ او التسليم</label>
                        <div class="position-relative">
                        <select v-model="itemForm.execution_place" class="form-control ">
                            <option value="" class="t-c" selected > مكان التنفيذ او التسليم</option>
                            <option value="delivery_home">توصيل للمنزل</option>
                        </select>
                        <div style="top: 7px;left: 10px;" class="position-absolute">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"
                                    fill="#737373" />
                            </svg>
                        </div>
                        </div>
                        <d-error-input :errors="errors" v-if="errors.length" />
                    </ValidationProvider>
                    <div class="d-flex">
                        <div>
                            <h3>
                                عدد مرات طلب الخدمة
                            </h3>
                            <p>
                                يمكنك طلب الخدمة لك عدة مرات او لاكثر من شخص
                            </p>
                        </div>
                        <div class="d-flex align-items-start">
                            <button @click="increase" class="btn-inc" id="increase" for="number">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H20C21.933 0.5 23.5 2.067 23.5 4V20C23.5 21.933 21.933 23.5 20 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z"
                                        fill="#1FB9B3" stroke="#1FB9B3" />
                                    <path
                                        d="M16.6727 13.208H13.1927V16.712H11.8007V13.208H8.29672V11.816H11.8007V8.336H13.1927V11.816H16.6727V13.208Z"
                                        fill="white" />
                                </svg>
                            </button>
                            <input type="text" v-model="itemForm.count" name="number" id="in-number">
                            <button :disabled="itemForm.count<=1" class="btn-inc" @click="decrease" id="decrease" for="number">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H20C21.933 0.5 23.5 2.067 23.5 4V20C23.5 21.933 21.933 23.5 20 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z"
                                        fill="#1FB9B3" stroke="#1FB9B3" />
                                    <path
                                        d="M8.16869 12.424C8.16869 12.088 8.23269 11.88 8.36069 11.8C8.50469 11.72 8.80069 11.68 9.24869 11.68H14.8407V12.376C14.8407 12.712 14.7687 12.92 14.6247 13C14.4967 13.08 14.2167 13.12 13.7847 13.12H8.16869V12.424Z"
                                        fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <textarea v-model="itemForm.description" class="w-100 rounded-1 border p-2" rows="8"
                            placeholder="أكتب بعض التفاصيل الاخرى"></textarea>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:actions>
            <button class="btn btn-main" >تأكيد
                الحجز
            </button>
        </template>

    </d-dialog-large>
</template>

<script>
export default {
    name: 'request-service-dialog',
    props:{
        group:{
            type:String,
            default:'request-service'
        }
    },
    data:()=>{
        return {
            showDialog:false,
            dateSelected:null,
            itemDialog:{},
            itemForm:{}
        }
    },
    methods:{
        increase(){
            this.itemForm.count+=1;
        },
        decrease(){
            if(this.itemForm.count>1)
            this.itemForm.count-=1;
        },
        openDialog(dataEvent){
            this.itemForm={
                booking_date : null,
                specific_date : null,
                execution_place : null,
                execution_period : null,
                service_id : dataEvent.item.id,
                description : '',
                count : 1,
            }
            this.dateSelected = dataEvent.date
            this.itemForm.booking_date = dataEvent.date
            this.itemDialog = dataEvent.item;
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

<style scoped>
.btn-inc{
 display: inline-block;
 padding: 0.375rem 0.75rem;
 user-select: none;
    border: 1px solid transparent;
    border-radius: 0.375rem;
    background-color: transparent;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
}
</style>