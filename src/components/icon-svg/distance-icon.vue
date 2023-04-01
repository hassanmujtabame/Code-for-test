<template>
    <svg
    :width="size" :height="size" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect :width="size" :height="size" fill="url(#patterndistance0)"/>
        <defs>
        <pattern id="patterndistance0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_8241_155356" transform="scale(0.0104167)"/>
        </pattern>
        <image id="image0_8241_155356" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9ElEQVR4nO3azUoDQRBF4X7mqUWWuvStFUEhhPy1KF9Xew/Mbhbn1GWyyhghhBBCCCGEEEIIIdygqt7vPbsfrnQ/F8Dwfi6A4f1cAMP7uQCG93MBDO/nAhjezwUwvJ8LYHg/F8Dwfi6A4f1cAMP7uQCG93MBDO/nAhjezwUwvJ8LYHg/F8Dwfi6A4f1cAMP7uQCG93MBDO/nAhjezwUwvP83BarqdWCO43j7lwN8Hr8W+GI+HWZG2GKA7+PXIgPMjNB+gPPj10IDPDtC6wEuj1+LDfDMCG0HuHb8WnCARyO0HODW8WvRAe6N0G6Ae8evhQe4NUKrAR4dvxo8lyO0GWCH49eVEVoMsNPx62KE5QfY8fg10bbCAKcFDvX+F89xHC/LD/D1zmnH448OP0Fn7512O36rAXYZ4Tg7frsBnhlhYGaO33KARyMMzMzx2w5wb4SBmTl+6wFujTAwM8dvP8C1EQZm5vhbDHA5wsDMHH+bAc5HGJiZ4281wCp/S6lJh60G6Ajv5wIY3s8FMLyfC2B4PxfA8H4ugOH9XADD+7kAhvdzAQzv5wIY3s8FMLyfC2B4PxfA8H4ugOH9XADD+7kAhvdzAQzv5wIY3s8FMLyfC2B4PxfA8H4ugOH9XADD+7kA5r/3hxBCCCGEEEIIIYTxYz4AET6n+guIPKkAAAAASUVORK5CYII="/>
        </defs>
        </svg>      
</template>
   
<script>
   export default {
       name:'d-distance-icon',
     props:{
       size:{
         type:[String,Number],
         default:24
       },
       color:{
         type:String,
         default:'currentColor'
       }
     }
   }
   </script>
   
   
