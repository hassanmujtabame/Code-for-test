<template>
<div style="margin-top: 96px;">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <DSidebar/>
            </div>
            <div class="col">
                <DContent />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import DSidebar from './sidebar'
import DContent from './content'
export default {
name:'incubator-business',
components:{
    DSidebar,
    DContent
}
}
</script>

<style>

</style>