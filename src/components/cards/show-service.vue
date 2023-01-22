<template>
    <div class="box text-start">
        <div>
            <img class="img-fluid rounded-3" :src="image" :alt="title">
        </div>
        <div class="p-3">
            <div class="d-flex justify-content-between">

                <h6 class="text-dark">{{ title??'N/A' }}
                </h6>
                <p class="m-c">
                    {{department??'N/A'}}
                </p>
            </div>
            <p class="text-dark">{{ description??'N/A' }}
            </p>
            <div class="d-flex gap-2">

                <p class="t-c">
                    <emptyWalletIcon :size="24"  color="#979797"/>
                    {{price??'N/A'}} {{ $t('riyals') }}

                </p>

                <p class="t-c">
                    <MapIcon :size="24"  color="#979797" />
                    {{place??'N/A'}}
                </p>

                <p class="t-c">
                   <schoolWalletIcon />
                    {{owner??'N/A'}}
                </p>

            </div>
        </div>
    </div>
</template>

<script>
import emptyWalletIcon from '@/components/icon-svg/empty-wallet.vue';
import schoolWalletIcon from '@/components/icon-svg/school-wallet.vue';
import MapIcon from '@/components/icon-svg/localisation.vue';

export default {
 name:'show-service',
 components:{
    emptyWalletIcon,
    schoolWalletIcon,
    MapIcon
 },
 props:{
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    department:{
        type:String,
    },
    price:{
        type:[String,Number],
    },
    owner:{
        type:String,
    },
    place:{
        type:String,
    },
    image:{
        type:String,
    }
 }
}
</script>