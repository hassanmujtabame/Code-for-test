<template>
    <div style="margin-top: 85px;">
        <div class="container">
    <div class="e-feasibility-study">
        <h1 class="e-feasibility-study__title">دراسة الجدوى الإلكترونية</h1>
        <div class="e-feasibility-study__stepper mt-3">
        <div class="e-feasibility-study__stepper-header">
            <d-stepper-head>

<d-stepper-head-item v-for="(phase,i) in stages" :key="i" 
:status="phase.status"
>
    {{ phase.title }}
  </d-stepper-head-item>
  </d-stepper-head>
        </div>
        <div class="e-feasibility-study__stepper-content mt-3">
            
        </div>
        <div class="e-feasibility-study__stepper-footer mt-3">
            <button class="btn btn-custmer-w">السابق</button>
            <button class="btn btn-custmer">التالى</button>
        </div>
    </div>
</div>
</div>
</div>
</template>
<script>
export default {
    name:'e-feasibility-study',
    data:()=>({
        stages:[
            {title:'مرحلة الاولى', status:'finished'},
            {title:'مرحلة الثاني', status:'finished'},
            {title:'مرحلة الثالثة', status:'in-progress'},
            {title:'مرحلة الرابعة', status:'not-started'},
        ]
    })
}
</script>
<style>
.e-feasibility-study{
border-radius: 4px;
}
.e-feasibility-study__title{
    font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
/* identical to box height, or 125% */
text-transform: capitalize;

color: #414042;
}
.e-feasibility-study__stepper{
    display: flex;
    flex-direction: column;
    height:calc( 100vh - 150px);
    min-height: 278px;

}
.e-feasibility-study__stepper-content{
    flex:1;

}
.e-feasibility-study__stepper-header,
.e-feasibility-study__stepper-footer{
    flex: 0;
}
.e-feasibility-study__stepper-footer{
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}
</style>