<template>
 <div style="margin-top: 96px;" class="bg-body-page">
    <div class="container pt-5">
<div class="do-exam">
    <div class="do-exam__wrapper">
        <div class="do-exam__header">
            <div class="do-exam__header-start">
            <h1 class="do-exam__title">اختبار 1 : دورة الازياء</h1>
        </div>
            <div class="do-exam__header-end">
                <div class="do-exam__progress">
                    <div class="dot dot-active">
                        <div class="dot__wrapper">
                        </div> 
                    </div>
                    <div class="dot dot-active">
                        <div class="dot__wrapper">
                        </div>
                    </div>
                    <div class="dot dot-active">
                        <div class="dot__wrapper">
                        </div>
                    </div>
                    <div class="dot">
                        <div class="dot__wrapper">
                        </div>
                    </div>
                    <div class="dot">
                        <div class="dot__wrapper">
                        </div>
                    </div>
                    <div class="dot">
                        <div class="dot__wrapper">
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        <div class="do-exam__body"></div>
        <div class="do-exam__footer">
            <button class="btn btn-custmer">التالى</button>
        </div>
    </div>
</div>

    </div>
 </div>
</template>

<script>
export default {
 name:'do-exam-page'
}
</script>

<style scoped>
.do-exam{
    background: white;
    padding: 5px;
    border-radius: 8px;
}
.do-exam__title{
    margin: 1px;
    padding: 0 5px;
    font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;

text-transform: capitalize;

color: #414042;
}
.do-exam__header{
    margin-top:20px;
    margin-right:10px;
    margin-left:10px;
    display: flex;
    align-items: center;
}
.do-exam__header-start{
    flex: 1;
}
.do-exam__header-end{
    flex-shrink: 0;
}
.do-exam__progress{
    display: flex;
    justify-content: space-evenly;
}
.do-exam__body{
    min-height: 300px;
}
.do-exam__footer{
    padding: 5px;
    border-top: 1px solid #c6c6c6;
}
.dot{
    padding: 2px;
}
.dot> .dot__wrapper{
    display:inline-block;
    border-radius: 50%;
width: 16px;
height: 16px;  
 background: #D9D9D9;
}
.dot.dot-active>.dot__wrapper{
    background: var(--m-color);
}
</style>