<template>
  <div class="add-question-item border p-3 rounded-3 h-100 d-flex flex-column">
    <div class="add-question-item__wrapper box flex-grow-1">
      <div class="add-question-item__close">
        <button class="btn" @click="deleteItem">
          <i class="fa fa-trash"></i>
        </button>
      </div>
      <!-- question  -->
      <ValidationObserver ref="form" tag="div">
        <div class="mt-3">
          <validationProvider
            :name="$t('question-title')"
            vid="title"
            rules="required"
            v-slot="{ errors }"
          >
            <d-text-input
              :errors="errors"
              v-model="itemLocal.title"
              class="border w-100 rounded-2"
              label="السؤال"
            >
            </d-text-input>
          </validationProvider>
        </div>
        <div
          v-if="itemLocal.options.length === 0"
          class="add-quetion-item__content"
        >
          <h1 class="add-question-item__empty">لا يوجد اختيارات</h1>
        </div>
        <div v-else class="add-question-item__content mt-3">
          <div
            v-for="(o, i) in itemLocal.options"
            :key="i"
            class="form-check form-check-option mt-1"
            :class="{ 'correct-answer': o.is_correct }"
          >
            <input
              class="form-check-input"
              v-model="value_"
              type="radio"
              :name="`exampleRadios-${item.uuid}`"
              :id="`exampleRadios-${o.id}`"
              :value="o.id"
            />
            <label
              class="form-check-label clickable"
              :for="`exampleRadios-${item.uuid}`"
            >
              {{ o.title }} <i>[{{ o.id }}]</i>
            </label>
            <div class="add-question-item__actions">
              <i
                @click="confirmDeleteOption(o, i)"
                :disabled="i === selectedIndex"
                class="fa fa-trash c-danger"
              ></i>
              <i
                @click="editOption(o, i)"
                :disabled="i === selectedIndex"
                class="fa fa-pen-to-square c-info"
              ></i>
            </div>
          </div>
        </div>
      </ValidationObserver>
      <div class="mt-3 d-flex border-botton-thin">
        <div class="row">
          <div class="col-12 row">
            <div class="col-12">
              <d-text-input
                solo
                type="text"
                v-model="opt.title"
                class="border w-100 p-2 rounded-2"
                label="اضف الاختيار"
              >
                <!--append-icon-->
                <template v-slot:append-icon>
                  <div class="d-flex align-items-center">
                    <button v-if="loading" class="btn no-border t-c">
                      <i class="fa fa-spinner fa-spin"></i>
                    </button>
                  </div>
                </template>
              </d-text-input>
            </div>
            <!-- <div class="col-12 col-md-5">
              <d-text-input
                solo
                type="text"
                v-model="opt.id"
                class="col-12 col-md-6 border w-100 p-2 rounded-2 mx-2"
                label="قيمة الاختيار"
              >
              </d-text-input>
            </div> -->
          </div>
          <!--correct-->
          <div class="col-12 form-check mt-3">
            <input
              class="form-check-input"
              v-model="isCorrect"
              type="checkbox"
              :name="`correctRadios-${item.uuid}`"
              :value="1"
            />
            <label
              class="form-check-label clickable fs-r-12-17"
              style="color: var(--label-color)"
              :for="`correctRadios-${item.uuid}`"
            >
              هذا جواب صحيح
            </label>
          </div>
        </div>
        <button
          v-if="selectedIndex === false"
          @click="addOption"
          class="btn h-100"
        >
          <i class="m-c fa fa-circle-plus clickable"></i>
        </button>
        <template v-else>
          <button @click="updateOption" class="btn h-100">
            <i style="color: blue" class="fa fa-floppy-disk fs-2 clickable"></i>
          </button>
          <button @click="cancelUpdateOption" class="btn h-100">
            <i style="color: red" class="fa fa-circle-xmark clickable"></i>
          </button>
        </template>
      </div>
    </div>
    <div class="add-question-item__footer mt-3 text-start flex-shrink-0">
      <button
        @click="save"
        :disabled="adding"
        class="btn btn-custmer px-3"
        role="button"
      >
        <i class="fa fa-spinner fa-spin" v-if="adding"></i>
        {{
          this.itemLocal.id ? $t("question-modification") : $t("new-question")
        }}
      </button>
    </div>
  </div>
</template>

