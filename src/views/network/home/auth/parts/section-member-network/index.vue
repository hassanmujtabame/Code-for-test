<template>
  <div class="sec-five mt-5 p-3" v-if="showMembers" >
    <h2 class="m-c text-center text-bold">
      {{ $t('network-sect-members-network-count') }} 
      <a href="" class="y-c">
        {{total}}
      </a>
    </h2>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="home-section-title">{{ $t('network-members') }}</h1>
        <div>
          <router-link class="more" 
                :to="getRouteLocale('network-member-network')"
                >{{ $t('more') }}</router-link>
        </div>
      </div>
      <d-swiper v-if="!loading" is-auto :slides-per-view="4" :space-between="4" :items="items">
        <template v-slot:default="{ item }">
            <CardMember  :description="item.job_title" :name="item.name" :to="getRouteLocale('network-show-profile',{id:item.id})" :img="item.image" />
        </template> 
      </d-swiper>
    </div>
  </div>
</template>

<script>
import MembersAPI from '@/services/api/members.js'
import CardMember from '@/components/cards/card-member.vue'
export default {
  name: 'section-member-network',
  components: {
    CardMember
  },
  data: () => ({
    loading:true,
    total:0,
    showMembers:true,
    items: [
     /*{ id:1, name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
     { id:1, name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
     { id:1, name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
     { id:1, name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
     { id:1, name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
     { id:1, name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
     { id:1, name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
     { id:1, name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
      */
    ]
  }),
  methods:{
    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await MembersAPI.getHomeNetwork();
          if(data.success){
            this.items = data.data
            this.total = data.meta.total
          }
        } catch (error) {
          console.log('error',error)
        }
      this.loading = false;
    },
            checkSubscriptionOptions(){
                for (let index = 0; index < this.user.subscription_options.length; index++) {
                    const element = this.user.subscription_options[index];
                   if (element.key == "members") {
                        this.showMembers = true
                    } 
                }
    },
  },
  mounted(){
    this.initlizing()
    this.checkSubscriptionOptions()
  }
}
</script>
<style scoped>
.provider-card{
  width:100% !important
}
</style>