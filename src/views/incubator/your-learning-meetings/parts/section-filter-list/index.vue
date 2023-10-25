<template>
  <div class="container mt-5">
    <d-filter-list :items='items' classColCard="col-12 col-md-6" searchPlaceholder="أبحث  في قائمة القاءت">

      <template v-slot:list>
        <div class="d-flex flex-wrap flex-row justify-content-center" >
          <router-link v-for="(item, i) in items" :key="i" class="router-link m-2"
            :to="getRouteLocale('academy-learning-meeting-show', { id: item.id })">
            <meetingCard :item="item" :img="`${publicPath + item.image}`" :title="item.title" :type="item.type"
              :date="item.date" />
          </router-link>

        </div>

      </template>

      <template v-slot:total="{ }">
        <p>
          عدد القاءات :
          <span style="color:#1FB9B3;">
            200 لقاء
          </span>
        </p>
      </template>
      <template v-slot:before-body>
        <!-- <SectionFilterSidebar /> -->
      </template>




    </d-filter-list>
  </div>
</template>

<script>
import meetingCard from '@/components/cards/meeting.vue'
import instructorAPI from '@/services/api/academy/instructor/meetings.js';
import SectionFilterSidebar from '../section-filter-sidebar/index.vue';

export default {
  name: 'filter-list',
  components: {
    meetingCard,
    SectionFilterSidebar
  },
  data: (vm) => {
    return {
      meetingType: [{ text: 'لقاءات قادمة', id: 1, active: true, type: 'coming' }, { text: 'لقاءات ماضية', id: 2, active: false, type: 'completed' }],
      itemTest:
      {
        id: 1, title: 'خطة العمل ودراسة الجدوى المالية',
        userName: 'مجلس', date: '23 يوليو',
        image: `assets/img/starrrr.png`
      },

      filterSide: {
        is_share: null,
        category_id: [],
      },
      filterItem: {
        search: null,
        price: 'asc',
        is_share: null,
        category_id: [],
        status: 'coming',

      },
      items: [
        {
          id: 1, title: 'خطة العمل ودراسة الجدوى المالية',
          userName: 'مجلس', date: '23 يوليو',
          image: `assets/img/learning.png`
        },
        {
          id: 2, title: 'خطة العمل ودراسة الجدوى المالية',
          userName: 'مجلس', date: '23 يوليو',
          image: `assets/img/learning.png`
        },
        {
          id: 3, title: 'خطة العمل ودراسة الجدوى المالية',
          userName: 'مجلس', date: '23 يوليو',
          image: `assets/img/learning.png`
        },
        {
          id: 4, title: 'خطة العمل ودراسة الجدوى المالية',
          userName: 'مجلس', date: '23 يوليو',
          image: `assets/img/learning.png`
        },
      ]
    }
  },
  methods: {
    getMeetingLearn(data) {
      for (let index = 0; index < this.meetingType.length; index++) {
        const element = this.meetingType[index];
        if (element.id == data.id) {
          element.active = true
          this.filterItem.status = element.type;
          this.fireEvent('d-filter-list-refresh')
        } else {
          element.active = false
        }
      }
    },
    changeFilter(val) {
      console.log('val', val);
      this.filterItem = { ...this.filterItem, ...val }
      this.fireEvent('d-filter-list-refresh')
    },
    async loadList(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page,
          ...this.filterItem
        }

        return await instructorAPI.getAll(params)

      } catch (error) {
        console.log('error', error)
        console.log('response', error.response)
      }
    }
  }
}
</script>

<style scoped>
  .router-link {
    width: fit-content;
  }
</style>