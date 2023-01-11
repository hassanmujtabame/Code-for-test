<template>
    <ckeditor :id="id" :editor="editor" v-model="editorData" 
    :config="editorConfig" 
    @ready="ckEditorReady"
    @blur="hideToolbar()"
    @focus="showToolbar()"
    ></ckeditor>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: 'd-ckeditor-classic',
    props: {
        value: {
            type: String
        },
        editorConfig: {
            type: [Object, Array],

            default: () => {
                return {
                    // The configuration of the editor.
                }
            }
        }
    },
    data(vm) {
        return {
            id:`editor-${vm.generateRandomString(8)}`,
            editor: ClassicEditor,
            editorData: '<p></p>',
            elementEditor:null,
        };
    },
    watch: {
        value: {
            immediate: true,
            handler(val) {
                this.editorData = val
            }
        },
        editorData() {
            this.$emit('input', this.editorData)
        }
    },
    methods: {
        diplayToolbar(value){
            if(!this.elementEditor) return;

                let elements = this.elementEditor.getElementsByClassName('ck-editor__top');
                elements[0].style.display = value;
            },
            hideToolbar(){
                this.diplayToolbar('none');
            },
            showToolbar(){
                this.diplayToolbar('block');
            },
        ckEditorReady(editor) {
            this.elementEditor = editor.ui.view.element;
            this.hideToolbar()
            if (this.editorConfig.minHeight)
                editor.ui.view.editable.element.style.minHeight = this.editorConfig.minHeight
        }


    }
}
</script>
