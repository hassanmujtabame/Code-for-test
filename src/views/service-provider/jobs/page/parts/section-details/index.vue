<template>
    <div class="box border p-3 rounded-2 mt-5">
                            <h2 class="border-bottom p-2">
                                تفاصيل عن  الوظيفة
                            </h2>
                   
                            <div class="row ">
                                <div class="col-6 p-2">
                                    <accountCogIcon :size="24" />
                                    <span>
                                        المسمى:
                                    </span>
                                    <span class="m-c">
                                        {{itemPage.job_name}} 
                                    </span>
                                        
                                </div>
                                <div class="col-6 p-2">
                                   <buildRaking :size="24" />
                                        
                                    <span>
                                        {{ $t('the_company') }}:
                                    </span>
                                    <span class="m-c">
                                        {{itemPage.company_name}}
                                    </span>
                                        
                                </div>
                                <div class="col-6 p-2">
                                    <emptyWalletIcon :size="24" />
                                    <span>
                                        {{$t('expected_salary')}}:
                                    </span>
                                    <span class="m-c">
                                        {{itemPage.expected_salary}}
                                    </span>
                                </div>
                                <div class="col-6 p-2">
                                    <schoolWalletIcon :size="24" />
                                    <span>
                                    {{$t('the_experience')}}
                                    </span>
                                    <span class="m-c">
                                       {{ itemPage.required_experience }}
                                    </span>
                                        
                                </div>
                                <div class="col-6 p-2">
                                 <timerIcon :size="24" />
                                    <span>
                                        {{ $t('job-type') }}:
                                    </span>
                                    <span class="m-c">
                                        {{$t(itemPage.type_job)}}
                                    </span>
                                        
                                </div>
                                <div class="col-6 p-2">
                                    <closedWallet :size="24" />
                                    <span>
                                        {{ $t('job-category') }} :
                                    </span>
                                    <span class="m-c">
                                       {{itemPage.filed_name}}
                                    </span>
                                        
                                </div>
                                <div class="col-6 p-2">
                                    <heartIcon :size="24" />
                                    <span>
                                        {{ $t('job-department') }}:
                                    </span>
                                    <span class="m-c">
                                        {{itemPage.category_name??'N/A'}}
                                    </span>
                                        
                                </div>
                                <div class="col-6 p-2">
                                    <thunderIcon :size="24" />
                                    <span>
                                        عدد المتقدمين:
                                    </span>
                                    <span class="m-c">
                                        {{ itemPage.count_offers??'N/A' }}
                                    </span>
                                        
                                </div>
                                <div class="col-6 p-2">
                                    <localisationIcon :size="24" />
                                    <span>
                                        {{ $t('job-place') }}:
                                    </span>
                                    <span class="m-c">
                                        {{$t(itemPage.state)??'N/A'}}
                                    </span>
                                        
                                </div>
                                <div class="col-6 p-2">
                                    <timeIcon :size="24" />
                                    <span>
                                       النشر:
                                    </span>
                                    <span class="m-c">
                                        {{ itemPage.created_at??'N/A' }}
                                    </span>
                                        
                                </div>
                            </div>
                        </div>
                        

</template>

<script>
import accountCogIcon from '@/components/icon-svg/account-cog.vue';
import emptyWalletIcon from '@/components/icon-svg/empty-wallet.vue';
import schoolWalletIcon from '@/components/icon-svg/school-wallet.vue';
import buildRaking from '@/components/icon-svg/build-raking.vue';
import closedWallet from '@/components/icon-svg/closed-wallet.vue'
import heartIcon from '@/components/icon-svg/heart.vue'
import localisationIcon from '@/components/icon-svg/localisation.vue'
import timerIcon from '@/components/icon-svg/timer.vue'
import timeIcon from '@/components/icon-svg/time.vue'
import thunderIcon from '@/components/icon-svg/thunder.vue'
export default {
name:'section-deatils',
props:['itemPage'],
components:{
    timerIcon,
    timeIcon,
    thunderIcon,
    accountCogIcon,
    emptyWalletIcon,
    localisationIcon,
    heartIcon,
    schoolWalletIcon,
    closedWallet,
    buildRaking
}


}
</script>

<style>

</style>