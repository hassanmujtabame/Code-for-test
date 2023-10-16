<template>
<<<<<<< Updated upstream
   <div class="container p-4">
            <h2 class="home-section-title text-centerl">
                شركائنا في حاضنة رياديات
            </h2>    
            <ItemsList /> 
=======
 <div class="my-5 p-5 reduced-padding">
      <div class="reduced-padding">
            <div class="section-header d-flex justify-content-center align-items-center mb-3">
              <h1 class="home-section-title text-center"> شركائنا في حاضنة رياديات</h1>
            
          </div>
                            <ItemsList /> 
>>>>>>> Stashed changes
        </div>
        </div>

</template>

<script>

import ItemsList from './items-list.vue'
export default {
 name:'section-our-partners',
 components:{
    ItemsList
 },
 data:()=>{return{}},
 watch:{},
  mounted(){
    window.AOS.init()
  }
}
</script>
<style>
.reduced-padding {
  padding-left: 10px; /* Adjust as needed */
  padding-right: 10px; /* Adjust as needed */
}
</style>

<style>
.section-header {
  padding-bottom: 15px;
}

.home-section-title {
  font-size: 24px;
  color: #333;
}

.more-btn {
    border: none;
    color: #1FB9B3;
    padding: 10px 20px;
    cursor: pointer;
    transition: color 0.2s;
    text-decoration: underline;
}


.more-btn:hover {
  background-color: #0056b3;
}
</style>