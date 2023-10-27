<template>
  <div class="incubator-business-sidebar">
    <div class="incubator-business-sidebar__wrapper">
      <div class="incubator-business-sidebar__header">
        <h1 class="my-1">مسار حاضنة {{ itemPage.department_name }}</h1>
        <div class="d-flex align-items-center">
          <div class="flex-grow-1">
            <d-progress-bar :height="3" bgColor="#F6F8F9" percentColor="var(--color-primary)"
              :progress="itemPage.ratio" />
          </div>
          <span class="flex-shrink-0 percent-label">{{ itemPage.ratio }}%</span>
        </div>
        <div class="d-flex justify-content-between my-3">
          <span class="percent-label">بداية الحاضنة:{{ itemPage.start_date }}</span>
          <span class="percent-label">المدة:{{ itemPage.duration }} {{ $t('day_s') }}</span>
        </div>
      </div>
      <div class="incubator-business-sidebar__body my-3">
        <d-expanded-panel id="step-1">
          <template v-slot>
            <!-- :opened="status[(n - 1)] == 'selected'" -->
            <d-expanded-panel-item v-for="(item, n) in items" :key="n" classTitle="step-title">
              <template v-slot:btnTitle>
                <d-stepper-icon :status="item.status"></d-stepper-icon>
                {{ item.title }}
              </template>
              <d-stepper-head vertical>

                <d-stepper-head-item v-for="(phase, i) in item.courses" :key="i" @click="onChoose(phase, item.id)">
                  <d-stepper-icon :status="phase.status"></d-stepper-icon>
                  {{ phase.title }}
                </d-stepper-head-item>

                <div>
                  <d-stepper-head-item v-for="(phase, i) in item.models" :key="i" @click="onChoose(phase, item.id)">
                    <d-stepper-icon :status="phase.status"></d-stepper-icon>
                    {{ phase.title }}
                  </d-stepper-head-item>


                  <d-stepper-head-item v-if="item.id == 4" @click="onChoose({ id: '145', type: 'fourideas' }, 4)">
                    <d-stepper-icon></d-stepper-icon>
                    نموذج : الأربع أفكار
                  </d-stepper-head-item>

                  <d-stepper-head-item v-if="item.id == 4" @click="onChoose({ id: '147', type: 'thelogo', }, 4)">
                    <d-stepper-icon></d-stepper-icon>
                    نموذج : العلامة التجارية (الشعار)
                  </d-stepper-head-item>

                  <d-stepper-head-item v-if="item.id == 4" @click="onChoose({ id: '148', type: 'business' }, 4)">
                    <d-stepper-icon></d-stepper-icon>
                    نموذج : العمل التجاري
                  </d-stepper-head-item>


                  <d-stepper-head-item v-if="item.id == 5"
                    @click="onChoose({ id: '133', type: 'investmentproposal' }, 4)">
                    <d-stepper-icon></d-stepper-icon>
                    نموذج: العرض
                    الاستثماري
                  </d-stepper-head-item>

                  <d-stepper-head-item v-if="item.id == 10"
                    @click="onChoose({ id: '33', type: 'electoronicfeasibilitystudy' }, 10)">
                    <d-stepper-icon></d-stepper-icon>
                    نموذج: دراسة الجدوى
                    الإلكترونية
                  </d-stepper-head-item>

                  <d-stepper-head-item v-if="item.id == 10" @click="onChoose({ id: '37', type: 'finish' }, 10)">
                    <d-stepper-icon></d-stepper-icon>
                    النهايه
                  </d-stepper-head-item>
                </div>
              </d-stepper-head>
            </d-expanded-panel-item>
          </template>
        </d-expanded-panel>
      </div>
    </div>
  </div>
</template>

<script>
import incubatorAPI from '@/services/api/incubator'
//import ListItem from './list-item'
export default {
  name: 'd-sidebar',
  props: {
    itemPage: {},
  },
  components: {
    //ListItem
  },
  data: (vm) => ({
    phase_local_status: 'finished',
    start_date: vm.itemPage.start_date,
    period: vm.itemPage.duration,
    status: ['done', 'selected', 'disabled'],
    items: [],
    modelsDesigne: [{ name: '', id: '1425' }, { name: '', id: '1415' }]
  }),
  methods: {

    onChoose(phase, stage_id_) {
      axios
        .post('https://cp.riadiat.sa/api/v1/incubator/stage/user-completed',
          {
            stage_id: stage_id_,
            is_completed: 1,
            department_id: phase.id
          })
        .then((response) => console.log(response))
      // console.log('././')
      // console.log(this.items[0])
      // console.log('././')
      this.fireEvent('phase-choosen', { ...phase, stage_id_ })
    },



    async initializing() {
      try {
        let { data } = await incubatorAPI.getStages({ department_id: this.$route.params.id });
        if (data.success) {
          this.items = data.data
          // console.log('--')
          // console.log(data.data)
          // console.log('--')
        }
      } catch (error) {
        console.log('error', error)
        //
      }

    },
  },
  mounted() {
    this.initializing()
  }
}
</script>

<style>
.incubator-business-sidebar {
  width: 100%;
  overflow: auto;
  height: 900px;
  /* height: calc(100vh - 150px); */
  background: #c0c0c0;
  min-height: 400px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
}

.incubator-business-sidebar__wrapper {
  padding: 5px;

}

h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 44px;


  /* Secondary/#2D2F3A */

  color: #2D2F3A;
  margin: 0;
}

.incubator-business-sidebar__body {
  height: 80%;
  margin: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

}

.incubator-business-sidebar .percent-label {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  padding: 0 5px;
  text-transform: capitalize;

  /* Secondary/#2D2F3A */

  color: #2D2F3A;
}

.active-shadow {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.incubator-business-sidebar .step-title {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  /* Secondary/#2D2F3A */
  padding: 3px;
  color: #2D2F3A;
  margin: 0;
}

.vertical .d-stepper-head__wrapper .d-stepper-head-item:not(:last-child):after {
  margin: -5px 11px !important;
}
</style>