<template>
 <div class="comment px-4 py-2 border-bottom ">
                                <div class="d-flex justify-content-between align-items-center">

                                    <h6 class="m-0">
                                        {{item.name}}
                                    </h6>
                                    <p class="m-0">
                                        <span class="s-c">
                                            ({{item.rate}})
                                        </span>
                                        <span>
                                            <d-rate-font-stars :value="item.rate" readonly/>
                                        </span>
                                    </p>

                                </div>
                                <small class="s-c ">
                                   {{ item.comment }}
                                </small>
                            </div> 
</template>

<script>
export default {
 props:{
    item:{}
 }
}
</script>

<style>

</style>