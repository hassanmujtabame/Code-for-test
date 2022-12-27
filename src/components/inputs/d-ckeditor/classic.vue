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
            }
        },
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
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
