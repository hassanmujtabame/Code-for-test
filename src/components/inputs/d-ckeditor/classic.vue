<template>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: 'd-ckeditor-classic',
        props:{
            value:{
                type:String
            },
            eConfig:{
                type:[Object,Array],

                default:()=>{return {
                    // The configuration of the editor.
                }}
            }
        },
        data(vm) {
            return {
                editor: ClassicEditor,
                editorData: '<p></p>',
                editorConfig: vm.eConfig
            };
        },
        watch:{
            value:{
                immediate:true,
                handler(val){
                    this.editorData=val
                }
            },
            editorData(){
                this.$emit('input',this.editorData)
            }
        }
    }
</script>
