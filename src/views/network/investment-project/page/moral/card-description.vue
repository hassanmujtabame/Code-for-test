<template>
              <div>
                <h3>
                    عن المشروع
                </h3>
                <p v-html="itemPage.description"></p>
            
                <h3>
                    فريق العمل
                </h3>
                <p v-html="itemPage.description_user"></p>
            </div>
</template>

<script>
export default {
 props:{
    itemPage:{},
    isOwner:{}
 }
}
</script>

<style>

</style>