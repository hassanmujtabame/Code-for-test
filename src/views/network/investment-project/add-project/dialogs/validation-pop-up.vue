<template>
  <d-dialog-large :xl="false"
                  :group="group"
                  :closeDialog="closeDialog"
                  :openDialog="openDialog"
  >
    <template v-slot:default>
      <div class="text-center">
        <div>
          <img class="img-fluid" :src="`${publicPath}assets/img/danger.svg`" width="100px" alt="">
        </div>
        <div>
          <h3>
            هنا خطا ما
          </h3>
          <p>
            {{ error }}
          </p>
        </div>
      </div>
    </template>
    <template v-slot:actions>
      <button @click="closeMe" class="btn bg-main text-white">{{ $t('ok') }}</button>
    </template>
  </d-dialog-large>
</template>
<script>
export default {
  name: "validation-pop-up",
  props: {
    group: {
      type: String,
      default: 'validation-pop-up'
    },
    error: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    showDialog: false,
  }),
  methods: {
    closeMe() {
      this.fireCloseDialog(this.group)
    },
    openDialog() {

      this.showDialog = true;
      return true;
    },
    closeDialog() {
      this.showDialog = false

      return true;
    },
  }
}

</script>