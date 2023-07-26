<template>
  <TemplateHeader 
  hideSearch
  prefixRoute='academy-'
  >
    <template v-slot="{/*closeNavList*/}" >
            <li class="nav-item px-1">
              <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a
              > -->
              <router-link :to="getRouteLocale('academy-home')"  class="nav-link">{{ $t('Home-page') }}</router-link>
            </li>
            <li :key="i" v-for="(item,i) in items.filter(x=>x.role == userAcademyRole)" class="nav-item px-1">
              <router-link :to="getRouteLocale(item.route)"  class="nav-link">{{ item.text }}</router-link>
            </li>
              <div class="dropdown" style="cursor: pointer;">
                  <li v-if="userAcademyRole=='student'" class="nav-link px-1 dropbtn">المجالات</li>
                   <div class="dropdown-content">
                     <div  v-for="item,i in itemDepartments" :key="i">
              <router-link class="router-link" :to="getRouteLocale('academy-department-show',{id:item.id})"> 
                {{item.name}}
              </router-link>


                     </div>
                   </div>
                  </div>
          
                  <button v-if="userAcademyRole=='student'" @click="switchRole('instructor')" class="btn m-c">{{ $t('switch-to-instructor') }}</button>
                  <button v-if="userAcademyRole=='instructor'" @click="switchRole('student')" class="btn m-c">{{$t('switch-to-student') }}</button>
               

                  </template>
    </TemplateHeader>
</template>

<script>

import TemplateHeader from '../tamplate/header/index.vue'
import academyAPI from '@/services/api/academy/index.js'

export default {
    name:'default-header',
    components:{
      TemplateHeader,
    },
    data:(vm)=>{
      return {
        openDialog:false,
itemDepartments:[],
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
      async initializing(){
        this.loading= true;
        try{
          let {data } = await academyAPI.getDepartments({belongs_to:'specialized_academy'})
          if(data.success){
            this.itemDepartments = data.data
          }else{
            //window.SwalError(data.message)
          }
        }catch(error){
          //

        }
        this.loading = false;
      }
   },
    mounted(){
      this.initializing()
    }
}
</script>

<style>
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
box-shadow: 0px 4px 15px 1px #00000040;

  z-index: 1;
}
.dropdown-content a {
  float: none;
  color: #545A5C; 
  padding: 6px ;
  text-decoration: none;
  display: block;
  text-align: center;
}
.dropdown-content a:hover {
  color: #FFBC00 !important;
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>