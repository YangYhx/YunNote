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
      <div style="margin-top: 20px">
        分类：
        <div style="display: inline-block">
          <el-radio-group v-for="item in categories" :key="item._id" v-model="formData.category">
            <el-radio-button :label="item.name"></el-radio-button>
          </el-radio-group>
        </div>
      </div>

      <el-button type="primary" style="margin-top: 20px" @click="hendlesubmit">发布笔记</el-button>
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
      props:{
        lable:{
          type:String
        }
      },
      data() {
        return {
          formData:{
            content: '',
            title:'',
            contentText:'',
            category:''
          },
          categories:[],

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
        },
        getCategories(){
          this.$axios.get('/category').then( res => {
            this.categories = res.data;
          })
        },
        hendlesubmit(){
          this.$axios.post('/artical',this.formData).then( res => {
            if( res.code === 200){
              this.$message.success('文章发布成功')
              this.$router.push('/index')
            }
          })
        }
      },
      created(){
        this.getCategories();
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
