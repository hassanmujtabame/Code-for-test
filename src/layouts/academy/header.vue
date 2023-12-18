<template>
  <TemplateHeader hideSearch prefixRoute='academy-'>
    <template v-slot="{/*closeNavList*/ }">
      <li class="nav-item px-1">
        <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a
              > -->
        <router-link :to="getRouteLocale('academy-home')" class="nav-link">{{ $t('Home-page') }}</router-link>
      </li>
      <li :key="i" v-for="(item, i) in items.filter(x => x.role == userAcademyRole)" class="nav-item px-1">
        <router-link :to="getRouteLocale(item.route)" class="nav-link">{{ item.text }}</router-link>
      </li>
      <div class="dropdown" style="cursor: pointer;">
        <li v-if="userAcademyRole == 'student'" class="nav-link px-1 dropbtn">المجالات</li>
        <div class="dropdown-content">
          <div v-for="item, i in itemDepartments" :key="i">
            <span style="" class="itemDepartments router-link w-100" @click="goToDepartment(item.id)">
              {{ item.name }}</span>
          </div>
        </div>
      </div>

      <button v-if="userAcademyRole == 'student'" @click="switchRole('instructor')" class="btn m-c">{{
        $t('switch-to-instructor') }}</button>
      <button v-if="userAcademyRole == 'instructor'" @click="switchRole('student')"
        class="btn m-c">{{ $t('switch-to-student') }}</button>

        <li v-if="!token" class="nav-item px-2 btn-main btn-nav text-center"
        style="padding:5px; height:auto; margin-right: 5px; display: flex; justify-content: center; align-items: center;">
        <router-link :to="getRouteLocale('register')" class="text-white">{{ $t("join-us") }}</router-link>
      </li>
      <li v-else-if="!userIsSubAcademy" class="nav-item px-2 btn-main btn-nav text-center"
      style="padding:5px; height:auto; margin-right: 5px; display: flex; justify-content: center; align-items: center;">
  
        <router-link :to="getRouteLocale('academy-subscribe')" class="text-white"> {{ $t('join-us') }} </router-link>
      </li>

    </template>
  </TemplateHeader>
</template>

<script>

import TemplateHeader from '../tamplate/header/index.vue'
import academyAPI from '@/services/api/academy/index.js'

export default {
  name: 'default-header',
  components: {
    TemplateHeader,
  },
  data: (vm) => {
    return {
      openDialog: false,
      itemDepartments: [],
      items: [
        /**instructor */
        { route: 'academy-instructor-your-courses', text: vm.$t('your-courses'), role: 'instructor' },
        { route: 'academy-blogs', text: vm.$t('academy-blog'), role: 'instructor' },
        { route: 'academy-learning-meetings', text: vm.$t('academy-meetings'), role: 'instructor' },
        { route: 'academy-contact-us', text: vm.$t('contact-us'), instructor: 'stuinstructordent' },
        /**student */
        { route: 'academy-courses', text: vm.$t('academy-courses'), role: 'student' },
        { route: 'academy-learning-meetings', text: vm.$t('academy-meetings'), role: 'student' },
        { route: 'academy-your-courses', text: vm.$t('your-courses'), role: 'student' },
        { route: 'academy-your-learning-meetings', text: vm.$t('your-learning-meetings'), role: 'student' },
        // {route:'academy-your-certificates', text:vm.$t('your-certificates'),role:'student'},
        { route: 'academy-contact-us', text: vm.$t('contact-us'), instructor: 'student' },
      ]
    }
  },
  methods: {
    switchRole(newRole) {
      this.switchRoleAcademy(newRole)
    },
    async initializing() {
      this.loading = true;
      try {
        // let {data } = await academyAPI.getDepartments({belongs_to:'specialized_academy'})
        let { data } = await academyAPI.getDepartments()
        if (data.success) {
          this.itemDepartments = data.data
        } else {
          //window.SwalError(data.message)
        }
      } catch (error) {
        //

      }
      this.loading = false;
    },
    goToDepartment(id) {
      for (let index = 0; index < this.user.system_subscriptions.length; index++) {
        const element = this.user.system_subscriptions[index];
        if (element.system_package.related_to.key == 'academy') {
          for (let index2 = 0; index2 < element.departments.length; index2++) {
            const element2 = element.departments[index];

            if (element2 == id) {
              this.router_push('academy-department-show', { id: id })
            } else {
              let dataEvt = {
                title: 'للأسف لست مشترك في المجال',
                description: `انت غير مشترك في المجال - رقي حسابك واشتركي في المجال`,
                image: `${this.publicPath}assets/img/Group 1171275670.png`,
                btns: [
                  { title: 'رقي حسابك', action: () => this.router_push('academy-subscribe') }
                ]
              }
              this.showConfirmMsg(dataEvt);
              return;
            }
          }

        }
      }

    },

  },
  mounted() {
    this.initializing()
    console.log('hhh', this.userAcademyRole)
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
  padding: 6px;
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

.itemDepartments {
  float: none;
  color: #545A5C;
  padding: 6px;
  text-decoration: none;
  display: block;
  text-align: center;
}

.itemDepartments:hover {
  color: #FFBC00 !important;
}</style>