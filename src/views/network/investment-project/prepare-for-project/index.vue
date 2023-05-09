<template>
  <div style="margin-top:85px">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
    {{ $t('has-error') }}
    </div>
    <div v-else class="container">
        <div class="row">
            <div class="col-12">
                <chatBody :isPaid="isPaid" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import chatBody from './section-chat'
export default {
 name:'prepare-for-project',
 components:{
    chatBody
 },
 data:()=>({
    isPaid:false,
    loading:true,
    hasError:false,
 }),
 methods: {
    initializing(){
        this.loading = true;
        this.hasError = false;
        //
        this.isPaid = true;
        this.loading = false;
    }
 },
 mounted(){
    this.initializing()
 }
}
</script>

<style>

</style>