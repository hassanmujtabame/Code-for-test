<template>
  <div style="margin-top: 85px">
    <div class="container-fluid dashbord">
      <div class="row">
        <div
          style="margin-top: 8rem !important; background-color: #fff"
          class="col-md-2 d-flex justify-content-center align-items-start shadow rounded-3"
        >
          <ul
            class="d-flex py-5 flex-column gap-3 justify-content-center align-items-center"
          >
            <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('network-dashboard')"
                class="nav-link hover-li"
              >
                لوحه التحكم
              </router-link>
            </li>
            <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('consulting/dashboard')"
                class="nav-link hover-li"
              >
                المستشار
              </router-link>
            </li>
            <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('service-provider-dashboard')"
                class="nav-link hover-li"
              >
                مقدم الخدمة
              </router-link>
            </li>
            <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('academy-dashboard')"
                class="nav-link li-active hover-li"
              >
                ألاكاديمية
              </router-link>
            </li>
            <!-- <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('incubator-dashboard')"
                class="nav-link hover-li"
              >
                حاضنة رياديات
              </router-link>
            </li> -->
          </ul>
        </div>
        <div style="margin-top: 8rem !important" class="col-md-10">
          <SectionBalance />
          <!-- <div>

      <SectionHeader />
      </div> -->
          <div class="mx-3">
            <SectionWidgets v-if="userAcademyRole == 'student'" />
            <SectionInstructorWidgets v-if="userAcademyRole == 'instructor'" />
          </div>

          <SectionAsk />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "./parts/section-header/index.vue";
import SectionBalance from "./parts/section-balance/index.vue";
import SectionWidgets from "./parts/section-widgets/index.vue";
import SectionAsk from "@/components/ask-us.vue";
import SectionInstructorWidgets from "./parts/section-instructor-widgets/index.vue";
export default {
  name: "your-courses-page",
  components: {
    SectionHeader,
    SectionBalance,
    SectionAsk,
    SectionWidgets,
    SectionInstructorWidgets,
  },
};
</script>

<style></style>
