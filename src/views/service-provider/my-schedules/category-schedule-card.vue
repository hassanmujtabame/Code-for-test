<template>
  <div class="box border rounded-2 p-5">
                <div class="d-flex flex-column align-items-center">
                  <p>
                    <noteCircleIcon :color="item.color" />
                  </p>
                  <h3 class="t-c">
                  جدول  {{item.title}}
                  </h3>

                </div>
              </div>
</template>

<script>
import noteCircleIcon from '@/components/icon-svg/note-circle.vue'
export default {
    components:{
        noteCircleIcon
    },
    props:{
        item:{
            type:[Array,Object],
            require:true
        }
    }

}
</script>

<style>

</style>