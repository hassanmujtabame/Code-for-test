<template>
<div id="list-item-payment">
                <div class="box border mt-5 ">
                    <h3 class="border-bottom py-2 t-c px-3">
                      بطاقات الدفع
                    </h3>
                    <ValidationObserver ref="form" class="row">
                        <div v-for="(card,i) in cards" :key="i" class="col-12 d-flex align-items-center">
                            <div class="d-flex px-2 w-100">
                        <btnTypePay name="pay-type" style="flex:1" class="no-border" justify="start" :valueDefault="'back'"
                           >
                           <span style="width:40px">
                            <visa2Icon v-if="card.type=='visa'" />
                            <stcPayIcon :width="26" :height="26" v-if="card.type=='stc'" />
                        <mastercardIcon  v-if="card.type=='mastercard'" />    
                        </span>

                            <bdi> البطاقة المنتهية بـ</bdi> {{card.text}}
                        </btnTypePay>
                        <span class="mx-2">
                            <button class="btn-text t-c"><editIcon/></button>
                        </span>
                    </div>
                   <hr/>
                        </div>
                    </ValidationObserver>
                    <div class="m-auto p-3">
                        <button @click="openAddCreditCard" class="btn-custmer-w">
                           <plusIcon :size="24"/> {{$t('new_card')}}
                        </button>
                    </div>
               </div> 
               <addCreditCardDialog />  
            </div>  
</template>

<script>
import userAPI from '@/services/api/user.js'
import commonAPI from '@/services/api/common.js'
import stcPayIcon from '@/components/icon-svg/stc-pay.vue'
import visa2Icon from '@/components/icon-svg/visa.vue'
import mastercardIcon from '@/components/icon-svg/master-card.vue'
import plusIcon from '@/components/icon-svg/plus-rect-round.vue'
import editIcon from '@/components/icon-svg/pencil-edit.vue'
import btnTypePay from './btn-type-pay.vue'
import addCreditCardDialog from './add-card-dialog.vue'
export default {
 name:'payment-cards',
 components:{
    btnTypePay,
    editIcon,
    plusIcon,
    visa2Icon,
    mastercardIcon,
    stcPayIcon,
    addCreditCardDialog
 },
 data:()=>{
    return {
        countries:[],
        cards:[
            {id:1,text:'4252',type:'visa'},
            {id:2,text:'444',type:'stc'},
            {id:2,text:'444',type:'mastercard'},
        ],
        itemForm:{
           
        
        }
    
    }
 },
 methods:{
    openAddCreditCard(){
      this.fireOpenDialog('add-credit-card');
    },

    async loadCards(){
        try{
            let {data } = await commonAPI.getCountries()
            if(data.success){
                this.countries = data.data
            }
        }catch(error){
            this.countries = [
            {id:'sa',name:'السعودية'}
        ]
        }
    }
 },
 mounted(){
    this.loadCards()
 }
}
</script>

<style scoped>
.btn-custmer-w{
    padding: 10px !important;
}
</style>
