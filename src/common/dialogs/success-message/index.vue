<template>
  <d-dialog-large
    :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
  >
    <template v-slot>
      <div class="text-center" v-if="showed">
        <div v-if="!itemDialog.icon">
          <img :src="itemDialog.image" alt="" />
        </div>
        <div>
          <h4 :class="[itemDialog.titleClass ?? '']">
            {{ itemDialog.title }}
          </h4>
          <p
            class="t-c fs-r-16-24"
            v-html="itemDialog.description"
            :class="[itemDialog.descriptionClass ?? '']"
          ></p>
        </div>
        <div v-if="itemDialog.icon">
          <img :src="itemDialog.iconUrl" alt="" />
        </div>
        <div v-if="itemDialog.btns" :class="[itemDialog.groupBtns ?? '']">
          <div v-for="(btn, i) in itemDialog.btns" :key="i" class="mt-3">
            <button
              @click="callAction(btn)"
              style="height: 40px"
              :class="[btn.class ?? 'btn btn-custmer']"
            >
              {{ btn.title }}
            </button>
          </div>
        </div>
        <div v-else-if="itemDialog.hideBtn" class="mt-3"></div>
        <div v-else class="mt-3">
          <button
            @click="closeEvent"
            style="height: 40px"
            class="btn btn-custmer"
          >
            {{ $t("Home") }}
          </button>
        </div>
      </div>
      <!-- <div class="text-center" v-if="showed">
        <div v-if="!itemDialog.icon">
          <img :src="itemDialog.image" alt="">
        </div>
        <div>
          <h4 :class="[itemDialog.titleClass ?? '']">
            {{ itemDialog.title }}
          </h4>
          <p class="t-c fs-r-16-24" v-html="itemDialog.description" :class="[itemDialog.descriptionClass ?? '']"></p>
        </div>
        <div v-if="itemDialog.icon">
          <img :src="itemDialog.iconUrl" alt="">
        </div>
        <div v-if="itemDialog.btns"  :class="[itemDialog.groupBtns ?? '']">
          <div v-for="(btn, i) in itemDialog.btns" :key="i" class="mt-3">
            <button @click="callAction(btn)" style="height: 40px;" :class="[btn.class ?? 'btn btn-custmer']">
              {{ btn.title }}</button>

          </div>
        </div>
        <div v-else-if="itemDialog.hideBtn" class="mt-3">
        </div>
        <div v-else class="mt-3">
          <button @click="closeEvent" style="height: 40px;" class="btn btn-custmer">
            {{ $t('Home') }}</button>
        </div>

      </div> -->
    </template>
  </d-dialog-large>
</template>

<script>
export default {
  name: "standard-success-message",
  props: {
    group: {
      type: String,
      default: "standard-success-message",
    },
  },
  data: (vm) => {
    return {
      itemDialog: {
        title: null,
        description: null,
        btns: null,
        image: `${vm.publicPath}assets/img/cuate-2.png`,
      },
      showed: false,
    };
  },
  methods: {
    async callAction(btn) {
      if (btn.action) {
        btn.loading = true;
        await btn.action();
        btn.loading = false;
      }
      this.closeEvent();
    },
    openDialog(data) {
      this.itemDialog.onClose = null;
      if (data.btns) {
        data.btns.forEach((btn) => (btn.loading = false));
      }
      this.itemDialog = Object.assign({}, data);
      if (!data.btns) this.itemDialog.btns = null;

      if (!data.image)
        this.itemDialog.image = `${this.publicPath}assets/img/cuate-2.png`;
      if (!data.iconUrl)
        this.itemDialog.iconUrl = `${this.publicPath}assets/svg/tick-square.svg`;
      this.showed = true;
      return true;
    },
    closeDialog(evt, btn) {
      console.mylog(evt, btn, this.itemDialog);
      this.showed = false;
      if (this.itemDialog.onClose && btn) this.itemDialog.onClose();
      this.itemDialog.onClose = null;
      return true;
    },
    closeEvent() {
      this.fireEvent(this.group + "-close-dialog");
      // this.$router.push('/')
    },
  },
};
</script>

<style></style>
