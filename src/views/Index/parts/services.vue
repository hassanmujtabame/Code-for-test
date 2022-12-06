<template>
  <div style="overflow: hidden;" class="sec-tow">
          <div class="text">
            <h1>خدمات رياديات لك</h1>
            <p>تقدم رياديات لكي الكثير من الخدمات المميزة والفريدة</p>
          </div>
          <div class=" ">
            <DTabs group="pills" :current.sync="currentTab">
             
                <TabHead :current.sync="currentTab" group="pills"  reference="home">
                 <WorldSVG/>
                  الشبكه
                </TabHead>
             
            
                <TabHead :current.sync="currentTab" group="pills" reference="profile">
                  
                <LightSVG/>
                  الحاضنة
                </TabHead>
              
              
                <TabHead :current.sync="currentTab" group="pills" reference="contact">
                 <CameraSVG/>
                  الاكاديمية
                </TabHead>
        
              
                <TabHead :current.sync="currentTab" group="pills" reference="servProvider">
                
                  <HeartSVG/>

                  مقدمين الخدمات
                </TabHead>
                <TabHead :current.sync="currentTab" group="pills" reference="shop">
                  <ShopSVG/>
                  السوق
                </TabHead>
            </DTabs>
            <div class="tab-content" id="pills-tabContent">
              <TabItem :current.sync="currentTab" group="pills" reference="home"
              v-slot="{selected}"
              >
                <div data-aos="fade-left"  data-aos-duration="2000">
                    <img
                      class="img-fluid"
                      src="@/assets/img/Rectangle 1763.png"
                      alt=""
                    />
                  </div>
                <ServiceCard :selected="selected" title="الشبكة">
                  هي الأولى من نوعها قد تم تأسيسها خصيصا للجيل الجديد من
                      الرياديات والقياديات الريادية النسائية لتلهم الرياديات
                      وكبار المدراء التنفيذيين والذين يبحثون عن تلك الفرصة
                      النادرة للحصول على آراء حقيقية والتعلم من بعض العقليات
                      المستنيرة في عالم الأعمال
                  </ServiceCard>
                
                </TabItem>
              <TabItem :current.sync="currentTab" group="pills" 
              reference="profile" v-slot="{selected}">
              <div data-aos="fade-left"  data-aos-duration="2000">
                    <img
                      class="img-fluid"
                      src="@/assets/img/Rectangle 1763.png"
                      alt=""
                    />
                  </div>
                  <ServiceCard title="الحاضنة" :selected="selected">
                    هي الأولى من نوعها قد تم تأسيسها خصيصا للجيل الجديد من
                      الرياديات والقياديات الريادية النسائية لتلهم الرياديات
                      وكبار المدراء التنفيذيين والذين يبحثون عن تلك الفرصة
                      النادرة للحصول على آراء حقيقية والتعلم من بعض العقليات
                      المستنيرة في عالم الأعمال
                  </ServiceCard>
                
                </TabItem>
              <TabItem 
              :current.sync="currentTab" 
              group="pills"
               reference="contact"
               v-slot="{selected}"
               >
               <div data-aos="fade-left"  data-aos-duration="2000">
                    <img
                      class="img-fluid"
                      src="@/assets/img/Rectangle 1763.png"
                      alt=""
                    />
                  </div>
                  <ServiceCard title="الاكاديمية" :selected="selected">
                      هي الأولى من نوعها قد تم تأسيسها خصيصا للجيل الجديد من
                      الرياديات والقياديات الريادية النسائية لتلهم الرياديات
                      وكبار المدراء التنفيذيين والذين يبحثون عن تلك الفرصة
                      النادرة للحصول على آراء حقيقية والتعلم من بعض العقليات
                      المستنيرة في عالم الأعمال
                  </ServiceCard>
                  
                </TabItem>
                <TabItem 
                :current.sync="currentTab" 
                group="pills" 
                reference="servProvider"
                v-slot="{selected}"
                >
                <div data-aos="fade-left"  data-aos-duration="2000">
                    <img
                      class="img-fluid"
                      src="@/assets/img/Rectangle 1763.png"
                      alt=""
                    />
                  </div>
                  <ServiceCard title="مقدمي الخدمة" :selected="selected">
                      هي الأولى من نوعها قد تم تأسيسها خصيصا للجيل الجديد من
                      الرياديات والقياديات الريادية النسائية لتلهم الرياديات
                      وكبار المدراء التنفيذيين والذين يبحثون عن تلك الفرصة
                      النادرة للحصول على آراء حقيقية والتعلم من بعض العقليات
                      المستنيرة في عالم الأعمال
                  </ServiceCard>
                </TabItem>
                <TabItem 
                :current.sync="currentTab"
                group="pills" 
                reference="shop"
                v-slot="{selected}"
                >
                <div data-aos="fade-left"  data-aos-duration="2000">
                    <img
                      class="img-fluid"
                      src="@/assets/img/Rectangle 1763.png"
                      alt=""
                    />
                  </div>
                  <ServiceCard title="السوق" :selected="selected">
                      هي الأولى من نوعها قد تم تأسيسها خصيصا للجيل الجديد من
                      الرياديات والقياديات الريادية النسائية لتلهم الرياديات
                      وكبار المدراء التنفيذيين والذين يبحثون عن تلك الفرصة
                      النادرة للحصول على آراء حقيقية والتعلم من بعض العقليات
                      المستنيرة في عالم الأعمال
                  </ServiceCard>
                </TabItem>
                </div>
              </div>
            </div>
        
</template>

<script>
import WorldSVG from '@/components/icon-svg/world.vue'
import LightSVG from '@/components/icon-svg/light.vue'
import CameraSVG from '@/components/icon-svg/camera.vue'
import ShopSVG from '@/components/icon-svg/shop.vue'
import HeartSVG from '@/components/icon-svg/heart.vue'
import ServiceCard from './tab-content/service-desc-card.vue'
import TabItem from '@/components/tabs/TabItem.vue'
import TabHead from '@/components/tabs/TabHead.vue'
import DTabs from '@/components/tabs/DTabs.vue'
export default {
    name:'ServicesPart',
    components: {
    WorldSVG,
    LightSVG,
    ServiceCard,
    DTabs,
    TabItem,
    TabHead,
    CameraSVG,
    ShopSVG,
    HeartSVG
  },
  data:()=>({
    currentTab:''
  }),
  mounted(){
    this.currentTab='home'
  }
}
</script>

<style>

</style>