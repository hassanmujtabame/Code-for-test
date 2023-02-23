<template>
<div style="margin-top: 85px " class="consult">
    <div class="bg-body-page">
    <div class="container">
    <d-course-panel>
              <template v-slot:header>
                <h1>بطاقة الطالب</h1>
                </template>
                <template v-slot:default>
            <cardItem />
            </template>

        </d-course-panel>
        <div>
          <SectionConversation />
        </div>
  </div>
  </div>
  </div>
</template>

<script>
import cardItem from './card-item.vue'
import SectionConversation from './section-conversation/index'
export default {
  name:'student-page',
  components:{
    cardItem,
    SectionConversation
  }
}
</script>

<style>

</style>