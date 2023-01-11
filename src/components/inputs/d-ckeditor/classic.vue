<template>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @ready="ckEditorReady"></ckeditor>
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
    data() {
        return {
            editor: ClassicEditor,
            editorData: '<p></p>',
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

        ckEditorReady(editor) {
            if (this.editorConfig.minHeight)
                editor.ui.view.editable.element.style.minHeight = this.editorConfig.minHeight
        }


    }
}
</script>
