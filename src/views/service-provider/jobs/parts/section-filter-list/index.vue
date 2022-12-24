<template>
  <d-filter-list  
        :call-list="loadList"
            classColCard="col-12 col-md-6 mt-2"
            >
            <template v-slot:title>
              <h3 class="t-c fw-bolder">
                قائمة الوظائف
              </h3>
            </template>
                <template v-slot="{item}">
                 
                  <d-job-card
                  :title="item.title"
                  :place="item.place"
                  :description="item.description"
                  :during="item.during"
                  :department="item.department"
                  :category="item.category"
                  :datePublish="item.datePublish"
                  :offers="item.offers"
                  >
                  <template v-slot:icon>
                    <img src="/assets/svg/sewing.svg" />

                  </template>
                  </d-job-card>
                  </template>
      

      </d-filter-list >
</template>
<script>
export default {
 name:'section-filter-list',
 data:()=>{
    return {
        items:[
            {title:'تصميم فستان لحلفة تخرج',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'7 أيام',offers:3,price:150,datePublish:'نشر منذ ساعة'},
            {title:'تصميم فستان لحلفة تخرج',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'7 أيام',offers:3,price:150,datePublish:'نشر منذ ساعة'},
            {title:'تصميم فستان لحلفة تخرج',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'7 أيام',offers:3,price:150,datePublish:'نشر منذ ساعة'},
            {title:'تصميم فستان لحلفة تخرج',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'7 أيام',offers:3,price:150,datePublish:'نشر منذ ساعة'},
            {title:'تصميم فستان لحلفة تخرج',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'7 أيام',offers:3,price:150,datePublish:'نشر منذ ساعة'},

        ]
    }
 },
 methods:{
     loadList(/*metaInfo*/){
        return new Promise((resolve/*, reject*/) =>{ 
  let meta = {
        current_page: 1,
        from: 1,
        last_page: 2,
        per_page: 10,
        to: 10,
        total: 18
    }
    let data={success:true,data:this.items,meta:meta}
            resolve({data:data})
    //reject({success:false,message:'Promise Rejected'}) 
})
    }
 }
}
</script>

<style>

</style>