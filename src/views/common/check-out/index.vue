<template>

        <div class="container">
            <div class="box p-4 shadow m-4 chekout">
                <div class="mb-3">
                    <h5>
                            إستكملي عملية الدفع
                        </h5>
                </div>
                <div class="row justify-content-between">
                    <div class="col-md-5">
                        
                        <div class="row justify-content-center">
                            <!-- btn pyment type-->
                            <div class="col-12">
                              <div class="group-btn-type-pay">
                                <btnTypePay name="pay-type" v-for="(btn,i) in payment_types" :key="i"
                                :valueDefault="btn.id"
                                v-model="itemForm.payment_type"
                                >
                                    <template v-if="btn.type=='text'">
                                        {{ btn.name }}
                                    </template>
                                    <component v-else :is="btn.name"></component>
                                </btnTypePay>
                              </div>
                            </div>
                            <div class="m-b  mt-3 mb-1" style="font-size:14px">
                                    إعادة الدفع من خلال
                                </div>
                            <div class="col-12 d-flex align-items-center">
                                
                                <btnTypePay name="pay-type" justify="start" 
                                :valueDefault="'back'"
                                v-model="itemForm.payment_type"
                                >                                    <visa2Icon />
                                  <bdi> البطاقة المنتهية بـ</bdi> 4152
                                </btnTypePay>
                                <span class="mx-2">
                                    <button class="btn-text m-c">{{ $t('change') }}</button>
                                </span>
                            </div>
                            <div class="col-12 mt-5 row">
                                <div class="col-12  d-flex justify-content-between form-card">
                                <div class="m-b form-title">أو أضف بطاقة جديدة</div>
                                <div class="form-icons">
                                    <visa2Icon />
                                    <mastercardIcon />
                                    <noPathIcon />
                                </div>
                            </div>
                            <div class="col-12" style="box-shadow: 0px 1px 4px 0px;padding: 29px;">
                                <div class="mt-3">
                            <form action="">
                                <div class="row">
                                    <div class="col-12">
                                <input type="text" class="border rounded-2 w-100  p-2 " name="" id="" placeholder=" اسم على البطاقة">
                                    </div>
                                    <div class="col-12">
                                <input type="text" class="border rounded-2 w-100  p-2 mt-3" name="" id="" placeholder="رقم البطاقة">
                                    </div>
                                    <div class="col-6">
                                <input type="text"  name="date_end" class="border rounded-2 w-100  p-2 mt-3"  id="" placeholder="  تاريخ الانتهاء">
                                <div id="date_endHelp" class="form-text">على نمط شهر/سنة</div>        
                            </div>
                                    <div class="col-6">
                                <input type="text"  class="border rounded-2 w-100  p-2 mt-3" name="pin" id="" placeholder=" رمز الحماية">
                                <div id="pinHelp" class="form-text"><bdi>3 أو 4 ارقام</bdi></div>          
                            </div>
                                    <div class="col-12">
                                        <div class="form-check mt-3">
                                        <input class="form-check-input" type="checkbox"  name="flexcheckDefault">
                                        <label class="form-check-label m-c" for="flexcheckDefault">
                                            {{$t('save')}}
                                        </label>
                                    </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                            </div>
                            </div>
                        
                    </div>
                    </div>
                    <div class="col-md-5 justify-content-end tex-end ">
                        <div class="border mt-2 payment-card-detail" >
                        <div class="box ">
                            <h6 class="">
                    دفع المستحقات
                            </h6>
                           
                            <div class="input-group mb-3 mt-2">
                                
                                <input type="text" class="form-control" placeholder="ادخل المبلغ">
                        
                            </div>
                            <div>
                                <p style="font-size: 12px;text-align: center;">
                                    بإتمامك لعملية الشراء أنت توافق على
                                    <span>
                                        <a href="" class="m-c">
                                            شروط الاستخدام
                                        </a>
                                    </span>
                                </p>
                            </div>
                            <div class="text-center"> 
                                <button  class="btn bg-main p-2 text-white ">
                                    تاكيد الدفع
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
    
            </div>
        </div>
</template>
<script>
import projectsAPI from '@/services/api/projects.js'
import btnTypePay from './btn-type-pay.vue'
import applePayIcon from '@/components/icon-svg/apple-pay.vue'
import stcPayIcon from '@/components/icon-svg/stc-pay.vue'
import visa2Icon from '@/components/icon-svg/visa.vue'
import noPathIcon from '@/components/icon-svg/no-path.vue'
import mastercardIcon from '@/components/icon-svg/master-card.vue'
export default {
  name:"checkout-user",
  props:{
    group:{
        type:String,
        default:'checkout-user'
    }
  },
  components:{
    btnTypePay,
    applePayIcon,
    stcPayIcon,
    visa2Icon,
    noPathIcon,
    mastercardIcon
  },
  data:()=>({
    showDialog:false,
   payment_types:[
    {id:1,name:'بطاقة الائتمان',type:'text'},
    {id:3,name:'applePayIcon',type:'icon'},
    {id:2,name:'stcPayIcon',type:'icon'},
   ],
    project:{},
    itemForm:{
        payment_type:1,
        amount:null,
    }
  }),
  methods:{
    closeMe(){
    this.fireCloseDialog(this.group)
  },
    openSuccessDialog(){
    this.fireOpenDialog('success-make-offer')
  },
  async save(evt){
    if(evt) evt.preventDefault();
    
            let valid = await this.$refs.form.validate();
        if(!valid){
            console.log('form invalid');
            return ;
        }
            let formData = new FormData();
            Object.keys(this.itemForm).forEach(key=>{
                formData.append(key,this.itemForm[key])
            })
            formData.append('invest_project_id',this.project.id)
            try {
                let { data } = await projectsAPI.makeOffer(formData)
                if(data.success){
                  this.openSuccessDialog()
                  this.closeMe()
                Object.keys(this.itemForm).forEach(key=>{
                    this.itemForm[key]=null;
                })
                this.itemForm.amount =  this.project.minimum_investment
                this.$nextTick(() => {
                        if (this.$refs["form"]) {
                        this.$refs.form.reset();
                        }
                    });
                }
            } catch (error) {
                console.log('error',error)
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

    openDialog(data){
      this.project = data??{minimum_investment:0};
      this.itemForm.amount =  this.project.minimum_investment
        this.showDialog = true;
        return true;
    },
    closeDialog(){
        this.showDialog = false

        return true;
    },
  },
  mounted(){
   // this.fireOpenDialog('checkout-project');
  }
}

</script>

<style scoped>

.payment-card-detail{
    width:360px;
    height:352px;
    padding:55px 12px
}
.payment-card-detail > .box{
    width: 335px;height: 242px;
}
.group-btn-type-pay {
    display: flex;
    justify-content: space-evenly;
}
.group-btn-type-pay>.btn-type-pay{
  
    flex: 1;
    margin-left: 3px;
}
        @media (max-width:600px) {
            .chekout{
                margin: 0 !important;
            }        
            .payment-card-detail{
            width:100%;

        }
            .payment-card-detail > .box{
                width: 100%;
            }   
            input,label{
                font-size: 0.65rem;
            }
            .form-text {
                font-size: 0.55rem; 
            } 
            .form-card{
                padding: 0;
            }
            .form-card .form-title{
                font-size: .75rem;
            }
            .form-check{
                display: flex;
                align-items: center;
            }
            .form-check-label{
                margin-left: 2px;
                margin-right: 2px;
            }
        }
</style>
