<template>
  <div class="box rounded-3">
                        <div class="d-flex flex-column p-2">
                            <h6 class="m-c fw-bolder">
                                {{ value }}
                            </h6>
                            <h6 class="m-c fw-bolder">
                                {{title}}
                            </h6>

                        </div>

                    </div>
</template>

<script>
export default {
props:{
    value:{},
    title:{}
}
}
</script>

<style>

</style>