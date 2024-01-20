<template>
  <d-dialog-large :xl="false" :group="group" :closeDialog="closeDialog" :openDialog="openDialog">
    <template v-slot:header>
      {{ $t('rate-your-experience-in') }} {{ title }}
    </template>
    <template v-slot:default>
      <div class="container">
        <ValidationObserver v-if="showDialog" ref="form">
          <ValidationProvider :name="$t('rate')" vid="rate" rules="required" v-slot="{ errors }">

            <div class="starts-rate">
              <startItem v-for="id in stars" :key="id" :itemId="id" :isSelected="itemForm.rate >= id"
                v-model="itemForm.rate" :size="32" />
            </div>
            <div v-if="errors.length !== 0" class="col-12 text-input-error">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
          <div class="mt-1">
            <ValidationProvider :name="$t('comment')" vid="comment" rules="required" v-slot="{ errors }">
              <textarea class="form-control" rows="5" v-model="itemForm.comment" :placeholder="$t('write-your-comment')">

        </textarea>
              <div v-if="errors.length !== 0" class="col-12 text-input-error">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
          </div>
        </ValidationObserver>
      </div>
    </template>
    <template v-slot:actions>
      <button @click="save" type="button" class="btn btn-main">
        {{ $t('send-rate') }}
      </button>
    </template>
  </d-dialog-large>
</template>

<script>
import startItem from './star-item.vue'
import commonAPI from '@/services/api/common';
export default {
  name: 'rate-your-experience-network',
  props: {
    group: {
      type: String,
      default: 'rate-your-experience-network'
    },
    title: {
      type: String,
      require: true
    },
    category: {
      type: String,
      require: true
    }
  },
  components: {
    startItem
  },
  data: () => ({
    stars: [5, 4, 3, 2, 1],
    itemForm: {
      rate: null,
      comment: ''
    },
    showDialog: false,
  }),
  methods: {
    async save() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        console.log('form invalid');
        return;
      }
      let formData = Object.assign({ category_name: this.category }, this.itemForm)
      try {
        let { data } = await commonAPI.rate(formData)
        if (data.success) {
          this.openSuccessDialog()
          this.closeEvent()
        } else {
          window.SwalError(data.message)
        }
      } catch (error) {
        console.log('error', error)
      }

    },
    openDialog() {
      this.itemForm.rate = null;
      this.itemForm.comment = '';
      this.showDialog = true;
      return true;
    },
    closeDialog() {
      this.showDialog = false
      return true;
    },
    closeEvent() {
      this.fireEvent(this.group + '-close-dialog')
    },
    openSuccessDialog() {
      this.fireOpenDialog('rate-success', this.title)
    }
  }
}
</script>

<style>
.starts-rate {
  display: flex;
  justify-content: center;
}
</style>