<script>
import academyAPI from "@/services/api/academy";
export default {
  props: {
    label: {},
    item: {},
  },
  data: (vm) => {
    return {
      itemUUID: vm.generateRandomString(8),
      value_: null,
      isCorrect: false,
      loading: false,
      adding: false,
      itemLocal: { ...vm.item },
      opt: {
        title: "",
        id: "",
        is_correct: 0,
      },
      selectedIndex: false,
      opts: [
        { id: "1", title: "الغسالة" },
        { id: "2", title: "الغسالة" },
        { id: "3", title: "الغسالة" },
        { id: "4", title: "الغسالة" },
        { id: "5", title: "الغسالة" },
      ],
    };
  },
  watch: {
    isCorrect() {
      this.opt.is_correct = this.isCorrect ? 1 : 0;
    },
    item: {
      deep: true,
      immediate: true,
      handler() {
        this.itemLocal = { ...this.item };
      },
    },
    itemLocal: {
      deep: true,
      handler() {
        this.$emit("update", { ...this.itemLocal });
      },
    },
  },
  methods: {
    async save() {
      this.adding = true;
      let valid = await this.$refs.form.validate();
      if (!valid) {
        this.adding = false;

        return;
      }
      if (this.itemLocal.options.length <= 1) {
        let message = "على اقل اختيارين لكل سؤال";
        window.SwalError(message);
        this.adding = false;
      }
      let form = {
        title: this.itemLocal.title,
        options: this.itemLocal.options.map((o) => o.title),
        question_values: this.itemLocal.options.map((o) => o.id),
        corrects: this.itemLocal.options.map((o) => o.is_correct),
      };

      let formData = this.loadObjectToForm(form);
      try {
        let { data } = this.itemLocal.id
          ? await academyAPI.examsAPI.updateQuestion(
              this.itemLocal.id,
              formData
            )
          : await academyAPI.examsAPI.addQuestion(
              this.itemLocal.exam_id,
              formData
            );
        if (data.success) {
          if (!this.itemLocal.id) {
            this.itemLocal.id = data.data.question_id;
          }
          this.$emit("saved", this.itemLocal);
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        console.mylog("error", error);
      }
      this.adding = false;
    },
    addOption() {
      this.itemLocal.options.push({ ...this.opt });
      this.clearOpt();
    },
    editOption(newOpt, index) {
      console.mylog("ssset", newOpt, index);
      this.opt = Object.assign(this.opt, newOpt);
      this.isCorrect = this.opt.is_correct === 1;
      this.selectedIndex = index;
    },
    confirmDeleteOption(newOpt, index) {
      let dataEvent = {
        title: "هل حقا تريد حذف هذا الاختيار؟",
        description: newOpt.name,
        groupBtns: "d-flex justify-content-evenly",
        type: "warning",
        btns: [
          { title: "تراجع", class: "btn btn-custmer btn-danger" },
          {
            title: this.$t("confirm_delete"),
            action: () => this.deleteOption(newOpt, index),
            class: "btn btn-custmer",
          },
        ],
      };
      this.showConfirmMsg(dataEvent);
    },
    deleteOption(newOpt, index) {
      // let indexItem  = this.itemLocal.options.findIndex(l=>l.uuid===newOpt.uuid)
      if (index > -1) {
        this.itemLocal.options.splice(index, 1);
      }
      if (this.selectedIndex === index) {
        this.clearOpt();
      }
    },
    cancelUpdateOption() {
      this.clearOpt();
    },
    updateOption() {
      this.itemLocal.options[this.selectedIndex] = Object.assign(
        this.itemLocal.options[this.selectedIndex],
        this.opt
      );
      this.clearOpt();
    },
    deleteItem() {
      this.$emit("delete", this.itemLocal);
    },

    clearOpt() {
      this.opt.title = "";
      this.opt.id = "";
      (this.opt.is_correct = 0),
        (this.isCorrect = false),
        (this.selectedIndex = false);
    },
  },
};
</script>

<style scoped>
.add-question-item__wrapper {
  position: relative;
}

.add-question-item__close {
  width: 100%;
  text-align: end;
  position: absolute;
  top: -10px;
}

.add-question-item__close > button {
  color: red;
  padding: 1px 5px;
}

.add-question-item__close > button:hover {
  background: rgb(243 20 20 / 8%);
  padding: 2px 5px;
}

.add-question-item__content {
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.add-question-item__actions > i.fa {
  font-size: 0.66rem;
  padding: 5px;
  cursor: pointer;
}

.border-botton-thin {
  border-bottom: 1px solid #f1f1f1;
}

.add-question-item__footer {
  border-top: 1px solid #f1f1f1;
  padding-top: 5px;
}

.add-question-item__empty {
  color: var(--b-color);
  font-size: 24px;
  line-height: 30px;
  text-align: center;
}

.form-check-option {
  border-radius: 8px;
  padding: 10px 10px;
  width: 100%;
}

.form-check {
  align-items: center;
  display: flex;
}

.form-check > input {
  margin: 0;
  flex-shrink: 0;
}

.form-check > label {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  flex: 1;
}

.correct-answer {
  background: #659f0c73;
}
</style>
