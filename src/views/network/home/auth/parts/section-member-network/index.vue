<template>
  <div class="sec-five mt-5 p-3">
    <h2 class="m-c text-center">
      بنضمامك لنا أسرة الشبكة أصبح عددها
      <a href="" class="y-c">
        520
      </a>
    </h2>
    <div class="">
      <div class="d-flex justify-content-between align-items-center container">
        <h1>أعضاء الشبكة</h1>
        <div>
          <button class="more">المزيد</button>
        </div>
      </div>
      <d-swiper v-if="loading" :slides-per-view="5" :space-between="10" :items="items">
        <template v-slot:default="{ item }">
          <router-link :to="getRouteLocale('show-profile')">
            <CardMember :name="item.name" :description="item.description" :img="item.image" />
          </router-link>
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
    items: [
      { name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
      { name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
      { name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
      { name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
      { name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
      { name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
      { name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
      { name: 'العنقود محمد', image: 'https://test.riadiat.sa/uploads/default.jpeg', description: 'التصوير' },
      
    ]
  }),
  methods:{
    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await MembersAPI.getAll();
          if(data.success){
            //this.items = data.data
          }
        } catch (error) {
          console.log('error',error)
        }
      this.loading = false;
    }
  }
}
</script>