<template>
  <div class="incubator-business-content">
    <d-overlays-simple v-if="loading"></d-overlays-simple>
    <div v-else>
      <component :is="componentChoosen" v-if="phase" v-bind="componentBind">
      </component>
    </div>
    <dCourseContent />
    <dModelsContent />
  </div>
</template>

<script>
import dCourseContent from './types/course';
import dConsultationContent from './types/consultation';
import dModelsContent from './types/model';
import dMeetingContent from './types/meeting';
import dDefaultContent from './types/default';
import dFourideasContent from './types/four-ideas';
import dBusinessContent from './types/business';
import dThelogoContent from './types/the-logo';
import dInvestmentproposalContent from './types/investment-proposal';
import dFinishContent from './types/finish';
import dElectoronicfeasibilitystudyContent from './types/electronic-feasibility-study';
import incubatorAPI from '@/services/api/incubator';


export default {
  name: 'd-content',
  components: {
    dCourseContent,
    dConsultationContent,
    dModelsContent,
    dMeetingContent,
    dDefaultContent,
    dFourideasContent,
    dThelogoContent,
    dBusinessContent,
    dInvestmentproposalContent,
    dElectoronicfeasibilitystudyContent,
    dFinishContent
  },
  data: () => ({
    loading: true,
    itemPage: null,
    phase: null,
    typeContent: 'default'
  }),
  computed: {
    componentBind() {
      return {
        phase: this.phase,
        itemPage: this.itemPage
      }
    },
    componentChoosen() {
      switch (this.typeContent) {
        case 'course':
        case 'consultation':
        case 'meeting':
        case 'fourideas':
        case 'thelogo':
        case 'business':
        case 'investmentproposal':
        case 'electoronicfeasibilitystudy':
        case 'finish':
        case 'models': return `d-${this.typeContent}-content`


        default:
          return `d-default-content`
      }
    }
  },
  mounted() {
    this.initializing()
  },
  methods: {
    async initializing() {
      this.loading = true;
      this.itemPage = null;
      try {
        let { data } = await incubatorAPI.getStagePhase(this.phase.stage_id, { type: this.typeContent });
        if (data.success) {
          this.itemPage = data.data
        }
      } catch (error) {
        //
      }
      this.loading = false;
    },
    loadContent(data) {
      if (this.phase && data.id == this.phase.id) return;
      this.phase = data;
      this.typeContent = this.phase.type;
      this.initializing()
    }
  },

  beforeDestroy() {
    window.EventBus.off('phase-choosen', this.loadContent)
  },
  created() {
    window.EventBus.listen('phase-choosen', this.loadContent)
  }
}
</script>

<style>
.incubator-business-content {
  /* position: relative; */
  /* width: 100%; */
  /* overflow: auto; */
  /* height: calc(100vh - 150px); */
  /* background: #c0c0c0;*/
  min-height: 400px;

}

.incubator-business-content__title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 59px;
  /* identical to box height */

  /* Secondary/#2D2F3A */

  color: #2D2F3A;
}

.incubator-business-content__desc {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  /* or 219% */


  /* Secondary/medium gray */

  color: #767676;
}
</style>