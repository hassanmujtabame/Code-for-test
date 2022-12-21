<template>
   <div class="col-md-6 d-flex gap-2 justify-content-end">
                    <div>
                        <button style="height: 40px;" class="btn-main px-3 w-100 border-0 rounded-2"
                            data-bs-toggle="modal" href="#addModal" role="button">
                            <img src="/assets/svg/update.svg" />

                            تعديل
                        </button>
                    </div>
                    <div>
                        <button style="height: 40px; background-color:#FFBC00 ;"
                            class="btn-main px-3 w-100 border-0 rounded-2" data-bs-toggle="modal"
                            href="#exampleModalToggle-stop" role="button">
                           <img src="/assets/svg/suspendu.svg" />
                            تعليق
                        </button>
                    </div>
                    <div>
                        <button style="height: 40px; background-color:#FF1616 ;"
                            class="btn-main px-3 w-100 border-0 rounded-2" data-bs-toggle="modal"
                            href="#exampleModalToggle7" role="button">
                           <img src="/assets/svg/trash-outline.svg" />

                            حذف
                        </button>

                    </div>


                </div>
</template>

<script>
export default {
 name:'action-crud'
}
</script>

<style>

</style>