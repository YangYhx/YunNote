<template>
    <div class="write-note w1170">
      <div class="main-content ">
        <div class="title">
          标题
        </div>
        <div class="input-wrap">
          <el-input v-model="formData.title"></el-input>
        </div>
        <div class="title">
          内筒
        </div>
        <quill-editor
          v-model="formData.content"
          ref="myQuillEditor"
          :options="editorOption"
          @change="onEditorChange($event)"
        >
        </quill-editor>
      </div>
      <div>
        分类：
      </div>

      <el-button type="primary">发布笔记</el-button>
    </div>
</template>

<script>

  import 'quill/dist/quill.snow.css'

  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'

  Quill.register('modules/ImageExtend', ImageExtend)
    export default {
      name: "writeNote",
      components: {quillEditor},
      data() {
        return {
          formData:{
            content: '',
            title:'',
            contentText:''
          },

          // 富文本框参数设置
          editorOption: {
            modules: {
              ImageExtend: {
                loading: true,
                name: 'img',
                action: "https://qiniu.com",
                response: (res) => {
                  return res.info
                }
              },
              toolbar: {
                container: container,
                handlers: {
                  'image': function () {
                    QuillWatch.emit(this.quill.id)
                  }
                }
              }
            }
          }
        }
      },
      methods:{
        onEditorChange({ quill, html, text }){
          console.log(text)
          this.formData.contentText = text
          this.formData.contentText = this.formData.contentText.substring(0,200) + '...'
        }
      }
    }
</script>

<style scoped lang="scss">
  .write-note{
    padding: 60px;
  }

  .main-content{
    margin-top: 30px;
    background: #fff;
    border-radius: 4px;

    box-sizing: border-box;

    .title{
      line-height: 2;
      font-size: 20px;
      font-weight: 600;
      color: #444;
    }
  }



</style>
<style>
  .ql-container{
    min-height: 300px;
  }
</style>
