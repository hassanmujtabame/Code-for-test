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
                           <span v-if="false" style="width:40px">
                            <visa2Icon v-if="card.paymentBrand=='visa'" />
                            <stcPayIcon :width="26" :height="26" v-if="card.paymentBrand=='stc'" />
                        <mastercardIcon  v-if="card.paymentBrand=='mastercard'" />    
                        </span>
                        <span :data-item="card.id" class="ccicon-list">
                        <svg id="ccicon-list" class="ccicon-list" width="750" height="471"
                                                          viewBox="0 0 750 471" version="1.1" 
                                                          xmlns="http://www.w3.org/2000/svg" 
                                                          xmlns:xlink="http://www.w3.org/1999/xlink"
                                                          v-if="getIcon(card.paymentBrand)" 
                                                          v-html="getIcon(card.paymentBrand)"
                                                          >
                        </svg>
                    </span>
                            <bdi> البطاقة المنتهية بـ</bdi> {{card.last4Digits?card.last4Digits.slice(-4):'N/A'}}
                        </btnTypePay>
                        <span class="mx-2">
                            <button @click="openAddCreditCard(card.id)" class="btn-text t-c"><editIcon/></button>
                        </span>
                    </div>
                   <hr/>
                        </div>
                    </ValidationObserver>
                    <div class="m-auto p-3">
                        <button @click="openAddCreditCard()" class="btn-custmer-w">
                           <plusIcon :size="24"/> {{$t('new_card')}}
                        </button>
                    </div>
               </div> 
               <addCreditCardDialog  @success="addCreditCard"/>  
            </div>  
</template>

<script>
import userAPI from '@/services/api/user.js'
import stcPayIcon from '@/components/icon-svg/stc-pay.vue'
import visa2Icon from '@/components/icon-svg/visa.vue'
import mastercardIcon from '@/components/icon-svg/master-card.vue'
import plusIcon from '@/components/icon-svg/plus-rect-round.vue'
import editIcon from '@/components/icon-svg/pencil-edit.vue'
import btnTypePay from './btn-type-pay.vue'
import addCreditCardDialog from './add-card-dialog.vue'
import cardVisaIcons from '@/plugins/card-visa-icons'
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
        cards:[],
        itemForm:{
           
        
        }
    
    }
 },
 methods:{
    getIcon(icon){
       return cardVisaIcons[icon]
     
    },
    addCreditCard({card,type}){
        if(type=='add')
        this.cards.push(card)
        else{
           let index = this.cards.findIndex(x=>x.id==card.id)
           this.cards[index].ccicon =card.ccicon
           this.cards[index].paymentBrand =card.paymentBrand
           this.cards[index].last4Digits =card.last4Digits
        }
    },
    openAddCreditCard(id=null){
      this.fireOpenDialog('add-credit-card',{id});
    },

    async loadCards(){
        try{
            let {data } = await userAPI.getCreditCards()
            if(data.success){
                this.cards = data.data
            }
        }catch(error){
                console.log('error',error)
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
