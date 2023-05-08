<template>
  <div style="overflow: hidden;" class="sec-tow">
            <div class="text">
                <h1>جميع شركاء رياديات</h1>
            </div>
            <div class=" ">
                <ul class="nav nav-pills mb-3 justify-content-center gap-2" id="pills-tab" role="tablist">
                   
                    
                    <DTabBtn v-for="(tab,i) in tabs.filter(f=>f.show)" :key="i" :tag="tab.tag" :active="tab.tag===tabActive">
                       <component :is=tab.icon color="currentColor" height="32"
                       width="32"
                       /> {{tab.title}}
                    </DTabBtn>
                    
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <d-tab-pane v-for="(tab,i) in tabs.filter(f=>f.show)" :key="i" :tag="tab.tag" :active="tab.tag===tabActive">
                    <component :is="tab.content" />
                    </d-tab-pane>
                </div>
            </div>
           
        </div>
</template>

<script>
import souekIcon from '@/components/icon-svg/souek-icon.vue'
import networkIcon from '@/components/icon-svg/network-icon.vue'
import academyIcon from '@/components/icon-svg/academy-icon.vue'
import serviceProviderIcon from '@/components/icon-svg/service-provider-icon.vue'
import incubatorIcon from '@/components/icon-svg/incubator-icon.vue'
import DTabBtn from '@/components/tabs/DTabBtn.vue'
import DTabPane from '@/components/tabs/DTabPane.vue'
import TabNetwork from './tabs/network'
import TabAcademy from './tabs/academy'
import TabIncubator from './tabs/incubator'
import TabServiceProvider from './tabs/service-provider'
export default {
 name:'section-services',
 components:{
    DTabBtn,
    DTabPane
 },
 data:(vm)=>({
    tabActive:'network',
    tabs:[
      {tag:'network',icon:networkIcon,title:vm.$t('network'),content:TabNetwork,show:true},
      {tag:'incubator',icon:incubatorIcon,title:vm.$t('incubator'),content:TabIncubator,show:true},
      {tag:'academy',icon:academyIcon, title:vm.$t('academy'),content:TabAcademy,show:true},
      {tag:'service-provider',icon:serviceProviderIcon,title:vm.$t('service-provider'),content:TabServiceProvider,show:true},
      {tag:'market',icon:souekIcon,title:vm.$t('market'),content:TabNetwork,show:true},

    ]
 })
}
</script>

<style scoped>
.sec-tow >>> .nav-link{
    color:var(--color-primary) !important;
    border: 1px solid var(--color-primary);
    padding: 10px 5px;
    width: 150px;
}
.sec-tow >>> .nav-link.active{
    color:white !important; 
}
</style>