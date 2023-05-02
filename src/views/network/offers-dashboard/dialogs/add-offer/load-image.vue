<template>
    <ValidationProvider tag="div" :name="$t('Image')" vid="image" rules="required|image" v-slot="{ validate, errors }">
        <label for="imginput" class="form-label file-label mx-auto">
            <div v-if="file" @click="makeImageEmpty" class="loading-image__close">X</div>
            <div class="file-label__wrapper w-100 h-100">
            <div class="load-image__image-empty">
                <img :src="`${publicPath}assets/svg/empty-image.svg`" height="96" width="96" />
                <p class="m-c">{{ $t('add-display-image') }} </p>
            </div>
            <div class="add-img-selected">
                <img class="image-selected-dialog" src="none" :id="idImage" width="150" height="150" />
            </div>

            <input @change="uploadImage($event, validate) || validate($event)" class="form-control opacity-0 " type="file"
                id="imginput">
            </div>
        </label>
        <div v-if="errors.length !== 0" class="col-12 text-input-error text-center">
            {{ errors[0] }}
        </div>
    </ValidationProvider>
</template>

<script>
export default {
    name: 'load-image-input',
    model: {
        prop: 'value',
        event: 'updateValue'
    },
    data: (vm) => {
        return {
            file: null,
            idImage: `image-selected-${vm.generateRandomString(8)}`,
        }
    },
    watch: {
        file() {
            this.$emit('updateValue', this.file)
        }
    },
    methods: {
        makeImageEmpty(evt) {
            if(evt) evt.preventDefault();
            
            this.file = null;
            window.$('#' + this.idImage)
                .attr('src', 'none')
                .css('opacity', '0');
        },
        async uploadImage(evt, validate) {
            let resValid = await validate(evt)
            if (!resValid.valid) {
                this.makeImageEmpty();
                return;
            }
            if (!evt.target.files && !evt.target.files[0]) {
                this.makeImageEmpty();
                return;
            }

            this.file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload = (e) => {
                console.log('result', e, this.idImage)
                window.$('#' + this.idImage)
                    .attr('src', e.target.result)
                    .css('opacity', '1');

            };
            reader.readAsDataURL(this.file);
        },
    }
}
</script>

<style scoped>
.file-label {
    width: 154px;
    height: 154px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
}
.file-label__wrapper{
    border-radius: 20px;
    overflow: hidden;
    position: relative;
}
.load-image__image-empty {
    position: absolute;
    text-align: center;
    width:100%
}

.add-img-selected {
    height: 150px;
    width: 150px;
}
.loading-image__close{
    z-index: 3;
    cursor: pointer;
    position: absolute;
    width: 24px;
    height: 24px;
    right: -17px;
    display: flex;
    top: -12px;
    background: #FFFFFF;
    box-shadow: 2px 2px 10px rgba(12, 47, 51, 0.078);
    align-items: center;
    justify-content: center;
    border-radius: 50%;}
</style>