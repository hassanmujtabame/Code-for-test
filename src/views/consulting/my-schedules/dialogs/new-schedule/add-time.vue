<template>
  <v-popover
  offset="16"
>
  <!-- This will be the popover target (for the events and position) -->
  <button class="btn-text tooltip-target m-c"><i class="fa fa-plus-circle"></i> إضافة وقت اخر</button>

  <!-- This will be the content of the popover -->
  <template slot="popover">
    <ValidationObserver tag="div" class="p-2" ref="form">
        <ValidationProvider rules="required" vid="time" :name="$t('time')"
        v-slot="{errors}"
        >
    <d-text-input type="time" :errors="errors" class="tooltip-content" v-model="time" :label="$t('available-time')" >
    <template v-slot:append-icon>
        <i @click="addTime" class="m-c p-2 fa fa-plus-circle clickable"></i>
    </template>
    </d-text-input>
</ValidationProvider>
</ValidationObserver>
  </template>
</v-popover>
</template>

<script>
export default {
    props:{
        times:{
        }
    },
    watch:{
        times:{
            deep:true,
            immediate:true,
            handler(){}
        }
    },
data:()=>({
    time:'08:00'
}),
methods:{
    async addTime(){
        let valid = await this.$refs.form.validate();
        if(!valid) return;
        if(this.times.find(x=>x==this.time))
        {
            //
        }else
        this.$emit('store',this.time)
    }
}
}
</script>
