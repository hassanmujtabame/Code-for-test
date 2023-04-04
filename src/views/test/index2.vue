<template>
  <div class="d-flex align-items-center justify-content-center">
    <div style="max-width:200px">
      <d-mention-input v-model="list" label="المدربين" :items="items" :tooltipEvents="events">
        <template #[`item-@`]="{ item }">
          <DListItem :title="item.name" :sub-title="item.job" :image="item.image" avatar />
        </template>
      </d-mention-input>
      <DListItem :title="items[0].name" :sub-title="items[0].job" :image="items[0].image" avatar />

      <div v-if="false" id="popover" aria-hidden="false" class="tooltip popover vue-popover-theme"
        style="visibility: visible; position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(732px, 49px, 0px);"
        x-placement="bottom-start">
        <div class="wrapper">
          <div class="tooltip-inner popover-inner" style="position: relative;">
            <div>
              <div class="mention-item mention-selected">
                <div class="d-list-item">
                  <div class="d-list-item__wrapper">
                    <div class="d-list-item__avatar"
                      style="background-image: url(&quot;https://cdn-icons-png.flaticon.com/512/149/149071.png&quot;);">
                    </div>
                    <div class="d-list-item__content">
                      <h3 class="d-list-item__title">Guillaume</h3><!---->
                    </div><!---->
                  </div>
                </div>
              </div>
              <div class="mention-item">
                <div class="d-list-item">
                  <div class="d-list-item__wrapper">
                    <div class="d-list-item__avatar"
                      style="background-image: url(&quot;https://cdn-icons-png.flaticon.com/512/149/149071.png&quot;);">
                    </div>
                    <div class="d-list-item__content">
                      <h3 class="d-list-item__title">Eduardo</h3><!---->
                    </div><!---->
                  </div>
                </div>
              </div>
              <div class="mention-item">
                <div class="d-list-item">
                  <div class="d-list-item__wrapper">
                    <div class="d-list-item__avatar"
                      style="background-image: url(&quot;https://cdn-icons-png.flaticon.com/512/149/149071.png&quot;);">
                    </div>
                    <div class="d-list-item__content">
                      <h3 class="d-list-item__title">Sébastien</h3><!---->
                    </div><!---->
                  </div>
                </div>
              </div>
              <div class="mention-item">
                <div class="d-list-item">
                  <div class="d-list-item__wrapper">
                    <div class="d-list-item__avatar"
                      style="background-image: url(&quot;https://cdn-icons-png.flaticon.com/512/149/149071.png&quot;);">
                    </div>
                    <div class="d-list-item__content">
                      <h3 class="d-list-item__title">Sébastien sqd qsdqs</h3><!---->
                    </div><!---->
                  </div>
                </div>
              </div>
              <div class="mention-item">
                <div class="d-list-item">
                  <div class="d-list-item__wrapper">
                    <div class="d-list-item__avatar"
                      style="background-image: url(&quot;https://cdn-icons-png.flaticon.com/512/149/149071.png&quot;);">
                    </div>
                    <div class="d-list-item__content">
                      <h3 class="d-list-item__title">qs sdfd Sébastien</h3><!---->
                    </div><!---->
                  </div>
                </div>
              </div>
            </div>
            <div data-v-8859cc6c="" tabindex="-1" class="resize-observer"><object aria-hidden="true" tabindex="-1"
                type="text/html" data="about:blank"></object></div>
          </div>
          <div class="tooltip-arrow popover-arrow" style="left: 9px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DListItem from './d-list-item.vue'
import academy from '@/services/api/academy'
const users = [
  {
    id: 1,
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'akryum',
    name: 'Guillaume',
  },
  {
    id: 2,
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'posva',
    name: 'Eduardo',
  },
  {
    id: 3,
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'atinux',
    name: 'Sébastien',
  },
  {
    id: 3,
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'atinux',
    name: 'Sébastien sqd qsdqs',
  },
  {
    id: 3,
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'atinux',
    name: 'qs sdfd Sébastien',
  },
]

export default {
  name: 'test-page',
  components: {
    DListItem
  },

  data() {
    return {
      list: [],
      items: users,
    }
  },
  computed: {
    events() {
      return {
        //  open:this.loadIssues,
        apply: this.onApply,
        //search:this.loadIssues
      }
    }
  },
  methods: {
    async loadIssues(search = null) {
      let { data } = await academy.instructor.getAll({ search: search })
      this.items = data.data
    }
    ,
    async onOpen(key, ...rest) {
      console.mylog('key', key, rest)
      await this.loadIssues()
      //this.items = key === '@' ? users : issues
    },

    onApply(item, key, replacedWith) {
      console.log(item, key, `has been replaced with ${replacedWith}`)
    }
  },
}
</script>
