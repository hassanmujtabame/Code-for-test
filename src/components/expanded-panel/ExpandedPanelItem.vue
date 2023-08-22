<template>
  <div class="accordion-item m-2" :class="{ 'border-bottom': borderBottom }">
    <h2 v-if="title || $slots.btnTitle" class="accordion-header" :id="idh">
      <slot name="before-btn"></slot>
      <button
        class="accordion-button2 d-flex" 
        :class="[
          !opened_ ? 'collapsed' : '',
          classTitle,
          before ? 'before' : '',
        ]" 
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#${id}`"
        :aria-expanded="opened_"
        :aria-controls="id"
      >
        <slot name="btnTitle">
          {{ title }}
        </slot>
      </button>
    </h2>
    <slot name="title" :id="id" :toggle="toggle" :open="opened_"></slot>
    <div
      :id="id"
      class="accordion-collapse collapse"
      :class="{ show: opened_ }"
      :aria-labelledby="idh"
      data-bs-parent="#accordionFlushExample1"
    >
      <div class="accordion-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "d-expanded-panel-item",
  props: {
    title: {
      type: String,
      require: true,
    },
    classTitle: {
      type: String,
    },
    before: {
      type: Boolean,
      default: false,
    },
    opened: {
      type: Boolean,
      default: false,
    },
    borderBottom: {
      type: Boolean,
      require: true,
    },
  },
  data: (vm) => {
    return {
      id: "",
      idh: "",
      opened_: vm.opened,
    };
  },
  methods: {
    toggle() {
      var myCollapse = document.getElementById(this.idh);
      new window.bootstrap.Collapse(myCollapse, {
        toggle: false,
      });
    },
  },
  mounted() {
    //console.log('this',this._uid,this.$parent.$children[0]._uid)
    let id = this.$parent.$attrs.id;
    let index =
      this.$parent.$children.findIndex((x) => x._uid == this._uid) + 1;
    //console.log(index)
    this.id = id + "-" + index;
    this.idh = id + "-header" + index;
  },
};
</script>

<style>
.accordion-button2{
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 1rem;
    text-align: left;
    border: 0;
    border-radius: 0;
    overflow-anchor: none;
    background: none;
    color: #737373;
}
.accordion-button2::after{
  float: right !important;
    font-family: FontAwesome;
    content:"\f068";
    padding-right: 5px;
    margin-right: auto;

}
.accordion-button2.collapsed::after{
  content: "\f0fe";
    float: right !important;
    content:"\f067";
    margin-right: auto;
}

</style>