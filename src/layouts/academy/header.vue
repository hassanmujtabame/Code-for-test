<template>
  <TemplateHeader 
  hideSearch
  prefixRoute='academy-'
  >
    <template v-slot="{/*closeNavList*/}" >
            <li class="nav-item px-2">
              <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a
              > -->
              <router-link :to="getRouteLocale('academy-home')"  class="nav-link">{{ $t('Home-page') }}</router-link>
            </li>
            <li :key="i" v-for="(item,i) in items.filter(x=>x.role == userAcademyRole)" class="nav-item px-2">
              <router-link :to="getRouteLocale(item.route)"  class="nav-link">{{ item.text }}</router-link>
            </li>
           
          
                  <button v-if="userAcademyRole=='student'" @click="switchRole('instructor')" class="btn m-c">{{ $t('switch-to-instructor') }}</button>
                  <button v-if="userAcademyRole=='instructor'" @click="switchRole('student')" class="btn m-c">{{$t('switch-to-student') }}</button>
                  </template>
    </TemplateHeader>
</template>

<script>

import TemplateHeader from '../tamplate/header/index.vue'

export default {
    name:'default-header',
    components:{
      TemplateHeader,
    },
    data:(vm)=>{
      return {

      items:[
                /**instructor */
        {route:'academy-instructor-your-courses', text:vm.$t('your-courses'),role:'instructor'},
        {route:'academy-blogs', text:vm.$t('academy-blog'),role:'instructor'},
        {route:'academy-learning-meetings', text:vm.$t('academy-meetings'),role:'instructor'},
        {route:'academy-contact-us',text:vm.$t('contact-us'),instructor:'stuinstructordent'},
        /**student */
        {route:'academy-courses', text:vm.$t('academy-courses'),role:'student'},
        {route:'academy-learning-meetings', text:vm.$t('academy-meetings'),role:'student'},
        {route:'academy-your-courses', text:vm.$t('your-courses'),role:'student'},
        {route:'academy-your-learning-meetings', text:vm.$t('your-learning-meetings'),role:'student'},
        // {route:'academy-your-certificates', text:vm.$t('your-certificates'),role:'student'},
        {route:'academy-contact-us',text:vm.$t('contact-us'),instructor:'student'},
        ]
    }
  },
   methods:{
    switchRole(newRole){
     this.switchRoleAcademy(newRole)
    },
   }
}
</script>

<style>

</style>